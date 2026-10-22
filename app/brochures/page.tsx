import { brochures, brochurePath, brochureUpdatedAt } from "@/lib/brochures";
import { pageMetadata } from "@/lib/metadata";
import { site } from "@/site.config";

const description =
  "Read and download five Choukashi brochures. See how AI replies, Indian languages, follow-ups and bookings help your business make more of WhatsApp enquiries.";

export const metadata = pageMetadata("Business brochures", description, "/brochures");

export default function BrochuresPage() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Choukashi business brochures",
    description,
    url: `${site.url}/brochures`,
    dateModified: brochureUpdatedAt,
    mainEntity: {
      "@type": "ItemList",
      itemListElement: brochures.map((brochure, index) => ({
        "@type": "ListItem",
        position: index + 1,
        item: {
          "@type": "DigitalDocument",
          name: brochure.headline,
          description: brochure.description,
          url: `${site.url}${brochurePath(brochure.file)}`,
          encodingFormat: "application/pdf",
          inLanguage: "en-IN",
          publisher: { "@type": "Organization", name: site.name, url: site.url },
        },
      })),
    },
  };

  return (
    <div className="mx-auto w-full max-w-5xl px-5 py-12 sm:px-8 sm:py-20">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData).replace(/</g, "\\u003c") }}
      />
      <div className="max-w-2xl border-t-4 border-brand pt-6">
        <h1 className="text-4xl font-extrabold leading-tight tracking-tight text-charcoal sm:text-5xl">
          A helping hand for your next enquiry.
        </h1>
        <p className="mt-5 text-lg leading-relaxed text-muted">
          You’ve built a business worth choosing. See how Choukashi helps you answer
          WhatsApp enquiries, follow up and book the next step.
        </p>
        <p className="mt-4 leading-relaxed text-muted">
          Five brochures. Five ways to tell the story. Each is a short, two-page A4 PDF
          with real charts, benefits and pricing. Read one, save it or share its link.
        </p>
      </div>

      <div className="mt-12 divide-y divide-line border-y border-line">
        {brochures.map((brochure, index) => (
          <article key={brochure.file} className="grid gap-5 py-8 sm:grid-cols-[3rem_1fr] sm:gap-7">
            <div className="flex items-center gap-3 text-muted sm:block" aria-hidden="true">
              <svg viewBox="0 0 40 48" fill="none" className="h-12 w-10 text-charcoal">
                <path d="M6 2h19l9 10v33H6z" stroke="currentColor" strokeWidth="1.5" />
                <path d="M25 2v11h9M12 23h16M12 29h16M12 35h10" stroke="currentColor" strokeWidth="1.5" />
              </svg>
              <span className="text-sm sm:mt-3 sm:block">0{index + 1}</span>
            </div>
            <div>
              <p className="text-sm font-bold text-muted">{brochure.name}</p>
              <h2 className="mt-2 max-w-2xl text-2xl font-extrabold leading-snug tracking-tight text-charcoal">
                {brochure.headline}
              </h2>
              <p className="mt-3 max-w-2xl leading-relaxed text-muted">{brochure.description}</p>
              <div className="mt-5 flex flex-wrap items-center gap-3">
                <a
                  href={brochurePath(brochure.file)}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Read ${brochure.name} PDF (opens in a new tab)`}
                  className="rounded-lg bg-charcoal px-5 py-3 font-bold text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-charcoal"
                >
                  Read PDF <span aria-hidden="true">↗</span>
                </a>
                <a
                  href={brochurePath(brochure.file)}
                  download
                  aria-label={`Download ${brochure.name} PDF`}
                  className="rounded-lg border border-line px-5 py-3 font-bold text-charcoal hover:bg-gray-50 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-charcoal"
                >
                  Download
                </a>
                <span className="text-sm text-muted">PDF · 2 A4 pages · under 600 KB</span>
              </div>
            </div>
          </article>
        ))}
      </div>
      <p className="mt-6 text-sm leading-relaxed text-muted">
        For property businesses, clinics, salons, service teams, consultants and more.
        Results in these brochures cover 13–22 October 2026; the last day is partial.
        Past results vary by business.
      </p>
    </div>
  );
}
