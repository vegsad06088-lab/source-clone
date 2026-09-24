/**
 * SITE CONFIG — the single file to edit when adapting this template to a new property.
 * All photos live in /public/content/** with FIXED file names (see TEMPLATE_GUIDE.md).
 * Replace the photo files, edit the values below, and the whole site updates.
 */
import { contentFiles } from "virtual:content-manifest";

const c = (p: string) => `/content/${p}`;

/** Lists numbered gallery files in a folder, e.g. gallery("apartments/x/gallery") */
export function gallery(folder: string): string[] {
  const prefix = `/content/${folder.replace(/\/$/, "")}/`;
  return contentFiles
    .filter((f) => f.startsWith(prefix) && /\.(avif|jpe?g|png|webp)$/i.test(f) && !f.slice(prefix.length).includes("/"))
    .sort();
}

export const siteConfig = {
  brand: {
    name: "Apartments zur Quelle",
    logo: c("common/logo.avif"),
  },
  contact: {
    email: "office@ap-zur-quelle.at",
    instagram: "https://www.instagram.com/apartments_zur_quelle/",
  },
  booking: {
    viatorUrl: "https://www.viator.com/Vienna/d454-ttd?localeSwitch=1&pid=P00290902&mcid=42383&medium=link",
  },
  images: {
    viatorBg: c("common/viator-bg.avif"),
    voucher: c("common/voucher.png"),
    homeHero: c("home/hero.avif"),
    aboutHero: c("about/hero.jpg"),
    aboutLocation: c("about/location.avif"),
    aboutGallery: () => gallery("about/gallery"),
    aboutWhy: {
      location: c("about/why/location.avif"),
      personality: c("about/why/personality.avif"),
      service: c("about/why/service.avif"),
      detail: c("about/why/detail.avif"),
    },
    apartmentsHero: c("apartments-page/hero.avif"),
    guidesHero: c("guides-page/hero.avif"),
    contactHero: c("contact/hero.avif"),
    features: {
      elevator: c("home/features/elevator.avif"),
      tv: c("home/features/tv.avif"),
      hairDryer: c("home/features/hair-dryer.avif"),
      wifi: c("home/features/wifi.avif"),
      kitchen: c("home/features/kitchen.avif"),
      towels: c("home/features/towels.avif"),
    },
  },
  apartment: (id: string) => ({
    cover: c(`apartments/${id}/cover.avif`),
    hero: c(`apartments/${id}/hero.avif`),
    gallery: () => gallery(`apartments/${id}/gallery`),
  }),
  guide: (id: string) => ({
    cover: c(`guides/${id}/cover.avif`),
    pdf: (lang: "de" | "en") => {
      const f = c(`guides/${id}/${lang}.pdf`);
      return contentFiles.includes(f) ? f : undefined;
    },
  }),
  /** Files the template expects — used by the admin "Template status" tab */
  requiredFiles: [
    "common/logo.avif", "common/viator-bg.avif", "common/voucher.png",
    "home/hero.avif", "about/hero.jpg", "about/location.avif",
    "apartments-page/hero.avif", "guides-page/hero.avif", "contact/hero.avif",
  ],
};

export { contentFiles };
