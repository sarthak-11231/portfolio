import React, { useRef, useState, useEffect } from 'react';

const Hero = () => {
  const cardRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);

  const roles = ["Student.", "Web Developer.", "Problem Solver."];
  const [currentRole, setCurrentRole] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    cardRef.current.style.setProperty('--mouse-x', `${x}px`);
    cardRef.current.style.setProperty('--mouse-y', `${y}px`);
  };

  return (
    <section id="home" className="relative w-full min-h-screen flex flex-col justify-center px-6 md:px-12 py-16 md:py-28 z-10 box-border overflow-x-hidden">
      {/* Main Content Area */}
      <div className="w-full relative z-10 grid grid-cols-1 md:grid-cols-2 items-center lg:mt-12 gap-16 md:gap-24 max-w-[1400px] mx-auto">
        
        {/* Left Side: Typography */}
        <div className="relative flex flex-col w-full max-w-xl">
          <h1 className="text-5xl md:text-7xl lg:text-8xl xl:text-[9rem] font-bold text-white tracking-tight leading-[1.02] mb-6 md:mb-8 relative z-10">
            Sarthak<br />Gupta
          </h1>
          <div className="h-12 relative z-10 w-full overflow-hidden">
            {roles.map((role, i) => (
              <div 
                key={i} 
                className={`absolute inset-0 text-white/[0.85] font-semibold text-xl md:text-3xl tracking-tight transition-all duration-[400ms] ease-out ${
                  i === currentRole 
                    ? 'opacity-100 translate-y-0' 
                    : 'opacity-0 translate-y-4 pointer-events-none'
                }`}
              >
                {role}
              </div>
            ))}
          </div>
          <p className="text-base sm:text-lg text-white/60 max-w-xl leading-relaxed font-light mt-4 md:mt-5 relative z-10">
            I’m a Computer Science student focused on building scalable web applications and exploring AI, blockchain, and modern system design.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mt-6 md:mt-4 relative z-10">
            <a 
              href="#projects" 
              className="bg-white text-black px-6 py-3 rounded-xl font-medium text-sm hover:opacity-90 hover:scale-[1.02] transition-all duration-300 ease-out text-center"
            >
              View Work
            </a>
            <a 
              href="#contact" 
              className="bg-white/10 border border-white/10 text-white px-6 py-3 rounded-xl font-medium text-sm hover:bg-white/20 hover:scale-[1.02] transition-all duration-300 ease-out text-center"
            >
              Get in touch
            </a>
          </div>
        </div>
        
        {/* Right Side: Structured Image Framework with Pointer Glow */}
        <div className="flex justify-center md:justify-end w-full relative z-10 mt-12 lg:pl-10 xl:pl-0 md:pr-8">
          <div 
            ref={cardRef}
            onMouseMove={handleMouseMove}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            className="group relative p-6 rounded-3xl border border-white/[0.03] bg-white/[0.02] backdrop-blur-xl overflow-hidden"
          >
            {/* Interactive Cursor Spotlight */}
            <div
              className={`pointer-events-none absolute inset-0 transition-opacity duration-300 ease-out ${isHovered ? 'opacity-100' : 'opacity-0'}`}
              style={{
                background: `radial-gradient(circle at var(--mouse-x, 0px) var(--mouse-y, 0px), rgba(255,255,255,0.15), transparent 60%)`,
              }}
            />
            
            {/* Image Asset layered above */}
            <img 
              src="/profile.jpg" 
              alt="Sarthak Gupta" 
              className="relative z-10 w-48 h-48 md:w-72 md:h-72 object-cover object-[center_35%] rounded-2xl grayscale group-hover:grayscale-0 transition-all duration-500 ease-out"
            />
          </div>
        </div>
      </div>
      
      {/* Decorative element */}
      <div className="absolute left-12 md:left-16 bottom-10 text-[10px] text-gray-500 tracking-[0.3em] uppercase flex items-center gap-6 z-10">
        <span>Scroll to explore</span>
        <div className="w-16 h-[1px] bg-gray-600/50"></div>
      </div>
    </section>
  );
};

export default Hero;
