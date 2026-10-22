"use client";

import { useRef } from "react";
import Link from "next/link";

export function MobileNavigation() {
  const menu = useRef<HTMLDetailsElement>(null);
  return (
    <details
      ref={menu}
      className="mobile-navigation"
      onKeyDown={(event) => {
        if (event.key === "Escape" && menu.current) {
          menu.current.open = false;
          menu.current.querySelector("summary")?.focus();
        }
      }}
    >
      <summary>Menu</summary>
      <nav
        aria-label="Mobile"
        onClick={(event) => {
          if ((event.target as HTMLElement).closest("a") && menu.current)
            menu.current.open = false;
        }}
      >
        <Link href="/">Home</Link>
        <Link href="/#conversations">Real chats</Link>
        <Link href="/#features">Features</Link>
        <Link href="/#pricing">Pricing</Link>
        <Link href="/#faq">FAQs</Link>
        <Link href="/support">Support</Link>
      </nav>
    </details>
  );
}
