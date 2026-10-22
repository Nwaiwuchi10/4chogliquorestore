import Image from "next/image";
import img1 from "../../public/assets/hero/shop2.jpg";
import img2 from "../../public/assets/hero/p2.jpg";
import img3 from "../../public/assets/hero/p3.jpg";

const images = [
    { id: 1, src: img1, alt: "Wine glass and bottle" },
    { id: 2, src: img2, alt: "Premium wine bottles" },
    { id: 3, src: img3, alt: "Bar shelf wines" },
];

export default function FeaturedGallery() {
    return (
        <section className="w-full bg-black py-12">
            <div className="max-w-[99%] mx-auto px-2">
                {/* Flex container for desktop stretch */}
                <div className="flex flex-col md:flex-row gap-4">
                    {images.map((item) => (
                        <div
                            key={item.id}
                            className="group relative flex-1 overflow-hidden rounded-xl border border-white/10 shadow-lg shadow-black/30"
                            style={{ minWidth: 0 }} // prevents flex items from overflowing
                        >
                            {/* Hover border slightly inside */}
                            <span className="pointer-events-none absolute inset-2 z-10 border border-transparent transition-all duration-500 ease-in-out group-hover:border-white/70" />

                            {/* Image */}
                            <div className="relative h-[240px] w-full md:h-[300px] lg:h-[340px]">
                                <Image
                                    src={item.src}
                                    alt={item.alt}
                                    fill
                                    priority={item.id === 1}
                                    sizes="(max-width: 768px) 100vw, 33vw"
                                    className={`object-cover transition duration-700 group-hover:scale-105 ${
                                        item.id === 1
                                            ? "object-center brightness-110 contrast-110 saturate-125"
                                            : "brightness-95 group-hover:brightness-110"
                                    }`}
                                />
                                <span className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-white/5 opacity-70 transition-opacity duration-500 group-hover:opacity-30" />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
