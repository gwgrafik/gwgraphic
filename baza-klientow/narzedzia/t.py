import re,sys,html
from urllib.parse import urljoin
f=sys.argv[1]; base=sys.argv[2]; n=int(sys.argv[3]) if len(sys.argv)>3 else 900
h=open(f,errors='ignore').read()
t=re.sub(r'(?is)<(script|style|noscript|svg|nav|header|footer).*?</\1>',' ',h)
txt=html.unescape(re.sub(r'\s+',' ',re.sub(r'<[^>]+>',' ',t)))
print(txt[:n])
im=[]
for m in re.finditer(r'(?:data-lazy-src|data-src|src)=["\']([^"\']+\.(?:jpe?g|png|webp|avif)[^"\']*)',h,re.I):
    u=urljoin(base,html.unescape(m.group(1)))
    if u not in im and not re.search(r'logo|icon|flag|dummy|\.svg',u,re.I): im.append(u)
print('IMGS',len(im)); print('\n'.join(x[-110:] for x in im[:22]))
