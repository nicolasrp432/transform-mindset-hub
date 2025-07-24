import AboutMeSection from '../components/AboutMeSection';
import CertificationsSection from '../components/CertificationsSection';
import PhilosophySection from '../components/PhilosophySection';

const AboutMe = () => {
  return (
    <>
      {/* Hero de la página */}
      <section className="pt-32 pb-20 bg-gradient-primary text-primary-foreground">
        <div className="container-custom">
          <div className="content-center mb-20">
            <h1 className="title-hero text-primary-foreground mb-10 title-gradient text-shadow-soft">
              Conoce a Ainara
            </h1>
            <p className="text-body-large opacity-90 content-balanced text-sophisticated text-shadow-soft">
              Coach certificada en PNL e Inteligencia Emocional, especializada en transformación consciente y liderazgo auténtico
            </p>
          </div>
        </div>
      </section>

      <AboutMeSection />
      <CertificationsSection />
      <PhilosophySection />
    </>
  );
};

export default AboutMe;