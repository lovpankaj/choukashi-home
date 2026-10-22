// Commercial terms confirmed by the owner on 22 October 2026.
export const pricing = {
  standardMessageRupees: 1.2,
  packRupees: 10000,
  packMessages: 10000,
  gstPercent: 18,
} as const;

export const rupees = (amount: number) =>
  new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 0,
  }).format(amount);
