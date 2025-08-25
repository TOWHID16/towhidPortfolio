import React from 'react';
import Logo from './icons/Logo';
import TelegramIcon from './icons/TelegramIcon';
import MoonIcon from './icons/MoonIcon';
import PhoneIcon from './icons/PhoneIcon';
import WhatsappIcon from './icons/WhatsappIcon';
import DownloadIcon from './icons/DownloadIcon';
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


            <a
            href={CV_File}
            download="Towhidur_Rahman_Asif_CV.pdf"
            className="flex items-center gap-2 bg-gray-700 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded-lg text-sm transition-colors"
          >
            CV
            <DownloadIcon />
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
