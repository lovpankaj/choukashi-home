import { faqs } from "@/lib/faqs";
import { links } from "@/site.config";

export function HomeFaq() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map(({ question, answer }) => ({
      "@type": "Question",
      name: question,
      acceptedAnswer: { "@type": "Answer", text: answer },
    })),
  };
  return (
    <section
      className="faq-section home-shell"
      id="faq"
      aria-labelledby="faq-title"
    >
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData).replace(/</g, "\\u003c"),
        }}
      />
      <div className="faq-intro">
        <p className="section-kicker">A few questions before we start</p>
        <h2 id="faq-title">
          Good questions.
          <br />
          Straight answers.
        </h2>
        <p>
          Wondering how this fits your showroom? Start here. Or ask us on
          WhatsApp.
        </p>
        <a className="hero-text-link" href={links.whatsapp}>
          Ask your own question <span aria-hidden="true">↗</span>
        </a>
      </div>
      <div className="faq-questions">
        {faqs.map(({ question, answer }, i) => (
          <details key={question} id={`faq-${i + 1}`}>
            <summary>
              {question}
              <span aria-hidden="true">+</span>
            </summary>
            <p>{answer}</p>
          </details>
        ))}
      </div>
    </section>
  );
}
