import React from 'react';
import Hero from './sections/Hero';
import Projects from './sections/Projects';
import About from './sections/About';
import Skills from './sections/Skills';
import Contact from './sections/Contact';

export default function App() {
  return (
    <div className="relative min-h-screen w-full bg-[#1c1c1c] font-outfit selection:bg-white/20 overflow-x-hidden">
      
      {/* Global subtle noise texture overlay - reduced to barely visible */}
      <div 
        className="pointer-events-none fixed inset-0 z-40 opacity-[0.01] mix-blend-screen"
        style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }}
      ></div>

      {/* Fixed Full-Screen Background Image  */}
      <div className="fixed inset-0 z-0">
        <img 
          src="/hero-bg.jpg" 
          alt="Background" 
          className="w-full h-full object-cover opacity-100 scale-[1.02]"
        />
        {/* Subtle gradient overlay to ensure text contrast */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#1c1c1c]/95"></div>
      </div>

      {/* Floating Capsule Navbar with SG. logo inside */}
      <nav className="fixed top-8 left-1/2 -translate-x-1/2 z-50 bg-white/10 backdrop-blur-2xl border border-white/10 rounded-full px-8 py-3 flex items-center justify-between gap-8 shadow-[0_0_20px_rgba(0,0,0,0.2)] transition-all duration-300 hover:bg-white/10 hover:shadow-[0_10px_40px_-10px_rgba(255,255,255,0.05)] w-max">
        <div className="text-white font-bold text-lg tracking-widest uppercase cursor-pointer pl-2">
          SG.
        </div>
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-400">
          <a href="#home" className="hover:text-white transition duration-300 ease-out">Home</a>
          <a href="#about" className="hover:text-white transition duration-300 ease-out">About</a>
          <a href="#projects" className="hover:text-white transition duration-300 ease-out">Work</a>
          <a href="#contact" className="hover:text-white transition duration-300 ease-out pr-2">Contact</a>
        </div>
        {/* Mobile menu button */}
        <button className="md:hidden text-gray-300 hover:text-white transition-colors duration-300 mr-2">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </nav>

      {/* Scrollable Content Assembly */}
      <div className="relative z-10 w-full flex flex-col">
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Contact />
      </div>
      
    </div>
  )
}
