import Image from "next/image";
import bg from "../../public/assets/hero/bg.png";

const HandPickedSection = () => {
    return (
        <section className="relative w-full min-h-[70vh] lg:min-h-[80vh] flex items-center">
            {/* Background Image */}
            <Image
                src={bg} // 👈 replace with your image path
                alt="Hand Picked Wine Collection"
                fill
                priority
                className="object-cover"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-black/20" />

            {/* Content */}
            <div className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-12">
                <div className="max-w-xl ml-auto text-center lg:text-left text-white">
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-semibold">
                        OUR MISSION
                    </h2>


                    <p className="mt-4 text-wine-accent tracking-wide text-lg">
                        Save More, Pour More
                    </p>

                    <p className="mt-6 text-sm sm:text-base text-gray-200 leading-relaxed">
                        • To provide access to original, premium
                        imported wines and spirits while delivering a
                        refined customer experience built on trust,
                        quality, and professionalism.
                    </p>

                    <p className="mt-6 text-sm sm:text-base text-gray-200 leading-relaxed">
                        • To become a leading luxury liquor brand in
                        Imo State and Nigeria at large, recognized for
                        authenticity, sophistication, and exceptional
                        service.
                    </p>

                    {/* CTA */}
                    <button
                        className="mt-8 px-8 py-3 border border-white text-sm tracking-widest
                       hover:bg-white hover:text-black transition-all duration-300"
                    >
                        <a href="#contact" > SHOP NOW</a>
                    </button>
                </div>
            </div>
        </section>
    );
};

export default HandPickedSection;
