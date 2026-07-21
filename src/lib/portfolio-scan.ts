import fs from "fs";
import path from "path";
import { caseStudies, type CaseStudy, type PortfolioImage } from "./portfolio-galleries";

/**
 * Folder-driven portfolio (server-only, runs at build time).
 *
 * public/media/portfolio/ is the source of truth. Every folder is one
 * project or one service category. This module merges the folders with the
 * curated case studies in portfolio-galleries.ts:
 *
 *  1. Curated stories keep their titles, order, summaries, and hand-written
 *     alt text, nothing is lost.
 *  2. Any NEW image dropped into a folder that already has a story is
 *     appended to that story's gallery automatically (sorted by filename,
 *     so the 01- prefix convention controls order and the thumbnail).
 *  3. Any NEW folder containing images becomes its own project
 *     automatically, folder name in elegant title case, first image as
 *     the cover, the rest as the gallery.
 *
 * If anything goes wrong reading the filesystem, the curated set is
 * returned unchanged, so the portfolio can never break the build.
 */

const PORTFOLIO_DIR = path.join(process.cwd(), "public", "media", "portfolio");
const IMAGE_EXTENSIONS = new Set([".jpg", ".jpeg", ".png", ".webp", ".avif", ".gif"]);

/** "azoyahs-graduation-celebration" or "Commercial Styling" → "Commercial Styling" */
function titleCase(folderName: string): string {
  const minor = new Set(["and", "of", "the", "a", "an", "for", "at", "with"]);
  return folderName
    .replace(/[-_]+/g, " ")
    .split(" ")
    .filter(Boolean)
    .map((word, i) => {
      const lower = word.toLowerCase();
      if (i > 0 && minor.has(lower)) return lower;
      return word.charAt(0).toUpperCase() + word.slice(1);
    })
    .join(" ");
}

/** "03-table-number-portrait.jpg" → "table number portrait" */
function describeFile(fileName: string): string {
  return path
    .basename(fileName, path.extname(fileName))
    .replace(/^\d+[-_]*/, "")
    .replace(/[-_]+/g, " ")
    .trim();
}

function isImage(fileName: string): boolean {
  return IMAGE_EXTENSIONS.has(path.extname(fileName).toLowerCase()) && !fileName.startsWith(".");
}

/** All images in a folder (including subfolders), sorted by path. */
function listImages(dir: string, urlBase: string): string[] {
  const results: string[] = [];
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const entry of entries.sort((a, b) => a.name.localeCompare(b.name))) {
    if (entry.name.startsWith(".")) continue;
    const full = path.join(dir, entry.name);
    const url = `${urlBase}/${entry.name}`;
    if (entry.isDirectory()) {
      results.push(...listImages(full, url));
    } else if (entry.isFile() && isImage(entry.name)) {
      results.push(url);
    }
  }
  return results;
}

/** Folder name inside /media/portfolio/ that a given image src belongs to. */
function folderOfSrc(src: string): string | null {
  const match = src.match(/^\/media\/portfolio\/([^/]+)\//);
  return match ? decodeURIComponent(match[1]) : null;
}

export function buildPortfolio(): CaseStudy[] {
  try {
    if (!fs.existsSync(PORTFOLIO_DIR)) return caseStudies;

    // Every image src already referenced by the curated stories.
    const referenced = new Set<string>();
    for (const study of caseStudies) {
      for (const img of study.images) referenced.add(img.src);
    }

    // First curated story that draws from each folder, new images in that
    // folder join this story.
    const folderOwner = new Map<string, CaseStudy>();
    for (const study of caseStudies) {
      for (const img of study.images) {
        const folder = folderOfSrc(img.src);
        if (folder && !folderOwner.has(folder)) folderOwner.set(folder, study);
      }
    }

    // Deep-copy curated stories so we can append without mutating module state.
    const merged: CaseStudy[] = caseStudies.map((study) => ({
      ...study,
      images: [...study.images],
    }));
    const mergedBySlug = new Map(merged.map((study) => [study.slug, study]));

    const folders = fs
      .readdirSync(PORTFOLIO_DIR, { withFileTypes: true })
      .filter((entry) => entry.isDirectory());

    for (const folder of folders) {
      const dir = path.join(PORTFOLIO_DIR, folder.name);
      const urlBase = `/media/portfolio/${encodeURI(folder.name)}`;
      let images: string[] = [];
      try {
        images = listImages(dir, urlBase);
      } catch {
        continue;
      }
      if (images.length === 0) continue; // placeholder folders awaiting photos

      const owner = folderOwner.get(folder.name);
      if (owner) {
        // Append any images not already curated, keeping curated order first.
        const target = mergedBySlug.get(owner.slug);
        if (!target) continue;
        for (const src of images) {
          if (!referenced.has(src)) {
            referenced.add(src);
            target.images.push({
              src,
              alt: `${target.title}, ${describeFile(src)}`,
            });
          }
        }
      } else {
        // Brand-new folder → its own project, folder name in title case.
        const title = titleCase(folder.name);
        const newImages: PortfolioImage[] = images
          .filter((src) => !referenced.has(src))
          .map((src) => ({ src, alt: `${title}, ${describeFile(src)}` }));
        if (newImages.length === 0) continue;
        for (const img of newImages) referenced.add(img.src);
        merged.push({
          slug: folder.name.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, ""),
          title,
          subtitle: "Fly Girl Events & Design",
          summary: "",
          category: "",
          images: newImages,
        });
      }
    }

    return merged;
  } catch {
    return caseStudies;
  }
}
