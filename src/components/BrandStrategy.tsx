import Image from 'next/image';
import b1Img from '../../public/assets/hero/b1.jpg';
import shop1Img from '../../public/assets/hero/shop1.jpg';
import vineyardImg from '../../public/assets/hero/vineyard.png';
import p1Img from '../../public/assets/hero/p1.jpg';
import wbg1Img from '../../public/assets/hero/wbg1.jpg';

const strategies = [
    {
        title: "BRAND IDENTITY",
        content: (
            <div className="space-y-6">
                <div>
                    <h4 className="text-xl font-bold text-wine-accent mb-2">Brand Name</h4>
                    <p className="text-text-light/80">4CHOG Liquors</p>
                </div>
                <div>
                    <h4 className="text-xl font-bold text-wine-accent mb-2">Brand Personality</h4>
                    <p className="text-text-light/80">Bold, refined, and trustworthy</p>
                </div>
                <div>
                    <h4 className="text-xl font-bold text-wine-accent mb-2">Packaging Style</h4>
                    <p className="text-text-light/80">Modern, elegant, and eyecatching</p>
                </div>
            </div>
        ),
        image: b1Img,
        alt: "Premium Wine Bottle"
    },
    {
        title: "MARKETING & DISTRIBUTION STRATEGY",
        content: (
            <ul className="space-y-4 text-text-light/80">
                <li className="flex items-start">
                    <span className="w-2 h-2 mt-2 mr-3 bg-wine-secondary rounded-full"></span>
                    Retail and wholesale distribution
                </li>
                <li className="flex items-start">
                    <span className="w-2 h-2 mt-2 mr-3 bg-wine-secondary rounded-full"></span>
                    Strategic partnerships with bars and clubs
                </li>
                <li className="flex items-start">
                    <span className="w-2 h-2 mt-2 mr-3 bg-wine-secondary rounded-full"></span>
                    Promotional events and tastings
                </li>
                <li className="flex items-start">
                    <span className="w-2 h-2 mt-2 mr-3 bg-wine-secondary rounded-full"></span>
                    Digital marketing and social media campaigns
                </li>
                <li className="flex items-start">
                    <span className="w-2 h-2 mt-2 mr-3 bg-wine-secondary rounded-full"></span>
                    Influencer and brand ambassador collaborations
                </li>
            </ul>
        ),
        image: shop1Img,
        alt: "Retail Store Interior"
    },
    {
        title: "COMMITMENT TO RESPONSIBILITY",
        content: (
            <p className="text-text-light/80 leading-relaxed text-lg">
                4CHOG Liquors upholds a strong commitment to responsible alcohol consumption and full compliance with all legal and regulatory standards across the global alcohol industry, ensuring every bottle is securely sealed and protected for safe enjoyment.
            </p>
        ),
        image: vineyardImg,
        alt: "Vineyard Landscape"
    },
    {
        title: "RETAIL AND ON-PREMISE PARTNERSHIPS",
        content: (
            <div className="space-y-6">
                <div>
                    <h4 className="text-xl font-bold text-wine-accent mb-2">Expanded Brand Presence</h4>
                    <p className="text-text-light/80">
                        Strategic partnerships with premium retail outlets and high-end bars significantly broadened brand availability.
                    </p>
                </div>
                <div>
                    <h4 className="text-xl font-bold text-wine-accent mb-2">Collaborative Marketing Initiatives</h4>
                    <p className="text-text-light/80">
                        Co-branding efforts and promotional activations boosted overall brand visibility and generated incremental regional sales.
                    </p>
                </div>
            </div>
        ),
        image: p1Img,
        alt: "Social gathering with wine"
    },
    {
        title: "SALES TRENDS AND GROWTH METRICS",
        content: (
            <div className="space-y-6">
                <ul className="space-y-2 text-text-light/80 mb-6">
                    <li className="flex items-center"><span className="text-wine-secondary mr-2">✓</span> Expand global distribution channels</li>
                    <li className="flex items-center"><span className="text-wine-secondary mr-2">✓</span> Enter new regional and international markets</li>
                    <li className="flex items-center"><span className="text-wine-secondary mr-2">✓</span> Enhance brand visibility and customer loyalty</li>
                    <li className="flex items-center"><span className="text-wine-secondary mr-2">✓</span> Invest in sustainable manufacturing and eco-friendly packaging</li>
                    <li className="flex items-center"><span className="text-wine-secondary mr-2">✓</span> Develop and deliver exceptional premium wines and spirits</li>
                </ul>
                <div>
                    <h4 className="text-xl font-bold text-wine-accent mb-2">Consistent Sales Growth</h4>
                    <p className="text-text-light/80 mb-4">
                        Customer engagement metrics: Increased average order size and higher repeat customer rates drive improved sales performance.
                    </p>
                </div>
                <div>
                    <h4 className="text-xl font-bold text-wine-accent mb-2">Seasonal Sales and Analytics</h4>
                    <p className="text-text-light/80">
                        Seasonal sales spikes align with promotions, supported by data analytics refining sales strategies.
                    </p>
                </div>
            </div>
        ),
        image: wbg1Img,
        alt: "Growth and Analytics abstract"
    }
];

export default function BrandStrategy() {
    return (
        <section className="bg-bg-dark text-text-light">
            {strategies.map((item, index) => (
                <div key={index} className={`py-20 ${index % 2 === 1 ? 'bg-bg-darker' : ''}`}>
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className={`grid lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:grid-flow-dense' : ''}`}>

                            {/* Content Side */}
                            <div className={`${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                                <div className="mb-6">
                                    <h2 className="text-3xl lg:text-4xl font-serif font-bold mb-4">{item.title}</h2>
                                    <div className="h-1 w-20 bg-wine-primary rounded-full"></div>
                                </div>
                                <div className="text-lg">
                                    {item.content}
                                </div>
                            </div>

                            {/* Image Side */}
                            <div className={`relative h-[400px] lg:h-[500px] rounded-lg overflow-hidden group shadow-2xl ${index % 2 === 1 ? 'lg:col-start-1' : ''}`}>
                                <div className="absolute inset-0 bg-wine-primary/10 group-hover:bg-transparent transition-colors duration-500 z-10"></div>
                                <Image
                                    src={item.image}
                                    alt={item.alt}
                                    fill
                                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                                />
                            </div>

                        </div>
                    </div>
                </div>
            ))}
        </section>
    );
}
