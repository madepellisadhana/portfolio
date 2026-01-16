import React from 'react';
import { Star } from 'lucide-react';

const Testimonials = () => {
  // Total 6 reviews
  const allReviews = [
    {
      id: 1,
      name: "Saadath",
      role: "UI/UX Team Lead, VOSYN",
      img: "https://placehold.co/48x48/4A5568/E2E8F0?text=S",
      text: "Sadhana was an invaluable part of our team at VOSYN. Her contributions to our UI/UX projects were significant, and she consistently demonstrated a strong work ethic.",
      tag: "UI/UX",
      subTag: "Design System"
    },
    {
      id: 2,
      name: "Nishad Pulikkunnummal",
      role: "Program Manager, Harman",
      img: "https://placehold.co/48x48/4A5568/E2E8F0?text=NP",
      text: "Sadhana consistently delivered robust Java and Spring Boot code. Her technical logic and ability to solve complex backend issues were impressive.",
      tag: "Software Dev",
      subTag: "Java"
    },
    {
      id: 3,
      name: "Sathiyamoorthy R.",
      role: "Sr. Manager, Harman",
      img: "https://placehold.co/48x48/4A5568/E2E8F0?text=SR",
      text: "Sadhana was a dedicated Software Engineer. She handled API development and bug fixes with precision. Her commitment to code quality stands out.",
      tag: "Software Dev",
      subTag: "Backend"
    },
    {
      id: 4,
      name: "Jordan Miller",
      role: "Business Intel. Lead",
      img: "https://placehold.co/48x48/4A5568/E2E8F0?text=JM",
      text: "Sadhana optimized our reporting queries significantly. Her Python automation scripts saved the team hours of manual work every week.",
      tag: "Data Analyst",
      subTag: "Python"
    },
    {
      id: 5,
      name: "Elena K.",
      role: "Operations Manager",
      img: "https://placehold.co/48x48/4A5568/E2E8F0?text=EK",
      text: "The Power BI dashboards Sadhana created were exactly what our stakeholders needed. Clear, concise, and visually data-rich.",
      tag: "Data Analyst",
      subTag: "Power BI"
    },
    {
      id: 6,
      name: "Tariq Rahman",
      role: "Data Scientist",
      img: "https://placehold.co/48x48/4A5568/E2E8F0?text=TR",
      text: "Excellent skills in data cleaning and preparation. Sadhana handled messy datasets with ease and provided clean inputs for our models.",
      tag: "Data Analyst",
      subTag: "SQL"
    }
  ];

  // Split into two rows of 3
  const topRow = allReviews.slice(0, 3);
  const bottomRow = allReviews.slice(3, 6);

  return (
    <section className="py-20 relative overflow-hidden">
      {/* Animation Styles */}
      <style>
        {`
          @keyframes scroll-left {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
          @keyframes scroll-right {
            0% { transform: translateX(-50%); }
            100% { transform: translateX(0); }
          }
          .animate-scroll-left {
            animation: scroll-left 30s linear infinite;
          }
          .animate-scroll-right {
            animation: scroll-right 30s linear infinite;
          }
          .marquee-container:hover .animate-scroll-left,
          .marquee-container:hover .animate-scroll-right {
            animation-play-state: paused;
          }
        `}
      </style>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        
        {/* 🔹 HEADER UPDATED: Matches the unified site theme */}
        <div className="text-center mb-16">
          <p className="text-sm uppercase tracking-[4px] text-cyan-400 font-light mb-2">
            TRUSTED BY TEAMS
          </p>
          <h2 className="text-white font-black md:text-6xl sm:text-5xl xs:text-4xl text-3xl relative inline-block">
            Client Testimonials
            <span className="absolute -bottom-2 left-0 h-1 bg-gradient-to-r from-purple-600 via-cyan-500 to-transparent w-full" />
          </h2>
          <p className="text-xl text-neutral-400 mt-6 max-w-3xl mx-auto">
            Feedback from colleagues and leaders regarding my technical impact and work ethic.
          </p>
        </div>

        {/* MARQUEE CONTAINER */}
        <div className="marquee-container flex flex-col gap-8 overflow-hidden pb-10">

          {/* ROW 1: SCROLL LEFT (Saadath, Nishad, Sathiyamoorthy) */}
          <div className="relative w-full">
            <div className="flex w-max animate-scroll-left hover:cursor-grab active:cursor-grabbing">
              {/* Duplicated list 4 times to ensure seamless fill on wide screens since we only have 3 items */}
              {[...topRow, ...topRow, ...topRow, ...topRow].map((review, index) => (
                <div 
                  key={`top-${index}`} 
                  className="w-[350px] md:w-[450px] mx-4 bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-6 shadow-xl hover:bg-white/10 transition-colors flex-shrink-0"
                >
                  <div className="flex items-center gap-4 mb-4">
                    <img className="w-12 h-12 rounded-full border border-white/20 object-cover" src={review.img} alt={review.name} />
                    <div className="overflow-hidden">
                      <h4 className="font-bold text-white text-sm truncate">{review.name}</h4>
                      <p className="text-[11px] text-gray-400 leading-tight truncate">{review.role}</p>
                    </div>
                    <div className="ml-auto text-yellow-400 flex-shrink-0">
                      <div className="flex items-center gap-1">
                         <Star size={16} className="fill-yellow-400" />
                         <span className="text-white font-semibold text-sm">5.0</span>
                      </div>
                    </div>
                  </div>
                  <p className="text-gray-300 italic text-sm font-light min-h-[60px] line-clamp-3">"{review.text}"</p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    <span className="text-xs font-mono py-1 px-3 bg-cyan-400/10 text-cyan-300 rounded-full">{review.tag}</span>
                    <span className="text-xs font-mono py-1 px-3 bg-white/10 text-gray-300 rounded-full">{review.subTag}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* ROW 2: SCROLL RIGHT (Jordan, Elena, Tariq) */}
          <div className="relative w-full">
            <div className="flex w-max animate-scroll-right hover:cursor-grab active:cursor-grabbing">
              {/* Duplicated list 4 times */}
              {[...bottomRow, ...bottomRow, ...bottomRow, ...bottomRow].map((review, index) => (
                <div 
                  key={`bottom-${index}`} 
                  className="w-[350px] md:w-[450px] mx-4 bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-6 shadow-xl hover:bg-white/10 transition-colors flex-shrink-0"
                >
                  <div className="flex items-center gap-4 mb-4">
                    <img className="w-12 h-12 rounded-full border border-white/20 object-cover" src={review.img} alt={review.name} />
                    <div className="overflow-hidden">
                      <h4 className="font-bold text-white text-sm truncate">{review.name}</h4>
                      <p className="text-[11px] text-gray-400 leading-tight truncate">{review.role}</p>
                    </div>
                    <div className="ml-auto text-yellow-400 flex-shrink-0">
                      <div className="flex items-center gap-1">
                         <Star size={16} className="fill-yellow-400" />
                         <span className="text-white font-semibold text-sm">5.0</span>
                      </div>
                    </div>
                  </div>
                  <p className="text-gray-300 italic text-sm font-light min-h-[60px] line-clamp-3">"{review.text}"</p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    <span className="text-xs font-mono py-1 px-3 bg-purple-400/10 text-purple-300 rounded-full">{review.tag}</span>
                    <span className="text-xs font-mono py-1 px-3 bg-white/10 text-gray-300 rounded-full">{review.subTag}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Gradient Masks for fading edges (Applied to the container) */}
          <div className="absolute top-0 left-0 w-20 h-full bg-gradient-to-r from-[#0f172a] to-transparent z-20 pointer-events-none"></div>
          <div className="absolute top-0 right-0 w-20 h-full bg-gradient-to-l from-[#0f172a] to-transparent z-20 pointer-events-none"></div>

        </div>
      </div>
    </section>
  );
};

export default Testimonials;