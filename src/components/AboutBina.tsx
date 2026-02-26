import Image from "next/image";

export default function AboutBina() {
    return (
        <section id="about-bina" className="bg-white py-16 px-6">
            <div className="max-w-[1200px] mx-auto">
                <div className="section-header fade-in visible">
                    <h2 className="section-title">Meet Bina Rajan</h2>
                    <p className="section-subtitle">
                        The heart and hands behind Cooked with Care
                    </p>
                </div>

                <div className="flex flex-col md:flex-row items-center gap-12 mt-12 fade-in visible">
                    <div className="w-full md:w-1/2 flex justify-center">
                        {/* 
              Using a placeholder div with a nice border until the real photo is added.
              Once the real photo (e.g., bina-rajan.jpg) is placed in public/, update the src.
            */}
                        <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full border-4 border-[var(--gold)] overflow-hidden shadow-2xl">
                            <div className="absolute inset-0 bg-[#f7f3ec] flex items-center justify-center text-[var(--gold-dark)] text-sm uppercase tracking-widest text-center px-4">
                                <span>[Bina&apos;s Photo Placeholder]</span>
                            </div>
                            {/* <Image
                src="/bina-rajan.jpg"
                alt="Bina Rajan"
                fill
                className="object-cover"
              /> */}
                        </div>
                    </div>

                    <div className="w-full md:w-1/2">
                        <h3 className="text-2xl font-serif text-[var(--forest)] mb-4">
                            A Lifelong Passion for Wholesome Food
                        </h3>
                        <p className="text-[var(--text-body)] mb-4 leading-relaxed font-light">
                            For Bina, cooking has never been just a chore—it&apos;s a form of
                            expression, love, and care. With over three decades of experience
                            perfecting traditional family recipes and exploring healthy, modern
                            vegetarian cuisine, she started <em>Cooked with Care</em> to share
                            that love with Mumbai.
                        </p>
                        <p className="text-[var(--text-body)] mb-6 leading-relaxed font-light">
                            Every meal that leaves her kitchen is prepared with the same
                            attention to detail she gives her own family. Her philosophy is
                            simple: use the freshest seasonal vegetables, employ minimal oil,
                            and never compromise on flavor. It&apos;s home food, elevated.
                        </p>

                        <div className="italic text-[var(--gold-dark)] font-serif text-lg border-l-2 border-[var(--gold)] pl-4 py-2">
                            &quot;Food should nourish the body and comfort the soul. That&apos;s exactly
                            what we strive to deliver every single day.&quot;
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
