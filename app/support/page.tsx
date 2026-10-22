import Link from "next/link";
import { pageMetadata } from "@/lib/metadata";
import { links, site } from "@/site.config";
import { pricing } from "@/lib/pricing";

export const metadata = pageMetadata(
  "Support",
  `Get help with ${site.name}: email, phone and WhatsApp contact, plus answers to common questions about accounts, sign-in, notifications and data.`,
  "/support",
);

const faqs = [
  {
    q: "How much do outgoing messages cost?",
    a: (
      <>
        Paid use is prepaid. Recharges below ₹10,000 cost ₹
        {pricing.standardMessageRupees.toFixed(2)} per outgoing AI, template or
        staff message. A ₹10,000 recharge gives 10,000 messages at ₹1 each. GST
        is {pricing.gstPercent}% extra. Your business pays Meta’s WhatsApp
        charges separately.{" "}
        <Link href="/#pricing" className="text-link">
          See pricing and the calculator.
        </Link>
      </>
    ),
  },
  {
    q: "Is there a free trial?",
    a: (
      <>
        Yes. Every new business gets one month free, with no automatic charge
        afterwards.
      </>
    ),
  },
  {
    q: "How do I get an account?",
    a: <>Your business admin creates it for you. There is no public sign-up.</>,
  },
  {
    q: "I forgot my password.",
    a: (
      <>
        Sign in with a one-time code sent to your mobile number instead. Your
        admin can also set a new password for you.
      </>
    ),
  },
  {
    q: "I'm not getting notifications.",
    a: (
      <>
        Allow notifications for {site.name} in your phone settings, and stay
        signed in to the app.
      </>
    ),
  },
  {
    q: "Which phones are supported?",
    a: (
      <>
        Android now, with iOS coming soon. You can also use any modern browser
        at{" "}
        <a href={links.app} className="text-link">
          app.choukashi.com
        </a>
        .
      </>
    ),
  },
  {
    q: "How do I delete my account or data?",
    a: (
      <>
        Follow the steps on{" "}
        <Link href="/delete-account" className="text-link">
          Delete your account or data
        </Link>
        .
      </>
    ),
  },
  {
    q: `I messaged a business and got replies from ${site.name}. Who has my data?`,
    a: (
      <>
        The business you messaged. {site.name} handles your conversation on its
        behalf. See the{" "}
        <Link href="/privacy#leads" className="text-link">
          privacy policy section on leads
        </Link>
        .
      </>
    ),
  },
];

const contacts = [
  { label: "Email", value: site.supportEmail, href: links.support },
  { label: "Call", value: site.phone, href: links.tel },
  { label: "WhatsApp", value: site.phone, href: links.whatsapp },
];

export default function SupportPage() {
  return (
    <div className="mx-auto w-full max-w-3xl px-4 py-10 sm:py-14">
      <h1 className="text-3xl font-extrabold leading-tight text-charcoal sm:text-4xl">
        Support
      </h1>
      <p className="mt-3 text-lg leading-relaxed">
        Need help with {site.name}? Get in touch. We answer emails on Indian
        working days (Monday to Saturday).
      </p>

      <section aria-labelledby="contact-h" className="mt-8">
        <h2 id="contact-h" className="sr-only">
          Contact
        </h2>
        <ul className="grid gap-3 sm:grid-cols-3">
          {contacts.map((c) => (
            <li key={c.label}>
              <a
                href={c.href}
                className="block h-full rounded-2xl border border-line bg-white p-5 hover:border-charcoal"
              >
                <span className="block text-sm font-bold uppercase tracking-wider text-muted">
                  {c.label}
                </span>
                <span className="mt-1 block break-words text-lg font-bold text-charcoal underline decoration-brand decoration-2 underline-offset-4">
                  {c.value}
                </span>
              </a>
            </li>
          ))}
        </ul>
      </section>

      <section aria-labelledby="faq-h" className="mt-14">
        <h2 id="faq-h" className="text-2xl font-extrabold text-charcoal">
          Common questions
        </h2>
        <dl className="mt-6 divide-y divide-line rounded-2xl border border-line bg-white">
          {faqs.map((f) => (
            <div key={f.q} className="p-5 sm:p-6">
              <dt className="text-lg font-bold text-charcoal">{f.q}</dt>
              <dd className="mt-2 leading-relaxed">{f.a}</dd>
            </div>
          ))}
        </dl>
      </section>

      <p className="mt-10 leading-relaxed">
        Read our{" "}
        <Link href="/privacy" className="text-link">
          Privacy Policy
        </Link>{" "}
        and{" "}
        <Link href="/terms" className="text-link">
          Terms of Service
        </Link>
        .
      </p>
    </div>
  );
}
