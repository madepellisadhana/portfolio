import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";

export const Hero = () => {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-6 text-center">
      <div className="mb-8 animate-fade-in">
        <div className="relative inline-block">

          {/* IMAGE — enlarged + HD */}
          {/* The 'overflow-hidden' and 'rounded-full' on this div create the circular mask */}
          <div className="w-40 h-40 rounded-full border-2 border-primary glow-strong flex items-center justify-center mb-8 mx-auto overflow-hidden animate-glow">
            <img
              src="/sadhana-photo.jpeg" 
              alt="Sadhana"
              // 'rounded-full' was removed from here to fix the oval shape
              className="w-full h-full object-cover"
              loading="eager"
              decoding="sync"
            />
          </div>

          <div className="absolute inset-0 rounded-full border-2 border-primary/30 animate-[ping_3s_ease-in-out_infinite]" />
        </div>
      </div>

      <h1 className="text-6xl md:text-8xl font-extrabold mb-6 tracking-tighter">
        SADHANA MADEPELLI
      </h1>

      <p className="text-3xl md:text-4xl text-primary font-light mb-4 tracking-wide">
        Strategic Data Analyst
      </p>

      <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mb-12 leading-relaxed">
        Driving transformative business outcomes through advanced data analytics and machine learning.
      </p>

      <div className="flex flex-col sm:flex-row gap-4">
        <Button
          size="lg"
          className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-8 py-6 text-lg glow"
          onClick={() => scrollToSection('projects')}
        >
          View Projects
        </Button>
        <Button
          size="lg"
          variant="outline"
          className="border-primary text-primary hover:bg-primary/10 font-semibold px-8 py-6 text-lg"
          onClick={() => scrollToSection('contact')}
        >
          Get in Touch
        </Button>
      </div>

      <button
        onClick={() => scrollToSection('about')}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce text-primary"
      >
        <ChevronDown className="w-8 h-8" />
      </button>
    </section>
  );
};