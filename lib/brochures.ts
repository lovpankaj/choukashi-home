export const brochureUpdatedAt = "2026-10-22";

export const brochures = [
  {
    file: "01-the-journey.pdf",
    name: "The journey",
    headline: "Your ad did its job. Now make the chat count.",
    description: "Follow the full path from an ad enquiry to a useful chat, the next step and payment.",
  },
  {
    file: "02-the-night-shift.pdf",
    name: "The night shift",
    headline: "Your next customer may be awake. Are your replies?",
    description: "See how quick replies help when a new enquiry arrives before or after your working day.",
  },
  {
    file: "03-the-bridge.pdf",
    name: "The bridge",
    headline: "A click is interest. A good chat is progress.",
    description: "A clear route from ad to payment, with real charts showing the work behind the chats.",
  },
  {
    file: "04-the-helping-hand.pdf",
    name: "The helping hand",
    headline: "You built the business. Let us handle “Just one question.”",
    description: "Less repeat work and less chasing, with more time for the work only you can do.",
  },
  {
    file: "05-the-payoff.pdf",
    name: "The payoff",
    headline: "Don’t stop at leads. Help them become customers.",
    description: "See where helpful replies, follow-ups and bookings fit between ad spend and a sale.",
  },
] as const;

export function brochurePath(file: string) {
  return `/brochures/${file}`;
}
