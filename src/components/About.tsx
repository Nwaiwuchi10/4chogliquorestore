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
                        <div className="absolute inset-0 flex items-center justify-center">
                            <div className="text-center space-y-4">
                                <svg className="w-24 h-24 mx-auto text-wine-accent/50" fill="currentColor" viewBox="0 0 20 20">
                                    <path d="M10 2a1 1 0 011 1v1.323l3.954 1.582 1.599-.8a1 1 0 01.894 1.79l-1.233.616 1.738 5.42a1 1 0 01-.285 1.05A3.989 3.989 0 0115 15a3.989 3.989 0 01-2.667-1.019 1 1 0 01-.285-1.05l1.738-5.42-1.233-.617a1 1 0 01.894-1.788l1.599.799L11 4.323V3a1 1 0 011-1h-2z" />
                                </svg>
                                <p className="text-text-light/40 text-sm italic">Vineyard Image Placeholder</p>
                            </div>
                        </div>
                        {/* Decorative border */}
                        <div className="absolute inset-0 border-2 border-wine-accent/20 group-hover:border-wine-accent/40 transition-all duration-500"></div>
                    </div>
                </div>
            </div>
        </section>
    );
}
