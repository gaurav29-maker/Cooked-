import Image from "next/image";
import Link from "next/link";

export default function Navigation() {
    return (
        <>
            {/* Top Bar */}
            <div className="top-bar top-bar-fixed w-full z-50">
                <div className="top-bar-content">
                    <div className="top-bar-item flex items-center">
                        <svg
                            width="14"
                            height="14"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        >
                            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                        </svg>
                        <a href="https://wa.me/918169165790" aria-label="Call or WhatsApp us">
                            +91 8169165790
                        </a>
                    </div>
                    <div className="top-bar-item flex items-center">
                        <svg
                            width="14"
                            height="14"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        >
                            <circle cx="12" cy="12" r="10"></circle>
                            <polyline points="12 6 12 12 16 14"></polyline>
                        </svg>
                        <span>Delivery: Mon-Sun, 8 AM - 8 PM</span>
                    </div>
                </div>
            </div>

            {/* Main Navigation */}
            <nav aria-label="Main Navigation">
                <div className="nav-container">
                    <Link href="#" className="logo" aria-label="Cooked with Care Home">
                        <Image
                            src="/cooked with care logo without background.png"
                            alt="Cooked with Care Logo"
                            width={70}
                            height={70}
                            className="logo-img"
                            priority
                        />
                        <span className="brand-text">Cooked with Care</span>
                    </Link>
                    <ul className="nav-links hidden md:flex">
                        <li>
                            <Link href="#mission">Our Mission</Link>
                        </li>
                        <li>
                            <Link href="#values">Why Us</Link>
                        </li>
                        <li>
                            <Link href="#menu">Our Menu</Link>
                        </li>
                        <li>
                            <Link href="#how-it-works">How It Works</Link>
                        </li>
                        <li>
                            <a
                                href="https://wa.me/918169165790?text=Hi%20Cooked%20with%20Care!%20I%27d%20like%20to%20order."
                                target="_blank"
                                rel="noopener noreferrer"
                                className="bg-[var(--gold)] text-white px-5 py-2 rounded font-medium hover:bg-[var(--gold-dark)] transition-colors inline-block no-underline hover:after:w-0"
                            >
                                Order Now
                            </a>
                        </li>
                    </ul>
                </div>
            </nav>
        </>
    );
}
