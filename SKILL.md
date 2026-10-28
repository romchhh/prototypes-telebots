---
name: eliminal-email
description: >-
  Builds Eliminal HTML emails (abandoned cart, welcome, promo) as 600px
  table layouts in the brand style. Use when creating or editing an Eliminal
  email, HTML newsletter, welcome letter, or abandoned-cart letter, or when
  the user mentions eliminal.ua email design.
---

# Eliminal email

Build a single self-contained HTML file. Working copies live in `emails/`; public links in `public/emails/`. Put every local asset in `emails/media/` (and mirror to `public/emails/media/`). Reference as `media/filename` (encode spaces as `%20`). Product photos may also stay as absolute `https://eliminal.ua/cdn/shop/files/…&format=jpg` URLs.

## Copy

Follow the brief block for block. Do not add, merge, or rewrite sections. Keep the given sentences. Place subject and preheader in an HTML comment; put the preheader in a hidden div right after `<body>`.

Language is Ukrainian. No uppercase eyebrow labels (`У КОШИКУ`, letter-spacing labels). Write those as normal sentences.

## Layout

- Outer background `#F0EBE3`. Content column 600px, centered.
- One idea per white card (`#FFFFFF`, radius 22px). 18px gap between cards.
- Headlines: Lora, Georgia fallback, weight 500, color `#1C2822`.
- Body: IBM Plex Sans, 15–16px, line-height ~26px, color `#5A655F`.
- Buttons: `#2F5D44`, white text, pill (`border-radius:999px`), label then `→`.
- One image per idea. Full-bleed photo, then text under it. Do not stack two photos beside a headline.
- Wave graphic `media/Frame 1261152643.png` only as the bottom of the closing card. Text/disclaimer above the wave use `position:relative;z-index:2` so they sit over the PNG. Not on the page wrapper.
- Footer trust row (icons + two-line labels) stays one row on mobile. Free shipping label: `Безкоштовна доставка / від 2000 грн`.

Mobile (`max-width: 620px`): one side gutter for every card (20–22px). Columns that should stack get `display:block; width:100%`. Product cards go one under another. Do not add extra horizontal padding inside a card that already has the gutter.

## Media library (`emails/media/`)

Prefer these named studio/lifestyle assets. Do not invent packshots when a matching file exists.

| File | What it shows | Best for |
|------|----------------|----------|
| `gastro-lifestyle-office.jpg` | Busy professional with Gastro sticks, notebooks, retro phone | Gastro lifestyle, abandoned/busy-life heroes |
| `gastro-packshot-black.jpg` | Gastro box + stick on black | Gastro product cards, quick-pick tiles |
| `gastro-stick-hands.jpg` | Hands holding a Gastro stick on black | Gastro detail / compact cards |
| `slim-lifestyle-gym.jpg` | Slim box on treadmill, athlete close-up | Slim lifestyle cards |
| `slim-lifestyle-treadmill.jpg` | Full-body Slim on treadmill, black studio | Slim hero / strong product+fitness |
| `classic-lifestyle-bag.jpg` | Classic Formula sticks + box in beige tote | Hero, Classic, everyday bag lifestyle |
| `skin-lifestyle-bed.jpg` | Healthy Skin sticks on bed with phone/earphones | Healthy Skin lifestyle |
| `verde-jar-broccoli.jpg` | Verde jar with broccoli & lime on black | Verde product / greens block |
| `verde-couple-kitchen.jpg` | Couple in kitchen with green drinks | Verde lifestyle / everyday greens |
| `runner-lifestyle.jpg` | Woman running outdoors | Active / Slim mood, energy |
| `smart-choice.jpg` | Three gel boxes lineup (Smart Choice / 1+1=3) | Smart Choice accent block, pick tile |
| `Frame 1261152643.png` | Brand wave graphic | Closing card bottom only |
| `logo blue.svg` | Eliminal logo | Header / sign-off |

Quick-pick tiles may use `pick-gastro.jpg`, `pick-slim.jpg`, `pick-verde.jpg`, `pick-smart.jpg` (product-focused crops of the assets above).

## Structure skeleton

```html
<table width="100%" bgcolor="#F0EBE3">
  <tr><td align="center" style="padding:32px 20px;">
    <table class="container" width="600" style="width:600px;max-width:600px;">
      <!-- logo -->
      <!-- one <tr> per brief block -->
    </table>
  </td></tr>
</table>
```

End every letter with: phone `+38 (067) 742 53 95`, link to https://eliminal.ua/, FAQ, shipping policy, the dietary-supplement disclaimer, and `#unsubscribe`.

## Before send

Note in the file comment which local `media/` files must be uploaded to the ESP and which `[placeholders]` the brief left open.
