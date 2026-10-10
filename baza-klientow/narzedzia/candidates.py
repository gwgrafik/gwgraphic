import sys, json, re, collections
OUT = sys.argv[1]
rows = json.load(open(f'{OUT}/_rows.json'))
PROD = {
 'Dekarze': ('oklejenie busów i odzież robocza ekipy', 'tablice informacyjne na dachach/budowach'),
 'Budowlanka i remonty': ('oklejenie busów i odzież robocza', 'tablice budowy, banery płotowe'),
 'Malarze': ('oklejenie busów i odzież robocza', 'naklejki na drzwi i okna realizacji'),
 'Instalatorzy i elektrycy': ('oklejenie busów serwisowych', 'odzież robocza z logo'),
 'Ogrody i zieleń': ('odzież robocza i oklejenie aut', 'tablice na realizacjach'),
 'Sprzątanie': ('odzież robocza ekip i oklejenie aut', 'identyfikatory, naklejki na wózki'),
 'Transport i logistyka': ('oklejenie floty', 'odzież kierowców i magazynu'),
 'Motoryzacja': ('szyld i witryna warsztatu', 'oklejenie aut serwisowych'),
 'Szkoły jazdy': ('oklejenie aut szkoleniowych', 'oznaczenie „L” i witryna biura'),
 'Inne rzemiosło': ('szyld lub witryna', 'oklejenie auta firmowego'),
 'Fryzjerzy i beauty': ('witryna/okno i szyld', 'fartuchy/odzież personelu'),
 'Zdrowie i fizjoterapia': ('oznakowanie wejścia i witryna', 'tablice informacyjne w gabinecie'),
 'Fitness i sport': ('grafika ścienna i witryna', 'odzież trenerów'),
 'Gastronomia': ('witryna/okno i szyld', 'menu, naklejki na wynos'),
 'Sklepy lokalne': ('witryna sklepowa', 'szyld, naklejki promocyjne'),
 'Biura i usługi B2B': ('odzież i materiały firmowe', 'oznakowanie biura/wejścia'),
}
FIT = {'Dekarze':3,'Budowlanka i remonty':3,'Malarze':3,'Instalatorzy i elektrycy':3,'Ogrody i zieleń':3,'Sprzątanie':3,'Transport i logistyka':3,'Motoryzacja':3,'Szkoły jazdy':3,
       'Inne rzemiosło':2,'Fryzjerzy i beauty':2,'Zdrowie i fizjoterapia':2,'Fitness i sport':2,'Gastronomia':2,'Sklepy lokalne':2,'Biura i usługi B2B':2}
QUOTA = {'Gastronomia':30,'Sklepy lokalne':30,'Biura i usługi B2B':25,'Fryzjerzy i beauty':25,'Fitness i sport':20,'Motoryzacja':25,'Zdrowie i fizjoterapia':15,'Inne rzemiosło':15}
def osm_link(src):
    m = re.search(r'(node|way|relation)/(\d+)', src or ''); return f'https://www.openstreetmap.org/{m.group(1)}/{m.group(2)}' if m else ''
def regdom(u):
    m = re.match(r'https?://(?:www\.)?([^/:]+)', u or '', re.I); h = m.group(1).lower() if m else ''
    return '.'.join(h.split('.')[-2:])
DOMCOUNT = collections.Counter(regdom(r['Strona WWW']) for r in rows if r['Strona WWW'])
# korekty po audycie ChatGPT (sekcja 7): typ podmiotu i tryb zakupów
OVR = {
 'Actief Werkt': ('sieć ogólnokrajowa (77 lokalizacji)', 'możliwe centralne zakupy', None),
 'Cosmo Hairstyling': ('sieć ogólnokrajowa (40 salonów)', 'możliwe centralne standardy; uprawnienia oddziału nieustalone', None),
 'ANAC': ('sieć myjni', 'możliwe centralne standardy oznakowania', None),
 'E.T.V. Volley': ('stowarzyszenie tenisa i padla', 'zarząd klubu; tryb kontaktu inny niż firma', ('odzież klubowa', 'banery sponsorów, tablice wydarzeń')),
 'B-Covered': ('pracownia architektury wnętrz (nie sklep)', 'nieustalone', ('oznakowanie pracowni', 'materiały do realizacji (możliwe partnerstwo)')),
 'Bike Totaal': ('wspólna marka niezależnych przedsiębiorców (kooperatywa)', 'lokalny właściciel; zakres decyzji do sprawdzenia', None),
}
cand = collections.defaultdict(list)
for r in rows:
    c = r['Kategoria']
    if c not in PROD or r['Sieć / franczyza'] or r['Stan strony'] not in ('OK', 'PRZESTARZAŁA'): continue
    emp = r['Pracownicy (LinkedIn)']; sig = r['Sygnały zakupu']
    grow = bool(re.search(r'rekrut|rośnie|podwoiło|potroiło|nowa|nowy', sig))
    fit = FIT[c] + (1 if isinstance(emp, int) and 4 <= emp <= 50 else 0) + (1 if grow else 0)
    fit = min(fit, 5)
    evid = 'średnia' if (emp or sig) else 'niska'
    sel = fit * 3 + (2 if evid == 'średnia' else 0) + (1 if r['Stan strony'] == 'PRZESTARZAŁA' else 0)
    p1, p2 = PROD[c]
    forma, zakupy = 'niezależna firma (domyślnie, niezweryfikowane)', 'nieustalone'
    for k, (f, z, pp) in OVR.items():
        if r['Firma'].startswith(k):
            forma, zakupy = f, z
            if pp: p1, p2 = pp
    if forma.startswith('niezależna') and DOMCOUNT[regdom(r['Strona WWW'])] >= 3:
        forma, zakupy = 'wspólna marka (≥3 wpisy z tą domeną w bazie)', 'nieustalone; możliwe centralne zakupy'
    cand[c].append(dict(sel=sel, row=[c, r['Firma'], r['Miasto'], r['Strona WWW'], f"{r['Stan strony']}; social: {r['Social media (znalezione)'] or 'nie znaleziono na stronie'}",
        'NIEUSTALONE (wymaga zdjęć)', p1, p2, (r['Strona WWW'] + (' ; ' + osm_link(r['Źródło']) if osm_link(r['Źródło']) else '')), r['Sprawdzono'],
        ('bez daty: ' + sig) if sig else 'brak sygnału', fit, evid, 'niezweryfikowany przez człowieka (strona pobrana automatycznie)', 'klient', forma, zakupy]))
HDR = ['Kategoria','Firma','Miasto','Strona WWW','Obecność WWW (potwierdzone)','Auta / odzież / witryna','Prawdopodobna grupa produktu GW (z kategorii, nie z potrzeby firmy)','Produkt GW (dodatkowy)','Dowód (link)','Data obserwacji','Sygnał zapotrzebowania','Dopasowanie do GW (1-5)','Pewność dowodów','Status weryfikacji','Typ','Forma działalności','Zakupy: lokalnie czy centrala']
out = []
for c, L in cand.items():
    L.sort(key=lambda x: (-x['sel'], x['row'][1].lower()))
    out += [x['row'] for x in L[:QUOTA.get(c, 20)]]
order = list(PROD)
out.sort(key=lambda r: (order.index(r[0]), -r[11], r[1].lower()))
json.dump(dict(hdr=HDR, rows=out, eligible={c: len(L) for c, L in cand.items()}), open(f'{OUT}/_cand.json', 'w'), ensure_ascii=False)
print(len(out), collections.Counter(r[0] for r in out))
