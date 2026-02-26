import Link from "next/link";

export default function HowItWorks() {
    return (
        <section id="how-it-works" aria-labelledby="how-it-works-title">
            <div className="section-header fade-in visible">
                <h2 className="section-title" id="how-it-works-title">
                    How It Works
                </h2>
                <p className="section-subtitle">Fresh meals in 3 simple steps</p>
            </div>
            <div className="steps-grid">
                <div className="step fade-in-left visible">
                    <div className="step-number" aria-hidden="true">
                        1
                    </div>
                    <h3 className="step-title">Check Today&apos;s Specials</h3>
                    <p className="step-text">
                        See what Bina&apos;s cooking today.{" "}
                        <Link href="#menu" style={{ color: "var(--gold)" }}>
                            Explore our other offerings too →
                        </Link>
                    </p>
                </div>
                <div className="step fade-in visible">
                    <div className="step-number" aria-hidden="true">
                        2
                    </div>
                    <h3 className="step-title">WhatsApp Your Order</h3>
                    <p className="step-text">
                        Message us with your selection. We&apos;ll confirm
                        availability and delivery time.
                    </p>
                </div>
                <div className="step fade-in-right visible">
                    <div className="step-number" aria-hidden="true">
                        3
                    </div>
                    <h3 className="step-title">Enjoy Fresh Delivery</h3>
                    <p className="step-text">
                        Your meal arrives fresh from our kitchen. Prepared the same
                        day, never stored.
                    </p>
                </div>
            </div>
        </section>
    );
}
