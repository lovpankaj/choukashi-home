import Link from "next/link";
import { LegalPage, type LegalSection } from "@/components/legal-page";
import { pageMetadata } from "@/lib/metadata";
import { links, site } from "@/site.config";

export const metadata = pageMetadata(
  "Privacy Policy",
  `How ${site.name} collects, uses, stores and deletes data about app users and about leads who message a business on WhatsApp.`,
  "/privacy",
);

const PrivacyEmail = () => <a href={links.privacy}>{site.privacyEmail}</a>;

const sections: LegalSection[] = [
  {
    id: "who-we-are",
    title: "Who we are and who this covers",
    body: (
      <>
        <p>
          {site.name} is run by <strong>{site.legalEntity}</strong>, {site.registeredAddress}. You can reach us about
          privacy at <PrivacyEmail />.
        </p>
        <p>{site.name} handles data about two kinds of people:</p>
        <ul>
          <li>
            <strong>Users</strong> — business owners and staff who sign in to the {site.name} app. For your account
            data, {site.legalEntity} is the data fiduciary (controller).
          </li>
          <li>
            <strong>Leads</strong> — members of the public who message a business&apos;s WhatsApp number. The business
            is the data fiduciary for its leads&apos; data. {site.name} processes that data on the business&apos;s behalf
            and on its instructions, as a data processor.
          </li>
        </ul>
      </>
    ),
  },
  {
    id: "users",
    title: "What we collect about users",
    body: (
      <ul>
        <li>
          Your name, email address, mobile number, and role (owner/admin or staff). Accounts are created by your
          business&apos;s admin; the app has no public sign-up.
        </li>
        <li>
          Sign-in credentials, handled by Google Firebase Authentication (email and password, or a one-time code sent
          by SMS to your mobile number). {site.name} never sees or stores your password.
        </li>
        <li>A device push token (Firebase Cloud Messaging), so the app can send you notifications about leads.</li>
        <li>
          Actions you take in the app, such as replies sent, leads reassigned and knowledge edited. These are kept as
          part of the business&apos;s records.
        </li>
      </ul>
    ),
  },
  {
    id: "business-uploads",
    title: "What the business uploads",
    body: (
      <p>
        Business details (showroom address, hours), product and offer information, brochure PDFs and photos, and
        frequently asked questions. The business chooses what to upload.
      </p>
    ),
  },
  {
    id: "leads",
    title: "What we process about leads",
    body: (
      <>
        <p>We process the following on the business&apos;s behalf:</p>
        <ul>
          <li>Your WhatsApp phone number and WhatsApp profile name.</li>
          <li>
            The messages exchanged with the business&apos;s WhatsApp number, including replies from the assistant and
            from staff, and whether they were delivered and read.
          </li>
          <li>
            Information worked out from the conversation: your stated needs and preferences, open questions, an interest
            level (Hot, Warm, Cold or Unknown) with the reason, the next step, and any showroom appointment (date and
            time).
          </li>
          <li>Appointments are added to the business&apos;s own Google Calendar, if the business has connected one.</li>
        </ul>
      </>
    ),
  },
  {
    id: "not-collected",
    title: "What we do not collect",
    body: (
      <ul>
        <li>Your location from your device.</li>
        <li>Your contacts.</li>
        <li>
          Camera or microphone access. When you upload a file, you choose it yourself through your phone&apos;s or
          computer&apos;s file picker.
        </li>
        <li>Advertising identifiers.</li>
        <li>The app contains no advertising and no third-party analytics or tracking tools.</li>
        <li>This website sets no tracking cookies and does not track visitors.</li>
      </ul>
    ),
  },
  {
    id: "why",
    title: "Why we use it",
    body: (
      <>
        <ul>
          <li>
            To provide the service: answering leads, booking visits, notifying and assigning staff, and showing reports
            to the owner.
          </li>
          <li>To keep accounts secure.</li>
          <li>To troubleshoot problems and prevent abuse.</li>
          <li>To meet legal obligations.</li>
        </ul>
        <p>
          <strong>We do not sell personal data, and we do not use it for advertising.</strong>
        </p>
      </>
    ),
  },
  {
    id: "automated-replies",
    title: "Automated replies (AI)",
    body: (
      <>
        <p>
          Replies to leads are written by AI language models, using only the business&apos;s own uploaded information
          and the conversation so far. The conversation text is sent to the AI model provider to write each reply.
        </p>
        <p>
          When the assistant cannot answer from the business&apos;s information, it hands over to a person. Leads can
          ask for a person at any time. Businesses are responsible for telling their leads that an automated assistant
          may reply.
        </p>
      </>
    ),
  },
  {
    id: "service-providers",
    title: "Service providers (sub-processors)",
    body: (
      <ul>
        <li>
          <strong>Google Cloud and Firebase</strong> — hosting, database, sign-in, push notifications and key
          management. Data is stored in the Mumbai (asia-south1) region.
        </li>
        <li>
          <strong>Meta Platforms (WhatsApp Business Platform)</strong> — sending and receiving WhatsApp messages.
          Meta&apos;s own terms and privacy policy apply to WhatsApp itself.
        </li>
        <li>
          <strong>AI model providers: Google (Gemini) and Sarvam AI</strong> — they write replies and analyse
          conversations. The business can choose which provider is used.
        </li>
        <li>
          <strong>Google Calendar</strong> — only if the business connects its calendar.
        </li>
        <li>
          <strong>Vercel</strong> — hosts this website only. It receives standard web-server request logs.
        </li>
      </ul>
    ),
  },
  {
    id: "international-transfer",
    title: "International transfer",
    body: (
      <p>
        Stored data stays in India. However, some AI processing may take place outside India, on the AI provider&apos;s
        own infrastructure and under that provider&apos;s terms.
      </p>
    ),
  },
  {
    id: "retention",
    title: "How long we keep data",
    body: (
      <ul>
        <li>
          Lead conversations and the details worked out from them are deleted automatically after the business&apos;s
          retention period. This is <strong>{site.retentionDaysDefault} days by default</strong>, and the business can
          change it.
        </li>
        <li>Conversations with no activity are closed automatically before that.</li>
        <li>Technical logs of AI requests are deleted after 90 days.</li>
        <li>
          User account data is kept while the account is active and deleted when the account is removed (see{" "}
          <Link href="/delete-account">Delete your account or data</Link>).
        </li>
        <li>Backups roll off within the provider&apos;s standard cycle.</li>
      </ul>
    ),
  },
  {
    id: "security",
    title: "Security",
    body: (
      <ul>
        <li>Data is encrypted in transit (HTTPS) and at rest.</li>
        <li>WhatsApp and calendar credentials are encrypted with keys held in Google Cloud Key Management.</li>
        <li>Each business&apos;s data is kept separate, and staff see only the leads assigned to them.</li>
      </ul>
    ),
  },
  {
    id: "your-rights",
    title: "Your rights",
    body: (
      <>
        <p>
          Under India&apos;s Digital Personal Data Protection Act, 2023 (and, where they apply to you, GDPR-style
          rights), you can:
        </p>
        <ul>
          <li>Access, correct and erase your personal data.</li>
          <li>Have your grievances addressed.</li>
          <li>Nominate someone to exercise your rights for you.</li>
          <li>Withdraw your consent.</li>
        </ul>
      </>
    ),
  },
  {
    id: "exercise-rights",
    title: "How to exercise your rights",
    body: (
      <ul>
        <li>
          <strong>Users:</strong> email <PrivacyEmail /> or follow the steps on{" "}
          <Link href="/delete-account">Delete your account or data</Link>.
        </li>
        <li>
          <strong>Leads:</strong> contact the business you messaged. You can also email <PrivacyEmail />; we will pass
          your request to the business and help carry it out.
        </li>
      </ul>
    ),
  },
  {
    id: "children",
    title: "Children",
    body: <p>{site.name} is a service for businesses and is not directed at anyone under 18.</p>,
  },
  {
    id: "grievance-officer",
    title: "Grievance Officer",
    body: (
      <>
        <p>
          <strong>{site.grievanceOfficer}</strong>
          <br />
          Email: <PrivacyEmail />
          <br />
          {site.legalEntity}, {site.registeredAddress}
        </p>
        <p>
          We acknowledge grievances within 24 hours where the law requires it, and resolve them within 30 days.
        </p>
      </>
    ),
  },
  {
    id: "changes",
    title: "Changes to this policy",
    body: (
      <p>
        We announce material changes in the app or by email before they take effect. The date at the top of this page
        shows when the policy was last updated.
      </p>
    ),
  },
];

export default function PrivacyPage() {
  return (
    <LegalPage
      title="Privacy Policy"
      intro={
        <p>
          This policy explains what data {site.name} handles, why, who helps us handle it, how long we keep it, and how
          you can have it corrected or deleted.
        </p>
      }
      sections={sections}
    />
  );
}
