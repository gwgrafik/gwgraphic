import sys, json, glob, collections
OUT = sys.argv[1]
cand = json.load(open(f'{OUT}/_cand.json')); H = cand['hdr']
base = [dict(zip(H, r)) for r in cand['rows']]
ins = {}
for f in glob.glob(f'{OUT}/../verdicts/in/chunk_*.json'):
    for r in json.load(open(f)): ins[r['id']] = r
byname = {r['firma']: r for r in ins.values()}
res = {}
for f in sorted(glob.glob(f'{OUT}/../verdicts/out/chunk_*.jsonl')):
    for line in open(f, encoding='utf-8'):
        line = line.strip()
        if not line: continue
        try: d = json.loads(line)
        except Exception: continue
        res[ins[d['id']]['firma'] if d.get('id') in ins else d.get('firma')] = d
HV = ['Kategoria','Firma','Miasto','Strona WWW','Forma działalności','Werdykt','Pewność werdyktu','Auta (dowód)','Odzież (dowód)','Szyld / witryna (dowód)','Druk / banery (dowód)','WWW (co widać)',
      'Aktualny sygnał (z datą i linkiem)','Jedna usługa GW','Hipoteza (bez dowodu potrzeby)','Typ decyzji','Co nieustalone','Obejrzane obrazy','Linki','Uzasadnienie']

# --- Poprawki danych wykryte przez przegląd reklamy (runda 2) ---
BAD = {  # prefiks nazwy: powód -> werdykt BŁĄD DANYCH
 'PVC Atelier': 'Strona to pusty szablon z logo innej firmy z Veghel; nie jest dowodem dla tej firmy.',
 'Queen Nails': 'queennails.nl pokazuje salon w Zwolle; salonu w Eindhoven nie znaleziono.',
 "'t Krut": 'Domena serwuje dziś stronę o kasynach (przejęta); lokalu nie da się ocenić.',
 'Ad Willems': 'Strona wygląda na szablon, który nie jest stroną tej firmy; wyszukiwanie jej nie znalazło.',
 'Verhoef Schilders': 'Domena wystawiona na sprzedaż; brak aktywnej strony firmy.',
}
NOTE = {  # prefiks nazwy: uwaga jakości (werdykt bez zmian)
 'Jan Tromp': 'Firma przejęta w całości przez Jan de Rijk Logistics (ok. 2025-12).',
 'Bakermans': 'Zdjęcie podnośnika w rekordzie to materiał producenta Ruthmann, nie dowód reklamy firmy.',
 'A. van Diessen': 'Zdjęcie z budowy w rekordzie pokazuje auta innej firmy; nie jest dowodem.',
 'Fysionova Best': 'To w rzeczywistości firma Bruyst; nazwa w bazie do poprawy.',
 'KNAP': 'Brak miasta w danych; wygląda na sieć salonów, lista lokalizacji niesprawdzona.',
 'Restaria Brouwhuis': 'Domena podaje nazwę Brouwhorst (centrum handlowe w Helmond); trzeba potwierdzić, że to ta sama firma.',
 'Stadskamer': 'Zdjęcia fasady z 2017; stan obecny nieznany.',
}
rows = []
for b in base:
    d = res.get(b['Firma'])
    if not d:
        rows.append([b['Kategoria'], b['Firma'], b['Miasto'], b['Strona WWW'], b['Forma działalności'], 'NIE SPRAWDZONO INDYWIDUALNIE'] + [''] * 14); continue
    dw = d.get('dowody', {})
    bad = next((v for k, v in BAD.items() if b['Firma'].startswith(k)), None)
    note = next((v for k, v in NOTE.items() if b['Firma'].startswith(k)), None)
    if bad:
        rows.append([b['Kategoria'], b['Firma'], b['Miasto'], b['Strona WWW'], b['Forma działalności'], 'BŁĄD DANYCH', 'wysoka', '', '', '', '', '', '', '', 'nie', '', bad, d.get('obejrzane_obrazy', 0), ' ; '.join(d.get('linki', [])), 'Wykluczone z oceny reklamy: ' + bad]); continue
    if note: d = dict(d, uzasadnienie=(d.get('uzasadnienie', '') + ' UWAGA JAKOŚCI: ' + note).strip())
    rows.append([b['Kategoria'], b['Firma'], b['Miasto'], b['Strona WWW'], b['Forma działalności'], d.get('werdykt', ''), d.get('pewnosc', '').replace('srednia', 'średnia'),
        dw.get('auta', ''), dw.get('odziez', ''), dw.get('szyld_witryna', ''), dw.get('druk_banery', ''), dw.get('www', ''),
        d.get('aktualny_sygnal', ''), d.get('usluga_gw', ''), 'tak' if d.get('hipoteza') else 'nie', d.get('typ_decyzji', ''), d.get('co_nieustalone', ''),
        d.get('obejrzane_obrazy', 0), ' ; '.join(d.get('linki', [])), d.get('uzasadnienie', '')])
done = [r for r in rows if r[5] != 'NIE SPRAWDZONO INDYWIDUALNIE']
json.dump(dict(hdr=HV, rows=rows), open(f'{OUT}/_verdicts.json', 'w'), ensure_ascii=False)
print('indywidualnie ocenionych:', len(done), 'z', len(rows), dict(collections.Counter(r[5] for r in rows)), 'z obrazami:', sum(1 for r in done if r[17]))
