import React from 'react';

const About = () => {
  return (
    <section id="about" className="w-full relative z-10 py-16 md:py-28 px-6 md:px-12">
      <div className="max-w-[1400px] mx-auto w-full">
        {/* Section Header */}
        <div className="mb-16 max-w-2xl">
          <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight mb-4">
            About
          </h2>
          <p className="text-gray-400 text-lg leading-relaxed font-light">
            An overview of my professional background and technical focus.
          </p>
        </div>

        {/* Concentrated Text Content */}
        <div className="flex flex-col gap-6 w-full max-w-2xl relative z-10">
          <h3 className="text-2xl font-semibold text-gray-200 tracking-tight mb-4">
            About Me
          </h3>
          
          <div className="space-y-6">
            <p className="text-lg sm:text-xl text-gray-400 leading-relaxed font-light">
              I’m a Computer Science student focused on building clean, efficient, and real-world software systems.
            </p>
            <p className="text-lg sm:text-xl text-gray-400 leading-relaxed font-light">
              I enjoy working across frontend and backend, with a strong interest in system design, performance, and modern web technologies.
            </p>
            <p className="text-lg sm:text-xl text-gray-400 leading-relaxed font-light">
              Recently, I’ve been exploring AI integration, blockchain-based architectures, and building responsive user interfaces with a strong emphasis on design.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
