export const About = () => {
  return (
    <section id="about" className="min-h-screen flex items-center justify-center px-6 py-20">
      <div className="max-w-4xl w-full">
        <h2 className="text-5xl md:text-6xl font-bold mb-8 text-gradient">About / Vision</h2>
        
        <div className="bg-card/50 backdrop-blur-sm border border-primary/20 rounded-2xl p-8 md:p-12 glow">
          <p className="text-xl md:text-2xl text-foreground/90 leading-relaxed mb-6">
            Strategic Data Analyst with a track record of driving transformative business outcomes through advanced data analytics and machine learning. Spearheaded initiatives that increased forecasting accuracy by 30%, resulting in $500,000 in cost savings and a 25% boost in operational efficiency.
          </p>
          
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-8">
            Maintained a perfect 5/5 customer satisfaction rating, directly enhancing client retention and contributing to a 20% revenue increase. Renowned for delivering actionable insights through rigorous statistical analysis, excelling in translating complex data into strategic recommendations that fuel growth and optimize business performance.
          </p>

          <blockquote className="border-l-4 border-primary pl-6 py-4 italic text-lg text-foreground/80">
            "Data tells a story. Analytics reveals the truth. The best insights drive action."
          </blockquote>
        </div>
      </div>
    </section>
  );
};
