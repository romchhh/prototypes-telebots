export type Locale = 'uk' | 'pl' | 'en'

export const LOCALES: { id: Locale; label: string }[] = [
  { id: 'uk', label: 'UA' },
  { id: 'pl', label: 'PL' },
  { id: 'en', label: 'EN' },
]

export const DEFAULT_LOCALE: Locale = 'uk'

type Dict = {
  navAbout: string
  navServices: string
  navExperience: string
  navGallery: string
  navFaq: string
  navContact: string
  ctaConsult: string
  ctaInstagram: string
  openMenu: string
  closeMenu: string

  heroHeadlineBefore: string
  heroHeadlineAccent: string
  heroHeadlineAfter: string
  heroLead: string
  heroStat1Label: string
  heroStat2Label: string
  heroStat3Label: string
  heroStat3Value: string

  quote: string
  quoteRole: string

  aboutHeading: string
  aboutHeadingEm: string
  aboutLead: string
  skills: string[]

  servicesHeading: string
  servicesHeadingEm: string
  servicesMore: string
  offerings: Record<string, { title: string; desc: string }>

  experienceHeading: string
  experienceHeadingEm: string
  experience: Record<string, { role: string; place: string; location: string; highlights: string[] }>

  galleryHeading: string
  galleryHeadingEm: string
  galleryLead: string
  galleryOpen: string

  faqHeading: string
  faqHeadingEm: string
  faqLead: string
  faqCta: string
  faqTabs: { id: string; label: string; items: { q: string; a: string }[] }[]

  contactHeading: string
  contactHeadingEm: string
  contactLead: string
  contactVisual: string
  bookingTitle: string
  bookingHint: string
  platformZnany: string
  platformLekarze: string
  platformOwn: string
  comingSoon: string
  clinicsTitle: string
  clinicsNote: string

  socialsHeading: string
  socialsHeadingEm: string

  footerRole: string
  footerRoleLine1: string
  footerRoleLine2: string
  footerContact: string
  footerSocial: string
  footerRights: string
  footerPrivacy: string

  modalTitle: string
  modalOr: string
  modalWrite: string
}

export const DICTS: Record<Locale, Dict> = {
  uk: {
    navAbout: 'Про мене',
    navServices: 'Послуги',
    navExperience: 'Досвід',
    navGallery: 'Галерея',
    navFaq: 'FAQ',
    navContact: 'Контакт',
    ctaConsult: 'Записатись на консультацію',
    ctaInstagram: 'Instagram',
    openMenu: 'Відкрити меню',
    closeMenu: 'Закрити',

    heroHeadlineBefore: 'Протезна та реконструктивна',
    heroHeadlineAccent: 'урологія',
    heroHeadlineAfter: 'і андрологія',
    heroLead:
      'Лікар-уролог у Щецині. Спеціалізуюсь на протезній і реконструктивній урології, хірургічній та регенеративній андрології, сексуальній медицині. Цей сайт — розширення мого Instagram: більше про операції, освіту та шлях пацієнта.',
    heroStat1Label: 'напрями спеціалізації',
    heroStat2Label: 'платформи запису',
    heroStat3Label: 'Щецин · Польща',
    heroStat3Value: 'PL · UA',

    quote:
      'Освіта та довіра важливіші за рекламу. Пояснюю показання, ризики й очікування — щоб пацієнт приймав рішення усвідомлено.',
    quoteRole: 'Уролог · Андролог',

    aboutHeading: 'Урологія та андрологія,',
    aboutHeadingEm: 'сучасні стандарти',
    aboutLead:
      'Працюю з протезною й реконструктивною урологією, хірургічною та регенеративною андрологією й сексуальною медициною — від консультації до супроводу після операції.',
    skills: [
      'Протезна урологія',
      'Реконструктивна урологія',
      'Хірургічна андрологія',
      'Регенеративна андрологія',
      'Сексуальна медицина',
      'Освітній контент',
    ],

    servicesHeading: 'Чим я',
    servicesHeadingEm: 'займаюсь',
    servicesMore: 'Дізнатись більше',
    offerings: {
      prosthetic: {
        title: 'Протезна урологія',
        desc: 'Опис показань, етапів і реабілітації при протезуванні — освітній матеріал для пацієнтів.',
      },
      andrology: {
        title: 'Хірургічна та регенеративна андрологія',
        desc: 'Підходи в андрології: коли розглядають хірургію, а коли — регенеративні методи.',
      },
      sexual: {
        title: 'Сексуальна медицина',
        desc: 'Консультації з питань сексуального здоров’я чоловіків у спокійному, професійному форматі.',
      },
      reconstructive: {
        title: 'Реконструктивна урологія',
        desc: 'Огляд реконструктивних втручань та логіки планування лікування.',
      },
      consultations: {
        title: 'Консультації',
        desc: 'Запис через ZnanyLekarz, Lekarze bez kolejki та партнерські клініки — без продажу на сайті.',
      },
      education: {
        title: 'Освіта для пацієнтів',
        desc: 'Розширені матеріали до Reels і Stories: статті, пояснення операцій, відповіді на часті питання.',
      },
    },

    experienceHeading: 'Від клініки',
    experienceHeadingEm: 'до конгресів',
    experience: {
      szczecin: {
        role: 'Уролог',
        place: 'Практика · Szczecin',
        location: 'Польща',
        highlights: [
          'Консультації та операційна робота',
          'Партнерські приватні клініки',
          'Супровід пацієнтів до й після втручань',
        ],
      },
      congress: {
        role: 'Учасник',
        place: 'Міжнародні конгреси',
        location: 'EU / International',
        highlights: [
          'Обмін досвідом у протезній і реконструктивній урології',
          'Андрологія та сексуальна медицина',
          'Публікації й доповіді (розділ буде поповнюватись)',
        ],
      },
      training: {
        role: 'Спеціалізація',
        place: 'Клінічна підготовка',
        location: 'UA · PL',
        highlights: [
          'Хірургічний трек в урології',
          'Робота в мультидисциплінарних командах',
          'Постійне навчання та сертифікації',
        ],
      },
    },

    galleryHeading: 'Галерея',
    galleryHeadingEm: 'операцій і практики',
    galleryLead:
      'Фото й відео з операцій, конгресів і клінічної роботи. Повний контент з’явиться після передачі матеріалів — зараз плейсхолдери.',
    galleryOpen: 'Відкрити фото',

    faqHeading: 'Залишились',
    faqHeadingEm: 'питання?',
    faqLead:
      'Не знайшли відповідь? Запишіться на консультацію через платформи нижче — без форм продажу на сайті.',
    faqCta: 'Записатись',
    faqTabs: [
      {
        id: 'visit',
        label: 'Візит',
        items: [
          {
            q: 'Як записатись на консультацію?',
            a: 'Через ZnanyLekarz, Lekarze bez kolejki або партнерські клініки. Посилання зібрані в розділі Контакт. На сайті немає продажу послуг.',
          },
          {
            q: 'Де проходять операції?',
            a: 'У партнерських приватних клініках. Список клінік і посилання на запис — у розділі Контакт; власний кабінет/клініка — у планах.',
          },
          {
            q: 'Чи є форма на сайті?',
            a: 'На першому етапі — ні. Структура сайту вже готова до форм і AI-асистента в майбутньому.',
          },
          {
            q: 'Якими мовами доступна інформація?',
            a: 'Українською, польською та англійською — перемикач у меню.',
          },
        ],
      },
      {
        id: 'ops',
        label: 'Операції',
        items: [
          {
            q: 'Які напрями операцій ви описуєте?',
            a: 'Протезна та реконструктивна урологія, хірургічна й регенеративна андрологія, теми сексуальної медицини — у форматі освітнього контенту.',
          },
          {
            q: 'Чи можна побачити приклади операцій?',
            a: 'Так — у галереї та на Instagram (@dr_hladun). Сайт дає розширений контекст до коротких Reels і Stories.',
          },
          {
            q: 'Чи публікуєте відгуки пацієнтів?',
            a: 'Так, розділ відгуків буде додано після згоди пацієнтів і відповідності правилам конфіденційності.',
          },
          {
            q: 'Де читати про конгреси й публікації?',
            a: 'У розділі Досвід. Список буде оновлюватись (згодом — через адмінку).',
          },
        ],
      },
      {
        id: 'edu',
        label: 'Освіта',
        items: [
          {
            q: 'Чим сайт відрізняється від Instagram?',
            a: 'Instagram — короткий формат. Сайт — повніші описи послуг, операцій, клінік і запису на консультацію.',
          },
          {
            q: 'Чи буде AI-асистент?',
            a: 'Так, у планах — супровід і відповіді на загальні питання. Архітектура сторінки закладена під майбутні модулі.',
          },
          {
            q: 'Чи можна додавати контент самостійно?',
            a: 'Так — сайт спроєктований під майбутню адмінку (CMS) для галереї, текстів, конгресів і публікацій.',
          },
          {
            q: 'Чому немає цін і «купити»?',
            a: 'Для self-branding лікарів у ЄС заборонені продажі на сайті. Тут — освіта та посилання на реєстрацію.',
          },
        ],
      },
    ],

    contactHeading: 'Запис на',
    contactHeadingEm: 'консультацію',
    contactLead:
      'Оберіть платформу або клініку. На сайті немає продажу — лише інформація та посилання на реєстрацію.',
    contactVisual: 'Консультації · Операції · Освіта',
    bookingTitle: 'Платформи запису',
    bookingHint: 'Зовнішня реєстрація',
    platformZnany: 'Профіль і онлайн-запис на ZnanyLekarz',
    platformLekarze: 'Запис через Lekarze bez kolejki',
    platformOwn: 'Власний кабінет / клініка — незабаром',
    comingSoon: 'Незабаром',
    clinicsTitle: 'Партнерські клініки',
    clinicsNote: 'Посилання оновляться після підтвердження адрес і профілів.',

    socialsHeading: 'Знайдіть мене',
    socialsHeadingEm: 'в мережі',

    footerRole: 'Спеціалізація',
    footerRoleLine1: 'Уролог · Андролог',
    footerRoleLine2: 'Протезна й реконструктивна урологія',
    footerContact: 'Контакт',
    footerSocial: 'Соцмережі',
    footerRights: 'Усі права захищено.',
    footerPrivacy: 'Політика конфіденційності',

    modalTitle: 'Запис на консультацію',
    modalOr: 'Або',
    modalWrite: 'Напишіть у',
  },

  pl: {
    navAbout: 'O mnie',
    navServices: 'Usługi',
    navExperience: 'Doświadczenie',
    navGallery: 'Galeria',
    navFaq: 'FAQ',
    navContact: 'Kontakt',
    ctaConsult: 'Umów konsultację',
    ctaInstagram: 'Instagram',
    openMenu: 'Otwórz menu',
    closeMenu: 'Zamknij',

    heroHeadlineBefore: 'Urologia protezowa',
    heroHeadlineAccent: 'i rekonstrukcyjna',
    heroHeadlineAfter: 'oraz andrologia',
    heroLead:
      'Lekarz urolog w Szczecinie. Specjalizuję się w urologii protezowej i rekonstrukcyjnej, andrologii chirurgicznej i regeneracyjnej oraz medycynie seksualnej. Ta strona to rozszerzenie Instagram — więcej o operacjach, edukacji i ścieżce pacjenta.',
    heroStat1Label: 'obszary specjalizacji',
    heroStat2Label: 'platformy rejestracji',
    heroStat3Label: 'Szczecin · Polska',
    heroStat3Value: 'PL · UA',

    quote:
      'Edukacja i zaufanie są ważniejsze niż reklama. Wyjaśniam wskazania, ryzyka i oczekiwania — żeby pacjent podejmował świadome decyzje.',
    quoteRole: 'Urolog · Androlog',

    aboutHeading: 'Urologia i andrologia,',
    aboutHeadingEm: 'nowoczesne standardy',
    aboutLead:
      'Pracuję z urologią protezową i rekonstrukcyjną, andrologią chirurgiczną i regeneracyjną oraz medycyną seksualną — od konsultacji po opiekę pooperacyjną.',
    skills: [
      'Urologia protezowa',
      'Urologia rekonstrukcyjna',
      'Andrologia chirurgiczna',
      'Andrologia regeneracyjna',
      'Medycyna seksualna',
      'Treści edukacyjne',
    ],

    servicesHeading: 'Czym się',
    servicesHeadingEm: 'zajmuję',
    servicesMore: 'Dowiedz się więcej',
    offerings: {
      prosthetic: {
        title: 'Urologia protezowa',
        desc: 'Opis wskazań, etapów i rehabilitacji przy protezowaniu — materiał edukacyjny dla pacjentów.',
      },
      andrology: {
        title: 'Andrologia chirurgiczna i regeneracyjna',
        desc: 'Podejścia w andrologii: kiedy rozważa się chirurgię, a kiedy metody regeneracyjne.',
      },
      sexual: {
        title: 'Medycyna seksualna',
        desc: 'Konsultacje dotyczące zdrowia seksualnego mężczyzn w spokojnej, profesjonalnej formule.',
      },
      reconstructive: {
        title: 'Urologia rekonstrukcyjna',
        desc: 'Przegląd zabiegów rekonstrukcyjnych i logiki planowania leczenia.',
      },
      consultations: {
        title: 'Konsultacje',
        desc: 'Rejestracja przez ZnanyLekarz, Lekarze bez kolejki i kliniki partnerskie — bez sprzedaży na stronie.',
      },
      education: {
        title: 'Edukacja pacjentów',
        desc: 'Rozszerzone materiały do Reels i Stories: artykuły, opisy operacji, odpowiedzi na częste pytania.',
      },
    },

    experienceHeading: 'Od kliniki',
    experienceHeadingEm: 'po kongresy',
    experience: {
      szczecin: {
        role: 'Urolog',
        place: 'Praktyka · Szczecin',
        location: 'Polska',
        highlights: [
          'Konsultacje i praca operacyjna',
          'Partnerskie kliniki prywatne',
          'Opieka przed i po zabiegach',
        ],
      },
      congress: {
        role: 'Uczestnik',
        place: 'Kongresy międzynarodowe',
        location: 'EU / International',
        highlights: [
          'Wymiana doświadczeń w urologii protezowej i rekonstrukcyjnej',
          'Andrologia i medycyna seksualna',
          'Publikacje i wykłady (sekcja będzie uzupełniana)',
        ],
      },
      training: {
        role: 'Specjalizacja',
        place: 'Szkolenie kliniczne',
        location: 'UA · PL',
        highlights: [
          'Ścieżka chirurgiczna w urologii',
          'Praca w zespołach wielodyscyplinarnych',
          'Ciągłe szkolenia i certyfikacje',
        ],
      },
    },

    galleryHeading: 'Galeria',
    galleryHeadingEm: 'operacji i praktyki',
    galleryLead:
      'Zdjęcia i wideo z operacji, kongresów i pracy klinicznej. Pełna treść pojawi się po przekazaniu materiałów — na razie placeholdery.',
    galleryOpen: 'Otwórz zdjęcie',

    faqHeading: 'Zostały',
    faqHeadingEm: 'pytania?',
    faqLead:
      'Nie znalazłeś odpowiedzi? Umów konsultację przez platformy poniżej — bez formularzy sprzedażowych na stronie.',
    faqCta: 'Umów wizytę',
    faqTabs: [
      {
        id: 'visit',
        label: 'Wizyta',
        items: [
          {
            q: 'Jak umówić konsultację?',
            a: 'Przez ZnanyLekarz, Lekarze bez kolejki lub kliniki partnerskie. Linki są w sekcji Kontakt. Na stronie nie ma sprzedaży usług.',
          },
          {
            q: 'Gdzie odbywają się operacje?',
            a: 'W partnerskich klinikach prywatnych. Lista klinik i linki do rejestracji — w sekcji Kontakt; własny gabinet/klinika — w planach.',
          },
          {
            q: 'Czy jest formularz na stronie?',
            a: 'Na pierwszym etapie — nie. Struktura strony jest już przygotowana pod formularze i asystenta AI w przyszłości.',
          },
          {
            q: 'W jakich językach jest treść?',
            a: 'Po ukraińsku, polsku i angielsku — przełącznik w menu.',
          },
        ],
      },
      {
        id: 'ops',
        label: 'Operacje',
        items: [
          {
            q: 'Jakie kierunki operacji opisujesz?',
            a: 'Urologia protezowa i rekonstrukcyjna, andrologia chirurgiczna i regeneracyjna, tematy medycyny seksualnej — w formie treści edukacyjnych.',
          },
          {
            q: 'Czy można zobaczyć przykłady operacji?',
            a: 'Tak — w galerii i na Instagramie (@dr_hladun). Strona daje szerszy kontekst do krótkich Reels i Stories.',
          },
          {
            q: 'Czy publikujesz opinie pacjentów?',
            a: 'Tak, sekcja opinii pojawi się po zgodzie pacjentów i zgodnie z zasadami poufności.',
          },
          {
            q: 'Gdzie czytać o kongresach i publikacjach?',
            a: 'W sekcji Doświadczenie. Lista będzie aktualizowana (później — przez panel admina).',
          },
        ],
      },
      {
        id: 'edu',
        label: 'Edukacja',
        items: [
          {
            q: 'Czym strona różni się od Instagrama?',
            a: 'Instagram to krótki format. Strona — pełniejsze opisy usług, operacji, klinik i rejestracji na konsultację.',
          },
          {
            q: 'Czy będzie asystent AI?',
            a: 'Tak, w planach — wsparcie i odpowiedzi na ogólne pytania. Architektura strony jest gotowa na przyszłe moduły.',
          },
          {
            q: 'Czy można dodawać treść samodzielnie?',
            a: 'Tak — strona jest zaprojektowana pod przyszły panel CMS do galerii, tekstów, kongresów i publikacji.',
          },
          {
            q: 'Dlaczego nie ma cen i „kup”? ',
            a: 'Dla self-brandingu lekarzy w UE sprzedaż na stronie jest zabroniona. Tu — edukacja i linki do rejestracji.',
          },
        ],
      },
    ],

    contactHeading: 'Rejestracja na',
    contactHeadingEm: 'konsultację',
    contactLead:
      'Wybierz platformę lub klinikę. Na stronie nie ma sprzedaży — tylko informacje i linki do rejestracji.',
    contactVisual: 'Konsultacje · Operacje · Edukacja',
    bookingTitle: 'Platformy rejestracji',
    bookingHint: 'Rejestracja zewnętrzna',
    platformZnany: 'Profil i zapis online na ZnanyLekarz',
    platformLekarze: 'Rejestracja przez Lekarze bez kolejki',
    platformOwn: 'Własny gabinet / klinika — wkrótce',
    comingSoon: 'Wkrótce',
    clinicsTitle: 'Kliniki partnerskie',
    clinicsNote: 'Linki zostaną uzupełnione po potwierdzeniu adresów i profili.',

    socialsHeading: 'Znajdź mnie',
    socialsHeadingEm: 'w sieci',

    footerRole: 'Specjalizacja',
    footerRoleLine1: 'Urolog · Androlog',
    footerRoleLine2: 'Urologia protezowa i rekonstrukcyjna',
    footerContact: 'Kontakt',
    footerSocial: 'Media społecznościowe',
    footerRights: 'Wszelkie prawa zastrzeżone.',
    footerPrivacy: 'Polityka prywatności',

    modalTitle: 'Umów konsultację',
    modalOr: 'Lub',
    modalWrite: 'Napisz na',
  },

  en: {
    navAbout: 'About',
    navServices: 'Services',
    navExperience: 'Experience',
    navGallery: 'Gallery',
    navFaq: 'FAQ',
    navContact: 'Contact',
    ctaConsult: 'Book a consultation',
    ctaInstagram: 'Instagram',
    openMenu: 'Open menu',
    closeMenu: 'Close',

    heroHeadlineBefore: 'Prosthetic & reconstructive',
    heroHeadlineAccent: 'urology',
    heroHeadlineAfter: 'and andrology',
    heroLead:
      'Urologist based in Szczecin. Focused on prosthetic & reconstructive urology, surgical and regenerative andrology, and sexual medicine. This site extends my Instagram — deeper context on procedures, education, and the patient journey.',
    heroStat1Label: 'areas of focus',
    heroStat2Label: 'booking platforms',
    heroStat3Label: 'Szczecin · Poland',
    heroStat3Value: 'PL · UA',

    quote:
      'Education and trust matter more than advertising. I explain indications, risks, and expectations — so patients decide with clarity.',
    quoteRole: 'Urologist · Andrologist',

    aboutHeading: 'Urology and andrology,',
    aboutHeadingEm: 'modern standards',
    aboutLead:
      'I work with prosthetic and reconstructive urology, surgical and regenerative andrology, and sexual medicine — from consultation through post-op care.',
    skills: [
      'Prosthetic urology',
      'Reconstructive urology',
      'Surgical andrology',
      'Regenerative andrology',
      'Sexual medicine',
      'Patient education',
    ],

    servicesHeading: 'What I',
    servicesHeadingEm: 'focus on',
    servicesMore: 'Learn more',
    offerings: {
      prosthetic: {
        title: 'Prosthetic urology',
        desc: 'Educational overview of indications, stages, and recovery in prosthetic procedures.',
      },
      andrology: {
        title: 'Surgical & regenerative andrology',
        desc: 'When surgery is considered versus regenerative approaches — explained for patients.',
      },
      sexual: {
        title: 'Sexual medicine',
        desc: 'Consultations on men’s sexual health in a calm, professional setting.',
      },
      reconstructive: {
        title: 'Reconstructive urology',
        desc: 'Overview of reconstructive pathways and treatment planning logic.',
      },
      consultations: {
        title: 'Consultations',
        desc: 'Booking via ZnanyLekarz, Lekarze bez kolejki, and partner clinics — no sales on this site.',
      },
      education: {
        title: 'Patient education',
        desc: 'Longer-form materials beyond Reels and Stories: articles, procedure notes, FAQs.',
      },
    },

    experienceHeading: 'From clinic',
    experienceHeadingEm: 'to congresses',
    experience: {
      szczecin: {
        role: 'Urologist',
        place: 'Practice · Szczecin',
        location: 'Poland',
        highlights: [
          'Consultations and operative work',
          'Partner private clinics',
          'Care before and after procedures',
        ],
      },
      congress: {
        role: 'Participant',
        place: 'International congresses',
        location: 'EU / International',
        highlights: [
          'Exchange in prosthetic & reconstructive urology',
          'Andrology and sexual medicine',
          'Publications and talks (section will grow)',
        ],
      },
      training: {
        role: 'Specialization',
        place: 'Clinical training',
        location: 'UA · PL',
        highlights: [
          'Surgical track in urology',
          'Multidisciplinary teamwork',
          'Ongoing training and certifications',
        ],
      },
    },

    galleryHeading: 'Gallery',
    galleryHeadingEm: 'of surgery & practice',
    galleryLead:
      'Photos and videos from procedures, congresses, and clinical work. Full media arrives once assets are delivered — placeholders for now.',
    galleryOpen: 'Open photo',

    faqHeading: 'Still have',
    faqHeadingEm: 'questions?',
    faqLead:
      'Didn’t find an answer? Book a consultation via the platforms below — no sales forms on this site.',
    faqCta: 'Book visit',
    faqTabs: [
      {
        id: 'visit',
        label: 'Visit',
        items: [
          {
            q: 'How do I book a consultation?',
            a: 'Via ZnanyLekarz, Lekarze bez kolejki, or partner clinics. Links are in Contact. This site does not sell services.',
          },
          {
            q: 'Where are operations performed?',
            a: 'At partner private clinics. Clinic list and booking links are in Contact; own office/clinic is planned.',
          },
          {
            q: 'Is there a form on the site?',
            a: 'Not in v1. The structure is already prepared for future forms and an AI assistant.',
          },
          {
            q: 'Which languages are available?',
            a: 'Ukrainian, Polish, and English — switcher in the menu.',
          },
        ],
      },
      {
        id: 'ops',
        label: 'Surgery',
        items: [
          {
            q: 'Which procedure areas do you cover?',
            a: 'Prosthetic and reconstructive urology, surgical and regenerative andrology, sexual medicine topics — as educational content.',
          },
          {
            q: 'Can I see procedure examples?',
            a: 'Yes — in the gallery and on Instagram (@dr_hladun). The site expands short Reels and Stories.',
          },
          {
            q: 'Do you publish patient reviews?',
            a: 'Yes — a reviews section will be added with patient consent and privacy compliance.',
          },
          {
            q: 'Where to find congresses and publications?',
            a: 'In Experience. The list will be updated (later via an admin CMS).',
          },
        ],
      },
      {
        id: 'edu',
        label: 'Education',
        items: [
          {
            q: 'How is the site different from Instagram?',
            a: 'Instagram is short-form. The site offers fuller descriptions of services, procedures, clinics, and booking.',
          },
          {
            q: 'Will there be an AI assistant?',
            a: 'Yes — planned for guidance and general questions. The page architecture supports future modules.',
          },
          {
            q: 'Can content be added by the doctor?',
            a: 'Yes — designed for a future CMS for gallery, copy, congresses, and publications.',
          },
          {
            q: 'Why no prices or “buy” buttons?',
            a: 'EU medical self-branding rules restrict sales pages. This site is educational with booking links only.',
          },
        ],
      },
    ],

    contactHeading: 'Book a',
    contactHeadingEm: 'consultation',
    contactLead:
      'Choose a platform or clinic. No sales on this site — information and registration links only.',
    contactVisual: 'Consultations · Surgery · Education',
    bookingTitle: 'Booking platforms',
    bookingHint: 'External registration',
    platformZnany: 'Profile and online booking on ZnanyLekarz',
    platformLekarze: 'Booking via Lekarze bez kolejki',
    platformOwn: 'Own office / clinic — coming soon',
    comingSoon: 'Coming soon',
    clinicsTitle: 'Partner clinics',
    clinicsNote: 'Links will be updated once addresses and profiles are confirmed.',

    socialsHeading: 'Find me',
    socialsHeadingEm: 'online',

    footerRole: 'Focus',
    footerRoleLine1: 'Urologist · Andrologist',
    footerRoleLine2: 'Prosthetic & reconstructive urology',
    footerContact: 'Contact',
    footerSocial: 'Social',
    footerRights: 'All rights reserved.',
    footerPrivacy: 'Privacy policy',

    modalTitle: 'Book a consultation',
    modalOr: 'Or',
    modalWrite: 'Message on',
  },
}
