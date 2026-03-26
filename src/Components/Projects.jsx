
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";


// list of project with data
const projects = [
  {
    id: 1,
    title: "Shopnet AI E-Commerce",
    description: "AI-driven MERN e-commerce platform with a Python microservice for hybrid recommendations using SentenceTransformers and PyTorch-based SGES. Implements cold-start optimization via GeoIP and seasonal heuristics.",
    tech: ["MongoDB", "Express", "React", "Node.js", "Python", "PyTorch"],
    image: "https://images.unsplash.com/photo-1555529771-35a1b98f9b3b?q=80&w=600&auto=format&fit=crop",
    link: "#"
  },
  {
    id: 2,
    title: "GovResolve Civic System",
    description: "AI-powered civic complaint platform that auto-routes issues using LLM-based classification (Qwen2.5-7B-Instruct). Features RBAC security and automated email workflows.",
    tech: ["React", "Node.js", "MongoDB", "Hugging Face API", "NodeMailer"],
    image: "public/proj1.png",
    link: "#"
  },
  {
    id: 3,
    title: "Smart Traffic Monitoring",
    description: "Computer vision system using YOLOv11 and DeepSORT for vehicle tracking, license plate detection, and real-time speed violation logging with OCR integration.",
    tech: ["Python", "YOLOv11", "DeepSORT", "OpenCV", "MySQL"],
    image: "https://images.unsplash.com/photo-1502877338535-766e1452684a?q=80&w=600&auto=format&fit=crop",
    link: "#"
  }
];
 
 

export function Projects() {
  const sectionRef = useRef(null);        // renamed for clarity
  const headerRef = useRef(null);         // separate ref for header

  useGSAP(() => {
    if (!sectionRef.current) return;

    // 1. Load-in animation for the header only
    gsap.from(headerRef.current, {
      scrollTrigger: {
        trigger: headerRef.current,
        start: "top top",
        //markers:true        // starts when header is near viewport
      },
      y: 80,
      opacity: 0,
      duration: 1.2,
      ease: "power2.out"
    });

    // 2. Pin the entire Projects section (optional but looks premium)
    ScrollTrigger.create({
      trigger: sectionRef.current,
      start: "top top",
      end: "bottom top",
      pin: true,
      pinSpacing: true,
      anticipatePin: 1,
      // markers: true,        // uncomment to debug
    });

    // 3. Gentle fade + slight scale on the whole section while pinned
    gsap.to(sectionRef.current, {
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top top",
        end: "bottom top",
        scrub: 1.5,
      },
      yPercent: -15,
      opacity: 0.85,
      scale: 0.87,
      ease: "none",
    });

  }, { scope: sectionRef });

  return (
    <section 
      id="projects" 
      ref={sectionRef}
      className="min-h-screen py-24 px-8 bg-[#0a0a0a] relative z-10"
    >
      {/* Section Header */}
      <div ref={headerRef} className="mb-20 text-center">
        <h2 className="text-5xl md:text-6xl font-bold font-sans text-white mb-6">
          Some of my Projects
        </h2>
        <p className="text-white/60 max-w-2xl mx-auto text-lg">
          A collection of my recent works, showcasing my expertise in full-stack and AI development.
        </p>
      </div>

      {/* Project Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {projects.map((project) => (
          <div 
            key={project.id} 
            className="group flex flex-col bg-gradient-to-br from-white/10 via-white/5 to-transparent border border-white/10 rounded-3xl p-6 backdrop-blur-xl transition-all duration-500 hover:border-white/30 hover:-translate-y-3 hover:shadow-2xl"
          >
            <div className="w-full h-56 bg-black/40 rounded-2xl mb-6 overflow-hidden relative">
              <img 
                src={project.image} 
                alt={project.title} 
                className="w-full h-full object-cover opacity-75 group-hover:opacity-100 group-hover:scale-110 transition-all duration-700"
              />
            </div>
            
            <h3 className="text-2xl font-bold text-white mb-3">{project.title}</h3>
            <p className="text-white/70 mb-6 flex-grow leading-relaxed">{project.description}</p>
            
            <div className="flex flex-wrap gap-2 mt-auto">
              {project.tech.map((t, i) => (
                <span 
                  key={i} 
                  className="text-xs font-medium tracking-wider uppercase bg-white/10 text-white/80 px-4 py-1.5 rounded-full border border-white/10"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}