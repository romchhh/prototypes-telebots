# DESIGN.md — TeleBots Prototypes

Як швидко клепати нові лендінги в цьому репо: які шаблони копіювати, які токени міняти, який порядок секцій і чого уникати.

Hub: [`src/app/page.tsx`](src/app/page.tsx) → `/`  
Прототип: `src/app/{slug}/` → `/{slug}`  
Ассети: `public/images/{slug}/`

---

## 1. Вибір шаблону (30 сек)

| Потрібно | Копіюй з | Секції |
|----------|----------|--------|
| Швидкий сервіс / авто / клініка (hero + форма) | `kreona/` або `nura/` | Nav → Hero → Contact → Footer |
| Те саме + UA/PL | `emaro/` | + `LanguageProvider` |
| Сервіс + сітка послуг | `usa-auto/` | + ServicesSection |
| Кілька підсторінок послуг | `differ-sport/` або `litun/` | Socials + Contact band + sub-routes |
| Персональний бренд / портфоліо (довгий) | `oleh-reznichenko/` | Quote → About → Services → Experience → Gallery → FAQ → Contact → Socials |
| Медицина / 3 мови / без продажу на сайті | `dr-hladun/` | як oleh + `LocaleProvider` + booking platforms |
| HoReCa holding / напрями | `cartel/` | Directions → About → Careers → Contact |
| Luxury editorial (окремий CSS-підхід) | `grand-cru/` | лише якщо треба pixel-close референс |

**Правило:** не пиши з нуля. `cp -R` найближчий шаблон → перейменуй slug → підстав бренд.

---

## 2. Структура файлів нового прототипу

```
src/app/{slug}/
├── layout.tsx          # metadata + <div className="{scope}"> + import CSS
├── page.tsx            # композиція секцій (іноді 'use client' через провайдери)
├── {slug}.css          # дизайн-токени на scope-класі
├── brand.ts            # BRAND + списки контенту (as const)
├── i18n.ts / i18n.tsx  # опційно
└── components/
    ├── Navbar.tsx + Navbar.module.css
    ├── Hero.tsx + Hero.module.css
    ├── ContactSection.tsx + …
    ├── Footer.tsx + …  # обовʼязково PrototypeBanner
    └── …               # за типом шаблону

public/images/{slug}/
├── hero.png | hero.jpg | hero-desktop.png
├── hero-mobile.png     # опційно
└── contact.png         # опційно (= hero)
```

### `layout.tsx` (мінімум)

```tsx
import type { Metadata } from 'next'
import './{slug}.css'

export const metadata: Metadata = {
  title: 'Brand — Tagline',
  description: '…',
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <div className="{slug}">{children}</div>  // scope = CSS-корінь
}
```

### `brand.ts` (мінімум)

```ts
export const BRAND = {
  name: 'Brand Name',
  shortName: 'Brand',
  phone: '+380 …',
  email: 'hello@…',
  address: 'Місто',
  city: 'Місто',
  heroDesktop: '/images/{slug}/hero.png',
  heroMobile: '/images/{slug}/hero.png',
  contactImage: '/images/{slug}/hero.png',
} as const

export const SERVICES = ['…', 'Інше'] as const  // для <select> у формі
```

---

## 3. Дизайн-токени

Усі змінні живуть на **scope-класі** в `{slug}.css`. Компоненти беруть їх через `var(--…)`.

### Обовʼязковий layout-шар

```css
.{slug} {
  --page-pad: 64px;
  --page-pad-sm: 24px;
  /* …brand tokens… */
  color: var(--ink-or-deep);
  background: var(--page-bg);
  font-family: var(--font-sans);
}

@media (max-width: 768px) {
  .{slug} { --page-pad: var(--page-pad-sm); }
}
```

### Сімейства палітр (копіюй цілком)

**A — Auto / сервіс (kreona, emaro)**  
`--ink`, `--navy`, `--mist`, `--stone`, `--orange`, `--orange-deep`, `--radius`, `--radius-pill`, `--font-sans`, `--font-display`, `--font-accent`

**B — Editorial / people brand (oleh, dr-hladun, common-hospitality)**  
`--deep`, `--slate`, `--stone`, `--milk`, `--milk-soft`, `--sand`, `--font-sans` (Montserrat), `--font-logo` (Unbounded), `--font-script` (Caveat), `--font-serif` (Cormorant)  
Акцент: `--red` (семантичний primary — не обовʼязково червоний; у Hladun це navy `#1a4a7a`)

**C — Dark sport / клуб (differ-sport, litun)**  
Темний бренд + light «band» для contact/socials. Часто `--orange` / `--blue` — аліаси на акцент, щоб перевикористовувати kreona-компоненти.

**D — Luxury holding (cartel)**  
`--accent` бордо, `--font-serif` + Unbounded logo, image tiles.

### Що міняти під бренд

1. Accent hue (`--orange` / `--red` / `--accent`)
2. Fonts (`@import` + `--font-*`)
3. Page bg (світлий milk vs dark navy)
4. Radii (pill vs soft)

Решту імен токенів **не перейменовуй** всередині сімʼї — CSS modules уже на них завʼязані.

---

## 4. Типографіка

| Роль | Як | Приклади |
|------|-----|----------|
| Body / UI | `--font-sans` | Montserrat, Manrope, Outfit, Bricolage |
| Logo / wordmark | `--font-logo` або display | Unbounded, Bebas, Oswald |
| Акцент у заголовку (`<em>`) | `--font-script` або `--font-accent` | Caveat, Fraunces, Cormorant |
| Цитата | `--font-serif` italic | Cormorant Garamond |

Паттерн заголовка:

```tsx
<h2>
  Перший рядок<br />
  <em>акцентне слово</em>
</h2>
```

Шрифти вантаж через `@import` у `{slug}.css` (не в root layout).

---

## 5. UI-конвенції (повторюються всюди)

### Navbar
- `position: fixed`, scroll > ~40px → клас `solid` (blur + фон)
- Brand → `href="/{slug}"`
- Desktop: center links; right: lang + CTA
- Mobile: fullscreen drawer, `body.overflow = hidden`
- CTA: `#kontakt` **або** `openBooking()` (portfolio)

### Hero
- Full-bleed / великий фото-блок (`next/image` `fill`, `priority`)
- Headline + short lead + 1–2 CTA
- Стати / pillars знизу — опційно
- Brand name має бути hero-level сигналом, не дрібним текстом у nav

### Contact
- `id="kontakt"` (або `contact` EN)
- Форма-демо: name, phone, service select, comment, consent → `setTimeout` → success
- Контакти з `BRAND` (`tel:`, `mailto:`)
- Медицина / EU self-branding: замість форми — зовнішні платформи запису (`dr-hladun`)

### Footer
- Колонки: роль / контакт / соцмережі
- **Завжди** після footer:

```tsx
import PrototypeBanner from '../../components/PrototypeBanner'
// …
<PrototypeBanner />
```

### CTA візуал
- Pill (`border-radius: 999px`)
- Стрілка в кружечку (спільний SVG path `M2 14 L14 2 M6 2 H14 V10`)
- Hover: легкий `translateY(-1px)` + rotate стрілки

---

## 6. Порядок секцій за типом

### Мінімальний сервіс
`Navbar → Hero → ContactSection → Footer`

### Портфоліо експерта
`Navbar → Hero → Quote → About → Services → Experience → Gallery → Faq → Contact → Socials → Footer`  
(+ `BookingProvider`; для 3 мов — `LocaleProvider`)

### Мульти-сервіс
`Navbar → Hero → Socials → Contact` + підсторінки `/{slug}/{service}` з `ServiceHero`

---

## 7. i18n

| Підхід | Коли | Звідки |
|--------|------|--------|
| Хардкод 1 мова | Більшість прототипів | copy в компонентах / `brand.ts` |
| UA + PL context | Сервіс для PL ринку | `emaro/i18n.tsx` → `LanguageProvider` + `useLang()` |
| UK + PL + EN dict | Персональний бренд | `dr-hladun/i18n.ts` + `LocaleContext` |
| Декоративні `UA \| PL` у nav | Швидке демо | не підключай, якщо нема словника |

Усі рядки UI для багатомовності — у dict, не розкидані по JSX.

---

## 8. Зображення

- Шлях: `/images/{slug}/…` → файл у `public/images/{slug}/`
- Мінімум: hero (+ contact, якщо інший кадр)
- Плейсхолдери: Unsplash OK для демо; клієнтські фото — замінити перед показом
- Не клади сирі ChatGPT/Gemini/скріни в корінь репо — одразу в `public/images/{slug}/`
- `next.config.js` уже дозволяє `images.unsplash.com`

---

## 9. Реєстрація в hub

У `src/app/page.tsx` → масив `PROTOTYPES`:

```ts
{
  slug: 'my-brand',
  title: 'My Brand',
  desc: 'Короткий опис — landing (UA)',
  tag: 'Авто', // або HoReCa | Клініка | Освіта | …
  // href: '/static.html', // лише для HTML у public/
}
```

Без `href` картка веде на `/{slug}`.

---

## 10. Чекліст нового прототипу (~30 хв)

1. [ ] Обрати шаблон і `cp -R src/app/{from} src/app/{slug}`
2. [ ] Перейменувати `{from}.css` → `{slug}.css`, scope-клас, імпорт у `layout.tsx`
3. [ ] Metadata (title / description)
4. [ ] Токени: fonts + accent + bg
5. [ ] `brand.ts`: контакти, шляхи до фото, SERVICES / NAV / OFFERINGS
6. [ ] `public/images/{slug}/` — hero (+ contact)
7. [ ] Замінити всі `href="/old-slug"` → `"/{slug}"` (Navbar, Footer, Logo)
8. [ ] `page.tsx` — потрібні провайдери
9. [ ] Footer → `PrototypeBanner`
10. [ ] Запис у `PROTOTYPES` у `page.tsx`
11. [ ] Smoke: desktop + mobile drawer, scroll nav, `#kontakt`, форма/booking
12. [ ] (опц.) i18n / subpages

---

## 11. Design rules (візуал)

Ці правила — для **нових** лендінгів і промо-сторінок. Якщо клонуєш існуючий шаблон — зберігай його мову; не «покращуй» чужий бренд під загальний AI-лук.

### Композиція
- Перший viewport = **одна композиція**, не дашборд
- Hero budget: бренд + 1 headline + 1 короткий lead + CTA group + 1 dominant visual
- Не пхати в hero: статистику-стрічки, розклади, адреси-блоки, промо-чіпи, «цього тижня»

### Бренд
- Brand-first: назва — hero-level сигнал, не лише nav
- Тест: якщо прибрати nav і сторінка може належати іншому бренду — брендинг слабкий

### Візуал
- Не flat single-color bg: градієнт / фото / легкий патерн
- Hero image — full-bleed / домінантна площина, не inset-картка (якщо шаблон не вимагає інакше)
- Без floating badges / sticker overlays на hero
- Cards — лише коли це контейнер взаємодії; інакше без рамок/тіней
- Motion: 2–3 навмисні рухи (nav solid, CTA arrow, gallery hover) — не шум

### Колір / шрифти (анти-кліше)
Уникай дефолтного AI-луку:
1. purple-on-white / purple→indigo gradients  
2. warm cream `#F4F1EA` + серійний display + terracotta  
3. broadsheet: hairline rules, zero radius, newspaper columns  

Також не за замовчуванням: dark mode everywhere, glow, `rounded-full` pill-clusters, multi-layer shadows, emoji.

### Контент
- Одна робота на секцію: 1 headline + зазвичай 1 supporting sentence
- Реальний візуальний якір (продукт / місце / людина), не абстрактний градієнт як головна ідея

### Прототипні спрощення (ок)
- Форми без бекенду (fake success)
- Lang toggles можуть бути декоративними, поки немає i18n
- Nav пункти іноді всі ведуть на `#kontakt` у коротких демо

### Юридичне / ніша
- Лікарі EU self-branding: **без продажів / цін / «купити»** на сайті — освіта + зовнішній запис (`dr-hladun` як референс)

---

## 12. Що не робити

| Ні | Так |
|----|-----|
| Писати лендінг з нуля | Копіювати найближчий `src/app/*` |
| Класти ассети в корінь репо | `public/images/{slug}/` |
| Мішати токени з різних сімей у одному CSS | Взяти одну сімʼю й міняти accent/fonts |
| Забути `PrototypeBanner` | Footer → banner |
| Додати папку, але не в hub | Запис у `PROTOTYPES` |
| Переписувати CSS modules «під красу» | Міняти тільки токени + контент |
| Monolithic global CSS (grand-cru) для звичайних джоб | CSS modules + scope tokens |

---

## 13. Швидкі команди

```bash
# 1) клон шаблону
cp -R src/app/kreona src/app/my-brand
mv src/app/my-brand/kreona.css src/app/my-brand/my-brand.css

# 2) ассети
mkdir -p public/images/my-brand
# поклади hero.png

# 3) пошук старих шляхів
rg -n 'kreona|/kreona' src/app/my-brand

# 4) dev
npm run dev
# → http://localhost:3000/my-brand
```

Після клону обовʼязково: scope class у CSS + `layout.tsx`, усі `href="/…"`, `brand.ts`, hub card.

---

## 14. Карта існуючих прототипів (орієнтир)

| Slug | Тип | Мова / нотатки |
|------|-----|----------------|
| `kreona`, `liquid-glass`, `west-auto` | Auto service | UA |
| `emaro` | Auto detail | UA/PL i18n |
| `usa-auto` | Auto + services | UA |
| `nura`, `dente`, `lake-alpha-dente` | Clinic-style | UA/PL |
| `oleh-reznichenko` | Chef portfolio | PL + booking modal |
| `dr-hladun` | Medical portfolio | UK/PL/EN, no sales form |
| `common-hospitality`, `cartel`, `cartel-v2` | HoReCa | UA |
| `differ-sport`, `muaythai` | Sport | UA, multi-page (differ) |
| `litun`, `lexi`, `proassistant` | Education / personal | UA |
| `grand-cru` | Luxury auto | EN, global CSS |
| Static HTML у `public/*.html` | Legacy demos | через `href` у hub |

---

*Оновлюй цей файл, коли зʼявляється новий «сімейний» шаблон або ламається домовленість по структурі.*
