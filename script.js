(() => {

  // Selector de idioma ES / EN / NL. La elección se conserva entre visitas.
  const translations = {
    es: {
      nav_profile:'Perfil',nav_experience:'Experiencia',nav_skills:'Competencias',nav_projects:'Proyectos',nav_contact:'Hablemos',eyebrow:'PORTFOLIO PROFESIONAL',
      hero_title:'La tecnología<br>se entiende mejor<br><span>cuando funciona.</span>',
      hero_lead:'Soy Aimar, estudiante de <strong>Sistemas Microinformáticos y Redes</strong>, con experiencia práctica en soporte a usuarios y ganas de seguir creciendo en el sector IT.',
      hero_explore:'Explorar portfolio',download_cv:'Descargar CV',hero_motto:'Aprender · Resolver · Colaborar',in_training:'EN FORMACIÓN',scroll:'DESLIZA PARA CONOCERME',
      metric_certs:'Certificaciones Cisco<br>Networking Academy',metric_experience:'Entornos profesionales<br>y experiencias prácticas',metric_international:'Experiencia internacional<br>Erasmus+ · Irlanda',metric_english:'Nivel de inglés',
      about_index:'01 — SOBRE MÍ',about_title:'Curiosidad técnica.<br><span>Experiencia real.</span>',about_statement:'Me interesa entender cómo funcionan los sistemas, conectar soluciones y ayudar a que la tecnología sea útil para las personas.',
      about_p1:'Estoy cursando el CFGM de Sistemas Microinformáticos y Redes y he complementado mi formación con experiencias de FP Dual, FCT y Erasmus+. He trabajado en contextos diferentes, desde la atención y el soporte a usuarios hasta el marketing y la organización en tienda.',
      about_p2:'Me adapto con facilidad, valoro el trabajo en equipo y busco una oportunidad donde seguir aprendiendo, aportar responsabilidad y desarrollar mis competencias técnicas.',
      experience_index:'02 — EXPERIENCIA',experience_title:'Aprender haciendo.',experience_intro:'Experiencia en diferentes equipos, funciones y entornos profesionales.',filter_experience:'FILTRAR EXPERIENCIA',filter_all:'Todas',filter_it:'Soporte IT',filter_ops:'Atención y operaciones',filter_international:'Internacional',
      phonezay_desc:'Organización y reposición de productos en tienda, en un entorno laboral internacional.',renault_desc:'Colaboración en tareas de marketing y comunicación.',natura_desc:'Atención y asesoramiento a clientes, con apoyo en la gestión diaria.',vans_desc:'Soporte a usuarios y resolución de incidencias.',
      skills_index:'03 — COMPETENCIAS',skills_title:'Una base para<br><span>seguir creciendo.</span>',digital_skills:'Competencias digitales',skill_search:'Búsqueda de información online',skill_tools:'Uso de herramientas digitales',skill_support:'Soporte a usuarios y resolución de incidencias',skill_systems:'Configuración básica de sistemas, equipos y redes',soft_skills:'Habilidades personales',soft_adapt:'Flexibilidad y adaptabilidad',soft_team:'Colaboración y trabajo en equipo',soft_empathy:'Escucha y empatía',soft_reliability:'Puntualidad y responsabilidad',languages:'Idiomas',english:'Inglés',dutch:'Neerlandés',additional_training:'FORMACIÓN COMPLEMENTARIA',cert_heading:'Conocimientos en ciberseguridad y redes',
      education_index:'04 — FORMACIÓN',education_title:'Construyendo la base.',education_smr:'CFGM Sistemas Microinformáticos y Redes',education_commerce:'CFGM Comercio y Marketing — Actividades Comerciales',education_eso:'Educación Secundaria Obligatoria',
      projects_index:'05 — PROYECTOS Y PARTICIPACIÓN',projects_title:'Ideas que salen<br><span>de la pantalla.</span>',projects_intro:'Proyectos propios y experiencias que muestran iniciativa, creatividad y colaboración.',in_development:'● EN DESARROLLO',in_development_tag:'En desarrollo',pcpilot_description:'Aplicación de escritorio para Windows centrada en la monitorización del sistema y el diagnóstico del equipo. Un proyecto propio que combina Python, una interfaz gráfica y análisis de recursos.',pcpilot_status:'Proyecto personal en desarrollo',
      web_development:'DESARROLLO WEB',batan_description:'Diseñé y publiqué una web para mi equipo de fútbol. Es un proyecto real que reúne mi interés por la tecnología con una necesidad de una comunidad deportiva.',published_web:'Web publicada',personal_project:'Proyecto personal',visit_website:'Visitar web',view_code:'Ver código',programming:'PROGRAMACIÓN',game_title:'Juego desarrollado para clase',game_description:'Un juego creado como parte de un trabajo académico. El repositorio permite consultar el proyecto y revisar el código disponible.',academic_project:'Proyecto académico',view_repository:'Ver repositorio',community:'VOLUNTARIADO Y COMUNIDAD',song_title:'Una canción hecha en clase',song_description:'Participé junto con mis compañeros de clase en la creación de una canción vinculada a las necesidades del barrio de El Batán. Una experiencia colectiva de expresión y colaboración.',teamwork:'Trabajo en equipo',community_participation:'Participación comunitaria',watch_video:'Ver vídeo',read_article:'Leer noticia',github_footer:'Consulta también otros repositorios y experimentos en mi perfil.',explore_github:'Explorar GitHub',
      contact_index:'06 — CONTACTO',contact_title:'¿Hablamos de<br><span>la próxima oportunidad?</span>',contact_text:'Estoy interesado en oportunidades de prácticas y puestos junior relacionados con sistemas, redes y soporte informático.',gmail_button:'Escríbeme por Gmail',copy_email:'Copiar correo',location:'Las Palmas de Gran Canaria, España',command_title:'¿A dónde vamos?',command_placeholder:'Busca una sección o acción…',footer_note:'Hecho con intención. Enfocado en lo importante.',back_top:'VOLVER ARRIBA ↑',role_phonezay:'Alumno Erasmus+ · Dundalk, Irlanda',role_renault:'Alumno FCT · El Sebadal',role_natura:'Alumno FP Dual · Mesa y López',role_vans:'Alumno FP Dual · Triana',type_international:'EXPERIENCIA INTERNACIONAL',type_incompany:'FORMACIÓN EN CENTRO DE TRABAJO',type_dual:'FP DUAL',type_it:'SOPORTE INFORMÁTICO',tag_support:'Soporte a usuarios',tag_team:'Trabajo en equipo',tag_adapt:'Adaptabilidad',tag_learning:'Aprendizaje continuo',education_status:'EN CURSO · 2.º CFGM',current_date:'09/2025 — ACTUALIDAD',more_work:'MÁS CÓDIGO Y TRABAJOS',quick_nav:'Navegación rápida'
    },
    en: {
      nav_profile:'About',nav_experience:'Experience',nav_skills:'Skills',nav_projects:'Projects',nav_contact:'Contact',eyebrow:'PROFESSIONAL PORTFOLIO',
      hero_title:'Technology<br>makes more sense<br><span>when it works.</span>',hero_lead:'I’m Aimar, a <strong>Microcomputer Systems and Networks</strong> student with hands-on user support experience and a strong interest in growing in IT.',
      hero_explore:'Explore portfolio',download_cv:'Download CV',hero_motto:'Learn · Solve · Collaborate',in_training:'IN TRAINING',scroll:'SCROLL TO DISCOVER',
      metric_certs:'Cisco Networking Academy<br>certifications',metric_experience:'Professional settings<br>and practical experience',metric_international:'International experience<br>Erasmus+ · Ireland',metric_english:'English level',
      about_index:'01 — ABOUT ME',about_title:'Technical curiosity.<br><span>Real experience.</span>',about_statement:'I enjoy understanding how systems work, connecting solutions and making technology useful for people.',
      about_p1:'I am currently studying Microcomputer Systems and Networks and have complemented my education with work-based learning, in-company training and Erasmus+. I have worked in different settings, from customer service and user support to marketing and store operations.',
      about_p2:'I adapt quickly, value teamwork and am looking for an opportunity to keep learning, take responsibility and develop my technical skills.',
      experience_index:'02 — EXPERIENCE',experience_title:'Learning by doing.',experience_intro:'Experience across different teams, roles and professional environments.',filter_experience:'FILTER EXPERIENCE',filter_all:'All',filter_it:'IT support',filter_ops:'Customer service & operations',filter_international:'International',
      phonezay_desc:'Organising and restocking products in a retail store within an international work environment.',renault_desc:'Supported marketing and communication tasks.',natura_desc:'Customer service and product advice, supporting day-to-day store operations.',vans_desc:'User support and incident resolution.',
      skills_index:'03 — SKILLS',skills_title:'A foundation to<br><span>keep growing.</span>',digital_skills:'Digital skills',skill_search:'Online information research',skill_tools:'Use of digital tools',skill_support:'User support and incident resolution',skill_systems:'Basic configuration of systems, computers and networks',soft_skills:'Personal skills',soft_adapt:'Flexibility and adaptability',soft_team:'Collaboration and teamwork',soft_empathy:'Listening and empathy',soft_reliability:'Punctuality and reliability',languages:'Languages',english:'English',dutch:'Dutch',additional_training:'ADDITIONAL TRAINING',cert_heading:'Knowledge of cybersecurity and networking',
      education_index:'04 — EDUCATION',education_title:'Building the foundations.',education_smr:'Vocational Diploma in Microcomputer Systems and Networks',education_commerce:'Vocational Diploma in Commerce and Marketing — Commercial Activities',education_eso:'Compulsory Secondary Education',
      projects_index:'05 — PROJECTS & PARTICIPATION',projects_title:'Ideas that go<br><span>beyond the screen.</span>',projects_intro:'Personal projects and experiences that show initiative, creativity and collaboration.',in_development:'● IN DEVELOPMENT',in_development_tag:'In development',pcpilot_description:'A Windows desktop application focused on system monitoring and computer diagnostics. A personal project combining Python, a graphical interface and resource analysis.',pcpilot_status:'Personal project in development',
      web_development:'WEB DEVELOPMENT',batan_description:'I designed and published a website for my football team. A real-world project combining my interest in technology with the needs of a local sports community.',published_web:'Published website',personal_project:'Personal project',visit_website:'Visit website',view_code:'View code',programming:'PROGRAMMING',game_title:'Game developed for class',game_description:'A game created as part of an academic assignment. The repository contains the project and available source code.',academic_project:'Academic project',view_repository:'View repository',community:'COMMUNITY PARTICIPATION',song_title:'A song created in class',song_description:'I took part with my classmates in creating a song connected to the needs of the El Batán neighbourhood. A shared experience of expression and collaboration.',teamwork:'Teamwork',community_participation:'Community participation',watch_video:'Watch video',read_article:'Read article',github_footer:'Explore more repositories and experiments on my profile.',explore_github:'Explore GitHub',
      contact_index:'06 — CONTACT',contact_title:'Shall we talk about<br><span>the next opportunity?</span>',contact_text:'I am interested in internships and junior roles related to systems, networking and IT support.',gmail_button:'Email me via Gmail',copy_email:'Copy email',location:'Las Palmas de Gran Canaria, Spain',command_title:'Where would you like to go?',command_placeholder:'Search a section or action…',footer_note:'Made with purpose. Focused on what matters.',back_top:'BACK TO TOP ↑',role_phonezay:'Erasmus+ trainee · Dundalk, Ireland',role_renault:'Work placement student · El Sebadal',role_natura:'Dual vocational trainee · Mesa y López',role_vans:'Dual vocational trainee · Triana',type_international:'INTERNATIONAL EXPERIENCE',type_incompany:'WORKPLACE TRAINING',type_dual:'DUAL TRAINING',type_it:'IT SUPPORT',tag_support:'User support',tag_team:'Teamwork',tag_adapt:'Adaptability',tag_learning:'Continuous learning',education_status:'IN PROGRESS · YEAR 2',current_date:'09/2025 — PRESENT',more_work:'MORE CODE & PROJECTS',quick_nav:'Quick navigation'
    },
    nl: {
      nav_profile:'Over mij',nav_experience:'Ervaring',nav_skills:'Vaardigheden',nav_projects:'Projecten',nav_contact:'Contact',eyebrow:'PROFESSIONEEL PORTFOLIO',
      hero_title:'Technologie<br>werkt pas echt goed<br><span>als alles werkt.</span>',hero_lead:'Ik ben Aimar, student <strong>Microcomputersystemen en Netwerken</strong>, met praktijkervaring in gebruikersondersteuning en de ambitie om verder te groeien in IT.',
      hero_explore:'Bekijk portfolio',download_cv:'Download cv',hero_motto:'Leren · Oplossen · Samenwerken',in_training:'IN OPLEIDING',scroll:'SCROLL OM MIJ TE ONTDEKKEN',
      metric_certs:'Certificaten van Cisco<br>Networking Academy',metric_experience:'Professionele omgevingen<br>en praktijkervaring',metric_international:'Internationale ervaring<br>Erasmus+ · Ierland',metric_english:'Engels niveau',
      about_index:'01 — OVER MIJ',about_title:'Technische nieuwsgierigheid.<br><span>Praktijkervaring.</span>',about_statement:'Ik wil begrijpen hoe systemen werken, oplossingen verbinden en technologie nuttig maken voor mensen.',
      about_p1:'Ik volg momenteel de opleiding Microcomputersystemen en Netwerken en heb mijn opleiding aangevuld met praktijkleren, stages en Erasmus+. Ik heb in verschillende omgevingen gewerkt, van klantenservice en gebruikersondersteuning tot marketing en winkelwerkzaamheden.',
      about_p2:'Ik pas me gemakkelijk aan, vind teamwork belangrijk en zoek een kans om te blijven leren, verantwoordelijkheid te nemen en mijn technische vaardigheden te ontwikkelen.',
      experience_index:'02 — ERVARING',experience_title:'Leren door te doen.',experience_intro:'Ervaring in verschillende teams, functies en professionele omgevingen.',filter_experience:'ERVARING FILTEREN',filter_all:'Alles',filter_it:'IT-ondersteuning',filter_ops:'Klantenservice & winkelwerk',filter_international:'Internationaal',
      phonezay_desc:'Producten organiseren en aanvullen in een winkel binnen een internationale werkomgeving.',renault_desc:'Meegewerkt aan marketing- en communicatietaken.',natura_desc:'Klanten helpen en adviseren en ondersteunen bij de dagelijkse winkelactiviteiten.',vans_desc:'Gebruikers ondersteunen en incidenten oplossen.',
      skills_index:'03 — VAARDIGHEDEN',skills_title:'Een basis om<br><span>verder te groeien.</span>',digital_skills:'Digitale vaardigheden',skill_search:'Online informatie opzoeken',skill_tools:'Digitale hulpmiddelen gebruiken',skill_support:'Gebruikers ondersteunen en incidenten oplossen',skill_systems:'Basisconfiguratie van systemen, computers en netwerken',soft_skills:'Persoonlijke vaardigheden',soft_adapt:'Flexibiliteit en aanpassingsvermogen',soft_team:'Samenwerking en teamwork',soft_empathy:'Luisteren en empathie',soft_reliability:'Punctualiteit en verantwoordelijkheid',languages:'Talen',english:'Engels',dutch:'Nederlands',additional_training:'AANVULLENDE OPLEIDING',cert_heading:'Kennis van cybersecurity en netwerken',
      education_index:'04 — OPLEIDING',education_title:'Een stevige basis bouwen.',education_smr:'Beroepsopleiding Microcomputersystemen en Netwerken',education_commerce:'Beroepsopleiding Handel en Marketing — Commerciële Activiteiten',education_eso:'Verplicht secundair onderwijs',
      projects_index:'05 — PROJECTEN & DEELNAME',projects_title:'Ideeën die verder gaan<br><span>dan het scherm.</span>',projects_intro:'Eigen projecten en ervaringen die initiatief, creativiteit en samenwerking laten zien.',in_development:'● IN ONTWIKKELING',in_development_tag:'In ontwikkeling',pcpilot_description:'Een desktopapplicatie voor Windows gericht op systeembewaking en computerdiagnose. Een eigen project waarin Python, een grafische interface en analyse van systeembronnen samenkomen.',pcpilot_status:'Eigen project in ontwikkeling',
      web_development:'WEBONTWIKKELING',batan_description:'Ik heb een website ontworpen en gepubliceerd voor mijn voetbalteam. Een echt project waarin mijn interesse in technologie samenkomt met de behoeften van een lokale sportgemeenschap.',published_web:'Gepubliceerde website',personal_project:'Eigen project',visit_website:'Website bekijken',view_code:'Code bekijken',programming:'PROGRAMMEREN',game_title:'Game ontwikkeld voor de les',game_description:'Een game die is gemaakt als onderdeel van een schoolopdracht. In de repository staan het project en de beschikbare broncode.',academic_project:'Schoolproject',view_repository:'Repository bekijken',community:'COMMUNITY & DEELNAME',song_title:'Een lied gemaakt in de klas',song_description:'Samen met mijn klasgenoten heb ik meegedaan aan het maken van een lied over de behoeften van de wijk El Batán. Een gezamenlijke ervaring rond expressie en samenwerking.',teamwork:'Samenwerken',community_participation:'Betrokkenheid bij de gemeenschap',watch_video:'Video bekijken',read_article:'Artikel lezen',github_footer:'Bekijk ook andere repositories en experimenten op mijn profiel.',explore_github:'GitHub bekijken',
      contact_index:'06 — CONTACT',contact_title:'Zullen we praten over<br><span>de volgende kans?</span>',contact_text:'Ik ben geïnteresseerd in stageplaatsen en juniorfuncties op het gebied van systemen, netwerken en IT-ondersteuning.',gmail_button:'Mail mij via Gmail',copy_email:'E-mailadres kopiëren',location:'Las Palmas de Gran Canaria, Spanje',command_title:'Waar wil je naartoe?',command_placeholder:'Zoek een sectie of actie…',footer_note:'Met aandacht gemaakt. Gericht op wat belangrijk is.',back_top:'TERUG NAAR BOVEN ↑',role_phonezay:'Erasmus+-stagiair · Dundalk, Ierland',role_renault:'Stagiair · El Sebadal',role_natura:'BBL-stagiair · Mesa y López',role_vans:'BBL-stagiair · Triana',type_international:'INTERNATIONALE ERVARING',type_incompany:'BEROEPSPRAKTIJK',type_dual:'DUALE OPLEIDING',type_it:'IT-ONDERSTEUNING',tag_support:'Gebruikers ondersteunen',tag_team:'Samenwerken',tag_adapt:'Aanpassingsvermogen',tag_learning:'Blijven leren',education_status:'LOPEND · JAAR 2',current_date:'09/2025 — HEDEN',more_work:'MEER CODE & PROJECTEN',quick_nav:'Snelle navigatie'
    }
  };
  const languageButtons = [...document.querySelectorAll('[data-lang]')];
  const savedLanguage = (() => { try { return localStorage.getItem('aimar-language'); } catch { return null; } })();
  const applyLanguage = (lang) => {
    const selected = translations[lang] ? lang : 'es';
    const dictionary = translations[selected];
    document.documentElement.lang = selected;
    document.querySelectorAll('[data-i18n]').forEach(node => {
      const value = dictionary[node.dataset.i18n];
      if (value !== undefined) node.textContent = value;
    });
    document.querySelectorAll('[data-i18n-html]').forEach(node => {
      const value = dictionary[node.dataset.i18nHtml];
      if (value !== undefined) node.innerHTML = value;
    });
    document.querySelectorAll('[data-i18n-placeholder]').forEach(node => {
      const value = dictionary[node.dataset.i18nPlaceholder];
      if (value !== undefined) node.setAttribute('placeholder', value);
    });
    languageButtons.forEach(button => {
      const active = button.dataset.lang === selected;
      button.classList.toggle('is-active', active);
      button.setAttribute('aria-pressed', String(active));
    });
    try { localStorage.setItem('aimar-language', selected); } catch { /* El selector sigue funcionando sin almacenamiento. */ }
  };
  languageButtons.forEach(button => button.addEventListener('click', () => applyLanguage(button.dataset.lang)));
  applyLanguage(savedLanguage || 'es');

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
