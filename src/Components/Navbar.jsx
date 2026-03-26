// export function Navbar() {
//     return <>
//     <nav className="w-full flex items-center justify-between pt-3 px-8">
//         <div className="font-bold"> <img className=" w-6  invert" src="../public/code.png"></img></div>
//         <ul className="font-bold flex ml-auto space-x-6 ">
//             <li><a href="#home" className="text-gray-400 hover:text-white transition-colors duration-300">Home</a></li>
//             <li><a href="#projects" className="text-gray-400 hover:text-white transition-colors duration-300">Projects</a></li>
//             <li><a href="https://drive.google.com/file/d/1J5Rp39CWvvAKIRGvTC_aLIHEdo6v0YCf/view?usp=sharing" target="_blank" className="text-gray-400 hover:text-gray-900 transition-colors duration-300">Resume</a></li>
//             <li><a href="#contact" className="text-gray-400 hover:text-gray-900 transition-colors duration-300">Contact</a></li>
//         </ul>
//     </nav>
//     </>; 
//  }
 







import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

export function Navbar() {
  const navRef = useRef(null);

  useGSAP(() => {
    if (!navRef.current) return;

    // 1. Scroll behavior (hide a bit when scrolling down)
    gsap.to(navRef.current, {
      scrollTrigger: {
        trigger: "body",
        start: "top -80",
        end: "top -300",
        scrub: true,
      },
      y: -20,
      opacity: 0.85,
      ease: "none",
      
    });

    // 2. Hover animations on links (safe way)
    const links = navRef.current.querySelectorAll('.nav-link');

    links.forEach((link) => {
      const onMouseEnter = () => {
        gsap.to(link, {
          scale: 1.05,
          color: "#ffffff",
          duration: 0.3,
          ease: "power2.out",
        });
      };

      const onMouseLeave = () => {
        gsap.to(link, {
          scale: 1,
          color: "rgba(255,255,255,0.7)",
          duration: 0.4,
          ease: "power2.out",
        });
      };

      link.addEventListener("mouseenter", onMouseEnter);
      link.addEventListener("mouseleave", onMouseLeave);

      // Cleanup when component unmounts
      return () => {
        link.removeEventListener("mouseenter", onMouseEnter);
        link.removeEventListener("mouseleave", onMouseLeave);
      };
    });
  }, { scope: navRef });   // ← Important: scope to navRef

  return (
    <nav 
      ref={navRef}
      className="fixed z-9999 top-0 left-0 right-0 w-full flex items-center justify-between pt-6 px-8 backdrop-blur-xl bg-black/40 border-b border-white/10 "
    >
       
      <div className="font-bold">
        <img 
          className="w-8 invert" 
          src="/code.png" 
          alt="Logo" 
        />
      </div>

      {/* Nav Links */}
      <ul className="font-bold flex ml-auto space-x-8 text-sm uppercase tracking-widest">
        <li>
          <a 
            href="#home" 
            className="nav-link text-white/70 hover:text-white transition-all duration-300 relative group"
          >
            Home
            <span className="absolute -bottom-1 left-0 w-0 h-px bg-white group-hover:w-full transition-all duration-300"></span>
          </a>
        </li>
        <li>
          <a 
            href="#projects" 
            className="nav-link text-white/70 hover:text-white transition-all duration-300 relative group"
          >
            Projects
            <span className="absolute -bottom-1 left-0 w-0 h-px bg-white group-hover:w-full transition-all duration-300"></span>
          </a>
        </li>
        <li>
          <a 
            href="https://drive.google.com/file/d/1J5Rp39CWvvAKIRGvTC_aLIHEdo6v0YCf/view?usp=sharing" 
            target="_blank"
            className="nav-link text-white/70 hover:text-white transition-all duration-300 relative group"
          >
            Resume
            <span className="absolute -bottom-1 left-0 w-0 h-px bg-white group-hover:w-full transition-all duration-300"></span>
          </a>
        </li>
      
        <li>
          <a 
            href="https://github.com/ShauryaPundirGraphicEra/" target="_" 
            className="nav-link text-white/70 hover:text-white transition-all duration-300 relative group"
          >
            <img className="w-5 invert" src="/github.png" />
            <span className="absolute -bottom-1 left-0 w-0 h-px bg-white group-hover:w-full transition-all duration-300"></span>
          </a>
        </li>
        <li>
          <a 
            href="https://www.linkedin.com/in/shauryapundir/" target="_" 
            className="nav-link text-white/70 hover:text-white transition-all duration-300 relative group"
          >
            <img className="w-5 invert" src="/linkedin.png" />
            <span className="absolute -bottom-1 left-0 w-0 h-px bg-white group-hover:w-full transition-all duration-300"></span>
          </a>
        </li>
      </ul>
    </nav>
  );
}