"use client";

import Image from "next/image";
import { ThumbsUp, Heart, Eye } from "lucide-react";
import { useState } from "react";
import img1 from "../../public/assets/hero/product-1.png"
import img2 from "../../public/assets/hero/product-2.png"
import img3 from "../../public/assets/hero/product-6.png"
import img4 from "../../public/assets/hero/product-7.png"

const products = [
    {
        id: 1,
        name: "Domaine Jacques",
        price: "Rs. 55691",
        oldPrice: "Rs. 56951",
        image: img1,
        tag: "New",
    },
    {
        id: 2,
        name: "Domaine Jacques",
        price: "Rs. 55691",
        oldPrice: "Rs. 56951",
        image: img2,
    },
    {
        id: 3,
        name: "Domaine Jacques",
        price: "Rs. 55691",
        oldPrice: "Rs. 56951",
        image: img3,
    },
    {
        id: 4,
        name: "Domaine Jacques",
        price: "Rs. 55691",
        oldPrice: "Rs. 56951",
        image: img4,
    },
];

const tabs = ["FEATURED PRODUCTS"];

export default function ProductShowcase() {
    const [activeTab, setActiveTab] = useState("NEW ARRIVAL");

    return (
        <section className="w-full py-0 px-4 sm:px-8 lg:px-20 bg-transparent">
            {/* Tabs */}
            <div className="flex justify-center gap-6 mb-12 text-sm tracking-widest">
                {tabs.map((tab) => (
                    <button
                        key={tab}
                        onClick={() => setActiveTab(tab)}
                        className=
                        "text-[#f5a623] font-lighter text-xl"

                    >
                        {tab}
                    </button>
                ))}
            </div>

            {/* Products Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
                {products.map((product) => (
                    <div key={product.id} className="group">
                        {/* Image Card */}
                        <div className="relative 
    bg-transparent 
    border border-transparent 
    group-hover:bg-gradient-to-b group-hover:from-[#0b0f0e] group-hover:to-black
    group-hover:border-white/10
    rounded-md 
    overflow-hidden 
    flex items-center justify-center 
    h-[360px]
    transition-all duration-300">


                            {/* New Tag */}
                            {product.tag && (
                                <div className="absolute top-0 left-0 z-10">
                                    <div className="bg-[#f5a623] text-black text-xs font-semibold px-3 py-2 rotate-90 origin-bottom-left">
                                        NEW
                                    </div>
                                </div>
                            )}

                            {/* Hover Icons */}
                            <div className="absolute right-3 top-1/2 -translate-y-1/2 flex flex-col gap-3 opacity-0 group-hover:opacity-100 transition-all duration-300 z-10">
                                <button className="bg-[#1a1f1e] p-2 rounded-md hover:bg-[#f5a623] hover:text-black transition">
                                    <ThumbsUp size={18} />
                                </button>
                                <button className="bg-[#1a1f1e] p-2 rounded-md hover:bg-[#f5a623] hover:text-black transition">
                                    <Heart size={18} />
                                </button>
                                <button className="bg-[#1a1f1e] p-2 rounded-md hover:bg-[#f5a623] hover:text-black transition">
                                    <Eye size={18} />
                                </button>
                            </div>

                            {/* Product Image */}
                            <Image
                                src={product.image}
                                alt={product.name}
                                width={160}
                                height={300}
                                className="object-contain group-hover:scale-105 transition-transform duration-300"
                            />
                        </div>

                        {/* Text Content */}
                        {/* <div className="text-center mt-6">
                            <h3 className="text-white text-lg font-light mb-2">
                                {product.name}
                            </h3>

                            <div className="flex justify-center gap-3 items-center">
                                <span className="text-[#f5a623] font-semibold">
                                    {product.price}
                                </span>

                        </div>
                        </div> */}
                    </div>
                ))}
            </div>
        </section >
    );
}
