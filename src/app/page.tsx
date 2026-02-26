import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import CommunityBanner from "@/components/CommunityBanner";
import Mission from "@/components/Mission";
import AboutBina from "@/components/AboutBina";
import HowItWorks from "@/components/HowItWorks";
import Values from "@/components/Values";
import Menu from "@/components/Menu";
import Gallery from "@/components/Gallery";
import Testimonials from "@/components/Testimonials";
import Delivery from "@/components/Delivery";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import FloatingElements from "@/components/FloatingElements";

export default function Home() {
  return (
    <>
      <Navigation />
      <main>
        <Hero />
        <CommunityBanner />
        <Mission />
        <AboutBina />
        <HowItWorks />
        <Values />
        <Menu />
        <Gallery />
        <Testimonials />
        <Delivery />
        <Contact />
      </main>
      <Footer />
      <FloatingElements />
    </>
  );
}
