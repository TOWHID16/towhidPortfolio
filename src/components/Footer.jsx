import React from 'react';
import LinkedinIcon from './icons/LinkedinIcon';
import TwitterIcon from './icons/TwitterIcon';
import InstagramIcon from './icons/InstagramIcon';
import EmailIcon from './icons/EmailIcon';
//import YoutubeIcon from './icons/YoutubeIcon';
import GitHubIcon from './icons/GitHubIcon'; 

const Footer = () => {
    const socialLinks = [
    { href: 'https://www.linkedin.com/in/towhidur-rahman-asif/', icon: <LinkedinIcon width={20} /> },
    { href: 'https://x.com/towhidasif29?s=21', icon: <TwitterIcon width={20} /> },
    { href: 'https://www.instagram.com/towhidasif29?igsh=MWVleWZwZDc1cHlpbg%3D%3D&utm_source=qr', icon: <InstagramIcon width={20} /> },
    { href: 'mailto:towhidasif@gmail.com', icon: <EmailIcon width={20} /> },
    //{ href: 'https://www.youtube.com/@procodrr', icon: <YoutubeIcon width={20} /> },
    { href: 'https://github.com/towhid16', icon: <GitHubIcon width={20} /> },
  ];
  return (
    <footer className="flex flex-col items-center pb-10">
      {/* <p className="text-xs text-gray-300">Towhid Asif © 2025</p> */}
      
      {/* COMMENT: This is the new section for your profile picture. */}
      <div className="my-4">
        <img
          // COMMENT: IMPORTANT! Change this src to the actual path of your photo.
          // For example, if your photo is in `public/assets/images/`, the path would be `/assets/images/your-photo.jpg`
          src="/assets/images/footer1.png"
          alt="Towhid Asif"
          className="w-12 h-12 rounded-full border-2 border-gray-500 object-cover"
        />
      </div>

      <p className="text-xs text-gray-300">Towhid Asif © 2025</p> <br />

      <ul className="mx-auto flex items-center justify-center gap-6 text-[#b0b2c3]">
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
