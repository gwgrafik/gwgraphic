import sys, json, re, concurrent.futures as cf, requests, urllib3, datetime
INP, OUT = sys.argv[1], sys.argv[2]
rows = json.load(open(INP))
UA = {"User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/130 Safari/537.36", "Accept-Language": "nl-NL,nl;q=0.9,en;q=0.8"}
RX = {
 'hiring': re.compile(r'vacature|werken bij|wij zoeken|we zoeken|kom ons team|solliciteer', re.I),
 'vehicle_words': re.compile(r'bedrijfsauto|bedrijfsbus|bestelbus|wagenpark|bus(sen)?\b|belettering', re.I),
 'workwear_words': re.compile(r'werkkleding|bedrijfskleding|uniform', re.I),
 'new_loc': re.compile(r'nieuwe (locatie|vestiging|winkel|zaak)|verhuisd|grand opening|feestelijke opening|nieuw geopend', re.I),
 'webshop': re.compile(r'winkelwagen|winkelmand|add to cart|in winkelwagen|webshop', re.I),
 'whatsapp': re.compile(r'wa\.me/|api\.whatsapp\.com', re.I),
}
SOC = {'facebook':'facebook.com/','instagram':'instagram.com/','linkedin':'linkedin.com/','tiktok':'tiktok.com/@','youtube':'youtube.com/'}
CMS = [('WordPress','wp-content'),('Wix','wix.com'),('Jimdo','jimdo'),('Squarespace','squarespace'),('Shopify','cdn.shopify'),('Webflow','webflow'),('Joomla','joomla'),('Lightspeed','lightspeed'),('Mijnwebwinkel','mijnwebwinkel'),('Site123','site123'),('Webnode','webnode'),('one.com','one.com')]
NOW = datetime.date.today().year
def norm(u):
    u=u.strip().split()[0]
    if not re.match(r'https?://',u,re.I): u='http://'+u
    return u
def audit(r):
    u = r['website']
    res = dict(ok=False)
    if not u: return r['id'], res
    try:
        x = requests.get(norm(u), headers=UA, timeout=(10,15), allow_redirects=True)
        h = x.text[:600000] if 'html' in x.headers.get('content-type','').lower() or x.text[:200].lower().find('<html')>=0 else ''
        low = h.lower()
        years = [int(y) for y in re.findall(r'(?:©|&copy;|copyright)\D{0,25}?((?:19|20)\d{2})(?:\s*[-–]\s*((?:19|20)\d{2}))?', h, re.I) for y in y if y] if h else []
        years = [y for y in years if 1995<=y<=NOW]
        res = dict(ok=x.status_code<400, status=x.status_code, final=x.url, https=x.url.lower().startswith('https://'),
            viewport=('name="viewport"' in low or "name='viewport'" in low or 'name=viewport' in low),
            title=(re.search(r'<title[^>]*>(.*?)</title>', h, re.I|re.S).group(1).strip()[:90] if re.search(r'<title[^>]*>(.*?)</title>', h, re.I|re.S) else ''),
            year=max(years) if years else None,
            cms=next((n for n,k in CMS if k in low), ''),
            social=[k for k,v in SOC.items() if v in low],
            size_kb=round(len(x.content)/1024),
            **{k: bool(rx.search(h)) for k,rx in RX.items()})
    except Exception as e:
        res = dict(ok=False, error=type(e).__name__)
    return r['id'], res
todo=[r for r in rows if r.get('website')]
out={}
with cf.ThreadPoolExecutor(24) as ex:
    for i,(k,v) in enumerate(ex.map(audit, todo)):
        out[k]=v
        if i%200==0: print(i, flush=True)
json.dump(out, open(OUT,'w'), ensure_ascii=False)
print('done', len(out), sum(1 for v in out.values() if v.get('ok')))
