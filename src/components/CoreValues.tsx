import React from 'react';
import { Gem, Handshake, UserCheck, ShieldCheck, Star } from 'lucide-react';

const coreValues = [
    {
        title: "AUTHENTICITY",
        description: "ONLY GENUINE, IMPORTED PRODUCTS",
        icon: <ShieldCheck className="w-8 h-8" />
    },
    {
        title: "EXCELLENCE",
        description: "PREMIUM STANDARDS IN PRODUCT AND SERVICE",
        icon: <Star className="w-8 h-8" />
    },
    {
        title: "INTEGRITY",
        description: "HONEST AND TRANSPARENT BUSINESS PRACTICES",
        icon: <Handshake className="w-8 h-8" />
    },
    {
        title: "CUSTOMER EXPERIENCE",
        description: "PERSONALIZED AND PROFESSIONAL SERVICE",
        icon: <UserCheck className="w-8 h-8" />
    },
    {
        title: "CONSISTENCY",
        description: "QUALITY YOU CAN TRUST, EVERY TIME",
        icon: <Gem className="w-8 h-8" />
    }
];

export default function CoreValues() {
    return (
        <section className="py-20 bg-bg-dark text-text-light relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center mb-16">
                    <span className="text-wine-accent font-medium text-sm tracking-widest uppercase">Our Principles</span>
                    <h2 className="mt-2 text-3xl md:text-4xl font-serif font-bold">Core Values</h2>
                    <div className="w-24 h-1 bg-wine-primary mx-auto mt-4 rounded-full"></div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {coreValues.map((value, index) => (
                        <div
                            key={index}
                            className="group p-8 rounded-xl bg-bg-darker border border-wine-primary/10 hover:border-wine-accent/30 transition-all duration-300 hover:transform hover:-translate-y-1 hover:shadow-xl hover:shadow-wine-primary/5"
                        >
                            <div className="flex flex-col items-center text-center space-y-4">
                                <div className="p-4 rounded-full bg-wine-primary/10 text-wine-accent group-hover:bg-wine-accent group-hover:text-bg-darker transition-colors duration-300">
                                    {value.icon}
                                </div>
                                <h3 className="text-xl font-bold tracking-wide">{value.title}</h3>
                                <p className="text-text-light/70 text-sm font-medium leading-relaxed">
                                    {value.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
