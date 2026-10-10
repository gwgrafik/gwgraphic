import sys, json, re, os, hashlib, csv, datetime, collections
S = sys.argv[1]; OUT = sys.argv[2]
NOW = 2026
osm = json.load(open(f'{S}/osm_firms.json'))
trades = [json.loads(l) for l in open(f'{S}/trades.jsonl')]
meta = {}
for line in open(f'{S}/pages/_meta.tsv', encoding='utf-8', errors='replace'):
    p = line.rstrip('\n').split('\t')
    if len(p) >= 5: meta[p[0]] = dict(url=p[1], code=p[2], final=p[3], size=p[4])
    elif len(p) >= 3 and p[2].startswith('ERR'): meta[p[0]] = dict(url=p[1], code='ERR', final='', size='0')
def norm(u):
    u = (u or '').strip().split()[0] if (u or '').strip() else ''
    if not u: return ''
    if not re.match(r'https?://', u, re.I): u = 'http://' + u
    return u
def domain(u):
    m = re.match(r'https?://(?:www\.)?([^/:]+)', u or '', re.I); return m.group(1).lower() if m else ''
RX = {
 'rekrutuje': re.compile(r'vacature|werken bij|wij zoeken (een|nieuwe)|we zoeken (een|nieuwe)|kom ons team versterken|solliciteer', re.I),
 'nowa lokalizacja': re.compile(r'nieuwe (locatie|vestiging|winkel|zaak)|zijn verhuisd|grand opening|feestelijke opening|nieuw geopend', re.I),
 'sklep online': re.compile(r'in (de |je )?winkelwagen|toevoegen aan winkelwagen|add to cart|woocommerce-cart|cdn\.shopify', re.I),
}
SOC = {'Facebook':'facebook.com/','Instagram':'instagram.com/','LinkedIn':'linkedin.com/','TikTok':'tiktok.com/@','YouTube':'youtube.com/'}
CMS = [('WordPress','wp-content'),('Wix','wixstatic'),('Jimdo','jimdo'),('Squarespace','squarespace'),('Shopify','cdn.shopify'),('Webflow','webflow'),('Joomla','/media/jui/'),('Lightspeed','lightspeed'),('Site123','site123'),('Webnode','webnode'),('Zyro/Hostinger','zyrosite')]
VEH = {"Dekarze","Budowlanka i remonty","Malarze","Instalatorzy i elektrycy","Ogrody i zieleń","Sprzątanie","Transport i logistyka","Motoryzacja","Szkoły jazdy","Inne rzemiosło"}
STREET = {"Gastronomia","Fryzjerzy i beauty","Sklepy lokalne","Zdrowie i fizjoterapia","Fitness i sport"}
def page(u):
    h = hashlib.md5(u.encode()).hexdigest()
    m = meta.get(h)
    html = ''
    f = f'{S}/pages/{h}.html'
    if m and os.path.exists(f):
        try: html = open(f, encoding='utf-8', errors='replace').read(800000)
        except Exception: html = ''
    return m, html
rows = []
seen_dom = {}
def add(base, src):
    global rows
    u = norm(base.get('website'))
    d = domain(u)
    if d and d in seen_dom:   # duplikat (np. ta sama firma w OSM i w wyszukiwarce)
        r = rows[seen_dom[d]]
        if base.get('signal'): r['Sygnały zakupu'] = '; '.join(x for x in [r['Sygnały zakupu'], base['signal']] if x)
        if base.get('emp'): r['Pracownicy (LinkedIn)'] = base['emp']
        if base.get('yoy'): r['Zmiana zatrudnienia r/r'] = base['yoy']
        r['Źródło'] += ' + wyszukiwarka'
        return
    m, html = page(u) if u else (None, '')
    low = html.lower()
    st = 'BRAK STRONY' if src.startswith('wyszukiwarka') else 'NIE ZNALEZIONO STRONY W DANYCH'
    https = viewport = None; year = None; cms = ''; social = []
    if u:
        code = (m or {}).get('code', 'ERR')
        if not m: st = 'NIE SPRAWDZONO'
        elif code in ('401','403','429','503'): st = 'NIEUSTALONE (blokada robotów)'
        elif code == 'ERR': st = 'NIEUSTALONE (brak połączenia z mojego środowiska)'
        elif not code.isdigit() or int(code) >= 400 or not html or (len(html) < 3000 and re.search(r'niet gevonden|not found|404', html[:3000], re.I)): st = 'BŁĄD STRONY (do potwierdzenia)'
        else:
            final = m['final']; https = final.lower().startswith('https://')
            viewport = ('name="viewport"' in low or "name='viewport'" in low or 'name=viewport' in low)
            ys = [int(y) for y in re.findall(r'(?:©|&copy;|copyright)\D{0,30}?((?:19|20)\d{2})', html, re.I)]
            ys += [int(y) for y in re.findall(r'(?:©|&copy;|copyright)\D{0,30}?(?:19|20)\d{2}\s*[-–]\s*((?:19|20)\d{2})', html, re.I)]
            ys = [y for y in ys if 1995 <= y <= NOW]
            year = max(ys) if ys else None
            cms = next((n for n, k in CMS if k in low), '')
            if not https or not viewport or (year and year <= 2021): st = 'PRZESTARZAŁA'
            else: st = 'OK'
    if html: social = [k for k, v in SOC.items() if v in low]
    if base.get('facebook') and 'Facebook' not in social: social.append('Facebook')
    if base.get('instagram') and 'Instagram' not in social: social.append('Instagram')
    sig = [k for k, rx in RX.items() if html and rx.search(html)]
    if base.get('signal'): sig.append(base['signal'])
    cat = base['cat']; chain = bool(base.get('brand'))
    gaps, opp = [], []
    if st == 'BRAK STRONY': gaps.append('brak strony WWW (dane firmy)'); opp.append('strona WWW + identyfikacja')
    elif st == 'NIE ZNALEZIONO STRONY W DANYCH': gaps.append('strony nie ma w danych mapy (do sprawdzenia)'); opp.append('jeśli faktycznie brak: strona WWW')
    elif st == 'BŁĄD STRONY (do potwierdzenia)': gaps.append('strona zwróciła błąd (do potwierdzenia)'); opp.append('nowa/naprawiona strona')
    elif st == 'PRZESTARZAŁA':
        why = [w for w, c in [('brak HTTPS', https is False), ('nie na telefon', viewport is False), (f'stopka {year}', bool(year and year <= 2021))] if c]
        gaps.append('przestarzała strona (' + ', '.join(why) + ')'); opp.append('nowa strona (mobile, HTTPS)')
    if not social and st in ('OK', 'PRZESTARZAŁA'): gaps.append('nie znaleziono social media na stronie'); opp.append('materiały do social media')
    if cat in VEH: opp.append('oklejenie aut, odzież robocza, tablice (do sprawdzenia na zdjęciach)')
    if cat in STREET: opp.append('witryna/szyld, druk (menu, ulotki), odzież dla personelu (do sprawdzenia na miejscu)')
    if any('rekrut' in s or 'rośnie' in s or 'podwoiło' in s or 'potroiło' in s for s in sig): opp.append('odzież/oklejenie dla nowych ludzi i aut')
    if any('nowa' in s for s in sig): opp.append('oznakowanie nowej lokalizacji / start marki')
    # punktacja
    score = 0
    score += 3 if cat in VEH else (2 if cat in STREET else 1)
    score += {'BRAK STRONY': 2, 'NIE ZNALEZIONO STRONY W DANYCH': 1, 'BŁĄD STRONY (do potwierdzenia)': 2, 'PRZESTARZAŁA': 2, 'OK': 0, 'NIE SPRAWDZONO': 0, 'NIEUSTALONE (blokada robotów)': 0, 'NIEUSTALONE (brak połączenia z mojego środowiska)': 0}[st]
    score += 1 if (not social and st in ('OK', 'PRZESTARZAŁA')) else 0
    score += min(3, len(sig))
    if chain: score -= 4
    prio = 'A' if score >= 6 else ('B' if score >= 4 else 'C')
    overall = 'Duże braki online' if st in ('BRAK STRONY', 'BŁĄD STRONY (do potwierdzenia)') else ('Do sprawdzenia' if st.startswith('NIE ZNALEZIONO') else ('Częściowe braki' if gaps else ('Podstawy online OK' if st == 'OK' else 'Nieustalone')))
    rows.append({
        'Kategoria': cat, 'Firma': base['name'], 'Miasto': (base.get('city') or '').strip(),
        'Adres': ' '.join(x for x in [base.get('street', ''), base.get('postcode', '')] if x).strip(),
        'Strona WWW': u, 'Stan strony': st, 'HTTPS': '' if https is None else ('tak' if https else 'nie'),
        'Na telefon (viewport)': '' if viewport is None else ('tak' if viewport else 'nie'),
        'Rok w stopce': year or '', 'System strony': cms, 'Social media (znalezione)': ', '.join(social),
        'Oklejenie aut / odzież / witryna': 'NIEUSTALONE (wymaga zdjęć lub wizji lokalnej)',
        'Sygnały zakupu': '; '.join(sig), 'Pracownicy (LinkedIn)': base.get('emp') or '', 'Zmiana zatrudnienia r/r': base.get('yoy') or '',
        'Rok założenia': base.get('founded') or '', 'Sieć / franczyza': 'tak' if chain else '',
        'Ocena ogólna': overall, 'Luki': '; '.join(gaps), 'Szansa dla GW': '; '.join(dict.fromkeys(opp)), 'Punkty': score, 'Priorytet': prio,
        'Źródło': src, 'Sprawdzono': datetime.date.today().isoformat(), 'Status kontaktu': 'nie kontaktowano'})
    if d: seen_dom[d] = len(rows) - 1
for t in trades: add(t, 'wyszukiwarka firm (dane LinkedIn/strona)')
for o in osm: add(o, f"OpenStreetMap ({o['sub']}, {o['id']})")
os.makedirs(OUT, exist_ok=True)
json.dump(rows, open(f'{OUT}/_rows.json', 'w'), ensure_ascii=False)
c = collections.Counter((r['Kategoria'], r['Stan strony']) for r in rows)
cats = collections.Counter(r['Kategoria'] for r in rows)
for k, n in cats.most_common():
    print(f"{k:28s} {n:5d} | " + ' '.join(f"{s}:{c[(k,s)]}" for s in ['OK','PRZESTARZAŁA','BŁĄD STRONY (do potwierdzenia)','BRAK STRONY','NIE ZNALEZIONO STRONY W DANYCH','NIEUSTALONE (blokada robotów)','NIEUSTALONE (brak połączenia z mojego środowiska)','NIE SPRAWDZONO']) + f" | A:{sum(1 for r in rows if r['Kategoria']==k and r['Priorytet']=='A')}")
print(len(rows))
