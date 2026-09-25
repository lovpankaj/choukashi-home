import type { Metadata } from "next";

/** Per-page title, description, canonical URL and Open Graph text. */
export function pageMetadata(title: string, description: string, path: string): Metadata {
  return {
    title,
    description,
    alternates: { canonical: path },
    // A page-level openGraph object replaces the inherited one, so name the image again.
    openGraph: { title, description, url: path, images: "/opengraph-image.png" },
  };
}
