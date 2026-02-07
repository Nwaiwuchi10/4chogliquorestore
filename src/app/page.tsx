import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Featured from "@/components/Featured";
import Footer from "@/components/Footer";
import FeaturedGallery from "@/components/Featuredgalley";
import WineCategorySlider from "@/components/WinecategorySlider";
import HandPickedSection from "@/components/Handpicksection";
import ContactUsSection from "@/components/Contactus";


export default function Home() {
    return (
        <>
            <Navbar />
            <main>
                <Hero />
                <FeaturedGallery />
                <WineCategorySlider />
                <HandPickedSection />
                <About />
                <Featured />
                <ContactUsSection />
            </main>
            <Footer />
        </>
    );
}
