// All copy for the site, per language.
// PL is the source of meaning, NL is the primary language of the site (served at /), EN third.
// Only verified facts: no invented numbers, ratings, addresses, clients or promises.

export const SITE = {
  origin: 'https://www.gwgraphic.com',
  name: 'GW Graphic Design',
  owner: 'Grzegorz Woźniak',
  phone: '+31 6 44 31 94 15',
  phoneHref: '+31644319415',
  whatsapp: '31644319415',
  email: 'design@gwgraphic.com',
  region: 'Noord-Brabant',       // no public office: region only, no city in visible copy
  // ---- Business data: fill in to show it on the site (footer, Colofon/legal notice, schema). Empty = hidden, never a placeholder.
  legalName: '',                  // LEGAL_NAME, e.g. as registered with the KvK
  kvk: '',                        // KVK_NUMBER
  btw: '',                        // VAT_ID (btw-id)
  address: null,                  // BUSINESS_ADDRESS: { street: '', postalCode: '', city: '' }
  social: {
    instagram: 'https://www.instagram.com/gw_graphic_design/',
    facebook: 'https://www.facebook.com/GregWgraphicdesign',
    linkedin: 'https://www.linkedin.com/in/gwgraphic'
  },
  reviewsUrl: 'https://www.google.com/maps/search/?api=1&query=GW%20Graphic%20Design',
  updated: '2026-09-27'
};

// Home pages live at /, /en/, /pl/.
export const LANGS = {
  nl: { dir: '', label: 'NL', name: 'Nederlands', locale: 'nl_NL' },
  en: { dir: 'en/', label: 'EN', name: 'English', locale: 'en_GB' },
  pl: { dir: 'pl/', label: 'PL', name: 'Polski', locale: 'pl_PL' }
};

export const LEGAL_SLUGS = {
  privacy: { nl: 'privacybeleid.html', en: 'privacy.html', pl: 'polityka-prywatnosci.html' },
  cookies: { nl: 'cookiebeleid.html', en: 'cookies.html', pl: 'polityka-cookies.html' },
  terms: { nl: 'algemene-voorwaarden.html', en: 'terms.html', pl: 'regulamin.html' },
  notice: { nl: 'colofon.html', en: 'legal-notice.html', pl: 'nota-prawna.html' },
  a11y: { nl: 'toegankelijkheid.html', en: 'accessibility.html', pl: 'dostepnosc.html' }
};

// Service order (V10): Branding, Lettering/wraps, Apparel, Print, Websites, Promo items.
// Keys double as anchors (#dienst-<key>) and as form values sent to send.php.
export const SERVICE_IMAGES = {
  branding: ['kristofix-logo-op-papier', 'maniek-diensten-logo', 'patera-klussenbedrijf-logo'],
  belettering: ['kristofix-bus-belettering-zijkant', 'pmk-klusjesman-bussen-belettering', 'agm-montage-bussen-belettering', 'weldpolako-bedrijfsbussen-belettering', 'patera-klussenbedrijf-autobelettering'],
  kleding: ['maniek-diensten-bedrijfskleding', 'podtech-t-shirts', 'rijschool-simpel-weg-kleding'],
  drukwerk: ['maniek-diensten-visitekaartjes', 'spoko-flyers', 'dreamszone-roll-up-banner', 'spc-construction-spandoek', 'dpk-bouw-beachflag'],
  websites: ['kristofix-website', 'maniek-diensten-website'],
  gadgets: ['palmo-trans-magneetborden', 'gk-cars-kleding-mokken', 'holografische-stickers', 'custom-garage-eindhoven-stickers']
};
export const SERVICE_KEYS = Object.keys(SERVICE_IMAGES);
// Future dedicated pages (one domain, same slug in every language: /branding/, /en/branding/, /pl/branding/ …).
// Not generated yet; used as data-page on the homepage sections so the pages can be added without renaming.
export const SERVICE_PATHS = { branding: 'branding/', belettering: 'autobelettering/', kleding: 'bedrijfskleding/', drukwerk: 'drukwerk/', websites: 'websites/', gadgets: 'relatiegeschenken/' };

// Hero stage: one print per rotator word, same order as the words.
export const HERO_PRINTS = [
  ['kristofix-logo-op-papier', 'Kristofix', 'branding'],
  ['kristofix-bus-belettering-zijkant', 'Kristofix', 'belettering'],
  ['maniek-diensten-bedrijfskleding', 'Maniek Diensten', 'kleding'],
  ['maniek-diensten-visitekaartjes', 'Maniek Diensten', 'drukwerk'],
  ['kristofix-website', 'Kristofix', 'websites'],
  ['palmo-trans-magneetborden', 'Palmo-Trans', 'gadgets']
];

// Projects. secs are listed in the order the brand was built (the "route" shown in the case study).
// Only media that were actually made for that client.
export const PROJECTS = [
  { id: 'kristofix', name: 'Kristofix', cover: 'kristofix-bus-belettering-zijkant', long: true,
    secs: [['branding', ['kristofix-logo', 'kristofix-logo-op-papier']], ['drukwerk', ['kristofix-visitekaartjes']],
      ['belettering', ['kristofix-bus-belettering-voorzijde', 'kristofix-bus-belettering-schuin-achter', 'kristofix-bus-belettering-achterzijde']], ['websites', ['kristofix-website']]] },
  { id: 'maniek-diensten', name: 'Maniek Diensten', cover: 'maniek-diensten-bedrijfskleding', long: true,
    secs: [['branding', ['maniek-diensten-logo', 'maniek-diensten-logo-op-papier']], ['drukwerk', ['maniek-diensten-visitekaartjes']],
      ['kleding', ['maniek-diensten-bedrijfskleding']], ['websites', ['maniek-diensten-website']]] },
  { id: 'pmk-klusjesman', name: 'PMK Klusjesman', cover: 'pmk-klusjesman-bussen-belettering', long: true,
    secs: [['belettering', ['pmk-klusjesman-bussen-belettering']], ['kleding', ['pmk-klusjesman-t-shirts-petten']], ['drukwerk', ['pmk-klusjesman-bouwbord', 'pmk-klusjesman-spandoek', 'pmk-klusjesman-visitekaartjes']]] },
  { id: 'podtech', name: 'Podtech', cover: 'podtech-t-shirts', long: true,
    secs: [['branding', ['podtech-logo']], ['kleding', ['podtech-t-shirts', 'podtech-werkshirts', 'podtech-jassen', 'podtech-softshell-jassen', 'podtech-werkbroeken']]] },
  { id: 'patera', name: 'Patera Klussenbedrijf', cover: 'patera-klussenbedrijf-autobelettering',
    secs: [['branding', ['patera-klussenbedrijf-logo']], ['kleding', ['patera-klussenbedrijf-t-shirts']], ['belettering', ['patera-klussenbedrijf-autobelettering']]] },
  { id: 'weldpolako', name: 'WeldPolako', cover: 'weldpolako-bedrijfsbussen-belettering',
    secs: [['branding', ['weldpolako-logo']], ['belettering', ['weldpolako-bedrijfsbussen-belettering']], ['kleding', ['weldpolako-bedrijfskleding']]] },
  { id: 'custom-garage', name: 'Custom Garage Eindhoven', cover: 'custom-garage-eindhoven-hoodies',
    secs: [['branding', ['custom-garage-eindhoven-logo']], ['kleding', ['custom-garage-eindhoven-hoodies']], ['gadgets', ['custom-garage-eindhoven-stickers']]] }
];

// Authentic Google reviews. `text` is the published text (English); translations are marked as such on the page.
export const REVIEWS = [
  { name: 'Marcin P.', company: 'Patera Klussenbedrijf',
    text: 'Professional design and a very creative approach to the project. All changes were spot on and consulted at every stage. A true expert in his field. I wholeheartedly recommend cooperation with GW Graphic. Regards and thank you for a great project.',
    nl: 'Professioneel ontwerp en een heel creatieve aanpak van het project. Alle aanpassingen waren raak en werden bij elke stap overlegd. Een echte vakman. Ik raad samenwerking met GW Graphic van harte aan. Groeten en bedankt voor een geweldig project.',
    pl: 'Profesjonalny projekt i bardzo kreatywne podejście. Wszystkie zmiany były trafione i konsultowane na każdym etapie. Prawdziwy fachowiec w swojej dziedzinie. Z całego serca polecam współpracę z GW Graphic. Pozdrawiam i dziękuję za świetny projekt.' },
  { name: 'Catherine Z.', company: 'Dreamszone Evenementen',
    text: 'Fantastic collaboration is the first thing to mention. The logical and conscientious approach to the subject ensures that you will remain our advertising material provider for a long time. The logo you designed for us, Grzesiu, receives nothing but praise. The T-shirts make us noticeable and professional. Thank you so much, and we recommend you wholeheartedly.',
    nl: 'Allereerst: een fantastische samenwerking. Door je logische en zorgvuldige aanpak blijf je nog lang onze leverancier van reclamemateriaal. Het logo dat je voor ons ontwierp, Grzesiu, krijgt alleen maar complimenten. Dankzij de T-shirts vallen we op en zien we er professioneel uit. Heel erg bedankt, we raden je van harte aan.',
    pl: 'Przede wszystkim fantastyczna współpraca. Dzięki logicznemu i sumiennemu podejściu na długo zostaniesz naszym dostawcą materiałów reklamowych. Logo, które dla nas zaprojektowałeś, Grzesiu, zbiera same pochwały. Dzięki koszulkom jesteśmy widoczni i wyglądamy profesjonalnie. Bardzo dziękujemy i z całego serca polecamy.' },
  { name: 'Konrad G.', company: '',
    text: 'Great designs and execution. And most importantly — great contact. Discussing projects and ideas at an early stage was something that really brought my company to life! 6/5 stars!',
    nl: 'Geweldige ontwerpen en uitvoering. En het belangrijkste: goed contact. Door projecten en ideeën al vroeg te bespreken kwam mijn bedrijf echt tot leven! 6/5 sterren!',
    pl: 'Świetne projekty i wykonanie. A co najważniejsze – świetny kontakt. Omawianie projektów i pomysłów na wczesnym etapie naprawdę tchnęło życie w moją firmę! 6/5 gwiazdek!' },
  { name: 'Joanna P.', company: 'Fysiotherapie WeMove',
    text: 'Thank you for the personalized T-shirts and sweatshirts, thanks to which we could look better on Children’s Day in The Hague. Very easy and quick contact and shipping. I heartily recommend it!',
    nl: 'Bedankt voor de gepersonaliseerde T-shirts en sweaters, waardoor we er op Kinderdag in Den Haag beter uitzagen. Heel makkelijk en snel contact en een snelle verzending. Van harte aanbevolen!',
    pl: 'Dziękuję za personalizowane koszulki i bluzy, dzięki którym lepiej się prezentowaliśmy na Dniu Dziecka w Hadze. Bardzo łatwy i szybki kontakt oraz wysyłka. Serdecznie polecam!' },
  { name: 'Bartosz M.', company: 'Bartosz Infra',
    text: 'Highly recommended! A company run with passion! Everything handled without the slightest issue!',
    nl: 'Een echte aanrader! Een bedrijf dat met passie wordt gerund! Alles zonder het minste probleem geregeld!',
    pl: 'Gorąco polecam! Firma prowadzona z pasją! Wszystko załatwione bez najmniejszego problemu!' },
  { name: 'Elwira M.', company: 'MATU – home is You',
    text: 'I heartily recommend it, great project, good communication and quick implementation.',
    nl: 'Van harte aanbevolen: mooi ontwerp, goede communicatie en snelle uitvoering.',
    pl: 'Serdecznie polecam: świetny projekt, dobra komunikacja i szybka realizacja.' }
];

export const T = {
/* =============================== NL (primary) =============================== */
nl: {
  title: 'GW Graphic Design | Reclame, huisstijl, autobelettering en websites',
  description: 'Logo en huisstijl, autobelettering, bedrijfskleding, drukwerk en websites. Ontwerp, productie en montage door één vakman in Nederland, België en Duitsland.',
  ogTitle: 'GW Graphic Design | Reclame in elke vorm',
  skip: 'Ga naar de inhoud',
  homeAria: 'GW Graphic Design, naar de homepage',
  navAria: 'Hoofdmenu', langAria: 'Taal', menu: 'Menu', close: 'Sluiten',
  nav: { diensten: 'Diensten', projecten: 'Projecten', reviews: 'Reviews', over: 'Over mij', contact: 'Contact' },
  cta: 'Offerte aanvragen',
  gateHint: 'Klik op het logo', gateAria: 'Naar de website',
  gateNever: 'Niet meer tonen',
  faqTitle: 'Veelgestelde vragen',
  faq: [
    ['Waar voer je opdrachten en montages uit?', 'Ik werk voor bedrijven in Nederland, België, Duitsland en Polen. De mogelijkheden voor montage op locatie bespreek ik per opdracht, afhankelijk van het type project en de locatie. Drukwerk, bedrijfskleding en verschillende andere materialen kunnen ook worden verzonden.'],
    ['Werk je met facturen?', 'Ja. Zakelijke opdrachten worden op factuur uitgevoerd. Voor klanten uit andere EU-landen hangt de btw-behandeling af van het type transactie en de bedrijfsgegevens.'],
    ['Hoe werkt de betaling?', 'Na het vaststellen van de omvang van de opdracht wordt een aanbetaling van minimaal 50% van het totale bedrag gevraagd. Het resterende bedrag wordt betaald na goedkeuring van het ontwerp en vóór de start van drukwerk of productie.'],
    ['Hoeveel correctierondes zijn bij het ontwerp inbegrepen?', 'De offerte omvat de afgesproken omvang van het ontwerp en de bijbehorende correcties. Kleine aanpassingen op basis van de gemaakte afspraken maken deel uit van het proces. Een grotere wijziging van het concept of de omvang na goedkeuring kan apart worden berekend.'],
    ['Ontvang ik na het ontwerpen van een logo ook vectorbestanden en gebruiksrechten?', 'Na afronding van het logo ontvang je een compleet pakket bestanden voor drukwerk en online gebruik, inclusief vectorformaten. Welke bestanden en gebruiksrechten precies worden overgedragen, wordt bij de opdracht vastgelegd.'],
    ['In welke talen kunnen we communiceren?', 'Communicatie is mogelijk in het Pools, Engels en Nederlands.'],
    ['Kan voertuigfolie de lak beschadigen en hoe lang blijft de belettering goed?', 'Correct gekozen en professioneel aangebrachte folie hoort lak die in goede staat verkeert niet te beschadigen. De levensduur hangt af van het type folie, de ondergrond, het gebruik van het voertuig en de omstandigheden waaraan het wordt blootgesteld. Bij de offerte wordt een oplossing gekozen die past bij de specifieke toepassing.'],
    ['Welke informatie heb je nodig voor een offerte?', 'Beschrijf kort wat je nodig hebt en vermeld de belangrijkste gegevens, zoals het type opdracht, aantal, afmetingen, gewenste werkzaamheden en gewenste planning. Voor voertuig- of raambelettering zijn duidelijke foto\'s handig. Heb je al een logo of bestaand ontwerp, stuur dan ook de beschikbare bestanden mee.']
  ],
  ckIntroOn: 'Openingsanimatie weer tonen', ckIntroDone: 'De animatie is weer ingeschakeld.',
  flow: ['Ontwerp', 'Productie', 'Montage'],
  h1: ['Een', 'herkenbaar merk —', 'van logo tot bedrijfswagen.'],
  rotPre: 'Ik ontwerp:',
  rot: ['branding', 'voertuigbelettering', 'bedrijfskleding', 'drukwerk', 'websites', 'promotionele producten'],
  heroLead: 'Branding, drukwerk, bedrijfskleding, voertuigbelettering, websites en promotionele producten — ontworpen als één herkenbaar geheel. Voor bedrijven in Nederland, België en Duitsland.',
  heroBtn2: 'Bekijk projecten',
  heroMeta: ['Nederland · België · Duitsland', 'Montage op locatie', 'Google-reviews'],
  stageAria: 'Bekijk deze dienst',

  svEyebrow: 'Diensten',
  svTitle: ['Een consistente uitstraling', 'op elk medium.'],
  svIntro: 'Logo, bedrijfswagen, kleding, drukwerk en website moeten direct herkenbaar zijn als onderdelen van hetzelfde merk. Elk ontwerp wordt afgestemd op de rest, zodat alles samen één duidelijke en herkenbare uitstraling vormt.',
  services: [
    { name: 'Branding', sub: 'Logo en visuele identiteit', cta: 'Vraag naar branding',
      text: 'Een goed logo moet meer kunnen dan er op een scherm goed uitzien. Het moet werken op een visitekaartje, kleding, een voertuig en een website. Ik ontwerp een visuele identiteit die consequent in alle communicatie van je bedrijf kan worden toegepast.',
      tags: ['Logo-ontwerp', 'Visuele identiteit', 'Huisstijlrichtlijnen', 'Bestanden voor drukwerk en online gebruik'] },
    { name: 'Voertuig­belettering', sub: 'Auto\'s, bedrijfswagens, etalages en ramen', cta: 'Vraag naar belettering',
      text: 'Een bedrijfswagen is reclame die elke dag onderweg is. Het ontwerp wordt gemaakt voor het exacte voertuigmodel, met aandacht voor leesbaarheid, verhoudingen en zichtbaarheid op afstand. Van eenvoudige bedrijfsbelettering tot uitgebreidere wraps. Etalages en ramen worden op locatie aangebracht.',
      tags: ['Autobelettering', 'Bedrijfswagenbelettering', 'Full wrap', 'Etalages en ramen', 'Montage'] },
    { name: 'Bedrijfs­kleding', sub: 'Bedrukking voor bedrijf en team', cta: 'Vraag naar bedrijfskleding',
      text: 'Consistente bedrijfskleding versterkt de uitstraling van je bedrijf en maakt je team direct herkenbaar. Ik verzorg DTF- en flexbedrukking op T-shirts, polo\'s, hoodies, jassen en werkkleding — voor teams, evenementen en merchandise.',
      tags: ['T-shirts en polo\'s', 'Hoodies en jassen', 'Werkkleding', 'DTF- en flexbedrukking'] },
    { name: 'Drukwerk', sub: 'Van visitekaartje tot banner', cta: 'Vraag naar drukwerk',
      text: 'Drukwerk moet er in het echt net zo goed uitzien als in het ontwerp. Ik verzorg visitekaartjes, flyers, posters, roll-ups, banners, vlaggen, stickers en borden — passend bij de huisstijl en technisch correct voorbereid voor productie.',
      tags: ['Visitekaartjes', 'Flyers en posters', 'Roll-ups en banners', 'Vlaggen, stickers en borden'] },
    { name: 'Websites', sub: 'Een website die bij je bedrijf past', cta: 'Vraag naar een website',
      text: 'Ik ontwerp websites die duidelijk, snel en herkenbaar zijn als onderdeel van je merk. Indeling, inhoud en contactmogelijkheden hebben één doel: bezoekers moeten snel begrijpen wat je aanbiedt en wat de volgende stap is. Elke website is responsive en technisch goed opgebouwd voor SEO.',
      tags: ['Maatwerk ontwerp', 'Mobiele versie', 'Technische SEO-basis', 'Contact met één klik'] },
    { name: 'Promo­tionele producten', sub: 'Producten met jouw branding', cta: 'Vraag naar promotionele producten',
      text: 'Niet elk contact met een merk vindt online plaats. Mokken, magneten, buttons, stickers en andere promotionele producten kunnen je huisstijl versterken — tijdens evenementen, bij klanten of binnen je team.',
      tags: ['Mokken', 'Magneetborden', 'Stickers', 'Buttons'] }
  ],
  prev: 'Vorige afbeelding', next: 'Volgende afbeelding',

  prEyebrow: 'Projecten',
  prTitle: ['Je merk', 'in de praktijk.'],
  prIntro: 'Geselecteerde projecten waarin meerdere onderdelen — van logo tot voertuig, kleding of website — samen één herkenbare uitstraling vormen.',
  prOpen: 'Bekijk project',
  projects: {
    'kristofix': 'Logo, visitekaartjes, busbelettering en website — een complete visuele identiteit vanaf de basis.',
    'maniek-diensten': 'Logo, visitekaartjes, bedrijfskleding en website — één herkenbare stijl op ieder contactmoment.',
    'pmk-klusjesman': 'Belettering van drie bedrijfswagens, werkkleding, bouwbord en visitekaartjes — één consistente uitstraling voor een bedrijf dat dagelijks op locatie werkt.',
    'podtech': 'Logo en een complete lijn werkkleding voor een elektrotechnisch installatiebedrijf.',
    'patera': 'Logo, T-shirts en belettering van de bedrijfsauto voor een klussenbedrijf.',
    'weldpolako': 'Logo, belettering van twee bussen en bedrijfskleding voor een lasbedrijf.',
    'custom-garage': 'Logo, hoodies en stickers voor een garage.'
  },
  projectsLong: {
    'kristofix': 'Kristofix begon zonder huisstijl. Eerst kwam het logo met de drie vakmannen, daarna de visitekaartjes, de belettering van de Mercedes Vito aan alle kanten en een website in dezelfde kleuren. Overal hetzelfde logo, hetzelfde rood en dezelfde contactgegevens.',
    'maniek-diensten': 'De blauwe druppel met de letter M is de basis van de hele huisstijl van Maniek Diensten. Hetzelfde teken staat op de zwarte visitekaartjes, de shirts van het team en de website, zodat het bedrijf er bij elk contactmoment hetzelfde uitziet.',
    'pmk-klusjesman': 'De gele bussen van PMK Klusjesman zie je van ver. Dezelfde gele kleur en hetzelfde logo komen terug op de T-shirts, petten, het bouwbord en de visitekaartjes, zodat klanten elk onderdeel direct met het bedrijf verbinden.',
    'podtech': 'Het gele logo met de bliksemschicht staat op een complete lijn werkkleding: T-shirts, werkshirts, jassen, softshells en werkbroeken. Het hele team ziet er op elke bouwplaats hetzelfde uit.'
  },
  csEyebrow: 'Project', csRoute: 'Wat ik maakte', csResult: n => `Eén merk. ${n} toepassingen. Eén aanspreekpunt.`,
  csCta: 'Offerte aanvragen', csNext: 'Volgend project',

  pcEyebrow: 'Werkwijze',
  pcTitle: ['Van idee', 'tot uitvoering.'],
  process: [['Ontwerp', 'We bepalen de omvang, stijl en toepassing. Op basis daarvan ontstaat het ontwerp, dat we verfijnen voordat het wordt uitgevoerd.'], ['Productie', 'Na akkoord worden de materialen voorbereid voor de juiste techniek: drukwerk, folie, textielbedrukking of online publicatie.'], ['Montage', 'Belettering van voertuigen, etalages en ramen monteer ik op locatie. De overige materialen worden gebruiksklaar geleverd.']],
  pcNote: 'Eerst bepalen we wat je nodig hebt. Daarna volgen ontwerp en productie en, waar nodig, montage.',

  rvEyebrow: 'Reviews', rvTitle: 'Wat klanten zeggen', rvSource: 'Google-review', rvAll: 'Alle Google-reviews',
  rvPrev: 'Vorige review', rvNext: 'Volgende review', rvStars: '5 van 5 sterren',
  rvTr: 'Vertaling', rvOrig: 'Origineel', rvLangNote: 'Reviews in de oorspronkelijke taal, met vertaling.',

  abEyebrow: 'Over GW Graphic Design',
  abTitle: ['Ontworpen', 'met de uitvoering', 'in gedachten.'],
  abP: ['Mijn naam is Grzegorz Woźniak en ik run GW Graphic Design. Ik combineer grafisch ontwerp met de realisatie van reclamematerialen — van visuele identiteit, drukwerk en bedrijfskleding tot voertuigbelettering en websites.', 'Elk ontwerp wordt vanaf het begin gemaakt met de uiteindelijke toepassing in gedachten: op een scherm, papier, textiel, folie of voertuig. Het resultaat moet niet alleen goed ogen, maar ook duidelijk, praktisch en herkenbaar zijn.'],
  abFacts: [['Ontwerp', 'Logo, visuele identiteit en grafische materialen'], ['Productie', 'Drukwerk, kleding, folie en promotionele producten'], ['Montage', 'Voertuigen, etalages en ramen']],
  abRole: 'Grafisch ontwerper en reclamespecialist',

  fEyebrow: 'Offerte',
  fTitle: ['Vertel wat', 'je nodig hebt.'],
  fIntro: 'Beschrijf je project in een paar zinnen. Je ontvangt een concreet voorstel en een offerte.',
  fService: 'Waar gaat je aanvraag over?', fServiceHint: 'Je kunt meerdere opties selecteren.', fOther: 'Iets anders',
  fName: 'Naam', fCompany: 'Bedrijf', fEmail: 'E-mail', fPhone: 'Telefoon', fMessage: 'Bericht',
  fMessagePh: 'Bijvoorbeeld: belettering voor twee bussen en T-shirts voor het team.',
  fPref: 'Hoe wil je gecontacteerd worden?', fPrefOpts: ['E-mail', 'Telefoon', 'WhatsApp'],
  fOptional: 'optioneel', fRequired: 'verplicht',
  fPrivacy: 'Je gegevens worden alleen gebruikt om je aanvraag te beantwoorden. Lees het', fPrivacyLink: 'privacybeleid',
  fSend: 'Aanvraag versturen', fSending: 'Bezig met versturen…', fWa: 'Via WhatsApp versturen',
  fErrName: 'Vul je naam in.', fErrEmail: 'Vul een geldig e-mailadres in.', fErrPhone: 'Vul je telefoonnummer in, dan kan ik je bellen of appen.', fErrMessage: 'Schrijf kort waar je hulp bij zoekt.',
  fErrSummary: 'Controleer de gemarkeerde velden.',
  fErrRate: 'Er zijn al meerdere aanvragen verstuurd. Probeer het later opnieuw of bel me.',
  fErrSend: 'Versturen is niet gelukt. Probeer het opnieuw of mail naar design@gwgraphic.com.',
  fDoneTitle: 'Bedankt!', fDoneText: 'Je aanvraag is verstuurd. Ik neem zo snel mogelijk contact met je op.',
  waForm: 'Hallo Grzegorz, ik heb een vraag via gwgraphic.com.',

  ctEyebrow: 'Contact', ctTitle: 'Liever direct overleggen?',
  ctIntro: 'Bel, stuur een WhatsApp-bericht of mail. Gaat het om voertuigbelettering of branding? Dan kun je meteen een foto van het voertuig of je huidige logo meesturen.',
  ctWa: 'Stuur een bericht', ctPhone: 'Bellen', ctEmail: 'E-mail',
  ctMeta: 'Ik werk voor bedrijven in heel Nederland, België en Duitsland. Voertuigbelettering, etalages en ramen worden op locatie gemonteerd.',
  waText: 'Hallo Grzegorz, ik heb een vraag.',

  ftLine: 'Branding, voertuigbelettering, bedrijfskleding, drukwerk, websites en promotionele producten — van ontwerp tot uitvoering in één herkenbare stijl.',
  ftServices: 'Diensten', ftMenu: 'Menu', ftContact: 'Contact', ftSocial: 'Social media', ftLegal: 'Juridische informatie',
  ftServiceLinks: ['Logo en visuele identiteit', 'Voertuig- en raambelettering', 'Bedrijfskleding', 'Drukwerk', 'Websites', 'Promotionele producten'],
  ftArea: 'Nederland · België · Duitsland',
  legalNames: { privacy: 'Privacybeleid', cookies: 'Cookiebeleid', terms: 'Algemene voorwaarden', notice: 'Juridische informatie', a11y: 'Toegankelijkheid' },
  cookieSettings: 'Cookie-instellingen',
  ckTitle: 'Cookie-instellingen',
  ckText: 'Deze website gebruikt geen cookies voor statistieken, advertenties of tracking en laadt geen diensten van derden. Er is dus niets om toe te staan of te weigeren.',
  ckStore: 'Je browser onthoudt alleen hoe vaak je de site hebt bezocht en of je de openingsanimatie hebt uitgezet (localStorage). Dat blijft op je eigen apparaat.',
  ckClear: 'Opgeslagen gegevens wissen', ckCleared: 'Gewist.', ckMore: 'Lees het cookiebeleid',
  backHome: 'Terug naar de homepage', updated: 'Laatst bijgewerkt', updatedDate: '27 september 2026'
},

/* =============================== EN =============================== */
en: {
  title: 'GW Graphic Design | Branding, vehicle graphics, print and websites',
  description: 'Logo and brand identity, vehicle graphics, workwear, print and websites. Design, production and installation by one specialist in the Netherlands, Belgium and Germany.',
  ogTitle: 'GW Graphic Design | Advertising in any form',
  skip: 'Skip to content',
  homeAria: 'GW Graphic Design, go to the homepage',
  navAria: 'Main menu', langAria: 'Language', menu: 'Menu', close: 'Close',
  nav: { diensten: 'Services', projecten: 'Projects', reviews: 'Reviews', over: 'About', contact: 'Contact' },
  cta: 'Request a quote',
  gateHint: 'Click the logo', gateAria: 'Enter the website',
  gateNever: 'Don\'t show again',
  faqTitle: 'Frequently asked questions',
  faq: [
    ['Where do you provide services and on-site installation?', 'I work with businesses in the Netherlands, Belgium, Germany and Poland. On-site installation is arranged individually depending on the type of project and location. Print, branded clothing and various other materials can also be shipped.'],
    ['Do you provide invoices?', 'Yes. Business projects are invoiced. For clients in other EU countries, VAT treatment depends on the type of transaction and the company\'s details.'],
    ['How does payment work?', 'Once the scope of the order has been agreed, a deposit of at least 50% of the total value is required. The remaining balance is paid after the design has been approved and before printing or production begins.'],
    ['How many design revisions are included?', 'The quote covers the agreed scope of the project and related revisions. Small adjustments based on the original brief are part of the process. A significant change to the concept or scope after approval may require an additional quote.'],
    ['Will I receive vector files and usage rights for my logo?', 'Once the logo project is complete, you receive a full set of files for print and digital use, including vector formats. The exact files supplied and the usage rights are agreed as part of the order.'],
    ['Which languages can we communicate in?', 'Communication is available in Polish, English and Dutch.'],
    ['Can vehicle vinyl damage the paint, and how long does it last?', 'Correctly selected and professionally applied vinyl should not damage paintwork that is in good condition. Its lifespan depends on the type of vinyl, the surface, how the vehicle is used and the conditions it is exposed to. The appropriate solution is selected for each individual application.'],
    ['What do you need from me to prepare a quote?', 'Send a short description of what you need together with the basic details: type of project, quantity, dimensions, scope of work and preferred timing. For vehicle or window graphics, clear photos are helpful. If you already have a logo or existing artwork, include the available files as well.']
  ],
  ckIntroOn: 'Show the opening animation again', ckIntroDone: 'The animation is switched back on.',
  flow: ['Design', 'Production', 'Installation'],
  h1: ['A', 'consistent brand —', 'from logo to vehicle.'],
  rotPre: 'I design:',
  rot: ['branding', 'vehicle graphics', 'branded clothing', 'print', 'websites', 'promotional products'],
  heroLead: 'Branding, print, branded clothing, vehicle graphics, websites and promotional products — designed to make your business look consistent across every medium. For businesses in the Netherlands, Belgium and Germany.',
  heroBtn2: 'View projects',
  heroMeta: ['Netherlands · Belgium · Germany', 'On-site installation', 'Google reviews'],
  stageAria: 'View this service',

  svEyebrow: 'Services',
  svTitle: ['A consistent identity', 'across every medium.'],
  svIntro: 'Your logo, vehicle, clothing, print and website should immediately look like parts of the same brand. Each element is designed with the others in mind, creating a consistent and recognisable identity.',
  services: [
    { name: 'Branding', sub: 'Logo and visual identity', cta: 'Ask about branding',
      text: 'A good logo needs to do more than look good on a screen. It has to work on a business card, clothing, a vehicle and a website. I design visual identities that can be used consistently across every part of your business communication.',
      tags: ['Logo design', 'Visual identity', 'Brand guidelines', 'Files for print and digital use'] },
    { name: 'Vehicle graphics', sub: 'Cars, vans, shop windows and glass', cta: 'Ask about vehicle graphics',
      text: 'A company vehicle is advertising that works every day on the road. Each design is created for the exact vehicle model, with a strong focus on readability, proportions and visibility from a distance. From simple business lettering to more extensive wraps. Window graphics are installed on location.',
      tags: ['Car graphics', 'Van graphics', 'Full wraps', 'Windows and glass', 'Installation'] },
    { name: 'Branded clothing', sub: 'Prints for businesses and teams', cta: 'Ask about branded clothing',
      text: 'Consistent branded clothing strengthens your company\'s image and makes your team instantly recognisable. I provide DTF and flex printing on T-shirts, polos, hoodies, jackets and workwear — for teams, events and branded merchandise.',
      tags: ['T-shirts and polos', 'Hoodies and jackets', 'Workwear', 'DTF and flex printing'] },
    { name: 'Print', sub: 'From business cards to banners', cta: 'Ask about print',
      text: 'Printed materials should look just as good in real life as they do in the design. I create business cards, flyers, posters, roll-ups, banners, flags, stickers and signs — consistent with your visual identity and correctly prepared for production.',
      tags: ['Business cards', 'Flyers and posters', 'Roll-ups and banners', 'Flags, stickers and signs'] },
    { name: 'Websites', sub: 'A website built around your business', cta: 'Ask about a website',
      text: 'I design websites that are clear, fast and consistent with your brand. Layout, content and contact options all serve one goal: visitors should quickly understand what you offer and know what to do next. Every website is responsive and built with a solid technical structure for SEO.',
      tags: ['Custom design', 'Mobile responsive', 'Technical SEO foundations', 'One-click contact'] },
    { name: 'Promotional products', sub: 'Products with your branding', cta: 'Ask about promotional products',
      text: 'Not every interaction with a brand happens on a screen. Mugs, magnets, buttons, stickers and other promotional products can extend your visual identity — at events, with customers or within your team.',
      tags: ['Mugs', 'Magnetic signs', 'Stickers', 'Buttons'] }
  ],
  prev: 'Previous image', next: 'Next image',

  prEyebrow: 'Projects',
  prTitle: ['Your brand', 'in practice.'],
  prIntro: 'Selected projects where several elements — from the logo to vehicles, clothing or a website — come together as one consistent identity.',
  prOpen: 'View project',
  projects: {
    'kristofix': 'Logo, business cards, van graphics and website — a complete visual identity built from the ground up.',
    'maniek-diensten': 'Logo, business cards, branded clothing and website — one recognisable style across every customer touchpoint.',
    'pmk-klusjesman': 'Graphics for three vans, workwear, a construction sign and business cards — a consistent set of materials for a company working on location every day.',
    'podtech': 'Logo and a complete workwear line for an electrical installation company.',
    'patera': 'Logo, T-shirts and company car graphics for a handyman business.',
    'weldpolako': 'Logo, graphics for two vans and workwear for a welding company.',
    'custom-garage': 'Logo, hoodies and stickers for a garage.'
  },
  projectsLong: {
    'kristofix': 'Kristofix started without any brand identity. First came the logo with the three tradesmen, then the business cards, graphics on every side of the Mercedes Vito, and a website in the same colours. The same logo, the same red and the same contact details everywhere.',
    'maniek-diensten': 'The blue drop with the letter M is the basis of Maniek Diensten’s whole identity. The same mark appears on the black business cards, the team’s shirts and the website, so the business looks the same at every point of contact.',
    'pmk-klusjesman': 'You can spot PMK Klusjesman’s yellow vans from a distance. The same yellow and the same logo return on the T-shirts, caps, site sign and business cards, so customers link every item straight to the business.',
    'podtech': 'The yellow logo with the lightning bolt runs through a complete workwear line: T-shirts, work shirts, jackets, softshells and work trousers. The whole team looks the same on every site.'
  },
  csEyebrow: 'Project', csRoute: 'What I made', csResult: n => `One brand. ${n} applications. One point of contact.`,
  csCta: 'Get a quote', csNext: 'Next project',

  pcEyebrow: 'Process',
  pcTitle: ['From idea', 'to finished result.'],
  process: [['Design', 'We define the scope, style and application. From there, the design is developed and refined before it goes into production.'], ['Production', 'Once approved, the materials are prepared for the right production method: print, vinyl, garment printing or online publication.'], ['Installation', 'Vehicle, shop window and glass graphics are installed on location. Everything else is delivered ready to use.']],
  pcNote: 'First, we define what you need. Then the project moves through design and production and, where required, installation.',

  rvEyebrow: 'Reviews', rvTitle: 'What clients say', rvSource: 'Google review', rvAll: 'View all Google reviews',
  rvPrev: 'Previous review', rvNext: 'Next review', rvStars: '5 out of 5 stars',
  rvTr: 'Translation', rvOrig: 'Original', rvLangNote: 'Reviews shown in their original language with translations.',

  abEyebrow: 'About GW Graphic Design',
  abTitle: ['Designed', 'with real-world', 'use in mind.'],
  abP: ['My name is Grzegorz Woźniak and I run GW Graphic Design. I combine graphic design with the production of advertising materials — from visual identity, print and branded clothing to vehicle graphics and websites.', 'Every project is designed from the start with its final use in mind: on screen, paper, fabric, vinyl or a vehicle. The result should not only look good, but also be clear, practical and consistent with the brand.'],
  abFacts: [['Design', 'Logos, visual identity and graphic materials'], ['Production', 'Print, clothing, vinyl and promotional products'], ['Installation', 'Vehicles, shop windows and glass']],
  abRole: 'Graphic designer and advertising specialist',

  fEyebrow: 'Quote',
  fTitle: ['Tell me', 'what you need.'],
  fIntro: 'Describe your project in a few sentences. You\'ll receive a clear proposal and a quote.',
  fService: 'What is your enquiry about?', fServiceHint: 'You can select more than one.', fOther: 'Something else',
  fName: 'Name', fCompany: 'Company', fEmail: 'E-mail', fPhone: 'Phone', fMessage: 'Message',
  fMessagePh: 'For example: graphics for two vans and T-shirts for the team.',
  fPref: 'How would you like to be contacted?', fPrefOpts: ['E-mail', 'Phone', 'WhatsApp'],
  fOptional: 'optional', fRequired: 'required',
  fPrivacy: 'Your details will only be used to respond to your enquiry. Read the', fPrivacyLink: 'privacy policy',
  fSend: 'Send enquiry', fSending: 'Sending…', fWa: 'Send via WhatsApp',
  fErrName: 'Please enter your name.', fErrEmail: 'Please enter a valid email address.', fErrPhone: 'Please enter your phone number so I can call or message you.', fErrMessage: 'Please tell me briefly what you need.',
  fErrSummary: 'Please check the highlighted fields.',
  fErrRate: 'Several requests have already been sent. Please try again later or give me a call.',
  fErrSend: 'Sending failed. Please try again or email design@gwgraphic.com.',
  fDoneTitle: 'Thank you!', fDoneText: 'Your enquiry has been sent. I\'ll get back to you as soon as possible.',
  waForm: 'Hello Grzegorz, I have a question via gwgraphic.com.',

  ctEyebrow: 'Contact', ctTitle: 'Prefer to talk straight away?',
  ctIntro: 'Call, send a WhatsApp message or e-mail. If you\'re asking about vehicle graphics or branding, you can send a photo of the vehicle or your current logo straight away.',
  ctWa: 'Send a message', ctPhone: 'Call', ctEmail: 'E-mail',
  ctMeta: 'I work with businesses across the Netherlands, Belgium and Germany. Vehicle, shop window and glass graphics are installed on location.',
  waText: 'Hello Grzegorz, I have a question.',

  ftLine: 'Branding, vehicle graphics, branded clothing, print, websites and promotional products — consistent from design through to finished result.',
  ftServices: 'Services', ftMenu: 'Menu', ftContact: 'Contact', ftSocial: 'Social media', ftLegal: 'Legal information',
  ftServiceLinks: ['Logo and visual identity', 'Vehicle and window graphics', 'Branded clothing', 'Print', 'Websites', 'Promotional products'],
  ftArea: 'Netherlands · Belgium · Germany',
  legalNames: { privacy: 'Privacy policy', cookies: 'Cookie policy', terms: 'Terms and conditions', notice: 'Legal notice', a11y: 'Accessibility' },
  cookieSettings: 'Cookie settings',
  ckTitle: 'Cookie settings',
  ckText: 'This website does not use cookies for statistics, advertising or tracking, and loads no third-party services. So there is nothing to accept or reject.',
  ckStore: 'Your browser only remembers how often you have visited and whether you switched the opening animation off (localStorage). It stays on your own device.',
  ckClear: 'Clear stored data', ckCleared: 'Cleared.', ckMore: 'Read the cookie policy',
  backHome: 'Back to the homepage', updated: 'Last updated', updatedDate: '27 September 2026'
},

/* =============================== PL (source of meaning) =============================== */
pl: {
  title: 'GW Graphic Design | Reklama, branding, oklejanie aut i strony internetowe',
  description: 'Logo, oklejanie aut i witryn, odzież firmowa, druk i strony internetowe. Projekt, produkcja i montaż w jednych rękach – w Holandii, Belgii i Niemczech.',
  ogTitle: 'GW Graphic Design | Reklama w każdej formie',
  skip: 'Przejdź do treści',
  homeAria: 'GW Graphic Design, strona główna',
  navAria: 'Menu główne', langAria: 'Język', menu: 'Menu', close: 'Zamknij',
  nav: { diensten: 'Usługi', projecten: 'Projekty', reviews: 'Opinie', over: 'O mnie', contact: 'Kontakt' },
  cta: 'Zapytaj o wycenę',
  gateHint: 'Kliknij logo', gateAria: 'Wejdź na stronę',
  gateNever: 'Nie pokazuj ponownie',
  faqTitle: 'Najczęściej zadawane pytania',
  faq: [
    ['Gdzie realizujesz zlecenia i montaż?', 'Realizuję projekty dla firm w Holandii, Belgii, Niemczech i Polsce. Zakres dojazdu i montażu ustalam indywidualnie w zależności od rodzaju realizacji i lokalizacji. Druk, odzież i część pozostałych materiałów mogę również wysłać.'],
    ['Czy wystawiasz fakturę?', 'Tak. Wszystkie realizacje dla firm są rozliczane na podstawie faktury. W przypadku klientów z innych krajów UE sposób naliczenia VAT zależy od rodzaju transakcji i danych firmy.'],
    ['Jak wygląda płatność za realizację?', 'Po ustaleniu zakresu zamówienia pobieram zaliczkę w wysokości minimum 50% wartości całości. Pozostała kwota jest płatna po akceptacji projektu, przed rozpoczęciem druku lub produkcji.'],
    ['Ile poprawek projektu jest w cenie?', 'Wycena obejmuje określony zakres projektu i jego korekty. Drobne poprawki wynikające z wcześniejszych ustaleń są częścią procesu. Większa zmiana koncepcji lub zakresu po akceptacji może wymagać dodatkowej wyceny.'],
    ['Czy po wykonaniu logo otrzymam pliki wektorowe i prawa do projektu?', 'Po zakończeniu projektu logo otrzymujesz komplet gotowych plików do druku i internetu, w tym formaty wektorowe. Zakres przekazywanych plików i praw do wykorzystania projektu jest określony przy zamówieniu.'],
    ['W jakich językach możemy się kontaktować?', 'Kontakt jest możliwy po polsku, angielsku i niderlandzku.'],
    ['Czy folia może uszkodzić lakier i jak długo wytrzymuje oklejenie?', 'Prawidłowo dobrana i zamontowana folia na lakierze w dobrym stanie nie powinna go uszkodzić. Trwałość zależy od rodzaju folii, powierzchni, sposobu użytkowania pojazdu i warunków, w jakich jest eksploatowany. Przy wycenie dobieram rozwiązanie odpowiednie do konkretnego zastosowania.'],
    ['Co muszę wysłać, żeby otrzymać wycenę?', 'Napisz krótko, czego potrzebujesz, i podaj podstawowe informacje: rodzaj realizacji, ilość, wymiary, zakres prac oraz oczekiwany termin. Przy oklejaniu przydadzą się zdjęcia pojazdu lub witryny, a jeśli masz już logo lub gotowe materiały — dołącz również aktualne pliki.']
  ],
  ckIntroOn: 'Znów pokazuj animację otwarcia', ckIntroDone: 'Animacja jest znów włączona.',
  flow: ['Projekt', 'Produkcja', 'Montaż'],
  h1: ['Spójny', 'wizerunek firmy —', 'od logo po samochód.'],
  rotPre: 'Projektuję:',
  rot: ['branding', 'oklejanie pojazdów', 'odzież firmową', 'druk', 'strony internetowe', 'gadżety reklamowe'],
  heroLead: 'Branding, druk, odzież firmowa, oklejanie pojazdów, strony internetowe i gadżety — wszystko zaprojektowane tak, żeby firma wyglądała spójnie na każdym nośniku. Dla firm z Holandii, Belgii i Niemiec.',
  heroBtn2: 'Zobacz realizacje',
  heroMeta: ['Holandia · Belgia · Niemcy', 'Montaż na miejscu', 'Opinie w Google'],
  stageAria: 'Zobacz tę usługę',

  svEyebrow: 'Usługi',
  svTitle: ['Spójny wizerunek', 'na każdym materiale.'],
  svIntro: 'Logo, bus, odzież, druk i strona internetowa powinny od razu wyglądać jak elementy tej samej marki. Każdy projekt powstaje z uwzględnieniem pozostałych, żeby całość była konsekwentna i rozpoznawalna.',
  services: [
    { name: 'Branding', sub: 'Logo i identyfikacja wizualna', cta: 'Zapytaj o branding',
      text: 'Dobre logo nie kończy się na ekranie. Musi działać na wizytówce, odzieży, samochodzie i stronie internetowej. Projektuję identyfikację, którą można konsekwentnie wykorzystać w całej komunikacji firmy.',
      tags: ['Projekt logo', 'Identyfikacja wizualna', 'Księga znaku', 'Pliki do druku i internetu'] },
    { name: 'Oklejanie', sub: 'Auta, busy, witryny i szyby', cta: 'Zapytaj o oklejenie',
      text: 'Samochód firmowy to reklama, która codziennie pracuje w ruchu. Projekt powstaje pod konkretny model pojazdu, z naciskiem na czytelność, proporcje i dobrą widoczność z dystansu. Od prostego oznakowania po bardziej rozbudowane oklejenia. Witryny i szyby realizuję na miejscu.',
      tags: ['Oklejanie aut', 'Oklejanie busów', 'Pełny wrap', 'Witryny i szyby', 'Montaż'] },
    { name: 'Odzież firmowa', sub: 'Nadruki dla firmy i zespołu', cta: 'Zapytaj o odzież',
      text: 'Spójna odzież wzmacnia wizerunek firmy i sprawia, że zespół jest od razu rozpoznawalny. Realizuję nadruki DTF i flex na koszulkach, polo, bluzach, kurtkach i odzieży roboczej — dla ekip, na wydarzenia i jako firmowy merch.',
      tags: ['Koszulki i polo', 'Bluzy i kurtki', 'Odzież robocza', 'Nadruk DTF i flex'] },
    { name: 'Druk', sub: 'Od wizytówki po baner', cta: 'Zapytaj o druk',
      text: 'Materiały drukowane powinny wyglądać tak samo dobrze jak projekt na ekranie. Przygotowuję wizytówki, ulotki, plakaty, roll-upy, banery, flagi, naklejki i tablice — spójne z identyfikacją i poprawnie przygotowane do produkcji.',
      tags: ['Wizytówki', 'Ulotki i plakaty', 'Roll-upy i banery', 'Flagi, naklejki i tablice'] },
    { name: 'Strony internetowe', sub: 'Strona dopasowana do Twojej firmy', cta: 'Zapytaj o stronę internetową',
      text: 'Projektuję strony, które są czytelne, szybkie i spójne z marką. Układ, treść i kontakt są podporządkowane jednemu celowi: klient ma szybko zrozumieć ofertę i wiedzieć, co zrobić dalej. Każda strona jest responsywna i ma poprawną strukturę techniczną pod SEO.',
      tags: ['Projekt na wymiar', 'Wersja mobilna', 'Techniczne podstawy SEO', 'Kontakt jednym kliknięciem'] },
    { name: 'Gadżety reklamowe', sub: 'Produkty z Twoim brandingiem', cta: 'Zapytaj o gadżety',
      text: 'Nie każdy kontakt z marką odbywa się na ekranie. Kubki, magnesy, przypinki, naklejki i inne gadżety mogą uzupełnić identyfikację firmy — na wydarzeniach, dla klientów albo dla zespołu.',
      tags: ['Kubki', 'Tablice magnetyczne', 'Naklejki', 'Przypinki'] }
  ],
  prev: 'Poprzednie zdjęcie', next: 'Następne zdjęcie',

  prEyebrow: 'Projekty',
  prTitle: ['Marka', 'w praktyce.'],
  prIntro: 'Wybrane realizacje, w których kilka elementów — od logo po samochód, odzież czy stronę internetową — tworzy jeden spójny wizerunek.',
  prOpen: 'Zobacz projekt',
  projects: {
    'kristofix': 'Logo, wizytówki, oklejenie busa i strona internetowa — kompletna identyfikacja przygotowana od podstaw.',
    'maniek-diensten': 'Logo, wizytówki, odzież firmowa i strona internetowa — jeden styl we wszystkich punktach kontaktu z klientem.',
    'pmk-klusjesman': 'Oklejenie trzech busów, odzież robocza, tablica budowlana i wizytówki — spójny zestaw materiałów dla firmy działającej w terenie.',
    'podtech': 'Logo i pełna linia odzieży roboczej dla firmy instalacji elektrycznych.',
    'patera': 'Logo, koszulki i oklejenie auta firmowego dla firmy remontowej.',
    'weldpolako': 'Logo, oklejenie dwóch busów i odzież firmowa dla firmy spawalniczej.',
    'custom-garage': 'Logo, bluzy i naklejki dla warsztatu samochodowego.'
  },
  projectsLong: {
    'kristofix': 'Kristofix zaczynał bez żadnej identyfikacji. Najpierw powstało logo z trzema fachowcami, potem wizytówki, oklejenie Mercedesa Vito z każdej strony i strona internetowa w tych samych kolorach. Wszędzie to samo logo, ta sama czerwień i te same dane kontaktowe.',
    'maniek-diensten': 'Niebieska kropla z literą M to podstawa całej identyfikacji Maniek Diensten. Ten sam znak trafił na czarne wizytówki, koszulki ekipy i stronę internetową, więc firma wygląda tak samo przy każdym kontakcie z klientem.',
    'pmk-klusjesman': 'Żółte busy PMK Klusjesman widać z daleka. Ten sam kolor i to samo logo wracają na koszulkach, czapkach, tablicy budowlanej i wizytówkach, dzięki czemu klient od razu łączy każdy element z firmą.',
    'podtech': 'Żółte logo z błyskawicą trafiło na pełną linię odzieży roboczej: koszulki, koszulki techniczne, kurtki, softshelle i spodnie robocze. Cała ekipa wygląda jednakowo na każdej budowie.'
  },
  csEyebrow: 'Projekt', csRoute: 'Co przygotowałem', csResult: n => `Jedna marka. ${n} ${n >= 2 && n <= 4 ? 'nośniki' : 'nośników'}. Jedna osoba do kontaktu.`,
  csCta: 'Zapytaj o wycenę', csNext: 'Następny projekt',

  pcEyebrow: 'Współpraca',
  pcTitle: ['Od pomysłu', 'do gotowej realizacji.'],
  process: [['Projekt', 'Ustalamy zakres, styl i zastosowanie. Na tej podstawie powstaje projekt, który dopracowujemy przed realizacją.'], ['Produkcja', 'Po akceptacji materiały są przygotowywane do odpowiedniej technologii: druku, folii, znakowania odzieży lub publikacji online.'], ['Montaż', 'Oklejenia pojazdów, witryn i szyb montuję na miejscu. Pozostałe materiały dostajesz gotowe do użycia.']],
  pcNote: 'Najpierw ustalamy, czego potrzebujesz. Potem projekt przechodzi do produkcji i — tam, gdzie jest to potrzebne — montażu.',

  rvEyebrow: 'Opinie', rvTitle: 'Co mówią klienci', rvSource: 'Opinia w Google', rvAll: 'Wszystkie opinie w Google',
  rvPrev: 'Poprzednia opinia', rvNext: 'Następna opinia', rvStars: '5 na 5 gwiazdek',
  rvTr: 'Tłumaczenie', rvOrig: 'Oryginał', rvLangNote: 'Opinie w oryginalnym języku, z tłumaczeniem.',

  abEyebrow: 'O GW Graphic Design',
  abTitle: ['Projektowanie', 'z myślą', 'o realnym wykonaniu.'],
  abP: ['Nazywam się Grzegorz Woźniak i prowadzę GW Graphic Design. Łączę projektowanie graficzne z realizacją materiałów reklamowych — od identyfikacji wizualnej, przez druk i odzież, po oklejanie pojazdów i strony internetowe.', 'Każdy projekt od początku powstaje z myślą o tym, gdzie naprawdę będzie używany: na ekranie, papierze, tkaninie, folii czy samochodzie. Efekt ma być nie tylko estetyczny, ale też czytelny, praktyczny i spójny z marką.'],
  abFacts: [['Projekt', 'Logo, identyfikacja i materiały graficzne'], ['Produkcja', 'Druk, odzież, folie i gadżety'], ['Montaż', 'Pojazdy, witryny i szyby']],
  abRole: 'Projektant graficzny i specjalista reklamy',

  fEyebrow: 'Wycena',
  fTitle: ['Opowiedz,', 'czego potrzebujesz.'],
  fIntro: 'Napisz kilka zdań o projekcie. Wrócę z konkretną propozycją i wyceną.',
  fService: 'Czego dotyczy zapytanie?', fServiceHint: 'Możesz zaznaczyć kilka.', fOther: 'Coś innego',
  fName: 'Imię i nazwisko', fCompany: 'Firma', fEmail: 'E-mail', fPhone: 'Telefon', fMessage: 'Wiadomość',
  fMessagePh: 'Na przykład: oklejenie dwóch busów i koszulki dla ekipy.',
  fPref: 'Jak mam się z Tobą skontaktować?', fPrefOpts: ['E-mail', 'Telefon', 'WhatsApp'],
  fOptional: 'opcjonalnie', fRequired: 'wymagane',
  fPrivacy: 'Twoje dane wykorzystam tylko do odpowiedzi na zapytanie. Przeczytaj', fPrivacyLink: 'politykę prywatności',
  fSend: 'Wyślij zapytanie', fSending: 'Wysyłanie…', fWa: 'Wyślij przez WhatsApp',
  fErrName: 'Podaj imię i nazwisko.', fErrEmail: 'Podaj poprawny adres e-mail.', fErrPhone: 'Podaj numer telefonu, żebym mógł zadzwonić albo napisać.', fErrMessage: 'Napisz kilka słów o projekcie.',
  fErrSummary: 'Uzupełnij zaznaczone pola.',
  fErrRate: 'Wysłano już kilka zapytań. Spróbuj później albo zadzwoń.',
  fErrSend: 'Nie udało się wysłać. Spróbuj ponownie albo napisz na design@gwgraphic.com.',
  fDoneTitle: 'Dziękuję!', fDoneText: 'Zapytanie zostało wysłane. Odpowiem najszybciej, jak to możliwe.',
  waForm: 'Dzień dobry, piszę przez gwgraphic.com.',

  ctEyebrow: 'Kontakt', ctTitle: 'Wolisz porozmawiać od razu?',
  ctIntro: 'Zadzwoń, napisz na WhatsApp albo wyślij e-mail. Jeśli chodzi o oklejanie lub branding, możesz od razu przesłać zdjęcie auta albo obecne logo.',
  ctWa: 'Napisz wiadomość', ctPhone: 'Zadzwoń', ctEmail: 'E-mail',
  ctMeta: 'Obsługuję firmy w całej Holandii, Belgii i Niemczech. Oklejanie pojazdów, witryn i szyb realizuję na miejscu.',
  waText: 'Dzień dobry, mam pytanie.',

  ftLine: 'Branding, oklejanie pojazdów, odzież firmowa, druk, strony internetowe i gadżety — spójnie od projektu po realizację.',
  ftServices: 'Usługi', ftMenu: 'Menu', ftContact: 'Kontakt', ftSocial: 'Social media', ftLegal: 'Informacje prawne',
  ftServiceLinks: ['Logo i identyfikacja', 'Oklejanie aut i witryn', 'Odzież firmowa', 'Druk', 'Strony internetowe', 'Gadżety reklamowe'],
  ftArea: 'Holandia · Belgia · Niemcy',
  legalNames: { privacy: 'Polityka prywatności', cookies: 'Polityka cookies', terms: 'Regulamin', notice: 'Nota prawna', a11y: 'Dostępność' },
  cookieSettings: 'Ustawienia cookies',
  ckTitle: 'Ustawienia cookies',
  ckText: 'Ta strona nie używa plików cookies do statystyk, reklam ani śledzenia i nie wczytuje usług zewnętrznych. Nie ma więc na co wyrażać zgody.',
  ckStore: 'Przeglądarka zapamiętuje tylko liczbę wizyt i to, czy wyłączyłeś animację otwarcia (localStorage). Informacja zostaje na Twoim urządzeniu.',
  ckClear: 'Wyczyść zapisane dane', ckCleared: 'Wyczyszczono.', ckMore: 'Przeczytaj politykę cookies',
  backHome: 'Wróć na stronę główną', updated: 'Ostatnia aktualizacja', updatedDate: '27 września 2026'
}
};
