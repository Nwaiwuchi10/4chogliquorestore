"use client";

import Image from "next/image";
import b1 from "../../public/assets/hero/b1.jpg";
import b2 from "../../public/assets/hero/b2.jpg";
import b3 from "../../public/assets/hero/b3.jpg";

export default function LatestBlogSection() {
    return (
        <section id="blogs" className="w-full bg-black text-white py-16 px-4 md:px-10">
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-semibold">Latest Blog</h2>
                    <div className="flex justify-center items-center gap-2 mt-3">
                        <span className="w-2 h-2 bg-white rounded-full" />
                        <span className="w-16 h-[1px] bg-white/40" />
                        <span className="w-2 h-2 bg-white rounded-full" />
                    </div>
                </div>

                {/* Grid Layout */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Left Big Card */}
                    <div className="lg:row-span-2 relative group overflow-hidden">
                        <Image
                            src={b1}
                            alt="Wine shop"
                            width={800}
                            height={900}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-black/40" />

                        {/* Plus Icon */}
                        <div className="absolute left-6 top-1/2 -translate-y-1/2 text-white text-3xl font-light">+</div>

                        {/* Content */}
                        <div className="absolute bottom-0 p-6 bg-gradient-to-t from-black/80 to-transparent">
                            <h3 className="text-xl font-semibold">Commitment To Responsibility</h3>
                            <p className="text-sm text-gray-300 mt-1">Bold, refined, and
                                trustworthy</p>
                            <p className="text-sm text-gray-300 mt-3 leading-relaxed">
                                4CHOG Liquors upholds a strong commitment
                                to responsible alcohol consumption and full
                                compliance with all legal and regulatory
                                standards across the global alcohol industry,
                                ensuring every bottle is securely sealed and
                                protected for safe enjoyment.
                            </p>
                        </div>
                    </div>

                    {/* Center Card */}
                    <div className="bg-black/80 p-6 flex flex-col justify-center">
                        <h3 className="text-xl font-semibold">Collaborative Marketing Initiatives</h3>
                        <p className="text-sm text-gray-400 mt-2">Bold, refined, and
                            trustworthy</p>
                        <p className="text-sm text-gray-300 mt-4 leading-relaxed">
                            Co-branding efforts and promotional
                            activations boosted overall brand visibility and
                            generated incremental regional sales.
                        </p>
                        <button className="mt-6 text-yellow-400 text-sm font-semibold hover:underline w-fit">
                            Read More
                        </button>
                    </div>

                    {/* Right Top Card */}
                    <div className="relative group overflow-hidden">
                        <Image
                            src={b2}
                            alt="Champagne"
                            width={800}
                            height={500}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-black/40" />
                        <div className="absolute bottom-0 p-6 bg-gradient-to-t from-black/80 to-transparent">
                            <h3 className="text-xl font-semibold">Expanded Brand Presence</h3>
                            <p className="text-sm text-gray-300 mt-1">Bold, refined, and
                                trustworthy</p>
                            <p className="text-sm text-gray-300 mt-3 leading-relaxed">
                                Strategic partnerships with premium retail
                                outlets and high-end bars significantly
                                broadened brand availability
                            </p>
                            <button className="mt-4 text-yellow-400 text-sm font-semibold hover:underline">
                                Read More
                            </button>
                        </div>
                    </div>

                    {/* Bottom Center Image */}
                    <div className="lg:col-span-2 relative group overflow-hidden">
                        <Image
                            src={b3}
                            alt="Whiskey splash"
                            width={1200}
                            height={500}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}


