import type { MetadataRoute } from "next";
import { brochures, brochurePath, brochureUpdatedAt } from "@/lib/brochures";
import { site } from "@/site.config";

const paths = ["/", "/privacy", "/terms", "/support", "/delete-account", "/about"];

export default function sitemap(): MetadataRoute.Sitemap {
  const brochurePaths = [
    "/brochures",
    ...brochures.map((brochure) => brochurePath(brochure.file)),
  ];

  return [
    ...paths.map((path) => ({
      url: new URL(path, site.url).toString(),
      lastModified: site.effectiveDate,
    })),
    ...brochurePaths.map((path) => ({
      url: new URL(path, site.url).toString(),
      lastModified: brochureUpdatedAt,
    })),
  ];
}
