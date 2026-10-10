import json,re,sys,html
from urllib.parse import urljoin
d={f['id']:f for f in json.load(open('verdicts/in/chunk_09.json'))}
i=int(sys.argv[1]); pat=re.compile(sys.argv[2],re.I)
f=d[i]; h=open(f['strona_html'],errors='ignore').read()
seen=[]
for m in re.finditer(r'(?:data-lazy-src|data-src|src|href)=["\']([^"\']+\.(?:jpe?g|png|webp|avif)[^"\']*)',h,re.I):
    u=urljoin(f['strona'],html.unescape(m.group(1)))
    if pat.search(u) and u not in seen: seen.append(u)
print('\n'.join(seen[:int(sys.argv[3]) if len(sys.argv)>3 else 6]))
