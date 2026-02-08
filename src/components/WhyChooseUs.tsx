import React from 'react';
import { Award, ShieldCheck, DollarSign, MapPin, UserCheck, Globe, Handshake } from 'lucide-react';

const reasons = [
    {
        title: "Curated selection of premium imported brands",
        icon: <Award className="w-6 h-6" />
    },
    {
        title: "Guaranteed authenticity",
        icon: <ShieldCheck className="w-6 h-6" />
    },
    {
        title: "Competitive luxury pricing",
        icon: <DollarSign className="w-6 h-6" />
    },
    {
        title: "Prime Owerri location",
        icon: <MapPin className="w-6 h-6" />
    },
    {
        title: "Professional and discreet service",
        icon: <UserCheck className="w-6 h-6" />
    },
    {
        title: "International partnership",
        icon: <Globe className="w-6 h-6" />
    },
    {
        title: "Strong distributor and retailer relationships",
        icon: <Handshake className="w-6 h-6" />
    }
];

export default function WhyChooseUs() {
    return (
        <section className="py-24 bg-bg-darker relative">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <span className="text-wine-accent font-medium text-sm tracking-widest uppercase">Our Advantage</span>
                    <h2 className="mt-2 text-3xl md:text-4xl font-serif font-bold text-text-light">
                        Why Choose <span className="text-wine-accent">4CHOG Liquors</span>
                    </h2>
                    <div className="w-24 h-1 bg-wine-primary mx-auto mt-4 rounded-full"></div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                    {reasons.map((reason, index) => (
                        <div
                            key={index}
                            className="bg-bg-dark border border-wine-primary/10 rounded-lg p-6 hover:border-wine-accent/30 hover:shadow-lg hover:shadow-wine-primary/5 transition-all duration-300 group"
                        >
                            <div className="flex flex-col items-start space-y-4">
                                <div className="p-3 bg-wine-primary/10 rounded-full text-wine-accent group-hover:bg-wine-accent group-hover:text-bg-dark transition-colors duration-300">
                                    {reason.icon}
                                </div>
                                <h3 className="text-lg font-medium text-text-light/90 leading-snug group-hover:text-wine-accent transition-colors">
                                    {reason.title}
                                </h3>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
