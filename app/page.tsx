import Image from "next/image";
import Link from "next/link";
import { PrimaryButton, SecondaryButton } from "@/components/buttons";
import { BrowserFrame, PhoneFrame } from "@/components/frames";
import { pageMetadata } from "@/lib/metadata";
import { links, mailto, site } from "@/site.config";
import { devanagari } from "@/lib/fonts";

export const metadata = {
  ...pageMetadata(
    "Choukashi — every WhatsApp enquiry, answered",
    "Choukashi answers your dealership's WhatsApp enquiries in seconds, in the lead's own language, books showroom visits and hands each lead to your staff. Try it free for a month.",
    "/",
  ),
  title: { absolute: "Choukashi — every WhatsApp enquiry, answered" },
};

const talkToUs = mailto(site.supportEmail, "Choukashi for my showroom");

const problems = [
  {
    title: "Leads arrive at all hours",
    text: "Your ads run day and night. Enquiries come in late in the evening, on Sundays, in the middle of a busy showroom rush.",
  },
  {
    title: "Replies come late, or never",
    text: "Staff answer when they can. By then the lead has asked another dealer. The same questions get answered again and again.",
  },
  {
    title: "You can't see who is going cold",
    text: "As the owner, you don't know which leads are waiting, who is following up, and which ones have quietly gone.",
  },
];

const steps = [
  {
    title: "Set up your showroom",
    text: "Connect your WhatsApp Business number and add your models, prices, offers and showroom details. Type them in or pull them from a brochure PDF. You review everything before it goes live.",
  },
  {
    title: "A lead messages",
    text: "The assistant answers only from your own information, in English, Hindi, Marathi or a mix. When it doesn't know, it says so and asks your staff instead of guessing.",
  },
  {
    title: "It books the visit",
    text: "It works out what the lead wants and what is holding them back, then offers a showroom visit or test ride and books it into your Google Calendar.",
  },
  {
    title: "Your staff take over",
    text: "Staff get the lead with a ready brief: needs, open questions, next step. They can take over the chat at any time, and the lead gets a visit summary they can correct.",
  },
];

const ownerPoints = [
  "Every lead marked Hot, Warm or Cold, with the reason shown.",
  "Recurring obstacles, such as finance questions or stock availability.",
  "A view of who on your team is responding, and who isn't.",
  "Every lead assigned to one staff member automatically.",
];

const staffPoints = [
  "A phone app for Android (iOS coming soon) and a web app.",
  "Staff see only their own leads.",
  "A notification when a lead needs them.",
  "Replies go out from your dealership's own WhatsApp number.",
];

const trustPoints = [
  "Each business's data is kept separate from every other business's.",
  "Stored in Google Cloud in India (Mumbai region).",
  `Conversations deleted automatically after a retention period you set (${site.retentionDaysDefault} days by default).`,
  "No advertising. Your data is never sold.",
];

function Check() {
  return (
    <svg viewBox="0 0 20 20" aria-hidden="true" className="mt-1 size-5 shrink-0 text-brand">
      <circle cx="10" cy="10" r="10" fill="currentColor" opacity="0.12" />
      <path d="M6 10.5l2.5 2.5L14 7.5" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function PointList({ items }: { items: string[] }) {
  return (
    <ul className="mt-6 space-y-3">
      {items.map((item) => (
        <li key={item} className="flex gap-3 text-[1.05rem] leading-relaxed">
          <Check />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <p className="flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-charcoal">
      <span aria-hidden="true" className="h-1 w-6 rounded-full bg-brand" />
      {children}
    </p>
  );
}

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="overflow-hidden">
        <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 pb-16 pt-10 sm:px-6 md:grid-cols-[1.15fr_0.85fr] md:pb-24 md:pt-16">
          <div>
            <p className="inline-flex items-center gap-2 rounded-full bg-tint px-3 py-1 text-sm font-semibold text-charcoal">
              <span aria-hidden="true" className="size-2 rounded-full bg-brand" />
              For vehicle dealerships in India
            </p>
            <h1 className="mt-5 text-[2.35rem] font-extrabold leading-[1.08] tracking-tight text-charcoal sm:text-5xl lg:text-6xl">
              Every WhatsApp enquiry, answered — and turned into a{" "}
              <span className="text-brand">showroom visit.</span>
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-ink">
              When a lead messages your dealership&apos;s WhatsApp number, Choukashi&apos;s assistant replies within
              seconds, in the lead&apos;s own language, using your real models, prices and hours. It books the visit and
              hands the lead to your staff.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <PrimaryButton href={talkToUs}>Talk to us</PrimaryButton>
              <SecondaryButton href={links.app}>Sign in</SecondaryButton>
            </div>
            <p className="mt-5 text-muted">Free for the first month. No automatic charge afterwards.</p>
          </div>
          <div className="relative mx-auto w-full max-w-[18rem] md:max-w-[19rem]">
            <Image
              src="/brand/icon-bubble.png"
              alt=""
              width={1024}
              height={1024}
              aria-hidden="true"
              className="absolute -right-10 -top-8 w-28 rotate-6 opacity-90 sm:-right-16 sm:w-36"
            />
            <PhoneFrame
              src="/screenshots/web-inbox-phone.png"
              alt="The Choukashi inbox on a phone, listing leads with who they are assigned to (demo data)."
              width={390}
              height={844}
              priority
              className="relative"
            />
          </div>
        </div>
      </section>

      {/* The name */}
      <section className="border-y border-line bg-white">
        <div className="mx-auto flex max-w-6xl flex-col gap-2 px-4 py-8 sm:px-6 md:flex-row md:items-baseline md:gap-6">
          <p className="text-2xl font-extrabold text-charcoal">
            <span lang="mr" className={devanagari.className}>
              चौकशी
            </span>{" "}
            <span className="font-semibold text-muted">· choukashi</span>
          </p>
          <p className="text-lg leading-relaxed">
            means <em>enquiry</em>: asking about something before you buy it. Every enquiry deserves an answer.
          </p>
        </div>
      </section>

      {/* Problem */}
      <section aria-labelledby="problem-h" className="mx-auto w-full max-w-6xl px-4 py-16 sm:px-6 md:py-24">
        <Eyebrow>The problem</Eyebrow>
        <h2 id="problem-h" className="mt-3 max-w-2xl text-3xl font-extrabold leading-tight text-charcoal sm:text-4xl">
          You pay for the ad. Then the lead waits.
        </h2>
        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {problems.map((p) => (
            <div key={p.title} className="rounded-2xl border border-line bg-white p-6">
              <h3 className="text-lg font-bold text-charcoal">{p.title}</h3>
              <p className="mt-2 leading-relaxed">{p.text}</p>
            </div>
          ))}
        </div>
        <figure className="mt-8 rounded-2xl bg-tint p-6">
          <figcaption className="text-sm font-semibold text-muted">What leads usually ask, again and again</figcaption>
          <ul className="mt-3 flex flex-wrap gap-2 text-[1.05rem] font-semibold text-charcoal">
            <li className="rounded-full bg-white px-4 py-1.5">&ldquo;On-road price kitna hai?&rdquo;</li>
            <li className="rounded-full bg-white px-4 py-1.5">&ldquo;EMI milega?&rdquo;</li>
            <li className="rounded-full bg-white px-4 py-1.5">&ldquo;Red colour stock mein hai?&rdquo;</li>
            <li className="rounded-full bg-white px-4 py-1.5">&ldquo;Sunday ko showroom khula hai?&rdquo;</li>
          </ul>
        </figure>
      </section>

      {/* How it works */}
      <section aria-labelledby="how-h" className="bg-white">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 md:py-24">
          <Eyebrow>How it works</Eyebrow>
          <h2 id="how-h" className="mt-3 max-w-2xl text-3xl font-extrabold leading-tight text-charcoal sm:text-4xl">
            From first message to showroom visit.
          </h2>
          <ol className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {steps.map((s, i) => (
              <li key={s.title} className="rounded-2xl border border-line bg-paper p-6">
                <span
                  aria-hidden="true"
                  className="flex size-10 items-center justify-center rounded-full bg-charcoal text-lg font-extrabold text-white"
                >
                  {i + 1}
                </span>
                <h3 className="mt-4 text-lg font-bold text-charcoal">{s.title}</h3>
                <p className="mt-2 leading-relaxed">{s.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* For the owner */}
      <section aria-labelledby="owner-h" className="mx-auto w-full max-w-6xl px-4 py-16 sm:px-6 md:py-24">
        <div className="grid items-center gap-10 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <Eyebrow>For the owner</Eyebrow>
            <h2 id="owner-h" className="mt-3 text-3xl font-extrabold leading-tight text-charcoal sm:text-4xl">
              See every lead, and who is on it.
            </h2>
            <PointList items={ownerPoints} />
          </div>
          <figure>
            <BrowserFrame
              src="/screenshots/web-inbox-desktop.png"
              alt="The Choukashi web app inbox: a list of leads with filters for All, Handover and Mine (demo data)."
              width={1440}
              height={900}
            />
            <figcaption className="mt-3 text-sm text-muted">The web app inbox, with demo data.</figcaption>
          </figure>
        </div>
      </section>

      {/* For staff */}
      <section aria-labelledby="staff-h" className="bg-white">
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 py-16 sm:px-6 md:grid-cols-[0.8fr_1.2fr] md:py-24">
          <figure className="order-last mx-auto w-full max-w-[16rem] md:order-first">
            <PhoneFrame
              src="/screenshots/android-login.png"
              alt="The Choukashi Android app sign-in screen, with email and password fields and a sign in with a code option."
              width={1080}
              height={2400}
            />
            <figcaption className="mt-3 text-center text-sm text-muted">The Android app.</figcaption>
          </figure>
          <div>
            <Eyebrow>For your staff</Eyebrow>
            <h2 id="staff-h" className="mt-3 text-3xl font-extrabold leading-tight text-charcoal sm:text-4xl">
              Their leads, on their phone.
            </h2>
            <PointList items={staffPoints} />
          </div>
        </div>
      </section>

      {/* Trust */}
      <section aria-labelledby="trust-h" className="mx-auto w-full max-w-6xl px-4 py-16 sm:px-6 md:py-24">
        <div className="rounded-3xl bg-tint p-6 sm:p-10">
          <Eyebrow>Your data</Eyebrow>
          <h2 id="trust-h" className="mt-3 text-3xl font-extrabold leading-tight text-charcoal sm:text-4xl">
            Your leads stay yours.
          </h2>
          <div className="grid gap-x-10 md:grid-cols-2">
            <PointList items={trustPoints.slice(0, 2)} />
            <PointList items={trustPoints.slice(2)} />
          </div>
          <p className="mt-8">
            <Link href="/privacy" className="text-link">
              Read the privacy policy
            </Link>
          </p>
        </div>
      </section>

      {/* Closing call to action */}
      <section aria-labelledby="cta-h" className="mx-auto w-full max-w-6xl px-4 pb-16 sm:px-6 md:pb-24">
        <div className="flex flex-col items-start gap-8 rounded-3xl bg-charcoal p-6 text-white sm:p-10 md:flex-row md:items-center md:justify-between">
          <div className="flex items-center gap-5">
            <Image
              src="/brand/app-icon.png"
              alt=""
              width={1024}
              height={1024}
              aria-hidden="true"
              className="size-16 shrink-0 rounded-2xl sm:size-20"
            />
            <div>
              <h2 id="cta-h" className="text-2xl font-extrabold leading-tight sm:text-3xl">
                Want Choukashi for your showroom?
              </h2>
              <p className="mt-2 text-lg text-white/90">Try it free for a month.</p>
            </div>
          </div>
          <PrimaryButton href={talkToUs}>Talk to us</PrimaryButton>
        </div>
      </section>
    </>
  );
}
