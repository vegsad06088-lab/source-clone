# REBRAND GUIDE — adapt this project for a new company

> **For AI coding agents** (JetBrains AI / Junie, Cursor, Copilot, Claude Code, Codex …).
> This project is a reusable website template for short-term rental apartments.
> Task "adapt this project for <company>": change **content, data and photos only**.
> Layout, components, routing and styling stay the same.

---

## 0. Input you need from the user (ask if missing)

```yaml
company:
  brand_name:        # e.g. "Apartments am Park"
  legal_name:        # Impressum
  address:           # street, zip, city, country
  phone:
  email:
  website_domain:
  instagram_url:
  uid_vat:           # UID / VAT number
  company_register:  # Firmenbuch / commercial register
  owner_name:        # responsible person (Impressum, Datenschutz)
booking:
  smoobu_widget_url: # https://login.smoobu.com/<lang>/booking-tool/iframe/<ID>?...
  viator_affiliate_url:
backend:
  supabase_url:
  supabase_publishable_key:
languages: [de, en]
apartments:
  - id: kebab-case-id   # becomes URL + photo folder name
    name:
    persons: "1-2"
    size: "35m²"
    price: 50
    beds, rooms, short + long description (per language)
guides:   # house guides (check-in, heating, TV …): keep, rewrite or delete
faq, reviews, about texts, chatbot knowledge: free text
```

Unknown value → keep the current one and add `// TODO(rebrand): <what is missing>`. List all TODOs to the user at the end.

---

## 1. File map

| What | Where | Notes |
|---|---|---|
| Brand, logo, email, Instagram, Viator link, page photo paths | `src/config/site.config.ts` | **Start here.** |
| Photos & PDFs | `public/content/**` | Fixed names, see §2 |
| Apartments (id, persons, size, price) | `src/lib/data.ts` → `apartments` | `id` = photo folder name |
| Apartment routes | `src/App.tsx` | One route per apartment inside `/:lang` **and** one top-level redirect |
| Amenities, features, reviews, FAQ | `src/lib/data.ts` | Lists of translation keys |
| Guides list | `src/lib/data.ts` → `instructions` | `id` = folder in `public/content/guides/` |
| Guide step texts + photos | `src/pages/AnleitungDetailPage.tsx` → `instructionContent` | Blocks: text / quote / image / heading / link |
| All visible texts | `src/translations/<lang>.json` | Keys are prefixed: `"de.home.hero.title"`. Change **values**, not keys |
| Active / default language | `src/lib/i18n.tsx` → `LANGUAGE_PACK`, `DEFAULT_LANGUAGE` | |
| Booking widget (Smoobu) | `src/pages/Index.tsx` (`BookingToolIframe.initialize` url), `src/lib/cookieConsent.ts` | |
| Footer (address, phone, socials) | `src/components/Footer.tsx` | Phone is hard-coded here |
| Navbar | `src/components/Navbar.tsx` | Logo from config |
| Contact page (address, map, phone) | `src/pages/ContactPage.tsx` | Update the Google Maps embed |
| About page | `src/pages/AboutPage.tsx` + translations | Has inline `{ de, en }` objects, update both |
| Legal pages | `ImpressumPage.tsx`, `DatenschutzPage.tsx`, `AGBPage.tsx`, `CookiePolicy.tsx`, `BookingConditionsPage.tsx` (in `src/pages/`) + keys `impressum.*`, `datenschutz.*`, `agb.*`, `cookies.*`, `booking.*` | New company data |
| Chatbot knowledge | `src/lib/knowledgeBase.ts` | Rewrite entries, keep structure + fallback messages |
| Chatbot name / greeting | `src/components/ChatWidget.tsx`, `src/pages/ChatPage.tsx` | |
| Guest registration | `src/pages/RegistrierungPage.tsx` | Apartment list (`TOP` param), company name |
| Supabase | `src/lib/supabase.ts` | URL + publishable key only |
| Admin | `src/pages/AdminPage.tsx` | "Template-Status" lists missing photos |
| SEO | `index.html` | `<title>`, description, `og:*` |

At the end, search for leftovers of the old brand:
```bash
rg -i "zur quelle|zur-quelle|ap-zur|apartments_zur_quelle|1656615|842 287|842287"
```
Adjust the words to the previous company. The search must come back empty, except for this guide.

---

## 2. Photo folders (fixed names: replace the files, don't rename them)

```text
public/content/
├── common/          logo.avif · voucher.png · viator-bg.avif
├── home/            hero.avif · features/{elevator,tv,hair-dryer,wifi,kitchen,towels}.avif
├── about/           hero.jpg · location.avif · gallery/01.avif … NN · why/{location,personality,service,detail}.avif
├── apartments-page/ hero.avif
├── guides-page/     hero.avif
├── contact/         hero.avif
├── apartments/<apartment-id>/ cover.avif · hero.avif · gallery/01.avif, 02.avif …
└── guides/<guide-id>/         cover.avif · de.pdf · en.pdf · steps/01.avif, 02.avif …
```

- Galleries are read from the folders automatically (`virtual:content-manifest` in `vite.config.ts`). Adding or removing photos needs no code change.
- A PDF button only appears if `de.pdf` / `en.pdf` exists.
- If you use a different extension, update its path in `src/config/site.config.ts`.
- New apartment: create its folder, add an entry in `data.ts`, add 2 routes in `App.tsx`, and add translation keys.
- Removed apartment: delete all of the above.
- `public/images/` is legacy and no longer used. It is safe to delete.

---

## 3. Procedure (follow in this order)

1. `src/config/site.config.ts`: brand, email, Instagram, Viator.
2. Apartments in `data.ts`, routes in `App.tsx`, photo folders.
3. Translations, for every language in `LANGUAGE_PACK`:
   - Rename the `apartments.<id_snake>.*` keys (`cosy-couple-nest` → `cosy_couple_nest`) here and in `data.ts`.
   - Rewrite the values of `home.*`, `about.*`, `apartments.*`, `contact.*`, `reviews.*`, `faq.*`, `footer.*`, `voucher.*`, `promo.*`.
   - Write German and English first, then translate the other languages from English.
4. Guides: `instructions` (`data.ts`), `instructionContent` (`AnleitungDetailPage.tsx`) and the `instructions.*` keys.
5. Contact, Footer, About: address, phone, map, socials, inline texts.
6. Legal pages: Impressum, Datenschutz, AGB, Cookies, Booking conditions.
7. Booking: the Smoobu URL in `Index.tsx` and `cookieConsent.ts`.
8. Chatbot: rewrite `knowledgeBase.ts`, using only facts the user gave you.
9. Registration: apartment options in `RegistrierungPage.tsx`, Supabase values in `src/lib/supabase.ts`.
10. SEO: `index.html`.
11. Verify: run the leftover search (§1), then `npm run build`. Open `/admin` and check that Template-Status shows no red items.

---

## 4. Rules (do not break)

- Do not change the layout, Tailwind classes, components, animations or routing structure.
- Do not rename translation keys, except the apartment-id keys. Every key must exist in every active language file.
- Never invent facts (prices, addresses, legal numbers). Write `TODO(rebrand)` instead.
- New brand color only on request, and only through the CSS variables in `src/index.css` (`--primary` …).
- No secret keys in code. Only the Supabase **publishable** key is allowed.
- Keep these URL patterns: `/:lang`, `/:lang/<apartment-id>`, `/:lang/anleitungen-post/:slug`, `/registrierung?TOP=…`, `/admin`.
- The `admin/admin` login is a placeholder. Remind the user to replace it before going live.

---

## 5. Done checklist (report this to the user)

- [ ] The leftover search is empty
- [ ] The build passes
- [ ] Template-Status is all green
- [ ] Every apartment opens at `/de/<id>` and `/en/<id>` with its gallery
- [ ] The booking widget shows the new property
- [ ] Impressum and Datenschutz show the new company
- [ ] List of all remaining `TODO(rebrand)` items
