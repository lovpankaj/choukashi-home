import Link from "next/link";
import { links, site } from "@/site.config";

const footerLinks = [
  { href: "/privacy", label: "Privacy" },
  { href: "/terms", label: "Terms" },
  { href: "/support", label: "Support" },
  { href: "/delete-account", label: "Delete account" },
  { href: "/about", label: "About" },
];

export function SiteFooter() {
  return (
    <footer className="mt-auto bg-charcoal text-white">
      <div className="mx-auto grid max-w-6xl gap-8 px-4 py-10 sm:px-6 md:grid-cols-[1fr_auto]">
        <div>
          <nav aria-label="Footer">
            <ul className="flex flex-wrap gap-x-6 gap-y-3 font-semibold">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="underline-offset-4 hover:underline">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <p className="mt-6 text-sm leading-relaxed text-white/85">
            © {new Date().getFullYear()} {site.legalEntity}
            <br />
            {site.registeredAddress}
          </p>
        </div>
        <ul className="space-y-2 text-sm text-white/85">
          <li>
            Email:{" "}
            <a href={links.support} className="font-semibold text-white underline underline-offset-4">
              {site.supportEmail}
            </a>
          </li>
          <li>
            Call:{" "}
            <a href={links.tel} className="font-semibold text-white underline underline-offset-4">
              {site.phone}
            </a>
          </li>
          <li>
            <a href={links.whatsapp} className="font-semibold text-white underline underline-offset-4">
              Message us on WhatsApp
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}
