import Image from "next/image";
import Link from "next/link";
import { links, site } from "@/site.config";

export function SiteHeader() {
  return (
    <header className="border-b border-line bg-white">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-2 focus:z-50 focus:rounded-md focus:bg-charcoal focus:px-4 focus:py-2 focus:text-white"
      >
        Skip to content
      </a>
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-3 px-4 sm:px-6">
        <Link href="/" className="shrink-0" aria-label={`${site.name} home`}>
          <Image
            src="/brand/logo.svg"
            alt={site.name}
            width={624}
            height={180}
            unoptimized
            priority
            className="h-7 w-auto sm:h-9"
          />
        </Link>
        <nav aria-label="Main" className="flex items-center gap-1 text-[0.95rem] font-semibold sm:gap-2">
          <Link href="/" className="rounded-md px-2 py-2 text-charcoal hover:bg-paper sm:px-3">
            Home
          </Link>
          <Link href="/support" className="rounded-md px-2 py-2 text-charcoal hover:bg-paper sm:px-3">
            Support
          </Link>
          <a
            href={links.app}
            className="ml-1 rounded-full border-2 border-charcoal px-3.5 py-1.5 text-charcoal hover:bg-charcoal hover:text-white sm:px-5"
          >
            Sign in
          </a>
        </nav>
      </div>
    </header>
  );
}
