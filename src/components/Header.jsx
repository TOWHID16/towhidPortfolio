import React from 'react';
import Logo from './icons/Logo';
import TelegramIcon from './icons/TelegramIcon';
// import SunIcon from './icons/SunIcon';
import MoonIcon from './icons/MoonIcon';
import PhoneIcon from './icons/PhoneIcon';
import WhatsappIcon from './icons/WhatsappIcon';

const Header = () => {
  return (
    // CHANGE: The outer header is now only for positioning.
    <header className="absolute w-full z-10">
      {/* CHANGE: A new inner div now handles the max-width and centering. */}
      <div className="max-w-screen-xl mx-auto flex items-center justify-between px-4 mt-4">
        <div className="pointer-events-none">
          <Logo />
        </div>
        <div className="flex gap-4 pointer-events-auto">
          {/* <SunIcon /> */}
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