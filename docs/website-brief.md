# choukashi.com — website brief

Build the public website for **Choukashi** at `choukashi.com`: a Next.js site deployed on Vercel. It has two jobs:

1. **Explain the product** to dealership owners who might use it.
2. **Host the pages the Apple App Store and Google Play require** at stable URLs: privacy policy, terms, support, and account/data deletion. Meta also asks for a privacy policy URL during WhatsApp Business Platform review, and uses the same page.

Everything in this brief is true of the product today. Do not add features, certifications, customer names, numbers or testimonials that are not written here. Where a fact is unknown, it appears as a `{{PLACEHOLDER}}` (see "Fill before launch"). Keep those placeholders visible in the build rather than inventing values.

---

## 1. Fill before launch

These are unknown at the time of writing. Put each one in a single site config file (e.g. `site.config.ts`) so it is filled in once and used everywhere.

| Placeholder | What it is | Suggested / known |
|---|---|---|
| `{{LEGAL_ENTITY}}` | Registered company name that owns Choukashi | **intoin Works Pvt Ltd** (website https://www.intoinworks.com/) |
| `{{REGISTERED_ADDRESS}}` | Registered office address | **S No 265-264, Bavdhan, Pune, Maharashtra 411021, India** |
| `{{SUPPORT_EMAIL}}` | Support contact | **`admin@intoinworks.com`** (switch to `support@choukashi.com` once that mailbox exists) |
| `{{PRIVACY_EMAIL}}` | Privacy and deletion requests | **`admin@intoinworks.com`** (switch to `privacy@choukashi.com` once that mailbox exists) |
| `{{GRIEVANCE_OFFICER}}` | Name of the Grievance Officer (Indian IT Rules 2021 / DPDP Act 2023) | **Pankaj Sarda** |
| `{{PHONE_OR_WHATSAPP}}` | Public contact number (calls and WhatsApp) | **+91 77688 10025** — link as `tel:+917768810025` and `https://wa.me/917768810025` |
| `{{EFFECTIVE_DATE}}` | Effective date of the privacy policy and terms | Date of first publish |
| `{{JURISDICTION_CITY}}` | Courts for the governing-law clause | Pune |

Emails must work before the site is submitted to the stores. Both stores check that the support contact is reachable.

---

## 2. Stack and deployment

- Next.js (latest stable) with the App Router and TypeScript. Tailwind CSS is fine.
- The site is fully static: every page can be statically generated, with no backend, database or API routes.
- No contact form. Contact is by `mailto:` links, so the site itself collects no personal data.
- **No analytics, trackers, third-party cookies or cookie banner.** The privacy policy says the website does not track visitors, and that must stay true. If analytics are added later, update the policy first.
- Deploy on Vercel. `choukashi.com` is the canonical host, and `www.choukashi.com` redirects to it permanently (configure in Vercel domains).
- `app.choukashi.com` (the web app) and `dev.choukashi.com` (internal console) are **not** part of this site. They are hosted elsewhere. Only link to `app.choukashi.com`; never link to `dev.`.

### Scaffolding note

This repo already contains `docs/` (this brief and the brand assets). `create-next-app` accepts a directory containing `docs/` and `.git`, so scaffold in the repo root. Then copy assets into place as listed in section 4. Keep `docs/` as-is; it is the source of truth for the brand files.

---

## 3. Pages and URLs

The store listings will point at these exact paths, so they must never move. If a path ever changes, keep a permanent redirect.

| Path | Page | Needed by |
|---|---|---|
| `/` | Home (product landing) | Apple "Marketing URL" (optional), Play "Website" |
| `/privacy` | Privacy Policy | **Apple (required), Google Play (required), Meta WhatsApp review (required)** |
| `/terms` | Terms of Service | Apple (a custom licence agreement is optional, but recommended); Play (recommended) |
| `/support` | Support and contact | **Apple "Support URL" (required)**; Play contact details |
| `/delete-account` | Account and data deletion | **Google Play "Delete account URL" (required** for apps with accounts); supports Apple 5.1.1(v) |
| `/about` | Short "who we are" plus grievance officer | Indian law disclosure; can be merged into `/support` if preferred |

Every page has a shared header (logo on the left, links to Home, Support, and a "Sign in" button to `https://app.choukashi.com`). Every page has a footer with links to Privacy, Terms, Support, Delete account, the © year plus `{{LEGAL_ENTITY}}`, and `{{REGISTERED_ADDRESS}}`.

Legal pages (`/privacy`, `/terms`, `/delete-account`) are plain, readable documents:
- A single column, about 70 characters wide.
- A "Last updated: `{{EFFECTIVE_DATE}}`" line at the top.
- A table of contents with anchor links to each heading.
- They must render fully with JavaScript disabled, because store reviewers sometimes check that.

Also produce:
- `app/sitemap.ts` and `app/robots.ts` (allow all).
- Per-page `<title>` and meta description, plus the Open Graph image (section 4).
- A 404 page with the header and footer.

---

## 4. Brand assets

Everything is in `docs/brand/`. Copy files into the Next.js locations below. Do not use anything from `docs/brand/source/` directly: those are the untouched originals, and `icon-original.png` carries an image-generator watermark in its corner.

| File in `docs/brand/` | Use | Copy to |
|---|---|---|
| `logo.svg` | **Preferred** header/hero logo, light backgrounds (vector) | `public/brand/logo.svg` |
| `logo.png` (2400×692, transparent) | Raster fallback of the same logo (e.g. emails, places SVG is awkward) | `public/brand/logo.png` |
| `icons/icon-bubble.svg` | Vector bubble mark (red with white glyph) | `public/brand/icon-bubble.svg` |
| `icons/glyph-white.svg` | Vector white glyph for red backgrounds | `public/brand/glyph-white.svg` |
| `icons/favicon.ico` (16/32/48) | Browser tab icon | `app/favicon.ico` |
| `icons/icon-512.png` | App Router icon (speech bubble with tail, transparent) | `app/icon.png` |
| `icons/apple-icon-180.png` | iOS home-screen icon (full red square) | `app/apple-icon.png` |
| `icons/app-icon-1024.png` | Full-bleed square app icon, e.g. an app-store badge block on Home | `public/brand/app-icon.png` |
| `icons/icon-bubble-1024.png` | Large bubble mark, e.g. a hero decoration | `public/brand/icon-bubble.png` |
| `icons/glyph-white-512.png` | White phone-and-rupee glyph, for use on red backgrounds | `public/brand/glyph-white.png` |
| `og-image-1200x630.png` | Social share image | `app/opengraph-image.png` |
| `screenshots/*.png` | Real product screenshots (demo data only) | `public/screenshots/` |

The SVGs were traced from the supplied artwork, so they scale to any size. The wordmark was traced from a small source and its letter edges carry a faint wobble when shown very large; it looks right at header and hero sizes. If the designer's original vector turns up, it replaces these. Use the SVG with `next/image` (`unoptimized`) or a plain `<img>`, and set the width in CSS.

### Colours

| Token | Hex | Use |
|---|---|---|
| Brand red | `#E82126` | Primary buttons, links, accents |
| Charcoal | `#35363A` | Logo lettering; headings |
| Text | `#232428` | Body text |
| Secondary text | `#5E6168` | Captions, muted copy |
| Paper | `#F5F3EE` | Page or section background (same warm off-white as the app) |
| White | `#FFFFFF` | Cards, header |
| Border | `#DDD7C8` | Hairlines |
| Brand tint | `#FDF1F0` | Soft red panels |

Brand red on white passes contrast for large text and buttons. For small body links, use red with an underline, or charcoal.

### Type

The app uses **Manrope** (Google Fonts, weights 400–800). Use it for the site too (`next/font/google`). The logo lettering is a custom display face; do not try to recreate it in text.

### Tone

Plain, confident, and local. The audience is dealership owners and sales managers in India, many of them reading on a phone. Use short sentences and Indian English (colour, organise, ₹). Avoid jargon like "AI-powered synergy". A light touch of Hinglish in examples is fine, because it is how their leads actually write.

**The name.** *Choukashi* (चौकशी) means "enquiry" in Marathi and Hindi usage, the word for asking about something before you buy it. The home page can use this: every enquiry deserves an answer.

---

## 5. Home page content

The audience is owners of vehicle dealerships (two-wheeler showrooms first) in India who run Click-to-WhatsApp ads and lose leads because nobody replies fast enough, or well enough.

Suggested sections. Rewrite freely, but keep the facts.

1. **Hero.** Headline along the lines of "Every WhatsApp enquiry, answered — and turned into a showroom visit." The subline explains that when a lead messages the dealership's WhatsApp number, Choukashi's assistant replies within seconds, in the lead's own language, using the dealership's real models, prices and hours. It books the visit and hands the lead to the dealership's staff. Primary button: "Talk to us" (`mailto:{{SUPPORT_EMAIL}}`). Secondary button: "Sign in" (`https://app.choukashi.com`).

2. **The problem.** Leads from ads arrive at all hours. Staff reply late or not at all, the same questions get answered again and again, and the owner cannot see which leads are going cold.

3. **How it works**, in three or four steps:
   - The dealership connects its WhatsApp Business number and adds its models, prices, offers and showroom details. Details can be typed in or pulled from a brochure PDF, and are reviewed before anything goes live.
   - A lead messages. The assistant answers questions only from that business's own information, in English, Hindi, Marathi or a mix. When it does not know an answer, it says so and asks a staff member rather than guessing.
   - It works out what the lead wants and what is holding them back, then offers a showroom visit or test ride and books it into the dealership's Google Calendar.
   - Staff get the lead with a ready brief (needs, open questions, next step), can take over the chat at any time, and the lead gets a visit summary they can correct.

4. **For the owner.** Leads marked Hot, Warm or Cold with the reason shown. Recurring obstacles such as finance questions or stock availability. A view of who is responding and who isn't. Every lead is assigned to one staff member automatically.

5. **For staff.** A phone app (Android, with iOS coming) and a web app. Staff see only their own leads, get a notification when a lead needs them, and reply from the app. Messages still go out from the dealership's own WhatsApp number.

6. **Trust.** Each business's data is kept separate from every other business's. Data is stored in Google Cloud in India (Mumbai region). Conversations are deleted automatically after a retention period the business sets (90 days by default). There is no advertising and data is never sold. Link to `/privacy`.

7. **Closing call to action.** "Want Choukashi for your showroom? Try it free for a month." with a button to `mailto:{{SUPPORT_EMAIL}}`. The 1-month free trial may also appear in the hero.

Screenshots in `docs/brand/screenshots/` show the real app with demo data. Use them inside a simple phone or browser frame. Do not mock up screens that do not exist.

**Do not claim:** pricing, customer counts, response-time guarantees, conversion uplift numbers, "official WhatsApp partner" status, ISO/SOC certifications, or iOS availability on the App Store. iOS may be written as "coming soon".

---

## 6. Privacy Policy (`/privacy`)

Write a complete, plain-language policy from the facts below. Use headings in this order. It must cover **two kinds of people**, because the product processes data about both:

- **Users.** Business owners and staff who sign in to the Choukashi app. For their account data, `{{LEGAL_ENTITY}}` is the data fiduciary (controller).
- **Leads.** Members of the public who message a business's WhatsApp number. The business is the data fiduciary for its leads' data. Choukashi processes that data on the business's behalf and on its instructions, as a data processor.

### Facts to use

**Who we are.** `{{LEGAL_ENTITY}}`, `{{REGISTERED_ADDRESS}}`. Contact: `{{PRIVACY_EMAIL}}`.

**What we collect about users (app accounts):**
- Name, email address, mobile number, and role (owner/admin or staff). Accounts are created by the business's admin; the app has no public sign-up.
- Sign-in credentials, handled by Google Firebase Authentication (email and password, or a one-time code sent by SMS to the mobile number). Choukashi never sees or stores passwords.
- A device push token (Firebase Cloud Messaging) so the app can send notifications about leads.
- Actions taken in the app: replies sent, leads reassigned, knowledge edited. These are kept as part of the business's records.

**What the business uploads:** business details (showroom address, hours), product and offer information, brochure PDFs and photos, and frequently asked questions. The business chooses what to upload.

**What we process about leads (on the business's behalf):**
- WhatsApp phone number and WhatsApp profile name.
- The messages exchanged with the business's WhatsApp number, including replies from the assistant and staff, and delivery and read status.
- Information derived from the conversation: stated needs and preferences, open questions, an interest level (Hot/Warm/Cold/Unknown) with the reason, the next step, and any showroom appointment (date and time).
- Appointments booked go into the business's own Google Calendar if the business connected one.

**What we do not collect:**
- Location from the device.
- Contacts.
- Camera or microphone access. Files are chosen by the user through the system file picker.
- Advertising identifiers.
- The app contains no advertising and no third-party analytics or tracking SDKs.
- The website sets no tracking cookies.

**Why we use it:**
- To provide the service: answering leads, booking visits, notifying and assigning staff, showing reports to the owner.
- To keep accounts secure.
- To troubleshoot and prevent abuse.
- To meet legal obligations.

We do not sell personal data, and we do not use it for advertising.

**Automated replies (AI).** Replies to leads are written by AI language models, using only the business's own uploaded information and the conversation so far. Conversation text is sent to the model provider to generate each reply. When the assistant cannot answer from the business's information, it hands over to a human. Leads can ask for a human at any time. Businesses are responsible for telling their leads that an automated assistant may reply.

**Service providers (sub-processors):**
- **Google Cloud and Firebase:** hosting, database, sign-in, push notifications, key management. Data is stored in the Mumbai (asia-south1) region.
- **Meta Platforms (WhatsApp Business Platform):** sending and receiving WhatsApp messages. Meta's own terms and privacy policy apply to WhatsApp itself.
- **AI model providers: Google (Gemini) and Sarvam AI.** They generate replies and analyse conversations. The business can choose which provider is used.
- **Google Calendar:** only if the business connects its calendar.
- **Vercel:** hosts this website only. It receives standard web-server request logs.

**International transfer.** Stored data stays in India. Some AI processing may take place outside India on the provider's infrastructure, under that provider's terms. Say this plainly.

**Retention:**
- Lead conversations and the details derived from them are deleted automatically after the business's retention period, **90 days by default** and configurable by the business.
- Conversations with no activity are closed automatically before that.
- Technical logs of AI requests are deleted after 90 days.
- User account data is kept while the account is active and deleted when the account is removed (see `/delete-account`).
- Backups roll off within the provider's standard cycle.

**Security:**
- Data is encrypted in transit (HTTPS) and at rest.
- WhatsApp and calendar credentials are encrypted with keys held in Google Cloud Key Management.
- Each business's data is isolated, and staff see only the leads assigned to them.

**Your rights (DPDP Act 2023; also GDPR-style rights for anyone they apply to):**
- Access, correction, and erasure.
- Grievance redressal.
- Nominating someone to exercise your rights.
- Withdrawing consent.

**How to exercise them:**
- Users email `{{PRIVACY_EMAIL}}` or use `/delete-account`.
- **Leads** should contact the business they messaged. They may also email `{{PRIVACY_EMAIL}}`, and Choukashi will pass the request to the business and help carry it out.

**Children.** The service is for businesses and is not directed at anyone under 18.

**Grievance Officer.** `{{GRIEVANCE_OFFICER}}`, `{{PRIVACY_EMAIL}}`, `{{REGISTERED_ADDRESS}}`. We will acknowledge within 24 hours where the law requires it, and resolve within 30 days.

**Changes.** Material changes are announced in the app or by email before they take effect. The page shows the last-updated date.

---

## 7. Terms of Service (`/terms`)

A business-to-business agreement between `{{LEGAL_ENTITY}}` and the business (and its users). Cover these points in plain language:

1. **The service.** Software that answers a business's WhatsApp enquiries with an automated assistant, manages leads, books appointments, and gives reports. Web and mobile apps are included.
2. **Accounts.** Created by the business's admin. The business is responsible for who it gives access to and for keeping credentials safe. Staff must be at least 18.
3. **The business's responsibilities:**
   - Its WhatsApp Business account, and following **WhatsApp's Business and Commerce policies**.
   - Having a lawful basis to message its leads, and telling leads an automated assistant may reply.
   - Making sure the product information, prices and offers it uploads are accurate and lawful.
   - Honouring its leads' data requests.
4. **Automated replies.** The assistant answers only from the business's information and is designed to hand over when unsure. Even so, AI output can be wrong, so the business should review its information and monitor conversations. Choukashi is not liable for decisions a lead makes based on a reply, or for prices and offers the business supplied.
5. **Acceptable use.** No spam, unlawful content, or misleading offers. No attempts to break, probe or overload the service. No use to message people who have not contacted the business, except within WhatsApp's rules.
6. **Third-party services.** WhatsApp (Meta), Google Calendar, and AI providers are governed by their own terms. Outages or policy actions on their side, such as a suspended WhatsApp number, are outside Choukashi's control.
7. **Data.** The business owns its data and its leads' data. Choukashi processes it as described in the Privacy Policy and uses it only to run that business's service — not to train or improve models for anyone else. After termination the business has 30 days to ask for an export; then everything is deleted.
8. **Free trial and fees.** Every new business gets a **1-month free trial**. The trial does not turn into a paid subscription automatically: the service continues after the trial only once the business has agreed fees in writing with `{{LEGAL_ENTITY}}` (order form or invoice). The site shows no public pricing. Fees are billed per period as agreed; there are no refunds for a period already started, and the business can cancel before the next period begins.
   - **WhatsApp charges are separate.** The business uses its own WhatsApp Business account and pays Meta's WhatsApp messaging charges directly to Meta (or its WhatsApp provider). They are not included in Choukashi's fees.
9. **Availability and changes.** Provided "as is" during the current early-access period, with no uptime guarantee. Features may change.
10. **Suspension and termination.** Either side can terminate with 30 days' written notice (email is enough). Choukashi can suspend immediately for spam, unlawful use, or breach of these terms or of WhatsApp policy.
11. **Liability.** Limited to fees paid in the prior 12 months (so nil during the free trial). No liability for indirect or consequential loss, such as lost sales.
12. **Governing law.** Laws of India. Exclusive jurisdiction of the courts at `{{JURISDICTION_CITY}}`. No arbitration clause.
13. **Contact.** `{{SUPPORT_EMAIL}}`.

Add a short, visible note at the top: *"These terms are a draft pending legal review."* Keep the note until the owner removes it.

---

## 8. Support (`/support`)

- **Contact:** `{{SUPPORT_EMAIL}}`, plus `{{PHONE_OR_WHATSAPP}}` if set. Say that emails are answered on Indian working days (Mon–Sat).
- **FAQ**, answered from the facts in this brief:
  - Is there a free trial? Yes, one month for every new business, with no automatic charge afterwards.
  - How do I get an account? Your business admin creates it. There is no public sign-up.
  - I forgot my password. Sign in with a one-time code sent to your mobile number instead. Your admin can also set a new password.
  - I'm not getting notifications. Allow notifications for Choukashi in your phone settings, and keep the app signed in.
  - Which phones are supported? Android now, iOS coming soon, and any modern browser at `app.choukashi.com`.
  - How do I delete my account or data? Link to `/delete-account`.
  - I messaged a business and got replies from Choukashi. Who has my data? The business you messaged; see `/privacy`, the section on leads.
- Links to Privacy and Terms.

---

## 9. Account and data deletion (`/delete-account`)

Google Play requires this page to name the app and developer, list the steps, and say what is deleted and what is kept. Apple reviewers check that deletion is possible.

**Content:**
- Heading: "Delete your Choukashi account or data". Say it applies to the **Choukashi** app by `{{LEGAL_ENTITY}}`.
- **Staff or owner account.** Two ways:
  1. Ask your business admin to disable your access in the app (Business → Staff). This stops sign-in straight away; to have the account data erased too, use option 2.
  2. Email `{{PRIVACY_EMAIL}}` from the email address on the account, with subject "Delete my account" and your business name. We confirm the request with you, then delete the account within 30 days.
- **Whole business.** The business owner emails `{{PRIVACY_EMAIL}}`. All of the business's data is deleted within 30 days: knowledge, leads, conversations, appointments and staff accounts.
- **Leads** (you messaged a business on WhatsApp). Contact that business, or email `{{PRIVACY_EMAIL}}` with the WhatsApp number you used and the business name. Your conversations and the details derived from them are deleted. Even without a request, they are removed automatically after the business's retention period (90 days by default).
- **What is deleted.** Profile (name, email, mobile), sign-in record, device notification tokens, and for a business everything listed above.
- **What may be kept, and for how long.** Records the law requires, such as invoices, for the legally required period. Security logs up to 90 days. Backups roll off within the provider's standard cycle. Messages already delivered on WhatsApp remain on the lead's and the business's phones; Choukashi cannot delete those.
- A `mailto:` button that pre-fills the subject and body.

> **Owner, act on this:** Apple guideline 5.1.1(v) expects apps that create accounts to offer deletion **inside the app** as well. Before submitting to the App Store, add an in-app "Delete my account" action (it can open this email flow), or be ready to explain to App Review that accounts are created by businesses, not by users. This is an app change, not a website change.

---

## 10. About (`/about`) — optional

Two short paragraphs:
- What Choukashi is and who it is for (reuse the home page facts).
- That it is built in Pune by `{{LEGAL_ENTITY}}`, linking to https://www.intoinworks.com/.

Then the grievance officer block (the same as in the privacy policy) and the registered address.

---

## 11. Store checklist (for the owner, not a page)

Use these when filling in the store consoles. They must match the Privacy Policy.

**URLs**
- Privacy: `https://choukashi.com/privacy`
- Terms: `https://choukashi.com/terms`
- Support: `https://choukashi.com/support`
- Delete account: `https://choukashi.com/delete-account`
- Marketing/website: `https://choukashi.com`

**Google Play Data safety** (draft answers)
- Data is collected and shared **only with service providers**. Shared with service providers is not "sharing" under Play's definition.
- **Personal info:** name, email, phone number. Collected, required, used for app functionality and account management.
- **Messages:** other in-app messages (lead conversations). App functionality.
- **Files and docs / Photos:** uploaded product brochures and photos. App functionality, optional.
- **App info and performance:** diagnostics, only if crash reporting is added later. Currently none.
- **Device or other IDs:** push token, for app functionality.
- Encrypted in transit: **Yes**. Users can request deletion: **Yes** (URL above).
- No ads. Not directed at children.

**Apple App Privacy** (draft answers)
- **Contact Info** (name, email, phone) and **User Content** (messages, photos/files, other user content). Linked to the user, used for app functionality. Not used for tracking.
- **Identifiers:** a push token is not collected as an identifier for tracking. Answer per Apple's current definitions.
- **Tracking:** none, so no App Tracking Transparency prompt is needed.

**Other store notes**
- Both stores need a working **demo login** for reviewers. Create a reviewer account on a demo business, and put its credentials in the review notes, not on the website.
- Apple requires a Support URL that shows real contact information.

---

## 12. Acceptance checklist for the build

- [ ] `/`, `/privacy`, `/terms`, `/support`, `/delete-account` all return 200, render without JavaScript, and are linked from the footer on every page.
- [ ] All `{{PLACEHOLDERS}}` come from one config file. A build-time warning (not an error) lists any that are still unfilled.
- [ ] Favicon, Apple icon and OG image come from `docs/brand` as mapped in section 4. The watermarked original icon is not used anywhere.
- [ ] No analytics scripts, no third-party cookies, no contact form.
- [ ] Lighthouse accessibility ≥ 95 on mobile. Colour tokens as in section 4.
- [ ] `www` redirects to the apex domain. Sitemap and robots are present.
- [ ] Nothing on the site claims pricing, certifications, customer numbers, or iOS availability.
