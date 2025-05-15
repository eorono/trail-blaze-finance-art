
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import GlobalReachSection from "@/components/GlobalReachSection";
import ApproachSection from "@/components/ApproachSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import { GeometricBackground } from "@/components/GeometricElements";

const Index = () => {
  return (
    <div className="min-h-screen">
      <GeometricBackground />
      <Header />
      <main>
        <HeroSection />
        <ServicesSection />
        <GlobalReachSection />
        <ApproachSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
