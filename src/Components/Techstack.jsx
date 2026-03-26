import React from 'react';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from '@gsap/react';
gsap.registerPlugin(ScrollTrigger);

export function Techstack() {
  const technologies = [
    { name: 'C', icon: 'c', category: 'Languages' },
    { name: 'C++', icon: 'cpp', category: 'Languages' },
    { name: 'Java', icon: 'java', category: 'Languages' },
    { name: 'Python', icon: 'python', category: 'Languages' },
    { name: 'JavaScript', icon: 'javascript', category: 'Languages' },
    { name: 'PHP', icon: 'php', category: 'Languages' },
    { name: 'React', icon: 'react', category: 'Frontend' },
    { name: 'HTML', icon: 'html', category: 'Frontend' },
    { name: 'CSS', icon: 'css', category: 'Frontend' },
    { name: 'JS', icon: 'js', category: 'Frontend' },
    { name: 'Node.js', icon: 'nodejs', category: 'Backend' },
    { name: 'Express', icon: 'express', category: 'Backend' },
    { name: 'PHP', icon: 'php', category: 'Backend' },
    { name: 'MySQL', icon: 'mysql', category: 'Databases' },
    { name: 'MongoDB', icon: 'mongodb', category: 'Databases' },
    { name: 'PyTorch', icon: 'pytorch', category: 'AI / ML' },
    { name: 'LangChain', category: 'Tools & Frameworks' },
    { name: 'HuggingFace', category: 'Tools & Frameworks' },
    { name: 'REST APIs', category: 'Tools & Frameworks' },
    { name: 'Git', icon: 'git', category: 'Tools & Frameworks' },
  ];

  // Group technologies by category for easier rendering
  const groupedTechnologies = technologies.reduce((acc, tech) => {
    acc[tech.category] = [...(acc[tech.category] || []), tech];
    return acc;
  }, {});


  useGSAP(()=>{
        gsap.fromTo(
    ".reveal-text",
    {
        clipPath: "inset(100% 0% 100% 0%)", // hidden from top
        opacity: 0
    },
    {
        clipPath: "inset(0% 0% 0% 0%)", // fully visible
        opacity: 1,
        scrollTrigger: {
        trigger: ".reveal-text",
        ease: "power2.in",
        start: "top 70%",
        end: "top 20%",
        scrub: true,
        markers:false
        }
    }
    );

    gsap.from(
        ".tech-stack",
        {
            opacity:0,
            y:100,
            scrollTrigger:{
                trigger:".tech-stack",
                ease:"power2.in",
                start:"top 70%",
                end:"top 20%",
                scrub:true,
                
            }
        }
    );
  });

  return (
    <section className="py-5 px-4 text-center z-10 relative" id="techstack">
      <h2 className="reveal-text mb-12 text-5xl font-bold">My Tech Stack</h2>
      <div className="max-w-5xl mx-auto">
        {Object.entries(groupedTechnologies).map(([category, techs]) => (
          <div key={category} className="mb-10">
            <h3 className="tech-stack border-b border-white/20 pb-2 mb-6 text-2xl text-white/80 font-semibold inline-block px-8">{category}</h3>
            <div className="flex flex-wrap justify-center gap-4">
              {techs.map(tech => (
                <div key={tech.name} className="tech-stack flex items-center gap-3 px-6 py-3 border border-white/10 rounded-xl bg-white/5 shadow-lg backdrop-blur-sm hover:bg-white/10 hover:-translate-y-1 transition-all duration-300">
                  {tech.icon && (
                    <img 
                      src={`https://skillicons.dev/icons?i=${tech.icon}`} 
                      alt={tech.name} 
                      className="w-6 h-6" 
                    />
                  )}
                  <span className="text-white/90 font-medium">{tech.name}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
