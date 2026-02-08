import Image from 'next/image';
import { CheckCircle } from 'lucide-react';
import shopImg from '../../public/assets/hero/shop1.jpg'; // Using shop image as it relates to market/business

export default function TargetAudience() {
    return (
        <section className="py-24 bg-bg-dark relative overflow-hidden">
            {/* Decorative Elements */}
            <div className="absolute top-20 left-0 w-64 h-64 bg-wine-primary/5 rounded-full blur-3xl"></div>
            <div className="absolute bottom-20 right-0 w-96 h-96 bg-wine-secondary/5 rounded-full blur-3xl"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="grid lg:grid-cols-2 gap-16 items-center">

                    {/* Image Container */}
                    <div className="relative h-[600px] rounded-sm overflow-hidden group order-2 lg:order-1">
                        <div className="absolute inset-0 bg-gradient-to-t from-bg-dark via-transparent to-transparent opacity-60 z-10"></div>
                        <Image
                            src={shopImg}
                            alt="Premium Wine Collection and Ambience"
                            fill
                            className="object-cover transition-transform duration-700 group-hover:scale-105"
                            priority
                        />
                        <div className="absolute bottom-8 left-8 right-8 z-20 border-l-4 border-wine-accent pl-6">
                            <p className="text-white text-xl font-serif italic">
                                &ldquo;Curating exclusive experiences for those who appreciate the finer things in life.&rdquo;
                            </p>

                        </div>
                    </div>

                    {/* Content Container */}
                    <div className="space-y-8 order-1 lg:order-2">
                        <div>
                            <span className="text-wine-accent font-medium text-sm tracking-widest uppercase">Market Position</span>
                            <h2 className="mt-2 text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-text-light leading-tight">
                                Target Audience & <br />
                                <span className="text-wine-secondary">Market Position</span>
                            </h2>
                            <div className="h-1 w-24 bg-gradient-to-r from-wine-accent to-transparent mt-6"></div>
                        </div>

                        <div className="space-y-6">
                            <div>
                                <h3 className="text-xl font-bold text-wine-primary mb-3">Upscale Target Audience</h3>
                                <p className="text-text-light/80 leading-relaxed text-lg">
                                    4CHOG targets affluent consumers seeking exclusivity and premium experiences. We proudly serve:
                                </p>
                            </div>

                            <ul className="space-y-4">
                                {[
                                    "Adult consumers (21+)",
                                    "Wine & spirit connoisseurs",
                                    "Event planners & luxury event hosts",
                                    "Hotels, bars, lounges, nightclubs & restaurants",
                                    "Corporate organizations",
                                    "Individuals celebrating life’s finest moments",
                                    "Liquor stores and distributors"
                                ].map((item, index) => (
                                    <li key={index} className="flex items-start group">
                                        <span className="mt-1 mr-4 text-wine-accent flex-shrink-0 group-hover:text-wine-secondary transition-colors">
                                            <CheckCircle className="w-5 h-5" />
                                        </span>
                                        <span className="text-text-light/90 group-hover:translate-x-1 transition-transform duration-300">
                                            {item}
                                        </span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
