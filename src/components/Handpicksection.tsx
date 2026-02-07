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
                        Hand-Picked
                    </h2>

                    <p className="text-2xl sm:text-3xl lg:text-4xl font-light mt-2">
                        Collection
                    </p>

                    <p className="mt-4 text-wine-accent tracking-wide text-lg">
                        Save More, Pour More
                    </p>

                    <p className="mt-6 text-sm sm:text-base text-gray-200 leading-relaxed">
                        This is Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Ad rerum repudiandae ipsa? Tempore modi quisquam velit nostrum
                        nulla veritatis tempora quaerat eligendi porro, quos aperiam.
                        Ea molestias placeat consequuntur fuga.
                    </p>

                    {/* CTA */}
                    <button
                        className="mt-8 px-8 py-3 border border-white text-sm tracking-widest
                       hover:bg-white hover:text-black transition-all duration-300"
                    >
                        SHOP NOW
                    </button>
                </div>
            </div>
        </section>
    );
};

export default HandPickedSection;
