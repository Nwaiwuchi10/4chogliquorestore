import Navbar from "@/components/Navbar";
import About from "@/components/About";
import HandPickedSection from "@/components/Handpicksection";
import Footer from "@/components/Footer";

export default function AboutPage() {
    return (
        <main className="bg-bg-dark min-h-screen">
            <Navbar />
            <div className="pt-20"> {/* Add padding for fixed navbar */}
                <About />
                <HandPickedSection />
            </div>
            <Footer />
        </main>
    );
}
