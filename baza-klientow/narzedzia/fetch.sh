#!/bin/bash
# $1=hash $2=url $3=outdir
meta=$(curl -sS -L --max-time 40 --connect-timeout 20 --max-filesize 3000000 -A "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/130 Safari/537.36" -H "Accept-Language: nl-NL,nl;q=0.9" -o "$3/$1.html" -w '%{http_code}\t%{url_effective}\t%{size_download}' "$2" 2>/dev/null) || meta="ERR\t$2\t0"
printf '%s\t%s\t%s\n' "$1" "$2" "$meta" >> "$3/_meta.tsv"
