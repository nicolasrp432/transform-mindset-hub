import ServicesSection from '../components/ServicesSection';
import ModalitiesSection from '../components/ModalitiesSection';
import IncludesSection from '../components/IncludesSection';
import FAQSection from '../components/FAQSection';

const Services = () => {
  return (
    <>
      {/* Hero de la página */}
      <section className="pt-32 pb-20 bg-gradient-primary text-primary-foreground">
        <div className="container-custom">
          <div className="content-center mb-20">
            <h1 className="title-hero text-primary-foreground mb-10 title-gradient text-shadow-soft">
              Servicios de Coaching
            </h1>
            <p className="text-body-large opacity-90 content-balanced text-sophisticated text-shadow-soft">
              Programas personalizados que combinan Coaching, PNL e Inteligencia Emocional para tu crecimiento integral
            </p>
          </div>
        </div>
      </section>

      <ServicesSection />
      <ModalitiesSection />
      <IncludesSection />
      <FAQSection />
    </>
  );
};

export default Services;