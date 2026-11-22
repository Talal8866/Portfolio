(function () {
  'use strict';

  /* ══════════════════════════════════════════
     TRANSLATIONS
  ══════════════════════════════════════════ */
  const T = {
    en: {
      'nav.home': 'Home',
      'nav.about': 'About',
      'nav.skills': 'Skills',
      'nav.works': 'Works',
      'nav.contact': 'Contact',

      'hero.role': "Frontend Developer",
      'hero.location': 'Syria · Remote',
      'hero.status': 'Freelancer · Open to Work',
      'hero.cv': 'Download CV',
      'hero.badge': 'Available for Projects',
      'hero.greeting': "Hey, I'm",
      'hero.title': "Frontend Developer",
      'hero.desc': "I build fast, responsive web applications, from clean UI to REST API integration. Specialising in Angular, TypeScript & React.",
      'hero.cta': "Let's Connect",
      'hero.cta2': 'See My Work',

      'stat.exp': 'Years Experience',
      'stat.projects': 'Projects Built',
      'stat.tech': 'Technologies',

      'about.badge': 'Clean Code',
      'about.title': 'About Me',
      'about.p1': "I'm a Frontend Developer building dynamic, responsive web applications with Angular, React, TypeScript, and JavaScript. I integrate REST APIs, build reusable component libraries, and care about SEO and performance.",
      'about.p2': "Holding a B.Sc. in Information Technology Engineering (Software Development) from the Syrian Virtual University, I bring both theoretical grounding and hands-on experience. I'm actively seeking remote and freelance frontend opportunities.",

      'skills.title': 'Technical Skills',
      'skills.sub': 'Continuously learning, constantly building.',
      'skills.all': 'All',
      'skills.lang': 'Languages',
      'skills.fw': 'Frameworks & Libraries',
      'skills.Tools & Platforms': 'Tools & Platforms',

      'lv.expert': 'Expert',
      'lv.advanced': 'Advanced',
      'lv.intermediate': 'Intermediate',
      'lv.learning': 'Learning',

      'works.title': 'Selected Projects',
      'works.sub': "Projects I've designed, built & shipped.",
      'works.view': 'View Project →',
      'works.soon': 'Coming Soon',
      'works.goldenkey': "A full production website for Golden Key Lock Repairing EST, built with Angular 20.",
      'works.souk': 'E-commerce web app with cart, authentication & product management.',
      'works.darrebni': 'Full-featured educational platform  academic capstone project.',
      'works.space': 'Frontend Mentor challenge  immersive multi-page UI.',
      'works.school': 'Comprehensive school system with dashboards, roles & reports.',
      'works.arkhas': 'online store website built on an intelligent system that accurately and effectively compares product prices.',
      'works.tracker': "Personal daily planner and habit tracker, built for phone use.",
      'works.ads':  'An advertising platform with a control panel.',


      'contact.title': "Let's Work Together",
      'contact.sub': 'Open to freelance, remote roles & exciting collaborations.',

      'form.name': 'Your Name',
      'form.email': 'Your Email',
      'form.msg': 'Message',
      'form.namePH': 'Enter your name',
      'form.emailPH': 'Enter your email',
      'form.msgPH': 'Tell me about your project…',
      'form.send': 'Send Message',

      'footer.copy': "© 2026 Talal Alsebai. All rights reserved.",
    },

    ar: {
      'nav.home': 'الرئيسية',
      'nav.about': 'عني',
      'nav.skills': 'المهارات',
      'nav.works': 'الأعمال',
      'nav.contact': 'التواصل',

      'hero.role': "مطور واجهات أمامية",
      'hero.location': 'سوريا · عن بُعد',
      'hero.status': 'فري لانسر · متاح للعمل',
      'hero.cv': 'تحميل السيرة الذاتية',
      'hero.badge': 'متاح للمشاريع',
      'hero.greeting': 'مرحباً، أنا',
      'hero.title': "مطور واجهات أمامية",
      'hero.desc': "أبني تطبيقات ويب سريعة ومتجاوبة، من واجهات مستخدم نظيفة إلى ربط الواجهات مع REST APIs. متخصص في Angular وTypeScript وReact.",
      'hero.cta': 'تواصل معي',
      'hero.cta2': 'اعمالي',

      'stat.exp': 'سنوات خبرة',
      'stat.projects': 'مشروع منجز',
      'stat.tech': 'تقنيات',

      'about.badge': 'كود نظيف',
      'about.title': 'عني',
      'about.p1': "أنا مطور واجهات أمامية، أبني تطبيقات ويب ديناميكية ومتجاوبة باستخدام Angular وReact وTypeScript وJavaScript. أعمل على ربط REST APIs وبناء مكتبات مكوّنات قابلة لإعادة الاستخدام، وأهتم بتحسين محركات البحث والأداء.",
      'about.p2': "حاصل على بكالوريوس هندسة تقانة المعلومات (تطوير البرمجيات) من الجامعة الافتراضية السورية، وأجمع بين الأساس النظري والخبرة العملية. أسعى للفرص عن بُعد والمشاريع الحرة.",

      'skills.title': 'المهارات التقنية',
      'skills.sub': 'تعلم مستمر، بناء دائم.',
      'skills.all': 'الكل',
      'skills.lang': 'اللغات',
      'skills.fw': 'الأطر البرمجية',
      'skills.Tools & Platforms': 'الأدوات',

      'lv.expert': 'خبير',
      'lv.advanced': 'متقدم',
      'lv.intermediate': 'متوسط',
      'lv.learning': 'قيد التعلم',

      'works.title': 'أبرز المشاريع',
      'works.sub': 'مشاريع صمّمتها وبنيتها وسلّمتها.',
      'works.view': 'عرض المشروع →',
      'works.soon': 'قريباً',
      'works.goldenkey': "موقع إنتاجي متكامل لمؤسسة المفتاح الذهبي لإصلاح الأقفال، مبني بـ Angular 20.",
      'works.souk': 'موقع تجارة إلكترونية مع سلة المشتريات والمصادقة وإدارة المنتجات.',
      'works.darrebni': 'منصة تعليمية متكاملة  مشروع التخرج.',
      'works.space': 'تحدي Frontend Mentor  واجهة مستخدم متعددة الصفحات.',
      'works.school': 'نظام إدارة مدرسة شامل مع لوحات تحكم وأدوار وتقارير.',
      'works.arkhas': 'موقع متجر الكتروني مبني على نظام ذكي يقارن أسعار المنتجات بدقة وفعالية',
      'works.tracker': "مخطط يومي ومتتبع للعادات الشخصية، مصمم للاستخدام على الهاتف.",
      'works.ads': 'منصة عرض اعلانات مع لوحة تحكم',

      'contact.title': 'لنعمل معاً',
      'contact.sub': 'متاح للعمل الحر والوظائف عن بُعد والتعاونات المثيرة.',

      'form.name': 'اسمك',
      'form.email': 'بريدك الإلكتروني',
      'form.msg': 'رسالتك',
      'form.namePH': 'أدخل اسمك',
      'form.emailPH': 'أدخل بريدك الإلكتروني',
      'form.msgPH': 'أخبرني عن مشروعك…',
      'form.send': 'إرسال الرسالة',

      'footer.copy': "© 2026 طلال السبعي. جميع الحقوق محفوظة.",
    }
  };

  /* ════════════════════════════════════════
     LANGUAGE SYSTEM
  ══════════════════════════════════════════ */
  let currentLang = localStorage.getItem('lang') || 'en';

  function applyLang(lang) {
    currentLang = lang;
    const html = document.documentElement;
    html.lang = lang;
    html.dir = lang === 'ar' ? 'rtl' : 'ltr';
    localStorage.setItem('lang', lang);

    const label = document.getElementById('lang-label');
    if (label) label.textContent = lang === 'ar' ? 'EN' : 'ع';

    /* Text content */
    document.querySelectorAll('[data-key]').forEach(el => {
      const key = el.getAttribute('data-key');
      if (T[lang][key] !== undefined) el.textContent = T[lang][key];
    });

    /* Placeholders */
    document.querySelectorAll('[data-key-ph]').forEach(el => {
      const key = el.getAttribute('data-key-ph');
      if (T[lang][key] !== undefined) el.placeholder = T[lang][key];
    });

    /* Side nav tips */
    const tipMap = {
      '#home': lang === 'ar' ? 'الرئيسية' : 'Home',
      '#about': lang === 'ar' ? 'عني' : 'About',
      '#skills': lang === 'ar' ? 'المهارات' : 'Skills',
      '#works': lang === 'ar' ? 'الأعمال' : 'Works',
      '#contact': lang === 'ar' ? 'التواصل' : 'Contact',
    };
    document.querySelectorAll('.sdot').forEach(dot => {
      const href = dot.getAttribute('href');
      if (tipMap[href]) dot.setAttribute('data-tip', tipMap[href]);
    });
  }

  const langBtn = document.getElementById('lang-toggle');
  if (langBtn) {
    langBtn.addEventListener('click', () => {
      applyLang(currentLang === 'en' ? 'ar' : 'en');
    });
  }
  applyLang(currentLang);

  /* ══════════════════════════════════════════
     THEME SYSTEM
  ══════════════════════════════════════════ */
  let currentTheme = localStorage.getItem('theme') || 'dark';
  document.documentElement.setAttribute('data-theme', currentTheme);

  const themeBtn = document.getElementById('theme-toggle');
  if (themeBtn) {
    themeBtn.addEventListener('click', () => {
      currentTheme = currentTheme === 'dark' ? 'light' : 'dark';
      document.documentElement.setAttribute('data-theme', currentTheme);
      localStorage.setItem('theme', currentTheme);
    });
  }

  /* ══════════════════════════════════════════
     MOBILE MENU
  ══════════════════════════════════════════ */
  const hamburger = document.getElementById('hamburger');
  const mobileMenu = document.getElementById('mobile-menu');
  const overlay = document.getElementById('menu-overlay');
  const closeBtn = document.getElementById('close-menu');

  function openMenu() {
    hamburger.classList.add('open');
    mobileMenu.classList.add('open');
    overlay.classList.add('open');
    mobileMenu.setAttribute('aria-hidden', 'false');
    hamburger.setAttribute('aria-expanded', 'true');
    document.body.style.overflow = 'hidden';
  }
  function closeMenu() {
    hamburger.classList.remove('open');
    mobileMenu.classList.remove('open');
    overlay.classList.remove('open');
    mobileMenu.setAttribute('aria-hidden', 'true');
    hamburger.setAttribute('aria-expanded', 'false');
    document.body.style.overflow = '';
  }

  if (hamburger) hamburger.addEventListener('click', () =>
    mobileMenu.classList.contains('open') ? closeMenu() : openMenu()
  );
  if (closeBtn) closeBtn.addEventListener('click', closeMenu);
  if (overlay) overlay.addEventListener('click', closeMenu);
  document.querySelectorAll('.menu-link').forEach(l => l.addEventListener('click', closeMenu));
  document.addEventListener('keydown', e => { if (e.key === 'Escape') closeMenu(); });
  window.closeMenu = closeMenu;

  /* ══════════════════════════════════════════
     CUSTOM CURSOR
  ══════════════════════════════════════════ */
  const dot = document.getElementById('cursor-dot');
  const ring = document.getElementById('cursor-ring');

  if (dot && ring && window.matchMedia('(pointer: fine)').matches) {
    let rx = 0, ry = 0;
    let mx = 0, my = 0;

    document.addEventListener('mousemove', e => {
      mx = e.clientX; my = e.clientY;
      dot.style.left = mx + 'px';
      dot.style.top = my + 'px';
    });

    (function animRing() {
      rx += (mx - rx) * 0.12;
      ry += (my - ry) * 0.12;
      ring.style.left = rx + 'px';
      ring.style.top = ry + 'px';
      requestAnimationFrame(animRing);
    })();
  }

  /* ══════════════════════════════════════════
     SCROLL REVEAL  (IntersectionObserver)
  ══════════════════════════════════════════ */
  const revealEls = document.querySelectorAll('[data-reveal]');
  if ('IntersectionObserver' in window) {
    const revObs = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          revObs.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });
    revealEls.forEach(el => revObs.observe(el));
  } else {
    revealEls.forEach(el => el.classList.add('visible'));
  }

  /* ══════════════════════════════════════════
     ACTIVE SIDENAV DOT on scroll
  ══════════════════════════════════════════ */
  const sections = ['home', 'about', 'skills', 'works', 'contact'];
  const sdots = document.querySelectorAll('.sdot');

  function updateDots() {
    let current = 'home';
    sections.forEach(id => {
      const el = document.getElementById(id);
      if (el && window.scrollY >= el.offsetTop - 200) current = id;
    });
    sdots.forEach(d => {
      d.classList.toggle('active', d.getAttribute('href') === '#' + current);
    });
  }
  window.addEventListener('scroll', updateDots, { passive: true });
  updateDots();

  /* ══════════════════════════════════════════
     SKILL BARS  animate on scroll
  ══════════════════════════════════════════ */
  const skillFills = document.querySelectorAll('.sk-fill');

  function animateSkillBars(entries) {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const fill = entry.target;
        const pct = fill.getAttribute('data-pct');
        fill.style.setProperty('--target-pct', pct + '%');
        /* small delay to ensure CSS transition fires */
        requestAnimationFrame(() => {
          requestAnimationFrame(() => fill.classList.add('animated'));
        });
      }
    });
  }
  if ('IntersectionObserver' in window) {
    const barObs = new IntersectionObserver(animateSkillBars, { threshold: 0.3 });
    skillFills.forEach(f => barObs.observe(f));
  } else {
    skillFills.forEach(f => {
      const pct = f.getAttribute('data-pct');
      f.style.width = pct + '%';
    });
  }

  /* ══════════════════════════════════════════
     SKILLS CATEGORY TABS
  ══════════════════════════════════════════ */
  const tabBtns = document.querySelectorAll('.tab-btn');
  const skCards = document.querySelectorAll('.sk-card');

  tabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      tabBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const cat = btn.getAttribute('data-cat');
      skCards.forEach(card => {
        const match = cat === 'all' || card.getAttribute('data-cat') === cat;
        card.classList.toggle('hidden', !match);
      });

      /* re-animate visible bars */
      skCards.forEach(card => {
        if (!card.classList.contains('hidden')) {
          const fill = card.querySelector('.sk-fill');
          if (fill && !fill.classList.contains('animated')) {
            const pct = fill.getAttribute('data-pct');
            fill.style.setProperty('--target-pct', pct + '%');
            requestAnimationFrame(() => {
              requestAnimationFrame(() => fill.classList.add('animated'));
            });
          }
        }
      });
    });
  });

  /* ══════════════════════════════════════════
     COUNTER ANIMATION
  ══════════════════════════════════════════ */
  function animateCounter(el, target, duration) {
    let start = null;
    const step = (ts) => {
      if (!start) start = ts;
      const progress = Math.min((ts - start) / duration, 1);
      el.textContent = Math.floor(progress * target);
      if (progress < 1) requestAnimationFrame(step);
      else el.textContent = target + (target >= 10 ? '+' : '+');
    };
    requestAnimationFrame(step);
  }

  if ('IntersectionObserver' in window) {
    const counters = document.querySelectorAll('.hstat-n[data-count]');
    const cntObs = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const el = entry.target;
          const target = parseInt(el.getAttribute('data-count'), 10);
          animateCounter(el, target, 1400);
          cntObs.unobserve(el);
        }
      });
    }, { threshold: 0.5 });
    counters.forEach(c => cntObs.observe(c));
  }

  /* ══════════════════════════════════════════
     MAGNETIC BUTTONS
  ══════════════════════════════════════════ */
  if (window.matchMedia('(pointer: fine)').matches) {
    document.querySelectorAll('.magnetic').forEach(el => {
      el.addEventListener('mousemove', e => {
        const r = el.getBoundingClientRect();
        const dx = (e.clientX - (r.left + r.width / 2)) * 0.25;
        const dy = (e.clientY - (r.top + r.height / 2)) * 0.25;
        el.style.transform = `translate(${dx}px, ${dy}px)`;
      });
      el.addEventListener('mouseleave', () => {
        el.style.transform = '';
      });
    });
  }

  /* ══════════════════════════════════════════
     FORM
  ══════════════════════════════════════════ */
  const form = document.querySelector('.contact-form');
  const formStatus = document.getElementById('form-status');
  if (form && formStatus) {
    form.addEventListener('submit', () => {
      formStatus.textContent = currentLang === 'ar' ? 'جاري الإرسال…' : 'Sending…';
      formStatus.style.color = 'var(--accent)';
    });
  }

  /* ══════════════════════════════════════════
     HERO ENTRANCE — stagger lines
  ══════════════════════════════════════════ */
  window.addEventListener('load', () => {
    const lines = document.querySelectorAll('.h1-line');
    lines.forEach((line, i) => {
      line.style.opacity = '0';
      line.style.transform = 'translateY(20px)';
      line.style.transition = `opacity 0.6s ease ${0.15 * i + 0.2}s, transform 0.6s ease ${0.15 * i + 0.2}s`;
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          line.style.opacity = '1';
          line.style.transform = 'none';
        });
      });
    });

    const badge = document.querySelector('.available-badge');
    if (badge) {
      badge.style.opacity = '0';
      badge.style.transition = 'opacity 0.5s ease 0.1s';
      requestAnimationFrame(() => requestAnimationFrame(() => badge.style.opacity = '1'));
    }
  });

})();
