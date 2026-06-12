import Navbar from "./_components/Navbar";
import Hero from "./_components/Hero";
import About from "./_components/About";
import Services from "./_components/Services";
import Portfolio from "./_components/Portfolio";
import Contact from "./_components/Contact";
import Footer from "./_components/Footer";
import FloatingWhatsApp from "./_components/FloatingWhatsApp";
import ScrollBackground from "./_components/ScrollBackground";

export default function Home() {
  return (
    <>
      <ScrollBackground />
      <div className="relative z-10">
        <Navbar />
        <Hero />
        <About />
        <Services />
        <Portfolio />
        <Contact />
        <Footer />
        <FloatingWhatsApp />
      </div>
    </>
  );
}
