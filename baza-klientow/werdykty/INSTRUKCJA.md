# Instrukcja: werdykt reklamowy dla firm z paczki

Pracujesz dla GW Graphic Design (druk wielkoformatowy, oklejanie aut, odzież robocza, szyldy, witryny, druk) w Eindhoven NL. Dla KAŻDEJ firmy z Twojej paczki masz ustalić, **jaka reklama fizyczna i online już tam jest**, i wydać uczciwy werdykt: czy GW może pomóc, czy lepiej odpuścić.

## Zasady twarde
- **Nie kontaktuj żadnej firmy.** Żadnych formularzy, e-maili, telefonów, logowań, rejestracji. Tylko publiczne strony (GET).
- **Nie wymyślaj.** Brak dowodu = „nieustalone”, NIGDY „nie mają reklamy”. Każde twierdzenie ma mieć link i, jeśli się da, datę.
- Nie zapisuj numerów telefonów ani adresów e-mail.
- Zdjęcie z innej firmy o podobnej nazwie nie jest dowodem. Sprawdź, że dotyczy właściwej firmy (miasto, logo, domena).
- Stare zdjęcie (kilka lat) nie daje pewności o stanie obecnym; podaj datę albo „data nieznana”.
- Pracuj od pliku wejściowego z Twoją paczką (JSON z listą firm, w każdej `strona` oraz `strona_html` = już pobrana strona główna).

## Jak sprawdzać (limit ok. 8 pobrań na firmę)
1. Przeczytaj zapisaną stronę główną (`strona_html`): szukaj tekstu o flocie/busach/wagenpark, werkkleding, teamie, realizacjach, vacatures/werken bij, nowej siedzibie, nazwach plików i `alt` obrazów (np. bus, bedrijfswagen, team, pand, winkel, gevel).
2. Pobierz 1–3 podstrony, które mogą mieć zdjęcia: Over ons / Team / Projecten / Werken bij / Contact. `curl -sSL --max-time 30 -A "Mozilla/5.0" URL` (ruch idzie przez proxy; jeśli błąd TLS lub 502, napisz „strona niedostępna z mojego środowiska” i nie próbuj obchodzić).
3. **Obejrzyj zdjęcia**: pobierz 1–4 najbardziej obiecujące obrazy (zespół, flota, front sklepu) do `/tmp/claude-0/-home-user/c7d8b975-c189-52ed-8ecb-a903ab95701a/scratchpad/verdicts/img/` (nazwa z id firmy) i otwórz narzędziem Read (obsługuje obrazy). Opisz tylko to, co naprawdę widać (czy auto ma logo/oklejenie, czy ludzie mają koszulki/kurtki z logo, czy jest szyld). Jeśli obrazu nie da się ocenić, napisz to.
4. Opcjonalnie jedno wyszukiwanie WWW (nazwa + miasto) po aktualnych wzmiankach: przeprowadzka, nowa siedziba, rebranding, zdjęcia floty, wiadomości lokalne. Użyj tylko, gdy strona nic nie daje.
5. Uwaga na datowanie: sygnał zakupowy liczy się tylko z datą i linkiem do konkretnego komunikatu. Samo „rekrutuje” z menu strony nie jest datowane.

## Werdykt (jedno z)
- **JUŻ MAJĄ**: widać dowodami istniejącą spójną reklamę w tych mediach, w których GW miałoby sprzedawać. Wymień media.
- **OPCJA ROZSZERZENIA**: coś mają, ale jest konkretna luka lub okazja do domówienia (np. nowi pracownicy, nowa siedziba, tylko część floty).
- **OKAZJA**: potwierdzona luka lub świeży datowany sygnał (np. przeprowadzka z datą, a witryna/szyld nie wygląda na zrobione).
- **NISKA SZANSA**: powód do odpuszczenia (sieć z centralnymi zakupami, klub/stowarzyszenie, konkurent, firma nieaktywna, dojrzała marka z własnym działem).
- **NIEUSTALONE**: nie da się ocenić; napisz co by to rozstrzygnęło (np. zdjęcie fasady, Street View).
Gdy nie ma dowodu realnej potrzeby, nie dawaj OKAZJA; dawaj „hipoteza: tak”.

## Pola wyjściowe (jedna linia JSON na firmę, plik `.jsonl`)
```
{
 "id": <z wejścia>, "firma": "...", "kategoria": "...",
 "werdykt": "JUŻ MAJĄ|OPCJA ROZSZERZENIA|OKAZJA|NISKA SZANSA|NIEUSTALONE",
 "pewnosc": "wysoka|średnia|niska",
 "dowody": {
   "www": "co widać na stronie (krótko)",
   "auta": "POTWIERDZONE: opis, link, data | nieustalone",
   "odziez": "POTWIERDZONE: opis, link, data | nieustalone",
   "szyld_witryna": "POTWIERDZONE: opis, link, data | nieustalone",
   "druk_banery": "POTWIERDZONE: opis, link, data | nieustalone"
 },
 "aktualny_sygnal": "opis + link + data | brak",
 "usluga_gw": "JEDNA konkretna usługa",
 "hipoteza": true|false,
 "typ_decyzji": "lokalna firma|oddział sieci|franczyza|klub|stowarzyszenie|partner|nieustalone",
 "co_nieustalone": "czego brakuje i jak to sprawdzić",
 "obejrzane_obrazy": <liczba obrazów faktycznie otwartych>,
 "linki": ["..."],
 "uzasadnienie": "2-3 zdania po polsku, bez przesady"
}
```
Wszystkie teksty po polsku. Nie zostawiaj pustych „gotowych” ocen: jeśli zrobiłeś tylko stronę główną, pisz niską pewność i `obejrzane_obrazy: 0`.

## Wyjście
Zapisuj wynik po każdej firmie (dopisuj linię) do pliku `.../verdicts/out/chunk_NN.jsonl` (NN z Twojej paczki), żeby nic nie zginęło przy przerwaniu. Na końcu zwróć krótkie podsumowanie: ile firm ukończono, rozkład werdyktów, ile miało obejrzane obrazy, które się nie udały i dlaczego. Nie wklejaj całych danych w odpowiedzi.

Ścieżka bazowa: `/tmp/claude-0/-home-user/c7d8b975-c189-52ed-8ecb-a903ab95701a/scratchpad/verdicts/`. Pliki wejściowe: `in/chunk_NN.json`.
