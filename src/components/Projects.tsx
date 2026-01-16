import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, BarChart2, ShoppingBag } from 'lucide-react';

// --- Data Configuration ---
const projectsData = [
  {
    id: 1,
    title: "Blooms Canada",
    description: "Blooms Canada offers exquisite floral art, meticulously handcrafted by specialists using the finest blooms. Each piece is a carefully curated masterpiece.",
    tags: ["#E-Commerce", "#Web Design", "#Floral Art"],
    image: "/project-1.png",
    link: "https://bloomsca.ca/",
    type: "web"
  },
  {
    id: 2,
    title: "Email Marketing Analysis",
    description: "A comprehensive dashboard analyzing campaign performance. Tracks KPIs like CTR, Conversion Rate, and Bounce Rate, with deep dives into device usage, regional performance, and top-performing campaigns.",
    tags: ["#PowerBI", "#MarketingAnalytics", "#DataVisualization"],
    image: "/project-2.png",
    link: "https://app.fabric.microsoft.com/view?r=eyJrIjoiMGM0NmY1ZWUtMmYxNi00NjFkLWFjZWQtOWY3ZTFhMmZjNjk3IiwidCI6IjE3NTFkN2EwLWY4OGYtNGQzNS1iNTcxLTYwZTZhMGE0MTgxOSJ9",
    type: "data"
  },
  {
    id: 3,
    title: "Koala Furniture (AU)",
    description: "Implemented a sleek, user-first experience for Australia’s leading sustainable furniture brand. Integrated smart navigation, fast product filtering, and rich visuals through the Prestige theme.",
    tags: ["#Shopify", "#Liquid", "#Prestige Theme"],
    image: "/project-3.png",
    link: "https://au.koala.com/",
    type: "web"
  },
  {
    id: 4,
    title: "SockSoho",
    description: "Crafted a modern, high-performance Shopify storefront for India’s premium sock brand. Focused on seamless mobile optimization and minimalist UX to boost conversion and manage dynamic product swatches.",
    tags: ["#Shopify", "#UX/UI", "#Mobile First"],
    image: "/project-4.png",
    link: "https://socksoho.com/",
    type: "web"
  },
  {
    id: 5,
    title: "Credit Card Analytics",
    description: "An end-to-end Power BI report covering transaction analysis, customer insights, and executive overviews. Features interactive slicers, drill-throughs, and key metrics like revenue and delinquency rates.",
    tags: ["#PowerBI", "#DataAnalytics", "#FinancialAnalysis"],
    image: "/project-5.png",
    link: "https://lnkd.in/gnU_mcgj",
    type: "data"
  },
  {
    id: 6,
    title: "Superstore Performance",
    description: "An insight-driven Power BI dashboard simulating executive reporting. Analyzes sales trends, product profitability, and regional performance to identify growth drivers and profit leakages.",
    tags: ["#PowerBI", "#DataAnalytics", "#BusinessIntelligence"],
    image: "/project-6.png",
    link: "https://lnkd.in/dE74B2g3",
    type: "data"
  }
];

// --- Components ---

const ProjectCard = ({ project, index }: { project: typeof projectsData[0], index: number }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="relative group h-full" /* Added h-full here */
    >
      <div className="relative bg-gradient-to-br from-gray-900/90 to-black/95 p-6 rounded-3xl w-full border border-gray-800/50 hover:border-cyan-500/30 transition-all duration-500 backdrop-blur-sm overflow-hidden h-full flex flex-col"> 
        {/* Added h-full and flex-col above to force card to fill height */}
        
        {/* Card Glow Effects */}
        <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 opacity-0 group-hover:opacity-20 transition-opacity duration-500 blur-xl pointer-events-none" />
        <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-cyan-500/5 via-purple-500/5 to-pink-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

        {/* Image Container */}
        <div className="relative w-full h-[250px] overflow-hidden rounded-2xl mb-6 flex-shrink-0">
          <img 
            src={project.image} 
            alt={project.title} 
            className="w-full h-full object-cover rounded-2xl transition-all duration-700 group-hover:scale-110" 
          />
          
          {/* Image Overlay Gradients */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-500" />
          
          {/* Action Buttons (Slide up on hover) */}
          <div className="absolute inset-0 flex justify-center items-center gap-3 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0">
            <a 
              href={project.link} 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-gradient-to-r from-cyan-500 to-blue-600 px-6 py-2.5 rounded-xl flex items-center gap-2 cursor-pointer shadow-lg hover:shadow-cyan-500/30 transition-transform duration-300 hover:scale-105 text-white font-medium text-sm"
            >
              <ExternalLink size={16} />
              {project.type === 'data' ? 'View Dashboard' : 'Visit Website'}
            </a>
          </div>
        </div>

        {/* Content Section */}
        <div className="space-y-4 relative z-10 flex-grow flex flex-col">
          <div className="flex justify-between items-center">
            <h3 className="text-white font-bold text-2xl bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              {project.title}
            </h3>
            {/* Icon based on type */}
            {project.type === 'data' ? 
              <BarChart2 className="text-purple-400 opacity-50 flex-shrink-0" size={20} /> : 
              <ShoppingBag className="text-cyan-400 opacity-50 flex-shrink-0" size={20} />
            }
          </div>

          {/* Description Box (Slides up) */}
          <div className="opacity-0 h-0 group-hover:h-auto group-hover:opacity-100 transition-all duration-500 ease-out overflow-hidden">
            <div className="bg-black/40 backdrop-blur-sm rounded-lg p-3 border border-cyan-500/20 shadow-lg shadow-cyan-500/10 mb-4">
              <p className="text-gray-300 text-[15px] leading-relaxed">
                {project.description}
              </p>
            </div>
          </div>

          {/* Tags - Pushed to bottom with mt-auto if description isn't visible, but flex-grow on content helps balance it */}
          <div className="flex flex-wrap gap-2 pt-2 mt-auto">
            {project.tags.map((tag, i) => (
              <span 
                key={i} 
                className={`px-3 py-1.5 text-xs font-semibold rounded-full bg-gray-800/60 backdrop-blur-sm border border-gray-700/50 hover:border-cyan-400/50 transition-all duration-300 
                  ${i === 0 ? 'text-blue-400' : i === 1 ? 'text-cyan-400' : 'text-pink-400'}`}
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export const Projects = () => {
  return (

    <section id="projects" className="py-24 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-600/20 rounded-full blur-[128px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-cyan-600/20 rounded-full blur-[128px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* 🔹 HEADER UPDATED: Centered & Gradient Underline Style */}
        <div className="mb-20 text-center">
          <p className="text-sm uppercase tracking-[4px] text-cyan-400 font-light mb-2">
            MY WORK
          </p>
          <h2 className="text-white font-black md:text-6xl sm:text-5xl xs:text-4xl text-3xl relative inline-block">
            Featured Projects
            <span className="absolute -bottom-2 left-0 h-1 bg-gradient-to-r from-purple-600 via-cyan-500 to-transparent w-full" />
          </h2>
          <p className="text-xl text-neutral-400 mt-6 max-w-3xl mx-auto">
            Explore my collection of <span className="text-cyan-400 font-semibold">Web Development</span> and <span className="text-purple-400 font-semibold">Data Analytics</span> projects — showcasing innovative design and intelligent insights.
          </p>
        </div>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 justify-items-center gap-10">
          {projectsData.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>

      </div>
    </section>
  );
};