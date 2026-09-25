import type { ReactNode } from "react";

// White on brand red is 4.49:1, so button text stays large and bold (WCAG large text).
const base =
  "inline-flex min-h-12 items-center justify-center rounded-full px-6 py-2.5 text-[1.1875rem] font-bold leading-tight transition-colors";

export function PrimaryButton({ href, children }: { href: string; children: ReactNode }) {
  return (
    <a href={href} data-button className={`${base} bg-brand text-white hover:bg-brand-hover`}>
      {children}
    </a>
  );
}

export function SecondaryButton({ href, children }: { href: string; children: ReactNode }) {
  return (
    <a
      href={href}
      data-button
      className={`${base} border-2 border-charcoal bg-white text-charcoal hover:bg-charcoal hover:text-white`}
    >
      {children}
    </a>
  );
}
