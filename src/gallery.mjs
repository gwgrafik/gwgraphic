// "More work" gallery: every other real GW Graphic Design photo from www.gwgraphic.com/assets/img/portfolio.
// Rows: [source file, service key, client ('' when the name is not legible in the photo), kind]
// Alt text is generated per kind and language (what is visible + for whom). Photos are used 1:1.

export const GALLERY_ROWS = [
  // Branding — logos
  ['logo_1', 'branding', 'Rk van Rok', 'logo'], ['logo_4', 'branding', 'R. Buczek', 'logo'], ['logo_5', 'branding', 'Hausmeisterservice', 'logo'],
  ['logo_6', 'branding', 'Food Factory', 'logo'], ['logo_8', 'branding', 'Palmo-Trans', 'logo'], ['logo_10', 'branding', 'SK Cleaning', 'logo'],
  ['logo_11', 'branding', 'Doggy Star', 'logo'], ['logo_12', 'branding', 'AL Bouw Timmerwerk', 'logo'], ['logo_13', 'branding', 'Grupa LIS', 'logo'],
  ['logo_14', 'branding', 'VAG Car Professional', 'logo'], ['logo_15', 'branding', 'Simon Dienstverlening', 'logo'], ['logo_16', 'branding', 'Phelippe Bau', 'logo'],
  ['logo_17', 'branding', 'Bieda', 'logo'], ['logo_18', 'branding', 'Kammaks', 'logo'], ['logo_19', 'branding', 'Oh my Pupil', 'logo'],
  ['logo_21', 'branding', 'Golden Fingers Barbershop', 'logo'], ['logo_22', 'branding', 'A.Keister', 'logo'], ['logo_23', 'branding', 'Podobonheur', 'logo'],
  ['logo_24', 'branding', 'SPC Construction', 'logo'], ['logo_25', 'branding', 'R-groep', 'logo'], ['logo_26', 'branding', 'Magnus', 'logo'],
  ['logo_27', 'branding', 'Kuchta gotuje', 'logo'], ['logo_28', 'branding', 'OneCrew', 'logo'], ['logo_32', 'branding', 'Raffie', 'logo'],
  ['logo_33', 'branding', 'Respol', 'logo'], ['logo_34', 'branding', 'A&R Wrap Studio', 'logo'], ['logo_35', 'branding', 'WeMe', 'logo'],
  ['logo_36', 'branding', 'A.Chechla Grondverzet', 'logo'], ['logo_37', 'branding', 'Dak Construct', 'logo'], ['logo_38', 'branding', 'Dani Bouwservice', 'logo'],
  ['logo_39', 'branding', 'Elzet Bouw', 'logo'], ['logo_40', 'branding', 'PD Light Solution', 'logo'], ['logo_41', 'branding', 'Mania Bouw Solution', 'logo'],
  ['logo_42', 'branding', 'Fit House', 'logo'], ['logo_43', 'branding', 'Art Hair Designe', 'logo'], ['logo_45', 'branding', 'Q74 Tuinen', 'logo'],
  ['logo_46', 'branding', 'D.A.W. Schildersbedrijf', 'logo'], ['logo_47', 'branding', 'Ewelina Lashes', 'logo'], ['logo_48', 'branding', 'PPK Bestratingen', 'logo'],
  ['logo_49', 'branding', 'Fluo Installatie', 'logo'], ['logo_50', 'branding', 'Sustain Hydrogen', 'logo'], ['logo_51', 'branding', 'Rafika', 'logo'],
  ['logo_52', 'branding', 'Door in the Darkness', 'logo'], ['logo_53', 'branding', 'Dominika Jabłońska', 'logo'], ['logo_55', 'branding', 'DaveDak', 'logo'],
  ['logo_57', 'branding', 'Dave Team Pike Fishing', 'logo'], ['logo_58', 'branding', 'GoldenPaw.be', 'logo'], ['logo_59', 'branding', 'DoReMi', 'logo'],
  // Lettering
  ['oklejenie_5', 'belettering', 'Raffie', 'vans'], ['oklejenie_2', 'belettering', 'EkaaDuurzaam', 'vans'],
  ['oklejenie_7', 'belettering', 'mTi', 'car'], ['oklejenie_8', 'belettering', 'mTi', 'car'], ['oklejenie_9', 'belettering', 'mTi', 'car'],
  ['oklejenie_10', 'belettering', 'mTi', 'car'], ['oklejenie_11', 'belettering', 'mTi', 'car'],
  // Workwear
  ['ciuchy_25', 'kleding', 'MB Smart', 'hoodies'], ['ciuchy_26', 'kleding', 'MB Smart', 'hoodies'], ['ciuchy_22', 'kleding', 'TOMPOW', 'hoodies'],
  ['ciuchy_14', 'kleding', 'RenTrans', 'shirts'], ['ciuchy_15', 'kleding', 'Dreamszone Evenementen', 'shirts'], ['ciuchy_10', 'kleding', 'Bieda', 'shirts'],
  ['ciuchy_6', 'kleding', 'R-groep', 'workwear'], ['ciuchy_7', 'kleding', 'Benelux Bouw', 'workwear'], ['ciuchy_9', 'kleding', 'Mazinjais', 'workwear'],
  ['ciuchy_1', 'kleding', '', 'green'], ['ciuchy_2', 'kleding', '', 'shirts'], ['ciuchy_13', 'kleding', '', 'names'],
  ['ciuchy_21', 'kleding', '', 'textprint'], ['ciuchy_23', 'kleding', '', 'racing'],
  // Print
  ['wizyt_4', 'drukwerk', 'EkaaDuurzaam', 'cards'], ['wizyt_5', 'drukwerk', 'GK Cars', 'cards'], ['wizyt_6', 'drukwerk', 'Magnus', 'cards'],
  ['wizyt_7', 'drukwerk', 'Doggy Star', 'cards'], ['wizyt_8', 'drukwerk', 'Hot-Pot', 'cards-loyalty'], ['wizyt_9', 'drukwerk', 'Simon Dienstverlening', 'cards'],
  ['wizyt_10', 'drukwerk', 'AGM Montage', 'cards'], ['wizyt_13', 'drukwerk', 'D.M. Constructions', 'cards'], ['wizyt_2', 'drukwerk', '', 'cards'],
  ['wizyt_3', 'drukwerk', '', 'cards'], ['wizyt_11', 'drukwerk', '', 'cards-loyalty'],
  ['ulotki_3', 'drukwerk', 'Perfect House Cleaning', 'flyers'], ['ulotki_4', 'drukwerk', 'Gabriela Pedicure', 'flyers'], ['ulotki_7', 'drukwerk', 'Tom Handyman', 'flyers'],
  ['ulotki_8', 'drukwerk', 'Haushaltservice Urbanski', 'flyers'], ['ulotki_9', 'drukwerk', 'MB Smart', 'flyers'], ['ulotki_6', 'drukwerk', '', 'menu'],
  ['ulotki_1', 'drukwerk', '', 'flyers'], ['ulotki_2', 'drukwerk', '', 'flyers'],
  ['plakat_1', 'drukwerk', 'Zumba', 'posters'], ['plakat_2', 'drukwerk', 'Internationale Kinderdag', 'posters'], ['plakat_3', 'drukwerk', 'WOŚP Kerkrade', 'posters'],
  ['plakat_4', 'drukwerk', 'Salamander Tattoo', 'flyers'], ['banner_2', 'drukwerk', 'LM Solutions', 'banner'], ['roll_2', 'drukwerk', 'OneCrew', 'rollup'],
  ['flaga_2', 'drukwerk', 'Calisthenics Den Haag', 'flag'],
  // Promotional items
  ['naklejki_2', 'gadgets', '', 'sheets']
];

const A = {
  logo: [c => `Logo voor ${c}`, c => `Logo for ${c}`, c => `Logo dla ${c}`],
  vans: [c => `Bedrijfsbussen met belettering voor ${c}`, c => `Company vans with graphics for ${c}`, c => `Busy firmowe oklejone dla ${c}`],
  car: [c => `Zwarte stationwagen met belettering voor ${c}`, c => `Black estate car with graphics for ${c}`, c => `Czarne kombi z oklejeniem dla ${c}`],
  hoodies: [c => `Zwarte hoodies bedrukt met het logo van ${c}`, c => `Black hoodies printed with the ${c} logo`, c => `Czarne bluzy z nadrukiem logo ${c}`],
  shirts: [c => c ? `T-shirts bedrukt met het logo van ${c}` : 'Donkere T-shirts bedrukt met een groen bedrijfslogo', c => c ? `T-shirts printed with the ${c} logo` : 'Dark T-shirts printed with a green company logo', c => c ? `Koszulki z nadrukiem logo ${c}` : 'Ciemne koszulki z zielonym logo firmy'],
  workwear: [c => `Bedrijfskleding met het logo van ${c}`, c => `Workwear with the ${c} logo`, c => `Odzież firmowa z logo ${c}`],
  green: [() => 'Groene hoodies en groene en witte T-shirts met bedrijfslogo', () => 'Green hoodies and green and white T-shirts with a company logo', () => 'Zielone bluzy oraz zielone i białe koszulki z logo firmy'],
  names: [() => 'Zwarte sweaters met persoonlijke namen voor een team', () => 'Black sweatshirts personalised with names for a team', () => 'Czarne bluzy z imionami dla drużyny'],
  textprint: [() => 'Blauwe T-shirts met een tekstprint', () => 'Blue T-shirts with a text print', () => 'Niebieskie koszulki z nadrukiem tekstowym'],
  racing: [() => 'Zwarte T-shirts met een logo met geblokte racevlaggen', () => 'Black T-shirts with a chequered racing flag logo', () => 'Czarne koszulki z logo z flagami wyścigowymi'],
  cards: [c => c ? `Visitekaartjes voor ${c}` : 'Visitekaartjes, voor- en achterkant', c => c ? `Business cards for ${c}` : 'Business cards, front and back', c => c ? `Wizytówki dla ${c}` : 'Wizytówki, awers i rewers'],
  'cards-loyalty': [c => c ? `Visitekaartjes en een stempelkaart voor ${c}` : 'Visitekaartjes en een stempelkaart in zwart en goud', c => c ? `Business cards and a loyalty card for ${c}` : 'Black and gold business cards and a loyalty card', c => c ? `Wizytówki i karta lojalnościowa dla ${c}` : 'Czarno-złote wizytówki i karta lojalnościowa'],
  flyers: [c => c ? `Flyers voor ${c}` : 'Stapels flyers met foto’s en QR-code', c => c ? `Flyers for ${c}` : 'Stacks of flyers with photos and a QR code', c => c ? `Ulotki dla ${c}` : 'Stosy ulotek ze zdjęciami i kodem QR'],
  menu: [() => 'Menukaarten in donkere uitvoering', () => 'Dark menu cards', () => 'Karty menu w ciemnej wersji'],
  posters: [c => `Posters voor ${c}`, c => `Posters for ${c}`, c => `Plakaty dla ${c}`],
  banner: [c => `Spandoek met ringen voor ${c}`, c => `Banner with eyelets for ${c}`, c => `Baner z oczkami dla ${c}`],
  rollup: [c => `Roll-up banner voor ${c}`, c => `Roll-up banner for ${c}`, c => `Roll-up dla ${c}`],
  flag: [c => `Beachflag voor ${c}`, c => `Beach flag for ${c}`, c => `Flaga reklamowa dla ${c}`],
  sheets: [() => 'Vellen met gedrukte logostickers', () => 'Sheets of printed logo stickers', () => 'Arkusze z naklejkami z logo']
};

const slugify = s => s.toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g, '').replace(/ł/g, 'l').replace(/&/g, 'en').replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
const KIND_SLUG = { logo: 'logo', vans: 'bussen-belettering', car: 'autobelettering', hoodies: 'hoodies', shirts: 't-shirts', workwear: 'bedrijfskleding', green: 'bedrijfskleding', names: 'teamkleding', textprint: 't-shirts', racing: 't-shirts', cards: 'visitekaartjes', 'cards-loyalty': 'visitekaartjes-stempelkaart', flyers: 'flyers', menu: 'menukaarten', posters: 'posters', banner: 'spandoek', rollup: 'roll-up', flag: 'beachflag', sheets: 'stickervellen' };

const seen = new Map();
export const GALLERY = GALLERY_ROWS.map(([src, svc, client, kind]) => {
  let slug = [client && slugify(client), KIND_SLUG[kind]].filter(Boolean).join('-');
  const n = (seen.get(slug) || 0) + 1; seen.set(slug, n);
  if (n > 1 || !client) slug += '-' + src.split('_')[1];
  const [nl, en, pl] = A[kind];
  return { slug, src, svc, client, alt: { nl: nl(client), en: en(client), pl: pl(client) } };
});
