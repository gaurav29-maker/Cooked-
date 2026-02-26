import Image from "next/image";

export default function Gallery() {
    const images = [
        {
            src: "https://images.unsplash.com/photo-1585937421612-70a008356fbe",
            alt: "Traditional Indian Thali",
            span: "md:col-span-2 md:row-span-2",
        },
        {
            src: "https://images.unsplash.com/photo-1628296582522-8344eebff8be",
            alt: "Sweet Indian Desserts",
            span: "md:col-span-1 md:row-span-1",
        },
        {
            src: "https://images.unsplash.com/photo-1547592180-85f173990554",
            alt: "Healthy Vegetarian Bowl",
            span: "md:col-span-1 md:row-span-1",
        },
        {
            src: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd",
            alt: "Fresh Salad",
            span: "md:col-span-2 md:row-span-1",
        },
    ];

    return (
        <section id="gallery" className="py-16 px-6 bg-[var(--cream)]">
            <div className="max-w-[1200px] mx-auto">
                <div className="section-header fade-in visible">
                    <h2 className="section-title">Fresh from the Kitchen</h2>
                    <p className="section-subtitle">
                        A glimpse into the meals we prepare daily
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-4 gap-4 auto-rows-[250px] mt-10">
                    {images.map((img, index) => (
                        <div
                            key={index}
                            className={`relative rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 group ${img.span}`}
                        >
                            <Image
                                src={img.src}
                                alt={img.alt}
                                fill
                                className="object-cover group-hover:scale-105 transition-transform duration-500"
                            />
                            <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500" />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
