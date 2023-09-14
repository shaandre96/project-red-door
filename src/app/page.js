import Footer from '@/components/Footer';
import NavBar from '@/components/NavBar';
import About from '@/sections/About';
import Hero from '@/sections/Hero';
import Services from '@/sections/Services';

export default function Home() {
    return (
        <main className="w-full min-h-screen">
            <NavBar />
            <Hero />
            <Services />
            <About />
            <Footer />
        </main>
    );
}
