'use client';

import Image from 'next/image';
import { useState } from 'react';
import Footer from './Footer';
import Navbar from './Navbar';
import gallery1 from "../../public/assets/hero/gallery1.jpeg"
import gallery2 from "../../public/assets/hero/gallery2.jpeg"
import gallery3 from "../../public/assets/hero/gallery3.jpeg"
import gallery4 from "../../public/assets/hero/gallery4.jpeg"
import gallery5 from "../../public/assets/hero/gallery5.jpeg"
import gallery6 from "../../public/assets/hero/gallery6.jpeg"
import gallery7 from "../../public/assets/hero/gallery7.jpeg"
import gallery8 from "../../public/assets/hero/gallery8.jpeg"
import gallery9 from "../../public/assets/hero/gallery9.jpeg"
import gallery10 from "../../public/assets/hero/gallery10.jpeg"
import gallery11 from "../../public/assets/hero/gallery11.jpeg"
import gallery12 from "../../public/assets/hero/gallery12.jpeg"
import gallery13 from "../../public/assets/hero/gallery13.jpeg"
import gallery14 from "../../public/assets/hero/gallery14.jpeg"
import gallery15 from "../../public/assets/hero/gallery15.jpeg"
import gallery16 from "../../public/assets/hero/gallery16.jpeg"
import gallery17 from "../../public/assets/hero/gallery17.jpeg"
import gallery18 from "../../public/assets/hero/gallery18.jpeg"
import gallery19 from "../../public/assets/hero/gallery19.jpeg"
import gallery20 from "../../public/assets/hero/gallery20.jpeg"
import gallery21 from "../../public/assets/hero/gallery21.jpeg"
import gallery22 from "../../public/assets/hero/gallery22.jpeg"


const galleryImages = [
    { id: 1, src: gallery1, alt: 'Fine Red Wine', category: 'Red Wine' },
    { id: 2, src: gallery2, alt: 'Vineyard Sunset', category: 'Vineyard' },
    { id: 3, src: gallery3, alt: 'White Wine Collection', category: 'White Wine' },
    { id: 4, src: gallery4, alt: 'Champagne Toast', category: 'Sparkling' },
    { id: 5, src: gallery5, alt: 'Wine Barrels', category: 'Storage' },
    { id: 6, src: gallery6, alt: 'Wine Tasting Class', category: 'Events' },
    { id: 7, src: gallery7, alt: 'Rose Wine Glass', category: 'Rose' },
    { id: 8, src: gallery8, alt: 'Grapes in Vineyard', category: 'Harvest' },
    { id: 9, src: gallery9, alt: 'Wine Cellar Decor', category: 'Storage' },
    { id: 10, src: gallery10, alt: 'Cocktail Mixing', category: 'Liquors' },
    { id: 11, src: gallery11, alt: 'Boutique Liquor Bottle', category: 'Liquors' },
    { id: 12, src: gallery12, alt: 'Aged Whiskey', category: 'Liquors' },
    { id: 13, src: gallery13, alt: 'Wine and Cheese', category: 'Red Wine' },
    { id: 14, src: gallery14, alt: 'Sunny Vineyard', category: 'Vineyard' },
    { id: 15, src: gallery15, alt: 'Pouring Red Wine', category: 'Red Wine' },
    { id: 16, src: gallery16, alt: 'Luxury Wine Store', category: 'Events' },
    { id: 17, src: gallery17, alt: 'Vintage Casks', category: 'Storage' },
    { id: 18, src: gallery18, alt: 'Classic Martini', category: 'Liquors' },
    { id: 19, src: gallery19, alt: 'Social Gathering', category: 'Events' },
    { id: 20, src: gallery20, alt: 'Crystal Wine Glasses', category: 'Red Wine' },
    { id: 21, src: gallery21, alt: 'Wine Selection', category: 'Red Wine' },
    { id: 22, src: gallery22, alt: 'Wine Celebration', category: 'Events' },
    { id: 23, src: gallery20, alt: 'Decanting Wine', category: 'Red Wine' },
    { id: 24, src: gallery6, alt: 'Liquor Collection', category: 'Liquors' },
    { id: 25, src: gallery10, alt: 'Night Vineyard', category: 'Vineyard' },
    { id: 26, src: gallery11, alt: 'Sparkling Wine', category: 'Sparkling' },
    { id: 27, src: gallery14, alt: 'Evening Party', category: 'Events' },
];

export default function Gallery() {
    const [activeFilter, setActiveFilter] = useState('All');
    const categories = ['All', 'Red Wine', 'White Wine', 'Sparkling', 'Liquors', 'Vineyard', 'Events'];

    const filteredImages = activeFilter === 'All'
        ? galleryImages
        : galleryImages.filter(img => img.category === activeFilter);

    return (
        <>
            <Navbar />
            <section className=" bg-bg-dark py-24 px-4 sm:px-6 lg:px-8 min-h-screen">
                <div className="max-w-7xl mx-auto">
                    {/* Header */}
                    <div className="text-center mb-16 mt-10">
                        <h2 className="text-wine-accent font-serif text-sm uppercase tracking-[0.3em] mb-4">Our Visual Journey</h2>
                        <h1 className="text-text-light text-4xl md:text-5xl lg:text-6xl font-serif mb-6">Explore Our Gallery</h1>
                        <div className="w-24 h-1 bg-wine-primary mx-auto"></div>
                    </div>

                    {/* Filter Tabs */}
                    <div className="flex flex-wrap justify-center gap-4 mb-12">
                        {categories.map((category) => (
                            <button
                                key={category}
                                onClick={() => setActiveFilter(category)}
                                className={`px-6 py-2 rounded-full transition-all duration-300 border ${activeFilter === category
                                    ? 'bg-wine-primary border-wine-primary text-text-light'
                                    : 'border-wine-primary/30 text-text-light/60 hover:border-wine-primary hover:text-text-light'
                                    }`}
                            >
                                {category}
                            </button>
                        ))}
                    </div>

                    {/* Gallery Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                        {filteredImages.map((image) => (
                            <div
                                key={image.id}
                                className="group relative overflow-hidden rounded-lg aspect-[4/5] bg-bg-darker border border-wine-primary/10 shadow-xl"
                            >
                                <Image
                                    src={image.src}
                                    alt={image.alt}
                                    fill
                                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                                    sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                                />

                                {/* Overlay */}
                                <div className="absolute inset-0 bg-bg-darker/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-6">
                                    <div className="translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                                        {/* <p className="text-wine-accent text-xs uppercase tracking-widest mb-2">{image.category}</p>
                                        <h3 className="text-text-light text-lg font-serif">{image.alt}</h3> */}
                                    </div>
                                    {/* Gold Border Effect */}
                                    <div className="absolute inset-4 border border-wine-accent/30 pointer-events-none"></div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* More coming soon notice */}
                    <div className="mt-20 text-center">
                        <p className="text-text-light/50 font-serif italic">More memories are being bottled... Stay tuned.</p>
                    </div>
                </div>
            </section>
            <Footer />
        </>
    );
}
