"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Menu() {
    const [startersExpanded, setStartersExpanded] = useState(false);
    const [mainsExpanded, setMainsExpanded] = useState(false);
    const [startersLoading, setStartersLoading] = useState(false);
    const [mainsLoading, setMainsLoading] = useState(false);

    const toggleStarters = () => {
        setStartersLoading(true);
        setTimeout(() => {
            setStartersLoading(false);
            setStartersExpanded(!startersExpanded);
        }, 300);
    };

    const toggleMains = () => {
        setMainsLoading(true);
        setTimeout(() => {
            setMainsLoading(false);
            setMainsExpanded(!mainsExpanded);
        }, 300);
    };

    return (
        <section id="menu" aria-labelledby="menu-title">
            <div className="section-header fade-in visible">
                <h2 className="section-title" id="menu-title">
                    What We Make
                </h2>
                <p className="section-subtitle">
                    Our menu changes with the seasons and availability of fresh
                    ingredients. Contact us for today&apos;s offerings.
                </p>
            </div>
            <div className="menu-intro fade-in visible">
                <p>
                    We specialize in traditional vegetarian dishes, innovative snacks,
                    and corporate catering. All meals can be customized for dietary
                    preferences.
                </p>
            </div>

            <div className="mobile-menu-teaser fade-in visible">
                <div className="binas-picks-card">
                    <h3 className="binas-picks-title">~ Today&apos;s Specials ~</h3>
                    <p className="binas-picks-subtitle">
                        Handpicked by Bina · Fresh from the kitchen
                    </p>
                    <div className="binas-picks-divider"></div>
                    <ul className="teaser-list space-y-4">
                        <li className="flex justify-between items-center border-b border-[var(--gold)]/20 pb-2">
                            <div className="text-left font-serif text-[var(--forest)]">Coconut Curry Lentil Soup</div>
                            <div className="text-[var(--gold-dark)] font-medium">₹250</div>
                        </li>
                        <li className="flex justify-between items-center border-b border-[var(--gold)]/20 pb-2">
                            <div className="text-left font-serif text-[var(--forest)]">Quinoa Veg Khichdi with Kadhi</div>
                            <div className="text-[var(--gold-dark)] font-medium">₹350</div>
                        </li>
                        <li className="flex justify-between items-center pb-2">
                            <div className="text-left font-serif text-[var(--forest)]">Ukadiche Modak (per pc)</div>
                            <div className="text-[var(--gold-dark)] font-medium">₹60</div>
                        </li>
                    </ul>
                </div>
                <Link href="#" className="view-full-menu-btn">
                    Explore Full Menu →
                </Link>
            </div>

            <div className="menu-grid">
                <div className="menu-category fade-in visible">
                    <h3 className="category-title">Soups (₹200 - ₹280)</h3>
                    <ul className="menu-items">
                        <li>Sesame Carrot Soup with Red Lentils</li>
                        <li>Roasted Cauliflower Potato Lemon Soup</li>
                        <li>Lemony Chickpea Spinach Soup</li>
                        <li>Tomato Carrot Basil Soup</li>
                        <li className="popular" data-preview="Creamy, warming & aromatic">
                            Coconut Curry Lentil Soup
                        </li>
                        <li>Roasted Red Pepper Tomato Soup</li>
                        <li>Green Goddess Immunity Booster Soup</li>
                        <li>Pumpkin Carrot Ginger Soup</li>
                        <li>Broccoli Peas Mint Soup</li>
                        <li>Creamy Vegetable Celery Soup</li>
                    </ul>
                </div>
                <div className="menu-category fade-in visible">
                    <h3 className="category-title">Salads (₹250 - ₹350)</h3>
                    <ul className="menu-items">
                        <li>Watermelon Paneer Rocket Salad with Dip</li>
                        <li>Mango Quinoa High Protein Salad with Dip</li>
                        <li className="popular" data-preview="Protein-packed & fresh">
                            Mediterranean High Protein Salad with Hummus
                        </li>
                        <li>Mexican Street Style Salad with Chipotle Dressing</li>
                        <li>Paneer and Hara Chana Salad</li>
                        <li>Red Lentil High Protein Salad with Mint Dip</li>
                        <li>Maharashtrian Koshimbir with a Twist</li>
                        <li>North Indian Chaat Style Salad with Green Chutney</li>
                        <li>Beetroot Dill Salad with Hung Curd Dip</li>
                    </ul>
                </div>
                <div className="menu-category fade-in visible">
                    <h3 className="category-title">Starters (₹200 - ₹380)</h3>
                    <p
                        style={{
                            fontSize: "0.8rem",
                            color: "var(--gold)",
                            marginBottom: "1rem",
                            fontStyle: "italic",
                        }}
                    >
                        Gluten-free and vegan options available on request.
                    </p>
                    <ul
                        className={`menu-items expandable ${startersExpanded ? "expanded" : ""
                            }`}
                    >
                        <li>Baked Dahi Vada</li>
                        <li>Beetroot Sabudana Khichdi</li>
                        <li className="popular" data-preview="A fun twist on a Mumbai classic">
                            Pav Bhaji Fondue with Herbed Garlic Bread
                        </li>
                        <li>Whole Wheat Dabeli Wrap</li>
                        <li>Baked Pani Puri with Quinoa Stuffing</li>
                        <li>Exotic Vegetable Dumplings with Dip</li>
                        <li>High Protein Chana Veg Kebabs with Mint Dip</li>
                        <li>Noodles Veg Fritters with Dip</li>
                        <li>Beetroot Oats Dhokla with Chutney</li>
                        <li>Spinach Corn Basil Dhokla with Chutney</li>
                        <li className={!startersExpanded ? "hidden" : ""}>
                            Rajasthani Pyaaz Mutter Kachori with Chutney
                        </li>
                        <li className={!startersExpanded ? "hidden" : ""}>
                            Smoked Kanchi Vadas
                        </li>
                        <li className={!startersExpanded ? "hidden" : ""}>
                            Punjabi Cocktail Samosa with Chutney
                        </li>
                        <li className={!startersExpanded ? "hidden" : ""}>
                            Basil Pesto Khandvi
                        </li>
                        <li className={!startersExpanded ? "hidden" : ""}>
                            Vada Pav Bombs with Garlic Chutney
                        </li>
                        <li className={!startersExpanded ? "hidden" : ""}>
                            Moringa Corn Dhoklas with Chutney
                        </li>
                    </ul>
                    <button
                        className={`view-more-btn ${startersLoading ? "loading" : ""}`}
                        onClick={toggleStarters}
                        aria-expanded={startersExpanded}
                    >
                        {startersExpanded ? "Show Less" : "View More (20+)"}
                    </button>
                </div>
                <div className="menu-category fade-in visible">
                    <h3 className="category-title">Mains (₹300 - ₹450)</h3>
                    <p
                        style={{
                            fontSize: "0.8rem",
                            color: "var(--gold)",
                            marginBottom: "1rem",
                            fontStyle: "italic",
                        }}
                    >
                        Gluten-free and vegan options available on request.
                    </p>
                    <ul
                        className={`menu-items expandable ${mainsExpanded ? "expanded" : ""
                            }`}
                    >
                        <li>Beans Corn Palak Whole Wheat Quesadilla with Salsa</li>
                        <li>Baked Bihari Litti Chokha with Chutney</li>
                        <li className="popular" data-preview="Comfort food, guilt-free">
                            Quinoa Veg Khichdi with Kadhi
                        </li>
                        <li>Low Cal Dal Makhani with Zaatar Paratha</li>
                        <li>Healthy Veg Fried Rice with Manchurian</li>
                        <li>Revamped Multigrain Lebanese Falafel</li>
                        <li>Nachni Methi Dal Dhokli with Kachoris</li>
                        <li>Oil-free Missal with Wheat Herbed Pav</li>
                        <li>Multigrain Thalipeeth with Mint Yogurt Dip</li>
                        <li>Spinach Cottage Cheese Ravioli</li>
                        <li className={!mainsExpanded ? "hidden" : ""}>
                            Veg Jalfrezi with Pudina Laccha Paratha
                        </li>
                        <li className={!mainsExpanded ? "hidden" : ""}>
                            Palak Chole with Wholewheat Pyaaz Kulchas
                        </li>
                        <li className={!mainsExpanded ? "hidden" : ""}>
                            Low Cal Palak Paneer with Pudina Laccha Paratha
                        </li>
                        <li className={!mainsExpanded ? "hidden" : ""}>
                            Swati Special Rajasthani Palak Gatte ki Sabzi with Achari Parathas
                        </li>
                        <li className={!mainsExpanded ? "hidden" : ""}>
                            Vegan Red Thai Curry with Thai Basil Idli
                        </li>
                        <li className={!mainsExpanded ? "hidden" : ""}>
                            Mexican Layered Bowl with Nacho Chips
                        </li>
                    </ul>
                    <button
                        className={`view-more-btn ${mainsLoading ? "loading" : ""}`}
                        onClick={toggleMains}
                        aria-expanded={mainsExpanded}
                    >
                        {mainsExpanded ? "Show Less" : "View More (22+)"}
                    </button>
                </div>
                <div className="menu-category fade-in visible">
                    <h3 className="category-title">Sweets/Desserts (₹150 - ₹300)</h3>
                    <p
                        style={{
                            fontSize: "0.8rem",
                            color: "var(--gold)",
                            marginBottom: "1rem",
                            fontStyle: "italic",
                        }}
                    >
                        Available for all occasions & festivities. Sugar-free options
                        on request.
                    </p>
                    <ul className="menu-items">
                        <li>Puran Poli in Organic Jaggery</li>
                        <li>Loose Mohanthal with Kaju Katli Jars</li>
                        <li>Thandai Angoori Rasmalai</li>
                        <li>High Protein Sattu Almond Ladoos</li>
                        <li>Gajar Halwa in Organic Jaggery</li>
                        <li>Cranberry, Peanut Butter & Oats Ladoos</li>
                        <li>Gulab Jamun, Rabdi & Boondi Jars</li>
                        <li>Sattu Moongdal Almond Ladoos</li>
                        <li className="popular" data-preview="Traditional & healthier">
                            Ukadiche Modak in Organic Jaggery
                        </li>
                        <li>Churma Mawa Ladoos in Pure Ghee</li>
                        <li>Mango Shrikhand</li>
                        <li>Gulkand Rose Angoori Rasmalai</li>
                    </ul>
                </div>
            </div>
        </section>
    );
}
