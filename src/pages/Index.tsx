import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import TrustSection from "@/components/TrustSection";
import WhySmartHomeSection from "@/components/WhySmartHomeSection";
import ProductsSection from "@/components/ProductsSection";
import FeaturesSection from "@/components/FeaturesSection";
import AloCurtainSection from "@/components/AloCurtainSection";
import PDLCFilmSection from "@/components/PDLCFilmSection";
import SmartSwitchSection from "@/components/SmartSwitchSection";
import ProductsInActionSection from "@/components/ProductsInActionSection";
import EuropeanStandardSection from "@/components/EuropeanStandardSection";
import BeforeAfterSection from "@/components/BeforeAfterSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import SmartHomeConfigurator from "@/components/SmartHomeConfigurator";
import OurWorkSection from "@/components/OurWorkSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import FAQSection from "@/components/FAQSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <TrustSection />
      <ProductsSection />
      <FeaturesSection />
      <AloCurtainSection />
      <PDLCFilmSection />
      <SmartSwitchSection />
      <ProductsInActionSection />
      <WhySmartHomeSection />
      <EuropeanStandardSection />
      <BeforeAfterSection />
      <HowItWorksSection />
      <SmartHomeConfigurator />
      <OurWorkSection />
      <TestimonialsSection />
      <FAQSection />
      <CTASection />
      <Footer />
    </div>
  );
};

export default Index;
