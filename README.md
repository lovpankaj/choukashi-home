# choukashi.com

The public website for Choukashi: the product page plus the privacy, terms, support and account-deletion pages the app stores link to. Fully static Next.js; the brief is in `docs/website-brief.md`.

## Run it

```bash
npm install
npm run dev        # http://localhost:3000
npm run build      # production build; also warns about unfilled placeholders
npm run lint
```

## Company details

Every company value (legal name, address, emails, phone, grievance officer, effective date, jurisdiction) lives in **`site.config.ts`**. Change it there and every page updates. A value still written as `{{PLACEHOLDER}}` shows on the site as-is, and `npm run build` prints a warning naming it.

`effectiveDate` is the "Last updated" date on the privacy policy, terms and deletion page. Set it to the date of first publish, and update it whenever those pages change.

Brand files are copied from `docs/brand/` into `public/brand/`, `public/screenshots/` and `app/`. Keep `docs/brand/` as the source; never use `docs/brand/source/`.

## Deploy on Vercel

1. Import this repo in Vercel. The framework (Next.js) is detected; no settings to change and no environment variables.
2. In the project's **Settings → Domains**, add `choukashi.com` and `www.choukashi.com`. Set `choukashi.com` as the primary domain and let `www.choukashi.com` redirect to it (308, permanent). No `vercel.json` is needed for this.
3. Point DNS at Vercel as its domain screen tells you.

The page paths (`/privacy`, `/terms`, `/support`, `/delete-account`) are registered with Apple, Google Play and Meta. Never move them; if one must change, add a permanent redirect.
