import Navbar from "@/components/Navbar";
import HowItWorks from "@/components/HowItWorks";
import Footer from "@/components/Footer";

const Projects = () => {

  return (
    <div className="min-h-screen bg-background w-full overflow-x-hidden">
      <Navbar />
      <div className="pt-20">
        <HowItWorks />
      </div>

      <Footer />
    </div>
  );
};

export default Projects;
