import { pricing } from "@/lib/pricing";

export const faqs = [
  {
    question: "What is Choukashi?",
    answer:
      "Choukashi is an AI helper for your business’s WhatsApp. It answers customer questions, helps book visits and gives your sales team the details they need. Think of a helpful colleague at the counter, on WhatsApp.",
  },
  {
    question: "I already use WhatsApp Business. Why do I need this?",
    answer:
      "A greeting says hello. A customer may need much more: ‘Activa exchange hogi?’, ‘EMI kitni?’, or ‘Can I come on Sunday?’ Choukashi follows the chat and helps with the next step. Your staff can join when needed.",
  },
  {
    question: "How can Choukashi help my showroom sell more?",
    answer:
      "Your ads bring enquiries. Choukashi helps you make more of them: answer doubts, follow up when a chat goes quiet and arrange visits. Your salesperson gets the customer’s needs before they meet. Your team still has to close the sale.",
  },
  {
    question: "Will Choukashi replace my sales staff?",
    answer:
      "No. Let it handle repeat questions while your people handle test rides, prices that need approval and the final deal. Staff can take over a chat and later hand it back to the assistant.",
  },
  {
    question: "Can I use my business’s WhatsApp number?",
    answer:
      "Yes, Choukashi uses your business’s WhatsApp number through the WhatsApp Business Platform. We check your current setup and help you connect it. Customers do not have to download a new app.",
  },
  {
    question: "Does it understand Indian languages written in English letters?",
    answer:
      "Yes. Choukashi works with all Indian languages, in their own script, English letters or a mix. ‘Kimat kitni hai’, ‘किंमत किती आहे’ and short, misspelled messages can be part of a normal chat. The examples on this page show Hindi, Marathi and Hinglish, but support is not limited to them.",
  },
  {
    question: "How does it learn my models, prices and offers?",
    answer:
      "You add your products, prices, offers, photos and showroom details. You can also add a brochure PDF and common questions. Check the details before they go live, just as you would brief a new salesperson.",
  },
  {
    question: "What if a customer asks something only my staff can answer?",
    answer:
      "The assistant can send the question to your team and pass their answer back. Staff can also take over the chat. AI can make mistakes, so keep your information up to date and review chats.",
  },
  {
    question: "What does Choukashi cost?",
    answer: `Choukashi is prepaid and pay-as-you-use. Recharges below ₹10,000 cost ₹${pricing.standardMessageRupees.toFixed(2)} per outgoing message. The ₹10,000 pack gives you 10,000 messages at ₹1 each. GST is ${pricing.gstPercent}% extra. Your business pays Meta’s WhatsApp charges separately.`,
  },
  {
    question: "What do I get with a ₹10,000 recharge?",
    answer:
      "You get 10,000 outgoing messages. At the regular ₹1.20 rate, those messages would cost ₹12,000, so you save ₹2,000 before GST. With 18% GST, you pay ₹11,800 for the ₹10,000 pack.",
  },
  {
    question: "Do staff replies and reminders also count as paid messages?",
    answer:
      "Yes. Each outgoing AI reply, WhatsApp template and human staff reply counts. Incoming customer messages are not charged by Choukashi. You pay per outgoing message, not once per whole chat.",
  },
  {
    question: "Are GST and Meta’s WhatsApp charges included?",
    answer:
      "No. Add 18% GST to the Choukashi recharge. Meta’s WhatsApp charges are separate and are your business’s responsibility. For example, a ₹1,200 Choukashi recharge costs ₹1,416 with GST; Meta charges are not part of that amount.",
  },
  {
    question: "How many extra sales would cover the recharge?",
    answer:
      "Use profit, not the full sale price, for this hisaab. For example, if you keep ₹5,000 profit per extra sale, three extra sales cover the ₹11,800 recharge including GST. That example leaves out Meta’s charges and other costs. Try your own numbers in the calculator above; extra sales are not guaranteed.",
  },
  {
    question: "Can it book test rides and change visit times?",
    answer:
      "Yes. It can book a showroom visit in your connected Google Calendar. It can move or cancel the booking when the customer agrees. Test-ride interest is noted for staff; your team prepares the vehicle and confirms the ride.",
  },
  {
    question: "What does the salesperson see when the customer walks in?",
    answer:
      "A short summary: what the customer wants, their questions, any exchange request and the agreed visit. Staff also get the next step and a preparation checklist. It is like a colleague saying, ‘Family scooter, Activa exchange, discuss EMI,’ before handing over.",
  },
  {
    question: "Can it send follow-ups and service reminders?",
    answer:
      "Yes, with the right setup. It can follow up on quiet enquiries and remind people about visits. Service reminders use your connected customer data. Messages follow your settings and WhatsApp’s rules; some need Meta-approved templates.",
  },
  {
    question: "Can my team use it on a phone?",
    answer:
      "Yes. Staff can use the Android app on the showroom floor or the web app on a computer. They can read chats, reply, check leads and see visits.",
  },
  {
    question: "Will another showroom see my leads?",
    answer:
      "No. Each business’s data is kept separate. Staff access is based on their role and assigned leads. Data is stored in Google Cloud in India’s Mumbai region. We do not sell your data.",
  },
  {
    question: "How do I start? Do I need a technical person?",
    answer:
      "Talk to us on WhatsApp or email. We help connect your business number, add your products and set up your team. Your job is to check your prices, offers and business details. You do not need to write code.",
  },
];
