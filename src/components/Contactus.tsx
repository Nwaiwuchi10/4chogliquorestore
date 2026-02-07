"use client";

import { MessageSquare } from "lucide-react";

const ContactUsSection = () => {
    return (
        <section className="w-full">
            <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[180px]">
                {/* Left Content */}
                <div className="bg-[#0f1513] flex items-center px-6 sm:px-10 lg:px-16 py-10">
                    <div className="max-w-md">
                        <h3 className="text-white text-2xl sm:text-3xl font-serif">
                            Contact Us
                        </h3>
                        <p className="mt-2 text-gray-300 text-sm sm:text-base">
                            Have a question or need assistance? Send us a message and our team will get back to you shortly.
                        </p>
                    </div>
                </div>

                {/* Right Form */}
                <div className="bg-[#6a0f2e] flex items-center px-6 sm:px-10 lg:px-16 py-10">
                    <form
                        className="flex w-full max-w-xl"
                        onSubmit={(e) => e.preventDefault()}
                    >
                        <input
                            type="text"
                            placeholder="Your message..."
                            className="flex-1 bg-black text-white px-4 py-3 text-sm
                            placeholder-gray-400 outline-none"
                        />

                        <button
                            type="submit"
                            className="flex items-center gap-2 bg-[#e09a32] text-white
                            px-6 py-3 text-sm font-medium
                            hover:bg-[#f0ad4e] transition-colors duration-300"
                        >
                            Send
                            <MessageSquare className="h-4 w-4" />
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default ContactUsSection;
