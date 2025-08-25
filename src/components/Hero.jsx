import React from 'react';
import LinkedinIcon from './icons/LinkedinIcon';
import TwitterIcon from './icons/TwitterIcon';
import InstagramIcon from './icons/InstagramIcon';
import EmailIcon from './icons/EmailIcon';
import GitHubIcon from './icons/GitHubIcon';
import BackgroundLogo from './icons/BackgroundLogo';
import RightArrowIcon from './icons/RightArrowIcon';
import DownArrowIcon from './icons/DownArrowIcon';

// Accept the onAboutMeClick function as a prop
const Hero = ({ onAboutMeClick, onLatestWorksClick }) => {
  const socialLinks = [
    { href: 'https://www.linkedin.com/in/towhidur-rahman-asif/', icon: <LinkedinIcon /> },
    { href: 'https://x.com/towhidasif29?s=21', icon: <TwitterIcon /> },
    { href: 'https://www.instagram.com/towhidasif29?igsh=MWVleWZwZDc1cHlpbg%3D%3D&utm_source=qr', icon: <InstagramIcon /> },
    { href: 'mailto:towhidasif@gmail.com', icon: <EmailIcon /> },
    { href: 'https://github.com/towhid16', icon: <GitHubIcon /> },
  ];

  return (
    <section className="flex flex-col justify-center h-screen relative pointer-events-none">
      <div className="w-full px-4 max-w-screen-xl mx-auto">
        <BackgroundLogo />
        <div className="relative ml-4 md:ml-12">
          <h1 className="pointer-events-none text-5xl md:text-[80px] font-['Montserrat Alternates'] mr-12 text-white -translate-x-4">
            Towhidur Rahman Asif
          </h1>
          <p className="pointer-events-none font-['Merriweather'] italic my-4 md:my-8">
            Full Stack Developer
          </p>
          {/* Add the onClick handler to this button */}
          <button
            onClick={onAboutMeClick}
            className="bg-[#4595eb] py-2 px-5 rounded font-extrabold bg-gradient-to-l from-[#1595b6] to-[#1f2667e6] relative hover:scale-110 ease-in-out duration-100 group pointer-events-auto"
          >
            About Me
            <RightArrowIcon />
          </button>
        </div>
      </div>

      <ul className="ml-auto space-y-6 text-[#b0b2c3] absolute top-1/2 -translate-y-1/2 right-4">
        {socialLinks.map((link, index) => (
          <li key={index}>
            <a href={link.href} target="_blank" rel="noopener noreferrer" className="pointer-events-auto">
              {link.icon}
            </a>
          </li>
        ))}
      </ul>

      {/* This div uses your original positioning, so it won't move */}
      <div className="absolute bottom-20 left-1/2 -translate-x-1/2">
        <button 
        onClick={onLatestWorksClick}
        className="bg-[#4595eb] py-2 px-5 rounded font-extrabold bg-gradient-to-l from-[#1595b6] to-[#1f2667e6] relative hover:scale-110 ease-in-out duration-100 group pointer-events-auto">
          Latest Works
          <DownArrowIcon />
        </button>
      </div>
    </section>
  );
};

export default Hero;