import ServicesSection from '../components/sections/ServicesSection';
import ModalitiesSection from '../components/sections/ModalitiesSection';
import IncludesSection from '../components/sections/IncludesSection';
import FAQSection from '../components/sections/FAQSection';
import PageHero from '../components/ui-elements/PageHero';

const Services = () => {
  return (
    <>
      <PageHero 
        title="Servicios de Coaching"
        subtitle="Programas personalizados que combinan Coaching, PNL e Inteligencia Emocional para tu crecimiento integral"
        backgroundVariant="primary"
      />

      <ServicesSection />
      <ModalitiesSection />
      <IncludesSection />
      <FAQSection />
    </>
  );
};

export default Services;