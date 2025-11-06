// app/page.tsx
import Header from "@/components/layout/Header";
import HeroSection from "@/components/sections/HeroSection";
import AboutUsSection from "@/components/sections/AboutUsSection";
import ServicesSection from "@/components/sections/ServicesSection";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import BlogSection from "@/components/sections/BlogSection";
import Footer from "@/components/layout/Footer";
import PartnerLogosSection from "@/components/sections/PartnerLogosSection";
import HistorySection from "@/components/sections/HistorySection";
import CallToActionSection from "@/components/sections/CallToActionSection";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* keep - 
      but need to update navigation: 
      Home, About, Products, Services, Blog, Contact */}
      <Header />
      <main className="grow">
        <HeroSection />
        <AboutUsSection />
        <ServicesSection />
        {/* <GrowNaturallySection />  */}
        <TestimonialsSection />
        <PartnerLogosSection /> 
        {/* <WhatWeDoSection />  */}
        <HistorySection /> 
        <BlogSection />
        <CallToActionSection /> 
      </main>
      <Footer />
    </div>
  );
}
