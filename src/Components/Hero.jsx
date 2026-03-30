// import { useRef } from "react";
// import { useGSAP } from "@gsap/react";
// import gsap from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";

// export function Hero() {
//   const heroRef = useRef(null);
//   const titleRef = useRef(null);
//   const subtitleRef = useRef(null);
//   const descRef = useRef(null);
//   const imageRef = useRef(null);

//   useGSAP(() => {
//     // === 1. LOAD-IN ANIMATION (runs once on mount) ===
//     const loadTl = gsap.timeline({
//       defaults: { ease: "power4.out" }
//     });

//     loadTl
//       .from(titleRef.current,    { y: 80, opacity: 0, duration: 1.2 })
//       .from(subtitleRef.current, { y: 60, opacity: 0, duration: 1.1 }, "-=0.8")
//       .from(descRef.current,     { y: 40, opacity: 0, duration: 1 },   "-=0.7")
//       .from(imageRef.current,    { 
//         scale: 0.85, 
//         opacity: 0, 
//         rotation: -6, 
//         duration: 1.4 
//       }, "-=1");

//     // === 2. SCROLLTRIGGER PINNING (clean version) ===
//     ScrollTrigger.create({
//       trigger: heroRef.current,
//       start: "top top",
//       end: "bottom 50%",
//       pin: true,
//       pinSpacing: true,
//       scrub: false,           // we don't scrub the pin itself
//       // markers: true,       // ← uncomment to debug pin area
//     });

//     // Gentle fade + slight move on the whole hero AFTER load-in
//     gsap.to(heroRef.current, {
//       scrollTrigger: {
//         trigger: heroRef.current,
//         start: "top top",
//         end: "bottom 50%",
//         scrub: 1.2,
//         // markers:true,
//       },
//       yPercent: -20,
//       opacity: 0.75,
//       scale: 0.96,
//       ease: "none",
     
//     });

//     // Image-only parallax (deeper movement)
//     gsap.to(imageRef.current, {
//       scrollTrigger: {
//         trigger: heroRef.current,
//         start: "top top",
//         end: "bottom top",
//         scrub: 2,
//       },
//       yPercent: -55,
//       scale: 1.15,
//       ease: "none",
//     });

//   }, { scope: heroRef });

//   return (
//     <section 
//       ref={heroRef} 
//       className="min-h-screen  flex items-center justify-center relative pt-20  overflow-hidden"
//     >
//       <div className="flex flex-row max-w-7xl  mx-auto bg-gradient-to-br from-white/10 via-white/5 to-transparent border border-white/20 rounded-3xl p-8 backdrop-blur-2xl shadow-2xl shadow-black/50">
        
//         {/* Left Text */}
//         <div className="flex flex-col mt-10 ml-10 max-w-[420px]  text-amber-50">
//           <h1 ref={titleRef} className="text-4xl font-bold font-sans">
//             Shaurya Pundir
//           </h1>
          
//           <span 
//             ref={subtitleRef}
//             className="text-6xl font-sans font-bold bg-gradient-to-r bg-[200%_auto] bg-clip-text text-transparent from-violet-500 via-indigo-500 to-blue-400 mt-4 block"
//           >
//             Full Stack AI &amp; MERN Developer
//           </span>

//           <span 
//             ref={descRef}
//             className="font-sans pt-12 text-lg leading-relaxed text-white/80"
//           >
//             Currently pursuing a B.Tech in Computer Science with a specialization
//             in AI. Strong foundation in AI, cloud computing, and development,
//             focused on solving complex real-world problems.
//           </span>
//         </div>

//         {/* Right Image */}
//         <div className="ml-12 flex items-center ">
//           {/* <img 
//             ref={imageRef}
//             className="w-[420px] mix-blend-screen" 
//             src="/hero2.png" 
//             alt="Hero"
//           /> */}
//           <video ref={imageRef}  className="md:w-[420px] sm:w-[40px]  sm: rounded-full mix-blend-screen"  src="/hero.mov" autoPlay muted playsInline/>
//         </div>
//       </div>

      
//     </section>
//   );
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
    // Load-in animation
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

    // Pinning + scroll animations (kept as-is, works on mobile)
    ScrollTrigger.create({
      trigger: heroRef.current,
      start: "top top",
      end: "bottom 50%",
      pin: true,
      pinSpacing: true,
      scrub: false,
    });

    gsap.to(heroRef.current, {
      scrollTrigger: {
        trigger: heroRef.current,
        start: "top top",
        end: "bottom 50%",
        scrub: 1,
      },
      yPercent: -20,
      opacity: 1,
      scale: 0.96,
      ease: "none",
    });

    gsap.to(imageRef.current, {
      scrollTrigger: {
        trigger: heroRef.current,
        start: "top top",
        end: "bottom top",
        scrub: 1,
      },
      yPercent: -55,
      scale: 1.15,
      ease: "none",
    });

    gsap.to(".bg-graphic", {
      rotate: 360,
      duration: 20,
      ease: "none",
      repeat: -1,
    });

    gsap.from(".g1-spin-left", {
      x: -20,
      duration: 0.7,
      ease: "power1.inOut",
    });

    gsap.from(".g1-spin-right", {
      x: 20,
      duration: 1.1,
      ease: "power1.inOut",
    });

  }, { scope: heroRef });

  return (
    <section 
      ref={heroRef} 
      className="min-h-screen flex items-center justify-center relative pt-12 pb-12 md:pt-20 overflow-hidden"
    >
     <img src="/bg.png" alt="graphic 1" className="bg-graphic absolute top w-60 bg-blend-hue"/> 
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12 
                        bg-gradient-to-br from-white/10 via-white/5 to-transparent 
                        border border-white/20 rounded-3xl p-6 md:p-8 lg:p-10 
                        backdrop-blur-2xl shadow-2xl shadow-black/50">
          {/* Left - Text Content */}
          <div className="flex flex-col w-full lg:max-w-1/2 text-center lg:text-left order-2 lg:order-1">
            <img src="/g1.png" alt="graphic 1" className="g1-spin-left absolute top-108  rotate-[-50deg] w-9 md:w-15"/>
            <img src="/g1.png" alt="graphic 1" className="g1-spin-right absolute top-108 right-5  rotate-[50deg] w-9 md:w-30 md:top-5 md:rotate-[30deg]"/>
            { /*  insert here*/ }
            <h1 
              ref={titleRef} 
              className="text-2xl sm:text-4xl lg:text-4xl font-bold font-sans text-amber-50"
            >
              Shaurya Pundir
            </h1>
            
            <span 
              ref={subtitleRef}
              className="text-4xl sm:text-5xl lg:text-6xl font-sans font-bold 
                         bg-gradient-to-r bg-[200%_auto] bg-clip-text text-transparent 
                         from-violet-500 via-indigo-500 to-blue-400 mt-4 block leading-tight"
            >
              Full Stack AI &amp; MERN Developer
            </span>

            <span 
              ref={descRef}
              className="font-sans pt-8 md:pt-12 text-base sm:text-lg leading-relaxed text-white/80 max-w-prose mx-auto lg:mx-0"
            >
              Currently pursuing a B.Tech in Computer Science with a specialization
              in AI. Strong foundation in AI, cloud computing, and development,
              focused on solving complex real-world problems.
            </span>
          </div>

          {/* Right - Video */}
          <div className="items-center w-full  max-w-[350px] lg:max-w-[420px] flex-shrink-0 order-1 lg:order-2 mx-auto lg:mx-0 ">
            <video 
              ref={imageRef}
              className="w-full h-auto rounded-2xl mix-blend-screen object-contain"
              src="/hero.mov" 
              autoPlay 
              muted 
              playsInline 
            />
          </div>

        </div>
      </div>
    </section>
  );
}
