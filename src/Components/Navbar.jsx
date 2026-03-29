// // export function Navbar() {
// //     return <>
// //     <nav className="w-full flex items-center justify-between pt-3 px-8">
// //         <div className="font-bold"> <img className=" w-6  invert" src="../public/code.png"></img></div>
// //         <ul className="font-bold flex ml-auto space-x-6 ">
// //             <li><a href="#home" className="text-gray-400 hover:text-white transition-colors duration-300">Home</a></li>
// //             <li><a href="#projects" className="text-gray-400 hover:text-white transition-colors duration-300">Projects</a></li>
// //             <li><a href="https://drive.google.com/file/d/1J5Rp39CWvvAKIRGvTC_aLIHEdo6v0YCf/view?usp=sharing" target="_blank" className="text-gray-400 hover:text-gray-900 transition-colors duration-300">Resume</a></li>
// //             <li><a href="#contact" className="text-gray-400 hover:text-gray-900 transition-colors duration-300">Contact</a></li>
// //         </ul>
// //     </nav>
// //     </>; 
// //  }
 







// import { useRef } from "react";
// import { useGSAP } from "@gsap/react";
// import gsap from "gsap";

// export function Navbar() {
//   const navRef = useRef(null);

//   useGSAP(() => {
//     if (!navRef.current) return;

//     // 1. Scroll behavior (hide a bit when scrolling down)
//     gsap.to(navRef.current, {
//       scrollTrigger: {
//         trigger: "body",
//         start: "top -80",
//         end: "top -300",
//         scrub: true,
//       },
//       y: -20,
//       opacity: 0.85,
//       ease: "none",
      
//     });

//     // 2. Hover animations on links (safe way)
//     const links = navRef.current.querySelectorAll('.nav-link');

//     links.forEach((link) => {
//       const onMouseEnter = () => {
//         gsap.to(link, {
//           scale: 1.05,
//           color: "#ffffff",
//           duration: 0.3,
//           ease: "power2.out",
//         });
//       };

//       const onMouseLeave = () => {
//         gsap.to(link, {
//           scale: 1,
//           color: "rgba(255,255,255,0.7)",
//           duration: 0.4,
//           ease: "power2.out",
//         });
//       };

//       link.addEventListener("mouseenter", onMouseEnter);
//       link.addEventListener("mouseleave", onMouseLeave);

//       // Cleanup when component unmounts
//       return () => {
//         link.removeEventListener("mouseenter", onMouseEnter);
//         link.removeEventListener("mouseleave", onMouseLeave);
//       };
//     });
//   }, { scope: navRef });   // ← Important: scope to navRef

//   return (
//     <nav 
//       ref={navRef}
//       className="fixed z-9999 top-0 left-0 right-0 w-full flex items-center justify-between pt-6 px-8 backdrop-blur-xl bg-black/40 border-b border-white/10 "
//     >
       
//       <div className="font-bold">
//         <img 
//           className="w-8 invert" 
//           src="/code.png" 
//           alt="Logo" 
//         />
//       </div>

//       {/* Nav Links */}
//       <ul className="font-bold flex ml-auto space-x-8 text-sm uppercase tracking-widest">
//         <li>
//           <a 
//             href="#home" 
//             className="nav-link text-white/70 hover:text-white transition-all duration-300 relative group"
//           >
//             Home
//             <span className="absolute -bottom-1 left-0 w-0 h-px bg-white group-hover:w-full transition-all duration-300"></span>
//           </a>
//         </li>
//         <li>
//           <a 
//             href="#projects" 
//             className="nav-link text-white/70 hover:text-white transition-all duration-300 relative group"
//           >
//             Projects
//             <span className="absolute -bottom-1 left-0 w-0 h-px bg-white group-hover:w-full transition-all duration-300"></span>
//           </a>
//         </li>
//         <li>
//           <a 
//             href="https://drive.google.com/file/d/1J5Rp39CWvvAKIRGvTC_aLIHEdo6v0YCf/view?usp=sharing" 
//             target="_blank"
//             className="nav-link text-white/70 hover:text-white transition-all duration-300 relative group"
//           >
//             Resume
//             <span className="absolute -bottom-1 left-0 w-0 h-px bg-white group-hover:w-full transition-all duration-300"></span>
//           </a>
//         </li>
      
//         <li>
//           <a 
//             href="https://github.com/ShauryaPundirGraphicEra/" target="_" 
//             className="nav-link text-white/70 hover:text-white transition-all duration-300 relative group"
//           >
//             <img className="w-5 invert" src="/github.png" />
//             <span className="absolute -bottom-1 left-0 w-0 h-px bg-white group-hover:w-full transition-all duration-300"></span>
//           </a>
//         </li>
//         <li>
//           <a 
//             href="https://www.linkedin.com/in/shauryapundir/" target="_" 
//             className="nav-link text-white/70 hover:text-white transition-all duration-300 relative group"
//           >
//             <img className="w-5 invert" src="/linkedin.png" />
//             <span className="absolute -bottom-1 left-0 w-0 h-px bg-white group-hover:w-full transition-all duration-300"></span>
//           </a>
//         </li>
//       </ul>
//     </nav>
//   );
// }




import { useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

export function Navbar() {
  const navRef = useRef(null);
  const [isOpen, setIsOpen] = useState(false);

  useGSAP(() => {
    if (!navRef.current) return;

    // Scroll behavior - slight hide on scroll down
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
  }, { scope: navRef });

  const toggleMenu = () => setIsOpen(!isOpen);

  const closeMenu = () => setIsOpen(false);

  return (
    <nav 
      ref={navRef}
      className="fixed z-50 top-0 left-0 right-0 w-full bg-black/70 backdrop-blur-xl border-b border-white/10"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          
          {/* Logo */}
          <div className="font-bold flex items-center">
            <img 
              className="w-7 md:w-8 invert" 
              src="/code.png" 
              alt="Logo" 
            />
          </div>

          {/* Desktop Navigation */}
          <ul className="hidden md:flex items-center gap-x-8 text-sm uppercase tracking-widest font-medium">
            <li>
              <a 
                href="#home" 
                className="nav-link text-white/70 hover:text-white transition-all duration-300 relative group"
                onClick={closeMenu}
              >
                Home
                <span className="absolute -bottom-1 left-0 w-0 h-px bg-white group-hover:w-full transition-all duration-300"></span>
              </a>
            </li>
            <li>
              <a 
                href="#projects" 
                className="nav-link text-white/70 hover:text-white transition-all duration-300 relative group"
                onClick={closeMenu}
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
                onClick={closeMenu}
              >
                Resume
                <span className="absolute -bottom-1 left-0 w-0 h-px bg-white group-hover:w-full transition-all duration-300"></span>
              </a>
            </li>
            <li>
              <a 
                href="https://github.com/ShauryaPundirGraphicEra/" 
                target="_blank"
                className="nav-link text-white/70 hover:text-white transition-all duration-300 relative group"
                onClick={closeMenu}
              >
                <img className="w-5 invert" src="/github.png" alt="GitHub" />
              </a>
            </li>
            <li>
              <a 
                href="https://www.linkedin.com/in/shauryapundir/" 
                target="_blank"
                className="nav-link text-white/70 hover:text-white transition-all duration-300 relative group"
                onClick={closeMenu}
              >
                <img className="w-5 invert" src="/linkedin.png" alt="LinkedIn" />
              </a>
            </li>
          </ul>

          {/* Hamburger Button - Visible only on mobile */}
          <button
            onClick={toggleMenu}
            className="md:hidden flex flex-col justify-center items-center w-8 h-8 space-y-1.5 focus:outline-none z-50"
            aria-label="Toggle menu"
          >
            <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${isOpen ? 'rotate-45 translate-y-2' : ''}`} />
            <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${isOpen ? 'opacity-0' : ''}`} />
            <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${isOpen ? '-rotate-45 -translate-y-2' : ''}`} />
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      <div 
        className={`md:hidden bg-black/95 backdrop-blur-xl border-b border-white/10 overflow-hidden transition-all duration-300 ${
          isOpen ? 'max-h-96' : 'max-h-0'
        }`}
      >
        <ul className="flex flex-col py-6 px-6 space-y-6 text-lg font-medium">
          <li>
            <a href="#home" className="text-white/80 hover:text-white block py-2" onClick={closeMenu}>Home</a>
          </li>
          <li>
            <a href="#projects" className="text-white/80 hover:text-white block py-2" onClick={closeMenu}>Projects</a>
          </li>
          <li>
            <a 
              href="https://drive.google.com/file/d/1J5Rp39CWvvAKIRGvTC_aLIHEdo6v0YCf/view?usp=sharing" 
              target="_blank"
              className="text-white/80 hover:text-white block py-2"
              onClick={closeMenu}
            >
              Resume
            </a>
          </li>
          <li className="flex gap-8 pt-4">
            <a 
              href="https://github.com/ShauryaPundirGraphicEra/" 
              target="_blank"
              onClick={closeMenu}
            >
              <img className="w-7 invert" src="/github.png" alt="GitHub" />
            </a>
            <a 
              href="https://www.linkedin.com/in/shauryapundir/" 
              target="_blank"
              onClick={closeMenu}
            >
              <img className="w-7 invert" src="/linkedin.png" alt="LinkedIn" />
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}