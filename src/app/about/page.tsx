import Navbar from "@/components/Navbar";
import About from "@/components/About";
import CoreValues from "@/components/CoreValues";
import TargetAudience from "@/components/TargetAudience";
import WhyChooseUs from "@/components/WhyChooseUs";
import BrandStrategy from "@/components/BrandStrategy";
import HandPickedSection from "@/components/Handpicksection";
import Footer from "@/components/Footer";

export default function AboutPage() {
    return (
        <main className="bg-bg-dark min-h-screen">
            <Navbar />
            <div className="pt-20"> {/* Add padding for fixed navbar */}
                <About />
                <HandPickedSection />
                <CoreValues />
                <TargetAudience />
                <WhyChooseUs />
                <BrandStrategy />

            </div>
            <Footer />
        </main>
    );
}
