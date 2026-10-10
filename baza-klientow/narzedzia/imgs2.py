import re,sys
for p in sys.argv[1:]:
    h=open('pg4/'+p+'.html',errors='ignore').read()
    t=re.sub(r'<(script|style)[\s\S]*?</\1>',' ',h);t=re.sub(r'<[^>]+>',' ',t);t=re.sub(r'\s+',' ',t)
    print('==',p,len(h));print(t[:700])
    u=[x for x in re.findall(r'(?:data-src|src|data-lazy-src)="([^"]+\.(?:jpe?g|png|webp|avif))[^"]*"',h,re.I) if not re.search('logo|icon|svg',x,re.I)]
    s=[];[s.append(x) for x in u if x not in s];[print(' ',x[:200]) for x in s[:14]]
