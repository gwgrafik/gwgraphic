import sys, json, osmium
from osmium.geom import WKBFactory
PBF, OUT = sys.argv[1], sys.argv[2]
S, N, W, E = 51.30, 51.58, 5.20, 5.78   # rejon Eindhoven + Helmond/Valkenswaard/Best/Oirschot
CATS = [
 ("Budowlanka i remonty", "craft", {"builder","carpenter","tiler","plasterer","stonemason","floorer","glaziery","window_construction","scaffolder","joiner","bricklayer","concrete","insulation","kitchen_installer","stairs","plasterer"}),
 ("Dekarze", "craft", {"roofer"}),
 ("Malarze", "craft", {"painter"}),
 ("Instalatorzy i elektrycy", "craft", {"plumber","hvac","electrician","heating_engineer","photovoltaic","solar","electronics_repair","locksmith"}),
 ("Ogrody i zieleń", "craft", {"gardener","landscaper","tree_surgeon"}),
 ("Sprzątanie", "craft", {"cleaning","window_cleaner"}),
 ("Inne rzemiosło", "craft", None),
 ("Motoryzacja", "shop", {"car_repair","car","tyres","car_parts","motorcycle","truck","caravan","car_painter"}),
 ("Motoryzacja", "amenity", {"car_wash"}),
 ("Szkoły jazdy", "amenity", {"driving_school"}),
 ("Fryzjerzy i beauty", "shop", {"hairdresser","beauty","nails","tattoo","massage","cosmetics"}),
 ("Zdrowie i fizjoterapia", "healthcare", {"physiotherapist","podiatrist","psychotherapist","dentist","optometrist","alternative"}),
 ("Fitness i sport", "leisure", {"fitness_centre","sports_centre"}),
 ("Gastronomia", "amenity", {"restaurant","cafe","fast_food","bar","pub","ice_cream"}),
 ("Sklepy lokalne", "shop", {"bakery","butcher","florist","deli","greengrocer","cheese","confectionery","bicycle","pet","garden_centre","furniture","interior_decoration","kitchen","bathroom_furnishing","flooring","paint","hardware","doityourself","trade","electrical","tiles","curtain","bed"}),
 ("Transport i logistyka", "office", {"moving_company","logistics","courier","transport"}),
 ("Biura i usługi B2B", "office", {"company","accountant","tax_advisor","consulting","estate_agent","insurance","architect","it","financial","lawyer","notary","employment_agency","advertising_agency","graphic_design"}),
]
class H(osmium.SimpleHandler):
    def __init__(s): super().__init__(); s.rows=[]; s.seen=set()
    def handle(s, o, typ, lat, lon):
        t = {k:v for k,v in o.tags}
        if 'name' not in t: return
        if not (S<=lat<=N and W<=lon<=E): return
        for cat, key, vals in CATS:
            v = t.get(key)
            if v and (vals is None or v in vals):
                if cat=="Inne rzemiosło" and any(v in (c[2] or set()) for c in CATS if c[1]=="craft" and c[2]): continue
                k=(t['name'].lower(), t.get('addr:postcode',''), cat)
                if k in s.seen: return
                s.seen.add(k)
                s.rows.append(dict(id=f"{typ}/{o.id}", cat=cat, sub=f"{key}={v}", name=t['name'],
                    city=t.get('addr:city',''), street=(t.get('addr:street','')+' '+t.get('addr:housenumber','')).strip(),
                    postcode=t.get('addr:postcode',''), lat=round(lat,5), lon=round(lon,5),
                    website=t.get('website') or t.get('contact:website') or t.get('url') or '',
                    has_phone=bool(t.get('phone') or t.get('contact:phone')), has_email=bool(t.get('email') or t.get('contact:email')),
                    facebook=t.get('contact:facebook') or t.get('facebook') or '', instagram=t.get('contact:instagram') or t.get('instagram') or '',
                    brand=t.get('brand') or t.get('brand:wikidata') or ''))
                return
    def node(s, n):
        if n.location.valid(): s.handle(n,'node',n.location.lat,n.location.lon)
    def area(s, a):
        try:
            lats=[];lons=[]
            for ring in a.outer_rings():
                for nd in ring: lats.append(nd.lat); lons.append(nd.lon)
            if lats: s.handle(a, 'way' if a.from_way() else 'relation', sum(lats)/len(lats), sum(lons)/len(lons))
        except Exception: pass
h=H(); h.apply_file(PBF, locations=True)
for r in h.rows:
    if r['id'].startswith('way/'): r['id']='way/'+str(int(r['id'].split('/')[1])//2) if False else r['id']
json.dump(h.rows, open(OUT,'w'), ensure_ascii=False)
from collections import Counter
c=Counter(r['cat'] for r in h.rows); print(len(h.rows)); [print(f"{k:28s} {v:5d}  z WWW: {sum(1 for r in h.rows if r['cat']==k and r['website'])}  sieci: {sum(1 for r in h.rows if r['cat']==k and r['brand'])}") for k,v in c.most_common()]
