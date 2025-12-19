import { Navbar } from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import InfoSection from "@/components/InfoSection";
import WhyChooseSection from "@/components/WhyChooseSection";
import FAQSection from "@/components/FAQSection";
import Footer from "@/components/Footer";
import StructuredData from "@/components/StructuredData";
import StickyMobileCTA from "@/components/StickyMobileCTA";
import CompactFormCTA from "@/components/CompactFormCTA";
import { ScrollToFormButton } from "@/components/ScrollToFormButton";
import { FormProvider } from "@/contexts/FormContext";

export default function OsloPage() {
  return (
    <FormProvider>
      <main>
        <StructuredData />
        <Navbar />
        <CompactFormCTA />
        <HeroSection 
          headline="Finn riktig trafikkskole for deg i Oslo"
          description="Vi samarbeider med trafikkskoler i hele Oslo, fyll inn skjemaet og motta tilbud fra flere forskjellige"
          formHeading="Få tilbud fra flere trafikkskoler i Oslo"
          postalCodeQuestion="Hvor i Oslo bor du?"
        />
        
        <WhyChooseSection />
        <HowItWorksSection />
        <InfoSection 
          description="Vi samarbeider med trafikkskoler i hele Oslo, fyll inn skjemaet og motta tilbud fra flere forskjellige"
        />
        <TestimonialsSection />
        <FAQSection />
        
        {/* CTA Section - Full Width */}
        <section className="w-full bg-slate-900 py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-[1300px] mx-auto text-center">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-white mb-4">
              Klar for å motta tilbud fra ulike trafikkskoler?
            </h2>
            <p className="text-base sm:text-lg text-slate-300 mb-6 max-w-2xl mx-auto">
              Fyll ut skjemaet på forsiden og få tilbud fra flere godkjente trafikkskoler i ditt område.
            </p>
            <ScrollToFormButton className="inline-flex items-center justify-center rounded-full bg-[#3bb54a] px-8 py-3.5 text-base font-semibold text-white shadow-lg shadow-[#3bb54a]/30 transition hover:bg-[#2d8f3d]">
              Gå til skjemaet
            </ScrollToFormButton>
          </div>
        </section>
        
        <Footer />
        <StickyMobileCTA />
      </main>
    </FormProvider>
  );
}

