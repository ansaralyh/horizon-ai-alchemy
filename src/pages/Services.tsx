import Navbar from "@/components/Navbar";
import ServicesSection from "@/components/ServicesSection";
import TechStack from "@/components/TechStack";
import Footer from "@/components/Footer";

const Services = () => {
  return (
    <div className="min-h-screen bg-background w-full overflow-x-hidden">
      <Navbar />
      <div className="pt-20">
        <ServicesSection />
        <TechStack />
      </div>
      <Footer />
    </div>
  );
};

export default Services;
