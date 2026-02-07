"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import { wineCategories } from "./Winecategories";


const WineCategorySlider = () => {
    const sliderRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const slider = sliderRef.current;
        if (!slider) return;

        let animationFrame: number;
        let scrollAmount = 0;

        const slide = () => {
            scrollAmount += 0.3; // 👈 speed (slow & premium)

            if (scrollAmount >= slider.scrollWidth / 2) {
                scrollAmount = 0; // seamless loop
            }

            slider.scrollLeft = scrollAmount;
            animationFrame = requestAnimationFrame(slide);
        };

        animationFrame = requestAnimationFrame(slide);

        return () => cancelAnimationFrame(animationFrame);
    }, []);

    return (
        <section className="w-full bg-black py-16 overflow-hidden">
            <div
                ref={sliderRef}
                className="flex gap-10 overflow-x-hidden whitespace-nowrap"
            >
                {wineCategories.map((item) => (
                    <div
                        key={item.id}
                        className="min-w-[160px] sm:min-w-[180px] md:min-w-[200px] lg:min-w-[220px] xl:min-w-[240px]
                       flex flex-col items-center group"
                    >
                        {/* Image */}
                        <div className="relative h-[260px] w-full flex items-center justify-center">
                            <Image
                                src={item.image}
                                alt={item.title}
                                className="object-contain transition-transform duration-500 group-hover:scale-105"
                                fill
                                priority
                            />
                        </div>

                        {/* Title */}
                        <p
                            className="mt-6 text-wine-accent text-sm tracking-widest uppercase
                         group-hover:text-gold transition-colors duration-300"
                        >
                            {item.title}
                        </p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default WineCategorySlider;
