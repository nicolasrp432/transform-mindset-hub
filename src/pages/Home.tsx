import HeroSection from '../components/sections/HeroSection';
import AssessmentSection from '../components/sections/AssessmentSection';
import HowItWorksSection from '../components/sections/HowItWorksSection';
import CTASection from '../components/sections/CTASection';
import PageTransition from '@/components/ui/page-transition';

const Home = () => {
  return (
    <PageTransition>
      <>
        <HeroSection />
        <AssessmentSection />
        <HowItWorksSection />
        <CTASection />
      </>
    </PageTransition>
  );
};

export default Home;