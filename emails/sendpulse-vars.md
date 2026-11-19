# SendPulse — ZIP і змінні

Тексти з ТЗ **захардкоджені**. Через API підставляється лише персоналізація та динамічні дані.

**Завантаження:** бери готовий `*.zip` → Templates → Upload a file → увімкни **Upload images to the server SendPulse**.

Синтаксис у шаблоні: `{{variable}}`. У запиті API — `template.variables`.

---

## Abandoned cart  
`abandoned-cart.zip`

Тема (з бекенду): `{{name}}, здається, нас щось відволікло 👀`

| Змінна | Опис | Приклад |
|--------|------|---------|
| `name` | Імʼя клієнта | `Олена` |
| `product_name` | Назва 1-го товару в кошику | `Eliminal gel® Clean&Slim` |
| `product_image` | Фото товару (повний URL) | `https://eliminal.ua/cdn/shop/files/….jpg` |
| `product_url` | Посилання на товар | `https://shop.eliminal.ua/products/…` |
| `product_qty` | Кількість | `1 шт` |
| `product_price` | Ціна рядка | `999 грн` |
| `cart_items_extra_html` | HTML 2-го, 3-го… товарів; якщо один — порожній рядок | `""` |
| `cart_total` | Сума кошика | `999 грн` |
| `unsubscribe_url` | Відписка (часто підставляє SendPulse сам) | `https://…/unsubscribe` |

---

## Abandoned cart return  
`abandoned-cart-return.zip`

Тема (з бекенду): `{{name}}, ми тут дещо для вас притримали 👀`

Змінні **ті самі**, що в abandoned cart:

`name` · `product_name` · `product_image` · `product_url` · `product_qty` · `product_price` · `cart_items_extra_html` · `cart_total` · `unsubscribe_url`

---

## Welcome 3  
`welcome-3.zip`

Усі тексти та офер з ТЗ уже в HTML.

| Змінна | Опис |
|--------|------|
| `unsubscribe_url` | Посилання відписки |

---

## Welcome 5 — знижка ще діє  
`welcome-5.zip`

Тема (з бекенду): `{{name}}, твої 100 грн діють до завтра ⏳`

| Змінна | Опис | Приклад |
|--------|------|---------|
| `name` | Імʼя клієнта | `Олена` |
| `promo_code` | Промокод | `WELCOME100` |
| `discount_expires` | Кінець дії знижки | `03.11.2026, 23:59` |
| `unsubscribe_url` | Відписка | `https://…/unsubscribe` |

Прехедер у шаблоні: `Промокод {{promo_code}} діє до {{discount_expires}}. Потім він зникне.`

Крок «Введи промокод у кошику» також підставляє `{{promo_code}}`.

---

## Bestsellers  
`bestsellers.zip`

Тема (з бекенду): `{{name}}, що найчастіше обирають в Eliminal? 🛒`

| Змінна | Опис |
|--------|------|
| `name` | Імʼя лише для теми листа |
| `unsubscribe_url` | Відписка |

Контент листа (бестселери, ціни Smart Choice, CTA) — захардкоджений.

---

## PP-01 — Gel, з чого почати  
`pp-01.zip`

Тема (з бекенду): `Eliminal уже у вас. З чого почати?` або варіант B з ТЗ.

| Змінна | Опис |
|--------|------|
| `name` | Імʼя |
| `product_image` | Packshot купленої формули (URL) |
| `product_name` | Назва купленої формули |
| `product_url` | Сторінка продукту |
| `instruction_url` | Інструкція / сторінка продукту |
| `unsubscribe_url` | Відписка |

---

## PP-02 — що всередині формули  
`pp-02.zip`

| Змінна | Опис |
|--------|------|
| `product_image` | Packshot формули |
| `product_name` | Назва формули |
| `product_url` | Сторінка продукту |
| `formula_variant_html` | Один рядок особливості, напр. `Gastro Health: ромашка, бромелайн і папаїн.` |
| `unsubscribe_url` | Відписка |

---

## PP-03 — знайомство з Verde  
`pp-03.zip`

| Змінна | Опис |
|--------|------|
| `unsubscribe_url` | Відписка |

---

## PP-04 — відгук і −10%  
`pp-04.zip`

| Змінна | Опис |
|--------|------|
| `name` | Імʼя |
| `product_url` | Сторінка купленого товару (для `#loox-review`) |
| `unsubscribe_url` | Відписка |

---

## PP-05 — частковий курс, перший крок  
`pp-05.zip`

| Змінна | Опис |
|--------|------|
| `product_image` | Packshot формули |
| `instruction_url` | Інструкція / сторінка продукту |
| `unsubscribe_url` | Відписка |

---

## PP-06 — запас + Smart Choice  
`pp-06.zip`

| Змінна | Опис |
|--------|------|
| `unsubscribe_url` | Відписка |

Контент (20/40/60, Smart Choice 2 380 / 3 570) — статичний.

---

## PP-07 — Verde, як приготувати  
`pp-07.zip`

| Змінна | Опис |
|--------|------|
| `unsubscribe_url` | Відписка |

Тригер: день доставки, `verde_qty` ≥ 1.

---

## PP-08 — Verde, тиждень знайомства  
`pp-08.zip`

| Змінна | Опис |
|--------|------|
| `product_url` | Сторінка Verde, CTA веде на `{{product_url}}#loox-review` |
| `unsubscribe_url` | Відписка |

Тригер: +7 днів, `verde_qty` ≥ 1.

---

## PP-09 — Verde, поповнення запасу  
`pp-09.zip`

| Змінна | Опис |
|--------|------|
| `unsubscribe_url` | Відписка |

Тригер: `20 × verde_qty − 6` днів після доставки. Промокод у листі не зашитий.

---

## Таймінг PP-01–PP-09

Подія «Отримано» (KeyCRM). `first_name` — перше слово з `full_name`.

| Лист | Затримка | Умова |
|------|----------|--------|
| PP-01 | 0 | гель ≥ 3 уп. |
| PP-02 | +3 дні | гель ≥ 3 уп. |
| PP-03 | +10 днів | гель ≥ 3 уп. і Verde = 0 |
| PP-04 | +22 дні | гель ≥ 3 уп. |
| PP-05 | 0 | гель 1–2 уп. |
| PP-06 | +4 дні | гель 1–2 уп. |
| PP-07 | 0 | Verde ≥ 1 |
| PP-08 | +7 днів | Verde ≥ 1 |
| PP-09 | 20 × банок − 6 днів | Verde ≥ 1 |

Поля події: `email`, `phone`, `first_name`, `gel_qty`, `verde_qty`, `gel_sku` (`gastro` / `slim` / `skin` / `classic`), `product_url`.

Packshot гелю: `packshot_{{gel_sku}}.png` (`packshot_gastro.png`, `packshot_slim.png`, `packshot_skin.png`, `packshot_classic.png`).

---

## R-01–R-06 — поповнення після PP

Промокод у листі текстом, строк 7 днів від дати листа. Підпис: «Команда Eliminal». Юрособу продавця підставити в футер на дату запуску.

| Лист | Коли | Умова | Промокод |
|------|------|--------|----------|
| R-01 | 1 уп. +9 днів, 2 уп. +15 | гель 1–2, немає нового замовлення | START15 −15% |
| R-02 | R-01 + 5 днів | та сама гілка, Verde ніколи не купували | — |
| R-03 | 3 уп. +35 днів, далі 20 × уп. ÷ 3 + 15 | гель 3+, немає нового замовлення | KURS15 −15% |
| R-04 | R-03 + 4 дні | гілка R-03, не замовили | KURS15, лишилося 3 дні |
| R-05 | 1 банка +30, 2 банки +50 | Verde, немає нового замовлення | VERDE10 −10% |
| R-06 | R-05 + 4 дні | Verde, гель ніколи не купували | VERDE10, лишилося 3 дні |

Спільні поля: `first_name`, `product_name`, `product_url`, `product_price`, `gel_sku`, `unsubscribe_url`.

R-03 у zip: `src="packshot_{{gel_sku}}.png"`. Локальне прев’ю: `pack.jpg`.

R-05 друга кнопка: `{{verde_shaker_url}}` — URL пропозиції «2 банки + шейкер». Блок відгуку Verde не зібраний: на сайті не знайдено окремого відгуку, вигадувати не стали.

R-01 відгуки — три цитати з eliminal.ua (Тарас, Дарина, Катерина). Міста на сайті немає.

---

## Приклад API

```json
{
  "email": {
    "subject": "Олена, здається, нас щось відволікло 👀",
    "template": {
      "id": 123456,
      "variables": {
        "name": "Олена",
        "product_name": "Eliminal gel® Clean&Slim",
        "product_image": "https://eliminal.ua/cdn/shop/files/Slim.jpg",
        "product_url": "https://shop.eliminal.ua/products/eliminal-gel-clean-slim",
        "product_qty": "1 шт",
        "product_price": "999 грн",
        "cart_items_extra_html": "",
        "cart_total": "999 грн",
        "unsubscribe_url": "https://eliminal.ua/unsubscribe"
      }
    },
    "from": { "name": "Команда Eliminal", "email": "hello@eliminal.ua" },
    "to": [{ "email": "olena@example.com", "name": "Олена" }]
  }
}
```
