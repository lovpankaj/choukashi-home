import { PrimaryButton } from "@/components/buttons";
import { LegalPage, type LegalSection } from "@/components/legal-page";
import { pageMetadata } from "@/lib/metadata";
import { links, mailto, site } from "@/site.config";

export const metadata = pageMetadata(
  "Delete your account or data",
  `How to delete your ${site.name} account, your whole business's data, or your WhatsApp conversations as a lead — what is deleted and what is kept.`,
  "/delete-account",
);

const accountRequest = mailto(
  site.privacyEmail,
  "Delete my account",
  `Please delete my ${site.name} account.\n\nName:\nEmail address on the account:\nBusiness name:\n`,
);

const leadRequest = mailto(
  site.privacyEmail,
  "Delete my data",
  `I messaged a business on WhatsApp and want my ${site.name} data deleted.\n\nWhatsApp number I used:\nBusiness name:\n`,
);

const PrivacyEmail = () => <a href={links.privacy}>{site.privacyEmail}</a>;

const sections: LegalSection[] = [
  {
    id: "staff-or-owner",
    title: "Staff or owner account",
    body: (
      <>
        <p>There are two ways:</p>
        <ol>
          <li>
            <strong>Ask your business admin to disable your access</strong> in the app (Business → Staff). This stops
            sign-in straight away. To have your account data erased as well, use option 2.
          </li>
          <li>
            <strong>Email us</strong> at <PrivacyEmail /> from the email address on your account, with the subject
            &ldquo;Delete my account&rdquo; and your business name. We confirm the request with you, then delete the
            account within 30 days.
          </li>
        </ol>
        <p className="not-prose mt-6">
          <PrimaryButton href={accountRequest}>Email a deletion request</PrimaryButton>
        </p>
      </>
    ),
  },
  {
    id: "whole-business",
    title: "Whole business",
    body: (
      <p>
        The business owner emails <PrivacyEmail />. All of the business&apos;s data is deleted within 30 days: its
        knowledge (products, prices, offers, documents), leads, conversations, appointments and staff accounts.
      </p>
    ),
  },
  {
    id: "leads",
    title: "If you messaged a business on WhatsApp",
    body: (
      <>
        <p>
          Contact the business you messaged, or <a href={leadRequest}>email {site.privacyEmail}</a> with the WhatsApp
          number you used and the business name. Your conversations and the details worked out from them are deleted.
        </p>
        <p>
          Even without a request, they are removed automatically after the business&apos;s retention period (
          {site.retentionDaysDefault} days by default).
        </p>
      </>
    ),
  },
  {
    id: "what-is-deleted",
    title: "What is deleted",
    body: (
      <ul>
        <li>Your profile: name, email address and mobile number.</li>
        <li>Your sign-in record.</li>
        <li>Your device notification tokens.</li>
        <li>For a whole business, everything listed under &ldquo;Whole business&rdquo; above.</li>
      </ul>
    ),
  },
  {
    id: "what-is-kept",
    title: "What may be kept, and for how long",
    body: (
      <ul>
        <li>Records the law requires us to keep, such as invoices, for the legally required period.</li>
        <li>Security logs, for up to 90 days.</li>
        <li>Backups, which roll off within the provider&apos;s standard cycle.</li>
        <li>
          Messages already delivered on WhatsApp stay on the lead&apos;s and the business&apos;s phones. {site.name}{" "}
          cannot delete those.
        </li>
      </ul>
    ),
  },
];

export default function DeleteAccountPage() {
  return (
    <LegalPage
      title={`Delete your ${site.name} account or data`}
      intro={
        <p>
          This page applies to the <strong>{site.name}</strong> app by <strong>{site.legalEntity}</strong>, on
          Android and the web.
        </p>
      }
      sections={sections}
    />
  );
}
