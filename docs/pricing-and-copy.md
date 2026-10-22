# Plain-language copy, pricing and FAQs

Confirmed by the owner on 22 October 2026:

- Prepaid, pay-as-you-use billing.
- Recharges below ₹10,000: ₹1.20 per outgoing message.
- ₹10,000 recharge: 10,000 outgoing messages, or ₹1 per message.
- Every outgoing AI reply, WhatsApp template and human staff reply counts.
- GST is 18% extra. The ₹10,000 recharge therefore costs ₹11,800.
- The business pays Meta’s WhatsApp charges separately.

Commercial constants are in `lib/pricing.ts`. The home page, support answer and terms reflect these rates. No new recharge-expiry, refund or larger-pack policy is assumed. The existing one-month trial remains; the owner did not withdraw it.

## Business-value calculator

The calculator uses an illustrative ₹1,00,000 sale, ₹5,000 profit per sale, five assumed extra sales and the ₹10,000 recharge by default. Users can change the figures and select a ₹1,200 example recharge instead.

- Recharge cost includes 18% GST.
- Break-even sales = ceiling(recharge cost including GST / profit per sale).
- Sales value = assumed extra sales × sale value.
- Profit left = assumed extra sales × profit per sale − recharge cost including GST.
- A negative result is labelled as an amount still to recover.

The sample is not a forecast or a claim of sales caused by Choukashi. The calculator explicitly excludes Meta fees and other costs/taxes. Profit per sale must be after the vehicle/service cost but before Choukashi; it cannot exceed sale value. Empty inputs, zero profit, negative values, fractional sale counts and overly large inputs are rejected.

## Copy and FAQ approach

Use short sentences and words a showroom owner uses. Explain cost with a prepaid-mobile recharge analogy and the sales handover with a colleague’s short note. Keep a few natural Indian phrases, such as “hisaab”, without making English readers depend on translations. Original customer messages and screenshot pixels are unchanged.

Nineteen visible, server-rendered FAQs cover buying intent, WhatsApp Business, staff control, languages/scripts, setup, rates, GST/Meta fees, visits, follow-ups and privacy. `lib/faqs.ts` supplies both the visible answers and the matching FAQPage JSON-LD, so the markup cannot drift from the page. FAQ content is available without JavaScript. No promise of higher rankings or Google FAQ rich results is made.

Technical references:

- Next.js bundled guide: `node_modules/next/dist/docs/01-app/02-guides/json-ld.md` (server-rendered script and escaping `<`).
- Google structured-data guidelines: https://developers.google.com/search/docs/appearance/structured-data/sd-policies (markup must match visible content).
- Google Search updates: https://developers.google.com/search/updates#june-2026 (Google removed FAQ rich-result documentation in June 2026 after ending that display feature in May. FAQPage remains semantic markup here; the visible useful answers are the SEO content, not a promise of special Google results).
