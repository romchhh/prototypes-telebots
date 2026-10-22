---
name: eliminal-email
description: >-
  Builds Eliminal HTML emails (abandoned cart, welcome, promo) as 600px
  table layouts in the brand style. Use when creating or editing an Eliminal
  email, HTML newsletter, welcome letter, or abandoned-cart letter, or when
  the user mentions eliminal.ua email design.
---

# Eliminal email

Build a single self-contained HTML file in the project root. Put every local asset in `media/` and reference it as `media/filename` (encode spaces as `%20`). Product photos may stay as absolute `https://eliminal.ua/cdn/shop/files/…&format=jpg` URLs.

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
- Wave graphic `media/Frame 1261152643.png` only as the bottom of the closing card (`background-position: center bottom`, height ~88px). Not on the page wrapper.
- Footer trust row (icons + two-line labels) stays one row on mobile.

Mobile (`max-width: 620px`): one side gutter for every card (20–22px). Columns that should stack get `display:block; width:100%`. Product cards go one under another. Do not add extra horizontal padding inside a card that already has the gutter.

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
