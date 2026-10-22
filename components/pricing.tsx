"use client";

import { useState } from "react";
import { links } from "@/site.config";
import { pricing, rupees } from "@/lib/pricing";

export function Pricing() {
  const [pack, setPack] = useState(true);
  const [saleValue, setSaleValue] = useState("100000");
  const [profit, setProfit] = useState("5000");
  const [extraSales, setExtraSales] = useState("5");
  const cost = pack ? pricing.packRupees : 1200;
  const total = cost * (1 + pricing.gstPercent / 100);
  const value = Number(saleValue),
    margin = Number(profit),
    sales = Number(extraSales);
  const valid =
    saleValue !== "" &&
    profit !== "" &&
    extraSales !== "" &&
    Number.isFinite(value) &&
    Number.isFinite(margin) &&
    Number.isFinite(sales) &&
    value >= 1 &&
    value <= 100000000 &&
    margin > 0 &&
    margin <= value &&
    Number.isInteger(sales) &&
    sales >= 0 &&
    sales <= 10000;
  const breakEven = valid ? Math.ceil(total / margin) : 0;
  const left = valid ? margin * sales - total : 0;

  return (
    <section
      id="pricing"
      className="pricing-section"
      aria-labelledby="pricing-title"
    >
      <div className="home-shell">
        <div className="section-heading">
          <div>
            <p className="section-kicker">
              Small cost per reply. More chances to sell.
            </p>
            <h2 id="pricing-title">
              You paid for the enquiry.
              <br />
              Now keep the chat going.
            </h2>
          </div>
          <p>
            An ad brings the customer to your WhatsApp. A useful reply helps
            them take the next step. Pay for the messages you send, as you use
            them.
          </p>
        </div>
        <p className="pricing-analogy">
          Like a prepaid mobile recharge: add balance first, then use it. No
          fixed monthly plan.
        </p>
        <div className="price-options">
          <article className="price-option">
            <p>For recharges below ₹10,000</p>
            <h3>
              ₹1.20 <span>per outgoing message</span>
            </h3>
            <ul>
              <li>AI replies, reminders and staff replies all count.</li>
              <li>For example: ₹1,200 gives you 1,000 messages.</li>
              <li>With 18% GST, that recharge costs ₹1,416.</li>
            </ul>
            <a href={links.whatsapp}>
              Ask us about a recharge <span aria-hidden="true">↗</span>
            </a>
          </article>
          <article className="price-option pack">
            <div className="pack-heading">
              <p>The ₹10,000 recharge</p>
              <span>Lower cost per message</span>
            </div>
            <h3>
              ₹1 <span>per outgoing message</span>
            </h3>
            <p className="pack-equation">₹10,000 = 10,000 messages</p>
            <ul>
              <li>
                The same 10,000 messages cost ₹12,000 at the regular rate.
              </li>
              <li>You save ₹2,000 before GST.</li>
              <li>Total recharge: ₹11,800, including 18% GST.</li>
            </ul>
            <a href={links.whatsapp}>
              Talk to us about this pack <span aria-hidden="true">↗</span>
            </a>
          </article>
        </div>
        <div className="pricing-counts">
          <strong>What counts as one message?</strong>
          <p>
            Each outgoing message sent by the AI, a WhatsApp template or your
            staff counts. Customer messages coming in are not charged by
            Choukashi. One chat can have several paid replies.
          </p>
          <p>
            Prices above are for Choukashi. GST is 18% extra. Meta’s WhatsApp
            charges are separate and paid by your business.
          </p>
        </div>
        <div className="business-calculator" aria-labelledby="calculator-title">
          <div className="calculator-copy">
            <p className="section-kicker">Do the hisaab for your showroom</p>
            <h3 id="calculator-title">
              How many extra sales
              <br />
              cover your recharge?
            </h3>
            <p>
              A ₹1 lakh sale is not ₹1 lakh profit. Use the amount you keep from
              a sale to see what the recharge needs to earn back.
            </p>
            <p className="calculator-example">
              These are sample numbers, not a sales promise. Change them for
              your business.
            </p>
          </div>
          <div className="calculator-body">
            <fieldset className="calculator-plans">
              <legend>Choose a recharge for this example</legend>
              <label>
                <input
                  type="radio"
                  name="recharge"
                  checked={!pack}
                  onChange={() => setPack(false)}
                />{" "}
                ₹1,200 · 1,000 messages
              </label>
              <label>
                <input
                  type="radio"
                  name="recharge"
                  checked={pack}
                  onChange={() => setPack(true)}
                />{" "}
                ₹10,000 · 10,000 messages
              </label>
            </fieldset>
            <div className="calculator-inputs">
              <label htmlFor="sale-value">
                Your usual sale value (₹)
                <input
                  id="sale-value"
                  type="number"
                  inputMode="numeric"
                  min="1"
                  max="100000000"
                  value={saleValue}
                  onChange={(event) => setSaleValue(event.target.value)}
                />
              </label>
              <label htmlFor="sale-profit">
                Profit you keep per sale (₹)
                <input
                  id="sale-profit"
                  type="number"
                  inputMode="numeric"
                  min="1"
                  max="100000000"
                  value={profit}
                  onChange={(event) => setProfit(event.target.value)}
                />
              </label>
              <label htmlFor="extra-sales">
                Extra sales you want to try for
                <input
                  id="extra-sales"
                  type="number"
                  inputMode="numeric"
                  min="0"
                  max="10000"
                  step="1"
                  value={extraSales}
                  onChange={(event) => setExtraSales(event.target.value)}
                />
              </label>
            </div>
            <div className="calculator-result" aria-live="polite">
              {valid ? (
                <>
                  <p className="break-even">
                    <strong>
                      {breakEven} extra {breakEven === 1 ? "sale" : "sales"}
                    </strong>
                    <span>would cover this recharge, including GST.</span>
                  </p>
                  <dl>
                    <div>
                      <dt>Recharge with GST</dt>
                      <dd>{rupees(total)}</dd>
                    </div>
                    <div>
                      <dt>
                        Sales value from {sales} extra{" "}
                        {sales === 1 ? "sale" : "sales"}
                      </dt>
                      <dd>{rupees(value * sales)}</dd>
                    </div>
                    <div>
                      <dt>
                        {left >= 0
                          ? "Profit left after this recharge"
                          : "Still to recover after these sales"}
                      </dt>
                      <dd className={left >= 0 ? "positive" : ""}>
                        {rupees(Math.abs(left))}
                      </dd>
                    </div>
                  </dl>
                </>
              ) : (
                <p>
                  Enter a sale value and profit above ₹0. Profit cannot be more
                  than the sale value. Use a whole number for extra sales.
                </p>
              )}
            </div>
            <p className="calculator-footnote">
              Use profit after the cost of the vehicle or service, but before
              Choukashi. This example includes recharge GST. It leaves out
              Meta’s charges and any other costs or taxes. Extra sales are your
              assumption, not a forecast.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
