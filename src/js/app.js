/* GW Graphic Design — site script (no dependencies) */
(() => {
'use strict';
const $ = (s, c = document) => c.querySelector(s);
const $$ = (s, c = document) => [...c.querySelectorAll(s)];
const html = document.documentElement;
const RM = matchMedia('(prefers-reduced-motion: reduce)').matches;
const ROOT = html.dataset.root || '';
const L = JSON.parse(($('#i18n') || {}).textContent || '{}');

const esc = s => String(s).replace(/[&<>"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));

/* ---------- responsive <picture> markup for a portfolio image ---------- */
const pic = (slug, alt, sizes, eager) => {
  alt = esc(alt);
  const b = `${ROOT}assets/img/work/${slug}-`;
  const set = ext => `${b}480.${ext} 480w, ${b}800.${ext} 800w, ${b}1000.${ext} 1000w`;
  return `<picture><source type="image/avif" srcset="${set('avif')}" sizes="${sizes}"><img src="${b}800.webp" srcset="${set('webp')}" sizes="${sizes}" width="1000" height="1000" alt="${alt}" decoding="async"${eager ? '' : ' loading="lazy"'}></picture>`;
};
// Deferred images: an element with data-slug gets its <picture> only when it is about to be shown
const hydrate = el => { if (el && el.dataset.slug && !$('picture', el)) el.insertAdjacentHTML('afterbegin', pic(el.dataset.slug, el.dataset.alt, el.dataset.sizes, true)); };

/* ---------- header ---------- */
const header = $('.site-header');
if (header) {
  const onScroll = () => header.classList.toggle('is-scrolled', scrollY > 24);
  addEventListener('scroll', onScroll, { passive: true }); onScroll();
}

/* ---------- mobile menu ---------- */
const burger = $('.burger');
if (burger) {
  const setMenu = open => { document.body.classList.toggle('menu-open', open); burger.setAttribute('aria-expanded', String(open)); burger.setAttribute('aria-label', open ? L.close : L.menu); };
  burger.addEventListener('click', () => setMenu(!document.body.classList.contains('menu-open')));
  $$('.mmenu a').forEach(a => a.addEventListener('click', () => setMenu(false)));
  addEventListener('keydown', e => { if (e.key === 'Escape' && document.body.classList.contains('menu-open')) { setMenu(false); burger.focus(); } });
}

/* ---------- reveal ---------- */
const revealAll = () => $$('.rv-el').forEach(e => e.classList.add('in'));
if (RM || !('IntersectionObserver' in window)) revealAll();
else {
  const io = new IntersectionObserver(es => es.forEach(e => { if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); } }), { rootMargin: '0px 0px -8% 0px', threshold: .08 });
  $$('.rv-el').forEach(e => io.observe(e));
}

/* ---------- HERO: V07 rotator + stage prints ---------- */
const hero = (() => {
  const rot = $('#rot'), stage = $('#stage');
  if (!rot || !stage) return { start() {} };
  const words = $$('b', rot);
  const prints = $$('.print', stage), chip = $('.chip', stage);
  let i = 0, timer = null, visible = true;
  function show(n) {
    const p = prints[n], prev = words[i];
    hydrate(p); hydrate(prints[(n + 1) % prints.length]); // keep the next one ready
    prints.forEach((x, k) => x.classList.toggle('on', k === n));
    chip.textContent = p.dataset.client;
    stage.href = p.dataset.href;
    // every word sits in the same grid cell, so the line never changes size
    prev.classList.remove('on'); prev.classList.add('out'); prev.setAttribute('aria-hidden', 'true');
    words[n].classList.remove('out'); words[n].classList.add('on'); words[n].removeAttribute('aria-hidden');
    setTimeout(() => prev.classList.remove('out'), 700);
    i = n;
  }
  const tick = () => { if (!visible || document.hidden) return; show((i + 1) % prints.length); };
  new IntersectionObserver(es => { visible = es[0].isIntersecting; }).observe(stage);
  return { start() { if (RM || timer) return; hydrate(prints[1]); timer = setInterval(tick, 3200); } };
})();

/* ---------- GATE: V07 intro (logo + rings). Stays until the visitor clicks the logo or skips. ---------- */
const gate = $('#gate');
function entered() { document.body.classList.add('entered'); hero.start(); }
if (gate && html.classList.contains('gate-on')) {
  document.body.classList.add('is-locked');
  const calm = html.classList.contains('gate-rm');
  requestAnimationFrame(() => requestAnimationFrame(() => gate.classList.add('ready')));
  let opened = false;
  const zoom = $('#gateZoom'), shade = $('#gateShade');
  const open = fast => {
    if (opened) return; opened = true;
    removeEventListener('keydown', onKey);
    const finish = () => { document.body.classList.remove('is-locked'); html.classList.remove('gate-on'); gate.remove(); };
    if (!gate.animate) { finish(); entered(); return; }
    if (fast === true || calm) { // skip, or reduced motion: soft fade instead of the zoom
      gate.animate([{ opacity: 1 }, { opacity: 0 }], { duration: calm ? 700 : 450, easing: 'ease-out', fill: 'forwards' });
      entered(); document.body.classList.remove('is-locked'); setTimeout(finish, calm ? 720 : 470); return;
    }
    const dur = 1800;
    zoom.animate([{ transform: 'scale(1) rotate(0deg)' }, { transform: 'scale(16) rotate(20deg)' }], { duration: dur, easing: 'cubic-bezier(.7,0,.25,1)', fill: 'forwards' });
    shade.animate([{ opacity: 0 }, { opacity: .35, offset: .35 }, { opacity: 1 }], { duration: dur - 150, easing: 'ease-in', fill: 'forwards' });
    $$('.gate-hint,.gate-lang,.gate-opts', gate).forEach(el => el.animate([{ opacity: 1 }, { opacity: 0 }], { duration: 300, fill: 'forwards' }));
    setTimeout(() => { gate.animate([{ opacity: 1 }, { opacity: 0 }], { duration: 700, easing: 'ease-out', fill: 'forwards' }); entered(); document.body.classList.remove('is-locked'); }, dur - 250);
    setTimeout(finish, dur + 500);
  };
  // the intro waits: the logo (or Enter) zooms into the site, Escape fades out
  $('#gateBtn').addEventListener('click', () => open());
  $('#gateNever').addEventListener('click', () => { try { localStorage.setItem('gwIntroDisabled', 'true'); } catch (e) {} open(true); });
  const onKey = e => { if (e.key === 'Escape') open(true); else if (e.key === 'Enter') open(); };
  addEventListener('keydown', onKey);
} else {
  if (gate) gate.remove();
  entered();
}

/* ---------- service sliders ---------- */
$$('[data-slider]').forEach(sl => {
  const slides = $$('.slide', sl), cnt = $('[data-count]', sl), n = slides.length;
  let i = 0;
  const go = k => {
    i = (k + n) % n;
    hydrate(slides[i]); hydrate(slides[(i + 1) % n]);
    slides.forEach((s, j) => { s.classList.toggle('on', j === i); s.toggleAttribute('inert', j !== i); });
    cnt.textContent = `${String(i + 1).padStart(2, '0')} / ${String(n).padStart(2, '0')}`;
  };
  $('[data-prev]', sl).addEventListener('click', () => go(i - 1));
  $('[data-next]', sl).addEventListener('click', () => go(i + 1));
  sl.addEventListener('keydown', e => { if (e.key === 'ArrowRight') go(i + 1); if (e.key === 'ArrowLeft') go(i - 1); });
  let x0 = null;
  sl.addEventListener('pointerdown', e => { if (e.pointerType !== 'mouse') x0 = e.clientX; }, { passive: true });
  sl.addEventListener('pointerup', e => { if (x0 === null) return; const d = e.clientX - x0; x0 = null; if (Math.abs(d) > 45) go(i + (d < 0 ? 1 : -1)); }, { passive: true });
  slides.forEach((s, j) => { if (j) s.setAttribute('inert', ''); });
});

/* ---------- quote form: preselect services ---------- */
const form = $('#quoteForm');
const preselect = list => { if (!form) return; list.forEach(k => { const c = form.querySelector(`input[name="service[]"][data-i="${k}"]`); if (c) c.checked = true; }); };
$$('[data-pick]').forEach(a => a.addEventListener('click', () => preselect(a.dataset.pick.split(',').map(Number))));

/* ---------- case study dialog ---------- */
const dlg = $('#case');
if (dlg) {
  const data = JSON.parse($('#case-data').textContent);
  const body = $('#caseBody');
  let cur = 0, opener = null;
  function render(k) {
    cur = k; const p = data[k], nx = data[(k + 1) % data.length];
    body.innerHTML = `<span class="eyebrow">${esc(L.csEyebrow)} <b>${String(k + 1).padStart(2, '0')} / ${String(data.length).padStart(2, '0')}</b></span>
      <h2 id="caseTitle">${esc(p.name)}</h2><p class="case-desc">${esc(p.desc)}</p>
      <div class="case-route"><span>${esc(L.csRoute)}</span><ol>${p.route.map(r => `<li>${esc(r)}</li>`).join('')}</ol></div>
      <div class="case-hero">${pic(p.cover.slug, p.cover.alt, '(max-width: 900px) 92vw, 760px', true)}</div>
      ${p.secs.map(s => `<section class="case-sec"><h3>${esc(s.title)}</h3><div class="case-imgs">${s.imgs.map(im => `<figure>${pic(im.slug, im.alt, '(max-width: 700px) 92vw, 380px')}</figure>`).join('')}</div></section>`).join('')}
      <div class="case-end"><p>${esc(p.result)}</p><div class="case-actions"><a class="btn" href="#offerte" data-case-cta>${esc(L.csCta)}</a><button type="button" class="btn btn-ghost" data-case-next>${esc(L.csNext)}: ${esc(nx.name)}</button></div></div>`;
    $('.case-in', dlg).scrollTop = 0;
  }
  $$('[data-case]').forEach(b => b.addEventListener('click', () => { opener = b; render(+b.dataset.case); dlg.showModal(); document.body.classList.add('is-locked'); $('.case-close', dlg).focus(); }));
  dlg.addEventListener('close', () => { document.body.classList.remove('is-locked'); if (opener) opener.focus({ preventScroll: true }); });
  dlg.addEventListener('click', e => {
    if (e.target === dlg || e.target.closest('.case-close')) dlg.close();
    else if (e.target.closest('[data-case-next]')) render((cur + 1) % data.length);
    else if (e.target.closest('[data-case-cta]')) { preselect(data[cur].svcIdx); opener = null; dlg.close(); }
  });
}

/* ---------- reviews: one at a time ---------- */
const rvs = $$('.rv');
if (rvs.length) {
  const cnt = $('#rvCount'); let r = 0;
  const go = k => { r = (k + rvs.length) % rvs.length; rvs.forEach((x, j) => { x.classList.toggle('on', j === r); x.setAttribute('aria-hidden', String(j !== r)); }); cnt.textContent = `${String(r + 1).padStart(2, '0')} / ${String(rvs.length).padStart(2, '0')}`; };
  $('#rvPrev').addEventListener('click', () => go(r - 1));
  $('#rvNext').addEventListener('click', () => go(r + 1));
  go(0);
}

/* ---------- quote form: validation + submit ---------- */
if (form) {
  const ts = $('[data-ts]', form); if (ts) ts.value = String(Date.now());
  const status = $('#fStatus'), btn = $('#fSend'), done = $('#fDone');
  const pref = () => (form.elements.contact_pref.value || 'email');
  const rules = {
    name: v => v.trim().length > 1,
    email: v => (pref() === 'email' || v.trim()) ? /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v.trim()) : true,
    phone: v => pref() === 'email' && !v.trim() ? true : /^[0-9+()\/\-\s.]{6,40}$/.test(v.trim()),
    message: v => v.trim().length > 4
  };
  const check = el => {
    const ok = rules[el.name](el.value);
    el.setAttribute('aria-invalid', String(!ok));
    $(`#${el.id}-err`).textContent = ok ? '' : el.dataset.err;
    return ok;
  };
  const fields = () => Object.keys(rules).map(n => form.elements[n]);
  fields().forEach(el => { el.addEventListener('blur', () => { if (el.value) check(el); }); el.addEventListener('input', () => { if (el.getAttribute('aria-invalid') === 'true') check(el); }); });
  // phone becomes required when the visitor prefers a call or WhatsApp
  const req = $('label[for="f-name"] small').textContent, opt = $('label[for="f-company"] small').textContent;
  form.addEventListener('change', e => {
    if (e.target.name !== 'contact_pref') return;
    const byPhone = pref() !== 'email';
    form.elements.phone.required = byPhone; form.elements.email.required = !byPhone;
    $('label[for="f-phone"] small').textContent = byPhone ? req : opt;
    $('label[for="f-email"] small').textContent = byPhone ? opt : req;
    ['phone', 'email'].forEach(n => { const el = form.elements[n]; if (el.getAttribute('aria-invalid') === 'true' || el.value) check(el); });
  });
  const valid = () => { const bad = fields().filter(el => !check(el)); if (bad.length) { status.textContent = L.fErrSummary; bad[0].focus(); } else status.textContent = ''; return !bad.length; };
  // WhatsApp: open the visitor's own WhatsApp with the request pre-filled (no data goes to the server)
  $('#fWa').addEventListener('click', () => {
    const v = n => form.elements[n].value.trim();
    if (!rules.message(v('message'))) { check(form.elements.message); status.textContent = L.fErrSummary; form.elements.message.focus(); return; }
    const svc = $$('input[name="service[]"]:checked', form).map(c => c.dataset.label).join(', ');
    const txt = [L.waForm, svc && `${L.fLabels[0]} ${svc}`, v('message'), [v('name'), v('company')].filter(Boolean).join(' / ')].filter(Boolean).join('\n\n');
    window.open(`https://wa.me/${form.dataset.wa}?text=${encodeURIComponent(txt)}`, '_blank', 'noopener');
  });
  form.addEventListener('submit', async e => {
    e.preventDefault();
    if (!valid()) return;
    btn.disabled = true; const label = btn.textContent; btn.textContent = L.fSending;
    let res = null;
    try { const r = await fetch(form.action, { method: 'POST', body: new FormData(form), headers: { Accept: 'application/json' } }); res = await r.json(); } catch (err) { res = null; }
    btn.disabled = false; btn.textContent = label;
    if (res && res.ok) { form.hidden = true; done.classList.add('on'); done.focus(); return; }
    status.textContent = res && res.error === 'rate' ? L.fErrRate : L.fErrSend;
    if (res && res.fields) res.fields.forEach(n => { const el = form.elements[n]; if (el) check(el); });
  });
}

/* ---------- FAQ accordion (one answer open at a time) ---------- */
const faq = $('.faq');
if (faq) {
  const items = $$('.faq-item', faq);
  const set = (it, open) => { it.classList.toggle('open', open); $('button', it).setAttribute('aria-expanded', String(open)); };
  faq.addEventListener('click', e => {
    const b = e.target.closest('.faq-q button'); if (!b) return;
    const it = b.closest('.faq-item'), open = !it.classList.contains('open');
    items.forEach(x => { if (x !== it && x.classList.contains('open')) set(x, false); });
    set(it, open);
  });
}

/* ---------- language switch keeps the current section ---------- */
$$('.lang a[hreflang], .gate-lang a').forEach(a => a.addEventListener('click', () => {
  if (location.hash && /(^|\/)(\.\.?\/)?([a-z]{2}\/)?$/.test(a.getAttribute('href'))) a.href = a.getAttribute('href').split('#')[0] + location.hash;
}));
// keep track of the section in view so the switch lands in the same place
if ('IntersectionObserver' in window && $('.hero')) {
  const secs = $$('main > section[id]');
  const so = new IntersectionObserver(es => es.forEach(e => { if (e.isIntersecting) history.replaceState(null, '', '#' + e.target.id); }), { rootMargin: '-45% 0px -50% 0px' });
  secs.forEach(x => so.observe(x));
}

/* ---------- cookie settings ---------- */
const ck = $('#ck');
if (ck) {
  $$('[data-cookie-settings]').forEach(b => b.addEventListener('click', () => ck.showModal()));
  $('[data-ck-close]', ck).addEventListener('click', () => ck.close());
  ck.addEventListener('click', e => { if (e.target === ck) ck.close(); });
  const introBtn = $('[data-ck-intro]', ck);
  const syncIntro = () => { try { introBtn.hidden = localStorage.getItem('gwIntroDisabled') !== 'true'; } catch (e) { introBtn.hidden = true; } };
  $$('[data-cookie-settings]').forEach(b => b.addEventListener('click', syncIntro));
  introBtn.addEventListener('click', () => { try { localStorage.removeItem('gwIntroDisabled'); } catch (e) {} syncIntro(); $('output', ck).textContent = L.ckIntroDone; });
  $('[data-ck-clear]', ck).addEventListener('click', () => { try { ['gwIntroVisits', 'gwIntroDisabled'].forEach(k => localStorage.removeItem(k)); sessionStorage.removeItem('gwIntroSession'); } catch (e) {} syncIntro(); $('output', ck).textContent = L.ckCleared; });
}
})();
