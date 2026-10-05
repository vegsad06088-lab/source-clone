# Template Guide — new apartment site in ~2 hours

> AI agents: the complete, step-by-step instructions are in **docs/REBRAND_GUIDE.md**.

Goal: duplicate this project, swap photos + texts, publish. Written for humans **and** AI assistants
(tell your AI: "Follow TEMPLATE_GUIDE.md and adapt the site to the photos/texts I provide").

## 1. Photos — `public/content/` (fixed file names, just replace the files)

```text
public/content/
├── common/        logo.avif, voucher.png, viator-bg.avif
├── home/          hero.avif, features/{elevator,tv,hair-dryer,wifi,kitchen,towels}.avif
├── about/         hero.jpg, location.avif, gallery/01.avif..NN, why/{location,personality,service,detail}.avif
├── apartments-page/hero.avif
├── guides-page/   hero.avif
├── contact/       hero.avif
├── apartments/<apartment-id>/  cover.avif, hero.avif, gallery/01.avif, 02.avif, ...
└── guides/<guide-id>/          cover.avif, de.pdf, en.pdf, steps/01.avif, 02.avif, ...
```

- Galleries are found automatically — add/remove numbered files, nothing else to change.
- PDF buttons appear only when `de.pdf` / `en.pdf` exist.
- Keep extensions as listed, or update the path in `src/config/site.config.ts`.
- Recommended: hero 1920×1080, cover 1200×800, gallery 1600px long side, AVIF/JPG < 400 KB.

## 2. Settings — `src/config/site.config.ts`
Brand name, logo, e-mail, Instagram, Viator link, and all page photo paths.

## 3. Apartments & guides — `src/lib/data.ts`
Add/rename apartments (id must match the folder name), persons, size, price.
Guide step texts/photos: `src/pages/AnleitungDetailPage.tsx`.

## 4. Texts — `src/translations/*.json`
Edit `de.json` + `en.json` first; other languages fall back.

## 5. Chatbot knowledge — `src/lib/knowledgeBase.ts`

## 6. Check & go live
- Open `/admin` → **Template-Status** shows every missing photo.
- Update Impressum, Datenschutz, AGB, booking widget ID, Supabase project.
- Replace the `admin/admin` login with real accounts before going live.
