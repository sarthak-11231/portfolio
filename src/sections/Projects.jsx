import React from 'react';

const Projects = () => {
  const featuredProject = {
    title: "BiblioStack",
    description: "A high-performance inventory system built on stack-based architecture, designed for efficiency and intelligent automation. Built with a custom stack implementation achieving O(1) operations, and enhanced with AI-powered metadata generation using Google Gemini.",
    techStack: "REACT • TYPESCRIPT • TAILWIND • GEMINI AI",
    link: "#"
  };

  const secondaryProjects = [
    {
      title: "WasteLedger",
      description: "A blockchain-inspired platform for transparent waste reporting and tracking, focused on improving environmental data visibility.",
      techStack: "TAILWIND • AOS • BLOCKCHAIN CONCEPTS",
      link: "#"
    },
    {
      title: "Nayaab",
      description: "A modern e-commerce storefront for men’s jewellery with responsive design and intuitive product browsing.",
      techStack: "HTML • CSS • TAILWIND",
      link: "#"
    }
  ];

  return (
    <section id="projects" className="w-full relative z-10 py-32 px-6 sm:px-12 md:px-24">
      <div className="max-w-[1400px] mx-auto w-full">
        {/* Title and Description */}
        <div className="mb-20 space-y-6 max-w-2xl">
          <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight">
            Selected Work
          </h2>
          <p className="text-gray-400 text-lg leading-relaxed font-light">
            A curated selection of my latest software engineering projects, emphasizing robust architectures and seamless user experiences.
          </p>
        </div>

        {/* Featured Project */}
        <div className="flex flex-col lg:flex-row gap-12 items-center mb-12 bg-white/5 backdrop-blur-xl border border-white/15 p-8 lg:p-12 rounded-3xl hover:scale-[1.02] transition duration-300 ease-out group">
          <div className="w-full lg:w-[45%] flex flex-col gap-6">
            <h3 className="text-3xl font-bold text-white tracking-tight">
              {featuredProject.title}
            </h3>
            <p className="text-gray-400 leading-relaxed font-light text-lg">
              {featuredProject.description}
            </p>
            <div className="text-xs uppercase tracking-[0.2em] font-semibold text-gray-500 mt-2">
              {featuredProject.techStack}
            </div>
            <a 
              href={featuredProject.link}
              className="inline-flex justify-center items-center py-3.5 px-8 bg-white/90 text-[#121212] font-semibold text-sm rounded-xl hover:bg-white hover:scale-[1.02] transition-all duration-300 ease-out shadow-md mt-4 lg:max-w-fit"
            >
              View Project
            </a>
          </div>
          {/* Visual Box */}
          <div className="w-full lg:w-[55%] aspect-video bg-white/5 rounded-2xl border border-white/10 flex items-center justify-center transition duration-300 ease-out group-hover:bg-white/[0.08]">
            <span className="text-gray-500 uppercase tracking-[0.3em] text-xs font-semibold">Visual Preview</span>
          </div>
        </div>

        {/* Secondary Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {secondaryProjects.map((project, index) => (
            <div 
              key={index}
              className="bg-white/5 backdrop-blur-xl border border-white/10 p-8 rounded-3xl hover:scale-[1.02] hover:bg-white/[0.06] transition-all duration-300 ease-out flex flex-col h-full group"
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
