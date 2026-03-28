import { useRef, useEffect } from "react";
import { Canvas } from "@react-three/fiber";
import { Html, Environment, ContactShadows } from "@react-three/drei";
import gsap from "gsap";
import { Hero } from "./Hero"; // Import your existing Hero component

// 1. The Laptop Model Component
function Laptop() {
  const lidRef = useRef(null);
  const screenRef = useRef(null);

  useEffect(() => {
    // Start the lid closed (rotated 90 degrees forward)
    lidRef.current.rotation.x = Math.PI / 2;
    
    // Start the screen opacity at 0
    if (screenRef.current) {
        screenRef.current.style.opacity = 0;
    }

    // GSAP Timeline for opening the lid and fading in the screen
    const tl = gsap.timeline({ delay: 0.5 });

    tl.to(lidRef.current.rotation, {
      x: -0.1, // Opens the lid slightly past 90 degrees
      duration: 1.5,
      ease: "power4.out",
    }).to(screenRef.current, {
      opacity: 1,
      duration: 1,
      ease: "power2.inOut",
    }, "-=0.5"); // Start fading in slightly before the lid finishes opening

  }, []);

  return (
    <group position={[0, -1, 0]}>
      {/* --- LAPTOP BASE (Keyboard area) --- */}
      <mesh position={[0, -0.1, 0]}>
        {/* Width, Height, Depth */}
        <boxGeometry args={[6, 0.2, 4]} />
        <meshStandardMaterial color="#2a2a2a" />
      </mesh>

      {/* --- LAPTOP LID (Hinged at the back: z = -2) --- */}
      <group position={[0, 0, -2]} ref={lidRef}>
        
        {/* Lid casing (shifted up so the pivot point remains at the bottom edge) */}
        <mesh position={[0, 1.9, 0]}>
          <boxGeometry args={[6, 3.8, 0.1]} />
          <meshStandardMaterial color="#1a1a1a" />
        </mesh>

        {/* --- THE SCREEN (Your Hero Component) --- */}
        <Html
          transform
          distanceFactor={1.2}
          position={[0, 1.9, 0.06]} // Placed slightly in front of the lid mesh
          rotation-x={0}
        >
          {/* We define a fixed dimension container so your Hero acts like a real webpage inside the screen */}
          <div 
            ref={screenRef}
            className="w-[1280px] h-[800px] overflow-y-auto bg-[#050505] rounded-lg pointer-events-auto custom-scrollbar"
            style={{ 
                border: "8px solid #000",
                opacity: 0 
            }}
          >
            {/* Render your exact Hero here */}
            <Hero />
          </div>
        </Html>
      </group>
    </group>
  );
}

// 2. The Main Scene Wrapper
export function LaptopScene() {
  return (
    // This container takes up the full screen height on your landing page
    <div className="w-full h-screen bg-transparent relative z-10">
      <Canvas camera={{ position: [0, 1, 6], fov: 45 }}>
        {/* Lighting */}
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={1} />
        
        {/* The Laptop */}
        <Laptop />
        
        {/* Environment reflections and shadows for realism */}
        <Environment preset="city" />
        <ContactShadows position={[0, -1.1, 0]} opacity={0.6} scale={10} blur={2} />
      </Canvas>
    </div>
  );
}