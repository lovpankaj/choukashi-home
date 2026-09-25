import type { ReactNode } from "react";
import { formatEffectiveDate } from "@/site.config";

export type LegalSection = { id: string; title: string; body: ReactNode };

/** Single-column document with a "Last updated" line and an anchor-linked contents list. */
export function LegalPage({
  title,
  intro,
  notice,
  sections,
}: {
  title: string;
  intro?: ReactNode;
  notice?: ReactNode;
  sections: LegalSection[];
}) {
  return (
    <article className="mx-auto w-full max-w-[70ch] px-4 py-10 sm:py-14">
      <h1 className="text-3xl font-extrabold leading-tight text-charcoal sm:text-4xl">{title}</h1>
      <p className="mt-3 text-muted">Last updated: {formatEffectiveDate()}</p>
      {notice && (
        <p role="note" className="mt-6 rounded-lg border border-brand/40 bg-tint px-4 py-3 font-semibold text-charcoal">
          {notice}
        </p>
      )}
      {intro && <div className="prose-doc mt-6">{intro}</div>}

      <nav aria-labelledby="toc-heading" className="mt-8 rounded-xl border border-line bg-white p-5">
        <h2 id="toc-heading" className="text-sm font-bold uppercase tracking-wider text-muted">
          Contents
        </h2>
        <ol className="mt-3 list-decimal space-y-1.5 pl-5 marker:text-muted">
          {sections.map((s) => (
            <li key={s.id}>
              <a href={`#${s.id}`} className="text-link font-semibold">
                {s.title}
              </a>
            </li>
          ))}
        </ol>
      </nav>

      <div className="prose-doc">
        {sections.map((s, i) => (
          <section key={s.id} id={s.id} aria-labelledby={`${s.id}-h`} className="scroll-mt-4">
            <h2 id={`${s.id}-h`}>
              {i + 1}. {s.title}
            </h2>
            {s.body}
          </section>
        ))}
      </div>
      <p className="mt-12 text-sm">
        <a href="#main" className="text-link">
          Back to top
        </a>
      </p>
    </article>
  );
}
