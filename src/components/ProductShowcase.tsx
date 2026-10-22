"use client";

import Image from "next/image";
import Link from "next/link";
import singletonWhisky from "../assets/newWines/IMG-20261012-WA0054.jpg";
import amorneroRosato from "../assets/newWines/IMG-20261012-WA0055.jpg";
import maslaurisLuberon from "../assets/newWines/IMG-20261012-WA0056.jpg";
import stGermain from "../assets/newWines/IMG-20261012-WA0060(1).jpg";
import devesaRose from "../assets/newWines/IMG-20261012-WA0062.jpg";
import whiteWine from "../assets/newWines/IMG-20261012-WA0063 (1).jpg";
import martiniRosso from "../assets/newWines/IMG-20261012-WA0064(1).jpg";
import remyMartin from "../assets/newWines/IMG-20261012-WA0066.jpg";
import cognacVS from "../assets/newWines/IMG-20261012-WA0067.jpg";
import tequila1800 from "../assets/newWines/IMG-20261012-WA0071.jpg";
import xoCognac from "../assets/newWines/IMG-20261012-WA0075.jpg";
import blendedScotch from "../assets/newWines/IMG-20261012-WA0076.jpg";

const products = [
    { id: 1, name: "The Singleton 12 Year Old", category: "Single Malt Scotch Whisky", image: singletonWhisky },
    { id: 2, name: "Amornero Puglia Rosato", category: "Italian Rosé Wine", image: amorneroRosato },
    { id: 3, name: "Les Terres de Maslauris", category: "Luberon 2025", image: maslaurisLuberon },
    { id: 4, name: "St-Germain", category: "Elderflower Liqueur", image: stGermain },
    { id: 5, name: "Devesa Rosé", category: "Rosé Wine", image: devesaRose },
    { id: 6, name: "Cellar Selection", category: "White Wine", image: whiteWine },
    { id: 7, name: "Martini Rosso", category: "Italian Vermouth", image: martiniRosso },
    { id: 8, name: "Rémy Martin 1738", category: "Cognac", image: remyMartin },
    { id: 9, name: "Premium VS", category: "Fine Cognac", image: cognacVS },
    { id: 10, name: "1800 Tequila", category: "Premium Tequila", image: tequila1800 },
    { id: 11, name: "XO Cognac", category: "Aged Cognac", image: xoCognac },
    { id: 12, name: "Blended Scotch Whisky", category: "Premium Whisky", image: blendedScotch },
];

export default function ProductShowcase() {
    return (
        <section className="w-full bg-transparent px-4 py-0 sm:px-8 lg:px-0">
            <h3 className="mb-10 text-center text-xl tracking-[0.2em] text-[#f5a623]">
                FEATURED PRODUCTS
            </h3>

            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
                {products.map((product) => (
                    <article
                        key={product.id}
                        className="group overflow-hidden rounded-xl border border-white/10 bg-[#101311] shadow-lg shadow-black/20 transition duration-300 hover:-translate-y-1 hover:border-[#f5a623]/50 hover:shadow-xl hover:shadow-black/40"
                    >
                        <div className="relative aspect-[4/5] overflow-hidden bg-gradient-to-b from-[#1a201d] to-[#090b0a]">
                            <span className="absolute left-4 top-4 z-10 rounded-full bg-[#f5a623] px-3 py-1 text-xs font-semibold uppercase tracking-wider text-black">
                                New
                            </span>
                            <Image
                                src={product.image}
                                alt={product.name}
                                fill
                                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                                className="object-contain p-4 brightness-110 contrast-105 saturate-110 transition duration-500 group-hover:scale-105"
                            />
                        </div>
                        <div className="px-5 py-4">
                            <h4 className="text-lg font-medium text-text-light">{product.name}</h4>
                            <p className="mt-1 text-sm text-text-light/55">{product.category}</p>
                        </div>
                    </article>
                ))}
            </div>

            <div className="mt-12 text-center">
                <Link
                    href="/gallery"
                    className="inline-flex items-center justify-center rounded-full border border-[#f5a623]/70 px-8 py-3 font-medium text-[#f5a623] transition-colors hover:bg-[#f5a623] hover:text-black focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#f5a623]"
                >
                    View More
                </Link>
            </div>
        </section>
    );
}
