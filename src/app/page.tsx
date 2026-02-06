import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Featured from "@/components/Featured";
import Footer from "@/components/Footer";
import FeaturedGallery from "@/components/Featuredgalley";

export default function Home() {
    return (
        <>
            <Navbar />
            <main>
                <Hero />
                <FeaturedGallery />
                <About />
                <Featured />
            </main>
            <Footer />
        </>
    );
}
