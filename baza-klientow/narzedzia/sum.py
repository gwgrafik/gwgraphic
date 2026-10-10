import json,re,sys,html
d=json.load(open('verdicts/in/chunk_09.json'))
ids=[int(x) for x in sys.argv[1:]]
kw=re.compile(r'bus|bestel|wagen|auto|team|pand|winkel|gevel|werk|medewerk|over|about|project|foto|portfolio|contact|vacature|kleding|shirt|truck|vloot|lease|les|salon|zaak|locatie|brouwer|club|shop',re.I)
for f in d:
    if ids and f['id'] not in ids: continue
    h=open(f['strona_html'],errors='ignore').read()
    print('=====',f['id'],f['firma'],f['strona'],len(h))
    t=re.sub(r'(?is)<(script|style|noscript|svg).*?</\1>',' ',h)
    txt=html.unescape(re.sub(r'\s+',' ',re.sub(r'<[^>]+>',' ',t)))
    print('TEXT:',txt[:700])
    for m in re.finditer(r'(?i)[^.]{0,80}(wagenpark|bedrijfsbus|bedrijfswagen|bussen|werkkleding|vacature|werken bij|nieuwe locatie|verhuis|nieuw pand|vloot|team)[^.]{0,100}',txt):
        print('  KW:',m.group(0)[:200]); 
        break
    L=[l for l in sorted(set(re.findall(r'href=["\']([^"\'#]+)["\']',t))) if kw.search(l) and not re.search(r'\.(css|js|png|jpg|webp|svg|ico)|add-to-cart|shop/|wp-json|feed|google|facebook|instagram',l)]
    print('LINKS:',L[:25])
    out=[]
    for i in re.findall(r'<img[^>]+>',t):
        s=re.findall(r'(?:data-lazy-src|data-src|src)=["\']([^"\']+)',i); a=re.findall(r'alt=["\']([^"\']*)',i)
        s=[x for x in s if not x.startswith('data:')]
        if s: out.append((s[0][-70:],(a[0][:40] if a else '')))
    print('IMGS(%d):'%len(out),out[:14])
