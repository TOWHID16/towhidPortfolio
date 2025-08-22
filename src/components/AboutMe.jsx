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
    <div className="fixed inset-0 bg-black bg-opacity-70 z-50 flex justify-center items-center p-4">
      <div className="bg-[#111] border border-gray-700 rounded-lg max-w-4xl w-full p-8 relative animate-fade-in">
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
          <div>
            <h2 className="text-2xl font-bold text-[#1788ae] mb-4">ABOUT ME</h2>
            <p className="text-gray-300 mb-6">
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
              {/* Using the advanced TechIcon with your updated image URLs */}
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
          {/* Right Column: Image */}
          <div className="flex items-center justify-center">
            <img src="/assets/images/coder.svg" alt="Developer illustration" className="max-w-sm w-full" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;