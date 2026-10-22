# Production evidence for the homepage

Extracted read-only from the live `wa-lead-poc` Google Cloud project using existing human Application Default Credentials. No service-account key, write operation or customer text was involved. Public-safe results are in [`../lib/production-proof.json`](../lib/production-proof.json).

## Window and scope

13 October 2026 00:00 IST through 22 October 2026 at the exact UTC extraction cutoff stored in the JSON `window.end`. 22 October is a partial day. These are ten calendar dates, not ten complete 24-hour periods. Website copy must show the dates and say that the final day is partial.

Only the two real customer businesses, Ather Fine Electric and Fine Honda, were included. Acme Motors and the review tenant were excluded. `fake.*` and `wamid.demo.*` provider IDs were excluded. A conversation qualifies only if it has at least one real WhatsApp inbound message in the window. This establishes a real-customer cohort, though identifiable internal human testing on real WhatsApp numbers cannot be separated automatically. No customer text, phone, name or identifying record ID is published.

## Results and wording

- **2,346 active customer conversations**, representing **2,344 distinct tenant/customer records**. This is not a count of globally unique people across businesses.
- **34,829 messages exchanged**: 17,281 incoming customer messages and 17,548 WhatsApp-accepted outgoing messages. Do not use the raw stored-message count, which also contains unsent records. Accepted does not mean every message was delivered or read.
- **66.5% of conversations contained at least three customer messages** (1,561 / 2,346). Alternatively, **66.2% contained at least six exchanged messages** (1,552 / 2,346). Use either with its precise threshold visible. “60%+ long conversations” alone is too vague. Counts include button replies as well as typed customer messages. Counts are within the window, not necessarily the entire lifetime of a conversation.
- **7.4-second median AI reply time**, **10.1-second 90th percentile**, across **12,769 measured AI replies**. **98.4%** of measured replies took less than 15 seconds. These are exact percentiles, independently checked against approximate quantiles. Latency is customer message creation/receipt to the reply being handed to the channel, not customer read time, model generation time or a promised SLA. Only replies with an available latency sample are included. The denominator is not every outgoing message; historical/migrated records and proactive messages need not have samples.
- **459 follow-up nudges sent**, across **199 conversations**; 453 had delivery confirmation and 373 had read confirmation by cutoff. **114 nudge touches recorded a later customer reply**, and **20 recorded a later booking**. These are touch-level subsequent outcomes, not unique customers, causal conversions or an experiment. Outcome fields are counted only if they occurred before cutoff. Held-back, failed and unsent touches are excluded. All nudge records were checked against the real conversation cohort.
- **436 appointments created**, all with a calendar event ID; **420 currently have booked status** at extraction. These are scheduled appointments, not attendance or sales. Appointment lead IDs were checked against the real inbound cohort. Calendar IDs establish recorded calendar linkage, not a live audit of Google Calendar events.
- **4,859 customer messages arrived outside 9 AM–9 PM IST**. This is a clock-time band, not a claim about either business’s actual opening hours. Useful wording: “Customers kept messaging after 9 PM and before 9 AM.” Do not say these were all answered outside opening hours without another query.

## Sources and computation

Primary sources are the actual production database and this repository's implementations:

- `WAReplyAgent/backend/app/repositories/logbook_reads.py`: `outgoing_daily_sql`, canonical accepted-send states, fake/demo exclusions and provider-ID deduplication; query partition and tenant-filter rules.
- `WAReplyAgent/backend/app/reports/listener.py`, `on_outbound_sent`: source and meaning of reply-latency samples.
- `WAReplyAgent/backend/app/reports/telemetry.py`, `follow_ups`: touch-level sent/replied/booked outcomes; `latency_daily`: reply-time reporting.
- Production BigQuery `logbook.v_message` and `logbook.v_reply_latency`, queried with timestamp partition lower bound one day before the window and event-time bounds. Latest event per tenant/direction/provider ID is retained for messages; latency retains latest per tenant/message ID. Queries were capped at 2 GB billed each.
- Production Firestore `tenants/{tenant}/nudgeTouches` filtered on `sentAt`, and `appointments` filtered on `createdAt`, with bounded reads.

Reproducibility files stay in the source application's ignored local directory: `emulator-data-console/analysis-2026-10-22/production-proof/`: `query_metrics.py`, `validate.py`, `queries.json`, `aggregates.json`. They contain the query text, cutoff and aggregate results/job IDs. Do not expose these source-app files through the website. Public JSON deliberately removes production business names, IDs and query job IDs.

## Limits

This is a dated production snapshot, not a live dashboard or universal performance guarantee. Figures describe two deployed businesses and their traffic; they do not establish performance across every industry or language. No inference of revenue, saved staff hours, conversion uplift or attribution is supported. The separate historical conversation showcases are selected examples and do not necessarily belong to this reporting window. All displayed results should be described positively but retain these factual metric definitions.

## CTA achievement: deduplicated visit booking

**18.2% of active customer conversations booked a visit**: **427 / 2,346 conversations** had at least one appointment created during the same reporting window. The 436 appointment records collapse to 427 distinct conversations; repeat bookings do not inflate the numerator. All 436 appointment conversation IDs matched the real inbound cohort. This rate includes the 16 subsequently cancelled appointment records because it measures the act of booking. If the public claim implies a booking still exists, use **17.5%**, **411 / 2,346 conversations**, which had at least one appointment in `booked` status at extraction. Those 411 conversations account for the 420 currently booked appointment records.

Within the engaged subgroup of conversations with at least three customer messages in the window, **27.4% booked** (**427 / 1,561**). This is a selected engagement subgroup and must never be presented as the booking rate of all conversations. Do not call this an uplift versus a baseline or attribute every booking solely to AI; human actions can participate in these conversations.

The denominator is active conversations with a real inbound message during the window, including conversations started earlier. The numerator requires an appointment created in the window and attached to one of those conversations. This is an activity-window rate, not the eventual conversion rate for a cohort of new leads acquired during those ten dates. “Visit booking rate” is the actual measured CTA; bookings do not establish attendance, a completed test ride or a sale. Public reporting pools the two businesses and does not name them or break results down by tenant.

Additional validation confirmed zero inbound messages missing a real `wamid.*` provider ID in the included cohort, and zero missing customer-record IDs.
