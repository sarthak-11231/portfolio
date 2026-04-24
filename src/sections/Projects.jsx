import React, { useState, useEffect } from 'react';

const ProjectShowcase = ({ project, index }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [imageErrors, setImageErrors] = useState({});

  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % project.images.length);
    }, 3500);

    return () => clearInterval(interval);
  }, [isPaused, project.images.length]);

  const handleImageError = (imgIndex) => {
    setImageErrors(prev => ({ ...prev, [imgIndex]: true }));
  };

  return (
    <div className={`flex flex-col gap-8 mb-32 bg-white/[0.02] backdrop-blur-3xl border border-white/10 p-6 md:p-12 lg:p-20 rounded-[3rem] animate-fade-in opacity-0 shadow-2xl`} style={{ animationDelay: `${0.2 + index * 0.2}s`, animationFillMode: 'forwards' }}>
      
      {/* 1. Project Info Header (Centered Group) */}
      <div className="text-center max-w-4xl mx-auto space-y-6">
        <h3 className="text-4xl md:text-6xl font-extrabold text-white tracking-tight mt-0">
          {project.title}
        </h3>
        <p className="text-gray-400 text-lg md:text-xl leading-relaxed font-light">
          {project.shortDescription}
        </p>
        
        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto justify-center pt-4">
          <a 
            href={project.demoLink}
            className="px-10 py-4.5 bg-white text-[#121212] font-bold text-sm rounded-2xl hover:bg-gray-100 hover:scale-105 hover:brightness-110 transition-all duration-300 shadow-xl flex items-center justify-center gap-2"
          >
            Live Demo
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </a>
          <a 
            href={project.githubLink}
            className="px-10 py-4.5 bg-transparent border border-white/20 text-white font-bold text-sm rounded-2xl hover:bg-white/5 hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2"
          >
            View GitHub
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16">
              <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"/>
            </svg>
          </a>
        </div>
      </div>

      {/* 2. Auto-Rotating Carousel Showcase */}
      <div className="w-full relative mt-8">
        {/* Background Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[100%] h-[100%] bg-gradient-to-tr from-purple-500/10 via-white/5 to-blue-500/10 blur-[120px] opacity-30 rounded-full -z-10"></div>

        <div className="relative max-w-[900px] mx-auto group">
          {/* Glass Slider Frame */}
          <div 
            className="relative p-2.5 rounded-[2.5rem] bg-white/5 backdrop-blur-md border border-white/10 shadow-[0_32px_64px_-16px_rgba(0,0,0,0.5)] transition-all duration-700 hover:scale-[1.01] hover:border-white/20"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            <div className="relative aspect-[16/10] overflow-hidden rounded-[1.8rem] border border-white/5 bg-[#0a0a0a]">
              {project.images.map((img, i) => (
                <div
                  key={i}
                  className={`absolute inset-0 transition-all duration-1000 ease-in-out ${
                    i === currentIndex ? 'opacity-100 scale-100 z-10' : 'opacity-0 scale-105 z-0'
                  }`}
                >
                  {!imageErrors[i] ? (
                    <img 
                      src={img} 
                      alt={`${project.title} View ${i + 1}`} 
                      className="w-full h-full object-cover"
                      loading="lazy"
                      decoding="async"
                      onError={() => handleImageError(i)}
                    />
                  ) : (
                    <div className="w-full h-full bg-white/[0.03] flex items-center justify-center">
                      <span className="text-gray-600 text-xs font-mono">Image Not Found</span>
                    </div>
                  )}
                  {/* Subtle inner shadow overlay */}
                  <div className="absolute inset-0 shadow-[inset_0_0_100px_rgba(0,0,0,0.2)]"></div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-60"></div>
                </div>
              ))}

              {/* Navigation Arrows */}
              <button 
                onClick={(e) => { e.stopPropagation(); setCurrentIndex((prev) => (prev - 1 + project.images.length) % project.images.length); }}
                className="absolute left-6 top-1/2 -translate-y-1/2 z-20 p-4 rounded-full bg-black/40 backdrop-blur-2xl border border-white/10 text-white opacity-0 group-hover:opacity-100 transition-all duration-500 hover:bg-black/60 hover:scale-110 active:scale-95"
                aria-label="Previous image"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <button 
                onClick={(e) => { e.stopPropagation(); setCurrentIndex((prev) => (prev + 1) % project.images.length); }}
                className="absolute right-6 top-1/2 -translate-y-1/2 z-20 p-4 rounded-full bg-black/40 backdrop-blur-2xl border border-white/10 text-white opacity-0 group-hover:opacity-100 transition-all duration-500 hover:bg-black/60 hover:scale-110 active:scale-95"
                aria-label="Next image"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>

          {/* Indicator Dots */}
          <div className="flex justify-center gap-3 mt-10">
            {project.images.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentIndex(i)}
                className={`h-1.5 rounded-full transition-all duration-700 ${
                  i === currentIndex 
                    ? 'w-12 bg-white shadow-[0_0_10px_rgba(255,255,255,0.5)]' 
                    : 'w-2.5 bg-white/20 hover:bg-white/40'
                }`}
                aria-label={`Go to slide ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* 3. Detailed Info Sections */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 pt-10 border-t border-white/10 mt-12">
        {/* Tech Stack */}
        <div className="space-y-6">
          <h4 className="text-white font-bold uppercase tracking-[0.2em] text-xs">Tech Stack</h4>
          <div className="flex flex-wrap gap-2.5">
            {project.techStack.map((tech, i) => (
              <span key={i} className="px-4 py-2 bg-white/5 rounded-xl text-[11px] font-medium text-gray-300 border border-white/5 transition-colors hover:bg-white/10">
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Key Features */}
        <div className="space-y-6">
          <h4 className="text-white font-bold uppercase tracking-[0.2em] text-xs">Key Features</h4>
          <ul className="space-y-3">
            {project.keyFeatures.map((feature, i) => (
              <li key={i} className="flex items-start gap-3 text-gray-400 text-sm leading-relaxed">
                <span className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-white/40 mt-1.5"></span>
                {feature}
              </li>
            ))}
          </ul>
        </div>

        {/* Why it stands out */}
        <div className="space-y-6">
          <h4 className="text-white font-bold uppercase tracking-[0.2em] text-xs">Why This Project Stands Out</h4>
          <p className="text-gray-400 text-sm leading-relaxed font-light italic border-l-2 border-white/10 pl-6 py-1">
            "{project.whyItStandsOut}"
          </p>
        </div>
      </div>
    </div>
  );
};

const Projects = () => {
  const featuredProjects = [
    {
      title: "BiblioStack – Smart Inventory System for Bookstores",
      shortDescription: "A modern inventory management system where newly added books are stacked and sold using a LIFO approach, integrated with Gemini AI for intelligent automation.",
      keyFeatures: [
        "Stack-based inventory using LIFO logic",
        "AI-powered book search and metadata generation",
        "Interactive stack visualization with real-time updates",
        "Transaction tracking and persistent logs",
        "Real-time analytics for stock and revenue",
        "Fully responsive and optimized UI"
      ],
      techStack: [
        "React (Hooks, Context API)",
        "TypeScript",
        "Tailwind CSS",
        "Google Gemini API",
        "Recharts for analytics"
      ],
      whyItStandsOut: "This project goes beyond a typical CRUD system by combining core computer science concepts (data structures) with modern AI integration and thoughtful UI design. It demonstrates the ability to build systems that are both technically sound and practically useful.",
      images: [
        "/bibliostack-1.png",
        "/bibliostack-2.png",
        "/bibliostack-3.png"
      ],
      demoLink: "#",
      githubLink: "#"
    },
    {
      title: "NAYAAB – Minimal Premium E-commerce Experience",
      shortDescription: "NAYAAB is a modern e-commerce interface designed with a focus on minimalism, premium aesthetics, and smooth user experience.",
      keyFeatures: [
        "Clean and minimal product browsing UI",
        "Interactive product image preview (modal)",
        "Thumbnail-based image gallery",
        "Fully responsive layout",
        "Smooth navigation and category sections",
        "Add-to-cart UI flow"
      ],
      techStack: [
        "HTML / CSS / JavaScript",
        "Tailwind CSS",
        "Responsive Design",
        "UI/UX Design Principles"
      ],
      whyItStandsOut: "This project focuses on user experience and visual design rather than just functionality. It demonstrates the ability to build clean, production-like interfaces with attention to layout, spacing, and interaction design.",
      images: [
        "/images/nayaab-home.png",
        "/images/nayaab-products.png",
        "/images/nayaab-modal.png"
      ],
      demoLink: "#",
      githubLink: "#"
    }
  ];

  const secondaryProjects = [
    {
      title: "WasteLedger",
      description: "A blockchain-inspired platform for transparent waste reporting and tracking, focused on improving environmental data visibility.",
      techStack: "TAILWIND • AOS • BLOCKCHAIN CONCEPTS",
      link: "#"
    }
  ];

  return (
    <section id="projects" className="w-full relative z-10 px-6 md:px-12 py-16 md:py-32">
      <div className="max-w-[1400px] mx-auto w-full">
        {/* Title and Description */}
        <div className="mb-24 space-y-6 max-w-2xl animate-fade-in">
          <h2 className="text-5xl md:text-6xl font-bold text-white tracking-tighter">
            Selected Work
          </h2>
          <p className="text-gray-400 text-lg md:text-xl leading-relaxed font-light">
            A curated selection of my latest software engineering projects, emphasizing robust architectures and seamless user experiences.
          </p>
        </div>

        {/* Featured Projects */}
        {featuredProjects.map((project, index) => (
          <ProjectShowcase key={index} project={project} index={index} />
        ))}

        {/* Secondary Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 animate-fade-in opacity-0" style={{ animationDelay: '0.6s', animationFillMode: 'forwards' }}>
          {secondaryProjects.map((project, index) => (
            <div 
              key={index}
              className="bg-white/5 backdrop-blur-xl border border-white/10 p-8 rounded-3xl hover:scale-[1.02] hover:bg-white/[0.08] transition-all duration-300 ease-out flex flex-col h-full group"
            >
              <h3 className="text-2xl font-bold text-white mb-4 tracking-tight">
                {project.title}
              </h3>
              <p className="text-gray-400 leading-relaxed font-light mb-8 flex-grow text-sm">
                {project.description}
              </p>
              
              <div className="mt-auto space-y-6">
                <div className="text-[10px] uppercase tracking-[0.2em] font-semibold text-gray-500">
                  {project.techStack}
                </div>
                <a 
                  href={project.link}
                  className="inline-flex items-center gap-2 text-white font-medium hover:text-gray-300 transition duration-300 text-sm"
                >
                  View Details
                  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor" viewBox="0 0 16 16" className="transform group-hover:translate-x-1 transition duration-300">
                    <path fillRule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"/>
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
