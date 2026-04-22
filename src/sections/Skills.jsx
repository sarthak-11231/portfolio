import React from 'react';

const Skills = () => {
  const skillsData = [
    {
      category: "Frontend",
      skills: ["React", "Tailwind CSS", "JavaScript / TypeScript"]
    },
    {
      category: "Backend & Core",
      skills: ["Java", "Python", "Data Structures & Algorithms", "Object-Oriented Programming"]
    },
    {
      category: "Tools",
      skills: ["Git", "GitHub", "VS Code"]
    }
  ];

  return (
    <section id="skills" className="w-full relative z-10 py-28 px-6 sm:px-12 md:px-24">
      <div className="max-w-[1400px] mx-auto w-full">
        {/* Section Header */}
        <div className="mb-20 max-w-2xl">
          <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight mb-4">
            Technical Matrix
          </h2>
          <p className="text-gray-400 text-lg leading-relaxed font-light">
            The core technologies and peripheral tools driving my engineering process.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 lg:gap-24">
          {skillsData.map((group, index) => (
            <div key={index} className="flex flex-col gap-8">
              <h3 className="text-xs uppercase tracking-[0.2em] font-semibold text-gray-500">
                {group.category}
              </h3>
              
              <div className="flex flex-wrap gap-4">
                {group.skills.map((skill, i) => (
                  <span 
                    key={i} 
                    className="px-5 py-2.5 bg-white/5 border border-white-[0.03] rounded-full text-sm font-light text-gray-400 hover:text-gray-200 hover:border-white/10 hover:bg-white/[0.07] transition-all duration-300 ease-out cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
