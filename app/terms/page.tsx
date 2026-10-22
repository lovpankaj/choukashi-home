import Link from "next/link";
import { LegalPage, type LegalSection } from "@/components/legal-page";
import { pageMetadata } from "@/lib/metadata";
import { links, site } from "@/site.config";
import { pricing } from "@/lib/pricing";

export const metadata = pageMetadata(
  "Terms of Service",
  `The agreement between ${site.legalEntity} and businesses that use ${site.name}: accounts, responsibilities, the free trial, fees, data and liability.`,
  "/terms",
);

const sections: LegalSection[] = [
  {
    id: "service",
    title: "The service",
    body: (
      <p>
        {site.name} is software that answers a business&apos;s WhatsApp
        enquiries with an automated assistant, manages leads, books appointments
        and gives reports. The web and mobile apps are included.
      </p>
    ),
  },
  {
    id: "accounts",
    title: "Accounts",
    body: (
      <p>
        Accounts are created by the business&apos;s admin. The business is
        responsible for who it gives access to and for keeping sign-in details
        safe. Staff who use {site.name} must be at least 18.
      </p>
    ),
  },
  {
    id: "business-responsibilities",
    title: "Your responsibilities as a business",
    body: (
      <>
        <p>The business is responsible for:</p>
        <ul>
          <li>
            Its WhatsApp Business account, and following WhatsApp&apos;s
            Business and Commerce policies.
          </li>
          <li>
            Having a lawful basis to message its leads, and telling leads that
            an automated assistant may reply.
          </li>
          <li>
            Making sure the product information, prices and offers it uploads
            are accurate and lawful.
          </li>
          <li>Honouring its leads&apos; requests about their data.</li>
        </ul>
      </>
    ),
  },
  {
    id: "automated-replies",
    title: "Automated replies",
    body: (
      <p>
        The assistant answers only from the business&apos;s information and is
        designed to hand over to a person when unsure. Even so, AI output can be
        wrong, so the business should review its information and keep an eye on
        conversations. {site.name} is not liable for decisions a lead makes
        based on a reply, or for prices and offers the business supplied.
      </p>
    ),
  },
  {
    id: "acceptable-use",
    title: "Acceptable use",
    body: (
      <ul>
        <li>No spam, unlawful content or misleading offers.</li>
        <li>No attempts to break, probe or overload the service.</li>
        <li>
          No using {site.name} to message people who have not contacted the
          business, except within WhatsApp&apos;s rules.
        </li>
      </ul>
    ),
  },
  {
    id: "third-party",
    title: "Third-party services",
    body: (
      <p>
        WhatsApp (Meta), Google Calendar and the AI providers are governed by
        their own terms. Outages or policy actions on their side, such as a
        suspended WhatsApp number, are outside {site.name}&apos;s control.
      </p>
    ),
  },
  {
    id: "data",
    title: "Data",
    body: (
      <p>
        The business owns its data and its leads&apos; data. {site.name}{" "}
        processes it as described in the{" "}
        <Link href="/privacy">Privacy Policy</Link> and uses it only to run that
        business&apos;s service — not to train or improve models for anyone
        else. After termination, the business has 30 days to ask for an export;
        after that, everything is deleted.
      </p>
    ),
  },
  {
    id: "trial-and-fees",
    title: "Free trial, prepaid messages and fees",
    body: (
      <>
        <p>
          Every new business gets a{" "}
          <strong>{site.trialLength} free trial</strong>. There is no automatic
          paid subscription after the trial.
        </p>
        <p>
          Paid use is prepaid and pay-as-you-use. Recharges below ₹10,000 cost ₹
          {pricing.standardMessageRupees.toFixed(2)} per outgoing message. A
          ₹10,000 recharge gives 10,000 outgoing messages at ₹1 each. Each
          outgoing AI reply, WhatsApp template and human staff reply counts.
          Incoming customer messages are not charged by Choukashi.
        </p>
        <p>
          <strong>GST is {pricing.gstPercent}% extra.</strong> A ₹10,000
          recharge costs ₹11,800 including GST. Payment and any further recharge
          or refund terms are recorded in the invoice or written order.
        </p>
        <p>
          <strong>Meta’s WhatsApp charges are separate.</strong> The business
          pays Meta or its WhatsApp provider directly. These charges are not
          included in Choukashi’s message price.
        </p>
      </>
    ),
  },
  {
    id: "availability",
    title: "Availability and changes",
    body: (
      <p>
        {site.name} is provided &ldquo;as is&rdquo; during the current
        early-access period, with no uptime guarantee. Features may change.
      </p>
    ),
  },
  {
    id: "termination",
    title: "Suspension and termination",
    body: (
      <p>
        Either side can end this agreement with 30 days&apos; written notice;
        email is enough. {site.name} can suspend the service immediately for
        spam, unlawful use, or a breach of these terms or of WhatsApp&apos;s
        policies.
      </p>
    ),
  },
  {
    id: "liability",
    title: "Liability",
    body: (
      <p>
        {site.legalEntity}&apos;s total liability is limited to the fees paid in
        the 12 months before the claim, so it is nil during the free trial. We
        are not liable for indirect or consequential loss, such as lost sales.
      </p>
    ),
  },
  {
    id: "governing-law",
    title: "Governing law",
    body: (
      <p>
        These terms are governed by the laws of India. The courts at{" "}
        {site.jurisdictionCity} have exclusive jurisdiction.
      </p>
    ),
  },
  {
    id: "contact",
    title: "Contact",
    body: (
      <p>
        Questions about these terms:{" "}
        <a href={links.support}>{site.supportEmail}</a>.
      </p>
    ),
  },
];

export default function TermsPage() {
  return (
    <LegalPage
      title="Terms of Service"
      lastUpdated="22 October 2026"
      notice="These terms are a draft pending legal review."
      intro={
        <p>
          These terms are a business-to-business agreement between{" "}
          {site.legalEntity} and the business that uses {site.name}, and they
          apply to the business&apos;s users too.
        </p>
      }
      sections={sections}
    />
  );
}
