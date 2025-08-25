import React from 'react';
import Logo from './icons/Logo';
import TelegramIcon from './icons/TelegramIcon';
import MoonIcon from './icons/MoonIcon';
import PhoneIcon from './icons/PhoneIcon';
import WhatsappIcon from './icons/WhatsappIcon';
import CV_File from '../assets/Towhidur_Rahman_Asif_CV.pdf';
const Header = () => {
  return (
    <header className="absolute w-full z-10">
      <div className="max-w-screen-xl mx-auto flex items-center justify-between px-4 mt-4">
        <div className="pointer-events-none">
          <Logo />
        </div>
        <div className="flex items-center gap-4 pointer-events-auto">
          {/* COMMENT: This is the new CV Download button with its tooltip. */}
          <div className="relative group">
            <a
              href={CV_File}
              download="Towhidur_Rahman_Asif_CV.pdf"
              className="bg-gray-700 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded-lg text-sm transition-colors"
            >
              CV
            </a>
            <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 hidden group-hover:block">
              <span className="relative z-10 p-2 text-xs leading-none text-white whitespace-no-wrap bg-gray-800 shadow-lg rounded-md">
                Download CV
              </span>
              <div className="w-3 h-3 -mt-2 rotate-45 bg-gray-800 mx-auto"></div>
            </div>
          </div>
          
          <a href="https://t.me/TOWHIDUR_RAHMAN_ASIF" target="_blank" rel="noopener noreferrer">
            <TelegramIcon />
          </a>
          <MoonIcon />
          <a href="tel: 01567833225">
            <PhoneIcon />
          </a>
          <a href="https://wa.me/8801567833225?text=Hi, How are you?" target="_blank" rel="noopener noreferrer">
            <WhatsappIcon />
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
