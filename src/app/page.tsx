import DrivingSchoolList from "@/components/DrivingSchoolList";
import { Navbar } from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import PopularDrivingSchools from "@/components/PopularDrivingSchools";
import HowItWorksSection from "@/components/HowItWorksSection";
import LicenseClassesSection from "@/components/LicenseClassesSection";
import FAQSection from "@/components/FAQSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import StructuredData from "@/components/StructuredData";

export default function Home() {
  return (
    <main>
      <StructuredData />
      <Navbar />
      <HeroSection />
      <PopularDrivingSchools />
      <HowItWorksSection />
      <DrivingSchoolList />
      <LicenseClassesSection />
      <FAQSection />
      <CTASection />
      <Footer />
    </main>
  );
}

