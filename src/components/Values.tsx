export default function Values() {
    return (
        <section id="values" aria-labelledby="values-title">
            <div className="section-header fade-in visible">
                <h2 className="section-title" id="values-title">
                    Our Commitment
                </h2>
                <p className="section-subtitle">What guides everything we do</p>
            </div>
            <div className="values-grid">
                <div className="value fade-in-left visible">
                    <div className="value-number" aria-hidden="true">
                        01
                    </div>
                    <h3 className="value-title">Daily Fresh</h3>
                    <p className="value-text">
                        Every dish is prepared the day it&apos;s delivered. No
                        preservatives or advance preparation.
                    </p>
                </div>
                <div className="value fade-in visible">
                    <div className="value-number" aria-hidden="true">
                        02
                    </div>
                    <h3 className="value-title">Light on Oil</h3>
                    <p className="value-text">
                        We use minimal oil in our cooking. Traditional methods that
                        prioritize flavor and health.
                    </p>
                </div>
                <div className="value fade-in-right visible">
                    <div className="value-number" aria-hidden="true">
                        03
                    </div>
                    <h3 className="value-title">Effortless Convenience</h3>
                    <p className="value-text">
                        Designed for modern workplaces, our ordering and delivery
                        systems are seamless, reliable, and aligned with your
                        schedule.
                    </p>
                </div>
            </div>
        </section>
    );
}
