(() => {
  const toggle = document.querySelector('.menu-toggle');
  const nav = document.querySelector('#main-nav');
  if (toggle && nav) {
    toggle.addEventListener('click', () => {
      const isOpen = toggle.getAttribute('aria-expanded') === 'true';
      toggle.setAttribute('aria-expanded', String(!isOpen));
      toggle.setAttribute('aria-label', isOpen ? 'Abrir menú' : 'Cerrar menú');
      nav.classList.toggle('is-open', !isOpen);
    });
    nav.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
      nav.classList.remove('is-open');
      toggle.setAttribute('aria-expanded', 'false');
      toggle.setAttribute('aria-label', 'Abrir menú');
    }));
    document.addEventListener('keydown', event => {
      if (event.key === 'Escape') {
        nav.classList.remove('is-open');
        toggle.setAttribute('aria-expanded', 'false');
        toggle.setAttribute('aria-label', 'Abrir menú');
      }
    });
  }
  const copyButton = document.querySelector('#copy-email');
  const copyStatus = document.querySelector('#copy-status');
  if (copyButton && copyStatus) {
    copyButton.addEventListener('click', async () => {
      const email = copyButton.dataset.email;
      try {
        await navigator.clipboard.writeText(email);
        copyStatus.textContent = 'Correo copiado al portapapeles.';
      } catch {
        copyStatus.textContent = `Puedes copiar este correo: ${email}`;
      }
    });
  }
  const year = document.querySelector('#year');
  if (year) year.textContent = new Date().getFullYear();

  // Tema claro/oscuro: respeta la preferencia guardada y permite cambiarla en cualquier momento.
  const themeToggle = document.querySelector('#theme-toggle');
  const themeMeta = document.querySelector('#theme-color-meta');
  const themeIcon = themeToggle?.querySelector('.theme-icon');
  const themeLabel = themeToggle?.querySelector('.theme-label');
  const savedTheme = (() => { try { return localStorage.getItem('aimar-theme'); } catch { return null; } })();
  const systemPrefersLight = window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches;
  const initialTheme = savedTheme || (systemPrefersLight ? 'light' : 'dark');
  const setTheme = (theme) => {
    document.documentElement.dataset.theme = theme;
    const isLight = theme === 'light';
    if (themeIcon) themeIcon.textContent = isLight ? '☾' : '☼';
    if (themeLabel) themeLabel.textContent = isLight ? 'Modo oscuro' : 'Modo claro';
    if (themeToggle) {
      themeToggle.setAttribute('aria-label', isLight ? 'Activar modo oscuro' : 'Activar modo claro');
      themeToggle.setAttribute('title', isLight ? 'Cambiar a modo oscuro' : 'Cambiar a modo claro');
      themeToggle.setAttribute('aria-pressed', String(isLight));
    }
    if (themeMeta) themeMeta.setAttribute('content', isLight ? '#f5f7fb' : '#0a1020');
  };
  setTheme(initialTheme);
  themeToggle?.addEventListener('click', () => {
    const nextTheme = document.documentElement.dataset.theme === 'light' ? 'dark' : 'light';
    setTheme(nextTheme);
    try { localStorage.setItem('aimar-theme', nextTheme); } catch { /* El tema sigue funcionando aunque el almacenamiento esté bloqueado. */ }
  });

  // Barra de progreso de lectura y botón flotante de regreso al inicio.
  const progressBar = document.querySelector('#reading-progress-bar');
  const backToTop = document.querySelector('#back-to-top');
  let scrollTicking = false;
  const updateScrollUI = () => {
    const scrollable = document.documentElement.scrollHeight - window.innerHeight;
    const progress = scrollable > 0 ? (window.scrollY / scrollable) * 100 : 0;
    if (progressBar) progressBar.style.width = `${Math.min(100, Math.max(0, progress))}%`;
    if (backToTop) backToTop.classList.toggle('is-visible', window.scrollY > 500);
    scrollTicking = false;
  };
  window.addEventListener('scroll', () => {
    if (!scrollTicking) {
      window.requestAnimationFrame(updateScrollUI);
      scrollTicking = true;
    }
  }, { passive: true });
  updateScrollUI();
  backToTop?.addEventListener('click', () => window.scrollTo({ top: 0, behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth' }));

  // Resalta en navegación la sección que se está leyendo.
  const navLinks = [...document.querySelectorAll('#main-nav a[href^="#"]')];
  const sections = navLinks.map(link => document.querySelector(link.getAttribute('href'))).filter(Boolean);
  if ('IntersectionObserver' in window && sections.length) {
    const activeObserver = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        navLinks.forEach(link => {
          const active = link.getAttribute('href') === `#${entry.target.id}`;
          if (active) link.setAttribute('aria-current', 'location');
          else link.removeAttribute('aria-current');
        });
      });
    }, { rootMargin: '-30% 0px -60% 0px' });
    sections.forEach(section => activeObserver.observe(section));
  }
  const revealItems = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });
    revealItems.forEach(item => observer.observe(item));
  } else {
    revealItems.forEach(item => item.classList.add('is-visible'));
  }

  // Filtros funcionales de experiencia: permiten a selección ver primero lo más relevante.
  const filterButtons = [...document.querySelectorAll('[data-filter]')];
  const experienceItems = [...document.querySelectorAll('.timeline-item[data-category]')];
  filterButtons.forEach(button => button.addEventListener('click', () => {
    const filter = button.dataset.filter;
    filterButtons.forEach(item => {
      const active = item === button;
      item.classList.toggle('is-active', active);
      item.setAttribute('aria-pressed', String(active));
    });
    experienceItems.forEach(item => {
      const visible = filter === 'all' || item.dataset.category === filter;
      item.classList.toggle('is-filtered-out', !visible);
      if (visible) item.classList.add('is-visible');
    });
  }));

  // Paleta de navegación rápida: Ctrl/Cmd+K, búsqueda filtrable y accesible.
  const palette = document.querySelector('#command-palette');
  const paletteTrigger = document.querySelector('#command-trigger');
  const paletteClose = document.querySelector('#command-close');
  const paletteSearch = document.querySelector('#command-search');
  const paletteLinks = [...document.querySelectorAll('#command-list a')];
  const openPalette = () => {
    if (!palette) return;
    if (typeof palette.showModal === 'function') palette.showModal();
    else palette.setAttribute('open', '');
    if (paletteSearch) { paletteSearch.value = ''; paletteLinks.forEach(link => link.hidden = false); setTimeout(() => paletteSearch.focus(), 30); }
  };
  const closePalette = () => { if (palette?.open) palette.close(); else palette?.removeAttribute('open'); paletteTrigger?.focus(); };
  paletteTrigger?.addEventListener('click', openPalette);
  paletteClose?.addEventListener('click', closePalette);
  palette?.addEventListener('click', event => { if (event.target === palette) closePalette(); });
  paletteLinks.forEach(link => link.addEventListener('click', () => { if (palette?.open) palette.close(); }));
  paletteSearch?.addEventListener('input', () => {
    const query = paletteSearch.value.trim().toLocaleLowerCase('es');
    paletteLinks.forEach(link => { link.hidden = !(`${link.textContent} ${link.dataset.command || ''}`.toLocaleLowerCase('es').includes(query)); });
  });
  document.addEventListener('keydown', event => {
    if ((event.ctrlKey || event.metaKey) && event.key.toLowerCase() === 'k') { event.preventDefault(); if (palette?.open) closePalette(); else openPalette(); }
    if (event.key === 'Escape' && palette?.open) closePalette();
    if (palette?.open && ['ArrowDown','ArrowUp'].includes(event.key)) {
      const visible = paletteLinks.filter(link => !link.hidden);
      if (!visible.length) return;
      const current = visible.indexOf(document.activeElement);
      const next = event.key === 'ArrowDown' ? (current + 1) % visible.length : (current <= 0 ? visible.length - 1 : current - 1);
      event.preventDefault(); visible[next].focus();
    }
  });

})();
