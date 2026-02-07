"use client";

import { useState } from "react";
import Image from "next/image";
import bg from "../../public/assets/hero/bg1.png";
import img1 from "../../public/assets/hero/t1.png";
import img2 from "../../public/assets/hero/t2.png";
import img3 from "../../public/assets/hero/t3.png";
import img4 from "../../public/assets/hero/t2.png";
const reviews = [
    {
        name: "Anna Williams",
        role: "Wine Director",
        text: "This is Lorem ipsum dolor sit, amet consectetur adipisicing elit. Est facilis veritatis ex voluptatibus vel alias odio quia. Molestias, aspernatur! Quidem molestiae laudantium accusamus dolorum.",
        image: img1,
    },
    {
        name: "Michael Stone",
        role: "Sommelier",
        text: "Possimus veritatis, excepturi sequi repellendus ab beatae repudiandae quasi a voluptates ea, doloremque, adipisci est fugit.",
        image: img2,
    },
    {
        name: "Sophia Brown",
        role: "Wine Blogger",
        text: "Exceptional quality and service. Every bottle feels premium and carefully selected for true wine lovers.",
        image: img3,
    },
    {
        name: "Daniel Reed",
        role: "Restaurant Owner",
        text: "Their wine collection elevated our restaurant experience completely. Highly recommended.",
        image: img4,
    },
];

export default function CustomerReviewSection() {
    const [active, setActive] = useState(0);

    return (
        <section
            className="relative w-full min-h-screen flex items-center justify-center text-white"
            style={{
                backgroundImage: `url(${bg.src})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundAttachment: "fixed", // fixed background
            }}
        >
            {/* Overlay */}
            {/* <div className="absolute inset-0 bg-black/70" /> */}

            {/* Content */}
            <div className="relative z-10 max-w-5xl w-full px-4 md:px-8 text-center">
                {/* Title */}
                <h2 className="text-3xl md:text-4xl font-semibold mb-2">Customer Review</h2>
                <div className="flex justify-center items-center gap-2 mb-8">
                    <span className="w-2 h-2 bg-white rounded-full" />
                    <span className="w-16 h-[1px] bg-white/40" />
                    <span className="w-2 h-2 bg-white rounded-full" />
                </div>

                {/* Review Card */}
                <div className="flex flex-col lg:flex-row items-center justify-center gap-8">
                    {/* Avatar */}
                    <div className="shrink-0">
                        <div className="w-40 h-40 md:w-48 md:h-48 rounded-full border-4 border-yellow-500 overflow-hidden">
                            <Image
                                src={reviews[active].image}
                                alt={reviews[active].name}
                                width={300}
                                height={300}
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </div>

                    {/* Text Content */}
                    <div className="max-w-2xl text-center lg:text-left">
                        <p className="text-sm md:text-base text-gray-200 leading-relaxed italic">
                            “{reviews[active].text}”
                        </p>
                        <h4 className="mt-4 font-semibold text-lg">{reviews[active].name}</h4>
                        <p className="text-sm text-gray-400">{reviews[active].role}</p>
                    </div>
                </div>

                {/* Dots */}
                <div className="flex justify-center gap-3 mt-8">
                    {reviews.map((_, i) => (
                        <button
                            key={i}
                            onClick={() => setActive(i)}
                            className={`w-3 h-3 rounded-full transition-all duration-300 ${active === i ? "bg-yellow-500 scale-125" : "bg-gray-400"
                                }`}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}

