import Image from "next/image";
import Link from "next/link";
import { ConversationGallery } from "@/components/conversation-gallery";
import { ProductScreens } from "@/components/product-screens";
import { LeadSummary } from "@/components/lead-summary";
import { Pricing } from "@/components/pricing";
import { HomeFaq } from "@/components/home-faq";
import { featureGroups } from "@/lib/features";
import { tamil, telugu, gujarati, bengali } from "@/lib/fonts";
import { pageMetadata } from "@/lib/metadata";
import { links, mailto, site } from "@/site.config";
import proof from "@/lib/production-proof.json";

export const metadata = {
  ...pageMetadata(
    "Choukashi — your WhatsApp sales helper",
    "Answer customer questions, book showroom visits and help your sales team on WhatsApp. All Indian languages. Prepaid pricing from ₹1 per outgoing message with the ₹10,000 pack.",
    "/",
  ),
  title: {
    absolute: "Choukashi — your WhatsApp sales helper",
  },
};
const talkToUs = mailto(site.supportEmail, "Choukashi for my business");

export default function Home() {
  return (
    <div className="home-page">
      <section className="home-hero home-shell" aria-labelledby="hero-title">
        <div className="hero-copy">
          <p className="section-kicker">
            <span className="brand-tick" aria-hidden="true" />
            For your showroom. In your customer’s language.
          </p>
          <h1 id="hero-title">
            Your WhatsApp. <br /> An extra pair <br />
            of hands.
          </h1>
          <p className="hero-description">
            Like a helpful salesperson at your counter. Choukashi answers
            questions, helps book visits and asks your team for help when
            needed. All on your own WhatsApp number.
          </p>
          <div className="hero-actions">
            <a className="home-button primary" href={talkToUs}>
              Ask for a demo <span aria-hidden="true">↗</span>
            </a>
            <a className="hero-text-link" href="#conversations">
              Read the real conversations <span aria-hidden="true">↓</span>
            </a>
          </div>
          <p className="trial-note">
            Your first month is on us. No automatic charge afterwards.
          </p>
        </div>
        <div className="hero-stage">
          <div className="hero-stage-label">
            The customer said, “We will buy Ola.”
          </div>
          <div className="hero-chat">
            <div className="hero-chat-top">
              <Image
                src="/brand/icon-bubble.svg"
                alt=""
                width={37}
                height={37}
                unoptimized
              />
              <div>
                <strong>A real customer. A real chat.</strong>
                <span>From a dealership’s WhatsApp</span>
              </div>
            </div>
            <div className="hero-customer">
              <span>Customer</span>
              <p>
                Isase acchi to ola Hai FIR vah 8 sal ki guarantee aur 80000
                kilometer de rahe Ham ola hi lenge
              </p>
            </div>
            <div className="hero-assistant">
              <span>Choukashi</span>
              <p>
                Ather mein bhi Pro pack ke sath Eight70 add-on lekar 8 saal ya
                80,000 km tak ki battery warranty mil jaati hai.
              </p>
            </div>
            <a className="hero-result" href="#conversations">
              <span className="result-symbol" aria-hidden="true">
                ↗
              </span>
              <div>
                <strong>The customer stayed in the chat.</strong>
                <span>The customer went on to book a visit.</span>
              </div>
              <span aria-hidden="true">→</span>
            </a>
            <p className="hero-excerpt-note">
              Part of a real chat. The longer warranty costs extra.
            </p>
          </div>
          <div className="hero-margin-note">
            The useful part?
            <br />
            <strong>Finding the customer’s real doubt.</strong>
          </div>
        </div>
      </section>

      <section className="proof-section" aria-labelledby="proof-title">
        <div className="home-shell">
          <div className="proof-heading">
            <h2 id="proof-title">
              Real chats. <br /> Real results.
            </h2>
            <p>
              Results from 13–22 October 2026. The last day is not a full day.{" "}
              <br />
              These numbers combine results from live businesses.
            </p>
          </div>
          <div className="proof-numbers">
            <div>
              <strong>
                {Math.floor(proof.exchangedMessages / 1000)},000<span>+</span>
              </strong>
              <h3>messages sent and received</h3>
              <p>Customer messages and replies from the business.</p>
            </div>
            <div>
              <strong>
                {proof.aiReplyTime.medianSeconds}
                <span>s</span>
              </strong>
              <h3>typical AI reply time</h3>
              <p>
                Half the measured replies were faster. Based on 12,000+ replies.
              </p>
            </div>
            <div>
              <strong>
                {proof.engagement.threePlusCustomerMessagesPercent}
                <span>%</span>
              </strong>
              <h3>kept the conversation going</h3>
              <p>Customers sent at least three messages in these 10 days.</p>
            </div>
            <div>
              <strong>{proof.nudges.sent}</strong>
              <h3>follow-up messages sent</h3>
              <p>A gentle reminder when a chat goes quiet.</p>
            </div>
            <div>
              <strong>{proof.conversations.toLocaleString("en-IN")}</strong>
              <h3>customer chats</h3>
              <p>Across these 10 days.</p>
            </div>
            <div>
              <strong>
                {proof.cta.bookingRatePercent}
                <span>%</span>
              </strong>
              <h3>of chats led to a visit booking</h3>
              <p>
                {proof.cta.bookedConversations} chats led to a booked visit.
              </p>
            </div>
          </div>
          <div className="proof-followthrough">
            <span>A little follow-up helps</span>
            <p>
              <strong>
                {proof.nudges.replied} follow-up messages got a reply
                afterwards.
              </strong>{" "}
              A chance to pick up the chat again.
            </p>
          </div>
          <details className="proof-method">
            <summary>What these numbers mean</summary>
            <p>
              These totals combine live business chats from 13 to 22 October
              2026. The last day is not complete. We count customer messages and
              messages accepted for sending, not unsent drafts. Button replies
              count too. The reply time is the middle value of measured AI
              replies, not a promised speed. A visit was booked in 427 of 2,346
              chats. Some bookings were later cancelled. A booking does not mean
              a customer came or bought. A reply after a follow-up does not
              prove the follow-up caused it. We show no business-by-business
              results or customer names here.
            </p>
            <p>
              Data captured:{" "}
              {new Date(proof.window.end).toLocaleString("en-IN", {
                timeZone: "Asia/Kolkata",
                dateStyle: "medium",
                timeStyle: "short",
              })}{" "}
              IST.
            </p>
          </details>
        </div>
      </section>

      <section
        className="language-section home-shell"
        aria-labelledby="language-title"
      >
        <div className="language-wordmark" aria-hidden="true">
          <span>नमस्ते</span>
          <span className={tamil.className} lang="ta">
            வணக்கம்
          </span>
          <span className={gujarati.className} lang="gu">
            નમસ્તે
          </span>
          <span className={telugu.className} lang="te">
            నమస్తే
          </span>
          <span className={bengali.className} lang="bn">
            নমস্কার
          </span>
          <span>Namaskara</span>
        </div>
        <div className="language-copy">
          <p className="section-kicker">
            All Indian languages. Their script or English letters.
          </p>
          <h2 id="language-title">
            Their language. <br /> Their spelling. <br /> No problem.
          </h2>
          <p>
            Hindi in English letters? Marathi in Devanagari? Bilkul. Choukashi
            works with all Indian languages. Customers can use their own script,
            English letters or both. They do not need perfect spelling.
          </p>
          <p className="language-footnote">
            The chats below show Hindi, Marathi and Hinglish. These are
            examples, not the only languages we support.
          </p>
        </div>
      </section>

      <section
        className="stories-section"
        id="conversations"
        aria-labelledby="stories-title"
      >
        <div className="home-shell">
          <div className="section-heading">
            <div>
              <p className="section-kicker">See the real chats</p>
              <h2 id="stories-title">
                People talk like this. <br /> Choukashi keeps up.
              </h2>
            </div>
            <p>
              15 real chats from October 2026. Short replies, mixed languages,
              price doubts and changes of plan. See how the assistant helped and
              what happened next.
            </p>
          </div>
          <ConversationGallery />
        </div>
      </section>

      <section
        id="features"
        className="features-section home-shell"
        aria-labelledby="features-title"
      >
        <div className="section-heading">
          <div>
            <p className="section-kicker">More than answering questions</p>
            <h2 id="features-title">
              Less repeat work. <br />
              More time for customers.
            </h2>
          </div>
          <p>
            Your team should be helping customers, not typing the same answer
            all day. Here is where Choukashi lends a hand.
          </p>
        </div>
        <ProductScreens />
        <div className="features-layout">
          <div className="product-view feature-intro">
            <p className="section-kicker">Why this helps</p>
            <h3>
              Less chasing. <br />
              More selling.
            </h3>
            <p>
              Think of it as an extra person at the counter. It handles repeat
              questions. Your team handles the deal. You can see who needs help.
            </p>
            <a className="hero-text-link" href={links.app}>
              Already with us? Sign in <span aria-hidden="true">↗</span>
            </a>
          </div>
          <div className="feature-groups">
            {featureGroups.map((group, i) => (
              <details
                key={group.title}
                className="feature-group"
                open={i === 0}
              >
                <summary>
                  <span>
                    <strong>{group.title}</strong>
                    <span>{group.benefit}</span>
                  </span>
                  <span className="feature-toggle" aria-hidden="true">
                    +
                  </span>
                </summary>
                <dl>
                  {group.features.map(([title, text]) => (
                    <div key={title}>
                      <dt>{title}</dt>
                      <dd>{text}</dd>
                    </div>
                  ))}
                </dl>
              </details>
            ))}
          </div>
        </div>
      </section>

      <LeadSummary />

      <section className="setup-section" aria-labelledby="setup-title">
        <div className="home-shell setup-layout">
          <div>
            <p className="section-kicker">Getting started</p>
            <h2 id="setup-title">
              Your number. <br /> Your details. <br /> Your team.
            </h2>
            <p>We help you set it up for your showroom.</p>
          </div>
          <ol className="setup-steps">
            <li>
              <span>01</span>
              <div>
                <h3>Connect your WhatsApp</h3>
                <p>
                  We help connect your business number. Add your branches and
                  the calendar where you book visits.
                </p>
              </div>
            </li>
            <li>
              <span>02</span>
              <div>
                <h3>Add your shop details</h3>
                <p>
                  Add your models, prices, photos, offers and common questions.
                  Check the details before they go live.
                </p>
              </div>
            </li>
            <li>
              <span>03</span>
              <div>
                <h3>Add your sales team</h3>
                <p>
                  Add your staff and choose your follow-up settings. They can
                  answer a question or take over a chat at any time.
                </p>
              </div>
            </li>
          </ol>
        </div>
      </section>

      <Pricing />

      <section
        className="trust-section home-shell"
        aria-labelledby="trust-title"
      >
        <div>
          <p className="section-kicker">Your business. Your data.</p>
          <h2 id="trust-title">Your customer list stays yours.</h2>
          <p>
            Another business cannot see your leads. Staff see the leads they are
            allowed to handle. Your data is stored in Google Cloud in Mumbai,
            India. We do not sell it or use it for ads.
          </p>
          <p>
            Choose how long chats are kept. The starting setting is{" "}
            {site.retentionDaysDefault} days. Want to know more?{" "}
            <Link className="text-link" href="/privacy">
              Read our privacy policy.
            </Link>
          </p>
        </div>
        <div className="trust-statement">
          <Image
            src="/brand/icon-bubble.svg"
            alt=""
            width={54}
            height={54}
            unoptimized
          />
          <p>
            चौकशी means enquiry.
            <br />
            <strong>Every enquiry deserves attention.</strong>
          </p>
        </div>
      </section>

      <HomeFaq />

      <section className="closing-section">
        <div className="home-shell">
          <p>Your next customer may already be typing.</p>
          <h2>
            Let’s get your <br />
            WhatsApp working harder.
          </h2>
          <div>
            <a className="home-button light" href={talkToUs}>
              Talk to us <span aria-hidden="true">↗</span>
            </a>
            <a className="closing-contact" href={links.whatsapp}>
              Or message us on WhatsApp
            </a>
          </div>
          <span className="closing-trial">
            Try it free for a month. No automatic charge afterwards.
          </span>
        </div>
      </section>
    </div>
  );
}
