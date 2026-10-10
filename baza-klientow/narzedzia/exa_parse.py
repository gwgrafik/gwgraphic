import sys, json, re
CITIES = ["eindhoven","veldhoven","best","son en breugel","son & breugel","nuenen","geldrop","mierlo","helmond","waalre","valkenswaard","heeze","leende","oirschot","eersel","bergeijk","riethoven","budel","aalst","dommelen","westerhoven","someren","asten","deurne","aarle-rixtel","beek en donk","sint-oedenrode","boxtel","bladel","stiphout","gemert","laarbeek","cranendonck","heeze-leende","meierijstad"]
CORE = ["eindhoven","veldhoven","best","son en breugel","son & breugel","nuenen","geldrop","mierlo","helmond","waalre","valkenswaard","heeze","oirschot"]
def parse(text, cat):
    out=[]
    for blk in re.split(r'\n---\n', text):
        t=re.search(r'Title:\s*(.+)',blk); u=re.search(r'URL:\s*(\S+)',blk)
        if not t or not u: continue
        hq=re.search(r'- Headquarters:\s*([^\n]+)\(NL\)',blk) or re.search(r'Headquartered in ([^.,\n]+)',blk)
        offs=re.search(r'- Offices:\s*([^\n]+)',blk)
        loc=((hq.group(1) if hq else '')+' | '+(offs.group(1) if offs else '')).lower()
        body=blk.lower()
        hit=[c for c in CITIES if c in loc]
        if not hit:
            # tekst strony mówi o regionie (np. „regio Eindhoven”) – oznacz słabiej
            if not re.search(r'(regio|omgeving|gevestigd in)\s+(eindhoven|veldhoven|helmond|nuenen|geldrop|best)', body): continue
            hit=['(działa w regionie wg opisu)']
        emp=re.search(r'employs ([\d,]+) people',blk); yoy=re.search(r'employs [\d,]+ people \(([+-][\d.]+%) YoY',blk)
        fy=re.search(r'Founded Year:\s*(\d{4})',blk) or re.search(r'founded in (\d{4})',blk)
        hp=re.search(r'- Homepage:\s*(\S+)',blk)
        url=u.group(1)
        web = ('https://'+hp.group(1).rstrip('/')+'/') if hp else ('' if 'linkedin.com' in url else url)
        sig=[]
        if re.search(r'vacature|op zoek naar (een )?nieuwe|wij zoeken|we zoeken|hiring|solliciteer',body): sig.append('rekrutuje (posty/vacatures)')
        if re.search(r'nieuwe locatie|verhuisd|nieuw pand|nieuwe vestiging',body): sig.append('nowa lokalizacja')
        if yoy and yoy.group(1).startswith('+'): sig.append('rośnie zatrudnienie '+yoy.group(1))
        if fy and int(fy.group(1))>=2023: sig.append(f'nowa firma ({fy.group(1)})')
        if not web: sig.append('brak własnej strony WWW w danych firmy')
        city=hq.group(1).strip().strip(',') if hq else ''
        out.append(dict(name=t.group(1).strip(), cat=cat, city=city.title(), website=web, emp=int(emp.group(1).replace(',','')) if emp else None,
            yoy=yoy.group(1) if yoy else '', founded=int(fy.group(1)) if fy else None, signal='; '.join(sig), region_hit=hit[0], core=any(c in loc for c in CORE)))
    return out
if __name__=='__main__':
    path, cat = sys.argv[1], sys.argv[2]
    d=json.load(open(path)); text='\n'.join(x.get('text','') for x in d) if isinstance(d,list) else d
    for r in parse(text, cat): print(json.dumps(r, ensure_ascii=False))
