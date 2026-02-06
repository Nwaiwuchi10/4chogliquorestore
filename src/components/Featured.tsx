'use client';

export default function Featured() {
    const collections = [
        {
            title: "Bordeaux Classics",
            description: "Legendary châteaux from the heart of French wine country",
            icon: "🍷",
            accent: "wine-primary"
        },
        {
            title: "Italian Masters",
            description: "From Tuscany to Piedmont, Italy's finest expressions",
            icon: "🇮🇹",
            accent: "wine-secondary"
        },
        {
            title: "New World Pioneers",
            description: "Innovative vintages from California, Australia & beyond",
            icon: "🌍",
            accent: "wine-accent"
        },
        {
            title: "Rare Vintages",
            description: "Exclusive access to limited production collectors' items",
            icon: "⭐",
            accent: "wine-primary"
        }
    ];

    return (
        <section id="collection" className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-bg-darker to-bg-dark relative">
            {/* Decorative elements */}
            <div className="absolute top-1/4 left-0 w-72 h-72 bg-wine-accent/10 rounded-full blur-3xl"></div>

            <div className="max-w-7xl mx-auto relative z-10">
                {/* Section header */}
                <div className="text-center mb-16">
                    <div className="inline-block mb-4">
                        <span className="text-wine-accent font-medium text-sm tracking-widest uppercase">Our Collections</span>
                        <div className="h-0.5 w-20 bg-wine-accent mt-2 mx-auto"></div>
                    </div>

                    <h2 className="text-4xl lg:text-5xl font-serif font-bold text-text-light mb-6">
                        Curated for
                        <span className="text-wine-accent"> Connoisseurs</span>
                    </h2>

                    <p className="text-text-light/70 text-lg max-w-2xl mx-auto">
                        Explore our meticulously selected collections, each representing the pinnacle
                        of winemaking tradition and innovation.
                    </p>
                </div>

                {/* Collection cards */}
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {collections.map((collection, index) => (
                        <div
                            key={index}
                            className="group relative bg-bg-darker border border-wine-primary/20 rounded-lg p-6 hover:border-wine-accent/50 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-wine-accent/10"
                        >
                            {/* Decorative gradient overlay */}
                            <div className="absolute inset-0 bg-gradient-to-br from-wine-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg"></div>

                            <div className="relative z-10">
                                {/* Icon */}
                                <div className="text-5xl mb-4">{collection.icon}</div>

                                {/* Title */}
                                <h3 className="text-xl font-serif font-bold text-text-light mb-3 group-hover:text-wine-accent transition-colors">
                                    {collection.title}
                                </h3>

                                {/* Description */}
                                <p className="text-text-light/70 text-sm leading-relaxed mb-4">
                                    {collection.description}
                                </p>

                                {/* Link */}
                                <a
                                    href="#contact"
                                    className="inline-flex items-center text-wine-accent text-sm font-medium group-hover:translate-x-1 transition-transform duration-300"
                                >
                                    Explore
                                    <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                    </svg>
                                </a>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Bottom CTA */}
                <div className="text-center mt-16">
                    <a
                        href="#contact"
                        className="inline-block px-8 py-4 bg-wine-primary hover:bg-wine-secondary transition-all duration-300 rounded-md text-text-light font-medium shadow-lg hover:shadow-wine-accent/30 hover:scale-105 transform"
                    >
                        Request Our Full Catalog
                    </a>
                </div>
            </div>
        </section>
    );
}
