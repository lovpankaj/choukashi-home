/**
 * Every "fill before launch" value from docs/website-brief.md, section 1.
 * Change a value here and it updates on every page.
 *
 * A value that is still unknown should stay as its "{{PLACEHOLDER}}" text:
 * it then shows on the site as-is and `npm run build` prints a warning.
 */
export const site = {
  /** {{LEGAL_ENTITY}} — registered company that owns Choukashi. */
  legalEntity: "intoin Works Pvt Ltd",
  legalEntityUrl: "https://www.intoinworks.com/",

  /** {{REGISTERED_ADDRESS}} */
  registeredAddress: "S No 265-264, Bavdhan, Pune, Maharashtra 411021, India",

  /** {{SUPPORT_EMAIL}} — switch to support@choukashi.com once that mailbox exists. */
  supportEmail: "admin@intoinworks.com",

  /** {{PRIVACY_EMAIL}} — switch to privacy@choukashi.com once that mailbox exists. */
  privacyEmail: "admin@intoinworks.com",

  /** {{GRIEVANCE_OFFICER}} — Indian IT Rules 2021 / DPDP Act 2023. */
  grievanceOfficer: "Pankaj Sarda",

  /** {{PHONE_OR_WHATSAPP}} — shown as written; links use the digits only. */
  phone: "+91 77688 10025",

  /**
   * {{EFFECTIVE_DATE}} of the privacy policy and terms, as YYYY-MM-DD.
   * Set to the date of first publish. Shown as "Last updated" on legal pages.
   */
  effectiveDate: "2026-09-25",

  /** {{JURISDICTION_CITY}} — courts named in the governing-law clause. */
  jurisdictionCity: "Pune",

  // Fixed values, not placeholders.
  name: "Choukashi",
  url: "https://choukashi.com",
  appUrl: "https://app.choukashi.com",
  trialLength: "1-month",
  retentionDaysDefault: 90,
} as const;

const phoneDigits = site.phone.replace(/\D/g, "");

export const links = {
  support: `mailto:${site.supportEmail}`,
  privacy: `mailto:${site.privacyEmail}`,
  tel: `tel:+${phoneDigits}`,
  whatsapp: `https://wa.me/${phoneDigits}`,
  app: site.appUrl,
};

/** mailto: link with a pre-filled subject and (optional) body. */
export function mailto(to: string, subject: string, body?: string) {
  const params = [`subject=${encodeURIComponent(subject)}`];
  if (body) params.push(`body=${encodeURIComponent(body)}`);
  return `mailto:${to}?${params.join("&")}`;
}

/** The effective date written out, e.g. "25 September 2026". */
export function formatEffectiveDate() {
  if (!/^\d{4}-\d{2}-\d{2}$/.test(site.effectiveDate)) return site.effectiveDate;
  return new Date(`${site.effectiveDate}T00:00:00Z`).toLocaleDateString("en-IN", {
    day: "numeric",
    month: "long",
    year: "numeric",
    timeZone: "UTC",
  });
}

/** Names of placeholders that still hold "{{...}}" text. */
export function unfilledPlaceholders() {
  return Object.entries(site)
    .filter(([, value]) => typeof value === "string" && value.includes("{{"))
    .map(([key]) => key);
}
