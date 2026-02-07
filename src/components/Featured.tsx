'use client';

import ProductShowcase from "./ProductShowcase";

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
        <section id="collection" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-bg-darker to-bg-dark relative">
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
                <div>
                    <ProductShowcase />
                </div>

                {/* Bottom CTA */}

            </div>
        </section>
    );
}
