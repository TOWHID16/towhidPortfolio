import React from 'react';

// A reusable component for the MERN stack icons with tooltips
const TechIcon = ({ name, initialColor, tooltipBgColor, tooltipTextColor, children }) => (
  <div className="relative group flex flex-col items-center">
    {children}
    {/* Uses the specific color for the initial */}
    <span className={`mt-2 font-bold ${initialColor}`}>{name.charAt(0)}</span>
    <div className="absolute bottom-full mb-2 hidden group-hover:block">
      {/* Uses specific colors for the tooltip's background and text */}
      <span className={`relative z-10 p-2 text-xs leading-none whitespace-no-wrap shadow-lg rounded-md ${tooltipBgColor} ${tooltipTextColor}`}>
        {name}
      </span>
      {/* The arrow now also matches the tooltip's background color */}
      <div className={`w-3 h-3 -mt-2 rotate-45 mx-auto ${tooltipBgColor}`}></div>
    </div>
  </div>
);

const AboutMe = ({ onClose }) => {
  const skills = [
    '#c', '#c++', '#javascript', '#react.js', '#node.js', '#express.js', '#mongoDB', '#mongoose',
    '#cloudinary', '#html', '#css', '#tailwind', '#git',
    '#github', '#jwt', '#terminal', '#figma' 
  ];

  return (
    <div className="fixed inset-0 bg-black bg-opacity-80 z-50 flex justify-center items-start sm:items-center p-4 overflow-y-auto ">
      <div className="bg-gradient-to-b from-[#111827] to-[#1F2937] border border-cyan-700/50  rounded-lg max-w-4xl w-full p-8 relative animate-fade-in shadow-2xl shadow-cyan-500/20 my-auto">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors"
          
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <div className="grid md:grid-cols-2 gap-8 items-center">
          {/* Left Column: Text and Skills */}
          <div className="flex flex-col h-full">
            <h2 className="text-3xl font-bold text-[#1788ae] mb-4">ABOUT ME</h2>
            <p className="text-gray-300 mb-6 text-base leading-relaxed">
              I am a passionate undergraduate Software Engineering student at SUST, deeply interested in full-stack web development. I'm currently honing my skills in the full-stack web development, applying my academic knowledge to build dynamic and creative web applications. My goal is to transform complex ideas into simple, beautiful, and functional digital experiences.
            </p>
            <div className="flex flex-wrap gap-2 mb-8">
              {skills.map(skill => (
                <span key={skill} className="border rounded-full border-gray-600 px-3 py-1 text-sm text-gray-400">
                  {skill}
                </span>
              ))}
            </div>
            <h3 className="text-xl font-bold text-[#1788ae] mb-4">MERN STACK</h3>
            <div className="flex justify-around items-center mt-auto">
              <TechIcon
                name="MongoDB"
                initialColor="text-green-500"
                tooltipBgColor="bg-green-500"
                tooltipTextColor="text-white"
              >
                <img src="https://skillicons.dev/icons?i=mongodb" alt="MongoDB Icon" className="w-12 h-12" />
              </TechIcon>
              <TechIcon
                name="Express.JS"
                initialColor="text-gray-400"
                tooltipBgColor="bg-gray-800"
                tooltipTextColor="text-white"
              >
                <img src="https://skillicons.dev/icons?i=express" alt="Express.js Icon" className="w-12 h-12" />
              </TechIcon>
              <TechIcon
                name="React.JS"
                initialColor="text-cyan-400"
                tooltipBgColor="bg-cyan-400"
                tooltipTextColor="text-white"
              >
                 <img src="https://skillicons.dev/icons?i=react" alt="React.js Icon" className="w-12 h-12" />
              </TechIcon>
              <TechIcon
                name="Node.JS"
                initialColor="text-green-500"
                tooltipBgColor="bg-green-500"
                tooltipTextColor="text-white"
              >
                <img src="https://skillicons.dev/icons?i=nodejs" alt="Node.js Icon" className="w-12 h-12" />
              </TechIcon>
            </div>
          </div>
          
          {/* Right Column: Image with Gradient Border (UPDATED) */}
          <div className="flex items-center justify-center p-5">
            <div className="relative p-1 rounded-xl bg-gradient-to-br from-[#1788ae] via-[#00aeff] to-[#1788ae] shadow-lg shadow-cyan-500/20">
              <div className="bg-[#111] rounded-lg">
                <img 
                  src="/assets/images/about.png" // <-- REPLACE WITH YOUR NEW IMAGE PATH
                  alt="Developer illustration" 
                  className="max-w-sm w-full rounded-lg" 
                />
              </div>
            </div>
          </div>

          {/* Right Column: Image with Subtle Glow */}
{/* <div className="flex items-center justify-center">
  <img 
    src="/assets/images/about-me-new.png" // <-- IMPORTANT: Use your new image path here
    alt="Your Name" 
    className="max-w-sm w-full rounded-xl shadow-xl shadow-cyan-500/30" 
  />
</div> */}

        </div>
      </div>
    </div>
  );
};

export default AboutMe;



// import React from 'react';

// // A reusable component for the MERN stack icons with tooltips and gradient borders
// const TechIcon = ({ name, initialColor, tooltipBgColor, tooltipTextColor, children }) => (
//   <div className="relative group flex flex-col items-center cursor-pointer">
//     {/* Gradient Border Circle */}
//     <div className="w-16 h-16 rounded-full bg-gradient-to-br from-cyan-400 to-blue-600 p-1 shadow-lg shadow-cyan-500/20 flex items-center justify-center">
//       <div className="w-full h-full bg-[#1e293b] rounded-full flex items-center justify-center">
//         {children}
//       </div>
//     </div>
//     <span className={`mt-2 font-bold ${initialColor}`}>{name.charAt(0)}</span>
//     <div className="absolute bottom-full mb-2 hidden group-hover:block transition-opacity duration-300">
//       <span className={`relative z-10 p-2 text-xs leading-none whitespace-no-wrap shadow-lg rounded-md ${tooltipBgColor} ${tooltipTextColor}`}>
//         {name}
//       </span>
//       <div className={`w-3 h-3 -mt-2 rotate-45 mx-auto ${tooltipBgColor}`}></div>
//     </div>
//   </div>
// );

// const AboutMe = ({ onClose }) => {
//   const skills = [
//     '#c', '#c++', '#javascript', '#react.js', '#node.js', '#express.js', '#mongoDB', '#mongoose',
//     '#cloudinary', '#html', '#css', '#tailwind', '#git',
//     '#github', '#jwt', '#terminal', '#figma'
//   ];

//   return (
//     // Modal Overlay
//     <div className="fixed inset-0 bg-black bg-opacity-80 z-50 flex justify-center items-center p-4 font-sans">
//       {/* Gradient Modal Container */}
//       <div className="bg-gradient-to-b from-[#111827] to-[#1F2937] border border-cyan-700/50 rounded-lg max-w-4xl w-full p-8 relative shadow-2xl shadow-cyan-500/20">
//         {/* Close Button */}
//         <button
//           onClick={onClose}
//           className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors z-10"
//           aria-label="Close"
//         >
//           <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
//           </svg>
//         </button>

//         <div className="grid md:grid-cols-2 gap-8 items-center">
//           {/* Left Column: Text and Skills */}
//           <div className="flex flex-col h-full">
//             <h2 className="text-3xl font-bold text-cyan-400 mb-4">ABOUT ME</h2>
//             <p className="text-gray-300 mb-6 text-base leading-relaxed">
//               I am a passionate undergraduate Software Engineering student at SUST, deeply interested in full-stack web development. I'm currently honing my skills in the full-stack web development, applying my academic knowledge to build dynamic and creative web applications. My goal is to transform complex ideas into simple, beautiful, and functional digital experiences.
//             </p>
//             <div className="flex flex-wrap gap-2 mb-8">
//               {skills.map(skill => (
//                 <span key={skill} className="bg-gray-800/50 border border-cyan-800/50 rounded-full px-3 py-1 text-sm text-cyan-300 shadow-sm">
//                   {skill}
//                 </span>
//               ))}
//             </div>
//             <div className="mt-auto">
//               <h3 className="text-xl font-bold text-cyan-400 mb-4">MERN STACK</h3>
//               <div className="flex justify-around items-center">
//                 <TechIcon
//                   name="MongoDB"
//                   initialColor="text-green-400"
//                   tooltipBgColor="bg-green-600"
//                   tooltipTextColor="text-white"
//                 >
//                   <img src="https://skillicons.dev/icons?i=mongodb" alt="MongoDB Icon" className="w-8 h-8" />
//                 </TechIcon>
//                 <TechIcon
//                   name="Express.JS"
//                   initialColor="text-gray-400"
//                   tooltipBgColor="bg-gray-700"
//                   tooltipTextColor="text-white"
//                 >
//                   <img src="https://skillicons.dev/icons?i=express" alt="Express.js Icon" className="w-8 h-8" />
//                 </TechIcon>
//                 <TechIcon
//                   name="React.JS"
//                   initialColor="text-cyan-400"
//                   tooltipBgColor="bg-cyan-500"
//                   tooltipTextColor="text-white"
//                 >
//                    <img src="https://skillicons.dev/icons?i=react" alt="React.js Icon" className="w-8 h-8" />
//                 </TechIcon>
//                 <TechIcon
//                   name="Node.JS"
//                   initialColor="text-green-400"
//                   tooltipBgColor="bg-green-600"
//                   tooltipTextColor="text-white"
//                 >
//                   <img src="https://skillicons.dev/icons?i=nodejs" alt="Node.js Icon" className="w-8 h-8" />
//                 </TechIcon>
//               </div>
//             </div>
//           </div>
          
//           {/* Right Column: Image with Glowing Border */}
//           <div className="flex items-center justify-center p-4">
//             {/* The Glowing Container */}
//             <div className="relative p-1.5 rounded-xl bg-gradient-to-br from-cyan-400 via-blue-500 to-cyan-600 shadow-2xl shadow-cyan-500/40">
//                 {/* This div creates the inner border effect */}
//                 <div className="bg-[#111827] rounded-lg p-1">
//                     <img 
//                       src="/assets/images/about.png" // IMPORTANT: Make sure this path is correct
//                       alt="Developer illustration" 
//                       className="max-w-sm w-full rounded-md" 
//                     />
//                 </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default AboutMe;
