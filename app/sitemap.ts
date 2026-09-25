import type { MetadataRoute } from "next";
import { site } from "@/site.config";

const paths = ["/", "/privacy", "/terms", "/support", "/delete-account", "/about"];

export default function sitemap(): MetadataRoute.Sitemap {
  return paths.map((path) => ({
    url: new URL(path, site.url).toString(),
    lastModified: site.effectiveDate,
  }));
}
