<?php
/**
 * GW Graphic Design — quote request handler.
 * Server-side validation, sanitisation, honeypot + time trap, per-IP rate limiting.
 * No credentials are needed or stored: mail is sent with PHP mail() on the host.
 * Responds with JSON for fetch() requests, or redirects back for plain form posts (no JavaScript).
 */
declare(strict_types=1);

const MAIL_TO      = 'design@gwgraphic.com';
const MAIL_FROM    = 'noreply@gwgraphic.com';   // must be an address on the sending domain (SPF/DKIM)
const RATE_MAX     = 5;                          // requests …
const RATE_WINDOW  = 3600;                       // … per hour per IP
const MIN_SECONDS  = 3;                          // faster than this after page load = bot
const DATA_DIR     = __DIR__ . '/.data';         // protected by .data/.htaccess (Require all denied)

header('X-Content-Type-Options: nosniff');
header('Cache-Control: no-store');

$wantsJson = stripos($_SERVER['HTTP_ACCEPT'] ?? '', 'application/json') !== false;
$lang = in_array($_POST['lang'] ?? '', ['nl', 'en', 'pl'], true) ? $_POST['lang'] : 'nl';
$home = ['nl' => '/', 'en' => '/en/', 'pl' => '/pl/'][$lang];

function respond(bool $ok, string $error = '', array $fields = []): void {
    global $wantsJson, $home;
    if ($wantsJson) {
        header('Content-Type: application/json; charset=utf-8');
        http_response_code($ok ? 200 : ($error === 'rate' ? 429 : ($error === 'method' ? 405 : ($error === 'send' ? 502 : 400))));
        echo json_encode(['ok' => $ok, 'error' => $error ?: null, 'fields' => $fields]);
    } else {
        // Fallback without JavaScript: a small confirmation page in the site's style
        global $lang;
        $txt = [
            'nl' => [['Bedankt!', 'Je aanvraag is verstuurd. We nemen zo snel mogelijk contact met je op.'], ['Niet verstuurd', 'Controleer je naam, e-mailadres en bericht en probeer het opnieuw, of mail naar design@gwgraphic.com.'], 'Terug naar de website'],
            'en' => [['Thank you!', 'Your request has been sent. We will get back to you as soon as possible.'], ['Not sent', 'Please check your name, email address and message and try again, or email design@gwgraphic.com.'], 'Back to the website'],
            'pl' => [['Dziękujemy!', 'Zapytanie zostało wysłane. Odezwiemy się najszybciej, jak to możliwe.'], ['Nie wysłano', 'Sprawdź imię, adres e-mail i wiadomość i spróbuj ponownie albo napisz na design@gwgraphic.com.'], 'Wróć na stronę'],
        ][$lang];
        [$h, $p] = $ok ? $txt[0] : $txt[1];
        http_response_code($ok ? 200 : ($error === 'rate' ? 429 : 400));
        header('Content-Type: text/html; charset=utf-8');
        echo '<!doctype html><html lang="' . $lang . '"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1"><meta name="robots" content="noindex"><title>' . htmlspecialchars($h) . ' | GW Graphic Design</title><link rel="stylesheet" href="/assets/css/style.css"></head>'
           . '<body><main class="dark legal-hero" style="min-height:100svh;display:flex;align-items:center"><div class="wrap"><img src="/assets/img/brand/gw-mark-white.svg" width="64" height="64" alt="GW Graphic Design">'
           . '<h1 class="h2" style="margin-top:40px">' . htmlspecialchars($h) . '</h1><p class="lead" style="margin-top:20px">' . htmlspecialchars($p) . '</p>'
           . '<p style="margin-top:30px"><a class="btn" href="' . $home . '">' . htmlspecialchars($txt[2]) . '</a></p></div></main></body></html>';
    }
    exit;
}

if (($_SERVER['REQUEST_METHOD'] ?? '') !== 'POST') {
    header('Allow: POST');
    respond(false, 'method');
}

/* ---------- spam protection (silent success so bots learn nothing) ---------- */
if (trim((string)($_POST['website'] ?? '')) !== '') respond(true);
$ts = (int)($_POST['ts'] ?? 0);
if ($ts > 0 && (time() * 1000 - $ts) < MIN_SECONDS * 1000) respond(true);

/* ---------- rate limit (hashed IP, no raw IP stored) ---------- */
if (!is_dir(DATA_DIR)) @mkdir(DATA_DIR, 0700, true);
$ipHash = hash('sha256', ($_SERVER['REMOTE_ADDR'] ?? '') . '|' . date('Y-m-d'));
$rateFile = DATA_DIR . '/rate-' . substr($ipHash, 0, 32) . '.json';
$now = time();
$hits = [];
if (is_file($rateFile)) {
    $hits = array_filter((array)json_decode((string)file_get_contents($rateFile), true), fn($t) => is_int($t) && $t > $now - RATE_WINDOW);
}
if (count($hits) >= RATE_MAX) respond(false, 'rate');
// clean up stale files now and then
if (mt_rand(1, 20) === 1) foreach (glob(DATA_DIR . '/rate-*.json') ?: [] as $f) if (filemtime($f) < $now - RATE_WINDOW) @unlink($f);

/* ---------- validation + sanitisation ---------- */
function clean(string $v, int $max, bool $multiline = false): string {
    $v = str_replace("\0", '', $v);
    $v = $multiline ? preg_replace("/\r\n?/", "\n", $v) : preg_replace('/[\r\n\t]+/', ' ', $v);
    $v = preg_replace('/[\x00-\x08\x0B\x0C\x0E-\x1F\x7F]/u', '', (string)$v);
    $v = trim((string)$v);
    return mb_substr($v, 0, $max, 'UTF-8');
}
$name    = clean((string)($_POST['name'] ?? ''), 100);
$company = clean((string)($_POST['company'] ?? ''), 120);
$email   = clean((string)($_POST['email'] ?? ''), 160);
$phone   = clean((string)($_POST['phone'] ?? ''), 40);
$message = clean((string)($_POST['message'] ?? ''), 3000, true);
$allowed = ['Branding','Kleding','Drukwerk','Voertuigen','Websites','Gadgets','Iets anders','Apparel','Print','Vehicles','Something else','Odzież','Druk','Pojazdy','Strony www','Gadżety','Coś innego'];
$services = array_values(array_intersect(array_map(fn($s) => clean((string)$s, 40), (array)($_POST['service'] ?? [])), $allowed));

$bad = [];
if (mb_strlen($name) < 2) $bad[] = 'name';
if (!filter_var($email, FILTER_VALIDATE_EMAIL)) $bad[] = 'email';
if (mb_strlen($message) < 5) $bad[] = 'message';
if ($phone !== '' && !preg_match('/^[0-9+()\/\-\s.]{6,40}$/', $phone)) $phone = '';
if ($bad) respond(false, 'invalid', $bad);

/* ---------- send ---------- */
$subject = 'Offerteaanvraag via gwgraphic.com: ' . ($company !== '' ? $company : $name);
$body = "Nieuwe aanvraag via gwgraphic.com ({$lang})\n\n"
      . "Naam:     {$name}\n"
      . "Bedrijf:  " . ($company ?: '-') . "\n"
      . "E-mail:   {$email}\n"
      . "Telefoon: " . ($phone ?: '-') . "\n"
      . "Diensten: " . ($services ? implode(', ', $services) : '-') . "\n\n"
      . "Bericht:\n{$message}\n";
$headers = [
    'From: GW Graphic Design website <' . MAIL_FROM . '>',
    'Reply-To: ' . $email,                       // validated address, no line breaks possible
    'Content-Type: text/plain; charset=UTF-8',
    'Content-Transfer-Encoding: 8bit',
    'X-Mailer: gwgraphic.com',
];
// count every validated attempt (also failed deliveries) toward the limit
$hits[] = $now;
@file_put_contents($rateFile, json_encode(array_values($hits)), LOCK_EX);

$sent = @mail(MAIL_TO, '=?UTF-8?B?' . base64_encode($subject) . '?=', $body, implode("\r\n", $headers), '-f' . MAIL_FROM);
if (!$sent) respond(false, 'send');
respond(true);
