import React from 'react';
import LinkedinIcon from './icons/LinkedinIcon';
import TwitterIcon from './icons/TwitterIcon';
import InstagramIcon from './icons/InstagramIcon';
import EmailIcon from './icons/EmailIcon';
import GitHubIcon from './icons/GitHubIcon'; 

const Footer = () => {
    const socialLinks = [
    { href: 'https://www.linkedin.com/in/towhidur-rahman-asif/', icon: <LinkedinIcon width={20} /> },
    { href: 'https://x.com/towhidasif29?s=21', icon: <TwitterIcon width={20} /> },
    { href: 'https://www.instagram.com/towhidasif29?igsh=MWVleWZwZDc1cHlpbg%3D%3D&utm_source=qr', icon: <InstagramIcon width={20} /> },
    { href: 'mailto:towhidasif@gmail.com', icon: <EmailIcon width={20} /> },
    { href: 'https://github.com/towhid16', icon: <GitHubIcon width={20} /> },
  ];

  // COMMENT: This function will handle the smooth scroll to the top of the page.
  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth' // This makes the scroll smooth
    });
  };

  return (
    <footer className="flex flex-col items-center pb-10">
      {/* COMMENT: The image is now wrapped in a div to handle the click and hover effects. */}
      <div 
        className="my-4 relative group cursor-pointer"
        onClick={handleScrollToTop} // COMMENT: The scroll function is called when this is clicked.
      >
        <img
          src="/assets/images/footer1.png"
          alt="Towhid Asif"
          className="w-12 h-12 rounded-full border-2 border-gray-500 object-cover"
        />
        {/* COMMENT: This is the tooltip that appears on hover. */}
        <div className="absolute top-1/2 -translate-y-1/2 left-full ml-4 hidden group-hover:flex items-center">
          <div className="w-3 h-3 -mr-2 rotate-45 bg-[#1788ae]"></div>
          <span className="relative z-10 p-2 text-xs leading-none text-white whitespace-no-wrap bg-[#1788ae] shadow-lg rounded-md">
            To Top
          </span>
        </div>
      </div>

      <p className="text-xs text-gray-300">Towhid Asif © 2025</p>

      <ul className="mx-auto flex items-center justify-center gap-6 text-[#b0b2c3] mt-4">
          {socialLinks.map((link, index) => (
            <li key={index}>
              <a href={link.href} target="_blank" rel="noopener noreferrer" className="hover:text-white">
                {link.icon}
              </a>
            </li>
          ))}
      </ul>
    </footer>
  );
};

export default Footer;
