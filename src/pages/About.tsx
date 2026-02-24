import Navbar from "@/components/Navbar";
import WhyChooseUs from "@/components/WhyChooseUs";
import TestimonialsSection from "@/components/TestimonialsSection";
import TrustSection from "@/components/TrustSection";
import Footer from "@/components/Footer";

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="pt-20">
        <WhyChooseUs />
        <TestimonialsSection />
        <TrustSection />
      </div>
      <Footer />
    </div>
  );
};

export default About;
