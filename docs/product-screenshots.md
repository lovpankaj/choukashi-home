# Current product screenshots

Updated 22 October 2026. All screenshots are shown in `components/product-screens.tsx`, with captions distinguishing synthetic app captures from supplied aggregate reports. The viewer supports keyboard tabs, a native modal, original-size zoom and scrolling on narrow screens.

## Current app captures

- `public/screenshots/inbox-current.png`: current Flutter app, signed in through the Firebase Auth emulator; conversation list, chat and lead details.
- `public/screenshots/lead-brief-current.png`: the same current app's lead detail panel, captured at its natural layout width.
- `public/screenshots/visits-current.png`: current visits week with synthetic appointments and the app's `FakeCalendar` populated with matching demo events.

These were captured in WSL Chrome from the current Flutter release build. The local backend used the existing Firestore emulator with a separate `demo-choukashi-shots` project namespace, plus a separate Auth emulator. All identities, conversations, appointments and calendar events were synthetic. No production read or write was needed. No real calendar API or WhatsApp sends were made. The screenshot capture excludes the Firebase emulator warning strip; website captions explicitly identify the data as demo data.

The reproducible seed and local capture wrapper remain in the source application's ignored directory: `WAReplyAgent/emulator-data-console/analysis-2026-10-22/screenshots/`. No source app code or brand artwork was changed for the capture.

## Supplied report screenshots

Copied without changing their pixels from the owner's Windows screenshot folder:

- `Screenshot 2026-10-20 184343.png` → `reports-overview-current.png`
- `Screenshot 2026-10-20 184359.png` → `reports-journey-current.png`
- `Screenshot 2026-10-20 184425.png` → `reports-response-current.png`

These aggregate reports contain no customer identities. Their figures describe their own selected reporting period, not the pooled 13–22 October proof metrics elsewhere on the page. Captions retain that distinction.

The supplied `184209` calendar screenshot contains customer names, phone numbers and a tenant name. It was used as a layout reference only and has not been copied into public assets. The fresh synthetic calendar capture replaces it.

## Lead-summary illustration

`components/lead-summary.tsx` is a responsive HTML illustration of the salesperson's brief, using the same synthetic customer and supported fields shown in the real app capture. It is labelled as an illustrative demo summary. The actual app panel is separately available in the viewer.

The original brand assets and logos remain unchanged. The home page no longer references the outdated inbox image, but the old file remains available for any historical references.
