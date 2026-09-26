// All copy for the site, per language. Dutch is the primary market.
// Only verified facts: no invented numbers, ratings, addresses or clients.

export const SITE = {
  origin: 'https://www.gwgraphic.com',
  name: 'GW Graphic Design',
  owner: 'Grzegorz Woźniak',
  phone: '+31\u00a06\u00a044\u00a031\u00a094\u00a015',
  phoneHref: '+31644319415',
  whatsapp: '31644319415',
  email: 'design@gwgraphic.com',
  locality: 'Eindhoven',
  region: 'Noord-Brabant',
  social: {
    instagram: 'https://www.instagram.com/gw_graphic_design/',
    facebook: 'https://www.facebook.com/GregWgraphicdesign',
    linkedin: 'https://www.linkedin.com/in/gwgraphic'
  },
  reviewsUrl: 'https://www.google.com/maps/search/?api=1&query=GW%20Graphic%20Design%20Eindhoven',
  updated: '2026-09-26'
};

// Paths are relative to the site root. Home pages live at /, /en/, /pl/.
export const LANGS = {
  nl: { dir: '', label: 'NL', name: 'Nederlands', locale: 'nl_NL' },
  en: { dir: 'en/', label: 'EN', name: 'English', locale: 'en_GB' },
  pl: { dir: 'pl/', label: 'PL', name: 'Polski', locale: 'pl_PL' }
};

// Legal pages: key → slug per language
export const LEGAL_SLUGS = {
  privacy: { nl: 'privacybeleid.html', en: 'privacy.html', pl: 'polityka-prywatnosci.html' },
  cookies: { nl: 'cookiebeleid.html', en: 'cookies.html', pl: 'polityka-cookies.html' },
  terms: { nl: 'algemene-voorwaarden.html', en: 'terms.html', pl: 'regulamin.html' },
  notice: { nl: 'colofon.html', en: 'legal-notice.html', pl: 'nota-prawna.html' },
  a11y: { nl: 'toegankelijkheid.html', en: 'accessibility.html', pl: 'dostepnosc.html' }
};

// Service → images shown in the service slider (keys from images.mjs)
export const SERVICE_IMAGES = {
  branding: ['kristofix-logo-op-papier', 'maniek-diensten-logo', 'patera-klussenbedrijf-logo'],
  kleding: ['maniek-diensten-bedrijfskleding', 'podtech-t-shirts', 'rijschool-simpel-weg-kleding'],
  drukwerk: ['maniek-diensten-visitekaartjes', 'spoko-flyers', 'dreamszone-roll-up-banner', 'spc-construction-spandoek', 'dpk-bouw-beachflag'],
  voertuigen: ['kristofix-bus-belettering-zijkant', 'pmk-klusjesman-bussen-belettering', 'agm-montage-bussen-belettering', 'weldpolako-bedrijfsbussen-belettering'],
  websites: ['kristofix-website', 'maniek-diensten-website'],
  gadgets: ['palmo-trans-magneetborden', 'gk-cars-kleding-mokken', 'holografische-stickers', 'custom-garage-eindhoven-stickers']
};
export const SERVICE_KEYS = Object.keys(SERVICE_IMAGES);

// Hero stage (V07): one print per rotator word, in the same order.
export const HERO_PRINTS = [
  ['kristofix-logo-op-papier', 'Kristofix', 'branding'],
  ['kristofix-bus-belettering-zijkant', 'Kristofix', 'voertuigen'],
  ['maniek-diensten-bedrijfskleding', 'Maniek Diensten', 'kleding'],
  ['palmo-trans-magneetborden', 'Palmo-Trans', 'gadgets'],
  ['maniek-diensten-visitekaartjes', 'Maniek Diensten', 'drukwerk'],
  ['kristofix-website', 'Kristofix', 'websites']
];

// Projects (complete client identities). svc = indexes into SERVICE_KEYS.
export const PROJECTS = [
  { id: 'kristofix', name: 'Kristofix', svc: [0, 2, 3, 4], cover: 'kristofix-bus-belettering-zijkant',
    secs: [['branding', ['kristofix-logo', 'kristofix-logo-op-papier']], ['drukwerk', ['kristofix-visitekaartjes']],
      ['voertuigen', ['kristofix-bus-belettering-voorzijde', 'kristofix-bus-belettering-schuin-achter', 'kristofix-bus-belettering-achterzijde']], ['websites', ['kristofix-website']]] },
  { id: 'maniek-diensten', name: 'Maniek Diensten', svc: [0, 1, 2, 4], cover: 'maniek-diensten-bedrijfskleding',
    secs: [['branding', ['maniek-diensten-logo', 'maniek-diensten-logo-op-papier']], ['kleding', ['maniek-diensten-bedrijfskleding']],
      ['drukwerk', ['maniek-diensten-visitekaartjes']], ['websites', ['maniek-diensten-website']]] },
  { id: 'patera', name: 'Patera Klussenbedrijf', svc: [0, 1, 3], cover: 'patera-klussenbedrijf-autobelettering',
    secs: [['branding', ['patera-klussenbedrijf-logo']], ['kleding', ['patera-klussenbedrijf-t-shirts']], ['voertuigen', ['patera-klussenbedrijf-autobelettering']]] },
  { id: 'custom-garage', name: 'Custom Garage Eindhoven', svc: [0, 1, 5], cover: 'custom-garage-eindhoven-hoodies',
    secs: [['branding', ['custom-garage-eindhoven-logo']], ['kleding', ['custom-garage-eindhoven-hoodies']], ['gadgets', ['custom-garage-eindhoven-stickers']]] },
  { id: 'podtech', name: 'Podtech', svc: [0, 1], cover: 'podtech-t-shirts',
    secs: [['branding', ['podtech-logo']], ['kleding', ['podtech-t-shirts', 'podtech-werkshirts', 'podtech-jassen', 'podtech-softshell-jassen', 'podtech-werkbroeken']]] },
  { id: 'weldpolako', name: 'WeldPolako', svc: [0, 3, 1], cover: 'weldpolako-bedrijfsbussen-belettering',
    secs: [['branding', ['weldpolako-logo']], ['voertuigen', ['weldpolako-bedrijfsbussen-belettering']], ['kleding', ['weldpolako-bedrijfskleding']]] },
  { id: 'pmk-klusjesman', name: 'PMK Klusjesman', svc: [3, 1, 2], cover: 'pmk-klusjesman-bussen-belettering',
    secs: [['voertuigen', ['pmk-klusjesman-bussen-belettering']], ['kleding', ['pmk-klusjesman-t-shirts-petten']], ['drukwerk', ['pmk-klusjesman-bouwbord', 'pmk-klusjesman-visitekaartjes']]] }
];

// Authentic Google reviews (as published, in English). No ratings/counts are invented.
export const REVIEWS = [
  { name: 'Marcin P.', company: 'Patera Klussenbedrijf', text: 'Professional design and a very creative approach to the project. All changes were spot on and consulted at every stage. A true expert in his field. I wholeheartedly recommend cooperation with GW Graphic. Regards and thank you for a great project.' },
  { name: 'Catherine Z.', company: 'Dreamszone Evenementen', text: 'Fantastic collaboration is the first thing to mention. The logical and conscientious approach to the subject ensures that you will remain our advertising material provider for a long time. The logo you designed for us, Grzesiu, receives nothing but praise. The T-shirts make us noticeable and professional. Thank you so much, and we recommend you wholeheartedly.' },
  { name: 'Konrad G.', company: '', text: 'Great designs and execution. And most importantly — great contact. Discussing projects and ideas at an early stage was something that really brought my company to life! 6/5 stars!' },
  { name: 'Joanna P.', company: 'Fysiotherapie WeMove', text: 'Thank you for the personalized T-shirts and sweatshirts, thanks to which we could look better on Children’s Day in The Hague. Very easy and quick contact and shipping. I heartily recommend it!' },
  { name: 'Bartosz M.', company: 'Bartosz Infra', text: 'Highly recommended! A company run with passion! Everything handled without the slightest issue!' },
  { name: 'Elwira M.', company: 'MATU – home is You', text: 'I heartily recommend it, great project, good communication and quick implementation.' }
];

export const T = {
/* =============================== NL =============================== */
nl: {
  title: 'GW Graphic Design Eindhoven | Logo, reclame, autobelettering, kleding & webdesign',
  description: 'GW Graphic Design in Eindhoven: logo & huisstijl, drukwerk, bedrijfskleding, autobelettering, websites en reclame. Van ontwerp tot productie en montage.',
  ogTitle: 'GW Graphic Design | Reclame in elke vorm',
  skip: 'Naar de inhoud',
  homeAria: 'GW Graphic Design, naar de homepage',
  navAria: 'Hoofdmenu', langAria: 'Taal', menu: 'Menu', close: 'Sluiten',
  nav: { diensten: 'Diensten', projecten: 'Projecten', reviews: 'Reviews', over: 'Over', contact: 'Contact' },
  cta: 'Offerte aanvragen',
  gateHint: 'Klik op het logo', gateAria: 'Open de website',
  flow: ['Ontwerp', 'Productie', 'Montage'],
  kicker: 'Grafisch ontwerp & reclame uit Eindhoven',
  h1: ['Reclame', 'in elke', 'vorm.'],
  rotPre: 'Eén partner voor je',
  rot: ['logo', 'bedrijfsauto', 'bedrijfskleding', 'relatiegeschenken', 'drukwerk', 'website'],
  heroLead: 'Van logo tot voertuig. Ontwerp, productie en montage door één studio in Eindhoven, voor bedrijven in Nederland, België en Duitsland.',
  heroBtn2: 'Bekijk projecten',
  heroMeta: ['Eindhoven, Noord-Brabant', 'Nederland · België · Duitsland', 'Google reviews'],
  stageAria: 'Bekijk de dienst',

  svEyebrow: 'Diensten',
  svTitle: ['Zes vakgebieden.', 'Eén GW-standaard.'],
  svIntro: 'Van je logo tot de belettering op je bus: elk onderdeel van je merk komt uit dezelfde hand. Dezelfde kleuren, dezelfde kwaliteit en één aanspreekpunt.',
  services: [
    { name: 'Branding', sub: 'Logo & huisstijl', text: 'Een logo laten maken dat werkt op een visitekaartje én op een bus van zes meter. We ontwerpen je logo en huisstijl, met kleuren en lettertypes, en leveren alle bestanden die drukkers en webbouwers nodig hebben.', tags: ['Logo-ontwerp', 'Huisstijl', 'Merkrichtlijnen', 'Bestanden voor druk en web'] },
    { name: 'Kleding', sub: 'Bedrijfskleding bedrukken', text: 'T-shirts, polo’s, hoodies, jassen en werkkleding met je logo, bedrukt met DTF of flex. Voor je team, een evenement of je eigen merchandise.', tags: ['T-shirts en polo’s', 'Hoodies en jassen', 'Werkkleding', 'DTF- en flexdruk'] },
    { name: 'Drukwerk', sub: 'Van visitekaartje tot spandoek', text: 'Visitekaartjes, flyers, posters, roll-ups, spandoeken, vlaggen, stickers en borden. Ontworpen in dezelfde stijl als de rest van je merk en klaar voor productie.', tags: ['Visitekaartjes', 'Flyers en posters', 'Roll-ups en spandoeken', 'Vlaggen, stickers en borden'] },
    { name: 'Voertuigen', sub: 'Autobelettering & wraps', text: 'Je bedrijfswagen rijdt elke dag langs potentiële klanten. We ontwerpen de belettering op maat van jouw model en monteren de folie zelf: van losse letters en raambelettering tot een complete wrap.', tags: ['Autobelettering', 'Bedrijfswagen belettering', 'Wraps', 'Raambelettering', 'Montage'] },
    { name: 'Websites', sub: 'Webdesign', text: 'Een snelle bedrijfswebsite die past bij je bus en je visitekaartje, goed werkt op elke telefoon en gevonden wordt in Google.', tags: ['Ontwerp op maat', 'Mobielvriendelijk', 'Vindbaar in Google'] },
    { name: 'Gadgets', sub: 'Relatiegeschenken', text: 'Kleine dingen die je naam in beeld houden: mokken, magneetborden, pins en stickers in de stijl van je merk.', tags: ['Mokken', 'Magneetborden', 'Stickers', 'Pins'] }
  ],
  svCta: 'Offerte voor', prev: 'Vorige afbeelding', next: 'Volgende afbeelding',

  prEyebrow: 'Projecten',
  prTitle: ['Projecten,', 'geen losse plaatjes.'],
  prIntro: 'Complete merken uit één studio. Zo ziet één identiteit eruit op papier, textiel, voertuigen en online.',
  prOpen: 'Bekijk project',
  projects: {
    'kristofix': 'Van een leeg vel tot een complete uitstraling: logo, visitekaartjes, belettering van de bus en een website.',
    'maniek-diensten': 'Logo, bedrijfskleding, visitekaartjes en een website in één herkenbare stijl.',
    'patera': 'Logo, T-shirts en belettering van de bedrijfsauto voor een klussenbedrijf.',
    'custom-garage': 'Logo, hoodies en stickers voor een garage uit Eindhoven.',
    'podtech': 'Logo en een complete lijn werkkleding voor een elektrotechnisch installatiebedrijf.',
    'weldpolako': 'Logo, autobelettering en bedrijfskleding voor een lasbedrijf.',
    'pmk-klusjesman': 'Belettering van de bussen, werkkleding, een bouwbord en visitekaartjes.'
  },
  csEyebrow: 'Project', csResult: n => `Eén merk. ${n} toepassingen. Eén studio.`, csCta: 'Zo’n project starten', csNext: 'Volgend project',

  pcEyebrow: 'Werkwijze',
  pcTitle: ['Van idee', 'tot eindproduct.'],
  process: [
    ['Ontwerp', 'Je logo en ontwerp, met aanpassingen tot het klopt. Pas dan gaat het naar productie.'],
    ['Productie', 'Drukwerk, textiel, folie en borden, in dezelfde kleuren en dezelfde kwaliteit.'],
    ['Montage', 'Autobelettering en raambelettering monteren we zelf. Al het andere leveren we kant-en-klaar op.']
  ],
  pcNote: 'Eén studio van begin tot eind. Je vertelt je verhaal maar één keer.',

  rvEyebrow: 'Reviews', rvTitle: 'Wat klanten zeggen', rvSource: 'Review op Google', rvAll: 'Alle reviews op Google',
  rvPrev: 'Vorige review', rvNext: 'Volgende review', rvStars: '5 van 5 sterren', rvLangNote: 'Reviews in de oorspronkelijke taal.',

  abEyebrow: 'Over GW Graphic Design',
  abTitle: ['Ontwerper.', 'Maker.', 'Eén aanspreekpunt.'],
  abP: [
    'GW Graphic Design is de studio van Grzegorz Woźniak in Eindhoven. Hij combineert grafisch ontwerp met echte productie en montage.',
    'Dezelfde persoon die je huisstijl ontwerpt, maakt je drukwerk en kleding klaar voor productie, ontwerpt de belettering van je bedrijfswagen, brengt de folie zelf aan en bouwt je website. Geen tussenpersonen: je vertelt je verhaal één keer, en het resultaat klopt op papier, op textiel, op de weg en online.'
  ],
  abFacts: [['Ontwerp', 'Logo, huisstijl en alle ontwerpen'], ['Productie', 'Drukwerk, kleding, folie en gadgets'], ['Montage', 'Auto- en raambelettering, zelf aangebracht']],
  abRole: 'Grafisch ontwerper en reclamespecialist',

  fEyebrow: 'Offerte aanvragen',
  fTitle: ['Vertel wat', 'je nodig hebt.'],
  fIntro: 'Een paar regels is genoeg. Je krijgt binnen korte tijd een reactie met een voorstel en een offerte.',
  fService: 'Waar kunnen we mee helpen?', fServiceHint: 'Kies wat van toepassing is (optioneel).', fOther: 'Iets anders',
  fName: 'Naam', fCompany: 'Bedrijf', fEmail: 'E-mail', fPhone: 'Telefoon', fMessage: 'Bericht',
  fMessagePh: 'Bijvoorbeeld: belettering voor twee bussen en T-shirts voor het team.',
  fOptional: 'optioneel', fRequired: 'verplicht',
  fPrivacy: 'We gebruiken je gegevens alleen om je aanvraag te beantwoorden. Lees ons', fPrivacyLink: 'privacybeleid',
  fSend: 'Aanvraag versturen', fSending: 'Bezig met versturen…',
  fErrName: 'Vul je naam in.', fErrEmail: 'Vul een geldig e-mailadres in.', fErrMessage: 'Schrijf kort waar we mee kunnen helpen.',
  fErrSummary: 'Controleer de gemarkeerde velden.',
  fErrRate: 'Er zijn al meerdere aanvragen verstuurd. Probeer het later opnieuw of bel ons.',
  fErrSend: 'Versturen is niet gelukt. Probeer het opnieuw of mail naar design@gwgraphic.com.',
  fDoneTitle: 'Bedankt!', fDoneText: 'Je aanvraag is verstuurd. We nemen zo snel mogelijk contact met je op.',

  ctEyebrow: 'Contact', ctTitle: 'Liever direct contact?',
  ctIntro: 'Stuur een appje, bel of mail. Foto’s van je bus of je huidige logo kun je meteen meesturen.',
  ctWa: 'Stuur een bericht', ctPhone: 'Bellen', ctEmail: 'E-mail',
  ctMeta: 'Eindhoven, Noord-Brabant. Ontwerp en productie voor heel Nederland, België en Duitsland; montage op locatie.',
  waText: 'Hallo GW Graphic Design, ik heb een vraag.',

  ftLine: 'Reclame in elke vorm. Logo, drukwerk, bedrijfskleding, autobelettering, websites en relatiegeschenken uit Eindhoven.',
  ftServices: 'Diensten', ftMenu: 'Menu', ftContact: 'Contact', ftSocial: 'Social', ftLegal: 'Juridisch',
  ftServiceLinks: ['Logo & huisstijl', 'Bedrijfskleding bedrukken', 'Drukwerk', 'Autobelettering', 'Webdesign', 'Relatiegeschenken'],
  legalNames: { privacy: 'Privacybeleid', cookies: 'Cookiebeleid', terms: 'Algemene voorwaarden', notice: 'Colofon', a11y: 'Toegankelijkheid' },
  cookieSettings: 'Cookie-instellingen',
  ckTitle: 'Cookie-instellingen',
  ckText: 'Deze website gebruikt geen cookies voor statistieken, advertenties of tracking, en laadt geen diensten van derden. Er is daarom niets om toe te staan of te weigeren.',
  ckStore: 'Alleen tijdens je bezoek onthoudt je browser of de openingsanimatie al is afgespeeld (sessionStorage). Dat wordt gewist zodra je het tabblad sluit.',
  ckClear: 'Opgeslagen gegevens wissen', ckCleared: 'Gewist.', ckMore: 'Lees het cookiebeleid',
  backHome: 'Terug naar de homepage', updated: 'Laatst bijgewerkt', updatedDate: '26 september 2026'
},

/* =============================== EN =============================== */
en: {
  title: 'GW Graphic Design Eindhoven | Logo, signage, vehicle graphics, apparel & web',
  description: 'GW Graphic Design in Eindhoven: logo & identity, print, branded apparel, vehicle graphics, websites and advertising. From design to production and installation.',
  ogTitle: 'GW Graphic Design | Advertising in any form',
  skip: 'Skip to content',
  homeAria: 'GW Graphic Design, go to the homepage',
  navAria: 'Main menu', langAria: 'Language', menu: 'Menu', close: 'Close',
  nav: { diensten: 'Services', projecten: 'Projects', reviews: 'Reviews', over: 'About', contact: 'Contact' },
  cta: 'Request a quote',
  gateHint: 'Click the logo', gateAria: 'Open the website',
  flow: ['Design', 'Production', 'Installation'],
  kicker: 'Graphic design & advertising from Eindhoven',
  h1: ['Advertising', 'in any', 'form.'],
  rotPre: 'One partner for your',
  rot: ['logo', 'company vehicle', 'workwear', 'promo products', 'print', 'website'],
  heroLead: 'From logo to vehicle. Design, production and installation by one studio in Eindhoven, for businesses in the Netherlands, Belgium and Germany.',
  heroBtn2: 'View projects',
  heroMeta: ['Eindhoven, North Brabant', 'Netherlands · Belgium · Germany', 'Google reviews'],
  stageAria: 'View the service',

  svEyebrow: 'Services',
  svTitle: ['Six crafts.', 'One GW standard.'],
  svIntro: 'From your logo to the lettering on your van: every part of your brand comes from the same hands. The same colours, the same quality and one point of contact.',
  services: [
    { name: 'Branding', sub: 'Logo & visual identity', text: 'A logo that works on a business card and on a six-metre van. We design your logo and visual identity, with colours and typefaces, and deliver every file your printer and web developer need.', tags: ['Logo design', 'Visual identity', 'Brand guidelines', 'Files for print and web'] },
    { name: 'Apparel', sub: 'Printed workwear & merch', text: 'T-shirts, polos, hoodies, jackets and workwear with your logo, printed with DTF or flex. For your team, an event or your own merchandise.', tags: ['T-shirts and polos', 'Hoodies and jackets', 'Workwear', 'DTF and flex print'] },
    { name: 'Print', sub: 'From business card to banner', text: 'Business cards, flyers, posters, roll-ups, banners, flags, stickers and signs. Designed in the same style as the rest of your brand and ready for production.', tags: ['Business cards', 'Flyers and posters', 'Roll-ups and banners', 'Flags, stickers and signs'] },
    { name: 'Vehicles', sub: 'Vehicle lettering & wraps', text: 'Your company van passes potential customers every day. We design the lettering for your exact model and install the vinyl ourselves: from simple lettering and window graphics to a full wrap.', tags: ['Vehicle lettering', 'Van graphics', 'Wraps', 'Window graphics', 'Installation'] },
    { name: 'Websites', sub: 'Web design', text: 'A fast business website that matches your van and your business cards, works well on every phone and is found on Google.', tags: ['Custom design', 'Mobile-friendly', 'Found on Google'] },
    { name: 'Gadgets', sub: 'Promotional products', text: 'Small things that keep your name in sight: mugs, magnetic signs, pins and stickers in your brand style.', tags: ['Mugs', 'Magnetic signs', 'Stickers', 'Pins'] }
  ],
  svCta: 'Quote for', prev: 'Previous image', next: 'Next image',

  prEyebrow: 'Projects',
  prTitle: ['Projects,', 'not thumbnails.'],
  prIntro: 'Complete brands from one studio. This is what one identity looks like on paper, fabric, vehicles and online.',
  prOpen: 'View project',
  projects: {
    'kristofix': 'From a blank page to a complete look: logo, business cards, van lettering and a website.',
    'maniek-diensten': 'Logo, apparel, business cards and a website in one recognisable style.',
    'patera': 'Logo, T-shirts and company car lettering for a handyman business.',
    'custom-garage': 'Logo, hoodies and stickers for a garage from Eindhoven.',
    'podtech': 'Logo and a complete workwear line for an electrical installation company.',
    'weldpolako': 'Logo, vehicle graphics and apparel for a welding company.',
    'pmk-klusjesman': 'Van lettering, workwear, a site sign and business cards.'
  },
  csEyebrow: 'Project', csResult: n => `One brand. ${n} touchpoints. One studio.`, csCta: 'Start a project like this', csNext: 'Next project',

  pcEyebrow: 'How we work',
  pcTitle: ['From idea', 'to finished product.'],
  process: [
    ['Design', 'Your logo and artwork, refined until it is right. Only then does it go into production.'],
    ['Production', 'Print, textiles, vinyl and signs, in the same colours and the same quality.'],
    ['Installation', 'We install vehicle and window graphics ourselves. Everything else is delivered ready to use.']
  ],
  pcNote: 'One studio from start to finish. You only tell your story once.',

  rvEyebrow: 'Reviews', rvTitle: 'What clients say', rvSource: 'Review on Google', rvAll: 'All reviews on Google',
  rvPrev: 'Previous review', rvNext: 'Next review', rvStars: '5 out of 5 stars', rvLangNote: 'Reviews shown in their original language.',

  abEyebrow: 'About GW Graphic Design',
  abTitle: ['Designer.', 'Maker.', 'One point of contact.'],
  abP: [
    'GW Graphic Design is the studio of Grzegorz Woźniak in Eindhoven. He combines graphic design with real production and installation.',
    'The same person who designs your identity also prepares your print and apparel for production, designs your vehicle graphics, applies the vinyl himself and builds your website. No middlemen: you tell your story once, and the result is right on paper, on fabric, on the road and online.'
  ],
  abFacts: [['Design', 'Logo, identity and all artwork'], ['Production', 'Print, apparel, vinyl and gadgets'], ['Installation', 'Vehicle and window graphics, applied in person']],
  abRole: 'Graphic designer and advertising specialist',

  fEyebrow: 'Request a quote',
  fTitle: ['Tell us what', 'you need.'],
  fIntro: 'A few lines are enough. You will soon hear back with a proposal and a quote.',
  fService: 'What can we help with?', fServiceHint: 'Choose what applies (optional).', fOther: 'Something else',
  fName: 'Name', fCompany: 'Company', fEmail: 'Email', fPhone: 'Phone', fMessage: 'Message',
  fMessagePh: 'For example: lettering for two vans and T-shirts for the team.',
  fOptional: 'optional', fRequired: 'required',
  fPrivacy: 'We only use your details to answer your request. Read our', fPrivacyLink: 'privacy policy',
  fSend: 'Send request', fSending: 'Sending…',
  fErrName: 'Please enter your name.', fErrEmail: 'Please enter a valid email address.', fErrMessage: 'Please tell us briefly what we can help with.',
  fErrSummary: 'Please check the highlighted fields.',
  fErrRate: 'Several requests have already been sent. Please try again later or give us a call.',
  fErrSend: 'Sending failed. Please try again or email design@gwgraphic.com.',
  fDoneTitle: 'Thank you!', fDoneText: 'Your request has been sent. We will get back to you as soon as possible.',

  ctEyebrow: 'Contact', ctTitle: 'Prefer to talk directly?',
  ctIntro: 'Send a message, call or email. You can send photos of your van or your current logo straight away.',
  ctWa: 'Send a message', ctPhone: 'Call', ctEmail: 'Email',
  ctMeta: 'Eindhoven, North Brabant. Design and production for the whole of the Netherlands, Belgium and Germany; installation on location.',
  waText: 'Hello GW Graphic Design, I have a question.',

  ftLine: 'Advertising in any form. Logo, print, branded apparel, vehicle graphics, websites and promotional products from Eindhoven.',
  ftServices: 'Services', ftMenu: 'Menu', ftContact: 'Contact', ftSocial: 'Social', ftLegal: 'Legal',
  ftServiceLinks: ['Logo & identity', 'Printed apparel', 'Print', 'Vehicle graphics', 'Web design', 'Promotional products'],
  legalNames: { privacy: 'Privacy policy', cookies: 'Cookie policy', terms: 'Terms and conditions', notice: 'Legal notice', a11y: 'Accessibility' },
  cookieSettings: 'Cookie settings',
  ckTitle: 'Cookie settings',
  ckText: 'This website does not use cookies for statistics, advertising or tracking, and loads no third-party services. There is therefore nothing to accept or reject.',
  ckStore: 'Only during your visit, your browser remembers whether the opening animation has already played (sessionStorage). It is deleted as soon as you close the tab.',
  ckClear: 'Clear stored data', ckCleared: 'Cleared.', ckMore: 'Read the cookie policy',
  backHome: 'Back to the homepage', updated: 'Last updated', updatedDate: '26 September 2026'
},

/* =============================== PL =============================== */
pl: {
  title: 'GW Graphic Design Eindhoven | Logo, reklama, oklejanie aut, odzież i strony www',
  description: 'GW Graphic Design w Eindhoven: logo i identyfikacja, druk, odzież firmowa, oklejanie aut, strony www i reklama. Od projektu po produkcję i montaż.',
  ogTitle: 'GW Graphic Design | Reklama w każdej formie',
  skip: 'Przejdź do treści',
  homeAria: 'GW Graphic Design, przejdź na stronę główną',
  navAria: 'Menu główne', langAria: 'Język', menu: 'Menu', close: 'Zamknij',
  nav: { diensten: 'Usługi', projecten: 'Projekty', reviews: 'Opinie', over: 'O studiu', contact: 'Kontakt' },
  cta: 'Zapytaj o wycenę',
  gateHint: 'Kliknij logo', gateAria: 'Otwórz stronę',
  flow: ['Projekt', 'Produkcja', 'Montaż'],
  kicker: 'Projektowanie graficzne i reklama z Eindhoven',
  h1: ['Reklama', 'w każdej', 'formie.'],
  rotPre: 'Jeden partner od',
  rot: ['logo', 'oklejenia auta', 'odzieży firmowej', 'gadżetów', 'druku', 'strony www'],
  heroLead: 'Od logo po samochód. Projekt, produkcja i montaż w jednym studiu w Eindhoven, dla firm z Holandii, Belgii i Niemiec.',
  heroBtn2: 'Zobacz projekty',
  heroMeta: ['Eindhoven, Brabancja Północna', 'Holandia · Belgia · Niemcy', 'Opinie w Google'],
  stageAria: 'Zobacz usługę',

  svEyebrow: 'Usługi',
  svTitle: ['Sześć specjalności.', 'Jeden standard GW.'],
  svIntro: 'Od logo po oklejenie busa: każdy element Twojej marki powstaje w tych samych rękach. Te same kolory, ta sama jakość i jedna osoba do kontaktu.',
  services: [
    { name: 'Branding', sub: 'Logo i identyfikacja wizualna', text: 'Logo, które działa na wizytówce i na sześciometrowym busie. Projektujemy logo i identyfikację wizualną, z kolorami i krojami pisma, a potem przekazujemy wszystkie pliki potrzebne drukarni i programiście.', tags: ['Projekt logo', 'Identyfikacja wizualna', 'Księga znaku', 'Pliki do druku i www'] },
    { name: 'Odzież', sub: 'Nadruki na odzieży firmowej', text: 'Koszulki, polo, bluzy, kurtki i odzież robocza z Twoim logo, z nadrukiem DTF lub flex. Dla ekipy, na event albo jako własny merch.', tags: ['Koszulki i polo', 'Bluzy i kurtki', 'Odzież robocza', 'Nadruk DTF i flex'] },
    { name: 'Druk', sub: 'Od wizytówki po baner', text: 'Wizytówki, ulotki, plakaty, roll-upy, banery, flagi, naklejki i tablice. W tym samym stylu co reszta Twojej marki i gotowe do produkcji.', tags: ['Wizytówki', 'Ulotki i plakaty', 'Roll-upy i banery', 'Flagi, naklejki i tablice'] },
    { name: 'Pojazdy', sub: 'Oklejanie aut i wrapy', text: 'Twoje auto firmowe codziennie mija potencjalnych klientów. Projektujemy oklejenie pod konkretny model i sami montujemy folię: od prostych napisów i oklejenia szyb po pełny wrap.', tags: ['Oklejanie aut', 'Oklejanie busów', 'Wrapy', 'Oklejanie szyb i witryn', 'Montaż'] },
    { name: 'Strony www', sub: 'Projektowanie stron', text: 'Szybka strona firmowa w stylu Twojego busa i wizytówek, dobrze działająca na każdym telefonie i widoczna w Google.', tags: ['Projekt na wymiar', 'Wersja mobilna', 'Widoczność w Google'] },
    { name: 'Gadżety', sub: 'Gadżety reklamowe', text: 'Drobiazgi, dzięki którym Twoja nazwa jest stale na widoku: kubki, tablice magnetyczne, przypinki i naklejki w stylu Twojej marki.', tags: ['Kubki', 'Tablice magnetyczne', 'Naklejki', 'Przypinki'] }
  ],
  svCta: 'Wycena:', prev: 'Poprzednie zdjęcie', next: 'Następne zdjęcie',

  prEyebrow: 'Projekty',
  prTitle: ['Projekty,', 'nie miniaturki.'],
  prIntro: 'Kompletne marki z jednego studia. Tak wygląda jedna identyfikacja na papierze, tkaninie, pojazdach i w sieci.',
  prOpen: 'Zobacz projekt',
  projects: {
    'kristofix': 'Od pustej kartki do kompletnego wizerunku: logo, wizytówki, oklejenie busa i strona www.',
    'maniek-diensten': 'Logo, odzież firmowa, wizytówki i strona www w jednym rozpoznawalnym stylu.',
    'patera': 'Logo, koszulki i oklejenie samochodu firmowego dla firmy remontowej.',
    'custom-garage': 'Logo, bluzy i naklejki dla warsztatu z Eindhoven.',
    'podtech': 'Logo i kompletna linia odzieży roboczej dla firmy instalacji elektrycznych.',
    'weldpolako': 'Logo, oklejenie aut i odzież firmowa dla firmy spawalniczej.',
    'pmk-klusjesman': 'Oklejenie busów, odzież robocza, tablica budowlana i wizytówki.'
  },
  csEyebrow: 'Projekt', csResult: n => `Jedna marka. ${n} ${n >= 2 && n <= 4 ? 'nośniki' : 'nośników'}. Jedno studio.`, csCta: 'Chcę podobny projekt', csNext: 'Następny projekt',

  pcEyebrow: 'Jak pracujemy',
  pcTitle: ['Od pomysłu', 'do gotowego produktu.'],
  process: [
    ['Projekt', 'Logo i projekt, poprawiane do skutku. Dopiero wtedy trafiają do produkcji.'],
    ['Produkcja', 'Druk, tekstylia, folia i tablice, w tych samych kolorach i tej samej jakości.'],
    ['Montaż', 'Oklejenia aut i witryn montujemy sami. Całą resztę dostajesz gotową do użycia.']
  ],
  pcNote: 'Jedno studio od początku do końca. Swoją historię opowiadasz tylko raz.',

  rvEyebrow: 'Opinie', rvTitle: 'Co mówią klienci', rvSource: 'Opinia w Google', rvAll: 'Wszystkie opinie w Google',
  rvPrev: 'Poprzednia opinia', rvNext: 'Następna opinia', rvStars: '5 na 5 gwiazdek', rvLangNote: 'Opinie w oryginalnym języku.',

  abEyebrow: 'O GW Graphic Design',
  abTitle: ['Grafik.', 'Wykonawca.', 'Jedna osoba do kontaktu.'],
  abP: [
    'GW Graphic Design to studio Grzegorza Woźniaka w Eindhoven. Łączy projektowanie graficzne z prawdziwą produkcją i montażem.',
    'Ta sama osoba, która projektuje Twoją identyfikację, przygotowuje druk i odzież do produkcji, projektuje oklejenie auta, sama nakleja folię i buduje Twoją stronę www. Bez pośredników: swoją historię opowiadasz raz, a efekt zgadza się na papierze, na tkaninie, na drodze i w sieci.'
  ],
  abFacts: [['Projekt', 'Logo, identyfikacja i wszystkie projekty'], ['Produkcja', 'Druk, odzież, folia i gadżety'], ['Montaż', 'Oklejanie aut i witryn, osobiście']],
  abRole: 'Grafik i specjalista od reklamy',

  fEyebrow: 'Zapytaj o wycenę',
  fTitle: ['Powiedz, czego', 'potrzebujesz.'],
  fIntro: 'Wystarczy kilka zdań. Wkrótce odpowiemy z propozycją i wyceną.',
  fService: 'W czym możemy pomóc?', fServiceHint: 'Zaznacz, co pasuje (opcjonalnie).', fOther: 'Coś innego',
  fName: 'Imię i nazwisko', fCompany: 'Firma', fEmail: 'E-mail', fPhone: 'Telefon', fMessage: 'Wiadomość',
  fMessagePh: 'Na przykład: oklejenie dwóch busów i koszulki dla ekipy.',
  fOptional: 'opcjonalnie', fRequired: 'wymagane',
  fPrivacy: 'Twoje dane wykorzystamy tylko do odpowiedzi na zapytanie. Przeczytaj naszą', fPrivacyLink: 'politykę prywatności',
  fSend: 'Wyślij zapytanie', fSending: 'Wysyłanie…',
  fErrName: 'Podaj imię i nazwisko.', fErrEmail: 'Podaj prawidłowy adres e-mail.', fErrMessage: 'Napisz krótko, w czym możemy pomóc.',
  fErrSummary: 'Sprawdź zaznaczone pola.',
  fErrRate: 'Wysłano już kilka zapytań. Spróbuj ponownie później albo zadzwoń.',
  fErrSend: 'Nie udało się wysłać. Spróbuj ponownie lub napisz na design@gwgraphic.com.',
  fDoneTitle: 'Dziękujemy!', fDoneText: 'Zapytanie zostało wysłane. Odezwiemy się najszybciej, jak to możliwe.',

  ctEyebrow: 'Kontakt', ctTitle: 'Wolisz porozmawiać od razu?',
  ctIntro: 'Napisz, zadzwoń albo wyślij maila. Zdjęcia busa lub obecnego logo możesz przesłać od razu.',
  ctWa: 'Napisz wiadomość', ctPhone: 'Zadzwoń', ctEmail: 'E-mail',
  ctMeta: 'Eindhoven, Brabancja Północna. Projekt i produkcja dla całej Holandii, Belgii i Niemiec; montaż na miejscu.',
  waText: 'Dzień dobry, mam pytanie do GW Graphic Design.',

  ftLine: 'Reklama w każdej formie. Logo, druk, odzież firmowa, oklejanie aut, strony www i gadżety z Eindhoven.',
  ftServices: 'Usługi', ftMenu: 'Menu', ftContact: 'Kontakt', ftSocial: 'Social media', ftLegal: 'Informacje prawne',
  ftServiceLinks: ['Logo i identyfikacja', 'Nadruki na odzieży', 'Druk', 'Oklejanie aut', 'Strony www', 'Gadżety reklamowe'],
  legalNames: { privacy: 'Polityka prywatności', cookies: 'Polityka cookies', terms: 'Regulamin', notice: 'Nota prawna', a11y: 'Dostępność' },
  cookieSettings: 'Ustawienia cookies',
  ckTitle: 'Ustawienia cookies',
  ckText: 'Ta strona nie używa plików cookies do statystyk, reklam ani śledzenia i nie wczytuje usług zewnętrznych. Nie ma więc niczego do zaakceptowania ani odrzucenia.',
  ckStore: 'Tylko w trakcie wizyty przeglądarka zapamiętuje, czy animacja otwarcia została już odtworzona (sessionStorage). Informacja znika po zamknięciu karty.',
  ckClear: 'Wyczyść zapisane dane', ckCleared: 'Wyczyszczono.', ckMore: 'Przeczytaj politykę cookies',
  backHome: 'Wróć na stronę główną', updated: 'Ostatnia aktualizacja', updatedDate: '26 września 2026'
}
};
