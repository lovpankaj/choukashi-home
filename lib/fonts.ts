import { Noto_Sans_Devanagari } from "next/font/google";

// Manrope has no Devanagari; this is used only for the word चौकशी on the home page.
export const devanagari = Noto_Sans_Devanagari({
  subsets: ["devanagari"],
  weight: "800",
  preload: false,
});
