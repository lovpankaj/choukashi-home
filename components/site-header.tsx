import Image from "next/image";
import Link from "next/link";
import { links, site } from "@/site.config";
import { MobileNavigation } from "@/components/mobile-navigation";

export function SiteHeader() {
  return (
    <header className="site-header">
      <a href="#main" className="skip-link">
        Skip to content
      </a>
      <div className="site-header-inner">
        <Link href="/" className="site-logo" aria-label={`${site.name} home`}>
          <Image
            src="/brand/logo.svg"
            alt={site.name}
            width={624}
            height={180}
            unoptimized
            priority
          />
        </Link>
        <nav aria-label="Main" className="desktop-navigation">
          <Link href="/">Home</Link>
          <Link href="/#conversations">Real chats</Link>
          <Link href="/#features">Features</Link>
          <Link href="/#pricing">Pricing</Link>
          <Link href="/#faq">FAQs</Link>
          <Link href="/support">Support</Link>
        </nav>
        <div className="header-actions">
          <a href={links.app} className="header-signin">
            Sign in <span aria-hidden="true">↗</span>
          </a>
          <MobileNavigation />
        </div>
      </div>
    </header>
  );
}
