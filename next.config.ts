import type { NextConfig } from "next";
import { unfilledPlaceholders } from "./site.config";

const unfilled = unfilledPlaceholders();
if (unfilled.length > 0) {
  console.warn(
    `\n⚠ site.config.ts still has unfilled placeholders: ${unfilled.join(", ")}\n`,
  );
}

const nextConfig: NextConfig = {};

export default nextConfig;
