import { GALLERY } from './gallery.mjs';
// Portfolio image manifest.
// key  = descriptive output filename (without size/extension)
// src  = original file in src/source-assets/portfolio/
// alt  = what is visible in the photo, per language
// Every photo is real GW Graphic Design work; client names match the client shown.

export const IMAGES = {
  // Kristofix
  'kristofix-bus-belettering-zijkant': { src: 'oklejenie_14', alt: {
    nl: 'Mercedes Vito van Kristofix met zijbelettering, ontworpen en gemonteerd door GW Graphic Design',
    en: 'Kristofix Mercedes Vito with side lettering, designed and installed by GW Graphic Design',
    pl: 'Mercedes Vito firmy Kristofix z oklejeniem boku, zaprojektowanym i zamontowanym przez GW Graphic Design' } },
  'kristofix-logo': { src: 'logo_2', alt: {
    nl: 'Kristofix-logo met drie cartoonvaklui op een rode achtergrond',
    en: 'Kristofix logo with three cartoon tradesmen on a red background',
    pl: 'Logo Kristofix z trzema rysunkowymi fachowcami na czerwonym tle' } },
  'kristofix-logo-op-papier': { src: 'logo_30', alt: {
    nl: 'Kristofix-logo gedrukt op wit papier',
    en: 'Kristofix logo printed on white paper',
    pl: 'Logo Kristofix wydrukowane na białym papierze' } },
  'kristofix-visitekaartjes': { src: 'wizyt_14', alt: {
    nl: 'Visitekaartjes van Kristofix, voor- en achterkant',
    en: 'Kristofix business cards, front and back',
    pl: 'Wizytówki Kristofix, awers i rewers' } },
  'kristofix-bus-belettering-voorzijde': { src: 'oklejenie_12', alt: {
    nl: 'Kristofix-bus met belettering, van voren gezien',
    en: 'Kristofix van with lettering, seen from the front',
    pl: 'Bus Kristofix z oklejeniem, widok z przodu' } },
  'kristofix-bus-belettering-schuin-achter': { src: 'oklejenie_15', alt: {
    nl: 'Kristofix-bus met belettering op zijkant en achterdeuren',
    en: 'Kristofix van with lettering on the side and rear doors',
    pl: 'Bus Kristofix z oklejeniem boku i tylnych drzwi' } },
  'kristofix-bus-belettering-achterzijde': { src: 'oklejenie_13', alt: {
    nl: 'Achterdeuren van de Kristofix-bus met logo, contactgegevens en website',
    en: 'Rear doors of the Kristofix van with logo, contact details and website',
    pl: 'Tylne drzwi busa Kristofix z logo, danymi kontaktowymi i adresem strony' } },
  'kristofix-website': { src: 'www_2', alt: {
    nl: 'Website van Kristofix op desktop, laptop, tablet en telefoon',
    en: 'Kristofix website on desktop, laptop, tablet and phone',
    pl: 'Strona Kristofix na komputerze, laptopie, tablecie i telefonie' } },

  // Maniek Diensten
  'maniek-diensten-bedrijfskleding': { src: 'ciuchy_24', alt: {
    nl: 'Donkerblauwe T-shirts met het logo van Maniek Diensten',
    en: 'Navy T-shirts with the Maniek Diensten logo',
    pl: 'Granatowe koszulki z logo Maniek Diensten' } },
  'maniek-diensten-logo': { src: 'logo_3', alt: {
    nl: 'Logo van Maniek Diensten: een blauwe waterdruppel met de letter M',
    en: 'Maniek Diensten logo: a blue water drop with the letter M',
    pl: 'Logo Maniek Diensten: niebieska kropla wody z literą M' } },
  'maniek-diensten-logo-op-papier': { src: 'logo_31', alt: {
    nl: 'Logo van Maniek Diensten gedrukt op wit papier',
    en: 'Maniek Diensten logo printed on white paper',
    pl: 'Logo Maniek Diensten wydrukowane na białym papierze' } },
  'maniek-diensten-visitekaartjes': { src: 'wizyt_12', alt: {
    nl: 'Zwarte visitekaartjes van Maniek Diensten met blauwe druppel',
    en: 'Black Maniek Diensten business cards with a blue drop',
    pl: 'Czarne wizytówki Maniek Diensten z niebieską kroplą' } },
  'maniek-diensten-website': { src: 'www_1', alt: {
    nl: 'Website van Maniek Diensten op desktop, laptop, tablet en telefoon',
    en: 'Maniek Diensten website on desktop, laptop, tablet and phone',
    pl: 'Strona Maniek Diensten na komputerze, laptopie, tablecie i telefonie' } },

  // Patera Klussenbedrijf
  'patera-klussenbedrijf-autobelettering': { src: 'oklejenie_6', alt: {
    nl: 'Bedrijfsauto van Patera Klussenbedrijf met belettering op de achterruit en zijkant',
    en: 'Patera Klussenbedrijf company car with lettering on the rear window and side',
    pl: 'Samochód firmy Patera Klussenbedrijf z oklejeniem tylnej szyby i boku' } },
  'patera-klussenbedrijf-logo': { src: 'logo_7', alt: {
    nl: 'Logo van Patera Klussenbedrijf: een huis in een cirkel, wit op zwart',
    en: 'Patera Klussenbedrijf logo: a house in a circle, white on black',
    pl: 'Logo Patera Klussenbedrijf: dom w okręgu, biały na czarnym' } },
  'patera-klussenbedrijf-t-shirts': { src: 'ciuchy_12', alt: {
    nl: 'Zwarte en witte T-shirts met het logo van Patera Klussenbedrijf',
    en: 'Black and white T-shirts with the Patera Klussenbedrijf logo',
    pl: 'Czarne i białe koszulki z logo Patera Klussenbedrijf' } },

  // Custom Garage Eindhoven
  'custom-garage-eindhoven-hoodies': { src: 'ciuchy_4', alt: {
    nl: 'Hoodies en sweaters met rond rood-zwart garagelogo en namen op de rug',
    en: 'Hoodies and sweatshirts with a round red and black garage badge and names on the back',
    pl: 'Bluzy z okrągłym czerwono-czarnym logo warsztatu i imionami na plecach' } },
  'custom-garage-eindhoven-logo': { src: 'logo_20', alt: {
    nl: 'Rond logo van Custom Garage Eindhoven in rood, zwart en wit',
    en: 'Round Custom Garage Eindhoven logo in red, black and white',
    pl: 'Okrągłe logo Custom Garage Eindhoven w czerwieni, czerni i bieli' } },
  'custom-garage-eindhoven-stickers': { src: 'naklejki_3', alt: {
    nl: 'Ronde stickers met het logo van Custom Garage Eindhoven',
    en: 'Round stickers with the Custom Garage Eindhoven logo',
    pl: 'Okrągłe naklejki z logo Custom Garage Eindhoven' } },

  // Podtech
  'podtech-t-shirts': { src: 'ciuchy_19', alt: {
    nl: 'Donkerblauwe T-shirts met geel Podtech-logo',
    en: 'Navy T-shirts with the yellow Podtech logo',
    pl: 'Granatowe koszulki z żółtym logo Podtech' } },
  'podtech-logo': { src: 'logo_56', alt: {
    nl: 'Geel Podtech-logo met bliksemschicht, elektrotechnische installaties',
    en: 'Yellow Podtech logo with a lightning bolt, electrical installations',
    pl: 'Żółte logo Podtech z błyskawicą, instalacje elektryczne' } },
  'podtech-werkshirts': { src: 'ciuchy_17', alt: {
    nl: 'Zwarte werkshirts met Podtech-logo op borst en mouw',
    en: 'Black work shirts with the Podtech logo on chest and sleeve',
    pl: 'Czarne koszulki robocze z logo Podtech na piersi i rękawie' } },
  'podtech-jassen': { src: 'ciuchy_16', alt: {
    nl: 'Grijze werkjassen met Podtech-logo',
    en: 'Grey work jackets with the Podtech logo',
    pl: 'Szare kurtki robocze z logo Podtech' } },
  'podtech-softshell-jassen': { src: 'ciuchy_20', alt: {
    nl: 'Softshell jassen met Podtech-logo op borst en rug',
    en: 'Softshell jackets with the Podtech logo on chest and back',
    pl: 'Kurtki softshell z logo Podtech na piersi i plecach' } },
  'podtech-werkbroeken': { src: 'ciuchy_18', alt: {
    nl: 'Zwarte werkbroeken met Podtech-logo op de pijp',
    en: 'Black work trousers with the Podtech logo on the leg',
    pl: 'Czarne spodnie robocze z logo Podtech na nogawce' } },

  // WeldPolako
  'weldpolako-bedrijfsbussen-belettering': { src: 'oklejenie_3', alt: {
    nl: 'Twee witte Volkswagen Caddy-bussen met WeldPolako-belettering',
    en: 'Two white Volkswagen Caddy vans with WeldPolako lettering',
    pl: 'Dwa białe Volkswageny Caddy z oklejeniem WeldPolako' } },
  'weldpolako-logo': { src: 'logo_29', alt: {
    nl: 'WeldPolako-logo: lashelm met gekruiste lastangen, sinds 2020',
    en: 'WeldPolako logo: welding helmet with crossed welding torches, since 2020',
    pl: 'Logo WeldPolako: przyłbica spawalnicza ze skrzyżowanymi uchwytami, od 2020' } },
  'weldpolako-bedrijfskleding': { src: 'ciuchy_5', alt: {
    nl: 'Zwarte hoodies en T-shirts met het WeldPolako-logo',
    en: 'Black hoodies and T-shirts with the WeldPolako logo',
    pl: 'Czarne bluzy i koszulki z logo WeldPolako' } },

  // PMK Klusjesman
  'pmk-klusjesman-bussen-belettering': { src: 'oklejenie_1', alt: {
    nl: 'Drie gele Ford Transit-bussen met PMK Klusjesman-belettering',
    en: 'Three yellow Ford Transit vans with PMK Klusjesman lettering',
    pl: 'Trzy żółte Fordy Transit z oklejeniem PMK Klusjesman' } },
  'pmk-klusjesman-t-shirts-petten': { src: 'ciuchy_3', alt: {
    nl: 'Witte en gele T-shirts en een witte pet met het PMK-logo',
    en: 'White and yellow T-shirts and a white cap with the PMK logo',
    pl: 'Białe i żółte koszulki oraz biała czapka z logo PMK' } },
  'pmk-klusjesman-bouwbord': { src: 'plyta_1', alt: {
    nl: 'Geel bouwbord van PMK Klusjesman met telefoonnummer',
    en: 'Yellow PMK Klusjesman site sign with phone number',
    pl: 'Żółta tablica budowlana PMK Klusjesman z numerem telefonu' } },
  'pmk-klusjesman-visitekaartjes': { src: 'wizyt_1', alt: {
    nl: 'Gele visitekaartjes van PMK Klusjesman',
    en: 'Yellow PMK Klusjesman business cards',
    pl: 'Żółte wizytówki PMK Klusjesman' } },

  // Other clients (services)
  'dreamszone-roll-up-banner': { src: 'roll_1', alt: {
    nl: 'Roll-up banner voor Dreamszone Evenementen',
    en: 'Roll-up banner for Dreamszone Evenementen',
    pl: 'Roll-up dla Dreamszone Evenementen' } },
  'spoko-flyers': { src: 'ulotki_5', alt: {
    nl: 'Flyers met menukaart voor SPOKO',
    en: 'Menu flyers for SPOKO',
    pl: 'Ulotki z menu dla SPOKO' } },
  'spc-construction-spandoek': { src: 'banner_3', alt: {
    nl: 'Blauw spandoek met ringen voor SPC Construction',
    en: 'Blue banner with eyelets for SPC Construction',
    pl: 'Niebieski baner z oczkami dla SPC Construction' } },
  'dpk-bouw-beachflag': { src: 'flaga_1', alt: {
    nl: 'Beachflag met voet voor DPK Bouw',
    en: 'Beach flag with base for DPK Bouw',
    pl: 'Flaga reklamowa z podstawą dla DPK Bouw' } },
  'palmo-trans-magneetborden': { src: 'magnesy_1', alt: {
    nl: 'Stapel magneetborden voor Palmo-Trans met telefoonnummer',
    en: 'Stack of Palmo-Trans magnetic signs with phone number',
    pl: 'Stos tablic magnetycznych Palmo-Trans z numerem telefonu' } },
  'holografische-stickers': { src: 'naklejki_4', alt: {
    nl: 'Holografische kortingsstickers',
    en: 'Holographic discount stickers',
    pl: 'Holograficzne naklejki rabatowe' } },
  'gk-cars-kleding-mokken': { src: 'ciuchy_8', alt: {
    nl: 'Sweaters, mokken en visitekaartjes van GK Cars',
    en: 'GK Cars sweatshirts, mugs and business cards',
    pl: 'Bluzy, kubki i wizytówki GK Cars' } },
  'rijschool-simpel-weg-kleding': { src: 'ciuchy_11', alt: {
    nl: 'Rode sweaters en een lichtblauwe blouse met het logo van Rijschool Simpel Weg',
    en: 'Red sweatshirts and a light blue blouse with the Rijschool Simpel Weg logo',
    pl: 'Czerwone bluzy i jasnoniebieska koszula z logo Rijschool Simpel Weg' } },
  'agm-montage-bussen-belettering': { src: 'oklejenie_4', alt: {
    nl: 'Twee grijze bussen met belettering van AGM Montage',
    en: 'Two grey vans with AGM Montage lettering',
    pl: 'Dwa szare busy z oklejeniem AGM Montage' } }
};

// PMK Klusjesman site banner (added in V11)
IMAGES['pmk-klusjesman-spandoek'] = { src: 'banner_1', alt: {
  nl: 'Geel spandoek van PMK Klusjesman met diensten en telefoonnummer',
  en: 'Yellow PMK Klusjesman banner with services and phone number',
  pl: 'Żółty baner PMK Klusjesman z usługami i numerem telefonu' } };

// "More work" gallery images (see gallery.mjs)
for (const g of GALLERY) IMAGES[g.slug] = { src: g.src, alt: g.alt };

// Responsive widths generated for every portfolio image (source files are 1000 × 1000).
export const WIDTHS = [480, 800, 1000];
