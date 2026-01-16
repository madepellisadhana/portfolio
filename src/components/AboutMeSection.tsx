import React, { useState, useEffect } from "react";

// AboutMeSection - Pixel-matching implementation using Tailwind CSS
export default function AboutMeSection(): JSX.Element {
  const [activeTab, setActiveTab] = useState<"overview" | "skills" | "education">("overview");

  useEffect(() => {
    // Reserved for future animation hooks if needed
  }, []);

  const stats = [
    { value: "5+", label: "Data & Analytics Projects" },
    { value: "1+", label: "Year Experience" },
    { value: "15+", label: "Technologies" },
    { value: "100%", label: "Remote Ready" },
  ];

  const overviewParagraph = `I’m a Data Analyst & BI Professional with experience transforming complex data into actionable insights using SQL, Power BI, Python, and cloud data platforms. I specialize in data modeling, dashboarding, and automation to support business decision-making and performance optimization.`;

  const education = [
    {
      year: "2024 – 2025",
      title: "Graduate Certificate in Information Technology & Solutions",
      place: "Humber College, Etobicoke, ON, Canada",
      details: "Specialized in Data Analytics, Database Management, and Business Intelligence. Gained hands-on proficiency in SQL, Python, and designing scalable cloud data solutions.",
      accent: "🎓",
    },
    {
      year: "2019 – 2022",
      title: "Bachelor of Technology (B.Tech) in Computer Science & Engineering",
      place: "KG Reddy College of Engineering & Technology, Hyderabad, India",
      details: "Core coursework in Database Management Systems (DBMS), Applied Mathematics, and Data Structures. Developed a strong technical foundation for programming and analytical problem-solving.",
      accent: "💻",
    },
    {
      year: "2016 – 2019",
      title: "Diploma in Electrical & Electronics Engineering",
      place: "Government Polytechnic, Masab Tank, Hyderabad, India",
      details: "Studied Circuit Analysis, Digital Electronics, and Power Systems. Developed rigorous analytical skills through system modeling and troubleshooting complex electrical networks.",
      accent: "🎖️",
    },
  ];

  return (
    <section id="about"  className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      {/* Header */}
      <div className="mb-12">
        <p className="text-sm uppercase tracking-[4px] text-cyan-400 font-light mb-2">INTRODUCTION</p>
        <h2 className="text-white font-black md:text-6xl sm:text-5xl xs:text-4xl text-3xl relative inline-block">
          About Me
          <span className="absolute -bottom-2 left-0 h-1 bg-gradient-to-r from-purple-600 via-cyan-500 to-transparent w-full" />
        </h2>
      </div>

      {/* Tabs */}
      <div className="flex flex-wrap gap-4 mb-8" role="tablist" aria-label="About tabs">
        {([
          { key: "overview", icon: "👁️", label: "Overview" },
          { key: "skills", icon: "⚡", label: "Skills" },
          { key: "education", icon: "🎓", label: "Education" },
        ] as const).map((t) => {
          const isActive = activeTab === (t.key as any);
          return (
            <button
              key={t.key}
              role="tab"
              aria-selected={isActive}
              onClick={() => setActiveTab(t.key as any)}
              className={`relative px-6 py-3 rounded-xl font-medium text-sm transition-all duration-300 overflow-hidden group ${
                isActive ? "text-white" : "text-gray-400 hover:text-white"
              }`}
            >
              <div
                className={`absolute inset-0 transition-opacity duration-300 ${
                  isActive ? "opacity-100" : "opacity-0 group-hover:opacity-50"
                }`}
                aria-hidden
              >
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-cyan-500" />
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-cyan-500 blur-xl opacity-50" />
              </div>

              <div
                className={`absolute inset-0 rounded-xl border transition-all duration-300 ${
                  isActive ? "border-purple-500" : "border-gray-700 group-hover:border-purple-500/50"
                }`}
                aria-hidden
              />

              <span className="relative flex items-center gap-2">
                <span className="text-lg">{t.icon}</span>
                {t.label}
              </span>
            </button>
          );
        })}
      </div>

      {/* Content area */}
      <div className="relative">
        {/* OVERVIEW */}
        {activeTab === "overview" && (
          <div className="space-y-8">
            <div className="relative p-8 rounded-2xl bg-black/80 backdrop-blur-xl border border-purple-500/20 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-cyan-500/5 pointer-events-none" />

              <p className="text-gray-300 text-lg leading-relaxed mb-6">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400 font-bold">
                  Madepelli Sadhana
                </span>{" "}
                - {overviewParagraph}
              </p>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                {stats.map((s) => (
                  <div key={s.label} className="relative group">
                    <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-600 to-cyan-500 rounded-2xl blur opacity-40 group-hover:opacity-100 transition duration-300" />
                    <div className="relative text-center p-6 bg-black/80 backdrop-blur-xl rounded-2xl border border-purple-500/20">
                      <div className="text-3xl font-black bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
                        {s.value}
                      </div>
                      <div className="text-xs text-gray-400 mt-2 tracking-wide">{s.label}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* SKILLS */}
        {activeTab === "skills" && (
          <div className="flex flex-col lg:flex-row gap-6">
            {/* Technical Arsenal - left, 60% width */}
            <div className="flex-1 lg:basis-3/5 relative p-8 rounded-2xl bg-black/80 backdrop-blur-xl border border-purple-500/20">
              <h3 className="text-white text-2xl font-bold mb-4">Data Stack</h3>
              <p className="text-gray-300 text-sm leading-relaxed">
              I work across the analytics lifecycle — from data extraction and modeling to visualization, automation, and insight delivery.
              </p>

              <ul className="mt-6 space-y-4 text-gray-300">
                {[
                  { name: "SQL", level: 95 },
                  { name: "Power BI", level: 95 },
                  { name: "Python", level: 95 },
                  { name: "Excel", level: 94 },
                  { name: "Cloud Data Platforms", level: 85 },
                  { name: "Data Modeling & Optimization", level: 80 },
                  { name: "MongoDB", level: 75 },
                ].map((tech) => (
                  <li key={tech.name}>
                    <div className="flex justify-between mb-1">
                      <span>{tech.name}</span>
                      <span className="text-xs text-gray-400">{tech.level}%</span>
                    </div>
                    <div className="w-full h-2 bg-gray-700 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-purple-500 to-cyan-500"
                        style={{ width: `${tech.level}%` }}
                      />
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            {/* AI & Automation - right, 40% width */}
            <div className="flex-1 lg:basis-2/5 relative p-6 rounded-2xl bg-black/80 backdrop-blur-xl border border-purple-500/20">
              <h4 className="text-white font-bold mb-4">Analytics, Automation & Insights</h4>
              <div className="space-y-4">
                {[
                  { icon: "📊", title: "Business Intelligence", desc: "Data modeling, KPI design, executive dashboards, and self-service analytics." },
                  { icon: "🧮", title: "Advanced Analytics", desc: "Data cleaning, exploratory analysis, segmentation, trends, and forecasting using SQL & Python." },
                  { icon: "⚙️", title: "Automation & Reporting", desc: "Automated data refreshes, scheduled reports, Power Automate flows, and workflow optimization." },
                ].map((f) => (
                  <div
                    key={f.title}
                    className="p-4 bg-black/70 rounded-xl border border-purple-500/10 group hover:bg-gradient-to-r hover:from-purple-600 hover:to-cyan-500 transition duration-300"
                  >
                    <div className="flex items-start gap-4">
                      <div className="text-3xl">{f.icon}</div>
                      <div>
                        <div className="text-white font-semibold">{f.title}</div>
                        <div className="text-gray-400 text-sm">{f.desc}</div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* EDUCATION */}
        {activeTab === "education" && (
          <div className="space-y-8">
            <div className="grid grid-cols-1 gap-6">
              {education.map((e, idx) => (
                <div key={e.title} className="relative group">
                  <div className="absolute -left-6 top-4 w-12 h-12 rounded-2xl bg-gradient-to-br from-purple-600 to-cyan-500 flex items-center justify-center text-xl">
                    <span>{e.accent}</span>
                  </div>

                  <div className="ml-8 p-6 bg-black/80 backdrop-blur-xl rounded-2xl border border-purple-500/20">
                    <div className="flex items-start gap-4">
                      <div className="flex-1">
                        <h3 className="text-white font-bold text-lg">{e.title}</h3>
                        <p className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400 text-sm font-semibold mt-1">
                          {e.place}
                        </p>
                        <p className="text-gray-400 text-xs mt-2">{e.year}</p>
                        <p className="text-gray-300 text-sm mt-3">{e.details}</p>
                      </div>

                      <div className="flex-shrink-0 text-sm text-gray-400">{idx + 1}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
