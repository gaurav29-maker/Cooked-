import Link from "next/link";

export default function Hero() {
    return (
        <section className="hero" role="banner">
            <div className="hero-content fade-in visible">
                <h1>Mumbai&apos;s Finest Vegetarian Home Kitchen</h1>
                <p>Fresh from our home kitchen to yours. Minimal oil, maximum flavor, zero guilt.</p>
                <div className="trust-badges">
                    <div className="trust-badge">
                        <div className="trust-number"><span>40,000</span>+</div>
                        <div className="trust-label">Meals Served in 4 Years</div>
                    </div>
                </div>
                <div className="hero-cta">
                    <a
                        href="https://wa.me/918169165790?text=Hi%20Cooked%20with%20Care!%20I%27d%20like%20to%20order."
                        className="cta-button"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Order Now
                    </a>
                    <Link href="#menu" className="cta-secondary">
                        or browse our menu ↓
                    </Link>
                </div>
            </div>
        </section>
    );
}
