import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import FeesSection from "@/components/FeesSection";
import QualificationsSection from "@/components/QualificationsSection";
import PrivacySection from "@/components/PrivacySection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen">
      <Header />
      <HeroSection />
      <AboutSection />
      <FeesSection />
      <QualificationsSection />
      <PrivacySection />
      <ContactSection />
      <Footer />
    </main>
  );
};

export default Index;