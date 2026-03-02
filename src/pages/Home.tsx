import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import StatsSection from "@/components/StatsSection";
import WhyChooseHorizonSection from "@/components/WhyChooseHorizonSection";
import SolutionsJourneySection from "@/components/SolutionsJourneySection";
import HowItWorksSection from "@/components/HowItWorksSection";
import IndustriesSection from "@/components/IndustriesSection";
import Footer from "@/components/Footer";

const Home = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <StatsSection />
      <WhyChooseHorizonSection />
      <SolutionsJourneySection />
      <HowItWorksSection />
      <IndustriesSection />
      <Footer />
    </div>
  );
};

export default Home;
