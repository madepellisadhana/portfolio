import React from 'react';

// Updated technologies array with a 'color' property for the glow
const technologies = [
  // 🔹 TOP ROW TOOLS WITH WORKING ICONS
  { 
    name: "R", 
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/r/r-original.svg", 
    category: "Statistical Computing", 
    color: "#276DC3" 
  },
  { 
    name: "Tableau", 
    icon: "https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/tableau.svg", 
    category: "Data Visualization", 
    color: "#E97627" 
  },
  { 
    name: "Power BI", 
    icon: "https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/powerbi.svg", 
    category: "Business Intelligence", 
    color: "#F2C811" 
  },
  { 
    name: "Excel", 
    icon: "https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/microsoftexcel.svg", 
    category: "Data Analysis & Reporting", 
    color: "#217346" 
  },
  { 
    name: "AWS", 
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg", 
    category: "Cloud Infrastructure", 
    color: "#FF9900" 
  },
  { 
    name: "Google Analytics", 
    icon: "https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/googleanalytics.svg", 
    category: "Web Analytics", 
    color: "#E37400" 
  },

  // 🔹 EXISTING STACK
  { name: "HTML5", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg", category: "Semantic Structure", color: "#E34F26" },
  { name: "CSS3", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg", category: "Visual Design", color: "#1572B6" },
  { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg", category: "Core Logic", color: "#F7DF1E" },
  { name: "TypeScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg", category: "Type Safety", color: "#3178C6" },
  { name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg", category: "UI Architecture", color: "#61DAFB" },
  { name: "Next.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg", category: "Full-Stack Framework", color: "#FFFFFF" },
  { name: "Tailwind CSS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg", category: "Utility-First Styling", color: "#06B6D4" },
  { name: "Python", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg", category: "AI & Automation", color: "#3776AB" },
  { name: "PostgreSQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg", category: "Database", color: "#4169E1" },
  { name: "MongoDB", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg", category: "NoSQL Database", color: "#47A248" },
  { name: "Git", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg", category: "Version Control", color: "#F05032" },
  { name: "Docker", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg", category: "Containerization", color: "#2496ED" },
];

export const TechStack = () => {

  const getIconStyle = (tech) => {
    if (tech.name === 'Next.js') {
      return { filter: 'invert(1)' };
    }
    return {};
  }

  return (
    <section id="tech-stack" className="min-h-screen flex items-center justify-center px-6 py-20 text-white">
      <div className="max-w-7xl w-full">
        
        {/* 🔹 HEADER UPDATED:
            Used the ExperienceSection style (Label + Gradient Underline) 
            but applied 'text-center' and 'mx-auto' to keep it centered.
        */}
        <div className="mb-16 text-center">
          <p className="text-sm uppercase tracking-[4px] text-cyan-400 font-light mb-2">
            SKILLS & TOOLS
          </p>
          <h2 className="text-white font-black md:text-6xl sm:text-5xl xs:text-4xl text-3xl relative inline-block">
            My AI & Tech Universe
            <span className="absolute -bottom-2 left-0 h-1 bg-gradient-to-r from-purple-600 via-cyan-500 to-transparent w-full" />
          </h2>
          <p className="text-xl text-neutral-400 mt-6 max-w-3xl mx-auto">
            Building the future with intelligent automation, design precision, and next-generation technologies.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-6">
          {technologies.map((tech, index) => (
            <div
              key={index}
              className="group relative bg-neutral-900/60 backdrop-blur-sm border border-neutral-800 rounded-2xl p-6
                        hover:border-[var(--tech-color)]/60 
                        hover:shadow-2xl hover:shadow-[var(--tech-color)]/25
                        hover:scale-[1.03]
                        transition-all duration-300 flex flex-col items-center text-center
                        isolate overflow-hidden"
              style={{ '--tech-color': tech.color }}
            >

              {/* Tooltip */}
              <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-3 px-3 py-2 bg-neutral-800/90 backdrop-blur-sm rounded-lg flex items-center gap-2
                              opacity-0 group-hover:opacity-100 group-hover:-translate-y-2
                              transition-all duration-300 pointer-events-none z-10">
                
                {tech.icon.includes('simple-icons') ? (
                  <div
                    className="w-5 h-5 flex-shrink-0"
                    style={{
                      backgroundColor: tech.color,
                      maskImage: `url(${tech.icon})`,
                      maskSize: 'contain',
                      maskPosition: 'center',
                      maskRepeat: 'no-repeat'
                    }}
                  ></div>
                ) : (
                  <img 
                    src={tech.icon} 
                    alt={tech.name} 
                    className="w-5 h-5" 
                    style={getIconStyle(tech)} 
                  />
                )}

                <span className="text-sm font-semibold text-white whitespace-nowrap">{tech.name}</span>
                <div className="absolute left-1/2 -translate-x-1/2 top-full w-0 h-0 border-x-4 border-x-transparent border-t-4 border-t-neutral-800/90"></div>
              </div>

              {/* Corner Brackets */}
              <div className="absolute top-4 left-4 w-4 h-4 border-t-2 border-l-2 border-neutral-700/80 group-hover:border-[var(--tech-color)]/80 transition-colors duration-300"></div>
              <div className="absolute top-4 right-4 w-4 h-4 border-t-2 border-r-2 border-neutral-700/80 group-hover:border-[var(--tech-color)]/80 transition-colors duration-300"></div>
              <div className="absolute bottom-4 left-4 w-4 h-4 border-b-2 border-l-2 border-neutral-700/80 group-hover:border-[var(--tech-color)]/80 transition-colors duration-300"></div>
              <div className="absolute bottom-4 right-4 w-4 h-4 border-b-2 border-r-2 border-neutral-700/80 group-hover:border-[var(--tech-color)]/80 transition-colors duration-300"></div>

              {/* Card background fill */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-20"
                style={{
                  background: `radial-gradient(circle at center, var(--tech-color) 0%, transparent 70%)`,
                  opacity: 0.15,
                }}
              ></div>

              {/* ICON + RIPPLE */}
              <div className="w-20 h-20 mb-5 flex items-center justify-center relative isolate transition-transform duration-300 animate-on-hover">
                
                {/* Ripple Animation */}
                <div className="ripple-effect absolute inset-0 rounded-full border-2 border-[var(--tech-color)]"></div>

                {tech.icon.includes('simple-icons') ? (
                  // Render simple-icons as a mask
                  <div 
                    className="w-full h-full"
                    style={{
                      backgroundColor: tech.color,
                      maskImage: `url(${tech.icon})`,
                      maskSize: 'contain',
                      maskPosition: 'center',
                      maskRepeat: 'no-repeat'
                    }}
                  ></div>
                ) : (
                  // Render devicons as a normal img
                  <img 
                    src={tech.icon} 
                    alt={tech.name}
                    className="w-full h-full object-contain"
                    style={getIconStyle(tech)}
                  />
                )}
              </div>

              <h3 className="text-lg font-bold text-neutral-100 mb-1">{tech.name}</h3>
              <p className="text-xs text-neutral-400">{tech.category}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Animations */}
      <style>{`
        @keyframes jiggle {
          0%, 100% {
            transform: rotate(-2deg) scale(1.1) translateY(-4px);
          }
          50% {
            transform: rotate(2deg) scale(1.1) translateY(-4px);
          }
        }

        .animate-on-hover {
          transition: transform 0.2s ease-out;
        }

        .group:hover .animate-on-hover {
          animation: jiggle 0.3s ease-in-out;
          transform: scale(1.1) translateY(-4px);
        }

        @keyframes ripple-out {
          from {
            transform: scale(0.8);
            opacity: 0.7;
          }
          to {
            transform: scale(2.5);
            opacity: 0;
          }
        }

        .ripple-effect {
          transform: scale(0.8);
          opacity: 0;
        }

        .group:hover .ripple-effect {
          animation: ripple-out 0.6s ease-out;
        }
      `}</style>
    </section>
  );
};

export default TechStack;