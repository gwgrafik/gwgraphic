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
rows = []
for b in base:
    d = res.get(b['Firma'])
    if not d:
        rows.append([b['Kategoria'], b['Firma'], b['Miasto'], b['Strona WWW'], b['Forma działalności'], 'NIE SPRAWDZONO INDYWIDUALNIE'] + [''] * 14); continue
    dw = d.get('dowody', {})
    rows.append([b['Kategoria'], b['Firma'], b['Miasto'], b['Strona WWW'], b['Forma działalności'], d.get('werdykt', ''), d.get('pewnosc', '').replace('srednia', 'średnia'),
        dw.get('auta', ''), dw.get('odziez', ''), dw.get('szyld_witryna', ''), dw.get('druk_banery', ''), dw.get('www', ''),
        d.get('aktualny_sygnal', ''), d.get('usluga_gw', ''), 'tak' if d.get('hipoteza') else 'nie', d.get('typ_decyzji', ''), d.get('co_nieustalone', ''),
        d.get('obejrzane_obrazy', 0), ' ; '.join(d.get('linki', [])), d.get('uzasadnienie', '')])
done = [r for r in rows if r[5] != 'NIE SPRAWDZONO INDYWIDUALNIE']
json.dump(dict(hdr=HV, rows=rows), open(f'{OUT}/_verdicts.json', 'w'), ensure_ascii=False)
print('indywidualnie ocenionych:', len(done), 'z', len(rows), dict(collections.Counter(r[5] for r in rows)), 'z obrazami:', sum(1 for r in done if r[17]))
