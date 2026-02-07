"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade, Autoplay, Pagination, Navigation } from "swiper/modules";
import Image from "next/image";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/pagination";
import "swiper/css/navigation";
import whatsapp from "../../public/assets/hero/whatsapp.png"

const slides = [
    {
        subtitle: "The Best Collections 2025",
        title: "AMAZING\nWINESHOP",
        button: "Contact Us Now",
        image: "/assets/hero/wbg2.jpg",
        accent: "text-wine-accent"
    },
    {
        subtitle: "Premium Spirits",
        title: "LUXURY\nDRINKS",
        button: "Explore",
        image: "/assets/hero/wbg2.jpg",
        accent: "text-wine-primary"
    },
    {
        subtitle: "Exclusive Selection",
        title: "WINE\nCOLLECTIONS",
        button: "View More",
        image: "/assets/hero/wbg2.jpg",
        accent: "text-wine-secondary"
    },
];

export default function HeroSwiper() {
    const phoneNumber = "09028219263";
    const WhatsappClick = () => {
        const url = `https://wa.me/${phoneNumber}`;
        window.open(url, "_blank");
    };
    return (
        <section className="relative h-screen w-full overflow-hidden bg-bg-darker">
            <Swiper
                modules={[EffectFade, Autoplay, Pagination, Navigation]}
                effect="fade"
                speed={1000}
                autoplay={{
                    delay: 6000,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                    renderBullet: (index, className) => {
                        return `<span class="${className} !bg-wine-accent !w-3 !h-3 hover:!bg-white transition-all"></span>`;
                    }
                }}
                navigation={{
                    nextEl: '.swiper-button-next-custom',
                    prevEl: '.swiper-button-prev-custom',
                }}
                loop
                className="h-full w-full group"
            >
                {slides.map((slide, index) => (
                    <SwiperSlide key={index}>
                        {/* Background */}
                        <div className="relative h-full w-full">
                            <div
                                className="absolute inset-0 bg-cover bg-center transition-transform duration-[10000ms] ease-linear scale-105 hover:scale-110"
                                style={{ backgroundImage: `url(${slide.image})` }}
                            />

                            {/* Cinematic Overlay */}
                            <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/50 to-transparent" />
                            <div className="absolute inset-0 bg-gradient-to-t from-bg-darker/90 via-transparent to-black/30" />

                            {/* Content */}
                            <div className="relative z-10 h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center">
                                <div className="max-w-2xl space-y-8 animate-fadeInUp">
                                    {/* Decorative Line & Subtitle */}
                                    <div className="flex items-center space-x-4 overflow-hidden lg:pt-32">
                                        <div className="h-[2px] w-16 bg-wine-accent"></div>
                                        <p className="text-wine-accent font-serif tracking-[0.2em] text-sm uppercase font-semibold ">
                                            {slide.subtitle}
                                        </p>
                                    </div>

                                    {/* Main Title */}
                                    <h1 className="text-white text-4xl md:text-4xl xl:text-6xl font-serif font-bold leading-tight whitespace-pre-line drop-shadow-2xl">
                                        {slide.title.split('\n')[0]}
                                        <span className={`block ${slide.accent} italic`}>
                                            {slide.title.split('\n')[1]}
                                        </span>
                                    </h1>

                                    {/* Description (Optional) */}
                                    <p className="text-gray-300 text-lg md:text-xl max-w-lg font-lighter leading-relaxed border-l-2 border-white/20 pl-6">
                                        Experience the finest curation of premium vintages and rare spirits, delivered with elegance.
                                    </p>
                                    <p className="text-gray-300 text-lg md:text-xl max-w-lg font-lighter  pl-6">Retail &
                                        Distribution Of Imported Wines And
                                        Spirits</p>
                                    {/* Buttons */}
                                    <div className="flex flex-wrap gap-4 pt-4">
                                        <button className="px-8 py-4 bg-wine-primary hover:bg-wine-secondary text-white transition-all duration-300 rounded-sm font-medium tracking-wide border border-transparent hover:border-wine-accent/50 shadow-lg hover:shadow-wine-primary/40 uppercase text-sm">
                                            <a href="#contact"> {slide.button}</a>
                                        </button>
                                        <button className="px-8 py-4 bg-transparent border border-white/30 text-white hover:bg-white hover:text-black transition-all duration-300 rounded-sm font-medium tracking-wide uppercase text-sm backdrop-blur-sm">
                                            <a href="#about" className="decoration-none">Our Story</a>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}




                {/* Custom Navigation Buttons */}
                <div className="absolute bottom-12 right-12 z-20 flex space-x-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <button className="swiper-button-prev-custom w-12 h-12 flex items-center justify-center border border-white/20 hover:bg-wine-primary hover:border-wine-primary text-white rounded-full transition-all duration-300 backdrop-blur-md">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
                    </button>
                    <button className="swiper-button-next-custom w-12 h-12 flex items-center justify-center border border-white/20 hover:bg-wine-primary hover:border-wine-primary text-white rounded-full transition-all duration-300 backdrop-blur-md">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                    </button>
                </div>
            </Swiper>
            <div className="fixed z-[1000] bottom-6 right-6 sm:bottom-8 sm:right-8 cursor-pointer">
                <div
                    onClick={WhatsappClick}
                    className="w-[60px] h-[60px] rounded-full shadow-lg hover:scale-110 transition-transform duration-300"
                >
                    <Image
                        src={whatsapp}
                        alt="whatsapp"
                        width={60}
                        height={60}
                        className="w-full h-full object-cover"
                        priority
                    />
                </div>
            </div>
            {/* Scroll Indicator */}
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 animate-bounce hidden md:block">
                <svg className="w-6 h-6 text-white/50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
            </div>

            <style jsx global>{`
                .swiper-pagination-bullet {
                    background: rgba(255, 255, 255, 0.4);
                    opacity: 1;
                }
                .swiper-pagination-bullet-active {
                    background: #D4AF37 !important;
                    width: 24px !important;
                    border-radius: 4px !important;
                }
                @keyframes fadeInUp {
                    from { opacity: 0; transform: translateY(20px); }
                    to { opacity: 1; transform: translateY(0); }
                }
                .animate-fadeInUp {
                    animation: fadeInUp 1s ease-out forwards;
                }
            `}</style>
        </section>
    );
}
