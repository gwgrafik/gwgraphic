import sys, json, glob, os
OUT = sys.argv[1]; R2 = f'{OUT}/../round2'
sheets = {}
# sygnały datowane
rows = []
for k in (1, 2, 3):
    ins = {r['id']: r for r in json.load(open(f'{R2}/in/signals_{k}.json'))}
    p = f'{R2}/out/signals_{k}.jsonl'
    if not os.path.exists(p): continue
    for l in open(p, encoding='utf-8'):
        l = l.strip()
        if not l: continue
        d = json.loads(l); i = ins.get(d['id'], {})
        base = [d.get('firma') or i.get('firma'), i.get('miasto', ''), i.get('dotychczasowy_werdykt', ''), i.get('strona', '')]
        sg = d.get('sygnaly') or []
        if not sg: rows.append(base + ['brak sygnału z datą i linkiem', '', '', '', '', d.get('uwagi', '')])
        for s in sg: rows.append(base + [s.get('typ', ''), s.get('opis', ''), s.get('data', ''), s.get('link', ''), s.get('pewnosc', ''), d.get('uwagi', '')])
rows.sort(key=lambda r: (r[4] == 'brak sygnału z datą i linkiem', r[0] or ''))
sheets['SYGNAŁY DATOWANE'] = dict(hdr=['Firma','Miasto','Werdykt reklamy','Strona WWW','Typ sygnału','Opis','Data','Link','Pewność','Uwagi'], rows=rows)
def table(fn, title, pref=None):
    p = f'{R2}/out/{fn}.jsonl'
    if not os.path.exists(p): return
    L = [json.loads(l) for l in open(p, encoding='utf-8') if l.strip()]
    keys = []
    for d in L:
        for k in d:
            if k not in keys: keys.append(k)
    if pref: keys = [k for k in pref if k in keys] + [k for k in keys if k not in pref]
    sheets[title] = dict(hdr=[k.replace('_', ' ') for k in keys], rows=[[ (json.dumps(d.get(k), ensure_ascii=False) if isinstance(d.get(k), (list, dict)) else d.get(k, '')) for k in keys] for d in L])
table('konkurenci', 'KONKURENCI', ['nazwa','miasto','strona'])
table('partnerzy', 'PARTNERZY', ['nazwa','typ','miasto','strona'])
table('ceny', 'CENY RYNKOWE', ['produkt','firma','miasto','region','kwota','jednostka'])
rows_all = json.load(open(f'{OUT}/_rows.json'))
nw = [r for r in rows_all if 'runda 2' in (r.get('Źródło') or '')]
nw.sort(key=lambda r: ({'A':0,'B':1,'C':2}[r['Priorytet']], r['Kategoria'], r['Firma']))
sheets['NOWE FIRMY (runda 2)'] = dict(hdr=['Kategoria','Firma','Miasto','Strona WWW','Stan strony','Social media (znalezione)','Sygnały zakupu','Pracownicy (LinkedIn)','Rok założenia','Priorytet','Punkty','Luki','Źródło i dowód','Status'],
    rows=[[r['Kategoria'],r['Firma'],r['Miasto'],r['Strona WWW'],r['Stan strony'],r['Social media (znalezione)'],r['Sygnały zakupu'],r['Pracownicy (LinkedIn)'],r['Rok założenia'],r['Priorytet'],r['Punkty'],r['Luki'],r['Źródło'],'bez indywidualnego werdyktu reklamy; niezweryfikowane przez człowieka'] for r in nw])
json.dump(sheets, open(f'{OUT}/_round2.json', 'w'), ensure_ascii=False)
print({k: len(v['rows']) for k, v in sheets.items()})
