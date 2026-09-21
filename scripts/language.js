(function () {
  const I18N = {
    title_home: { ru: 'Виктор Евстифеев', en: 'Viktor Evstifeev' },
    title_cv: { ru: 'Виктор Евстифеев — CV', en: 'Viktor Evstifeev — CV' },
    title_cases: { ru: 'Виктор Евстифеев — кейсы', en: 'Viktor Evstifeev — Cases' },
    designer: { ru: 'Дизайнер', en: 'Designer' },
    name: { ru: 'Виктор Евстифеев', en: 'Viktor Evstifeev' },
    contacts: { ru: 'Контакты', en: 'Contact' },
    tel_prefix: { ru: 'тел.', en: 'tel.' },
    tg_prefix: { ru: 'тг:', en: 'tg:' },
    currently_at: { ru: 'Сейчас свободен', en: 'Currently available' },
    links: { ru: 'Ссылки', en: 'Links' },
    cv_link: { ru: 'резюме', en: 'CV' },
    atom: { ru: 'Атом', en: 'Atom' },
    cv_more: {
      ru: 'Полное резюме — роли, результаты по проектам и сайд-проекты →',
      en: 'Full CV — roles, project results, and side work →'
    },
    habr: { ru: 'Хабр', en: 'Habr' },
    back: { ru: 'Назад', en: 'Back' },
    intro_before_atom: {
      ru: 'Дизайнер цифровых продуктов. Сейчас работаю над электромобилем в',
      en: 'Digital product designer. Currently designing an EV at'
    },
    intro_mid: { ru: 'Развиваю', en: 'Building' },
    intro_after: { ru: 'Работал над', en: 'Previously at' },
    mts_auto: { ru: 'МТС Авто', en: 'MTS Auto' },
    role_atom: { ru: 'Дизайн-лид, ATOM', en: 'Design Lead, ATOM' },
    role_mts: {
      ru: 'Дизайнер продукта → Арт-директор, МТС Авто',
      en: 'Product Designer → Art Director, MTS Auto'
    },
    role_vtb: { ru: 'Старший дизайнер, Банк ВТБ', en: 'Senior Designer, VTB Bank' },
    role_mobitel: {
      ru: 'Дизайн-лид, Mobitel x BetBoom',
      en: 'Design Lead, Mobitel × BetBoom'
    },
    role_proscom: {
      ru: 'Дизайнер, Proscom digital agency',
      en: 'Designer, Proscom digital agency'
    },
    about_label: { ru: 'Коротко', en: 'About' },
    about_text: {
      ru: 'Я создаю решения от идеи до запуска в продукте. Сейчас я руковожу дизайном в Атом и отвечаю за пользовательский опыт водителя в автомобиле, развитие функционала автомобильной ОС и дизайн-систему.',
      en: 'I take ideas from first sketch through to production. At Atom I lead design for the in-car driver experience, the automotive OS, and the design system.'
    },
    principles_label: { ru: 'Принципы', en: 'Principles' },
    principle_1: { ru: 'Начинать с проблемы', en: 'Start with the problem' },
    principle_2: {
      ru: 'Создавать истории, а не интерфейсы, придумывать контексты',
      en: 'Tell stories, not just ship screens — invent the context'
    },
    principle_3: { ru: 'Делать проще, но не ухудшать', en: 'Keep it simple without making it worse' },
    cases_notice: {
      ru: 'Сейчас ведутся работы по формированию кейсов. Всё будет — но скоро…',
      en: 'Case studies are in the works. More soon.'
    },
    case_atom_hmi: { ru: 'HMI электромобиля Атом', en: 'Atom EV HMI' },
    writing: { ru: 'Статьи', en: 'Writing' },
    talks: { ru: 'Выступления', en: 'Talks' },
    march_2026: { ru: 'Март 2026', en: 'March 2026' },
    december_2025: { ru: 'Декабрь 2025', en: 'December 2025' },
    talk_atom: {
      ru: 'Атом: 1000 и одна ночь дизайна',
      en: 'Atom: A Thousand and One Nights of Design'
    },
    role_title: { ru: 'Дизайнер цифровых продуктов', en: 'Digital product designer' },
    date_present: { ru: '2023 — 2026', en: '2023 — 2026' },
    atom_title: { ru: 'Дизайн-лид, ATOM', en: 'Design Lead, ATOM' },
    atom_summary: {
      ru: 'Вел продуктовый дизайн HMI компактного городского электромобиля — от первых концептов до системы, проходящей серийную валидацию. Руковожу командой дизайнеров и выстраиваю процессы совместной работы с инженерами, PM и внешними подрядчиками.',
      en: 'I lead product design for the HMI of a compact city EV — from first concepts through a system now in production validation. I run a design team and set up how we work with engineers, PMs, and external partners.'
    },
    key_results: { ru: 'Ключевые результаты:', en: 'Highlights' },
    atom_r1: {
      ru: 'Спроектировал 20+ сценариев взаимодействия для бортового экрана электромобиля в 6 итерациях — превысил пороговое значение индекса юзабилити HMX, подняв показатель до 75%+',
      en: 'Designed 20+ interaction scenarios for the in-car display across 6 iterations, lifting the HMX usability index above the 75% bar'
    },
    atom_r2: {
      ru: 'С командой построил kit с нуля: 300+ компонентов и токенов для HMI-платформы; разработал Figma-плагин для автоматизации рутинных процессов команды',
      en: 'Built a kit from scratch with the team: 300+ components and tokens for the HMI platform, plus a Figma plugin to take busywork off the team’s plate'
    },
    atom_r3: {
      ru: 'Создал 200+ интерактивных прототипов в связке с командой исследователей для валидации водительских сценариев',
      en: 'Created 200+ interactive prototypes with the research team to validate driver scenarios'
    },
    atom_r4: {
      ru: 'Руководил командой 6–10 человек (штатные дизайнеры и внешние подрядчики); наладил процессы дизайн-ревью',
      en: 'Led a team of 6–10 (in-house designers and contractors) and put design reviews in place'
    },
    atom_r5: {
      ru: 'Имел опыт формирования продуктовых требований совместно с инженерами, PM и внешними партнёрами',
      en: 'Wrote product requirements with engineers, PMs, and external partners'
    },
    atom_talk: {
      ru: 'Вкратце о проекте рассказывал на Sber Design Meetup',
      en: 'Talked through the project at Sber Design Meetup'
    },
    atom_site: { ru: 'Сайт электромобиля Атом', en: 'Atom EV website' },
    mts_title: { ru: 'Арт-директор, МТС Авто', en: 'Art Director, MTS Auto' },
    mts_summary: {
      ru: 'Развивал продуктовую экосистему: мобильные приложения, B2B-интерфейсы и HMI-платформу на базе Android Automotive OS для МТС и OEM-партнёров.',
      en: 'Grew the product ecosystem: mobile apps, B2B interfaces, and an HMI platform on Android Automotive OS for MTS and OEM partners.'
    },
    mts_r1: {
      ru: 'Масштабировал команду дизайна с 1 до 7 человек за год: вёл найм, онбординг, формировал структуру подгрупп',
      en: 'Scaled design from 1 to 7 people in a year — hiring, onboarding, and how the subgroups were structured'
    },
    mts_r2: {
      ru: 'Спроектировал продуктовую экосистему на 50–150 экранов: B2C iOS/Android приложение для вторичного авторынка, B2B-дашборд для операторов каршеринга, HMI для локализации импортируемых автомобилей',
      en: 'Designed a 50–150 screen product ecosystem: a B2C iOS/Android app for the used-car market, a B2B dashboard for car-sharing operators, and HMI for localizing imported vehicles'
    },
    mts_r3: {
      ru: 'Разработал HMI-платформу мультимедиа на базе Android Automotive OS (AOSP) для МТС и OEM-партнёров — КамАЗ, ВАЗ, Москвич',
      en: 'Shipped a multimedia HMI platform on Android Automotive OS (AOSP) for MTS and OEM partners — KAMAZ, VAZ, Moskvich'
    },
    mts_r4: {
      ru: 'Адаптировал дизайн-систему МТС под автомобильный домен: создал специализированный UI-кит с нуля на базе существующих токенов',
      en: 'Adapted the MTS design system for automotive: a domain-specific UI kit from scratch on the existing tokens'
    },
    mts_r5: {
      ru: 'Организовал цикл дизайн-исследований совместно с UX-лабораторией: полевые тесты с водителями, концепты и прототипы для передачи в разработку',
      en: 'Ran a research loop with the UX lab: field tests with drivers, concepts, and prototypes handed to engineering'
    },
    mts_r6: {
      ru: 'Провел несколько сессий проектирования совместно с партнерской командой промышленного дизайна по проектирванию авторегистратора',
      en: 'Ran several design sessions with an industrial-design partner team on a dashcam'
    },
    mts_case: { ru: 'Кейс МТС Авто', en: 'MTS Auto case' },
    vtb_title: {
      ru: 'Ведущий дизайнер продукта, Банк ВТБ (ПАО)',
      en: 'Lead Product Designer, VTB Bank'
    },
    vtb_summary: {
      ru: 'Вёл дизайн фронтальной группы модулей платформы ВТБ Стрим «Цели» — корпоративной сети для всех сотрудников банка.',
      en: 'Led design for the front-end module group of VTB Stream “Goals” — an internal network for everyone at the bank.'
    },
    vtb_r1: {
      ru: 'Спроектировал KPI, калькуляторы, рейтинги и систему наград — ключевые модули платформы «Цели»',
      en: 'Designed KPIs, calculators, rankings, and a rewards system — the core modules of “Goals”'
    },
    vtb_r2: {
      ru: 'Создал дизайн-систему проекта с нуля, синхронизировал с корпоративной ДС ВТБ',
      en: 'Built the project design system from scratch and aligned it with VTB’s corporate DS'
    },
    vtb_r3: {
      ru: 'Выстроил коммуникацию дизайн-команды с разработкой и бизнесом; интегрировал модули продукта в смежные команды',
      en: 'Set up how design worked with engineering and the business, and rolled the modules into adjacent teams'
    },
    vtb_r4: {
      ru: 'Проводил исследования с сотрудниками банка; на основе данных готовил спецификации на новые функции',
      en: 'Researched with bank employees and turned the findings into specs for new features'
    },
    betboom_title: { ru: 'Дизайн-лид, BetBoom', en: 'Design Lead, BetBoom' },
    betboom_summary: {
      ru: 'Проектировал мобильные продукты Bingoboom и BetBoom для iOS и Android.',
      en: 'Designed Bingoboom and BetBoom for iOS and Android.'
    },
    betboom_r1: {
      ru: 'Разработал пользовательские сценарии и прототипы разной точности для мобильных продуктов (iOS/Android, App Store)',
      en: 'Mapped user flows and built low- to high-fidelity prototypes for iOS/Android (App Store)'
    },
    betboom_r2: {
      ru: 'Спроектировал UI-концепции, библиотеки иконок и UI guidelines; адаптировал интерфейсы под iOS, Android и различные разрешения экрана',
      en: 'Designed UI concepts, icon libraries, and UI guidelines; adapted layouts for iOS, Android, and screen sizes'
    },
    betboom_r3: {
      ru: 'Контролировал вёрстку, составлял технические задания для разработчиков; координировал работу junior-дизайнеров',
      en: 'Reviewed implementation, wrote specs for engineers, and coordinated junior designers'
    },
    betboom_r4: {
      ru: 'Создавал UI-анимации в Principle и InVision',
      en: 'Built UI motion in Principle and InVision'
    },
    betboom_store: { ru: 'BetBoom в App Store', en: 'BetBoom on the App Store' },
    proscom_title: {
      ru: 'Web-дизайнер, Proscom Digital Agency',
      en: 'Web Designer, Proscom'
    },
    proscom_summary: {
      ru: 'Проектировал интерфейсы аналитических систем, мобильных приложений и digital-сервисов для государственных и коммерческих клиентов.',
      en: 'Designed interfaces for analytics systems, mobile apps, and digital services for government and commercial clients.'
    },
    proscom_r1: {
      ru: 'Разработал UX/UI для информационной системы лаборатории Observe the Sun, сервиса медицинских консультаций Medcab, приложения каршеринга Anytime и алмазной биржи Diamaza',
      en: 'Designed UX/UI for Observe the Sun (a lab information system), Medcab (medical consultations), Anytime (car sharing), and Diamaza (a diamond exchange)'
    },
    proscom_r2: {
      ru: 'Спроектировал таск-трекер Worker для корпоративного интранета и брендинг киберспортивного чемпионата по League of Legends',
      en: 'Designed Worker, a task tracker for a corporate intranet, and branding for a League of Legends championship'
    },
    proscom_r3: {
      ru: 'Победил в конкурсах G8 и «Золотой сайт»; прошёл первый тур конкурса Яндекс Мобилизация',
      en: 'Won G8 and Golden Site awards; reached the first round of Yandex Mobilization'
    },
    sun_case: { ru: 'Кейс «Солнце»', en: '“The Sun” case' },
    hse_case: { ru: 'Кейс ВШЭ', en: 'HSE case' },
    fss_case: { ru: 'Кейс Фонд Соцстрахования', en: 'Social Insurance Fund case' },
    lol_case: { ru: 'Кейс League of Legends', en: 'League of Legends case' },
    side_projects: { ru: 'Мои проекты', en: 'Side projects' },
    plugin_title: {
      ru: 'Плагин локализации данных Figma и присвоения уникальных идентификаторов для текста',
      en: 'Figma plugin for localizing copy and assigning unique IDs to text'
    },
    plugin_meta: {
      ru: 'Figma плагин (в процессе публикации в Community)',
      en: 'Figma plugin (being published to Community)'
    },
    car3d_title: { ru: 'Генератор 3D форм', en: '3D form generator' },
    car3d_meta: {
      ru: 'Внутренний проект для дизайн команды Атом, который призван помочь в создании 3D автомобилей для интерфейсов',
      en: 'An internal tool for Atom’s design team — it helps us make 3D cars for in-car interfaces'
    },
    p1nmark_title: {
      ru: 'Сделал расширение для Chrome, которое превращает закладки в визуальный Pinterest',
      en: 'A Chrome extension that turns bookmarks into a visual Pinterest'
    },
    p1nmark_meta: {
      ru: 'Если вы, как и я, сохраняете десятки ссылок «на потом», то знаете финал: через неделю это кладбище закладок, где ничего не находится. Я решил подойти к проблеме как к продукту: сделать стартовую страницу/менеджер, где закладки ведут себя как коллекции.',
      en: 'If you save dozens of links “for later,” you already know the ending: a week later it’s a bookmark graveyard. I treated it as a product problem and built a start page where bookmarks work like collections.'
    }
  };

  function detectLanguage() {
    const stored = localStorage.getItem('site-language');
    if (stored === 'en' || stored === 'ru') return stored;
    const locale = (navigator.language || 'ru').toLowerCase();
    return locale.startsWith('ru') ? 'ru' : 'en';
  }

  function t(key, language) {
    const pack = I18N[key];
    if (!pack) return null;
    return pack[language] || pack.ru;
  }

  function applyLanguage(language) {
    const lang = language === 'en' ? 'en' : 'ru';

    document.querySelectorAll('[data-i18n]').forEach((el) => {
      const value = t(el.getAttribute('data-i18n'), lang);
      if (value != null) el.textContent = value;
    });

    document.querySelectorAll('[data-i18n-aria]').forEach((el) => {
      const value = t(el.getAttribute('data-i18n-aria'), lang);
      if (value != null) el.setAttribute('aria-label', value);
    });

    document.documentElement.lang = lang;
    document.documentElement.dataset.language = lang;
    localStorage.setItem('site-language', lang);

    const ruButton = document.querySelector('[data-language-choice="ru"]');
    const enButton = document.querySelector('[data-language-choice="en"]');
    if (ruButton && enButton) {
      ruButton.classList.toggle('is-active', lang === 'ru');
      enButton.classList.toggle('is-active', lang === 'en');
      ruButton.setAttribute('aria-pressed', String(lang === 'ru'));
      enButton.setAttribute('aria-pressed', String(lang === 'en'));
    }
  }

  function createLanguageSwitcher() {
    if (document.documentElement.hasAttribute('data-hide-language-switcher')) {
      return;
    }

    const style = document.createElement('style');
    style.textContent = `
      .language-switcher {
        display: inline-flex;
        gap: 12px;
      }
      .language-switcher--inline {
        display: inline-flex;
        gap: 10px;
        align-items: center;
      }
      .language-switcher--fixed {
        position: fixed;
        top: 20px;
        left: 20px;
        z-index: 9999;
        gap: 4px;
        padding: 4px;
        border: 1px solid rgba(0, 0, 0, 0.12);
        border-radius: 999px;
        background: rgba(255, 255, 255, 0.82);
        backdrop-filter: blur(10px);
        box-shadow: 0 8px 24px rgba(0, 0, 0, 0.08);
      }
      .language-switcher__button {
        border: 0;
        padding: 0;
        background: transparent;
        color: var(--text, #000);
        font: 500 16px/24px inherit;
        cursor: pointer;
        opacity: 0.45;
        transition: opacity .2s;
      }
      .language-switcher--fixed .language-switcher__button {
        border-radius: 999px;
        padding: 7px 10px;
        font: 600 12px/1 -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
      }
      .language-switcher__button.is-active {
        opacity: 1;
      }
      .language-switcher--fixed .language-switcher__button.is-active {
        background: #000;
        color: #fff;
      }
      @media (max-width: 640px) {
        .language-switcher--fixed { top: 12px; left: 12px; }
      }
      @media (prefers-color-scheme: dark) {
        .language-switcher--fixed {
          border-color: rgba(255, 255, 255, 0.14);
          background: rgba(20, 20, 20, 0.82);
        }
        .language-switcher--fixed .language-switcher__button.is-active {
          background: #fff;
          color: #000;
        }
      }
      html[data-hide-language-switcher] .language-switcher {
        display: none !important;
      }
    `;
    document.head.appendChild(style);

    const switcher = document.createElement('div');
    switcher.className = 'language-switcher';
    switcher.setAttribute('role', 'group');
    switcher.setAttribute('aria-label', 'Language');
    switcher.innerHTML = `
      <button class="language-switcher__button" type="button" data-language-choice="ru">RU</button>
      <button class="language-switcher__button" type="button" data-language-choice="en">EN</button>
    `;
    switcher.addEventListener('click', (event) => {
      const button = event.target.closest('[data-language-choice]');
      if (button) applyLanguage(button.dataset.languageChoice);
    });

    const host = document.querySelector('[data-language-switcher-host]');
    if (!host) {
      return;
    }
    switcher.classList.add('language-switcher--inline');
    host.appendChild(switcher);
  }

  document.addEventListener('DOMContentLoaded', () => {
    createLanguageSwitcher();
    applyLanguage(detectLanguage());
  });
}());
