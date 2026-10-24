/* Progressive enhancement; no network calls, credentials or storage. */
(() => {
  const reduced = matchMedia('(prefers-reduced-motion: reduce)');
  const wide = matchMedia('(min-width: 761px) and (min-height: 720px)');
  const wheel = document.querySelector('.cycle');
  const pause = document.querySelector('#motion-toggle');
  let manuallyPaused = false, inView = false;
  const syncWheel = () => {
    wheel.toggleAttribute('data-paused', manuallyPaused || !inView || document.hidden || reduced.matches);
    pause.textContent = reduced.matches ? '系统已减少动态效果' : manuallyPaused ? '播放循环动效' : '暂停循环动效';
    pause.disabled = reduced.matches;
    pause.setAttribute('aria-pressed', String(manuallyPaused || reduced.matches));
  };
  pause.hidden = false;
  pause.addEventListener('click', () => { manuallyPaused = !manuallyPaused; syncWheel(); });
  new IntersectionObserver(entries => { inView = entries[0].isIntersecting; syncWheel(); }).observe(wheel);
  document.addEventListener('visibilitychange', syncWheel);
  reduced.addEventListener('change', syncWheel);
  syncWheel();

  const dialog = document.querySelector('#image-dialog');
  let opener;
  document.querySelectorAll('a.zoom').forEach(link => link.addEventListener('click', e => {
    if (typeof dialog.showModal !== 'function') return; // Native full-image link fallback.
    e.preventDefault(); opener = link;
    const img = document.querySelector('#dialog-image');
    img.src = link.href; img.alt = link.querySelector('img').alt;
    document.querySelector('#image-caption').textContent = link.dataset.caption;
    dialog.showModal();
  }));
  document.querySelector('#dialog-close').addEventListener('click', () => dialog.close());
  dialog.addEventListener('click', e => { if (e.target === dialog) { const r = dialog.getBoundingClientRect(); if (e.clientX < r.left || e.clientX > r.right || e.clientY < r.top || e.clientY > r.bottom) dialog.close(); } });
  dialog.addEventListener('close', () => opener?.focus());

  const form = document.querySelector('#demo-form');
  const result = document.querySelector('#demo-output');
  form.querySelector('[type=submit]').disabled = false;
  form.addEventListener('submit', e => {
    e.preventDefault(); const values = new FormData(form);
    result.textContent = `示例需求：${values.get('product')} / ${values.get('scenario')}。仅在本页演示，未提交。`;
  });
  document.querySelector('#demo-reset').addEventListener('click', () => { form.reset(); result.textContent = '选择产品和场景后生成摘要。'; });

  const price = document.querySelector('#price');
  const stage = price.querySelector('.price-stage');
  const states = [...price.querySelectorAll('[data-price]')];
  const controls = price.querySelector('.price-switch');
  let pinned = false, printing = false;
  const setState = value => {
    for (const el of states) {
      const hidden = pinned && el.dataset.price !== value;
      el.toggleAttribute('inert', hidden);
      if (hidden) el.setAttribute('aria-hidden','true'); else el.removeAttribute('aria-hidden');
    }
    controls.querySelectorAll('button').forEach(b => b.setAttribute('aria-pressed',String(b.dataset.priceState === value)));
  };
  const onScroll = () => {
    if (!pinned) return;
    const rect = price.getBoundingClientRect();
    const travel = Math.max(1, price.offsetHeight - innerHeight);
    setState((100 - rect.top) / travel >= .5 ? 'offer' : 'standard');
  };
  const configurePrice = () => {
    pinned = wide.matches && !reduced.matches && !printing;
    price.classList.toggle('is-pinned', pinned);
    if (pinned && stage.scrollHeight > innerHeight - 120) { pinned = false; price.classList.remove('is-pinned'); }
    controls.hidden = !pinned;
    setState('standard'); onScroll();
  };
  controls.addEventListener('click', e => { const b = e.target.closest('[data-price-state]'); if (b) setState(b.dataset.priceState); });
  let frame;
  addEventListener('scroll', () => { if (!frame) frame = requestAnimationFrame(() => { frame = null; onScroll(); }); }, {passive:true});
  addEventListener('resize', configurePrice);
  reduced.addEventListener('change', configurePrice);
  wide.addEventListener('change', configurePrice);
  document.fonts?.ready.then(configurePrice);
  configurePrice();

  let previousOpen = [];
  addEventListener('beforeprint', () => { printing = true; configurePrice(); previousOpen = [...document.querySelectorAll('details')].map(d => [d,d.open]); previousOpen.forEach(([d]) => d.open = true); });
  addEventListener('afterprint', () => { previousOpen.forEach(([d,open]) => d.open = open); printing = false; configurePrice(); });

  const nav = [...document.querySelectorAll('nav a')];
  const chapters = new IntersectionObserver(entries => entries.forEach(entry => {
    if (entry.isIntersecting) nav.forEach(link => { if (link.hash === '#' + entry.target.id) link.setAttribute('aria-current','location'); else link.removeAttribute('aria-current'); });
  }), {rootMargin:'-15% 0px -65% 0px'});
  document.querySelectorAll('main > section').forEach(section => chapters.observe(section));
})();
