import Header from '../components/Header';
import HeroSection from '../components/HeroSection';
import CertificationsBar from '../components/CertificationsBar';
import AboutSection from '../components/AboutSection';
import ServicesSection from '../components/ServicesSection';
import ProcessSection from '../components/ProcessSection';
import TestimonialsSection from '../components/TestimonialsSection';
import GiftSection from '../components/GiftSection';
import ContactSection from '../components/ContactSection';
import Footer from '../components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <CertificationsBar />
        <AboutSection />
        <ServicesSection />
        <ProcessSection />
        <TestimonialsSection />
        <GiftSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
