import Image from "next/image";
import vineyardImg from "../../public/assets/hero/vineyard.png";
export default function About() {
    return (
        <section id="story" className="py-24 px-4 sm:px-6 lg:px-8 bg-bg-darker relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-wine-primary/10 to-transparent"></div>

            <div className="max-w-7xl mx-auto relative z-10">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    {/* Text content */}
                    <div className="space-y-6">
                        <div className="inline-block">
                            <span className="text-wine-accent font-medium text-sm tracking-widest uppercase">Our Heritage</span>
                            <div className="h-0.5 w-20 bg-wine-accent mt-2"></div>
                        </div>

                        <h2 className="text-4xl lg:text-5xl font-serif font-bold text-text-light leading-tight">
                            Three Generations of
                            <span className="text-wine-accent"> Excellence</span>
                        </h2>

                        <p className="text-text-light/80 text-lg leading-relaxed">
                            Since 1968, we have been at the forefront of fine wine distribution,
                            building relationships with the world&apos;s most esteemed vineyards and
                            bringing their exceptional creations to discerning establishments across the globe.
                        </p>

                        <p className="text-text-light/80 leading-relaxed">
                            Our expertise spans from rare vintage Bordeaux to emerging boutique labels,
                            ensuring every bottle in our collection meets the highest standards of quality
                            and craftsmanship. We don&apos;t just distribute wine—we curate experiences.
                        </p>

                        {/* Stats */}
                        <div className="grid grid-cols-3 gap-6 pt-8">
                            <div className="text-center">
                                <div className="text-3xl font-serif font-bold text-wine-accent">500+</div>
                                <div className="text-sm text-text-light/60 mt-1">Wineries</div>
                            </div>
                            <div className="text-center border-x border-wine-primary/30">
                                <div className="text-3xl font-serif font-bold text-wine-accent">50+</div>
                                <div className="text-sm text-text-light/60 mt-1">Countries</div>
                            </div>
                            <div className="text-center">
                                <div className="text-3xl font-serif font-bold text-wine-accent">55</div>
                                <div className="text-sm text-text-light/60 mt-1">Years</div>
                            </div>
                        </div>
                    </div>

                    {/* Image placeholder */}
                    <div className="relative h-[500px] rounded-lg overflow-hidden group">
                        <div className="absolute inset-0 bg-gradient-to-br from-wine-primary via-wine-secondary to-bg-darker opacity-90 group-hover:opacity-80 transition-opacity duration-500"></div>
                        <div className="absolute inset-0">
                            <Image
                                src={vineyardImg}
                                alt="Vineyard and wine barrels"
                                fill
                                className="object-cover group-hover:scale-105 transition-transform duration-700"
                                priority
                            />
                        </div>

                        {/* Decorative border */}
                        <div className="absolute inset-0  group-hover:border-wine-accent/40 transition-all duration-500"></div>
                    </div>
                </div>
            </div>
        </section>
    );
}
