import React from 'react';
import { CodeXml, Sparkles, Github, Linkedin, Mail, Palette } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="relative z-10 w-full bg-[hsl(220deg_20%_5.88%)] text-gray-300">
      {/* Max-width container */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        
        {/* Main grid layout */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">

          {/* Column 1: Brand and Subscribe */}
          <div className="lg:col-span-2">
            {/* Brand Logo and Name */}
            <div className="flex items-center gap-3 mb-6">
              <div className="relative">
                {/* Animated dot */}
                <div className="w-3 h-3 bg-cyan-500 rounded-full absolute -top-1 -right-1 animate-pulse"></div>
                {/* Logo Icon */}
                <CodeXml className="w-8 h-8 text-cyan-400" />
              </div>
              {/* Brand Name */}
              <h3 className="text-2xl font-bold bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                Madepelli Sadhana
              </h3>
            </div>

            {/* Tagline */}
            <p className="text-gray-300 text-lg leading-relaxed mb-6 max-w-md">
              "Designing the future with creativity, intelligence, and innovation."
            </p>

            {/* Subscribe Form */}
            <div className="flex flex-col sm:flex-row gap-3">
              <input 
                type="email" 
                placeholder="Enter your email for updates" 
                className="flex-1 px-4 py-3 bg-white/5 border border-white/10 rounded-2xl text-white placeholder-gray-400 focus:outline-none focus:border-cyan-500/50 focus:ring-2 focus:ring-cyan-500/20 transition-all duration-300"
              />
              <button className="px-6 py-3 bg-gradient-to-r from-cyan-600 to-purple-600 text-white font-semibold rounded-2xl shadow-lg hover:shadow-cyan-500/25 transition-all duration-300 flex items-center justify-center gap-2">
                <Sparkles className="w-4 h-4" />
                Subscribe
              </button>
            </div>
          </div>

          {/* Column 2: Navigation */}
          <div>
            <h4 className="text-white font-semibold mb-6 text-lg">Navigation</h4>
            <ul className="space-y-4">
              <li><a href="#home" className="text-gray-400 hover:text-cyan-400 transition-colors duration-300 relative group"><span className="relative">Home<span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-500 to-purple-500 group-hover:w-full transition-all duration-300"></span></span></a></li>
              <li><a href="#about" className="text-gray-400 hover:text-cyan-400 transition-colors duration-300 relative group"><span className="relative">About<span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-500 to-purple-500 group-hover:w-full transition-all duration-300"></span></span></a></li>
              <li><a href="#projects" className="text-gray-400 hover:text-cyan-400 transition-colors duration-300 relative group"><span className="relative">Projects<span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-500 to-purple-500 group-hover:w-full transition-all duration-300"></span></span></a></li>
              <li><a href="#experience" className="text-gray-400 hover:text-cyan-400 transition-colors duration-300 relative group"><span className="relative">Experience<span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-500 to-purple-500 group-hover:w-full transition-all duration-300"></span></span></a></li>
              <li><a href="#contact" className="text-gray-400 hover:text-cyan-400 transition-colors duration-300 relative group"><span className="relative">Contact<span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-500 to-purple-500 group-hover:w-full transition-all duration-300"></span></span></a></li>
            </ul>
          </div>

          {/* Column 3: Let's Connect (Socials) */}
          <div>
            <h4 className="text-white font-semibold mb-6 text-lg">Let's Connect</h4>
            <div className="flex flex-wrap gap-4">
              {/* GitHub */}
              <a href="https://github.com/madepellisadhana" target="_blank" rel="noopener noreferrer" className="group relative">
                <div className="p-3 bg-white/5 border border-white/10 rounded-2xl backdrop-blur-sm group-hover:bg-cyan-500/10 group-hover:border-cyan-500/30 transition-all duration-300">
                  <Github className="w-5 h-5 text-gray-400 group-hover:text-cyan-400 transition-colors duration-300" />
                </div>
              </a>
              {/* LinkedIn */}
              <a href="https://www.linkedin.com/in/madepelli-sadhana/" target="_blank" rel="noopener noreferrer" className="group relative">
                <div className="p-3 bg-white/5 border border-white/10 rounded-2xl backdrop-blur-sm group-hover:bg-cyan-500/10 group-hover:border-cyan-500/30 transition-all duration-300">
                  <Linkedin className="w-5 h-5 text-gray-400 group-hover:text-cyan-400 transition-colors duration-300" />
                </div>
              </a>
              {/* Mail */}
              <a href="mailto:madepellisadhana@gmail.com" target="_blank" rel="noopener noreferrer" className="group relative">
                <div className="p-3 bg-white/5 border border-white/10 rounded-2xl backdrop-blur-sm group-hover:bg-cyan-500/10 group-hover:border-cyan-500/30 transition-all duration-300">
                  <Mail className="w-5 h-5 text-gray-400 group-hover:text-cyan-400 transition-colors duration-300" />
                </div>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright and Legal Links */}
        <div className="border-t border-white/10 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-gray-400 text-sm flex flex-col sm:flex-row items-center gap-4">
            <span>© 2026 Madepelli Sadhana. All rights reserved.</span>
            <div className="flex items-center gap-2 text-cyan-400 opacity-50">
              <Palette className="w-4 h-4" />
              <span className="text-xs">Crafted with passion</span>
            </div>
          </div>
          <div className="flex items-center gap-6 text-sm text-gray-400">
            <a href="/privacy" className="hover:text-cyan-400 transition-colors duration-300">Privacy Policy</a>
            <a href="/terms" className="hover:text-cyan-400 transition-colors duration-300">Terms of Service</a>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;