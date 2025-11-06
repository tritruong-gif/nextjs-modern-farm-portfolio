// app/page.tsx
import HeroSection from "@/components/sections/HeroSection";
import AboutUsSection from "@/components/sections/AboutUsSection";
// import ServicesSection from "@/components/sections/ServicesSection";
import ServicesSection from "@/components/sections/ServicesSectionV2";
// import TestimonialsSection from "@/components/sections/TestimonialsSection";
import TestimonialsSection from "@/components/sections/TestimonialsSectionV2";
// import BlogSection from "@/components/sections/BlogsSection";
import BlogSection from "@/components/sections/BlogsSectionV2";
// import PartnerLogosSection from "@/components/sections/PartnerLogosSection";
import PartnerLogosSection from "@/components/sections/PartnerLogosSectionV2";
import HistorySection from "@/components/sections/HistorySection";
// import CallToActionSection from "@/components/sections/CallToActionSection";

export default function Home() {
  return (
    // <div className="flex flex-col min-h-screen">
      // <Header />
      <main className="flex-grow">
        <HeroSection />
        <AboutUsSection />
        <ServicesSection />
        {/* <GrowNaturallySection />  */}
        <TestimonialsSection />
        <PartnerLogosSection /> 
        {/* <WhatWeDoSection />  */}
        <HistorySection /> 
        <BlogSection />
      </main>
      // <Footer />
    // </div>
  );
}
