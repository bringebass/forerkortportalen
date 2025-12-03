import { Navbar } from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import PopularDrivingSchools from "@/components/PopularDrivingSchools";
import HowItWorksSection from "@/components/HowItWorksSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import LicenseClassesSection from "@/components/LicenseClassesSection";
import InfoSection from "@/components/InfoSection";
import WhyChooseSection from "@/components/WhyChooseSection";
import FAQSection from "@/components/FAQSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import StructuredData from "@/components/StructuredData";
import StickyMobileCTA from "@/components/StickyMobileCTA";
import CompactFormCTA from "@/components/CompactFormCTA";

export default function Home() {
  return (
    <main>
      <StructuredData />
      <Navbar />
      <CompactFormCTA />
      <HeroSection />
      <HowItWorksSection />
      <InfoSection />
      <PopularDrivingSchools />
      <WhyChooseSection />
      <TestimonialsSection />
      <FAQSection />
      {/* <LicenseClassesSection /> */}
      <CTASection />
      <Footer />
      <StickyMobileCTA />
    </main>
  );
}

