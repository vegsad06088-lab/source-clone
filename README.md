# 🏠 Apartments zur Quelle - Vienna Apartment Rental Platform

A modern, multi-language apartment rental booking website built with React, TypeScript, and Tailwind CSS. Features dynamic image loading, geolocation-based language detection, smooth animations, and a beautiful responsive design.

**Live Demo**: Deploy to Vercel with `npm run build` and connect your domain

---

## ✨ Features

### 🌍 Multi-Language Support
- **Automatic Language Detection**: Geolocation-based detection
  - 🇦🇹 Austria → German (DE)
  - 🇩🇪 Germany → German (DE)
  - 🇨🇭 Switzerland → German (DE)
  - 🇦🇱 Albania → Albanian (SQ)
  - 🌐 Other countries → English (EN)
  - 🔄 Fallback: German (DE)
- Languages: German (DE), English (EN), Albanian (SQ)
- Easy to add more languages via translation files

### 🏘️ Apartment Management
- **4 Featured Apartments** with dynamic galleries
- **Automatic Gallery Loading**: Photos automatically discovered from folder structure
- **Responsive Cards**: Beautiful apartment cards with smooth hover effects
- **Booking Integration**: Smoobu booking widget embedded
- **Quick Info Section**: Guests, beds, rooms, and size at a glance

### 📱 Responsive Design
- Mobile-first approach
- Works perfectly on all devices (phone, tablet, desktop)
- Smooth animations and transitions

### 🎨 Beautiful UI
- **Curvy Buttons**: Modern, elegant button styling
- **Smooth Animations**: Fade-in, scale, and slide effects
- **Dark Mode Ready**: Full theme support
- **Tailwind CSS**: Utility-first CSS framework
- **shadcn-ui**: High-quality component library

### 📚 Features & Sections
- **Home Page**: Hero, booking widget, apartments showcase, features, reviews, FAQ
- **About Us Page**: Company story, location map, photo gallery, why choose us
- **Apartments Page**: Full apartment listing with organized grid
- **Contact Page**: Contact form, direct contact info, Viator tours integration
- **Instructions/Guides**: WiFi, heating, TV, parking, luggage storage, check-in/out
- **Voucher System**: Promotional offers with Memoji mascot

### 🖼️ Optimized Image Management
- **Organized Folder Structure**:
  ```
  public/images/
  ├── commons/              → Shared images (opera.avif, logo.avif)
  ├── home/features/        → Feature icons
  ├── about/                → About page photos
  ├── anleitungen/          → Instructions with subcategories
  ├── apartments/           → Apartment galleries
  └── not_used/             → Archived images
  ```
- **Automatic Gallery Discovery**: Add images to folders, they appear automatically
- **Optimized AVIF Format**: Modern, compressed images for faster loading

---

## 🛠️ Tech Stack

```
Frontend Framework    → React 18 with TypeScript
Build Tool           → Vite
Styling              → Tailwind CSS + PostCSS
UI Components        → shadcn-ui + Lucide Icons
State Management     → React Context (i18n)
Routing              → React Router v6
HTTP Client          → Fetch API
Booking Widget       → Smoobu iframe
Deployment           → Vercel
Testing              → Vitest + Playwright
```

---

## 🚀 Quick Start

### Prerequisites
- Node.js 16+ (use [nvm](https://github.com/nvm-sh/nvm))
- npm or yarn

### Installation

```bash
# Clone repository
git clone <YOUR_GIT_URL>
cd source-clone

# Install dependencies
npm install

# Start development server (auto-reload)
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Run tests
npm run test

# Run e2e tests
npm run test:e2e

# Lint code
npm run lint
```

The dev server runs at `http://localhost:5173`

---

## 📁 Project Structure

```
src/
├── components/
│   ├── ApartmentCard.tsx        → Card component for apartments
│   ├── VoucherBanner.tsx        → Promotional voucher banner
│   ├── LanguageSelector.tsx     → Multi-language switcher
│   ├── PromoBanner.tsx          → Promo section
│   ├── Lightbox.tsx             → Image gallery lightbox
│   └── ...more components
├── pages/
│   ├── Index.tsx                → Home page
│   ├── AboutPage.tsx            → About us
│   ├── ApartmentsPage.tsx       → Apartments listing
│   ├── ContactPage.tsx          → Contact form
│   ├── AnleitungenPage.tsx      → Instructions/guides
│   └── ApartmentDetailPage.tsx  → Individual apartment details
├── lib/
│   ├── i18n.tsx                 → Multi-language system with geolocation
│   ├── data.ts                  → Apartment data + dynamic gallery loader
│   └── hooks/
│       └── useScrollAnimation.ts → Scroll animation hook
├── translations/
│   ├── de.json                  → German translations
│   ├── en.json                  → English translations
│   └── sq.json                  → Albanian translations
├── assets/                       → Images, icons
└── App.tsx                       → Main app component
```

---

## 🎯 Key Features Explained

### Dynamic Language Detection
The app automatically detects user location via IP geolocation and sets the language accordingly. Falls back to German if detection fails.

```typescript
// src/lib/i18n.tsx
const detectLanguageByGeolocation = async () => {
  // Uses ipapi.co for free geolocation
  // Maps country codes to languages
  // Smart fallback system
}
```

### Automatic Gallery Loading
Add images to `/src/assets/images/{apartment}/` and they appear automatically in the gallery - no code changes needed!

```typescript
// src/lib/data.ts
const loadGallery = async (folderName: string): Promise<string[]> => {
  // Dynamically loads all images from a folder
  // Sorts for consistent ordering
  // Works on Vercel
}
```

### Beautiful Animations
- Fade-in on scroll
- Scale effects on hover
- Smooth transitions on all interactions

---

## 📖 Adding New Content

### Add a New Apartment
1. Edit `src/lib/data.ts`
2. Add new apartment object with required fields
3. Create folder in `/src/assets/images/{apartment-name}/`
4. Add images to that folder
5. Images auto-load in gallery ✅

### Add a New Language
1. Create `src/translations/{code}.json` (e.g., `fr.json`)
2. Add language to `LANGUAGE_PACK` in `src/lib/i18n.tsx`
3. Add metadata to `LanguageSelector.tsx`
4. Translation keys auto-populate ✅

### Add Instructions/Guides
1. Edit `src/lib/data.ts` in the `instructions` array
2. Add new instruction object
3. Add image to appropriate `anleitungen` subfolder
4. Update translations with guide text ✅

---

## 🚀 Deployment

### Deploy to Vercel
```bash
# Build locally
npm run build

# Deploy (Vercel CLI)
vercel

# Or push to GitHub and connect Vercel
git push origin main
```

### Connect Custom Domain
1. Go to Vercel Dashboard
2. Project Settings → Domains
3. Add your domain
4. Update DNS records

---

## 🎨 Customization

### Colors & Theme
Edit `tailwind.config.ts` for brand colors and theme variables

### Fonts
Customize in `index.css` - currently uses system fonts + serif fonts

### Animation Speed
Modify `transition-smooth` class in Tailwind config

---

## 📊 Performance

- ✅ AVIF image format (modern compression)
- ✅ Lazy loading for images
- ✅ Code splitting with Vite
- ✅ Optimized bundle size
- ✅ Vercel edge network deployment

---

## 🔒 Privacy & Security

- GDPR-compliant privacy policy page
- Secure contact form with validation
- No tracking without consent
- All data handled securely

---

## 📞 Support & Maintenance

### Common Issues

**Images not loading:**
- Check `/public/images/` folder structure
- Verify file extensions (.avif, .jpg, .png)
- Clear browser cache and rebuild

**Language not detecting:**
- Check browser geolocation permissions
- Verify VPN isn't interfering
- Check browser console for errors

**Booking widget not appearing:**
- Check Smoobu iframe URL in Index.tsx
- Verify account is active
- Clear cookies and reload

---

## 📝 Documentation Files

- `IMAGE_ORGANIZATION_SUMMARY.md` - Image folder structure guide
- `LANGUAGE_QUICK_REFERENCE.md` - Translation keys reference
- `GETTING_STARTED.md` - Initial setup guide

---

## 🔄 Build & Deploy Workflow

```bash
# Local development
npm run dev              # Start dev server

# Before commit
npm run lint            # Check code quality
npm run test            # Run tests

# Build for production
npm run build           # Create optimized build
npm run preview         # Test production build locally

# Deploy
git add .
git commit -m "message"
git push origin main    # Vercel auto-deploys
```

---

## 📦 Dependencies

See `package.json` for complete list. Key packages:
- `react` - UI library
- `react-router-dom` - Client routing
- `tailwindcss` - Styling
- `shadcn-ui` - Component library
- `lucide-react` - Icons
- `swiper` - Touch carousel

---

## 🎓 Learn More

- [Vite Documentation](https://vitejs.dev)
- [React Documentation](https://react.dev)
- [Tailwind CSS](https://tailwindcss.com)
- [shadcn-ui](https://ui.shadcn.com)

---

## 📄 License

This project is proprietary. All rights reserved.

---

## 👨‍💻 Developer Notes

This is a production-ready apartment rental website. All features are tested and optimized for Vercel deployment. Images are organized by feature/section for easy maintenance. Multi-language support is automated via geolocation.

**Last Updated**: March 2026
**Status**: ✅ Production Ready
