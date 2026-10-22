export function LeadSummary() {
  return (
    <section
      id="lead-brief"
      className="lead-summary-section"
      aria-labelledby="lead-summary-title"
    >
      <div className="home-shell lead-summary-layout">
        <div className="lead-summary-copy">
          <p className="section-kicker">A short note for your salesperson</p>
          <h2 id="lead-summary-title">
            Before they walk in,
            <br />
            you know what they need.
          </h2>
          <p>
            It is like a colleague saying, “Family scooter. Old Activa to
            exchange. Ask about EMI.” Your salesperson can start from there.
          </p>
          <ul>
            <li>
              <strong>Know what they want.</strong> The model, daily travel,
              family use and any old vehicle to exchange.
            </li>
            <li>
              <strong>Know what needs an answer.</strong> EMI, a special offer
              or a decision that only your team can make.
            </li>
            <li>
              <strong>Get ready for the visit.</strong> The right vehicle, visit
              time and a short list of things to do.
            </li>
          </ul>
          <p className="summary-disclosure">
            This is a sample with made-up customer details. See the real app
            screen under “Lead brief” above.
          </p>
        </div>
        <article
          className="lead-summary-card"
          aria-label="Illustrative salesperson brief for Priya Shah"
        >
          <div className="summary-card-top">
            <span>Ready for the visit</span>
            <span className="summary-demo">Demo</span>
          </div>
          <div className="summary-person">
            <div className="summary-avatar" aria-hidden="true">
              PS
            </div>
            <div>
              <h3>Priya Shah</h3>
              <p>Family use · Rizta Z 161 km</p>
            </div>
          </div>
          <div className="summary-appointment">
            <span>Friday, 23 October · 11:30 AM</span>
            <strong>Central showroom</strong>
            <span>Wants a test ride</span>
          </div>
          <div className="summary-card-body">
            <div>
              <h4>What she is looking for</h4>
              <ul>
                <li>A comfortable scooter for the family</li>
                <li>Daily travel of around 40 km</li>
                <li>Exchange a 2018 Activa</li>
              </ul>
            </div>
            <div className="summary-open">
              <h4>What staff need to answer</h4>
              <p>Explain EMI options and check what the Activa is worth.</p>
            </div>
            <div>
              <h4>Before the visit</h4>
              <p className="summary-check">
                <span aria-hidden="true">□</span> Prepare Rizta Z for a family
                test ride
              </p>
              <p className="summary-check">
                <span aria-hidden="true">□</span> Keep EMI and exchange details
                ready
              </p>
            </div>
          </div>
          <div className="summary-card-bottom">
            <span>Assigned to Aditi</span>
            <strong>Less asking again. More time to help.</strong>
          </div>
        </article>
      </div>
    </section>
  );
}
