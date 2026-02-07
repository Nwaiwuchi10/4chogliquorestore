export default function Footer() {
    return (
        <footer className="bg-bg-darker border-t border-wine-primary/20 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                <div className="grid md:grid-cols-4 gap-8 mb-8">
                    {/* Brand */}
                    <div className="md:col-span-1">
                        <div className="text-3xl font-serif font-bold text-wine-accent mb-4">4CHOG Liquors</div>
                        <p className="text-text-light/60 text-sm">
                            Elevating the art of wine distribution since 2022.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-text-light font-semibold mb-4">Quick Links</h4>
                        <ul className="space-y-2">
                            <li>
                                <a href="#home" className="text-text-light/60 hover:text-wine-accent transition-colors text-sm">
                                    Home
                                </a>
                            </li>
                            <li>
                                <a href="#story" className="text-text-light/60 hover:text-wine-accent transition-colors text-sm">
                                    Our Story
                                </a>
                            </li>
                            <li>
                                <a href="#collection" className="text-text-light/60 hover:text-wine-accent transition-colors text-sm">
                                    Collection
                                </a>
                            </li>
                            <li>
                                <a href="#partners" className="text-text-light/60 hover:text-wine-accent transition-colors text-sm">
                                    Partners
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Services */}
                    <div>
                        <h4 className="text-text-light font-semibold mb-4">Services</h4>
                        <ul className="space-y-2">
                            <li className="text-text-light/60 text-sm">Wine Distribution</li>
                            <li className="text-text-light/60 text-sm">Private Label</li>
                            <li className="text-text-light/60 text-sm">Consulting</li>
                            <li className="text-text-light/60 text-sm">Event Sourcing</li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div id="contact">
                        <h4 className="text-text-light font-semibold mb-4">Contact</h4>
                        <ul className="space-y-2 text-sm text-text-light/60">
                            <li>4chogliquorstore@gmail.com</li>

                            <li>+2349028219263</li>
                            <li>NO. 23 EREKWERENWA
                                STREET, OWERRI, IMO STATE, NIGERIA</li>
                            <li className="pt-4">
                                <div className="flex space-x-4">
                                    {/* Facebook */}
                                    <a
                                        href="https://facebook.com/4chog"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="hover:text-wine-accent transition-colors"
                                        aria-label="Facebook"
                                    >
                                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                                        </svg>
                                    </a>

                                    {/* TikTok */}
                                    <a
                                        href="https://tiktok.me/4chog_liquor"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="hover:text-wine-accent transition-colors"
                                        aria-label="TikTok"
                                    >
                                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M21 8.15a6.47 6.47 0 01-3.77-1.23A6.53 6.53 0 0114.5 3h-3v11.2a2.5 2.5 0 11-2.5-2.5c.26 0 .5.04.73.1V8.7a5.5 5.5 0 105.77 5.5V9.95a9.48 9.48 0 005.5 1.75z" />
                                        </svg>
                                    </a>
                                </div>

                            </li>
                        </ul>
                    </div>
                </div>

                {/* Bottom bar */}
                <div className="border-t border-wine-primary/20 pt-8 flex flex-col md:flex-row justify-between items-center">
                    <p className="text-text-light/50 text-sm">
                        © {new Date().getFullYear()} 4CHOG Liquors Distribution. All rights reserved.
                    </p>
                    <div className="flex space-x-6 mt-4 md:mt-0">
                        <a href="#" className="text-text-light/50 hover:text-wine-accent text-sm transition-colors">
                            Privacy Policy
                        </a>
                        <a href="#" className="text-text-light/50 hover:text-wine-accent text-sm transition-colors">
                            Terms of Service
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
