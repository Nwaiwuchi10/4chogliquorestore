'use client';

import Image from 'next/image';
import { useState } from 'react';
import Footer from './Footer';
import Navbar from './Navbar';
import gallery3 from "../../public/assets/hero/gallery3.jpeg"
import gallery10 from "../../public/assets/hero/gallery10.jpeg"
import gallery11 from "../../public/assets/hero/gallery11.jpeg"
import gallery12 from "../../public/assets/hero/gallery12.jpeg"
import gallery13 from "../../public/assets/hero/gallery13.jpeg"
import gallery14 from "../../public/assets/hero/gallery14.jpeg"
import gallery20 from "../../public/assets/hero/gallery20.jpeg"
import singletonWhisky from '../assets/newWines/IMG-20261012-WA0054.jpg'
import amorneroRosato from '../assets/newWines/IMG-20261012-WA0055.jpg'
import maslaurisLuberon from '../assets/newWines/IMG-20261012-WA0056.jpg'
import stGermain from '../assets/newWines/IMG-20261012-WA0060(1).jpg'
import devesaRose from '../assets/newWines/IMG-20261012-WA0062.jpg'
import whiteWine from '../assets/newWines/IMG-20261012-WA0063 (1).jpg'
import martiniRosso from '../assets/newWines/IMG-20261012-WA0064(1).jpg'
import remyMartin from '../assets/newWines/IMG-20261012-WA0066.jpg'
import cognacVS from '../assets/newWines/IMG-20261012-WA0067.jpg'
import tequila1800 from '../assets/newWines/IMG-20261012-WA0071.jpg'
import xoCognac from '../assets/newWines/IMG-20261012-WA0075.jpg'
import blendedScotch from '../assets/newWines/IMG-20261012-WA0076.jpg'
import amorneroRed from '../assets/newWines/IMG-20261012-WA0082.jpg'
import sambuca from '../assets/newWines/IMG-20261012-WA0085.jpg'
import cruzTequila from '../assets/newWines/IMG-20261012-WA0093.jpg'
import celeneSparkling from '../assets/newWines/IMG-20261012-WA0109.jpg'
import prosecco from '../assets/newWines/IMG-20261012-WA0063.jpg'
import greenTeaLiqueur from '../assets/newWines/IMG-20261012-WA0073.jpg'
import blendedScotchReserve from '../assets/newWines/IMG-20261012-WA0076 (1).jpg'
import sparklingWine from '../assets/newWines/IMG-20261012-WA0078.jpg'
import celeneWhite from '../assets/newWines/IMG-20261012-WA0110.jpg'
import teelingWhisky from '../assets/newWines/IMG-20261012-WA0092.jpg'
import cotswoldsWhisky from '../assets/newWines/IMG-20261012-WA0094.jpg'
import glenfiddichFifteenBox from '../assets/newWines/IMG-20261012-WA0095 (1).jpg'
import glenfiddichFifteen from '../assets/newWines/IMG-20261012-WA0095.jpg'
import blendedWhisky from '../assets/newWines/IMG-20261012-WA0100.jpg'
import devesaPortTwenty from '../assets/newWines/IMG-20261012-WA0106.jpg'
import martellVS from '../assets/newWines/IMG-20261012-WA0108.jpg'
import devesaPortLBV from '../assets/newWines/IMG-20261012-WA0111.jpg'
import barbieriBitter from '../assets/newWines/IMG-20261012-WA0114.jpg'
import jackDaniels from '../assets/newWines/IMG-20261012-WA0118.jpg'
import campari from '../assets/newWines/IMG-20261012-WA0126.jpg'
import devesaPortTen from '../assets/newWines/IMG-20261012-WA0130.jpg'
import tequilaCocktailPack from '../assets/newWines/IMG-20261012-WA0132.jpg'
import tequilaBottle from '../assets/newWines/IMG-20261012-WA0134.jpg'
import grantsWhisky from '../assets/newWines/IMG-20261012-WA0139.jpg'
import cognacBottle from '../assets/newWines/IMG-20261012-WA0141.jpg'
import pinnacleVodka from '../assets/newWines/IMG-20261012-WA0142.jpg'
import jamesonReserveBox from '../assets/newWines/IMG-20261012-WA0145 (1).jpg'
import jamesonReserve from '../assets/newWines/IMG-20261012-WA0145.jpg'
import johnnieWalkerGold from '../assets/newWines/IMG-20261012-WA0148.jpg'
import johnnieWalkerBlue from '../assets/newWines/IMG-20261012-WA0150.jpg'
import mountAngels from '../assets/newWines/IMG-20261012-WA0155.jpg'


const galleryImages = [
    { id: 1, src: singletonWhisky, alt: 'The Singleton 12 Year Old Single Malt Scotch Whisky', category: 'Liquors' },
    { id: 2, src: amorneroRosato, alt: 'Amornero Puglia Rosato', category: 'Rose' },
    { id: 3, src: gallery3, alt: 'People at a wine exhibition', category: 'Events' },
    { id: 4, src: maslaurisLuberon, alt: 'Les Terres de Maslauris Luberon 2025', category: 'White Wine' },
    { id: 5, src: stGermain, alt: 'St-Germain Elderflower Liqueur', category: 'Liquors' },
    { id: 6, src: devesaRose, alt: 'Devesa Rosé', category: 'Rose' },
    { id: 7, src: whiteWine, alt: 'White wine bottle', category: 'White Wine' },
    { id: 8, src: martiniRosso, alt: 'Martini Rosso vermouth', category: 'Liquors' },
    { id: 9, src: remyMartin, alt: 'Rémy Martin 1738 cognac', category: 'Liquors' },
    { id: 10, src: gallery10, alt: 'Visitors at a wine exhibition', category: 'Events' },
    { id: 11, src: gallery11, alt: 'Visitor at a wine exhibition', category: 'Events' },
    { id: 12, src: gallery12, alt: 'Visitor at a wine exhibition', category: 'Events' },
    { id: 13, src: gallery13, alt: 'People at a wine exhibition', category: 'Events' },
    { id: 14, src: gallery14, alt: 'People at a wine exhibition', category: 'Events' },
    { id: 15, src: cognacVS, alt: 'Premium VS cognac', category: 'Liquors' },
    { id: 16, src: tequila1800, alt: '1800 Tequila', category: 'Liquors' },
    { id: 17, src: xoCognac, alt: 'Premium XO cognac', category: 'Liquors' },
    { id: 18, src: blendedScotch, alt: 'Premium blended Scotch whisky', category: 'Liquors' },
    { id: 19, src: celeneSparkling, alt: 'Célène sparkling wine', category: 'Sparkling' },
    { id: 20, src: gallery20, alt: 'People at a wine exhibition', category: 'Events' },
    { id: 21, src: amorneroRed, alt: 'Amornero Puglia wine', category: 'Red Wine' },
    { id: 22, src: cruzTequila, alt: 'Premium tequila', category: 'Liquors' },
    { id: 23, src: gallery20, alt: 'People at a wine exhibition', category: 'Events' },
    { id: 24, src: sambuca, alt: 'Sambuca liqueur', category: 'Liquors' },
    { id: 25, src: gallery10, alt: 'Visitors at a wine exhibition', category: 'Events' },
    { id: 26, src: gallery11, alt: 'Visitor at a wine exhibition', category: 'Events' },
    { id: 27, src: gallery14, alt: 'People at a wine exhibition', category: 'Events' },
    { id: 28, src: prosecco, alt: 'Italian Prosecco sparkling wine', category: 'Sparkling' },
    { id: 29, src: greenTeaLiqueur, alt: 'Green & Green liqueur', category: 'Liquors' },
    { id: 30, src: blendedScotchReserve, alt: 'Blended Scotch whisky', category: 'Liquors' },
    { id: 31, src: sparklingWine, alt: 'Premium sparkling wine', category: 'Sparkling' },
    { id: 32, src: teelingWhisky, alt: 'Teeling Irish whiskey', category: 'Liquors' },
    { id: 33, src: cotswoldsWhisky, alt: 'Cotswolds single malt whisky', category: 'Liquors' },
    { id: 34, src: glenfiddichFifteenBox, alt: 'Glenfiddich 15 year old whisky gift box', category: 'Liquors' },
    { id: 35, src: glenfiddichFifteen, alt: 'Glenfiddich 15 year old whisky', category: 'Liquors' },
    { id: 36, src: blendedWhisky, alt: 'Premium blended whisky', category: 'Liquors' },
    { id: 37, src: devesaPortTwenty, alt: 'Quinta da Devesa 20 year old Port', category: 'Liquors' },
    { id: 38, src: martellVS, alt: 'Martell VS cognac', category: 'Liquors' },
    { id: 39, src: devesaPortLBV, alt: 'Quinta da Devesa Late Bottled Vintage Port', category: 'Liquors' },
    { id: 40, src: barbieriBitter, alt: 'Barbieri bitter aperitif', category: 'Liquors' },
    { id: 41, src: jackDaniels, alt: 'Jack Daniel’s Tennessee whiskey', category: 'Liquors' },
    { id: 42, src: campari, alt: 'Campari aperitif', category: 'Liquors' },
    { id: 43, src: devesaPortTen, alt: 'Quinta da Devesa 10 year old Port', category: 'Liquors' },
    { id: 44, src: tequilaCocktailPack, alt: 'Tequila cocktail variety pack', category: 'Liquors' },
    { id: 45, src: tequilaBottle, alt: 'Premium tequila bottle', category: 'Liquors' },
    { id: 46, src: grantsWhisky, alt: 'Grant’s blended Scotch whisky', category: 'Liquors' },
    { id: 47, src: cognacBottle, alt: 'Premium cognac', category: 'Liquors' },
    { id: 48, src: pinnacleVodka, alt: 'Pinnacle vodka', category: 'Liquors' },
    { id: 49, src: jamesonReserveBox, alt: 'Jameson Irish whiskey gift box', category: 'Liquors' },
    { id: 50, src: jamesonReserve, alt: 'Jameson Irish whiskey', category: 'Liquors' },
    { id: 51, src: johnnieWalkerGold, alt: 'Johnnie Walker Gold Label whisky', category: 'Liquors' },
    { id: 52, src: johnnieWalkerBlue, alt: 'Johnnie Walker Blue Label whisky', category: 'Liquors' },
    { id: 53, src: mountAngels, alt: 'Mount Angels liqueur', category: 'Liquors' },
    { id: 54, src: celeneWhite, alt: 'Célène white wine', category: 'White Wine' },
];

export default function Gallery() {
    const [activeFilter, setActiveFilter] = useState('All');
    const categories = ['All', ...new Set(galleryImages.map((image) => image.category))];

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
