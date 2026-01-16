import { ThreeBackground } from "@/components/ThreeBackground";
import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/Hero";

import AboutMeSection  from "@/components/AboutMeSection";
import { TechStack } from "@/components/TechStack";
import { Projects } from "@/components/Projects";
import Testimonials from "@/components/Testimonial";
import { Contact } from "@/components/Contact";
import ChatBot from "@/components/ChatBot";
import  Footer  from "@/components/Footer";
import ExperienceSection from "@/components/Experience";
const Index = () => {
  return (
    <div className="relative">
      <ThreeBackground />
      <Navigation />
      <main>
        <Hero />
        <AboutMeSection  />
        <ExperienceSection/>
        <TechStack />
        <Projects />
        <Testimonials />
        <Contact />
        <ChatBot />
      </main>
      <Footer />
    </div>
  );
};

export default Index;



