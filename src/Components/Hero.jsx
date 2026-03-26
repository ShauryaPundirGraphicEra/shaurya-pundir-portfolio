// export function Hero(){
//     return <>
//         <div className="flex flex-row border max-h-fit bg-white/10 rounded-2xl p-2 backdrop-blur">
//                        <div className="flex flex-col mt-20 m-10 max-w-96">
//                             <h1 className="text-3xl font-bold font-sans py">Shaurya Pundir</h1>
//                             <span className="text-5xl font-sans font-bold bg-gradient-to-r bg-[200%_auto] bg-clip-text leading-tight text-transparent transition-all duration-300 from-cyan-400 via-blue-500 to-indigo-500">
//                               Full Stack AI & MERN Developer
//                             </span>
//                             <span className="font-sans text-gray-600 pt-10">
//                                 Currently pursuing a B.Tech in Computer Science with a specialization
//                                 in AI. Strong foundation in AI, cloud computing, and development,
//                                 focused on solving complex real-world problems.
//                             </span>
//                         </div>
//                         <div>
//                             <img className="w-96" src="../public/hero2.png"></img>
//                        </div>
//         </div>
//     </>;

// }













import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export function Hero() {
  const heroRef = useRef(null);
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const descRef = useRef(null);
  const imageRef = useRef(null);

  useGSAP(() => {
    // === 1. LOAD-IN ANIMATION (runs once on mount) ===
    const loadTl = gsap.timeline({
      defaults: { ease: "power4.out" }
    });

    loadTl
      .from(titleRef.current,    { y: 80, opacity: 0, duration: 1.2 })
      .from(subtitleRef.current, { y: 60, opacity: 0, duration: 1.1 }, "-=0.8")
      .from(descRef.current,     { y: 40, opacity: 0, duration: 1 },   "-=0.7")
      .from(imageRef.current,    { 
        scale: 0.85, 
        opacity: 0, 
        rotation: -6, 
        duration: 1.4 
      }, "-=1");

    // === 2. SCROLLTRIGGER PINNING (clean version) ===
    ScrollTrigger.create({
      trigger: heroRef.current,
      start: "top top",
      end: "bottom 50%",
      pin: true,
      pinSpacing: true,
      scrub: false,           // we don't scrub the pin itself
      // markers: true,       // ← uncomment to debug pin area
    });

    // Gentle fade + slight move on the whole hero AFTER load-in
    gsap.to(heroRef.current, {
      scrollTrigger: {
        trigger: heroRef.current,
        start: "top top",
        end: "bottom 50%",
        scrub: 1.2,
       //  markers:true,
      },
      yPercent: -20,
      opacity: 0.75,
      scale: 0.96,
      ease: "none",
     
    });

    // Image-only parallax (deeper movement)
    gsap.to(imageRef.current, {
      scrollTrigger: {
        trigger: heroRef.current,
        start: "top top",
        end: "bottom top",
        scrub: 2,
      },
      yPercent: -55,
      scale: 1.15,
      ease: "none",
    });

  }, { scope: heroRef });

  return (
    <section 
      ref={heroRef} 
      className="min-h-screen flex items-center justify-center relative pt-20 overflow-hidden"
    >
      <div className="flex flex-row max-w-7xl mx-auto bg-gradient-to-br from-white/10 via-white/5 to-transparent border border-white/20 rounded-3xl p-8 backdrop-blur-2xl shadow-2xl shadow-black/50">
        
        {/* Left Text */}
        <div className="flex flex-col mt-10 ml-10 max-w-[420px] text-amber-50">
          <h1 ref={titleRef} className="text-4xl font-bold font-sans">
            Shaurya Pundir
          </h1>
          
          <span 
            ref={subtitleRef}
            className="text-6xl font-sans font-bold bg-gradient-to-r bg-[200%_auto] bg-clip-text text-transparent from-violet-500 via-indigo-500 to-blue-400 mt-4 block"
          >
            Full Stack AI &amp; MERN Developer
          </span>

          <span 
            ref={descRef}
            className="font-sans pt-12 text-lg leading-relaxed text-white/80"
          >
            Currently pursuing a B.Tech in Computer Science with a specialization
            in AI. Strong foundation in AI, cloud computing, and development,
            focused on solving complex real-world problems.
          </span>
        </div>

        {/* Right Image */}
        <div className="ml-12 flex items-center ">
          <img 
            ref={imageRef}
            className="w-[420px] mix-blend-screen" 
            src="/hero2.png" 
            alt="Hero"
          />
        </div>
      </div>

      
    </section>
  );
}
