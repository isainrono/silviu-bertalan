/* ============================================================
   SILVIU — Luxury Personal Brand
   Main JavaScript
   ============================================================ */

/* ── 1. Language Toggle ──────────────────────────────────── */
const translations = {
  en: {
    // Nav
    'nav.about':      'About',
    'nav.experience': 'Experience',
    'nav.expertise':  'Expertise',
    'nav.contact':    'Contact',

    // Hero
    'hero.eyebrow':   'Luxury Retail Consultant',
    'hero.cta':       'Discover my story',
    'hero.stat1':     'Years in\nLuxury',
    'hero.stat2':     'Luxury\nBrands',
    'hero.stat3':     'Global\nCities',
    'hero.location':  'Barcelona, Spain',
    'hero.scroll':    'Scroll',

    // About
    'about.eyebrow':  'About',
    'about.heading':  'Crafting Excellence\nin Every Interaction',
    'about.bio':      'As a <strong>Team Leader at Loewe</strong>, I bring over 15 years of international luxury retail experience — built across London and Barcelona, with houses including <strong>Selfridges, Dries Van Noten, Mary Katrantzou and 24 Sèvres</strong>. I drive team performance and create <strong>memorable client experiences</strong> that reflect the heritage and excellence of the world\'s finest brands.',
    'about.bio2':     'I am committed to helping the team strive and reach their goals, maintaining a <strong>healthy work environment</strong> and a strong relationship both with the team and with the clients, to ensure positive and successful results are being achieved.',
    'about.detail1.label': 'Location',
    'about.detail1.value': 'Barcelona, Catalonia, Spain',
    'about.detail2.label': 'Languages',
    'about.detail2.value': 'Spanish · English · Romanian',
    'about.detail3.label': 'Sector',
    'about.detail3.value': 'Luxury Retail',
    'about.detail4.label': 'Availability',
    'about.detail4.value': 'Open to opportunities',

    // Experience
    'exp.eyebrow':   'Career',
    'exp.heading':   'Professional\nJourney',

    'exp.item1.date':    'Jan 2024 — Present',
    'exp.item1.badge':   'Current',
    'exp.item1.role':    'Team Leader',
    'exp.item1.company': 'Loewe',
    'exp.item1.location':'Barcelona',
    'exp.item1.desc':    'Leading a high-performance sales team within one of the most prestigious luxury houses in the world. Responsible for driving team performance, mentoring staff, and ensuring every client interaction reflects the house\'s heritage of craftsmanship and excellence. Managing floor operations, setting sales targets, and fostering a culture of exceeding client expectations.',

    'exp.item2.date':    'Jul 2022 — Jan 2024',
    'exp.item2.badge':   '1 yr 6 mo',
    'exp.item2.role':    'Senior Sales Assistant',
    'exp.item2.company': 'Loewe',
    'exp.item2.location':'Barcelona',
    'exp.item2.desc':    'Delivered white-glove client experiences in alignment with Loewe\'s values of creativity and craftsmanship. Developed deep product expertise across leather goods, ready-to-wear, and accessories. Built a loyal client portfolio through personalised service and a genuine passion for the brand\'s heritage.',

    'exp.item3.date':    'Dec 2020 — Jul 2022',
    'exp.item3.badge':   '1 yr 8 mo',
    'exp.item3.role':    'Sales Assistant',
    'exp.item3.company': 'Etnia Barcelona',
    'exp.item3.location':'Barcelona',
    'exp.item3.desc':    'Provided expert styling advice and product knowledge in a dynamic luxury eyewear environment. Built strong client relationships and consistently surpassed individual sales targets through a consultative and personalised approach.',

    'exp.item4.date':    'Aug 2019 — Oct 2020',
    'exp.item4.badge':   '1 yr 2 mo',
    'exp.item4.role':    'Sales Assistant',
    'exp.item4.company': 'SMAK',
    'exp.item4.location':'Barcelona',
    'exp.item4.desc':    'Delivered outstanding customer experiences in a premium retail environment in Barcelona, applying expertise and a refined client approach developed throughout years in international luxury. Consistently exceeded sales targets through personalised product knowledge and service excellence.',

    'exp.item5.date':    'Feb 2017 — Sep 2019',
    'exp.item5.badge':   '2 yrs 8 mo',
    'exp.item5.role':    'Brand Specialist — Dries Van Noten',
    'exp.item5.company': 'Selfridges',
    'exp.item5.location':'London, UK',
    'exp.item5.desc':    'Acted as the dedicated in-store brand ambassador for Dries Van Noten within one of London\'s most iconic luxury department stores. Developed deep expertise in the brand\'s design philosophy and heritage, curating a bespoke clienteling experience for an international, high-net-worth clientele.',

    'exp.item6.date':    'Feb 2015 — Nov 2017',
    'exp.item6.badge':   '2 yrs 9 mo',
    'exp.item6.role':    'Brand Specialist — Mary Katrantzou',
    'exp.item6.company': 'Selfridges',
    'exp.item6.location':'London, UK',
    'exp.item6.desc':    'Represented the Mary Katrantzou brand at Selfridges\' Oxford Street flagship, providing an elevated and personalised shopping experience. Responsible for brand storytelling, building client relationships and driving sales for one of fashion\'s most distinctive creative voices.',

    'exp.item7.date':    'Feb 2014 — Jan 2015',
    'exp.item7.badge':   '1 yr',
    'exp.item7.role':    'Sales Assistant — Women\'s Designer',
    'exp.item7.company': 'Selfridges',
    'exp.item7.location':'London, UK',
    'exp.item7.desc':    'Worked within the prestigious Women\'s Designer galleries at Selfridges, assisting an international clientele across multiple luxury ready-to-wear brands. Developed a strong foundation in multi-brand luxury retail, styling, and high-end customer service.',

    'exp.item8.date':    'Dec 2013 — Feb 2014',
    'exp.item8.badge':   '3 mo',
    'exp.item8.role':    'Brand Assistant — Qloe',
    'exp.item8.company': 'Qloe at Selfridges',
    'exp.item8.location':'London, UK',
    'exp.item8.desc':    'Represented the Qloe brand concession within Selfridges, delivering a refined experience to a fashion-forward clientele. Gained first-hand exposure to the unique dynamics of operating a designer brand within a world-class luxury department store.',

    'exp.item9.date':    'Nov 2010 — Dec 2011',
    'exp.item9.badge':   '1 yr 2 mo',
    'exp.item9.role':    'Sales Assistant',
    'exp.item9.company': '24 Sèvres',
    'exp.item9.location':'London, UK',
    'exp.item9.desc':    'Began a distinguished international luxury retail career at 24 Sèvres in London, developing a solid foundation in luxury clienteling, product expertise, and the exceptional service standards that define the world\'s leading fashion houses.',

    // Expertise
    'exp2.eyebrow':  'Expertise',
    'exp2.heading':  'Areas of\nSpecialisation',

    'card1.title':   'Client Relations',
    'card1.text':    'Building lasting relationships with high-net-worth clients through personalised service and genuine engagement.',
    'card1.li1':     'VIP Client Management',
    'card1.li2':     'Client Portfolio Development',
    'card1.li3':     'Relationship Building',

    'card2.title':   'Team Leadership',
    'card2.text':    'Inspiring and developing high-performing retail teams to achieve exceptional results.',
    'card2.li1':     'Performance Management',
    'card2.li2':     'Staff Training & Mentoring',
    'card2.li3':     'Operational Excellence',

    'card3.title':   'Luxury Product',
    'card3.text':    'Deep expertise across luxury categories with a refined aesthetic sensibility and brand knowledge.',
    'card3.li1':     'Leather Goods & RTW',
    'card3.li2':     'Luxury Eyewear',
    'card3.li3':     'Brand Heritage & Storytelling',

    // Brands
    'brands.label':  'Experience with world-class luxury houses — London · Barcelona',

    // Contact
    'contact.eyebrow': 'Contact',
    'contact.tagline': 'Let\'s create\nsomething\n<em>extraordinary</em>',
    'contact.info.loc': 'Barcelona, Spain',
    'contact.info.avail': 'Open to new opportunities',
    'contact.info.lang': 'ES · EN · RO',
    'form.name':     'Full Name',
    'form.email':    'Email Address',
    'form.subject':  'Subject',
    'form.message':  'Your Message',
    'form.submit':   'Send Message →',
    'form.success':  'Thank you. Your message has been sent.',

    // Footer
    'footer.copy':   '© 2025 Silviu Bertalan. All rights reserved.',
  },

  es: {
    // Nav
    'nav.about':      'Sobre Mí',
    'nav.experience': 'Experiencia',
    'nav.expertise':  'Especialidades',
    'nav.contact':    'Contacto',

    // Hero
    'hero.eyebrow':   'Consultor de Lujo',
    'hero.cta':       'Descubre mi trayectoria',
    'hero.stat1':     'Años en\nel Lujo',
    'hero.stat2':     'Marcas\nde Lujo',
    'hero.stat3':     'Ciudades\nGlobales',
    'hero.location':  'Barcelona, España',
    'hero.scroll':    'Scroll',

    // About
    'about.eyebrow':  'Sobre Mí',
    'about.heading':  'Creando Excelencia\nen Cada Interacción',
    'about.bio':      'Como <strong>Team Leader en Loewe</strong>, aporto más de 15 años de experiencia internacional en el retail de lujo — construida entre Londres y Barcelona, con casas como <strong>Selfridges, Dries Van Noten, Mary Katrantzou y 24 Sèvres</strong>. Impulso el rendimiento del equipo y creo <strong>experiencias memorables</strong> que reflejan el patrimonio y la excelencia de las mejores marcas del mundo.',
    'about.bio2':     'Estoy comprometido con ayudar al equipo a alcanzar sus objetivos, manteniendo un <strong>ambiente de trabajo saludable</strong> y una sólida relación tanto con el equipo como con los clientes, para garantizar resultados positivos y exitosos.',
    'about.detail1.label': 'Ubicación',
    'about.detail1.value': 'Barcelona, Cataluña, España',
    'about.detail2.label': 'Idiomas',
    'about.detail2.value': 'Español · Inglés · Rumano',
    'about.detail3.label': 'Sector',
    'about.detail3.value': 'Retail de Lujo',
    'about.detail4.label': 'Disponibilidad',
    'about.detail4.value': 'Abierto a oportunidades',

    // Experience
    'exp.eyebrow':   'Trayectoria',
    'exp.heading':   'Recorrido\nProfesional',

    'exp.item1.date':    'Ene 2024 — Presente',
    'exp.item1.badge':   'Actual',
    'exp.item1.role':    'Team Leader',
    'exp.item1.company': 'Loewe',
    'exp.item1.location':'Barcelona',
    'exp.item1.desc':    'Liderando un equipo de ventas de alto rendimiento en una de las casas de lujo más prestigiosas del mundo. Responsable de impulsar el rendimiento del equipo, mentorizar al personal y garantizar que cada interacción con el cliente refleje el patrimonio de artesanía y excelencia de la maison. Gestión de operaciones en planta, establecimiento de objetivos de ventas y fomento de una cultura de superación de expectativas.',

    'exp.item2.date':    'Jul 2022 — Ene 2024',
    'exp.item2.badge':   '1 año 6 m',
    'exp.item2.role':    'Senior Sales Assistant',
    'exp.item2.company': 'Loewe',
    'exp.item2.location':'Barcelona',
    'exp.item2.desc':    'Experiencias de cliente de primer nivel en línea con los valores de creatividad y artesanía de Loewe. Desarrollo de un profundo conocimiento del producto en marroquinería, prêt-à-porter y accesorios. Construcción de una cartera de clientes fidelizados mediante un servicio personalizado y una genuina pasión por el patrimonio de la marca.',

    'exp.item3.date':    'Dic 2020 — Jul 2022',
    'exp.item3.badge':   '1 año 8 m',
    'exp.item3.role':    'Sales Assistant',
    'exp.item3.company': 'Etnia Barcelona',
    'exp.item3.location':'Barcelona',
    'exp.item3.desc':    'Asesoramiento experto en estilo y conocimiento del producto en un entorno de óptica de lujo. Construcción de relaciones sólidas con los clientes y superación constante de los objetivos de ventas individuales mediante un enfoque consultivo y personalizado.',

    'exp.item4.date':    'Ago 2019 — Oct 2020',
    'exp.item4.badge':   '1 año 2 m',
    'exp.item4.role':    'Sales Assistant',
    'exp.item4.company': 'SMAK',
    'exp.item4.location':'Barcelona',
    'exp.item4.desc':    'Experiencias de cliente excepcionales en un entorno de retail premium en Barcelona, aplicando la experiencia y el enfoque refinado desarrollados durante años en el lujo internacional. Superación constante de los objetivos de ventas individuales gracias al conocimiento del producto y la excelencia en el servicio.',

    'exp.item5.date':    'Feb 2017 — Sep 2019',
    'exp.item5.badge':   '2 años 8 m',
    'exp.item5.role':    'Brand Specialist — Dries Van Noten',
    'exp.item5.company': 'Selfridges',
    'exp.item5.location':'Londres, Reino Unido',
    'exp.item5.desc':    'Embajador de marca en tienda para Dries Van Noten en uno de los grandes almacenes de lujo más icónicos de Londres. Desarrollo de una profunda expertise en la filosofía de diseño y el patrimonio de la marca, creando una experiencia de clienteling a medida para una clientela internacional de alto poder adquisitivo.',

    'exp.item6.date':    'Feb 2015 — Nov 2017',
    'exp.item6.badge':   '2 años 9 m',
    'exp.item6.role':    'Brand Specialist — Mary Katrantzou',
    'exp.item6.company': 'Selfridges',
    'exp.item6.location':'Londres, Reino Unido',
    'exp.item6.desc':    'Representación de la marca Mary Katrantzou en el flagship de Oxford Street de Selfridges, ofreciendo una experiencia de compra elevada y personalizada. Responsable del storytelling de marca, construcción de relaciones con clientes e impulso de ventas de una de las voces creativas más distintivas de la moda.',

    'exp.item7.date':    'Feb 2014 — Ene 2015',
    'exp.item7.badge':   '1 año',
    'exp.item7.role':    'Sales Assistant — Moda Mujer',
    'exp.item7.company': 'Selfridges',
    'exp.item7.location':'Londres, Reino Unido',
    'exp.item7.desc':    'Trabajo en las prestigiosas galerías de Diseñador Mujer de Selfridges, asistiendo a una clientela internacional en múltiples marcas de lujo prêt-à-porter. Desarrollo de una sólida base en el retail de lujo multimarca, estilismo y atención al cliente de alto nivel.',

    'exp.item8.date':    'Dic 2013 — Feb 2014',
    'exp.item8.badge':   '3 meses',
    'exp.item8.role':    'Brand Assistant — Qloe',
    'exp.item8.company': 'Qloe en Selfridges',
    'exp.item8.location':'Londres, Reino Unido',
    'exp.item8.desc':    'Representación de la concesión de la marca Qloe dentro de Selfridges, ofreciendo una experiencia refinada a una clientela amante de la moda. Exposición directa a las dinámicas únicas de operar una marca de diseñador en un gran almacén de lujo de primer nivel mundial.',

    'exp.item9.date':    'Nov 2010 — Dic 2011',
    'exp.item9.badge':   '1 año 2 m',
    'exp.item9.role':    'Sales Assistant',
    'exp.item9.company': '24 Sèvres',
    'exp.item9.location':'Londres, Reino Unido',
    'exp.item9.desc':    'Inicio de una distinguida carrera en el retail de lujo internacional en 24 Sèvres en Londres, desarrollando una sólida base en clienteling de lujo, expertise de producto y los excepcionales estándares de servicio que definen a las principales casas de moda del mundo.',

    // Expertise
    'exp2.eyebrow':  'Especialidades',
    'exp2.heading':  'Áreas de\nEspecialización',

    'card1.title':   'Relaciones con Clientes',
    'card1.text':    'Construcción de relaciones duraderas con clientes de alto poder adquisitivo a través de un servicio personalizado.',
    'card1.li1':     'Gestión de Clientes VIP',
    'card1.li2':     'Desarrollo de Cartera',
    'card1.li3':     'Fidelización de Clientes',

    'card2.title':   'Liderazgo de Equipos',
    'card2.text':    'Inspirar y desarrollar equipos de retail de alto rendimiento para lograr resultados excepcionales.',
    'card2.li1':     'Gestión del Rendimiento',
    'card2.li2':     'Formación y Mentoring',
    'card2.li3':     'Excelencia Operacional',

    'card3.title':   'Producto de Lujo',
    'card3.text':    'Amplia experiencia en categorías de lujo con una refinada sensibilidad estética y conocimiento de marca.',
    'card3.li1':     'Marroquinería y RTW',
    'card3.li2':     'Óptica de Lujo',
    'card3.li3':     'Herencia y Storytelling de Marca',

    // Brands
    'brands.label':  'Experiencia con las mejores casas de lujo del mundo — Londres · Barcelona',

    // Contact
    'contact.eyebrow': 'Contacto',
    'contact.tagline': 'Creemos algo\nverdaderamente\n<em>extraordinario</em>',
    'contact.info.loc': 'Barcelona, España',
    'contact.info.avail': 'Abierto a nuevas oportunidades',
    'contact.info.lang': 'ES · EN · RO',
    'form.name':     'Nombre Completo',
    'form.email':    'Correo Electrónico',
    'form.subject':  'Asunto',
    'form.message':  'Tu Mensaje',
    'form.submit':   'Enviar Mensaje →',
    'form.success':  'Gracias. Tu mensaje ha sido enviado.',

    // Footer
    'footer.copy':   '© 2025 Silviu Bertalan. Todos los derechos reservados.',
  }
};

let currentLang = localStorage.getItem('lang') || 'en';

function applyLanguage(lang) {
  currentLang = lang;
  localStorage.setItem('lang', lang);
  document.documentElement.lang = lang;

  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.dataset.i18n;
    const value = translations[lang][key];
    if (value === undefined) return;

    if (el.dataset.i18nHtml === 'true') {
      el.innerHTML = value.replace(/\n/g, '<br>');
    } else {
      el.textContent = value;
    }
  });

  // Update lang toggle buttons
  document.querySelectorAll('.lang-toggle__btn').forEach(btn => {
    btn.classList.toggle('is-active', btn.dataset.lang === lang);
  });
}

/* ── 2. Navigation ───────────────────────────────────────── */
function initNav() {
  const nav = document.querySelector('.nav');
  const hamburger = document.querySelector('.nav__hamburger');
  const mobileMenu = document.querySelector('.nav__mobile-menu');

  // Scroll effect
  window.addEventListener('scroll', () => {
    nav.classList.toggle('nav--scrolled', window.scrollY > 40);
  }, { passive: true });

  // Hamburger
  hamburger?.addEventListener('click', () => {
    hamburger.classList.toggle('is-open');
    mobileMenu?.classList.toggle('is-open');
    document.body.style.overflow = mobileMenu?.classList.contains('is-open') ? 'hidden' : '';
  });

  // Close mobile menu on link click
  mobileMenu?.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      hamburger.classList.remove('is-open');
      mobileMenu.classList.remove('is-open');
      document.body.style.overflow = '';
    });
  });

  // Active nav state via IntersectionObserver
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav__link[href^="#"]');

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        navLinks.forEach(link => {
          link.classList.toggle('is-active', link.getAttribute('href') === `#${entry.target.id}`);
        });
      }
    });
  }, { rootMargin: '-40% 0px -55% 0px' });

  sections.forEach(s => observer.observe(s));
}

/* ── 3. Scroll Animations ────────────────────────────────── */
function initAnimations() {
  const animEls = document.querySelectorAll('[data-animate]');
  if (!animEls.length) return;

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });

  animEls.forEach(el => observer.observe(el));
}

/* ── 4. Contact Form ─────────────────────────────────────── */
function initForm() {
  const form = document.querySelector('.contact__form');
  const successMsg = document.querySelector('.form__success');
  if (!form) return;

  form.addEventListener('submit', e => {
    e.preventDefault();
    const btn = form.querySelector('.form__submit');
    const originalText = btn.textContent;

    btn.textContent = currentLang === 'en' ? 'Sending...' : 'Enviando...';
    btn.disabled = true;

    // Simulate send — wire to Formspree/EmailJS here
    setTimeout(() => {
      form.style.display = 'none';
      successMsg?.classList.add('is-visible');
    }, 1200);
  });
}

/* ── 5. Lang Toggle Init ─────────────────────────────────── */
function initLangToggle() {
  document.querySelectorAll('.lang-toggle__btn').forEach(btn => {
    btn.addEventListener('click', () => applyLanguage(btn.dataset.lang));
  });
}

/* ── Init ────────────────────────────────────────────────── */
document.addEventListener('DOMContentLoaded', () => {
  initNav();
  initAnimations();
  initForm();
  initLangToggle();
  applyLanguage(currentLang);
});
