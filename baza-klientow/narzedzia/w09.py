import json
N="nieustalone"
rows=[]
def add(id,firma,kat,w,p,www,auta=N,odz=N,szyld=N,druk=N,sygnal="brak",usl="",hip=True,typ="lokalna firma",conie="",img=0,linki=(),uz=""):
    rows.append(dict(id=id,firma=firma,kategoria=kat,werdykt=w,pewnosc=p,dowody=dict(www=www,auta=auta,odziez=odz,szyld_witryna=szyld,druk_banery=druk),aktualny_sygnal=sygnal,usluga_gw=usl,hipoteza=hip,typ_decyzji=typ,co_nieustalone=conie,obejrzane_obrazy=img,linki=list(linki),uzasadnienie=uz))
add(249,"De Laat Slaapexpert","Sklepy lokalne","OPCJA ROZSZERZENIA","niska","Sklep ze snem (materace, łóżka), rodzinna firma od 1988, dwie placówki (Diessen, Bladel), sklep online; zapowiedź koopzondag w Bladel na stronie głównej.",
 odz="POTWIERDZONE: czerwone kurtki z logo 'de Laat' u zespołu dostaw/montażu (zdjęcie na stronie, plik z 2022-10), https://delaatslaapexpert.nl/wp-content/uploads/2022/10/de-laat-bezorgen.jpg",
 sygnal="brak (koopzondag 29 marca bez roku, nie jest sygnałem zakupowym)",usl="Oklejenie aut dostawczych firmy (hipoteza: dostawy własne, wygląd aut nieznany)",
 conie="Czy auta dostawcze mają oklejenie i czy fasady sklepów w Diessen i Bladel mają aktualne szyldy/witryny; sprawdzić Street View lub zdjęcia sklepów.",img=2,
 linki=["https://delaatslaapexpert.nl/","https://delaatslaapexpert.nl/over-ons/","https://delaatslaapexpert.nl/wp-content/uploads/2022/10/de-laat-bezorgen.jpg"],
 uz="Zespół dostaw ma markowe kurtki, więc odzież jest już zrobiona (zdjęcie może być stare). Brak dowodu na stan aut i fasad, dlatego tylko hipoteza o domówieniu oklejenia aut dostawczych.")
add(105,"Gruyters Banden (Garage & Bandencentrum Eindhoven)","Motoryzacja","JUŻ MAJĄ","średnia","Garage i bandencentrum od 1982 (domena przekierowuje na gb-e.nl, ta sama firma Gruyters/GBE), zakładka Vacatures bez daty.",
 szyld="POTWIERDZONE: czarna elewacja z podświetlanymi szyldami GBE, grafiką w oknach (Banden, Velgen, Remmen, APK itd.) i dużym banerem 'Banden' na dachu; zdjęcie z 2021-02, https://gb-e.nl/wp-content/uploads/2021/02/GBE-bedrijf-buitenzijde-2021.jpg",
 druk="POTWIERDZONE: baner reklamowy w ramie na dachu budynku (to samo zdjęcie, 2021-02)",
 sygnal="brak (rekrutacja bez daty)",usl="Odświeżenie grafiki okiennej i banerów elewacji (tylko jeśli zdjęcie z 2021 jest już nieaktualne)",hip=False,
 conie="Aktualny stan elewacji (zdjęcie ma ok. 5 lat), auta i odzież: Street View lub nowe zdjęcia.",img=1,
 linki=["https://www.gruytersuniverselegarage.nl","https://gb-e.nl/over-ons/","https://gb-e.nl/wp-content/uploads/2021/02/GBE-bedrijf-buitenzijde-2021.jpg"],
 uz="Elewacja ma bogatą reklamę (szyldy, witryny, baner), więc rynek jest już pokryty, choć dowód ma datę 2021. Zostaje najwyżej odświeżenie, bez dowodu na potrzebę.")
add(179,"Dini (Tandartspraktijk Dini)","Zdrowie i fizjoterapia","NIEUSTALONE","niska","Gabinet dentystyczny w Helmond, strona z zakładkami Ons Team, Sfeerimpressie, Vacatures (bez dat). Na stronie tylko zdjęcia wnętrza (gabinet, dentysta i asystentka w białych fartuchach bez widocznego logo).",
 sygnal="brak",usl="Oznakowanie wejścia i witryna gabinetu (hipoteza)",
 conie="Zdjęcie fasady i wejścia (Street View) oraz czy istnieje szyld/witryna z logo.",img=1,
 linki=["https://www.tandartsdini.nl/","https://www.tandartsdini.nl/wp-content/uploads/2020/08/Praktijk-0888_Tandartspraktijk-Dini.jpg"],
 uz="Strona pokazuje wyłącznie wnętrze (zdjęcie z 2020), nic o szyldzie czy witrynie. Bez zdjęcia fasady nie da się ocenić luki.")
add(30,"Schildersbedrijf van de Looy (Van de Looy)","Malarze","JUŻ MAJĄ","średnia","Duża firma konserwacji i renowacji nieruchomości (malarstwo, beton, szkło), ok. 3 spółki, wiele projektów dla ASML, szpitali i korporacji mieszkaniowych; zakładki Werken bij, Ons team.",
 auta="POTWIERDZONE: kilkanaście kolorowych busów (pomarańczowe, żółte, zielone, niebieskie, czerwone) w rzędzie przed budynkiem firmy; napisy na busach nieczytelne ze zdjęcia, kolory sugerują spójne oklejenie; zdjęcie wgrane 2026-01, https://vandelooy.nl/wp-content/uploads/2026/01/deFotomeneer-81-768x413.jpg",
 odz="POTWIERDZONE: ok. 50 osób w jednolitych białych strojach roboczych; logo na ubraniach nieczytelne; to samo zdjęcie, 2026-01",
 szyld="POTWIERDZONE: logotypy 'van de Looy' (3 spółki) na elewacji budynku, to samo zdjęcie",
 sygnal="brak",usl="Brak rekomendowanej oferty, ewentualnie drobne domówienia oklejenia nowych busów",hip=False,
 conie="Czy napisy na busach to pełne oklejenie i czy firma kupuje centralnie; kontakt z działem zakupów nie wchodzi w grę.",img=2,
 linki=["https://vandelooy.nl/","https://vandelooy.nl/ons-team/","https://vandelooy.nl/wp-content/uploads/2026/01/deFotomeneer-81-768x413.jpg"],
 uz="Dojrzała, duża marka z flotą kolorowych busów, jednolitą odzieżą i logo na budynku (zdjęcie ok. 2026-01). Reklama fizyczna jest już zrobiona, a skala sugeruje stałych dostawców.")
add(145,"Baan Chockdee","Fryzjerzy i beauty","NIEUSTALONE","niska","Salon tajskiego masażu w Eindhoven (Wix), zakładki Over ons, Reviews, Nieuws, post Vacatures bez daty. Na stronie głównej widać wyłącznie zdjęcia wnętrza (łóżka do masażu, bez szyldu).",
 sygnal="brak",usl="Szyld lub oklejenie witryny salonu (hipoteza)",conie="Fasada i witryna salonu: Street View lub zdjęcie z Google Maps.",img=1,
 linki=["https://www.baanchockdee.nl/","https://www.baanchockdee.nl/over-ons"],uz="Zdjęcie wnętrza nie mówi nic o szyldzie ani witrynie. Do oceny potrzebne jest zdjęcie fasady.")
add(88,"Kusters Logistic Services","Transport i logistyka","OPCJA ROZSZERZENIA","niska","Firma transportowo-logistyczna z ponad 50-letnim stażem, ISO 9001, część grupy Kusters Bedrijven (osobna strona z vacatures); baner 'Chauffeurs gezocht!' w menu (bez daty).",
 odz="POTWIERDZONE: granatowa kurtka z odblaskowym paskiem i logo 'Kusters bedrijven' na plecach, zdjęcie z galerii strony (data nieznana), https://www.kusters-transport.nl/wp-content/uploads/hero-02.webp",
 sygnal="brak (baner rekrutacyjny bez daty)",usl="Oklejenie nowych aut/naczep floty (hipoteza po audycie floty)",
 conie="Zdjęcia floty (ciężarówki, naczepy) i ich oklejenie: strona Kusters Bedrijven, LinkedIn lub Street View przy siedzibie.",img=2,
 linki=["https://kusters-transport.nl/","https://www.kusters-transport.nl/wp-content/uploads/hero-02.webp","https://www.kustersbedrijven.nl/vacatures/"],
 uz="Odzież robocza z logo istnieje, wygląd floty nie został sprawdzony. Rekrutacja kierowców bez daty to słaby sygnał, dlatego tylko hipoteza o domówieniu dla floty.")
add(279,"B&G Hekwerk","Biura i usługi B2B","NISKA SZANSA","średnia","Dojrzała firma od ponad 60 lat, ponad 175 pracowników, grupa B&G (bg.nl, wersja belgijska bghekwerk.be), własny brandmark 2024, hale produkcyjne i serwis; zakładka Werken bij B&G.",
 sygnal="brak (nowy brandmark 2024 bez konkretnego komunikatu zakupowego)",usl="Brak (ewentualnie odzież dla nowych monterów, tylko przez dział zakupów)",hip=False,typ="nieustalone",
 conie="Czy zakupy odzieży i oklejenia aut są centralne w grupie; ustalić po stronie biznesowej, nie kontaktując firmy.",img=1,
 linki=["https://www.bghekwerk.nl","https://bg.nl/over-ons/","https://bg.nl/werken-bij-bg/"],
 uz="Duża, dojrzała firma z własną marką i zapewne centralnymi zakupami, a lokalna szansa dla małej pracowni jest niska. Zdjęcie z hali pokazuje produkt, nie reklamę fizyczną.")
add(51,"Verhees en van Dijk Installatietechniek","Instalatorzy i elektrycy","OPCJA ROZSZERZENIA","średnia","Instalator z Deurne (pompy ciepła, CV, sanitarne), zakładki Projecten, Nieuws; na stronie głównej ogłoszenie 'Vacature: Service- en Onderhoudsmonteur' (bez daty).",
 auta="POTWIERDZONE: biały bus z logo 'Verhees & van Dijk' na drzwiach (dwóch właścicieli obok), data zdjęcia nieznana, https://www.verheesenvandijk.nl/uploads/images/rick%20en%20laurens%20home%20page%20(2).png",
 odz="nieustalone (właściciele w oliwkowych polo, logo niewidoczne)",
 druk="POTWIERDZONE: grafika promocyjna z logo, wizualizacją domu i adresem www w nagłówku strony (Startpagina_05.jpg, data nieznana)",
 sygnal="Wakat monteura serwisu na stronie głównej, bez daty (https://verheesenvandijk.nl/vacatures)",usl="Odzież robocza z logo dla monterów (w tym nowego pracownika)",
 conie="Czy bus ma pełne oklejenie czy tylko logo na drzwiach, ile aut ma flota i czy monterzy mają ubrania z logo.",img=2,
 linki=["https://verheesenvandijk.nl/","https://www.verheesenvandijk.nl/uploads/images/rick%20en%20laurens%20home%20page%20(2).png","https://www.verheesenvandijk.nl/uploads/images/Startpagina_05.jpg"],
 uz="Bus ma logo, ale to prawdopodobnie tylko oznakowanie drzwi, a ubrania właścicieli wyglądają na bez logo. Rekrutacja monteura bez daty daje tylko hipotezę, że odzież z logo byłaby domówieniem.")
add(157,"Haarmode Van de Water","Fryzjerzy i beauty","NISKA SZANSA","średnia","Salon należy do grupy mijnkapper.today (ok. 13 salonów w Brabancji, wspólna strona i marka, Academy, werken bij). Zdjęcie salonu Eindhoven Oost: wnętrze, personel w czarnych strojach, bez widocznego szyldu.",
 sygnal="brak",usl="Brak (zakupy zapewne centralne w grupie)",hip=False,typ="oddział sieci",
 conie="Czy zakupy szyldów i okleiny okiennej są centralne w grupie mijnkapper.today; fasada salonu przy Cassandraplein (Street View).",img=1,
 linki=["https://www.mijnkapper.today/vestigingen/haarmode-van-de-water-cassandraplein-eindhoven/","https://www.mijnkapper.today/over-ons/"],
 uz="To jeden z wielu salonów grupy ze wspólną stroną i marką, więc decyzje reklamowe prawdopodobnie zapadają centralnie. Nie ma dowodu na lokalną potrzebę.")
add(194,"Hezemans Karting","Fitness i sport","NIEUSTALONE","niska","Kryty tor gokartowy z axe bar i arcade w Eindhoven; na stronie 'nieuwe karts' (zdjęcia wgrane 2025-05), zakładka Vacatures bez daty. Jedyne obejrzane zdjęcie to tarcza do rzutu toporem, bez reklamy.",
 sygnal="brak (nowe gokarty z 2025-05 to inwestycja w sprzęt, nie w reklamę)",usl="Grafika ścienna i okienna we wnętrzu (hipoteza)",
 conie="Zdjęcia hali, fasady i witryny (Street View, Google Maps) i czy grafika już istnieje.",img=1,
 linki=["https://hezemans.nl","https://hezemans.nl/wp-content/uploads/2025/05/Hezemans-feb2024-25.jpg"],uz="Strona nie pokazuje fasady ani grafiki ściennej. Bez dodatkowych zdjęć nie można ocenić, czy jest luka.")
add(288,"Saasen","Biura i usługi B2B","NIEUSTALONE","niska","Prosta, lekka strona J. Saasen B.V. w Mierlo (instalacje elektro, zabezpieczenia, sieci, ponad 60 lat); zakładki Projecten, Werken bij Saasen. Podstrona projektów to opis tekstowy, bez zdjęć floty czy zespołu.",
 sygnal="brak",usl="Oklejenie busów serwisowych (hipoteza)",conie="Zdjęcia busów i monterów (LinkedIn, aktualności firmy) oraz fasady siedziby w Mierlo.",img=0,
 linki=["http://www.saasen.com/","http://www.saasen.com/projecten"],uz="Strona nie zawiera żadnych użytecznych zdjęć, więc stan reklamy fizycznej jest nieznany. Żadne obrazy nie zostały obejrzane.")
add(35,"De Groot installaties","Instalatorzy i elektrycy","OPCJA ROZSZERZENIA","niska","Instalator z Neerkant (pompy ciepła, klimatyzacja, CV, sanitarne), firma założona 1995, zespół samodzielnych monterów, zakładki Projecten, Vacatures (bez dat).",
 odz="POTWIERDZONE: granatowe polo z haftowanym logo 'De Groot Installaties' (zdjęcie z podstrony Over ons, data nieznana), https://degrootinstallaties.nl/afbeeldingen/stock2/over-ons.jpg",
 sygnal="brak (zakładka Vacatures bez daty)",usl="Oklejenie busów serwisowych (hipoteza)",
 conie="Czy busy mają oklejenie i ile ich jest; zdjęcia floty z projektów lub Street View.",img=1,
 linki=["https://degrootinstallaties.nl/","https://degrootinstallaties.nl/over-ons","https://degrootinstallaties.nl/afbeeldingen/stock2/over-ons.jpg"],
 uz="Odzież z logo już jest, floty nie udało się zobaczyć. Najbardziej prawdopodobne domówienie to oklejenie busów, ale to hipoteza.")
add(19,"MvS Sloopbedrijf","Budowlanka i remonty","NIEUSTALONE","niska","Firma rozbiórkowa VCA z Eindhoven, działa w całej Holandii, strona z podstronami miast, ocena 5.0. Zdjęcie z podstrony: pracownik w czarnej koszulce z małym zielonym znakiem (nieczytelne, czy to logo firmy).",
 odz="nieustalone (mały zielony znak na koszulce, nieczytelny)",sygnal="brak (zakładka rekrutacji bez daty)",usl="Odzież robocza z logo i oklejenie busów (hipoteza)",
 conie="Zdjęcia aut i ekip z realizacji (Facebook, LinkedIn) oraz czy koszulki mają logo MvS.",img=1,
 linki=["https://mvs-sloopbedrijf.nl/","https://mvs-sloopbedrijf.nl/sloopwerk-eindhoven"],uz="Jedno zdjęcie z budowy nie rozstrzyga, czy odzież ma logo firmy. Brak dowodów na stan floty.")
add(138,"Brouwerij het Veem","Inne rzemiosło","NIEUSTALONE","niska","Browar z proeflokaal i bierwinkel w Vershallen w Eindhoven; strona z podstronami Over ons, Impressies, sklep online. Zdjęcia na stronie pochodzą z 2016 i pokazują wnętrze browaru (kadzie), bez szyldu.",
 sygnal="brak",usl="Szyld lub witryna lokalu (hipoteza)",conie="Aktualne zdjęcie lokalu i witryny w Vershallen (Street View, Google Maps); zdjęcia na stronie są z 2016.",img=1,
 linki=["https://www.brouwerijhetveem.nl/brouwerij","https://www.brouwerijhetveem.nl/impressies/"],uz="Lokal znajduje się w hali handlowej, a dostępne zdjęcia są stare i dotyczą wnętrza. Nie da się ocenić szyldu ani witryny.")
add(146,"Ben Goede Coiffures","Fryzjerzy i beauty","NIEUSTALONE","niska","Salon fryzjerski w Mierlo, ponad 30 lat, strona Framer, zakładka Vacature i wpis 'vacature kapper Mierlo' (bez daty). Obejrzane zdjęcie to nożyczki w dłoniach, bez reklamy zewnętrznej.",
 sygnal="Wpis 'vacature kapper Mierlo' bez daty (https://www.bengoede.nl/nieuws/vacature-kapper-mierlo)",usl="Szyld i oklejenie witryny (hipoteza)",conie="Zdjęcie fasady salonu (Street View) i stan witryny.",img=1,
 linki=["https://www.bengoede.nl/","https://www.bengoede.nl/over-ons"],uz="Strona pokazuje tylko ujęcia pracy, nie fasadę. Rekrutacja bez daty nie jest sygnałem zakupowym.")
add(99,"Auto Service Gemert","Motoryzacja","OPCJA ROZSZERZENIA","niska","Niezależny warsztat w Gemert (serwis, przeglądy, auta dostawcze); na stronie hasło o pomocy drogowej ('Met pech onderweg?'). Jednostronicowa strona.",
 szyld="POTWIERDZONE: nowoczesny budynek z ceglaną elewacją, duże przestrzenne litery 'Auto Service Gemert' i szklane bramy warsztatowe; zdjęcie na stronie (data nieznana), https://www.autoservicegemert.nl/kuppens_fotografie_8195.jpg",
 sygnal="brak",usl="Oklejenie auta serwisowego/pomocy drogowej (hipoteza)",
 conie="Czy firma ma oklejone auto serwisowe lub zastępcze oraz odzież roboczą z logo; zdjęcia z social mediów.",img=1,
 linki=["https://www.autoservicegemert.nl","https://www.autoservicegemert.nl/kuppens_fotografie_8195.jpg"],uz="Fasada ma wyraźny szyld z liter przestrzennych, więc ta część jest zrobiona. Luką może być oznakowanie aut i odzieży, ale nic tego nie potwierdza.")
add(210,"'t Nekkermenneke","Gastronomia","OPCJA ROZSZERZENIA","niska","Restauracja z tarasem i placem zabaw w Bladel, strona z menu, rezerwacjami, 'Kerstmis 2026', zakładką Vacatures. Grafika rekrutacyjna 'Medewerker bediening' (bez daty) pokazuje obsługę w czarnych koszulkach z drobnym nadrukiem i duży szyld z tyłu.",
 odz="POTWIERDZONE częściowo: kelnerki w czarnych koszulkach z małym nadrukiem (nieczytelny), grafika na stronie, data nieznana, https://www.nekkermenneke.nl/nekkermenneke/uploads/nekkermenneke/sites/1/ckfiles/Visuals_Tnekkermenneke-04.jpg",
 szyld="częściowo: w tle widać tablicę/szyld z napisem '...menneke' (fragment)",
 sygnal="Aktywna oferta na Kerstmis 2026 i wakat obsługi (grafika bez daty)",usl="Fartuchy i koszulki z logo dla obsługi (hipoteza)",
 conie="Pełny wygląd uniformu i fasady (Street View, zdjęcia Google Maps).",img=1,
 linki=["https://www.nekkermenneke.nl","https://www.nekkermenneke.nl/nekkermenneke/uploads/nekkermenneke/sites/1/ckfiles/Visuals_Tnekkermenneke-04.jpg"],
 uz="Obsługa nosi czarne koszulki z jakimś znakiem, a szyld istnieje, więc podstawy są. Rekrutacja obsługi wskazuje jedynie hipotetyczną okazję do domówienia odzieży.")
add(166,"Tattoo Joey","Fryzjerzy i beauty","NIEUSTALONE","niska","Studio tatuażu w Geldrop, kilkanaście artystów (zakładka Team), zakładki Merchandise, Vacatures, ocena 4.9. Podstrony nie pokazują zdjęć fasady ani aut.",
 odz="częściowo: istnieje zakładka Merchandise (sklep z własnym merchem), wygląd nie sprawdzony",sygnal="brak (Vacatures bez daty)",usl="Witryna i szyld studia (hipoteza)",
 conie="Zdjęcia fasady studia w Geldrop i merchu: Street View, Instagram.",img=0,
 linki=["https://tattoojoey.nl","https://tattoojoey.nl/team/","https://tattoojoey.nl/shop"],uz="Nie obejrzano żadnych zdjęć. Studio ma własny merch, ale brak dowodu na stan fasady.")
add(188,"E.T.V. Volley","Fitness i sport","NISKA SZANSA","wysoka","Stowarzyszenie tenisowo-padlowe (ETPV Volley, platforma KNLTB), komitety, bestuur, vrijwilligers; zdjęcia kortów. Odzież klubowa i reklama zależą od zarządu i sponsorów.",
 sygnal="brak",usl="Brak (ewentualnie odzież klubowa, jeśli zarząd zgłosi zapytanie)",hip=False,typ="stowarzyszenie",
 conie="Nie dotyczy; decyzje podejmuje zarząd klubu, a klub ma wspólną platformę KNLTB.",img=1,
 linki=["https://www.etv-volley.nl/","https://images.knltb.club/api/gallery/sliderimage?id=10cfa068-d61c-4107-b91c-ef559cd3fef5.jpg&width=1800"],
 uz="To stowarzyszenie (klub) z komitetami i decyzjami zarządu, a nie firma z budżetem na reklamę. Na zdjęciu tylko korty, bez reklamy do oceny.")
add(23,"Aannemersbedrijf Van Rijswijck","Budowlanka i remonty","NIEUSTALONE","niska","Rodzinna firma budowlana od 1934, 90 lat, projekty w Eindhoven i okolicach; strona prawie bez zdjęć (tylko zdjęcie dwóch właścicieli). Zakładka Werken bij bez daty.",
 sygnal="brak (z bazy: wzrost zatrudnienia +10.6% bez daty)",usl="Oklejenie busów i odzież robocza (hipoteza)",
 conie="Zdjęcia aut i ekip z realizacji oraz siedziby; Facebook, LinkedIn, Street View.",img=1,
 linki=["https://vanrijswijck.nl/","https://vanrijswijck.nl/over-ons","https://vanrijswijck.nl/projecten"],uz="Strona nie pokazuje floty ani odzieży, a jedyne zdjęcie przedstawia właścicieli. Wzrost zatrudnienia z bazy nie ma daty ani źródła, więc to tylko hipoteza.")
add(247,"De Groene Weg","Sklepy lokalne","NISKA SZANSA","średnia","Marka mięsa ekologicznego z siecią rzeźników i programem franczyzowym (nagłówek 'Franchise', zakładka 'Onze slagerijen', 45 lat), sklep internetowy. Zdjęcie sklepu: rzeźnik w pasiastej bluzie z wyhaftowanym logo, torba papierowa z logo.",
 odz="POTWIERDZONE: pasiasta bluza z napisem/logo De Groene Weg, zdjęcie z 2023-09, https://www.degroeneweg.nl/app/uploads/sites/3/2023/09/De_Groene_Weg_Eindhoven_451-835x570.jpg",
 druk="POTWIERDZONE: papierowa torba z logo De Groene Weg (to samo zdjęcie, 2023-09)",
 sygnal="brak",usl="Brak (materiały marki zapewne od centrali)",hip=False,typ="franczyza",
 conie="Czy sklep w Eindhoven ma swobodę zakupów lokalnych; to ustala centrala, bez kontaktu z nią.",img=1,
 linki=["https://www.degroeneweg.nl","https://www.degroeneweg.nl/app/uploads/sites/3/2023/09/De_Groene_Weg_Eindhoven_451-835x570.jpg"],
 uz="Marka działa jako sieć z franczyzą i jednolitą identyfikacją (odzież, torby), więc reklama jest narzucana centralnie. Mała szansa dla lokalnej pracowni.")
add(263,"Svea","Sklepy lokalne","NIEUSTALONE","niska","Showroom kuchni i łazienek 'Svea Keuken en Bad' na Ekkersrijt (Son en Breugel/Eindhoven), strona z copyright 2015 i zakładką Vacatures. Obejrzane zdjęcie to zlew i bateria, bez reklamy.",
 sygnal="brak",usl="Witryna i szyld showroomu (hipoteza)",conie="Zdjęcie fasady showroomu na Ekkersrijt (Street View) i aut montażowych.",img=1,
 linki=["https://www.sveakeukens.nl","https://www.sveakeukens.nl/cache/slider-large/slides/img_8957.jpeg"],uz="Strona pokazuje produkty, nie fasadę ani auta montażowe. Nie da się wskazać luki.")
add(129,"Verkeersschool Meurs","Szkoły jazdy","OPCJA ROZSZERZENIA","średnia","Szkoła jazdy z Steensel (gmina Eersel), 9 instruktorów na podstronie, kursy auto, motor, przyczepa, skuter. Zdjęcie instruktora przy aucie szkoleniowym z pełnym oznakowaniem.",
 auta="POTWIERDZONE: auto szkoleniowe z logo Meurs na masce i drzwiach, adresem www na drzwiach i dachową tablicą z literą L i logo; zdjęcie wgrane 2025-12, https://verkeersschoolmeurs.nl/wp-content/uploads/2025/12/Damas-scaled.jpg",
 odz="nieustalone (instruktor na zdjęciu w czarnej koszulce bez widocznego logo)",
 sygnal="brak",usl="Koszulki lub polo z logo dla instruktorów",
 conie="Czy wszystkie auta instruktorów są oznakowane tak samo i czy instruktorzy mają jednolitą odzież.",img=1,
 linki=["https://verkeersschoolmeurs.nl/","https://verkeersschoolmeurs.nl/over-ons/","https://verkeersschoolmeurs.nl/wp-content/uploads/2025/12/Damas-scaled.jpg"],
 uz="Auto z pełnym brandingiem jest potwierdzone (2025-12), więc głównej usługi GW nie trzeba sprzedawać. Luką może być odzież instruktorów, ale to hipoteza oparta na jednym zdjęciu.")
add(162,"Orange Kappers","Fryzjerzy i beauty","NIEUSTALONE","niska","Salon w Helmond ze stroną w systemie MKB marketing (godziny otwarcia aktualne na 2026-10), zakładki Abonnement, Filialen, Solliciteren. Zdjęcie wnętrza: pomarańczowe fotele i witryna od strony pasażu z plakatami, bez widocznego szyldu zewnętrznego.",
 szyld="częściowo: w witrynie wewnętrznej plakaty marek (Artistique); szyld zewnętrzny niewidoczny, zdjęcie bez daty",
 sygnal="Plakat 'Wij zoeken leuke collega's' na stronie (plik w folderze 2026-01-01, więc ok. styczeń 2026, nieostre)",usl="Okleina witryny i szyld salonu (hipoteza)",
 conie="Zdjęcie fasady salonu od strony pasażu (Street View) i aktualny stan witryny; zdjęcie wnętrza jest bez daty.",img=1,
 linki=["https://www.orangekappers.nl/"],uz="Brak zdjęcia szyldu i fasady, a wnętrze nie rozstrzyga luki. Rekrutacja jest słabo datowana (ścieżka pliku), więc to nie jest pewny sygnał.")
add(238,"Bakkertje Bol","Sklepy lokalne","NISKA SZANSA","średnia","Formuła piekarni z programem franczyzowym ('Word franchisenemer van Bakkertje Bol', zakładki Franchise, Food Partners), założona 2006 (od 1984 piekarnia Van de Looveren). Zdjęcia sklepów hostowane na showit.co, ich pobranie nie udało się (błąd certyfikatu TLS, nie obchodzono).",
 sygnal="brak",usl="Brak (identyfikacja sklepów zapewne wspólna dla franczyzy)",hip=False,typ="franczyza",
 conie="Zdjęcia sklepów (zdjęcia ze strony niedostępne z mojego środowiska) i zasady identyfikacji w franczyzie.",img=0,
 linki=["https://www.bakkertjebol.nl/","https://www.bakkertjebol.nl/franchise"],uz="Firma otwarcie oferuje franczyzę, więc wygląd sklepów jest zapewne ustalany centralnie. Zdjęć nie udało się obejrzeć z powodu błędu TLS.")
add(285,"Hattrick Uitzendbureau","Biura i usługi B2B","OPCJA ROZSZERZENIA","niska","Agencja pracy tymczasowej (Heerlen, Eindhoven, także Executive), 'Meet the Hattrick Family', logotypy klientów. Zdjęcie zespołu (wgrane 2025-10): 9 osób w eleganckich beżowo-białych strojach, bez widocznych logo.",
 odz="POTWIERDZONE brak logo: na zdjęciu zespołu z 2025-10 ubrania bez widocznego logo, https://www.hattrick.nl/wp-content/uploads/2025/10/Teamfoto-groot.jpeg",
 sygnal="brak (rekrutacja i vacatures to produkt agencji, nie sygnał zakupowy)",usl="Polo lub koszule z logo oraz materiały firmowe dla zespołu (hipoteza)",
 conie="Wygląd biura w Eindhoven (witryna, szyld) oraz czy agencja ma gadżety i odzież: Street View, LinkedIn.",img=1,
 linki=["https://hattrick.nl","https://www.hattrick.nl/wp-content/uploads/2025/10/Teamfoto-groot.jpeg","https://www.hattrick.nl/over-ons"],
 uz="Zespół na zdjęciu 2025-10 nie nosi widocznych logo, ale to wizerunkowe zdjęcie, nie codzienna odzież. Pozostaje hipoteza o domówieniu odzieży lub materiałów, z niską pewnością.")
add(16,"Joost. Renovatie & Nieuwbouw B.V.","Budowlanka i remonty","OPCJA ROZSZERZENIA","niska","Regionalny wykonawca z Helmond (Brandevoort), projekty willi i nowych domów, zakładki Projecten, Reviews. Na stronie adres w nowej dzielnicy z uwagą, że ulica nie jest jeszcze widoczna w Google Maps (bez daty).",
 odz="POTWIERDZONE: właściciel w czarnym polo z małym haftowanym logo na piersi (zdjęcie z podstrony Over ons, plik z 2023-04), https://joostbouw.nl/wp-content/uploads/2023/04/Aannemer-Joost-renovatie-nieuwbouw-Over-ons-foto-Joost1.jpg",
 sygnal="Adres siedziby w nowej dzielnicy (Martinalidonk, Brandevoort) z uwagą, że nie ma jej jeszcze w Google Maps; bez daty, https://joostbouw.nl/projecten/",
 usl="Oklejenie busów firmowych (hipoteza)",conie="Czy firma niedawno się przeprowadziła (siedziba bez szyldu?) i jak wyglądają busy; Street View lub zdjęcia z social mediów.",img=1,
 linki=["https://joostbouw.nl/","https://joostbouw.nl/projecten/","https://joostbouw.nl/over-ons/"],
 uz="Logo na odzież właściciela jest, auta i siedziba nieznane. Nowy adres w świeżej dzielnicy jest tylko słabą wskazówką (bez daty), a wzrost +33,3% z bazy jest niedatowany.")
add(250,"De Scharrelslager Royackers","Sklepy lokalne","NIEUSTALONE","niska","Rzeźnik 'scharrelslager' w Son en Breugel, 4 pokolenia od 1934, catering, BBQ, dostawa na terenie gminy; aktualności z 2026 (folder BBQ 2026-02-26, zamknięcie letnie 2026-05-01), Vacatures. Strona nie pokazała zdjęć sklepu ani aut.",
 sygnal="brak (aktualności 2026 dotyczą oferty, nie reklamy)",usl="Oklejenie auta dostawczego do cateringu i dostaw (hipoteza)",
 conie="Zdjęcia sklepu i auta dostawczego (Street View, Facebook).",img=0,
 linki=["https://slagerijroyackers.nl"],uz="Firma jest aktywna (2026), ma dostawy i catering, ale nie ma dowodu na stan reklamy fizycznej. Nie obejrzano żadnego zdjęcia.")
add(69,"JUIST! schoonmaak B.V.","Sprzątanie","OPCJA ROZSZERZENIA","średnia","Firma sprzątająca z Nuenen, Eindhoven i okolice, szkoły i przedszkola (klienci: Korein, SKPO, Platoo), 5,0 od 70+ klientów, strona z logo i grafiką zrobiona ok. 2025-11 (ID plików).",
 auta="POTWIERDZONE: biały VW up! z dużym logo JUIST! Schoonmaak na bokach, zdjęcie na stronie głównej (data nieznana), https://cdn.prod.website-files.com/6913131d56d52f02e32b172e/691465f189c00c666f18e96c_Juistschoonmaak_Auto.avif",
 odz="nieustalone (pracownik na zdjęciu w ciemnej odzieży bez widocznego logo, nieostre)",
 sygnal="brak (60+ lokalizacji szkół z bazy, bez daty; zakładka Werken bij bez daty)",usl="Odzież robocza z logo dla ekip sprzątających",
 conie="Czy wszystkie auta ekip mają oklejenie i czy ekipy noszą jednolitą odzież; zdjęcia ekip z social mediów.",img=2,
 linki=["https://juistschoonmaak.nl/","https://cdn.prod.website-files.com/6913131d56d52f02e32b172e/691465f189c00c666f18e96c_Juistschoonmaak_Auto.avif","https://cdn.prod.website-files.com/6913131d56d52f02e32b172e/691465f1c7d2d0c833ebbde4_Juistschoonmaak_vloeren.avif"],
 uz="Auto z pełnym oklejeniem jest potwierdzone, a pracownik na zdjęciu nie ma widocznego logo na ubraniu. Skala ponad 60 obiektów sugeruje wiele ekip, więc odzież jest rozsądną hipotezą domówienia.")
ids=[f['id'] for f in json.load(open('verdicts/in/chunk_09.json'))]
assert sorted(ids)==sorted(r['id'] for r in rows),(set(ids)^set(r['id'] for r in rows))
open('verdicts/out/chunk_09.jsonl','w').write(''.join(json.dumps(r,ensure_ascii=False)+'\n' for r in rows))
from collections import Counter
print(len(rows),Counter(r['werdykt'] for r in rows),sum(1 for r in rows if r['obejrzane_obrazy']>0),[r['id'] for r in rows if r['obejrzane_obrazy']==0])
