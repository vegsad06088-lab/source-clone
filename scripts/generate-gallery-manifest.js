#!/usr/bin/env node
/**
 * Generate gallery data as TypeScript code
 * Reads images from /public/images folders and creates src/lib/gallery-data.ts
 * This gets compiled into the app bundle - no runtime JSON fetch needed
 */

import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const IMAGES_DIR = path.join(__dirname, "..", "public", "images");
const OUTPUT_FILE = path.join(__dirname, "..", "src", "lib", "gallery-data.ts");

// Folder names we care about
const apartments = [
  "twin-harmony-suite",
  "duo-deluxe-studio",
  "cosy-couple-nest",
  "trio-harmony-suite",
];

const galleryData = {};
let totalImages = 0;

apartments.forEach((apartmentFolder) => {
  const folderPath = path.join(IMAGES_DIR, apartmentFolder);

  if (fs.existsSync(folderPath)) {
    const files = fs
      .readdirSync(folderPath)
      .filter((file) => {
        const ext = path.extname(file).toLowerCase();
        return [".avif", ".jpg", ".jpeg", ".png", ".webp", ".gif"].includes(
          ext
        );
      })
      .map((file) => `/images/${apartmentFolder}/${file}`)
      .sort();

    galleryData[apartmentFolder] = files;
    totalImages += files.length;
    console.log(`✅ Found ${files.length} images in ${apartmentFolder}`);
  } else {
    console.warn(`⚠️  Folder not found: ${folderPath}`);
    galleryData[apartmentFolder] = [];
  }
});

// Generate TypeScript code
const tsCode = `// Auto-generated gallery data from /public/images folders
// This file is generated at build time - do not edit manually
// Images are read dynamically from folders and compiled into the bundle

export const galleryImages: Record<string, string[]> = ${JSON.stringify(
  galleryData,
  null,
  2
)};

export function getGalleryImages(apartmentId: string): string[] {
  return galleryImages[apartmentId] || [];
}
`;

// Write TypeScript file
fs.writeFileSync(OUTPUT_FILE, tsCode);
console.log(`\n✅ Gallery data generated at ${OUTPUT_FILE}`);
console.log(`✅ Total images: ${totalImages} across ${apartments.length} apartments`);


