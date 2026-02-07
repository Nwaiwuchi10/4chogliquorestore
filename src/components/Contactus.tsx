"use client";

import { MessageSquare } from "lucide-react";
import { useState, useRef } from "react";

const ContactUsSection = () => {
    const [message, setMessage] = useState("");
    const textareaRef = useRef<HTMLTextAreaElement | null>(null);

    // Auto-expand textarea
    const handleInput = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        setMessage(e.target.value);
        if (textareaRef.current) {
            textareaRef.current.style.height = "auto";
            textareaRef.current.style.height = textareaRef.current.scrollHeight + "px";
        }
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        if (!message.trim()) return;

        const email = "4chogliquorstore@gmail.com";
        const subject = encodeURIComponent("New Contact Message");
        const body = encodeURIComponent(message);

        // Open email client
        window.location.href = `mailto:${email}?subject=${subject}&body=${body}`;

        // Reset
        setMessage("");
        if (textareaRef.current) {
            textareaRef.current.style.height = "auto";
        }
    };

    return (
        <section id="contact" className="w-full overflow-x-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[180px] w-full">

                {/* Left Content */}
                <div className="bg-[#0f1513] flex items-center px-4 sm:px-6 lg:px-16 py-10 w-full">
                    <div className="max-w-md w-full">
                        <h3 className="text-white text-2xl sm:text-3xl font-serif">
                            Contact Us
                        </h3>
                        <p className="mt-2 text-gray-300 text-sm sm:text-base">
                            Have a question or need assistance? Send us a message and our team will get back to you shortly.
                        </p>
                    </div>
                </div>

                {/* Right Form */}
                <div className="bg-[#6a0f2e] flex items-center px-4 sm:px-6 lg:px-16 py-10 w-full">
                    <form
                        className="flex flex-col sm:flex-row w-full max-w-xl gap-3"
                        onSubmit={handleSubmit}
                    >
                        <textarea
                            ref={textareaRef}
                            value={message}
                            onChange={handleInput}
                            placeholder="Your message..."
                            rows={1}
                            className="w-full resize-none overflow-hidden bg-black text-white px-4 py-3 text-sm
              placeholder-gray-400 outline-none rounded"
                        />

                        <button
                            type="submit"
                            className="flex items-center justify-center gap-2 bg-[#e09a32] text-white
              px-6 py-3 text-sm font-medium w-full sm:w-auto
              hover:bg-[#f0ad4e] transition-colors duration-300 rounded"
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
