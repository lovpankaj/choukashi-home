import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Page not found",
  description: "This page does not exist.",
};

export default function NotFound() {
  return (
    <div className="mx-auto flex w-full max-w-xl flex-1 flex-col justify-center px-4 py-20 text-center">
      <p className="text-6xl font-extrabold text-brand">404</p>
      <h1 className="mt-4 text-3xl font-extrabold text-charcoal">Page not found</h1>
      <p className="mt-3 text-lg leading-relaxed">
        We couldn&apos;t find that page. It may have moved, or the link may be wrong.
      </p>
      <ul className="mt-8 flex flex-wrap justify-center gap-x-6 gap-y-3">
        <li>
          <Link href="/" className="text-link">
            Home
          </Link>
        </li>
        <li>
          <Link href="/support" className="text-link">
            Support
          </Link>
        </li>
        <li>
          <Link href="/privacy" className="text-link">
            Privacy Policy
          </Link>
        </li>
      </ul>
    </div>
  );
}
