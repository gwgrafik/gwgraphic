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
  kvk: '',                        // fill in to show on the site (Colofon + schema); empty = hidden
  btw: '',                        // idem
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
    secs: [['belettering', ['pmk-klusjesman-bussen-belettering']], ['kleding', ['pmk-klusjesman-t-shirts-petten']], ['drukwerk', ['pmk-klusjesman-bouwbord', 'pmk-klusjesman-visitekaartjes']]] },
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
  skip: 'Naar de inhoud',
  homeAria: 'GW Graphic Design, naar de homepage',
  navAria: 'Hoofdmenu', langAria: 'Taal', menu: 'Menu', close: 'Sluiten',
  nav: { diensten: 'Diensten', projecten: 'Projecten', reviews: 'Reviews', over: 'Over mij', contact: 'Contact' },
  cta: 'Offerte aanvragen',
  gateHint: 'Klik op het logo', gateAria: 'Naar de website', gateSkip: 'Intro overslaan',
  flow: ['Ontwerp', 'Productie', 'Montage'],
  h1: ['Reclame', 'in elke', 'vorm.'],
  rotPre: 'Jouw partner voor',
  rot: ['huisstijl', 'autobelettering', 'bedrijfskleding', 'drukwerk', 'websites', 'relatiegeschenken'],
  heroLead: 'Ik ontwerp, produceer en monteer: van logo tot volledig beletterde bedrijfsbus. Voor bedrijven in heel Nederland, België en Duitsland, met één aanspreekpunt van begin tot eind.',
  heroBtn2: 'Bekijk projecten',
  heroMeta: ['Nederland · België · Duitsland', 'Montage op locatie', 'Google reviews'],
  stageAria: 'Bekijk deze dienst',

  svEyebrow: 'Diensten',
  svTitle: ['Zes vakgebieden.', 'Eén herkenbaar merk.'],
  svIntro: 'Je logo, je bus, de shirts van je team en je website moeten eruitzien als één bedrijf. Daarom maak ik het allemaal: dezelfde kleuren, dezelfde bestanden en één persoon die verantwoordelijk is voor het resultaat.',
  services: [
    { name: 'Branding', sub: 'Logo en huisstijl', cta: 'Offerte voor branding',
      text: 'Een goed logo werkt net zo goed op een visitekaartje als op een bus van zes meter. Ik ontwerp je logo, kies de kleuren en lettertypes en lever alle bestanden die je nodig hebt voor drukwerk, kleding, belettering en je website.',
      tags: ['Logo-ontwerp', 'Huisstijl', 'Huisstijlgids', 'Bestanden voor druk en web'] },
    { name: 'Belettering', sub: 'Auto’s, bussen, etalages en ramen', cta: 'Offerte voor belettering',
      text: 'Je bedrijfswagen laat je naam elke dag zien, op elke route en elke parkeerplaats. Ik ontwerp de belettering voor jouw model en breng de folie zelf aan, van losse letters tot een complete wrap. Ook etalages en ramen voorzie ik op locatie van belettering.',
      tags: ['Autobelettering', 'Bedrijfsbussen', 'Carwrapping', 'Raam- en etalagebelettering', 'Montage'] },
    { name: 'Bedrijfskleding', sub: 'Kleding bedrukt met je logo', cta: 'Offerte voor bedrijfskleding',
      text: 'Een team in dezelfde kleding ziet er meteen uit als één bedrijf. Ik bedruk T-shirts, polo’s, hoodies, jassen en werkkleding met DTF of flex, voor je team, een evenement of je eigen merchandise.',
      tags: ['T-shirts en polo’s', 'Hoodies en jassen', 'Werkkleding', 'DTF- en flexdruk'] },
    { name: 'Drukwerk', sub: 'Van visitekaartje tot spandoek', cta: 'Offerte voor drukwerk',
      text: 'Een visitekaartje, flyer of bouwbord is vaak het eerste wat een klant van je ziet. Ik ontwerp alles in de stijl van je merk en maak het klaar voor productie, zodat het er op papier net zo goed uitziet als op je bus.',
      tags: ['Visitekaartjes', 'Flyers en posters', 'Roll-ups en spandoeken', 'Vlaggen, stickers en borden'] },
    { name: 'Websites', sub: 'Een website voor jouw bedrijf', cta: 'Offerte voor een website',
      text: 'Wie je bus of visitekaartje ziet, zoekt daarna je website op. Ik ontwerp die op maat en in dezelfde stijl als de rest van je merk: overzichtelijk op telefoon en computer, technisch netjes opgebouwd volgens de basisregels van SEO en ingericht om makkelijk contact met je op te nemen.',
      tags: ['Ontwerp op maat', 'Mobielvriendelijk', 'Technische SEO-basis', 'Contact binnen één klik'] },
    { name: 'Relatiegeschenken', sub: 'Promotieartikelen met je logo', cta: 'Offerte voor relatiegeschenken',
      text: 'Een mok op het bureau of een magneet op de koelkast houdt je naam in beeld, precies op het moment dat een klant je nodig heeft. Mokken, magneetborden, buttons en stickers in de stijl van je merk.',
      tags: ['Mokken', 'Magneetborden', 'Stickers', 'Buttons'] }
  ],
  prev: 'Vorige afbeelding', next: 'Volgende afbeelding',

  prEyebrow: 'Projecten',
  prTitle: ['Projecten,', 'geen losse plaatjes.'],
  prIntro: 'Zeven bedrijven waarvoor ik meerdere onderdelen van hun merk heb gemaakt. Zo werkt één logo op papier, textiel, auto’s en online.',
  prOpen: 'Bekijk project',
  projects: {
    'kristofix': 'Logo, visitekaartjes, belettering van de bus en een website: de hele uitstraling vanaf een leeg vel.',
    'maniek-diensten': 'Logo, visitekaartjes, bedrijfskleding en een website in één herkenbare stijl.',
    'pmk-klusjesman': 'Belettering van drie bussen, werkkleding, een bouwbord en visitekaartjes.',
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
  pcTitle: ['Zo werken', 'we samen.'],
  process: [
    ['Ontwerp', 'We bespreken wat je nodig hebt en ik maak een ontwerp. Dat werken we samen af voordat het in productie gaat.'],
    ['Productie', 'Drukwerk, kleding, folie en borden maak ik met dezelfde kleuren en bestanden, zodat alles bij elkaar past.'],
    ['Montage', 'Auto-, raam- en etalagebelettering breng ik zelf aan. De rest lever ik klaar voor gebruik.']
  ],
  pcNote: 'Je hebt de hele tijd contact met één persoon: degene die ontwerpt én uitvoert.',

  rvEyebrow: 'Reviews', rvTitle: 'Wat klanten zeggen', rvSource: 'Review op Google', rvAll: 'Alle reviews op Google',
  rvPrev: 'Vorige review', rvNext: 'Volgende review', rvStars: '5 van 5 sterren',
  rvTr: 'Vertaling', rvOrig: 'Origineel (Engels)', rvLangNote: 'Reviews in de oorspronkelijke taal, met vertaling.',

  abEyebrow: 'Over GW Graphic Design',
  abTitle: ['Ontwerper.', 'Maker.', 'Eén aanspreekpunt.'],
  abP: [
    'Ik ben Grzegorz Woźniak. GW Graphic Design is mijn studio: grafisch ontwerp, productie en montage in één hand.',
    'Ik ontwerp je logo en materialen, maak de bestanden klaar voor productie, ontwerp de belettering, breng de folie zelf aan en bouw je website. Je wordt niet doorgeschoven tussen ontwerper, verkoper, drukker en monteur: je weet altijd wie verantwoordelijk is.'
  ],
  abFacts: [['Ontwerp', 'Logo, huisstijl en alle ontwerpen'], ['Productie', 'Drukwerk, kleding, folie en relatiegeschenken'], ['Montage', 'Auto-, raam- en etalagebelettering']],
  abRole: 'Grafisch ontwerper en reclamemaker',

  fEyebrow: 'Offerte',
  fTitle: ['Wat heb je', 'nodig?'],
  fIntro: 'Beschrijf kort je project. Ik reageer persoonlijk met een voorstel en een offerte.',
  fService: 'Waar gaat het over?', fServiceHint: 'Je kunt meerdere opties kiezen.', fOther: 'Iets anders',
  fName: 'Naam', fCompany: 'Bedrijf', fEmail: 'E-mail', fPhone: 'Telefoon', fMessage: 'Bericht',
  fMessagePh: 'Bijvoorbeeld: belettering voor twee bussen en T-shirts voor het team.',
  fPref: 'Hoe wil je dat ik contact opneem?', fPrefOpts: ['E-mail', 'Telefoon', 'WhatsApp'],
  fOptional: 'optioneel', fRequired: 'verplicht',
  fPrivacy: 'Ik gebruik je gegevens alleen om je aanvraag te beantwoorden. Lees het', fPrivacyLink: 'privacybeleid',
  fSend: 'Aanvraag versturen', fSending: 'Bezig met versturen…', fWa: 'Versturen via WhatsApp',
  fErrName: 'Vul je naam in.', fErrEmail: 'Vul een geldig e-mailadres in.', fErrPhone: 'Vul je telefoonnummer in, dan kan ik je bellen of appen.', fErrMessage: 'Schrijf kort waar je hulp bij zoekt.',
  fErrSummary: 'Controleer de gemarkeerde velden.',
  fErrRate: 'Er zijn al meerdere aanvragen verstuurd. Probeer het later opnieuw of bel me.',
  fErrSend: 'Versturen is niet gelukt. Probeer het opnieuw of mail naar design@gwgraphic.com.',
  fDoneTitle: 'Bedankt!', fDoneText: 'Je aanvraag is binnen. Ik neem zo snel mogelijk contact met je op.',
  waForm: 'Hallo Grzegorz, ik heb een vraag via gwgraphic.com.',

  ctEyebrow: 'Contact', ctTitle: 'Liever meteen contact?',
  ctIntro: 'Bel, app of mail. Een foto van je bus of je huidige logo kun je direct meesturen.',
  ctWa: 'Stuur een bericht', ctPhone: 'Bellen', ctEmail: 'E-mail',
  ctMeta: 'Voor bedrijven in heel Nederland, België en Duitsland. Belettering monteer ik op locatie.',
  waText: 'Hallo Grzegorz, ik heb een vraag.',

  ftLine: 'Reclame in elke vorm: huisstijl, autobelettering, bedrijfskleding, drukwerk, websites en relatiegeschenken. Ontwerp, productie en montage.',
  ftServices: 'Diensten', ftMenu: 'Menu', ftContact: 'Contact', ftSocial: 'Social media', ftLegal: 'Juridisch',
  ftServiceLinks: ['Logo en huisstijl', 'Autobelettering', 'Bedrijfskleding', 'Drukwerk', 'Websites', 'Relatiegeschenken'],
  ftArea: 'Nederland · België · Duitsland',
  legalNames: { privacy: 'Privacybeleid', cookies: 'Cookiebeleid', terms: 'Algemene voorwaarden', notice: 'Colofon', a11y: 'Toegankelijkheid' },
  cookieSettings: 'Cookie-instellingen',
  ckTitle: 'Cookie-instellingen',
  ckText: 'Deze website gebruikt geen cookies voor statistieken, advertenties of tracking en laadt geen diensten van derden. Er is dus niets om toe te staan of te weigeren.',
  ckStore: 'Je browser onthoudt alleen dat je de openingsanimatie al hebt gezien (localStorage), zodat die niet bij elk bezoek terugkomt.',
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
  cta: 'Get a quote',
  gateHint: 'Click the logo', gateAria: 'Enter the website', gateSkip: 'Skip intro',
  flow: ['Design', 'Production', 'Installation'],
  h1: ['Advertising', 'in any', 'form.'],
  rotPre: 'Your partner for',
  rot: ['branding', 'vehicle graphics', 'workwear', 'print', 'websites', 'promotional items'],
  heroLead: 'I design, produce and install: from your logo to a fully wrapped company van. For businesses across the Netherlands, Belgium and Germany, with one point of contact from start to finish.',
  heroBtn2: 'View projects',
  heroMeta: ['Netherlands · Belgium · Germany', 'On-site installation', 'Google reviews'],
  stageAria: 'View this service',

  svEyebrow: 'Services',
  svTitle: ['Six crafts.', 'One recognisable brand.'],
  svIntro: 'Your logo, your van, your team’s shirts and your website should look like one company. That is why I make all of it: the same colours, the same files and one person responsible for the result.',
  services: [
    { name: 'Branding', sub: 'Logo and brand identity', cta: 'Get a quote for branding',
      text: 'A good logo works as well on a business card as on a six-metre van. I design your logo, choose the colours and typefaces, and deliver every file you need for print, workwear, vehicle graphics and your website.',
      tags: ['Logo design', 'Brand identity', 'Brand guidelines', 'Files for print and web'] },
    { name: 'Vehicle graphics', sub: 'Cars, vans, shop windows and glass', cta: 'Get a quote for vehicle graphics',
      text: 'Your company vehicle shows your name every day, on every road and in every car park. I design the graphics for your exact model and apply the vinyl myself, from simple lettering to a full wrap. Shop windows and glazing are done on site too.',
      tags: ['Vehicle lettering', 'Company vans', 'Full wraps', 'Window and shopfront graphics', 'Installation'] },
    { name: 'Workwear', sub: 'Clothing printed with your logo', cta: 'Get a quote for workwear',
      text: 'A team in matching clothing instantly looks like one business. I print T-shirts, polos, hoodies, jackets and workwear with DTF or flex, for your team, an event or your own merchandise.',
      tags: ['T-shirts and polos', 'Hoodies and jackets', 'Workwear', 'DTF and flex print'] },
    { name: 'Print', sub: 'From business card to banner', cta: 'Get a quote for print',
      text: 'A business card, flyer or site sign is often the first thing a customer sees of you. I design everything in your brand style and prepare it for production, so it looks as good on paper as it does on your van.',
      tags: ['Business cards', 'Flyers and posters', 'Roll-ups and banners', 'Flags, stickers and signs'] },
    { name: 'Websites', sub: 'A website for your business', cta: 'Get a quote for a website',
      text: 'Anyone who sees your van or business card will look up your website next. I design it to measure and in the same style as the rest of your brand: clear on phone and desktop, built on sound technical SEO foundations and set up so people can contact you easily.',
      tags: ['Custom design', 'Mobile-friendly', 'Technical SEO basics', 'Contact in one click'] },
    { name: 'Promotional items', sub: 'Branded merchandise', cta: 'Get a quote for promotional items',
      text: 'A mug on a desk or a magnet on the fridge keeps your name in view at the moment a customer needs you. Mugs, magnetic signs, badges and stickers in your brand style.',
      tags: ['Mugs', 'Magnetic signs', 'Stickers', 'Badges'] }
  ],
  prev: 'Previous image', next: 'Next image',

  prEyebrow: 'Projects',
  prTitle: ['Projects,', 'not thumbnails.'],
  prIntro: 'Seven businesses for which I made several parts of their brand. This is how one logo works on paper, fabric, vehicles and online.',
  prOpen: 'View project',
  projects: {
    'kristofix': 'Logo, business cards, van graphics and a website: the whole look, starting from a blank page.',
    'maniek-diensten': 'Logo, business cards, workwear and a website in one recognisable style.',
    'pmk-klusjesman': 'Graphics for three vans, workwear, a site sign and business cards.',
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

  pcEyebrow: 'How we work',
  pcTitle: ['How we', 'work together.'],
  process: [
    ['Design', 'We talk about what you need and I create a design. We refine it together before it goes into production.'],
    ['Production', 'Print, workwear, vinyl and signs are made with the same colours and files, so everything matches.'],
    ['Installation', 'I apply vehicle, window and shopfront graphics myself. Everything else is delivered ready to use.']
  ],
  pcNote: 'You deal with one person throughout: the one who designs and makes it.',

  rvEyebrow: 'Reviews', rvTitle: 'What clients say', rvSource: 'Review on Google', rvAll: 'All reviews on Google',
  rvPrev: 'Previous review', rvNext: 'Next review', rvStars: '5 out of 5 stars',
  rvTr: 'Translation', rvOrig: 'Original (English)', rvLangNote: 'Reviews as published on Google.',

  abEyebrow: 'About GW Graphic Design',
  abTitle: ['Designer.', 'Maker.', 'One point of contact.'],
  abP: [
    'I am Grzegorz Woźniak. GW Graphic Design is my studio: graphic design, production and installation in one pair of hands.',
    'I design your logo and materials, prepare the files for production, design your vehicle graphics, apply the vinyl myself and build your website. You are not passed between a designer, a salesperson, a printer and an installer: you always know who is responsible.'
  ],
  abFacts: [['Design', 'Logo, identity and all artwork'], ['Production', 'Print, workwear, vinyl and promotional items'], ['Installation', 'Vehicle, window and shopfront graphics']],
  abRole: 'Graphic designer and sign maker',

  fEyebrow: 'Quote',
  fTitle: ['What do', 'you need?'],
  fIntro: 'Describe your project briefly. I will reply personally with a proposal and a quote.',
  fService: 'What is it about?', fServiceHint: 'You can choose more than one.', fOther: 'Something else',
  fName: 'Name', fCompany: 'Company', fEmail: 'Email', fPhone: 'Phone', fMessage: 'Message',
  fMessagePh: 'For example: graphics for two vans and T-shirts for the team.',
  fPref: 'How should I get back to you?', fPrefOpts: ['Email', 'Phone', 'WhatsApp'],
  fOptional: 'optional', fRequired: 'required',
  fPrivacy: 'I only use your details to answer your request. Read the', fPrivacyLink: 'privacy policy',
  fSend: 'Send request', fSending: 'Sending…', fWa: 'Send via WhatsApp',
  fErrName: 'Please enter your name.', fErrEmail: 'Please enter a valid email address.', fErrPhone: 'Please enter your phone number so I can call or message you.', fErrMessage: 'Please tell me briefly what you need.',
  fErrSummary: 'Please check the highlighted fields.',
  fErrRate: 'Several requests have already been sent. Please try again later or give me a call.',
  fErrSend: 'Sending failed. Please try again or email design@gwgraphic.com.',
  fDoneTitle: 'Thank you!', fDoneText: 'Your request has arrived. I will get back to you as soon as possible.',
  waForm: 'Hello Grzegorz, I have a question via gwgraphic.com.',

  ctEyebrow: 'Contact', ctTitle: 'Rather talk right away?',
  ctIntro: 'Call, message or email. You can send a photo of your van or your current logo straight away.',
  ctWa: 'Send a message', ctPhone: 'Call', ctEmail: 'Email',
  ctMeta: 'For businesses across the Netherlands, Belgium and Germany. Vehicle and window graphics are installed on site.',
  waText: 'Hello Grzegorz, I have a question.',

  ftLine: 'Advertising in any form: branding, vehicle graphics, workwear, print, websites and promotional items. Design, production and installation.',
  ftServices: 'Services', ftMenu: 'Menu', ftContact: 'Contact', ftSocial: 'Social media', ftLegal: 'Legal',
  ftServiceLinks: ['Logo and brand identity', 'Vehicle graphics', 'Workwear', 'Print', 'Websites', 'Promotional items'],
  ftArea: 'Netherlands · Belgium · Germany',
  legalNames: { privacy: 'Privacy policy', cookies: 'Cookie policy', terms: 'Terms and conditions', notice: 'Legal notice', a11y: 'Accessibility' },
  cookieSettings: 'Cookie settings',
  ckTitle: 'Cookie settings',
  ckText: 'This website does not use cookies for statistics, advertising or tracking, and loads no third-party services. So there is nothing to accept or reject.',
  ckStore: 'Your browser only remembers that you have already seen the opening animation (localStorage), so it does not play on every visit.',
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
  gateHint: 'Kliknij logo', gateAria: 'Wejdź na stronę', gateSkip: 'Pomiń intro',
  flow: ['Projekt', 'Produkcja', 'Montaż'],
  h1: ['Reklama', 'w każdej', 'formie.'],
  rotPre: 'Twój partner od',
  rot: ['brandingu', 'oklejania aut', 'odzieży firmowej', 'druku', 'stron internetowych', 'gadżetów reklamowych'],
  heroLead: 'Projektuję, produkuję i montuję: od logo po oklejonego busa firmowego. Dla firm z Holandii, Belgii i Niemiec, z jedną osobą do kontaktu od początku do końca.',
  heroBtn2: 'Zobacz projekty',
  heroMeta: ['Holandia · Belgia · Niemcy', 'Montaż na miejscu', 'Opinie w Google'],
  stageAria: 'Zobacz tę usługę',

  svEyebrow: 'Usługi',
  svTitle: ['Sześć specjalności.', 'Jedna rozpoznawalna marka.'],
  svIntro: 'Logo, bus, koszulki ekipy i strona internetowa powinny wyglądać jak jedna firma. Dlatego robię to wszystko sam: te same kolory, te same pliki i jedna osoba odpowiedzialna za efekt.',
  services: [
    { name: 'Branding', sub: 'Logo i identyfikacja wizualna', cta: 'Zapytaj o branding',
      text: 'Dobre logo działa tak samo na wizytówce, jak na sześciometrowym busie. Projektuję znak, dobieram kolory i kroje pisma, a na koniec przekazuję komplet plików: do druku, na odzież, na auto i na stronę internetową.',
      tags: ['Projekt logo', 'Identyfikacja wizualna', 'Księga znaku', 'Pliki do druku i internetu'] },
    { name: 'Oklejanie', sub: 'Auta, busy, witryny i szyby', cta: 'Zapytaj o oklejenie',
      text: 'Samochód firmowy pokazuje Twoją nazwę codziennie, na każdej trasie i każdym parkingu. Projekt przygotowuję pod konkretny model auta i sam montuję folię, od prostych napisów po pełny wrap. Witryny i szyby oklejam na miejscu.',
      tags: ['Oklejanie aut', 'Oklejanie busów', 'Pełny wrap', 'Witryny i szyby', 'Montaż'] },
    { name: 'Odzież firmowa', sub: 'Nadruki z Twoim logo', cta: 'Zapytaj o odzież',
      text: 'Ekipa w jednakowych ubraniach od razu wygląda jak jedna firma. Robię nadruki DTF i flex na koszulkach, polo, bluzach, kurtkach i odzieży roboczej: dla zespołu, na event albo jako własny merch.',
      tags: ['Koszulki i polo', 'Bluzy i kurtki', 'Odzież robocza', 'Nadruk DTF i flex'] },
    { name: 'Druk', sub: 'Od wizytówki po baner', cta: 'Zapytaj o druk',
      text: 'Wizytówka, ulotka czy tablica na budowie to często pierwsze, co klient widzi. Projektuję je w stylu całej marki i przygotowuję do produkcji, żeby na papierze wyglądały tak samo dobrze jak na Twoim aucie.',
      tags: ['Wizytówki', 'Ulotki i plakaty', 'Roll-upy i banery', 'Flagi, naklejki i tablice'] },
    { name: 'Strony internetowe', sub: 'Strona internetowa dla Twojej firmy', cta: 'Zapytaj o stronę internetową',
      text: 'Kto zobaczy Twoje auto albo wizytówkę, zajrzy potem na stronę. Projektuję ją na wymiar, w tym samym stylu co reszta marki: czytelną na telefonie i komputerze, zbudowaną zgodnie z technicznymi zasadami SEO i przygotowaną tak, żeby klient łatwo się z Tobą skontaktował.',
      tags: ['Projekt na wymiar', 'Wersja mobilna', 'Techniczne podstawy SEO', 'Kontakt jednym kliknięciem'] },
    { name: 'Gadżety reklamowe', sub: 'Drobiazgi z Twoim logo', cta: 'Zapytaj o gadżety',
      text: 'Kubek na biurku czy magnes na lodówce przypominają o Twojej firmie wtedy, kiedy klient jej potrzebuje. Kubki, tablice magnetyczne, przypinki i naklejki w stylu Twojej marki.',
      tags: ['Kubki', 'Tablice magnetyczne', 'Naklejki', 'Przypinki'] }
  ],
  prev: 'Poprzednie zdjęcie', next: 'Następne zdjęcie',

  prEyebrow: 'Projekty',
  prTitle: ['Projekty,', 'nie miniaturki.'],
  prIntro: 'Siedem firm, dla których przygotowałem kilka elementów jednej marki. Tak jedno logo działa na papierze, tkaninie, samochodzie i w internecie.',
  prOpen: 'Zobacz projekt',
  projects: {
    'kristofix': 'Logo, wizytówki, oklejenie busa i strona internetowa: cały wizerunek od czystej kartki.',
    'maniek-diensten': 'Logo, wizytówki, odzież firmowa i strona internetowa w jednym, rozpoznawalnym stylu.',
    'pmk-klusjesman': 'Oklejenie trzech busów, odzież robocza, tablica budowlana i wizytówki.',
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
  pcTitle: ['Jak wygląda', 'współpraca.'],
  process: [
    ['Projekt', 'Rozmawiamy o tym, czego potrzebujesz, a ja przygotowuję projekt. Dopracowujemy go razem, zanim trafi do produkcji.'],
    ['Produkcja', 'Druk, odzież, folie i tablice powstają w tych samych kolorach i z tych samych plików, więc wszystko do siebie pasuje.'],
    ['Montaż', 'Oklejenia aut, witryn i szyb montuję sam. Pozostałe materiały dostajesz gotowe do użycia.']
  ],
  pcNote: 'Przez cały czas rozmawiasz z jedną osobą: tą, która projektuje i wykonuje.',

  rvEyebrow: 'Opinie', rvTitle: 'Co mówią klienci', rvSource: 'Opinia w Google', rvAll: 'Wszystkie opinie w Google',
  rvPrev: 'Poprzednia opinia', rvNext: 'Następna opinia', rvStars: '5 na 5 gwiazdek',
  rvTr: 'Tłumaczenie', rvOrig: 'Oryginał (angielski)', rvLangNote: 'Opinie w oryginalnym języku, z tłumaczeniem.',

  abEyebrow: 'O GW Graphic Design',
  abTitle: ['Grafik.', 'Wykonawca.', 'Jedna osoba do kontaktu.'],
  abP: [
    'Nazywam się Grzegorz Woźniak. GW Graphic Design to moje studio: projektowanie graficzne, produkcja i montaż w jednych rękach.',
    'Projektuję logo i materiały, przygotowuję pliki do produkcji, projektuję oklejenia, sam montuję folię i buduję stronę internetową. Nie przekazuję Cię między grafikiem, handlowcem, drukarnią i montażystą: zawsze wiesz, kto odpowiada za efekt.'
  ],
  abFacts: [['Projekt', 'Logo, identyfikacja i wszystkie projekty'], ['Produkcja', 'Druk, odzież, folie i gadżety'], ['Montaż', 'Oklejanie aut, witryn i szyb']],
  abRole: 'Grafik i specjalista od reklamy',

  fEyebrow: 'Wycena',
  fTitle: ['Czego', 'potrzebujesz?'],
  fIntro: 'Opisz krótko projekt. Odpowiem osobiście, z propozycją i wyceną.',
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
  fDoneTitle: 'Dziękuję!', fDoneText: 'Zapytanie dotarło. Odezwę się najszybciej, jak to możliwe.',
  waForm: 'Dzień dobry, piszę przez gwgraphic.com.',

  ctEyebrow: 'Kontakt', ctTitle: 'Wolisz od razu porozmawiać?',
  ctIntro: 'Zadzwoń, napisz na WhatsApp albo wyślij maila. Zdjęcie auta lub obecnego logo możesz dołączyć od razu.',
  ctWa: 'Napisz wiadomość', ctPhone: 'Zadzwoń', ctEmail: 'E-mail',
  ctMeta: 'Dla firm z całej Holandii, Belgii i Niemiec. Oklejenia montuję na miejscu u klienta.',
  waText: 'Dzień dobry, mam pytanie.',

  ftLine: 'Reklama w każdej formie: branding, oklejanie aut, odzież firmowa, druk, strony internetowe i gadżety. Projekt, produkcja i montaż.',
  ftServices: 'Usługi', ftMenu: 'Menu', ftContact: 'Kontakt', ftSocial: 'Social media', ftLegal: 'Informacje prawne',
  ftServiceLinks: ['Logo i identyfikacja', 'Oklejanie aut i witryn', 'Odzież firmowa', 'Druk', 'Strony internetowe', 'Gadżety reklamowe'],
  ftArea: 'Holandia · Belgia · Niemcy',
  legalNames: { privacy: 'Polityka prywatności', cookies: 'Polityka cookies', terms: 'Regulamin', notice: 'Nota prawna', a11y: 'Dostępność' },
  cookieSettings: 'Ustawienia cookies',
  ckTitle: 'Ustawienia cookies',
  ckText: 'Ta strona nie używa plików cookies do statystyk, reklam ani śledzenia i nie wczytuje usług zewnętrznych. Nie ma więc na co wyrażać zgody.',
  ckStore: 'Przeglądarka zapamiętuje tylko, że animacja otwarcia została już obejrzana (localStorage), żeby nie wracała przy każdej wizycie.',
  ckClear: 'Wyczyść zapisane dane', ckCleared: 'Wyczyszczono.', ckMore: 'Przeczytaj politykę cookies',
  backHome: 'Wróć na stronę główną', updated: 'Ostatnia aktualizacja', updatedDate: '27 września 2026'
}
};
