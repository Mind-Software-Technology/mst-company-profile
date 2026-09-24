"use client";

import dynamic from "next/dynamic";
import Navbar from "./_components/Navbar";
import Hero from "./_components/Hero";
import About from "./_components/About";
import Services from "./_components/Services";
import Process from "./_components/Process";
import TechStack from "./_components/TechStack";
import Portfolio from "./_components/Portfolio";
import Stats from "./_components/Stats";
import Team from "./_components/Team";
import InsideMST from "./_components/InsideMST";
import Testimonials from "./_components/Testimonials";
import Contact from "./_components/Contact";
import CTA from "./_components/CTA";
import Footer from "./_components/Footer";
import FloatingWhatsApp from "./_components/FloatingWhatsApp";

const ScrollBackground = dynamic(
  () => import("./_components/ScrollBackground"),
  { ssr: false }
);

export default function Home() {
  return (
    <>
      <ScrollBackground />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <Process />
        <TechStack />
        <Portfolio />
        <Stats />
        <Team />
        <InsideMST />
        <Testimonials />
        <Contact />
        <CTA />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </>
  );
}
