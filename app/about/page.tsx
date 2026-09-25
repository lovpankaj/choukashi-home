import { pageMetadata } from "@/lib/metadata";
import { links, site } from "@/site.config";

export const metadata = pageMetadata(
  "About",
  `${site.name} is built in Pune by ${site.legalEntity}. Registered address and Grievance Officer details.`,
  "/about",
);

export default function AboutPage() {
  return (
    <div className="mx-auto w-full max-w-[70ch] px-4 py-10 sm:py-14">
      <h1 className="text-3xl font-extrabold leading-tight text-charcoal sm:text-4xl">About {site.name}</h1>
      <div className="prose-doc mt-2 text-lg">
        <p>
          {site.name} answers WhatsApp enquiries for vehicle dealerships in India, starting with two-wheeler showrooms.
          When a lead messages the dealership, the assistant replies in the lead&apos;s own language using the
          dealership&apos;s real models, prices and hours, books a showroom visit, and hands the lead to the right
          staff member.
        </p>
        <p>
          {site.name} is built in Pune by{" "}
          <a href={site.legalEntityUrl}>{site.legalEntity}</a>.
        </p>
      </div>

      <section aria-labelledby="grievance-h" className="mt-10 rounded-2xl border border-line bg-white p-6">
        <h2 id="grievance-h" className="text-xl font-extrabold text-charcoal">
          Grievance Officer
        </h2>
        <p className="mt-3 leading-relaxed">
          <strong className="text-charcoal">{site.grievanceOfficer}</strong>
          <br />
          Email:{" "}
          <a href={links.privacy} className="text-link">
            {site.privacyEmail}
          </a>
          <br />
          {site.legalEntity}, {site.registeredAddress}
        </p>
        <p className="mt-3 leading-relaxed text-muted">
          We acknowledge grievances within 24 hours where the law requires it, and resolve them within 30 days.
        </p>
      </section>

      <section aria-labelledby="address-h" className="mt-6 rounded-2xl border border-line bg-white p-6">
        <h2 id="address-h" className="text-xl font-extrabold text-charcoal">
          Registered office
        </h2>
        <address className="mt-3 not-italic leading-relaxed">
          {site.legalEntity}
          <br />
          {site.registeredAddress}
        </address>
      </section>
    </div>
  );
}
