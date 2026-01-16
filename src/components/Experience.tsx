import React from "react";
import { Briefcase, Calendar, MapPin } from "lucide-react";

const experiences = [
  {
    role: "UI/UX Developer",
    company: "Vosyn Inc.",
    duration: "Jul 2024 — Nov 2024",
    location: "Etobicoke, ON",
    skills: ["Figma", "WordPress", "Avada Builder", "UI/UX", "Agile"],
    bullets: [
      "Collaborated with product and design teams to convert client requirements into user-focused web pages. Built responsive prototypes in Figma and implemented them using WordPress Avada Builder.",
      "Designed and optimized investor and crowdfunding pages with interactive features. Integrated calculator, sliders, timers, and media elements to improve engagement.",
      "Analyzed user behaviour and performance metrics to refine UI layouts. Implemented data-driven improvements for better accessibility and responsiveness.",
      "Communicated design ideas clearly across technical and non-technical teams. Aligned expectations on layouts, animations, and responsive grid structures.",
      "Managed multiple UI/UX tasks in a fast-paced Agile environment. Balanced priorities, incorporated feedback, and supported portal launch documentation.",
    ],
  },
  {
    role: "Associate Engineer",
    company: "Harman Connected Services",
    duration: "Mar 2022 — Jul 2023",
    location: "Bangalore, IND",
    skills: ["Java", "Spring Boot", "RESTful APIs", "Accessibility", "Backend"],
    bullets: [
      "Developed an accessibility-focused mailbox application using Java and Spring Boot, enabling visually impaired users to hear emails and access auto-categorized content.",
      "Built backend logic and RESTful APIs to translate business requirements into functional assistive-technology features.",
      "Collaborated with Agile teams to deliver scalable, inclusive solutions and incorporate cross-team feedback.",
      "Took ownership of technical challenges, resolving issues proactively to support smooth project delivery.",
      "Communicated updates clearly across teams and applied customer-focused insights to improve usability and accessibility.",
    ],
  },
];

export default function ExperienceSection() {
  return (
    <section id="experience" className="py-16 relative z-10">
      <div className="max-w-5xl mx-auto w-full px-4">
        
        {/* Updated Header Style matching About Section */}
        <div className="mb-16">
          <p className="text-sm uppercase tracking-[4px] text-cyan-400 font-light mb-2">
            CAREER PATH
          </p>
          <h2 className="text-white font-black md:text-6xl sm:text-5xl xs:text-4xl text-3xl relative inline-block">
            Experience
            <span className="absolute -bottom-2 left-0 h-1 bg-gradient-to-r from-purple-600 via-cyan-500 to-transparent w-full" />
          </h2>
        </div>

        <div className="relative">
          {/* Vertical timeline line */}
          <div className="absolute left-8 top-0 bottom-0 w-px bg-primary/30 hidden md:block"></div>

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div key={index} className="relative">
                {/* Bullet */}
                <div className="absolute left-8 -translate-x-1/2 w-4 h-4 rounded-full bg-primary glow-cyan hidden md:block"></div>

                {/* Card */}
                <div className="md:ml-20 bg-gray-900/90 rounded-xl p-6 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/50 hover:glow-cyan border border-white/5">
                  <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                    <div>
                      <h3 className="font-serif text-xl font-bold text-white mb-1">
                        {exp.role}
                      </h3>
                      <p className="text-primary font-semibold flex items-center gap-2">
                        <Briefcase size={16} /> {exp.company}
                      </p>
                    </div>
                    <div className="text-sm text-gray-400 space-y-1">
                      <p className="flex items-center gap-2">
                        <Calendar size={14} /> {exp.duration}
                      </p>
                      <p className="flex items-center gap-2">
                        <MapPin size={14} /> {exp.location}
                      </p>
                    </div>
                  </div>

                  {/* Skills Tags */}
                  {exp.skills.length > 0 && (
                    <div className="flex flex-wrap gap-2 mb-4">
                      {exp.skills.map((skill, idx) => (
                        <span
                          key={idx}
                          className="px-3 py-1 text-xs font-medium rounded-full bg-primary/10 text-primary border border-primary/30"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  )}

                  {/* Experience bullets */}
                  <ul className="space-y-2">
                    {exp.bullets.map((bullet, idx) => (
                      <li
                        key={idx}
                        className="text-sm text-gray-400 flex items-start gap-2"
                      >
                        <span className="text-primary mt-1">▹</span>
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}