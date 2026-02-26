"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

export default function Testimonials() {
    const [currentSlide, setCurrentSlide] = useState(0);
    const totalSlides = 3;

    useEffect(() => {
        const slideInterval = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % totalSlides);
        }, 7000);

        return () => clearInterval(slideInterval);
    }, [totalSlides]);

    const goToSlide = (index: number) => {
        setCurrentSlide(index);
    };

    const testimonials = [
        {
            text: "My mother used to make the most incredible Undhiyu, but she can't cook anymore due to health reasons. I really missed that taste. Cooked with Care has filled that void completely — it tastes just like home. Thank you for bringing back those memories.",
            author: "Aparna Panwar",
            role: "Regular Customer, Bandra",
            image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2",
        },
        {
            text: "A healthy mix of seasonal greens cooked with minimal oil — I could eat it guilt-free. This is exactly what I've been looking for. Healthy food that actually tastes delicious.",
            author: "Parbin Kaur Mehta",
            role: "Health Enthusiast, Powai",
            image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330",
        },
        {
            text: "I'm a repeat customer and there's a reason for that. Every dish is thoughtfully crafted — healthy, innovative, and full of flavour. Thank you Bina for constantly raising the bar. Keep it up!",
            author: "Percis Dubash",
            role: "Loyal Customer, Andheri",
            image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2",
        }
    ];

    return (
        <section id="testimonials" aria-labelledby="testimonials-title">
            <div className="section-header fade-in visible">
                <h2 className="section-title" id="testimonials-title">
                    What Our Customers Say
                </h2>
                <p className="section-subtitle">
                    Trusted by families and offices across Mumbai
                </p>
            </div>
            <div
                className="testimonials-container fade-in visible"
                tabIndex={0}
                role="region"
                aria-label="Customer testimonials - use arrow keys to navigate"
            >
                <div
                    className="testimonial-slider"
                    id="testimonialSlider"
                    style={{ transform: `translateX(-${currentSlide * 100}%)` }}
                >
                    {testimonials.map((t, idx) => (
                        <div className="testimonial" key={idx}>
                            <p className="testimonial-text">&quot;{t.text}&quot;</p>
                            <div className="flex flex-col items-center mt-6">
                                <div className="relative w-16 h-16 rounded-full overflow-hidden mb-3 border-2 border-[var(--gold)]">
                                    <Image src={t.image} alt={t.author} fill className="object-cover" />
                                </div>
                                <p className="testimonial-author">{t.author}</p>
                                <p className="testimonial-role">{t.role}</p>
                            </div>
                        </div>
                    ))}
                </div>
                <div
                    className="testimonial-dots mt-8"
                    role="tablist"
                    aria-label="Testimonial navigation"
                >
                    {testimonials.map((_, idx) => (
                        <button
                            key={idx}
                            className={`dot ${currentSlide === idx ? "active" : ""}`}
                            onClick={() => goToSlide(idx)}
                            role="tab"
                            aria-selected={currentSlide === idx}
                            aria-label={`Testimonial ${idx + 1}`}
                        ></button>
                    ))}
                </div>
                <p
                    className="swipe-hint"
                    style={{
                        marginTop: "1rem",
                        fontSize: "0.85rem",
                        color: "var(--text-muted)",
                    }}
                >
                    ← Swipe to see more →
                </p>
            </div>
        </section>
    );
}
