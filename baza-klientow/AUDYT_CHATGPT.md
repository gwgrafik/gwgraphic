# AUDYT CHATGPT — baza potencjalnych klientów GW Graphic Design

**Data:** 2026-10-10  
**Autor:** ChatGPT  
**Zakres:** wyrywkowa kontrola *wybranych wierszy pokazanych w README*, zwłaszcza TOP A; porównanie z publicznymi źródłami. **Nie jest to audyt wszystkich 3523 rekordów ani ręczne otwarcie każdego wiersza Excela.**  
**Cel:** poprawić trafność kwalifikacji, nie usuwać badań Claude. **Nie wysłano ofert, nie kontaktowano żadnej firmy.**

## 1. Potwierdzone uwagi do konkretnych pozycji

| Firma z bazy | Co jest nie tak / co odkryto | Źródło | Zalecana poprawka | Waga |
|---|---|---|---|---|
| **Van der Meer Dakbedekkingen B.V.** (A, „BRAK STRONY”) | Zarówno KOMO, jak i Company.info podają domenę `vandermeerdakbedekking.nl`. Nie udało się potwierdzić aktualnego działania strony. „Brak strony” jest zbyt kategoryczne; pierwotny brak linku w danych źródłowych nie jest brakiem WWW. | https://www.komo.nl/certificaten/k13221/ ; https://companyinfo.nl/organisatieprofiel/dakdekken-en-bouwen-van-dakconstructies/van-der-meer-dakbedekkingen-b-v-eindhoven-17047945-000017411424 | **„Domena znana, dostępność WWW do sprawdzenia”**, ponownie ocenić priorytet. | Wysoka |
| **Wagenbouwplaats Vriendenkring Snoeyen** (A, budowlanka) | To grupa budowniczych wozów/parady Brabantsedag w Heeze, a nie przedsiębiorstwo budowlane świadczące usługi remontowe. | https://heeze-leende24.nl/in-beeld/profiel-wagenbouwers/artikel/49317/Vriendenkring-Snoeijen ; https://mijnheeze.nl/kinderparade-brabantsedag-2026-haalt-alles-uit-de-kast/ | **Usunąć z segmentu budowlanka**, przenieść do stowarzyszeń/wydarzeń (ew. materiały eventowe), bez wysokiego lead-score. | Krytyczna |
| **BijenBerkt** (A, „inne rzemiosło”) | Oficjalna strona podaje, że to **Bijenhoudersvereniging St. Ambrosius Veldhoven**, czyli stowarzyszenie pszczelarzy i ogród edukacyjny, nie zwykła firma rzemieślnicza. | https://bijenberkt.nl/ ; https://www.bijenhouders.nl/members/veldhoven/ | Przenieść do osobnej kategorii organizacji/stowarzyszeń; nie oceniać standardowymi kryteriami B2B. | Krytyczna |
| **Drukkerij Spapens** (A, „inne rzemiosło”) | Drukarnia sprzedaje druk i wspiera starterów, więc częściowo **konkuruje** z GW. | https://www.drukkerijspapens.nl/ | Oznaczyć „konkurent / potencjalny partner podwykonawczy”, **nie** automatycznie A jako klient końcowy. | Wysoka |
| **John Vermeulen Fietsplezier / Geldrop** (A, błąd strony) | Stary wpis myli byłą placówkę John Vermeulen Eindhoven (przejęta przez Van den Udenhout, obecnie **VELOO**) z działającą firmą John Vermeulen w **Geldrop**, której witryna `johnvermeulengeldrop.nl` działa. | https://www.veloo.nl/pages/over-ons ; https://www.johnvermeulengeldrop.nl/ ; https://www.johnvermeulengeldrop.nl/van-den-udenhout-neemt-john-vermeulen-eindhoven-over/ | Rozdzielić dwie jednostki, zaktualizować nazwy/URL i właściciela decyzji zakupowych. **Nie oferować „naprawy strony” na bazie nieaktualnego URL.** | Krytyczna |
| **Wijnen Installaties (Eindhoven)** (A, „BRAK STRONY”) | LinkedIn wskazuje `www.wijnenbouw.com`; oficjalna strona grupy ma oddzielne kontakty dla instalacji/sprinklerów w Eindhoven, a rejestr CIBV podaje `www.wijneninstallaties.com`. To większa struktura, potencjalnie z centralnymi zakupami. **Nie mylić** z Gebr. Wijnen Installaties (mały zespół, Valkenswaard). | https://nl.linkedin.com/company/wijnen-installaties ; https://wijnenbouw.com/contact-bouwbedrijf-zuid-nederland/ ; https://cibv.nl/erkende-bedrijven/wijnen-installatietechniek-b-v/ ; https://www.wijneninstallaties.nl/ | „Witryna grupy / domena znana”, dwa odrębne byty, ponowna ocena dostępności i dostępu do decydenta. | Wysoka |
| **Stucadoorsbedrijf Kolen** (A, „nowa lokalizacja”) | Witryna rzeczywiście wyświetla „Wij zijn verhuisd” i nowy adres, ale **nie podaje daty zmiany**. Sam napis może wisieć latami; nie dowodzi świeżej potrzeby oznakowania. | https://www.stucadoorsbedrijfkolen.nl/ | Zachować fakt przeprowadzki, **usunąć status świeżego sygnału zakupu**, dopóki nie ustalimy daty; foto szyldu/busa do potwierdzenia. | Średnia |
| **John Vermeulen / sklepy rowerowe — oferta „druk menu”** | W TOP A dla sklepów rowerowych pojawia się szablon „druk (menu, ulotki)”, który pasuje do gastronomii, nie do sklepów rowerowych. | `baza-klientow/README.md`, sekcja „Sklepy lokalne” | Oferta **branżowo specyficzna**: grafika witryny, oznaczenia serwisu, naklejki, karty serwisowe, kupony — bez automatycznego „menu”. | Średnia |

## 2. Ryzyka systemowe, które wypatrzyłem

1. **Niewłaściwa kategoria prawna i biznesowa:** `wagenbouwplaats` ≠ firma budowlana, stowarzyszenie ≠ płatny lead rzemieślniczy, drukarnia ≠ zwykły nabywca druku. Rozdzielać: klient końcowy / partner / konkurent / stowarzyszenie / sieć.
2. **„BRAK STRONY” z brakującego pola źródłowego:** OSM/Exa nie ma linku, ale podmiot ma domenę. Zastosować statusy: „domena zweryfikowana i działa”, „domena znana, błąd/niedostępna”, „nie znaleziono po szukaniu po nazwie”, „brak informacji w źródle”. „Brak strony” tylko po samodzielnej dodatkowej kontroli, nadal z zastrzeżeniem.
3. **Sygnały bez dat:** słowa „rekrutuje” i „wij zijn verhuisd” wymagają linku **do konkretnego ogłoszenia/komunikatu** oraz daty. Link do strony głównej to za mało dla predykcji zakupu.
4. **Fałszywy wniosek o złej stronie:** rok copyright ≤ 2021 nie dowodzi braku aktualizacji ani niskiej konwersji; brak `viewport` może być przesłanką, ale potrzebny test wizualny na mobile. Stary URL może być historyczną marką albo przekierowaniem.
5. **Skala nie oznacza dostępności:** kilkudziesięcioosobowa firma może mieć już agencję centralną; lokalny warsztat może kupić tylko raz. Wprowadzić pole „kto decyduje i czy lokalnie” oraz „prawdopodobieństwo powtórki”.
6. **Oferty generyczne:** „materiały social, oklejenie, odzież” wpisane masowo nie dowodzi potrzeby. Przed ofertą jedna najtrafniejsza usługa powiązana z konkretnym, sprawdzonym sygnałem.
7. **Brak zdjęć = nieustalone:** to Claude oznaczył prawidłowo; utrzymać standard dowodowy. W wynikach wyszukiwania obrazów łatwo trafić na inny podmiot o podobnej nazwie — nie zaliczać takich zdjęć jako dowodów.

## 3. Proponowany ranking (0–100 punktów, **zależny od dowodu**)

| Kryterium | Maks. | Uwagi |
|---|---:|---|
| Aktualny, datowany sygnał zakupowy w ostatnich 6 miesiącach | **25** | Nowa siedziba, nowy lokal, nowy samochód, aktywna rekrutacja; nie starszy post |
| Jedna rzeczywiście dopasowana usługa GW | **25** | Konkretny produkt, a nie wszystkie usługi na próbę |
| Potwierdzona luka lub możliwość rozbudowy reklamy | **20** | Zdjęcia, strona, publiczne realizacje; brak danych = 0, a nie pełne punkty |
| Dostęp do lokalnego decydenta / możliwości małej firmy | **15** | Franczyza i zakupy centralne obniżają wynik |
| Potencjał powtarzalności i rozsądna skala | **10** | Ekipa, flota, częste nadruki, sezonowość, pakiety |
| Odległość / łatwość montażu i obsługi | **5** | Blisko Eindhoven korzystniej niż dalekie zlecenia niskiej wartości |

**A:** ≥75 i przynajmniej jeden potwierdzony sygnał/realna potrzeba; **B:** 50–74; **C:** <50. Jeśli nie ma wiarygodnych dowodów, nawet wysoki wynik za „branżę” nie może dawać A: oznaczyć **„DO WERYFIKACJI”**. Przed punktacją wykluczyć/zresegmentować niekomercyjne grupy, konkurentów i duże sieci.

## 4. Priorytet następnego audytu

Najpierw zweryfikować **całe TOP 42** na poziomie nazwy, kategorii, miasta, strony, datowanego sygnału i rzeczywistej szansy. Dopiero po tym wybierać 5–10 firm do dalszej personalizacji ofert. Dla każdego wiersza dopisać: (1) typ klienta, (2) *jeden* produkt GW, (3) data sygnału, (4) dowód URL, (5) status weryfikacji, (6) kto decyduje. Dodatkowe branże zbierać równolegle, nie mieszać ze zweryfikowaną kolejką kontaktów.

## 5. Niezależny pozytywny wniosek

Własne kontrole potwierdzają, że niektóre firmy są rzeczywistymi, czynnymi biznesami; np. **Furore Schoonmaakservice** ma funkcjonującą stronę i szerokie portfolio usług, choć nie dowodzi to nowej potrzeby reklamy: https://furoreschoonmaakservice.nl/. Rozpoznawanie marek i źródeł jest użyteczne; **największym problemem pozostaje automatyczna ocena gotowości do zakupu, nie sam pomysł gromadzenia firm.**

## 6. Zakres i dalsza współpraca

To audyt **nie-losowo** wybranych firm wysokiego priorytetu; z tych obserwacji **nie wolno** ekstrapolować odsetka błędów na 42 ani 3523 wiersze. README i obecność `baza-klientow.xlsx` na GitHubie zweryfikowano, ale automatyczne przejrzenie **wszystkich wierszy Excel** nie zostało wykonane. Kolejne uwagi dopisywać w tym dokumencie z datą i dowodami. Claude może nadal pracować nad bazą; przed aktualizacją jego danych ma sprawdzić niniejszy audyt i ręcznie ocenić wskazane wiersze.

— ChatGPT

## 7. Audyt nowej listy „KANDYDACI – wszystkie branże” (2026-10-10)

**Zakres:** bezpośrednio pobrałem `csv/KANDYDACI-wszystkie-branze.csv` (289 rekordów + nagłówek) i zbadałem reprezentację 16 kategorii, kompletność pól, powtórzenia nazw oraz wybrane firmy w publicznych źródłach. **Żaden z 289 wierszy nie ma statusu ręcznej weryfikacji.** To preselekcja, nie gotowa lista kampanii.

### Sprawdzone nowe problemy

| Rekord | Obserwacja i dowód | Korekta zalecana |
|---|---|---|
| **Actief Werkt!** (Biura i usługi B2B) | Oficjalnie ma **77 placówek i lokalizacji inhouse**, to ogólnokrajowa sieć, a nie mały niezależny B2B. https://www.actiefwerkt.nl/contact | Oznaczyć „sieć / możliwe centralne zakupy”, wyłączyć z kryterium „nie sieć” lub osobno kwalifikować |
| **Cosmo Hairstyling** (Beauty) | Oficjalna witryna podaje **40 salonów**. https://www.cosmohairstyling.com/salons | Ogólnokrajowa sieć; nie oferować lokalnej korekty szyldu jak niezależnemu salonowi bez weryfikacji uprawnień oddziału |
| **ANAC** (Motoryzacja) | Oficjalna lista pokazuje **wiele myjni** w różnych miastach NL/BE, w tym Eindhoven. https://www.anaccarwash.com/locaties/ | Oznaczyć sieć i możliwe centralne standardy oznakowania; zweryfikować decydenta |
| **E.T.V. Volley / ETPV Volley** (Fitness i sport) | Oficjalna witryna wskazuje **stowarzyszenie tenisa i padla**, nie komercyjne studio fitness. https://www.etv-volley.nl/ ; https://www.etv-volley.nl/lid-worden | Przenieść do „kluby sportowe/stowarzyszenia”, potencjał: odzież klubowa, banery sponsorów, tablice wydarzeń (nie „grafika ścienna i witryna” jak studio fitness) |
| **Bike Totaal Bito** (Sklepy) | Bike Totaal to **sieć ponad 170 sklepów należących do niezależnych przedsiębiorców**, marka działa jako kooperatywa, nie typowa franczyza. https://www.biketotaal.nl/winkels ; https://www.biketotaal.nl/over-ons | Oznaczyć „wspólna marka, niezależny lokalny przedsiębiorca”; sprawdzić, czy lokalne grafiki wolno zlecać zewnętrznie, nie odrzucać bezwarunkowo |
| **B-Covered** (Sklepy lokalne) | Oficjalna strona opisuje **pracownię architektury wnętrz/projektowania i realizacji**, nie sklep detaliczny. https://www.b-covered.com/nl/ | Przenieść do usług architektoniczno-projektowych; bardziej prawdopodobne: partnerstwo, materiały do realizacji, oznakowanie pracowni, nie standardowa „witryna sklepowa” |

### Wyniki kontroli struktury CSV

- Dokładnie **289 wpisów** (290 linii razem z nagłówkiem), rozłożonych na **16 kategorii**.
- **289/289** ma URL strony WWW i **289/289** ma status „niezweryfikowany przez człowieka”.
- **36/289** ma jawnie „brak sygnału” w polu zapotrzebowania. Pozostałe nie są potwierdzonymi leadami zakupowymi — część ma wzmianki bez dat.
- Nie wykryłem dosłownych duplikatów nazw w obrębie 289 rekordów, ale to nie wyklucza wielokrotnych podmiotów pod różnymi nazwami lub oddziałów jednej sieci.
- Kolumny „produkt główny” są w znacznej mierze **identycznymi formułkami na kategorię**, więc nie interpretować ich jako zweryfikowanej potrzeby konkretnej firmy.
- Trzeba oddzielić **sieci z zakupami centralnymi, lokalne placówki niezależnych kooperatyw, stowarzyszenia, B2B projektowe i właściwych klientów końcowych** — automatyczne wykluczenie wszystkich rozpoznawalnych marek także byłoby błędem.

### Rekomendacja dla Claude

Popraw przede wszystkim **błędny typ działalności i tryb decyzji zakupowej** bez niepotrzebnego zwężania listy 289. Dodaj pola: `Forma działalności / sieć / kooperatywa`, `Zakupy lokalnie vs centrala: nieustalone`, `Prawdopodobna grupa produktu GW`. Uporządkuj wspólne brandy: nie sugeruj, że 40 salonów Cosmo to 40 niezależnych decydentów. Nie usuwaj klubów sportowych, lecz proponuj właściwy produkt i oznacz inny tryb kontaktu. Następna runda powinna sprawdzić firmy w gastronomii i sklepach pod kątem realnego istnienia, kategorii i lokalizacji.

— ChatGPT
