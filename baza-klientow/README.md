# Baza potencjalnych klientów — region Eindhoven

Stan: 2026-10-10. Autor: Claude. **Nikt nie był kontaktowany.** Kontakt tylko po decyzji Grzegorza.

## Co jest w środku

- `baza-klientow.xlsx` — wszystko w jednym pliku: zakładka **Podsumowanie**, zakładka **TOP – priorytet A** i osobna zakładka dla każdej kategorii (z filtrami).
- `csv/` — te same dane, jeden plik na kategorię (separator `;`, UTF-8, otwiera się w Excelu).
- `narzedzia/` — skrypty i surowa lista firm z wyszukiwarki, żeby ChatGPT/Claude mogli powtórzyć i sprawdzić wynik.

**Razem: 3532 firm** w 18 kategoriach, obszar: Eindhoven, Veldhoven, Best, Son en Breugel, Nuenen, Geldrop-Mierlo, Helmond, Waalre, Valkenswaard, Heeze, Oirschot i okolice.

## Skąd dane

1. **OpenStreetMap** (wycinek Noord-Brabant z 2026-10-09): wszystkie firmy z nazwą w wybranych branżach w prostokącie wokół Eindhoven. Dane © OpenStreetMap contributors, licencja ODbL.
2. **Wyszukiwarka firm (Exa, dane w stylu LinkedIn)** dla branż słabo widocznych na mapie (dekarze, budowlanka, instalatorzy, ogrody, sprzątanie, transport, malarze, szkoły jazdy): liczba pracowników, zmiana zatrudnienia rok do roku, rok założenia, posty o rekrutacji.
3. **Automatyczny przegląd strony głównej** każdej firmy ze stroną (2435 adresów, 2026-10-10): HTTPS, wersja na telefon (`viewport`), rok w stopce ©, system strony, linki do social media, słowa-sygnały (rekrutacja, przeprowadzka/nowa lokalizacja, sklep online).

## Jak czytać ocenę

| Pole | Znaczenie |
|---|---|
| Stan strony: **OK** | strona działa, HTTPS, wersja na telefon, stopka 2022+ albo brak roku |
| **PRZESTARZAŁA** | brak HTTPS **lub** brak wersji na telefon **lub** rok w stopce ≤ 2021 |
| **BŁĄD STRONY (do potwierdzenia)** | adres zwrócił błąd 4xx/5xx; może to być stary podstronowy link z mapy — sprawdzić ręcznie |
| **NIE ZNALEZIONO STRONY W DANYCH** | mapa nie ma adresu strony. **To nie znaczy, że firma nie ma strony** — do sprawdzenia |
| **BRAK STRONY** | według danych firmy (wyszukiwarka) brak własnej strony, tylko np. LinkedIn |
| **NIEUSTALONE** | strona blokuje roboty (403/429) albo moje środowisko nie mogło się połączyć — nie oceniamy |
| Oklejenie aut / odzież / witryna | **zawsze NIEUSTALONE** — bez zdjęć lub wizji lokalnej nie wiadomo, co mają. Nigdy nie piszemy „nie mają” |
| Social media (znalezione) | linki znalezione na stronie lub w mapie. Puste = **nie znaleziono**, nie „brak” |
| Sygnały zakupu | rekrutacja, przeprowadzka/nowa lokalizacja, wzrost zatrudnienia, nowa firma, sklep online |
| Priorytet A/B/C | punkty: dopasowanie branży do usług GW (auta/odzież = najwyżej) + luki online + sygnały; sieci/franczyzy −4 |

## Podsumowanie kategorii

| Kategoria | Firm | Priorytet A | Priorytet B | Strona OK | Strona przestarzała | Strona z błędem | Brak strony (dane firmy) | Nie znaleziono strony w danych | Nieustalone | Z sygnałem zakupu | Sieci |
|---|---|---|---|---|---|---|---|---|---|---|---|
| Dekarze | 11 | 1 | 9 | 9 | 0 | 0 | 0 | 0 | 2 | 10 | 0 |
| Budowlanka i remonty | 31 | 2 | 24 | 22 | 1 | 0 | 1 | 3 | 4 | 19 | 0 |
| Malarze | 8 | 1 | 5 | 4 | 1 | 1 | 0 | 0 | 2 | 4 | 0 |
| Instalatorzy i elektrycy | 34 | 5 | 24 | 19 | 4 | 0 | 0 | 7 | 4 | 19 | 0 |
| Ogrody i zieleń | 14 | 5 | 7 | 10 | 3 | 0 | 0 | 1 | 0 | 7 | 0 |
| Sprzątanie | 21 | 6 | 12 | 15 | 1 | 2 | 0 | 0 | 3 | 15 | 0 |
| Transport i logistyka | 20 | 3 | 14 | 12 | 2 | 0 | 1 | 2 | 3 | 16 | 1 |
| Motoryzacja | 169 | 7 | 81 | 73 | 10 | 3 | 0 | 74 | 9 | 29 | 47 |
| Szkoły jazdy | 11 | 0 | 7 | 7 | 0 | 0 | 0 | 2 | 2 | 5 | 0 |
| Inne rzemiosło | 61 | 1 | 42 | 23 | 5 | 1 | 0 | 23 | 9 | 9 | 0 |
| Fryzjerzy i beauty | 346 | 0 | 26 | 118 | 17 | 6 | 0 | 188 | 17 | 41 | 12 |
| Zdrowie i fizjoterapia | 102 | 0 | 25 | 53 | 11 | 1 | 0 | 27 | 10 | 31 | 2 |
| Fitness i sport | 229 | 0 | 11 | 90 | 2 | 2 | 0 | 129 | 6 | 35 | 11 |
| Gastronomia | 1414 | 1 | 140 | 671 | 78 | 22 | 0 | 546 | 97 | 302 | 95 |
| Sklepy lokalne | 520 | 5 | 54 | 277 | 36 | 12 | 0 | 161 | 34 | 155 | 114 |
| Biura i usługi B2B | 507 | 0 | 23 | 249 | 20 | 10 | 0 | 198 | 30 | 159 | 9 |
| Partnerzy (dostawcy) | 2 | 0 | 0 | 1 | 1 | 0 | 0 | 0 | 0 | 1 | 0 |
| Organizacje i stowarzyszenia | 32 | 0 | 0 | 23 | 3 | 0 | 0 | 6 | 0 | 5 | 0 |
| RAZEM | 3532 | 37 | 504 | 1676 | 195 | 60 | 2 | 1367 | 232 | 862 | 291 |

## Najlepsi kandydaci w każdej kategorii (max 8)

Pełne listy są w Excelu. Kolumna „Szansa dla GW” w Excelu mówi, co konkretnie można zaproponować.

### Dekarze

| Prio | Firma | Miasto | Strona | Stan strony | Sygnały | Szansa dla GW |
|---|---|---|---|---|---|---|
| A | Dakdekkersbedrijf Verhoeven B.V. | Budel (projekty w Eindhoven) | https://verhoevendak.nl/ | OK | rekrutuje; duże projekty w Eindhoven (Trudo, Woonbedrijf) 2025; rośnie zatrudnienie +50.0% | materiały do social media; oklejenie aut, odzież robocza, tablice (do sprawdzenia na zdjęciach); odzież/okleje |
| B | A. van Diessen Dakbedekkingen B.V. | Valkenswaard | https://vandiessendak.nl/ | OK | rekrutuje; bardzo aktywny LinkedIn, duże projekty Helmond/Eindhoven 2026 | oklejenie aut, odzież robocza, tablice (do sprawdzenia na zdjęciach); odzież/oklejenie dla nowych ludzi i aut |
| B | dakAlliance B.V. | Eindhoven | https://dakalliance.nl/ | OK | rekrutuje; aktywny LinkedIn (projekt Helmond 2025-11) | oklejenie aut, odzież robocza, tablice (do sprawdzenia na zdjęciach); odzież/oklejenie dla nowych ludzi i aut |
| B | Heesmans Dakwerken | Mierlo | https://heesmansdakwerken.nl/ | OK | rekrutuje; potroiło zatrudnienie | oklejenie aut, odzież robocza, tablice (do sprawdzenia na zdjęciach); odzież/oklejenie dla nowych ludzi i aut |
| B | v.d. Hurk & Doezé Dakwerken | Heeze | https://hurkdoeze.nl/ | OK | rekrutuje; wg strony ok. 45 fachowców | oklejenie aut, odzież robocza, tablice (do sprawdzenia na zdjęciach); odzież/oklejenie dla nowych ludzi i aut |
| B | Van der Meer Dakbedekkingen B.V. | Eindhoven | https://vandermeerdakbedekking.nl/ | OK | domena z KOMO/Company.info (audyt ChatGPT); działanie strony do sprawdzenia | materiały do social media; oklejenie aut, odzież robocza, tablice (do sprawdzenia na zdjęciach) |
| B | Van Doorn Dakspecialist (oddział Veldhoven) | Veldhoven (oddział; centrala Oud-Gastel) | https://vandoorndakspecialist.nl/ | OK | rekrutuje; rośnie zatrudnienie; większa firma, centrala poza regionem | oklejenie aut, odzież robocza, tablice (do sprawdzenia na zdjęciach); odzież/oklejenie dla nowych ludzi i aut |
| B | ZND Nedicom | Eindhoven | https://zndnedicom.nl/ | OK | rekrutuje; rośnie zatrudnienie; dach + elewacje + solar; rośnie zatrudnienie +9.6% | oklejenie aut, odzież robocza, tablice (do sprawdzenia na zdjęciach); odzież/oklejenie dla nowych ludzi i aut |

### Budowlanka i remonty

| Prio | Firma | Miasto | Strona | Stan strony | Sygnały | Szansa dla GW |
|---|---|---|---|---|---|---|
| A | Stucadoorsbedrijf W. Derhaag | Eindhoven | https://derhaag.nl/ | OK | rekrutuje; rośnie zatrudnienie | materiały do social media; oklejenie aut, odzież robocza, tablice (do sprawdzenia na zdjęciach); odzież/okleje |
| A | Top Deuren Veldhoven | Veldhoven | — | BRAK STRONY | oddział rośnie, szuka montażysty (2025) | strona WWW + identyfikacja; oklejenie aut, odzież robocza, tablice (do sprawdzenia na zdjęciach); odzież/oklej |
| B | Aannemersbedrijf Van Rijswijck | Eindhoven, North Brabant, Netherlands | https://vanrijswijck.nl/ | OK | rekrutuje; rośnie zatrudnienie +10.6% | oklejenie aut, odzież robocza, tablice (do sprawdzenia na zdjęciach); odzież/oklejenie dla nowych ludzi i aut |
| B | Bouwbedrijf Th. van Kasteren | Veldhoven, Noord-Brabant, Netherlands | https://thvankasteren.nl/ | OK | rekrutuje; rośnie zatrudnienie +12.5% | oklejenie aut, odzież robocza, tablice (do sprawdzenia na zdjęciach); odzież/oklejenie dla nowych ludzi i aut |
| B | Groenen Groep | Veldhoven, Noord-Brabant, Netherlands | https://groenengroep.com/ | OK | rekrutuje; rośnie zatrudnienie +27.8% | oklejenie aut, odzież robocza, tablice (do sprawdzenia na zdjęciach); odzież/oklejenie dla nowych ludzi i aut |
| B | Heuvel Afbouwgroep | Deurne | https://heuvelafbouw.nl/ | OK | rekrutuje; duże projekty w Eindhoven (Nieuwe Bergen 2026) | oklejenie aut, odzież robocza, tablice (do sprawdzenia na zdjęciach); odzież/oklejenie dla nowych ludzi i aut |
| B | Joost. Renovatie & Nieuwbouw B.V. | Helmond, Noord-Brabant, Netherlands | https://joostbouw.nl/ | OK | rośnie zatrudnienie +33.3% | materiały do social media; oklejenie aut, odzież robocza, tablice (do sprawdzenia na zdjęciach); odzież/okleje |
| B | Stucadoorsbedrijf Kolen | Mierlo | https://www.stucadoorsbedrijfkolen.nl/ | PRZESTARZAŁA | napis „Wij zijn verhuisd” bez daty (nie świeży sygnał) | nowa strona (mobile, HTTPS); oklejenie aut, odzież robocza, tablice (do sprawdzenia na zdjęciach); oznakowanie |

### Malarze

| Prio | Firma | Miasto | Strona | Stan strony | Sygnały | Szansa dla GW |
|---|---|---|---|---|---|---|
| A | VermulstBenders Schilderwerken | Helmond | https://schilderwerken-vb.nl/ | PRZESTARZAŁA | rekrutuje | nowa strona (mobile, HTTPS); oklejenie aut, odzież robocza, tablice (do sprawdzenia na zdjęciach); odzież/okle |
| B | KB schilder-, glas- en behangwerken | Eindhoven/Veldhoven | https://kbschilderwerken.nl/ | BŁĄD STRONY (do potwierdzenia) | — | nowa/naprawiona strona; oklejenie aut, odzież robocza, tablice (do sprawdzenia na zdjęciach) |
| B | Schildersbedrijf van de Looy | Veldhoven | https://vandelooy.nl/ | OK | rekrutuje; rośnie zatrudnienie | oklejenie aut, odzież robocza, tablice (do sprawdzenia na zdjęciach); odzież/oklejenie dla nowych ludzi i aut |
| B | Edwin van Gool Schilderwerken | Eindhoven | https://edwinvangool.nl/ | OK | — | materiały do social media; oklejenie aut, odzież robocza, tablice (do sprawdzenia na zdjęciach) |
| B | Paint and More Brabant | Eindhoven | https://www.paintandmorebrabant.nl/ | OK | — | materiały do social media; oklejenie aut, odzież robocza, tablice (do sprawdzenia na zdjęciach) |
| B | Schildersbedrijf van der Kruijs | Eindhoven | https://vanderkruijs.nl/ | NIEUSTALONE (brak połączenia z mojego środowiska) | większa firma, 30 osób; rekrutuje (posty/vacatures) | oklejenie aut, odzież robocza, tablice (do sprawdzenia na zdjęciach) |
| C | Schildersbedrijf Leo Baeten | Eindhoven | https://leobaeten.nl/ | NIEUSTALONE (brak połączenia z mojego środowiska) | — | oklejenie aut, odzież robocza, tablice (do sprawdzenia na zdjęciach) |
| C | Verhoef Schilders & Glas | Veldhoven | https://verhoefschilders.nl/ | OK | wg strony 180+ fachowców (cała NL) | materiały do social media; oklejenie aut, odzież robocza, tablice (do sprawdzenia na zdjęciach) |

### Instalatorzy i elektrycy

| Prio | Firma | Miasto | Strona | Stan strony | Sygnały | Szansa dla GW |
|---|---|---|---|---|---|---|
| A | EDI-Techniek | Helmond | https://edi-techniek.nl/ | PRZESTARZAŁA | — | nowa strona (mobile, HTTPS); materiały do social media; oklejenie aut, odzież robocza, tablice (do sprawdzenia |
| A | Electro Van der Zanden | Mierlo | http://www.electrovanderzanden.nl/ | PRZESTARZAŁA | — | nowa strona (mobile, HTTPS); materiały do social media; oklejenie aut, odzież robocza, tablice (do sprawdzenia |
| A | Gebr. Wijnen Installaties | Valkenswaard | https://wijneninstallaties.nl/ | PRZESTARZAŁA | rekrutuje | nowa strona (mobile, HTTPS); oklejenie aut, odzież robocza, tablice (do sprawdzenia na zdjęciach); odzież/okle |
| A | Kremers Installatietechniek | Budel | https://kremersbudel.nl/ | OK | rekrutuje; potroiło zatrudnienie | materiały do social media; oklejenie aut, odzież robocza, tablice (do sprawdzenia na zdjęciach); odzież/okleje |
| A | VAN DEN HOFF Installatiebedrijf | Eindhoven | https://vandenhoff.nl/ | OK | rekrutuje; rośnie zatrudnienie; ok. 45 osób wg strony; rośnie zatrudnienie +13.6% | materiały do social media; oklejenie aut, odzież robocza, tablice (do sprawdzenia na zdjęciach); odzież/okleje |
| B | Elektrotechnisch buro Vlemmix | Eindhoven | https://www.etbvlemmix.nl/ | OK | rekrutuje | materiały do social media; oklejenie aut, odzież robocza, tablice (do sprawdzenia na zdjęciach); odzież/okleje |
| B | Gevers Installatie | Eindhoven | https://geversinstallatie.nl/ | OK | rekrutuje; rośnie zatrudnienie; rośnie zatrudnienie +14.3% | oklejenie aut, odzież robocza, tablice (do sprawdzenia na zdjęciach); odzież/oklejenie dla nowych ludzi i aut |
| B | Heesmans Klimaatinrichting | Helmond | https://heesmans.nl/ | OK | rekrutuje; rośnie zatrudnienie | oklejenie aut, odzież robocza, tablice (do sprawdzenia na zdjęciach); odzież/oklejenie dla nowych ludzi i aut |

### Ogrody i zieleń

| Prio | Firma | Miasto | Strona | Stan strony | Sygnały | Szansa dla GW |
|---|---|---|---|---|---|---|
| A | De Tuinspecialist (P.J. Hazenoot) | Eindhoven | https://www.tuinspecialisten.nl/ | PRZESTARZAŁA | lista ChatGPT K05 | nowa strona (mobile, HTTPS); oklejenie aut, odzież robocza, tablice (do sprawdzenia na zdjęciach) |
| A | Groen met Koen | Geldrop | https://groenmetkoen.nl/ | PRZESTARZAŁA | rekrutuje | nowa strona (mobile, HTTPS); oklejenie aut, odzież robocza, tablice (do sprawdzenia na zdjęciach); odzież/okle |
| A | Hoveniersbedrijf van Eijndhoven | Veldhoven | https://hoveniersbedrijfvaneijndhoven.nl/ | PRZESTARZAŁA | — | nowa strona (mobile, HTTPS); materiały do social media; oklejenie aut, odzież robocza, tablice (do sprawdzenia |
| A | Nuenhem Tuinen | Nuenen | https://nuenhem.nl/ | OK | rekrutuje; podwoiło zatrudnienie | materiały do social media; oklejenie aut, odzież robocza, tablice (do sprawdzenia na zdjęciach); odzież/okleje |
| A | Soontiëns Hoveniers | Eindhoven | https://soontienshoveniers.nl/ | OK | rekrutuje; rośnie zatrudnienie | materiały do social media; oklejenie aut, odzież robocza, tablice (do sprawdzenia na zdjęciach); odzież/okleje |
| B | Hoveniersbedrijf De Haas | Nuenen | https://hovenierdehaas.nl/ | OK | rekrutuje; lista ChatGPT K06 | oklejenie aut, odzież robocza, tablice (do sprawdzenia na zdjęciach); odzież/oklejenie dla nowych ludzi i aut |
| B | Hoveniersbedrijf Henri van der Wijst | Sint-Oedenrode | https://www.hoveniersbedrijfhenrivanderwijst.nl/ | OK | — | materiały do social media; oklejenie aut, odzież robocza, tablice (do sprawdzenia na zdjęciach) |
| B | Hoveniersbedrijf Jeroen van Lange | Riethoven | https://jeroenvanlange.nl/ | OK | — | materiały do social media; oklejenie aut, odzież robocza, tablice (do sprawdzenia na zdjęciach) |

### Sprzątanie

| Prio | Firma | Miasto | Strona | Stan strony | Sygnały | Szansa dla GW |
|---|---|---|---|---|---|---|
| A | Furore Schoonmaakservice | Helmond | https://furoreschoonmaakservice.nl/ | PRZESTARZAŁA | — | nowa strona (mobile, HTTPS); materiały do social media; oklejenie aut, odzież robocza, tablice (do sprawdzenia |
| A | J&S Bedrijfsdiensten B.V. | Eindhoven | https://j-sbedrijfsdiensten.nl/ | OK | rekrutuje; podwoiło zatrudnienie | materiały do social media; oklejenie aut, odzież robocza, tablice (do sprawdzenia na zdjęciach); odzież/okleje |
| A | JUIST! schoonmaak B.V. | Nuenen | https://juistschoonmaak.nl/ | OK | rekrutuje; 60+ lokalizacji szkoły/przedszkola | materiały do social media; oklejenie aut, odzież robocza, tablice (do sprawdzenia na zdjęciach); odzież/okleje |
| A | Poetsensoleil Cleaning Services | Veldhoven / Eindhoven | https://www.poetsensoleil.nl/ | OK | rekrutuje; lista ChatGPT K02 | materiały do social media; oklejenie aut, odzież robocza, tablice (do sprawdzenia na zdjęciach); odzież/okleje |
| A | R+R Huismeesterdiensten & Schoonmaak | Eindhoven | https://r-plus-r.nl/ | BŁĄD STRONY (do potwierdzenia) | rośnie zatrudnienie +22.2% | nowa/naprawiona strona; oklejenie aut, odzież robocza, tablice (do sprawdzenia na zdjęciach); odzież/oklejenie |
| A | Sparidaens B.V. | Bladel (działa w reg. Eindhoven) | https://sparidaensbv.nl/ | OK | rekrutuje; rośnie zatrudnienie | materiały do social media; oklejenie aut, odzież robocza, tablice (do sprawdzenia na zdjęciach); odzież/okleje |
| B | Clean Masters BV | Eindhoven | https://cleanmasterseindhoven.nl/ | OK | rekrutuje; nowa firma (2024), rośnie | oklejenie aut, odzież robocza, tablice (do sprawdzenia na zdjęciach); odzież/oklejenie dla nowych ludzi i aut; |
| B | Cristal Cleaning Eindhoven | Eindhoven | https://cristalcleaning.nl/eindhoven | BŁĄD STRONY (do potwierdzenia) | — | nowa/naprawiona strona; oklejenie aut, odzież robocza, tablice (do sprawdzenia na zdjęciach) |

### Transport i logistyka

| Prio | Firma | Miasto | Strona | Stan strony | Sygnały | Szansa dla GW |
|---|---|---|---|---|---|---|
| A | Formule Logistics | Eindhoven | https://formulelogistics.nl/ | PRZESTARZAŁA | rekrutuje; nowa usługa: dostawy w centrum Eindhoven (2026) | nowa strona (mobile, HTTPS); oklejenie aut, odzież robocza, tablice (do sprawdzenia na zdjęciach); odzież/okle |
| A | Wijnen Vlotweg Verhuisgroep | Eindhoven | https://vlotwegverhuizingen.nl/ | PRZESTARZAŁA | rośnie zatrudnienie | nowa strona (mobile, HTTPS); materiały do social media; oklejenie aut, odzież robocza, tablice (do sprawdzenia |
| A | Kusters Bergings- en Transportbedrijf | Eindhoven | — | BRAK STRONY | brak własnej strony WWW w danych firmy | strona WWW + identyfikacja; oklejenie aut, odzież robocza, tablice (do sprawdzenia na zdjęciach) |
| B | Dambacher Transport Services | Eindhoven | https://dambacher.nu/ | OK | rekrutuje; wg strony ok. 35 osób i 30 pojazdów | oklejenie aut, odzież robocza, tablice (do sprawdzenia na zdjęciach); odzież/oklejenie dla nowych ludzi i aut |
| B | Diligence Koeriers Helmond | Helmond | https://diligencekoeriers.nl/ | OK | podwoiło zatrudnienie | materiały do social media; oklejenie aut, odzież robocza, tablice (do sprawdzenia na zdjęciach); odzież/okleje |
| B | Gebr. van den Eijnden Euromovers | Eindhoven | https://movers.nl/ | OK | rekrutuje; rośnie zatrudnienie | oklejenie aut, odzież robocza, tablice (do sprawdzenia na zdjęciach); odzież/oklejenie dla nowych ludzi i aut |
| B | Send Solution | Eindhoven | https://sendsolution.com/ | OK | otwiera kolejne lokalizacje | materiały do social media; oklejenie aut, odzież robocza, tablice (do sprawdzenia na zdjęciach) |
| B | SMK Logistics | Eindhoven | https://www.smk-logistics.nl/ | OK | rekrutuje; rośnie zatrudnienie | oklejenie aut, odzież robocza, tablice (do sprawdzenia na zdjęciach); odzież/oklejenie dla nowych ludzi i aut |

### Motoryzacja

| Prio | Firma | Miasto | Strona | Stan strony | Sygnały | Szansa dla GW |
|---|---|---|---|---|---|---|
| A | SB Banden | Oost West en Middelbeers | https://www.sbbanden.nl/ | PRZESTARZAŁA | nowa lokalizacja | nowa strona (mobile, HTTPS); materiały do social media; oklejenie aut, odzież robocza, tablice (do sprawdzenia |
| A | Autobedrijf Jan van Houtert | Gemert | https://www.janvanhoutertautos.nl | PRZESTARZAŁA | — | nowa strona (mobile, HTTPS); materiały do social media; oklejenie aut, odzież robocza, tablice (do sprawdzenia |
| A | Bekkers autochade | Valkenswaard | https://www.bekkers-autoschade.nl/ | PRZESTARZAŁA | — | nowa strona (mobile, HTTPS); materiały do social media; oklejenie aut, odzież robocza, tablice (do sprawdzenia |
| A | Het autohuis | Eindhoven | http://www.autohuiseindhoven.nl/ | PRZESTARZAŁA | — | nowa strona (mobile, HTTPS); materiały do social media; oklejenie aut, odzież robocza, tablice (do sprawdzenia |
| A | Het Zuiden | Helmond | http://www.automaterialenhetzuiden.nl | PRZESTARZAŁA | — | nowa strona (mobile, HTTPS); materiały do social media; oklejenie aut, odzież robocza, tablice (do sprawdzenia |
| A | Louis Verheggen | Eindhoven | http://www.verheggen.com | PRZESTARZAŁA | — | nowa strona (mobile, HTTPS); materiały do social media; oklejenie aut, odzież robocza, tablice (do sprawdzenia |
| A | My Tyre | Eindhoven | https://www.mytyre.nl | PRZESTARZAŁA | — | nowa strona (mobile, HTTPS); materiały do social media; oklejenie aut, odzież robocza, tablice (do sprawdzenia |
| B | Auto Service Gemert | Gemert | https://www.autoservicegemert.nl | OK | rekrutuje | materiały do social media; oklejenie aut, odzież robocza, tablice (do sprawdzenia na zdjęciach); odzież/okleje |

### Szkoły jazdy

| Prio | Firma | Miasto | Strona | Stan strony | Sygnały | Szansa dla GW |
|---|---|---|---|---|---|---|
| B | LEEUW opleidingen | Eindhoven | https://leeuwopleidingen.nl/ | OK | sklep online; szkoła zawodowa (C/D, code 95) | oklejenie aut, odzież robocza, tablice (do sprawdzenia na zdjęciach) |
| B | Rijschool Dekker | Eindhoven | https://rijschooldekker.nl/ | OK | rekrutuje; rośnie zatrudnienie | oklejenie aut, odzież robocza, tablice (do sprawdzenia na zdjęciach); odzież/oklejenie dla nowych ludzi i aut |
| B | Autorijschool Elsenaar |  | — | NIE ZNALEZIONO STRONY W DANYCH | — | jeśli faktycznie brak: strona WWW; oklejenie aut, odzież robocza, tablice (do sprawdzenia na zdjęciach) |
| B | Dekker rijschool | Eindhoven | — | NIE ZNALEZIONO STRONY W DANYCH | — | jeśli faktycznie brak: strona WWW; oklejenie aut, odzież robocza, tablice (do sprawdzenia na zdjęciach) |
| B | Rijschool Heezen | Waalre | https://rijschoolheezen.nl/ | OK | rekrutuje | oklejenie aut, odzież robocza, tablice (do sprawdzenia na zdjęciach); odzież/oklejenie dla nowych ludzi i aut |
| B | Rijschool Kennis | Eindhoven | https://rijschoolkennis.nl/ | OK | rośnie | oklejenie aut, odzież robocza, tablice (do sprawdzenia na zdjęciach); odzież/oklejenie dla nowych ludzi i aut |
| B | Rijschool Wildenberg | Eindhoven | https://rijschoolwildenberg.nl/ | OK | rekrutuje | oklejenie aut, odzież robocza, tablice (do sprawdzenia na zdjęciach); odzież/oklejenie dla nowych ludzi i aut |
| C | Rijschool Elsenaar | Geldrop | https://rijschoolelsenaar.nl/ | OK | — | oklejenie aut, odzież robocza, tablice (do sprawdzenia na zdjęciach) |

### Inne rzemiosło

| Prio | Firma | Miasto | Strona | Stan strony | Sygnały | Szansa dla GW |
|---|---|---|---|---|---|---|
| A | Jeroen Schreurs | Eindhoven | https://www.jeroenschreurs.nl/ | PRZESTARZAŁA | — | nowa strona (mobile, HTTPS); materiały do social media; oklejenie aut, odzież robocza, tablice (do sprawdzenia |
| B | Café 100 Watt | Eindhoven | https://100watt.nl/cafe-100-watt/ | BŁĄD STRONY (do potwierdzenia) | — | nowa/naprawiona strona; oklejenie aut, odzież robocza, tablice (do sprawdzenia na zdjęciach) |
| B | De Walhut |  | https://www.imkerijdewalhut.nl | OK | sklep online | materiały do social media; oklejenie aut, odzież robocza, tablice (do sprawdzenia na zdjęciach) |
| B | Metaalbewerking v.d. Boogaert | Valkenswaard | https://metaalvdb.nl | OK | rekrutuje | materiały do social media; oklejenie aut, odzież robocza, tablice (do sprawdzenia na zdjęciach); odzież/okleje |
| B | Mima schoenmakerij | Eindhoven | https://www.mimaschoenmakerij.nl/ | PRZESTARZAŁA | — | nowa strona (mobile, HTTPS); oklejenie aut, odzież robocza, tablice (do sprawdzenia na zdjęciach) |
| B | N°49 Chocolate | Mierlo | https://no49-chocolate.nl | PRZESTARZAŁA | — | nowa strona (mobile, HTTPS); oklejenie aut, odzież robocza, tablice (do sprawdzenia na zdjęciach) |
| B | Van Moll | Eindhoven | https://vanmollcraftbeer.com/bar/ | PRZESTARZAŁA | — | nowa strona (mobile, HTTPS); oklejenie aut, odzież robocza, tablice (do sprawdzenia na zdjęciach) |
| B | Volksbelang | Eindhoven | https://volksbelangeindhoven.nl/ | OK | nowa lokalizacja | materiały do social media; oklejenie aut, odzież robocza, tablice (do sprawdzenia na zdjęciach); oznakowanie n |

### Fryzjerzy i beauty

| Prio | Firma | Miasto | Strona | Stan strony | Sygnały | Szansa dla GW |
|---|---|---|---|---|---|---|
| B | Dittis | Gemert | https://dittisdesign.nl/ | PRZESTARZAŁA | nowa lokalizacja | nowa strona (mobile, HTTPS); witryna/szyld, odzież dla personelu (do sprawdzenia na miejscu; oferta zależy od  |
| B | Eefje Timmers Nail Academy | Lieshout | https://www.etnailacademy.nl/ | PRZESTARZAŁA | — | nowa strona (mobile, HTTPS); materiały do social media; witryna/szyld, odzież dla personelu (do sprawdzenia na |
| B | Giesing | Oisterwijk | https://www.giesingkappers.nl/ | PRZESTARZAŁA | — | nowa strona (mobile, HTTPS); materiały do social media; witryna/szyld, odzież dla personelu (do sprawdzenia na |
| B | Jaap For Men | Bladel | http://www.jaapformen.nl/ | PRZESTARZAŁA | — | nowa strona (mobile, HTTPS); materiały do social media; witryna/szyld, odzież dla personelu (do sprawdzenia na |
| B | John Rengers | Waalre | https://www.kapsalon-rengers.nl/ | PRZESTARZAŁA | — | nowa strona (mobile, HTTPS); materiały do social media; witryna/szyld, odzież dla personelu (do sprawdzenia na |
| B | Kapsalon Evi | Nuenen | http://www.kapsalon-evi.nl | PRZESTARZAŁA | — | nowa strona (mobile, HTTPS); materiały do social media; witryna/szyld, odzież dla personelu (do sprawdzenia na |
| B | Sunday's | Eindhoven | https://www.sundays.nl/zonnestudio/eindhoven/willemstraat-8 | BŁĄD STRONY (do potwierdzenia) | rekrutuje | nowa/naprawiona strona; witryna/szyld, odzież dla personelu (do sprawdzenia na miejscu; oferta zależy od branż |
| B | Amigo Tattoo | Gemert | http://amigotattoo.nl | PRZESTARZAŁA | — | nowa strona (mobile, HTTPS); witryna/szyld, odzież dla personelu (do sprawdzenia na miejscu; oferta zależy od  |

### Zdrowie i fizjoterapia

| Prio | Firma | Miasto | Strona | Stan strony | Sygnały | Szansa dla GW |
|---|---|---|---|---|---|---|
| B | Britstra | Eindhoven | http://www.britstrafysio.nl/ | PRZESTARZAŁA | — | nowa strona (mobile, HTTPS); materiały do social media; witryna/szyld, odzież dla personelu (do sprawdzenia na |
| B | Daas Podotherapie | Best | https://www.daaspodotherapie.nl/ | PRZESTARZAŁA | — | nowa strona (mobile, HTTPS); materiały do social media; witryna/szyld, odzież dla personelu (do sprawdzenia na |
| B | Fysiotherapie Heezerweg | Eindhoven | http://www.fysiotherapieheezerweg.nl/contact/ | PRZESTARZAŁA | — | nowa strona (mobile, HTTPS); materiały do social media; witryna/szyld, odzież dla personelu (do sprawdzenia na |
| B | Praktijk voor mondhygiëne Stratum | Eindhoven | https://pvmstratum.nl | PRZESTARZAŁA | — | nowa strona (mobile, HTTPS); materiały do social media; witryna/szyld, odzież dla personelu (do sprawdzenia na |
| B | PsyWorks | Gemert | https://www.psyworks.nl | PRZESTARZAŁA | — | nowa strona (mobile, HTTPS); materiały do social media; witryna/szyld, odzież dla personelu (do sprawdzenia na |
| B | Centrum voor Tandheelkunde Eindhoven | Eindhoven | https://www.cvteindhoven.nl/ | OK | rekrutuje | materiały do social media; witryna/szyld, odzież dla personelu (do sprawdzenia na miejscu; oferta zależy od br |
| B | De Tandarts Nuenen | Nuenen | https://www.detandartsnuenen.nl | OK | rekrutuje | materiały do social media; witryna/szyld, odzież dla personelu (do sprawdzenia na miejscu; oferta zależy od br |
| B | Dini | Helmond | https://www.tandartsdini.nl/ | OK | rekrutuje | materiały do social media; witryna/szyld, odzież dla personelu (do sprawdzenia na miejscu; oferta zależy od br |

### Fitness i sport

| Prio | Firma | Miasto | Strona | Stan strony | Sygnały | Szansa dla GW |
|---|---|---|---|---|---|---|
| B | Neoliet | Eindhoven | https://www.neoliet.nl/eindhoven-zuid/ | BŁĄD STRONY (do potwierdzenia) | rekrutuje | nowa/naprawiona strona; witryna/szyld, odzież dla personelu (do sprawdzenia na miejscu; oferta zależy od branż |
| B | Sporthal de Coevering | Geldrop | https://geldrop-mierlo.accommodatiehuur.nl/location/sporthal-de-coevering | PRZESTARZAŁA | — | nowa strona (mobile, HTTPS); materiały do social media; witryna/szyld, odzież dla personelu (do sprawdzenia na |
| B | 040FIT Heeze | Heeze | https://www.040fit.nl/ | OK | rekrutuje | materiały do social media; witryna/szyld, odzież dla personelu (do sprawdzenia na miejscu; oferta zależy od br |
| B | Cardo Waalre | Waalre | https://www.cardo.nl | OK | rekrutuje; sklep online | witryna/szyld, odzież dla personelu (do sprawdzenia na miejscu; oferta zależy od branży); odzież/oklejenie dla |
| B | Gymbokx | Helmond | https://www.gymbokx.nl/ | OK | rekrutuje; sklep online | witryna/szyld, odzież dla personelu (do sprawdzenia na miejscu; oferta zależy od branży); odzież/oklejenie dla |
| B | Harks | Geldrop | https://www.harks.nl | OK | rekrutuje; sklep online | witryna/szyld, odzież dla personelu (do sprawdzenia na miejscu; oferta zależy od branży); odzież/oklejenie dla |
| B | Hezemans Karting | Eindhoven | https://hezemans.nl | OK | rekrutuje | materiały do social media; witryna/szyld, odzież dla personelu (do sprawdzenia na miejscu; oferta zależy od br |
| B | MONK Eindhoven | Eindhoven | https://monk.nl/ | OK | rekrutuje; sklep online | witryna/szyld, odzież dla personelu (do sprawdzenia na miejscu; oferta zależy od branży); odzież/oklejenie dla |

### Gastronomia

| Prio | Firma | Miasto | Strona | Stan strony | Sygnały | Szansa dla GW |
|---|---|---|---|---|---|---|
| A | Kota Radja | Gemert | https://restaurantkotaradja.com | PRZESTARZAŁA | rekrutuje | nowa strona (mobile, HTTPS); materiały do social media; witryna/szyld, druk (menu, ulotki), odzież dla persone |
| B | Aladin | Eindhoven | https://www.aladin-eindhoven.nl | PRZESTARZAŁA | — | nowa strona (mobile, HTTPS); materiały do social media; witryna/szyld, druk (menu, ulotki), odzież dla persone |
| B | Avrasya | Eindhoven | https://www.avrasya-eindhoven.nl/ | PRZESTARZAŁA | — | nowa strona (mobile, HTTPS); materiały do social media; witryna/szyld, druk (menu, ulotki), odzież dla persone |
| B | Bij Albrecht | Eindhoven | https://www.bijalbrecht.nl/ | PRZESTARZAŁA | sklep online | nowa strona (mobile, HTTPS); witryna/szyld, druk (menu, ulotki), odzież dla personelu (do sprawdzenia na miejs |
| B | Bodega Maxima | Eindhoven | http://www.bodegamaxima.nl/ | PRZESTARZAŁA | rekrutuje | nowa strona (mobile, HTTPS); witryna/szyld, druk (menu, ulotki), odzież dla personelu (do sprawdzenia na miejs |
| B | Bravoy | Nuenen | https://www.bravoy.nl | PRZESTARZAŁA | sklep online | nowa strona (mobile, HTTPS); witryna/szyld, druk (menu, ulotki), odzież dla personelu (do sprawdzenia na miejs |
| B | Cafe Kraaij en Balder | Eindhoven | http://www.kraaijenbalder.nl | PRZESTARZAŁA | rekrutuje | nowa strona (mobile, HTTPS); witryna/szyld, druk (menu, ulotki), odzież dla personelu (do sprawdzenia na miejs |
| B | Carrousel | Eindhoven | https://www.carrouseleindhoven.nl/ | PRZESTARZAŁA | — | nowa strona (mobile, HTTPS); materiały do social media; witryna/szyld, druk (menu, ulotki), odzież dla persone |

### Sklepy lokalne

| Prio | Firma | Miasto | Strona | Stan strony | Sygnały | Szansa dla GW |
|---|---|---|---|---|---|---|
| A | 'T Bikertje | Helmond | http://bikertjefietsen.nl | PRZESTARZAŁA | rekrutuje | nowa strona (mobile, HTTPS); materiały do social media; witryna/szyld, odzież dla personelu (do sprawdzenia na |
| A | Fietsspecialist van de Wijgert | Eindhoven | http://www.fietsspecialistvandewijgert.nl/ | PRZESTARZAŁA | rekrutuje | nowa strona (mobile, HTTPS); materiały do social media; witryna/szyld, odzież dla personelu (do sprawdzenia na |
| A | Jungerius Flowers | Helmond | https://www.jungeriusflowers.nl | PRZESTARZAŁA | rekrutuje; sklep online | nowa strona (mobile, HTTPS); witryna/szyld, odzież dla personelu (do sprawdzenia na miejscu; oferta zależy od  |
| A | Stadsbakkerij Broodt | Eindhoven | http://www.broodt.nl/ | PRZESTARZAŁA | rekrutuje; sklep online | nowa strona (mobile, HTTPS); witryna/szyld, odzież dla personelu (do sprawdzenia na miejscu; oferta zależy od  |
| A | Svea | Son en Breugel | https://www.sveakeukens.nl | PRZESTARZAŁA | rekrutuje | nowa strona (mobile, HTTPS); materiały do social media; witryna/szyld, odzież dla personelu (do sprawdzenia na |
| B | Ad van Lieshout | Helmond | https://advanlieshoutfietsen.nl | BŁĄD STRONY (do potwierdzenia) | rekrutuje | nowa/naprawiona strona; witryna/szyld, odzież dla personelu (do sprawdzenia na miejscu; oferta zależy od branż |
| B | Battery Point | Eindhoven | https://www.batterypoint.nl | PRZESTARZAŁA | sklep online | nowa strona (mobile, HTTPS); witryna/szyld, odzież dla personelu (do sprawdzenia na miejscu; oferta zależy od  |
| B | De Brabantse fietsenmaker | Eindhoven | http://www.debrabantsefietsenmaker.nl/ | PRZESTARZAŁA | — | nowa strona (mobile, HTTPS); materiały do social media; witryna/szyld, odzież dla personelu (do sprawdzenia na |

### Biura i usługi B2B

| Prio | Firma | Miasto | Strona | Stan strony | Sygnały | Szansa dla GW |
|---|---|---|---|---|---|---|
| B | Advocaten Willemstraat | Eindhoven | https://www.advocatenwillemstraat.nl/ | PRZESTARZAŁA | rekrutuje | nowa strona (mobile, HTTPS); materiały do social media; odzież/oklejenie dla nowych ludzi i aut |
| B | Hattrick Uitzendbureau | Eindhoven | https://hattrick.nl | PRZESTARZAŁA | rekrutuje | nowa strona (mobile, HTTPS); materiały do social media; odzież/oklejenie dla nowych ludzi i aut |
| B | Janssens Interieurprojecten | Mierlo | http://www.interieurprojecten.nl/ | PRZESTARZAŁA | rekrutuje | nowa strona (mobile, HTTPS); materiały do social media; odzież/oklejenie dla nowych ludzi i aut |
| B | Saasen | Mierlo | http://www.saasen.com/ | PRZESTARZAŁA | rekrutuje | nowa strona (mobile, HTTPS); materiały do social media; odzież/oklejenie dla nowych ludzi i aut |
| B | Van Vlerken | Mierlo | http://www.vv-vanvlerken.nl/ | PRZESTARZAŁA | rekrutuje | nowa strona (mobile, HTTPS); materiały do social media; odzież/oklejenie dla nowych ludzi i aut |
| B | De Proost Administratiekantoor | Bergeijk | http://www.deproostadministratie.nl/overdeproost.html | PRZESTARZAŁA | — | nowa strona (mobile, HTTPS); materiały do social media |
| B | Dikkerboom | Waalre | http://dikkerboom.nl/waalre | BŁĄD STRONY (do potwierdzenia) | rekrutuje | nowa/naprawiona strona; odzież/oklejenie dla nowych ludzi i aut |
| B | Eindhoven Relocations | Eindhoven | https://www.eindhovenrelocations.nl/ | PRZESTARZAŁA | — | nowa strona (mobile, HTTPS); materiały do social media |

### Partnerzy (dostawcy)

| Prio | Firma | Miasto | Strona | Stan strony | Sygnały | Szansa dla GW |
|---|---|---|---|---|---|---|
| C | Drukkerij Spapens | Waalre | https://drukkerijspapens.nl | PRZESTARZAŁA | — | poza standardową oceną klientów B2B |
| C | Verhoeven Garden Stones & Basics | Helmond | https://schutting.nl/ | OK | hurtownia dla hoveniers/stratenmakers – potencjalny partner poleceń |  |

### Organizacje i stowarzyszenia

| Prio | Firma | Miasto | Strona | Stan strony | Sygnały | Szansa dla GW |
|---|---|---|---|---|---|---|
| C | Atletiekvereniging Oirschot |  | — | NIE ZNALEZIONO STRONY W DANYCH | — | poza standardową oceną klientów B2B |
| C | BijenBerkt | Veldhoven | https://bijenberkt.nl | PRZESTARZAŁA | — | poza standardową oceną klientów B2B |
| C | Eindhovense Studenten Roeivereniging Thêta | Eindhoven | https://esrtheta.nl | OK | — | poza standardową oceną klientów B2B |
| C | Handboogvereniging Prins Bernhard | Mierlo | — | NIE ZNALEZIONO STRONY W DANYCH | — | poza standardową oceną klientów B2B |
| C | Mierlose Tennis Vereniging | Mierlo | https://www.mierlosetv.nl/ | OK | rekrutuje | poza standardową oceną klientów B2B |
| C | RK Voetbal Vereniging Waalre | Waalre | — | NIE ZNALEZIONO STRONY W DANYCH | — | poza standardową oceną klientów B2B |
| C | Tennisvereniging de Korrel |  | https://www.tvdekorrel.nl/ | OK | — | poza standardową oceną klientów B2B |
| C | Vereniging De Klokkenmakers | Eindhoven | — | NIE ZNALEZIONO STRONY W DANYCH | — | poza standardową oceną klientów B2B |

## Ograniczenia (uczciwie)

- Fachowcy (dekarze, budowlanka, instalatorzy) rzadko są na mapie — ich lista pochodzi z wyszukiwarki i **nie jest kompletna** (116 firm z wyszukiwarki). Kolejne rundy: KvK, Google Maps, branżowe katalogi — tylko ręcznie albo przez ChatGPT, bez masowego pobierania.
- Ocena strony to automatyczny przegląd jednej strony głównej, nie pełny audyt.
- Część stron zablokowała roboty albo nie odpowiedziała z mojego środowiska — oznaczone „NIEUSTALONE”.
- Brak telefonów i e-maili celowo: baza służy do wyboru firm, nie do masowej wysyłki.
- Oznakowanie aut, odzieży i witryn trzeba sprawdzić zdjęciami (strona firmy, Google Street View, social media) przed jakąkolwiek propozycją.

## KANDYDACI – wszystkie branże (arkusz i `csv/KANDYDACI-wszystkie-branze.csv`)
Wstępna lista 289 firm rozłożona po kategoriach, z jednym produktem głównym GW, dowodem (link) i dwoma osobnymi polami: **dopasowanie do GW (1–5)** oraz **pewność dowodów**. Wszystkie wiersze są **niezweryfikowane przez człowieka**; auta, odzież i witryny to „NIEUSTALONE”. Sygnały zapotrzebowania są bez dat (z automatycznego przeglądu strony i danych LinkedIn), więc nie dają statusu A.

| Kategoria | Kandydatów | Wszystkich spełniających warunki |
|---|---|---|
| Dekarze | 9 | 9 |
| Budowlanka i remonty | 20 | 23 |
| Malarze | 5 | 5 |
| Instalatorzy i elektrycy | 20 | 23 |
| Ogrody i zieleń | 13 | 13 |
| Sprzątanie | 16 | 16 |
| Transport i logistyka | 14 | 14 |
| Motoryzacja | 25 | 65 |
| Szkoły jazdy | 7 | 7 |
| Inne rzemiosło | 15 | 28 |
| Fryzjerzy i beauty | 25 | 128 |
| Zdrowie i fizjoterapia | 15 | 62 |
| Fitness i sport | 20 | 87 |
| Gastronomia | 30 | 697 |
| Sklepy lokalne | 30 | 220 |
| Biura i usługi B2B | 25 | 264 |

Warunki wejścia: działająca strona (OK lub przestarzała), nie sieć/franczyza, nie organizacja ani partner. Małe kategorie (np. malarze) nie są uzupełniane na siłę.

## WERDYKT REKLAMY 289 (arkusz i `csv/WERDYKT-REKLAMY-289.csv`)
Każda z 289 firm z listy kandydatów dostała indywidualny przegląd: strona główna, podstrony i, jeśli były, zdjęcia (obejrzane zdjęcia u 201 firm). Werdykt oznacza: JUŻ MAJĄ, OPCJA ROZSZERZENIA, OKAZJA, NISKA SZANSA albo NIEUSTALONE. Przegląd był automatyczny (pomocnicze agenty AI), **nie zastępuje weryfikacji człowieka**; dowody mają linki, a daty zdjęć z ścieżek plików są przybliżone.

| Werdykt | Firm |
|---|---|
| JUŻ MAJĄ | 24 |
| OPCJA ROZSZERZENIA | 50 |
| OKAZJA | 3 |
| NISKA SZANSA | 67 |
| NIEUSTALONE | 140 |
| BŁĄD DANYCH | 5 |

„NIEUSTALONE” znaczy, że nie znaleziono dowodu w żadną stronę, nie że firma nie ma reklamy. Surowe wyniki agentów: folder `werdykty/`.
