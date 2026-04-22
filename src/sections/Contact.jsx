import React from 'react';

const Contact = () => {
  return (
    <section id="contact" className="w-full relative z-10 py-32 px-6 sm:px-12 md:px-24 flex items-center justify-center">
      <div className="max-w-3xl mx-auto w-full flex flex-col items-center text-center">
        
        {/* Typographic Header */}
        <h2 className="text-5xl md:text-7xl lg:text-[5.5rem] font-bold text-white tracking-tight leading-[1.02] mb-8">
          Let’s work together.
        </h2>
        
        {/* Subtle Supporting Text */}
        <p className="text-lg md:text-xl text-gray-400 font-light leading-relaxed mb-14 max-w-xl">
          I’m open to internships and collaboration opportunities.
        </p>

        {/* Primary Action */}
        <a 
          href="mailto:sarthakgupta5544@gmail.com" 
          className="inline-flex justify-center items-center py-4 px-10 bg-white/90 text-[#121212] font-semibold text-sm rounded-xl hover:bg-white hover:scale-[1.02] transition-all duration-300 ease-out shadow-md mb-20"
        >
          Get in touch
        </a>

        {/* Social / Direct Links */}
        <div className="flex items-center gap-12 border-t border-white/10 pt-10 w-full justify-center max-w-sm">
          <a href="mailto:sarthakgupta5544@gmail.com" target="_blank" rel="noopener noreferrer" className="text-xs font-semibold tracking-[0.2em] uppercase text-gray-500 hover:text-white transition duration-300">
            Email
          </a>
          <a href="https://linkedin.com/in/sarthak-gupta-82308233a" target="_blank" rel="noopener noreferrer" className="text-xs font-semibold tracking-[0.2em] uppercase text-gray-500 hover:text-white transition duration-300">
            LinkedIn
          </a>
          <a href="https://github.com/sarthak-11231" target="_blank" rel="noopener noreferrer" className="text-xs font-semibold tracking-[0.2em] uppercase text-gray-500 hover:text-white transition duration-300">
            GitHub
          </a>
        </div>
        
      </div>
    </section>
  );
};

export default Contact;
