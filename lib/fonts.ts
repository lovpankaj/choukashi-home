import {
  Noto_Sans_Devanagari,
  Noto_Sans_Tamil,
  Noto_Sans_Telugu,
  Noto_Sans_Gujarati,
  Noto_Sans_Bengali,
} from "next/font/google";

// Native-script excerpts need reading weights as well as the display weight.
export const devanagari = Noto_Sans_Devanagari({
  variable: "--font-devanagari",
  subsets: ["devanagari"],
  weight: ["400", "500", "600", "700", "800"],
  preload: false,
});

// Self-host just the display weights needed by the multilingual word composition.
export const tamil = Noto_Sans_Tamil({
  subsets: ["tamil"],
  weight: "600",
  preload: false,
});
export const telugu = Noto_Sans_Telugu({
  subsets: ["telugu"],
  weight: "600",
  preload: false,
});
export const gujarati = Noto_Sans_Gujarati({
  subsets: ["gujarati"],
  weight: "600",
  preload: false,
});
export const bengali = Noto_Sans_Bengali({
  subsets: ["bengali"],
  weight: "600",
  preload: false,
});
