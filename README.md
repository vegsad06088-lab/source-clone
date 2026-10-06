# Apartment Website Template

A multi-language website for holiday apartments: home, apartments, about, house guides, contact, chatbot, guest registration and admin.
It's built so that **a new company only changes JSON files and photos**. The design stays the same.

| Guide | For |
|---|---|
| **README.md** (this file) | What can be changed, and where |
| [`docs/REBRAND_GUIDE.md`](docs/REBRAND_GUIDE.md) | Step-by-step guide to switch to a new company (for you or an AI agent) |
| [`docs/OVERVIEW.md`](docs/OVERVIEW.md) | Short technical overview, troubleshooting |
| `docs/archive/` | Old notes, not needed |

---

## 1. Start locally

```bash
npm install      # once
npm run dev      # http://localhost:8080
```
Admin: http://localhost:8080/admin (login `admin` / `admin`, **replace it before going live**).

---

## 2. Admin: change everything with clicks (local only)

`/admin` has three areas:

1. **Einstellungen (Settings):** lists every JSON file in the project.
   - `pages.json` shows **switches**. One click turns a page or feature on or off.
   - Every other file opens in an editor. Edit it, click **Speichern** (Save), and the file is written to disk and the preview reloads.
   - Invalid JSON is rejected, so a broken file is never saved.
2. **Template-Status:** shows which photos are missing (red) or present (green).
3. **Gästeregistrierung (guest registration):** list of registrations and CSV export.

> The settings editor **only works while running `npm run dev`** on your computer.
> On the published website it doesn't exist, so nobody can change files there.
> After changing settings locally, publish or deploy again.

---

## 3. JSON settings files

### `src/config/pages.json`: which pages are active
```json
{
  "pages": {
    "apartments": true,     // /apartments + every apartment detail page
    "about": true,          // /about  (Über uns)
    "anleitungen": true,    // /anleitungen + every guide page
    "contact": true,        // /contact
    "chat": true,           // /chat (full-page chatbot)
    "registrierung": true   // /registrierung (guest registration form)
  },
  "features": {
    "chatWidget": true      // floating chat bubble at the bottom right of every page
  }
}
```
`false` hides the page from the menu and the footer, and its address shows "Not found".
Home, the legal pages (Impressum, Datenschutz, AGB, Cookies) and Admin are always on.

### `src/config/site.json`: company data
| Key | Meaning |
|---|---|
| `brand.name` | Company name (logo alt text, page texts) |
| `contact.email` / `contact.phone` | Contact data |
| `contact.instagram` | Instagram link |
| `booking.viatorUrl` | Link of the "Vienna tours" (Viator) box |

### `src/components/promo/offers.json`: discount banner and voucher
| Key | Meaning |
|---|---|
| `promo.enabled` | Show the "save X% from N nights" banner |
| `promo.percentage` / `promo.nights` | Discount % and minimum nights |
| `promo.showAsAlert` | Also show a pop-up on the first visit |
| `voucher.enabled` | Show the voucher box |
| `voucher.voucherCode` / `voucherValue` / `currency` | Code, value, currency |

### `src/translations/<lang>.json`: all texts
One file per language (`de`, `en`, `sq`, `fr`, `it`, `es`, `tr`, `ru`, `ja`, `zh`).
Keys look like `"de.home.hero.title"`. **Change only the text on the right**, never the key.
Which languages are visible is set in `LANGUAGE_PACK` in `src/lib/i18n.tsx`.

### Not yet JSON (edit the TypeScript file)
| What | File |
|---|---|
| Apartments (id, persons, size, price), guides list, FAQ, reviews | `src/lib/data.ts` |
| Guide step-by-step content | `src/pages/AnleitungDetailPage.tsx` |
| Chatbot answers | `src/lib/knowledgeBase.ts` |
| Smoobu booking widget link | `src/pages/Index.tsx` |
| Address and map | `src/components/Footer.tsx`, `src/pages/ContactPage.tsx` |

---

## 4. Photos: where each photo goes

All photos are in **`public/content/`**. Replace a file with the **same name** and the page changes. No code is needed.

| Folder / file | Shown on | Size (recommended) |
|---|---|---|
| `common/logo.avif` | Menu bar, every page | about 400×120, transparent |
| `common/viator-bg.avif` | "Vienna tours" box (Apartments, About, Guides, Contact) | 1920×600 |
| `common/voucher.png` | Voucher box (character / mascot) | 400×400, transparent |
| `home/hero.avif` | Home: big top photo | 1920×1080 |
| `home/features/elevator.avif` … `towels.avif` | Home: 6 equipment tiles (elevator, tv, hair-dryer, wifi, kitchen, towels) | 800×600 |
| `about/hero.jpg` | About: top photo | 1920×1080 |
| `about/gallery/01.avif, 02.avif …` | About: photo slider (any number) | 1600 px long side |
| `about/location.avif` | About: location photo | 1200×800 |
| `about/why/location / personality / service / detail.avif` | About: "Why guests love us" 4 tiles | 800×600 |
| `apartments-page/hero.avif` | Apartments page: top photo | 1920×1080 |
| `apartments/<id>/cover.avif` | Apartment card (Home + Apartments) | 1200×800 |
| `apartments/<id>/hero.avif` | Apartment detail: top photo | 1920×1080 |
| `apartments/<id>/gallery/01.avif …` | Apartment detail: gallery and fullscreen viewer (any number, sorted by number) | 1600 px long side |
| `guides-page/hero.avif` | Guides page: top photo | 1920×1080 |
| `guides/<id>/cover.avif` | Guide card | 1200×800 |
| `guides/<id>/steps/01.avif …` | Guide detail: step photos | 1200 px wide |
| `guides/<id>/de.pdf`, `en.pdf` | Guide PDF download buttons (shown only if the file exists) | none |
| `contact/hero.avif` | Contact: top photo | 1920×1080 |

- `<id>` = the apartment or guide id from `src/lib/data.ts` (for example `cosy-couple-nest`).
- Galleries pick up new photos automatically. Restart `npm run dev` if one doesn't appear.
- Using `.jpg` instead of `.avif` works if you also change the path in `src/config/site.config.ts`.
- `/admin` → Template-Status shows any missing photo.

---

## 5. Project structure (short)

```text
public/content/        photos + PDFs (see section 4)
src/config/            pages.json · site.json · site.config.ts (reads the JSON + photo paths)
src/translations/      texts per language
src/lib/data.ts        apartments, guides, FAQ, reviews
src/pages/             one file per page
src/components/        menu, footer, banners, admin tools
vite.config.ts         photo scanner + local settings editor
```

## 6. Publish
Run `npm run build`, then deploy (Lovable Publish, Vercel, …). Settings changed locally are only part of the live site after you publish again.
