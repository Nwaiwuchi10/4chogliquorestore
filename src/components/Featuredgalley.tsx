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
                            className="group relative flex-1 overflow-hidden"
                            style={{ minWidth: 0 }} // prevents flex items from overflowing
                        >
                            {/* Hover border slightly inside */}
                            <span className="pointer-events-none absolute inset-1 border border-transparent group-hover:border-white transition-all duration-500 ease-in-out z-10" />

                            {/* Image */}
                            <div className="relative h-[200px] md:h-[250px] lg:h-[220px] w-full">
                                <Image
                                    src={item.src}
                                    alt={item.alt}
                                    fill
                                    priority
                                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                                />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
