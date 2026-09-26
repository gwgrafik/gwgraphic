# GW Graphic Design — PROMPT V10 (final polish / production)

## 0. KONTEKST I ZASADA NADRZĘDNA

Pracujemy nad V10 strony GW Graphic Design.
**V09 jest bazą.** Kierunek wizualny, struktura i charakter V09 są DOBRE.
Nie twórz strony od zera. Nie zmieniaj projektu tylko po to, żeby był „inny”.
V10 = dopracowana, szybsza, bardziej profesjonalna i bardziej sprzedażowa ewolucja V09.

Kod V09 jest w repozytorium (`src/` — generator, `public/` — gotowa strona, `README.md` — dokumentacja).
Najpierw przeczytaj kod i README, potem zmieniaj. Każda treść jest w `src/content.mjs` i `src/legal.mjs` — zmieniaj ją tam, nie w wygenerowanym HTML.

Hierarchia przy konfliktach:
1. Prawdziwe dane i materiały (nic nie wymyślamy)
2. Czytelność i UX
3. Ten prompt
4. Wygląd V09 (zmieniaj tylko z konkretnym powodem)

## 1. DECYZJE JUŻ PODJĘTE (nie pytaj o nie ponownie)

| Temat | Decyzja |
|---|---|
| Środowisko | Wersja testowa pod `gwgraphic.com/gw/v10/`. Wszystkie strony `noindex, nofollow`. Canonical i hreflang nadal wskazują docelową domenę `https://www.gwgraphic.com/`. Ścieżki zasobów względne, żeby działało w podkatalogu. Sitemap/robots przygotowane pod domenę docelową. |
| Język bazowy | **PL = źródło sensu** (piszesz najpierw PL). **NL = główny język strony i SEO** (NL jest pod `/`). EN trzeci. Żadnych tłumaczeń słowo w słowo. |
| Forma wypowiedzi | Pierwsza osoba liczby pojedynczej na stronie („projektuję”, „montuję”, „odpowiem”). **Strony prawne zostają w formie neutralnej/formalnej** (bez „ja”). |
| „O GW” | Bez zdjęcia. Zostaje drewniany blok z wypalonym logo GW. Bez placeholderów typu „tu będzie zdjęcie”. |
| KvK | **KvK: `[WPISZ NUMER KvK]`** — jeśli pole w tym prompcie nadal zawiera nawias kwadratowy, NIE pokazuj KvK na stronie i dopisz go do listy braków w README. Nie wymyślaj. BTW i adres: tak samo — pokazuj tylko jeśli zostały tu wpisane. |
| Opinie Google | Oryginał (EN) zostaje 1:1. W wersji PL i NL pod oryginałem tłumaczenie **wyraźnie oznaczone** („Tłumaczenie” / „Vertaling”), z `lang` ustawionym poprawnie dla obu tekstów. Tłumaczenie wierne, bez upiększania. |
| Animacja otwarcia | Tylko przy **pierwszej wizycie w ogóle** (zapis w `localStorage`, klucz np. `gw-intro-seen`). Później nigdy. Brak animacji przy `prefers-reduced-motion`. Zaktualizuj politykę cookies (typ: localStorage, cel, czas: do wyczyszczenia przez użytkownika) i przycisk „Wyczyść zapisane dane”. |
| Witryny i szyby | Część usługi **Oklejanie** (auta, busy, witryny, szyby) — nie osobna usługa. |
| Portfolio | Zostaje 7 projektów. Projekty z dużą liczbą materiałów (≥ 4 zdjęcia / ≥ 3 rodzaje nośników) dostają rozbudowane case study („post”). Projekty z małą ilością materiału zostają jako karta z krótkim opisem i galerią. |
| Formularz | Dochodzi pole **„Preferowany kontakt”: e-mail / telefon / WhatsApp** (radio, domyślnie e-mail). Formularz nadal wysyła e-mail. Obok głównego przycisku drugi: **„Wyślij przez WhatsApp”** — otwiera `wa.me` z gotową treścią z formularza (bez API, bez kluczy). |
| GitHub | Pomijamy. Pracujesz lokalnie, commitujesz lokalnie, na końcu pakujesz `public/` i źródła do ZIP. |

## 2. CEL

Strona ma przedstawiać GW Graphic Design jako profesjonalne studio reklamy, które robi całość:

**PROJEKT → PRODUKCJA → MONTAŻ**

Największa przewaga: klient nie szuka osobno grafika, drukarni, firmy od odzieży, oklejania auta i osoby od strony internetowej. **Jedna osoba prowadzi projekt od początku do końca.**

Wygląd dobrego, nowoczesnego studia — ale z osobistym charakterem firmy Grzegorza Woźniaka. Nie udawaj dużej agencji. Bez agencyjnego żargonu.

W ciągu kilku sekund użytkownik ma zrozumieć:
1. GW projektuje i realizuje reklamę firmy od początku do końca.
2. Mogę tu zrobić logo, druk, odzież, oklejenie auta i stronę internetową — i całość będzie spójna.
3. Widzę prawdziwe realizacje.
4. Rozmawiam bezpośrednio z osobą, która to wykonuje.
5. Wiem, gdzie kliknąć, żeby zapytać o wycenę.

## 3. COPY — PEŁNY COPYWRITING, NIE KOREKTA

Przepisz wszystkie teksty: hero, menu, usługi, projekty, case studies, proces, opinie, O GW, formularz (w tym komunikaty błędów i sukcesu), CTA, kontakt, footer, microcopy, etykiety przycisków, podpisy, title, description, OG, alt teksty.

Oceniaj każdy tekst pod kątem: naturalność, sprzedażowość, wiarygodność, SEO, długość, czytelność, ton marki, UX, brak powtórzeń, konkret.

**Ton:** konkretny, nowoczesny, fachowy, bezpośredni, pewny swojej pracy. Krótkie zdania. Jeden konkret zamiast pięciu przymiotników. Bez wykrzykników (max 1 na stronę, najlepiej 0). Bez emoji.

**Zakazane frazy** (i ich odpowiedniki w NL/EN): „kompleksowe rozwiązania”, „najwyższa jakość”, „indywidualne podejście”, „Twoja wizja, nasza pasja”, „przenieś biznes na wyższy poziom”, „wyróżnij się na tle konkurencji”, „od pomysłu do realizacji” (najwyżej raz na całej stronie), „od A do Z”, puste slogany.

**Korzyść przed listą produktów.** Najpierw efekt/zastosowanie, potem konkretne produkty (lista jako tagi).
Kierunek (nie kopiuj): „Samochód firmowy pracuje na Twoją markę każdego dnia. Projekt przygotowuję pod konkretny model auta i sam montuję folię.”

**Pierwsza osoba:** „projektuję / przygotowuję / realizuję / montuję / odpowiem / pomogę”. Naturalnie — nie zaczynaj każdego zdania od „ja”. Kluczowa myśl do przekazania w kilku miejscach różnymi słowami: *od pierwszego projektu po gotową realizację masz kontakt z jedną osobą.*

## 4. HERO

Zachowaj:
- linię **Projekt → Produkcja → Montaż**
- headline **Reklama w każdej formie.** (NL: „Reclame in elke vorm.”, EN: „Advertising in any form.”)
- mechanizm zmieniającego się słowa (jak w V09)

Konstrukcja PL: **„Twój partner od [słowo]”**. Każde słowo musi poprawnie gramatycznie łączyć się z „Twój partner od…” (dopełniacz). Punkt wyjścia do weryfikacji: *brandingu, oklejania aut, odzieży firmowej, druku, stron internetowych*. Ostatnie hasło dobierz sam — ma zamykać listę (np. całość wizerunku firmy), nie może być frazesem.
NL i EN: zbuduj własną naturalną konstrukcję z tym samym efektem (nie tłumacz „partner od” dosłownie). Sprawdź każde słowo w każdej kombinacji.

Rotacja: spokojna, elegancka. **Zero przesunięć layoutu** — zarezerwuj szerokość/wysokość pod najdłuższe słowo w danym języku (również na mobile, gdzie słowo może przejść do nowej linii). Bez skakania, bez agresywnych animacji.

Tekst pod headline: napisz od nowa, **1–2 krótkie zdania**. Ma zawierać: branding, produkcję, montaż, jedną osobę do kontaktu, firmy w Holandii, Belgii i Niemczech. **Nie koncentruj się na Eindhoven** (Eindhoven tylko jako lokalizacja, np. w meta linii pod hero).

CTA: główne **„Zapytaj o wycenę”**, drugie **„Zobacz projekty”**.

## 5. USŁUGI — NOWA KOLEJNOŚĆ I NAZWY

| Nr | Kategoria (PL) | Kierunek treści |
|---|---|---|
| 01 | **Branding** | logo, identyfikacja, pliki do druku i strony |
| 02 | **Oklejanie** (auta, busy, witryny, szyby) | projekt pod konkretny model, własny montaż, od napisów po pełny wrap, witryny sklepowe i szyby |
| 03 | **Odzież firmowa** | koszulki, bluzy, kurtki, odzież robocza; DTF/flex |
| 04 | **Druk** | wizytówki, ulotki, plakaty, roll-upy, banery, flagi, naklejki, tablice |
| 05 | **Strony internetowe** | patrz niżej |
| 06 | **Gadżety reklamowe** | kubki, magnesy, naklejki, przypinki |

Nazwy NL: sprawdź branżowo — np. *Huisstijl & logo*, *Autobelettering & raambelettering*, *Bedrijfskleding*, *Drukwerk*, *Websites*, *Relatiegeschenken* (zweryfikuj, wybierz najbardziej naturalne).
Nazwa kategorii „Strony internetowe”; w zdaniach do klienta liczba pojedyncza („strona internetowa dla Twojej firmy”). Nigdy „Strony www” jako nazwa.

Każda usługa: nazwa + krótki podtytuł + 2–3 zdania (korzyść → konkret) + tagi + **kontekstowe CTA**:
„Zapytaj o branding / o oklejanie / o odzież / o druk / o stronę internetową / o gadżety”.
Klik = przewinięcie do formularza + automatyczne zaznaczenie usługi (mechanizm istnieje w V09 — zachowaj i dostosuj do nowej kolejności).

Sprawdź, czy zdjęcia w sliderach nadal pasują do nowej kolejności i nazw (witryny/szyby — użyj istniejących zdjęć tylko jeśli naprawdę pokazują witrynę/szybę; nie przypisuj zdjęć niezgodnie z treścią).

### Strony internetowe — napisz od nowa
Nie obiecuj pozycji w Google. Nie pisz „widoczna w Google” jako gwarancji. Nie pisz „szybka strona” w sensie „tania i na szybko”.
Ma komunikować: projekt na wymiar, spójność z identyfikacją firmy, dobre działanie na telefonie i komputerze, wydajność, podstawy technicznego SEO, przejrzystą strukturę, przygotowanie do kontaktu z klientem.

## 6. PROCES WSPÓŁPRACY

01 Projekt · 02 Produkcja · 03 Montaż. Krótko, bez ściany tekstu.
Usuń „poprawiane do skutku” — nie obiecujemy nielimitowanych poprawek. Sens: *projekt dopracowujemy wspólnie, zanim trafi do produkcji.*
Proces ma pokazywać przewagę: jedna osoba na każdym etapie.

## 7. PORTFOLIO / CASE STUDIES

- 7 projektów (Kristofix, Maniek Diensten, Patera Klussenbedrijf, Custom Garage Eindhoven, Podtech, WeldPolako, PMK Klusjesman). Jakość > liczba.
- Case study pokazuje drogę jednej marki przez nośniki, np.: **Logo → Wizytówki → Odzież → Samochód → Strona internetowa** (tylko te etapy, które naprawdę wykonano dla danego klienta — dane w `src/content.mjs`).
- Projekty z dużą ilością materiału: rozbudowany „post” (krótki opis wyzwania/efektu w 2–3 zdaniach, sekcje wg nośnika, podpisy zdjęć, CTA). Nie dopisuj historii, których nie znamy (żadnych cytatów klientów, liczb, terminów).
- Nie wymyślaj realizacji, klientów, usług, zdjęć. Nie retuszuj prac klientów.

## 8. O GW GRAPHIC DESIGN

Zachowaj ideę: **Grafik. Wykonawca. Jedna osoba do kontaktu.** (można dopracować brzmienie, idea zostaje).
Grzegorz Woźniak: projektuje, przygotowuje pliki, realizuje produkcję, projektuje oklejenia i sam montuje folie, tworzy strony internetowe, prowadzi klienta przez cały proces.
Wartość: klient nie jest przekazywany między grafikiem, handlowcem, drukarnią i wykonawcą. Pokaż to jako przewagę, nie ograniczenie. Bez „one-man army”.

## 9. FORMULARZ

- Nagłówek w stylu „Czego potrzebujesz?” (lub lepsza naturalna wersja), „Odpowiem…” zamiast „odpowiemy”.
- Pola: usługa (chipy, opcjonalnie) · imię · firma (opcjonalnie) · e-mail · telefon (opcjonalnie) · **preferowany kontakt** (e-mail / telefon / WhatsApp) · wiadomość. Nic więcej. Bez uploadu.
- Walidacja: gdy wybrano telefon lub WhatsApp jako preferowany kontakt → telefon wymagany.
- Przycisk „Wyślij zapytanie” (e-mail przez `send.php`) + przycisk „Wyślij przez WhatsApp” (wa.me z treścią formularza; bez wysyłki danych na serwer).
- `send.php`: dodaj pole preferowanego kontaktu (whitelist wartości), zachowaj walidację, honeypot, time-trap, rate limit.
- Przepisz wszystkie komunikaty (błędy, sukces, fallback bez JS) w 3 językach.

## 10. SEO

Najpierw człowiek, potem wyszukiwarka. Zero keyword stuffingu. „Eindhoven” tylko tam, gdzie naturalne (lokalizacja, meta linia, dane firmy, schema) — nie w każdym akapicie.
Naturalnie uwzględnij: Holandia/Belgia/Niemcy, branding, logo, druk, odzież firmowa, oklejanie aut i busów, oklejanie witryn, folie, strony internetowe, materiały reklamowe.
Jeden H1, logiczne H2/H3. Title (≤ ~60–65 znaków gdzie się da), description (≤ ~155), canonical, hreflang (nl/en/pl/x-default), OG, Twitter card, schema.org (Organization + ProfessionalService, tylko prawdziwe dane — bez ocen, godzin, cen, współrzędnych). Breadcrumbs tylko jeśli istnieją. Alt teksty opisują zdjęcie.
Test pod `/gw/v10/` → `noindex`.

## 11. PL / NL / EN

PL piszesz pierwszy (sens). NL — język główny: sprawdź branżowe słownictwo (reclame, huisstijl, autobelettering, raambelettering, bedrijfskleding, drukwerk, websites). EN — naturalny British/neutral English.
Te same fakty, hierarchia, oferta i struktura CTA w każdym języku; język ma brzmieć jak od native copywritera. Nie mieszaj języków (wyjątek: oryginalne opinie z oznaczonym tłumaczeniem).

## 12. UX — jedna sekcja = jedno pytanie

Hero: Co robisz? · Usługi: Co możesz dla mnie zrobić? · Portfolio: Czy robisz to dobrze? · Proces: Jak wygląda współpraca? · Opinie: Czy inni są zadowoleni? · O GW: Z kim będę pracować? · Kontakt: Co mam zrobić teraz?
Nie dodawaj sekcji, które nie odpowiadają na nowe pytanie.

## 13. DESIGN — BEZ REWOLUCJI

Zachowaj: charakter V09, drewno, czerń/biel, logo, animację otwarcia, dużą typografię, kontrast, układ portfolio, styl zdjęć, rytm ciemne/jasne/drewno.
Możesz poprawiać: spacing, rytm, skalę typografii, długość linii, proporcje sekcji, responsywność, mikroanimacje, hover, hierarchię CTA, czytelność, ekspozycję zdjęć. **Każda zmiana z konkretnym powodem UX** — wypisz je w raporcie.

## 14. ANIMACJE

Subtelne, płynne, szybkie. Nie opóźniają dostępu do treści, zero CLS, tylko `transform`/`opacity` gdzie się da, `prefers-reduced-motion` respektowane.
Animacja otwarcia: zostaje wizualnie jak w V09 (logo wierne oryginałowi), ale: pierwsza wizyta w ogóle, każde kliknięcie/klawisz/scroll pomija, sprawdź płynność na mobile i wpływ na LCP.

## 15. MOBILE

Przejrzyj ręcznie: 360, 390, 430, 768, 1024, 1440, 1920 px. Szczególnie: hero, rotujące słowo, menu, slidery usług, zdjęcia, portfolio, case study, formularz, footer, wielkość przycisków (min. 44 px), łamanie linii, nagłówki, odstępy.
Zero: mikroskopijnych fontów, poziomego scrolla, złych kadrów, nachodzących tekstów, layout shiftów, ogromnych pustych przestrzeni.

## 16. PERFORMANCE

Cel (mobile, Lighthouse): Performance 90+, Accessibility 95+, Best Practices 95+, SEO 95+ (SEO może być niższe przez `noindex` na teście — to OK, zaznacz w raporcie).
Sprawdź: wagę i rozdzielczości zdjęć, AVIF/WebP, `srcset`/`sizes`, lazy loading poniżej folda, obraz LCP, preload tylko krytycznych zasobów, fonty, nieużywany CSS/JS, render-blocking, CLS, DOM size, duplikaty.
Bez ciężkich bibliotek. Nie psuj jakości zdjęć portfolio.
Jeśli przy okazji można zmniejszyć paczkę na serwerze bez straty jakości (np. rozmiar 1000 px tylko tam, gdzie naprawdę używany) — zrób to i podaj liczby.

## 17. DOSTĘPNOŚĆ

Kontrast, focus, klawiatura, semantyczny HTML, etykiety formularza, komunikaty błędów, alt, reduced motion, kolejność nagłówków, `lang` przy cytatach i tłumaczeniach. Natywny HTML zamiast zbędnej ARIA.

## 18. KOD, BEZPIECZEŃSTWO, JAKOŚĆ

Nie psuj działających mechanizmów. Usuń martwy kod, debug, `console.log`, nieużywane style, duplikaty.
Sprawdź: formularz, walidację, spam protection, linki, mail, tel, WhatsApp, social media, przełączanie języków.
Zero błędów w konsoli, zero 404, zero placeholderów, zero Lorem Ipsum. `npm run check` musi przejść.

## 19. COOKIES / PRAWO

Nadal brak analityki i trackingu → brak banera Accept/Reject.
Zaktualizuj politykę cookies o `localStorage` (animacja otwarcia). Nie zmieniaj treści prawnych na wymyślone. KvK/BTW/adres — tylko jeśli wpisane w sekcji 1.

## 20. NIE DODAWAJ

Bloga, newslettera, FAQ pod SEO, cennika, liczników, „10+ lat doświadczenia”, stocków, zdjęć AI, fikcyjnych logotypów, popupów, chatbota, zbędnych ikon, sekcji „bo agencje tak mają”.

## 21. TRYB PRACY

1. Przeczytaj V09 (kod + README) i wypisz krótko: **dobre — zostaje / przeciętne — poprawiam / problemy — naprawiam / zbędne — usuwam.**
2. Najpierw napisz pełne copy PL, potem NL i EN (w `src/content.mjs`).
3. Wprowadź zmiany w kodzie.
4. Zbuduj, przetestuj w przeglądarce (wszystkie breakpointy, 3 języki, formularz, reduced motion, klawiatura).
5. Audyt końcowy: DESIGN · COPY · UX · MOBILE · SEO · PERFORMANCE · ACCESSIBILITY · LINKS · FORMS · LANGUAGES · CONSISTENCY. Jeśli znajdziesz słabszy element — popraw przed oddaniem.
6. Commit lokalny + ZIP (`public/` i źródła) do pobrania.
7. Raport: co zmieniono i dlaczego, wyniki pomiarów (waga, LCP/CLS, Lighthouse jeśli możliwy), lista braków danych.

**Najważniejsze:** V10 ma wyglądać jak do końca dopracowana V09, a nie kolejny redesign.
