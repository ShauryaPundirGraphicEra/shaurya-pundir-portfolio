import {Navbar} from "../src/Components/Navbar";
import {Hero} from "../src/Components/Hero";
import { Projects} from "../src/Components/Projects";
import {Techstack} from "../src/Components/Techstack";
// import {Contact} from "../src/Components/Contact";

function App() {
  return (
    
    <div className="min-h-screen w-full bg-[#050505] relative overflow-hidden text-white">
      
     
      <div
        className="absolute inset-0 z-0 pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(circle 800px at 50% -100px, rgba(255,255,255,0.12), transparent)`,
        }} 
      />
      
     
      <div
        className="absolute inset-0 z-0 pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(circle 600px at 100% 100%, rgba(255,255,255,0.04), transparent)`,
        }} 
      />

      {/* Main Content wrapped with a z-index to stay above the background */}
      <Navbar />
      <div className="relative z-10">
        <Hero />
        <Projects/>
        <Techstack/>
       </div>
      
      {/* Footer */}
      
    </div>
  );
}

export default App;











// import { Navbar } from "../src/Components/Navbar";
// import { LaptopScene } from "../src/Components/LaptopScene"; // <-- Import the new scene
// import { Projects } from "../src/Components/Projects";
// import { Techstack } from "../src/Components/Techstack";

// function App() {
//   return (
//     <div className="min-h-screen w-full bg-[#050505] relative overflow-hidden text-white">
      
//       {/* Background Gradients */}
//       <div
//         className="absolute inset-0 z-0 pointer-events-none"
//         style={{
//           backgroundImage: `radial-gradient(circle 800px at 50% -100px, rgba(255,255,255,0.12), transparent)`,
//         }} 
//       />
//       <div
//         className="absolute inset-0 z-0 pointer-events-none"
//         style={{
//           backgroundImage: `radial-gradient(circle 600px at 100% 100%, rgba(255,255,255,0.04), transparent)`,
//         }} 
//       />

//       {/* Main Content */}
//       <Navbar />
//       <div className="relative z-10">
        
//         {/* Replaced <Hero /> with <LaptopScene /> */}
//         <LaptopScene /> 
        
//         <Projects/>
//         <Techstack/>
//       </div>
      
//     </div>
//   );
// }

// export default App;