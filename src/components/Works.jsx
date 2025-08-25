import React from 'react';
import ExternalLinkIcon from './icons/ExternalLinkIcon';

const worksData = [
  {
    title: 'PhyCare',
    subtitle: '(Mental Health Platform)',
    description: 'A comprehensive mental wellness platform offering anonymous problem-sharing, AI-powered insights, and private video sessions with verified mental health professionals.',
    image: '/assets/images/PhyCare.webp',
    link: '#',
    color: '#459bd5',
    tags: ['#react.js', '#express.js', '#node.js', '#mongoDB', '#mongoose', '#jwt', '#tailwind css', '#vite', '#webrtc', '#openapi', '#figma'],
    align: 'left'
  },
    {
    title: 'MessEase',
    subtitle: '(Multi-Tenant Mess Management Platform)',
    description: 'MessEase simplifies meal and expense tracking for shared living. A manager-centric system where managers handle entries, and members view transparent reports. No paperwork, no hassle.',
    image: '/assets/images/MessEase.webp',
    link: 'https://mess-easy.vercel.app/',
    color: '#ffe578',
    textColor: 'text-black',
    tags: ['#react.js', '#express.js', '#node.js', '#mongoDB', '#mongoose', '#jwt', '#tailwind css', '#vite', '#figma'],
    align: 'right'
  },
  {
    title: 'AI-Shomachar',
    subtitle: '(All in One AI Tools Platform)',
    description: 'A comprehensive AI-powered SaaS application that enables users to effortlessly generate a wide range of content, including conversations, code, images, music, and videos, all from a single, intuitive dashboard.',
    image: '/assets/images/AI-Shomachar.webp',
    link: '#',
    color: '#fc815c',
    tags: ['#react.js', '#express.js', '#node.js', '#mongoDB', '#mongoose', '#jwt', '#tailwind css', '#vite', '#openai', '#geminiapi'],
    align: 'left'
  },
  {
    title: 'Book Recommendation',
    subtitle: '(Intelligent Book Recommendation Engine)',
    description: "A content-based filtering system that provides personalized book recommendations. By analyzing a vast dataset of books and user ratings, this machine learning model suggests new reading material to users based on their previously liked books, helping them discover titles aligned with their unique tastes.",
    image: '/assets/images/BookRecomendation.webp',
    link: 'https://book-recommender-system-v20n.onrender.com/',
    color: '#47afa1',
    tags: ['#python', '#flask', '#pandas', '#numpy', '#scikit-learn', '#machine-learning', '#html', '#css', '#bootstrap'],
    align: 'right'
  },
    {
    title: 'TabPulse',
    subtitle: '(Extension for Monitoring Tab Health)',
    description: 'A smart Chrome extension that automatically detects and suspends idle or resource-heavy tabs to significantly boost browser speed and reduce memory consumption. Features include customizable timers, pre-suspension warnings, and intelligent safeguards.',
    image: '/assets/images/TabPulse.webp',
    link: 'https://github.com/TOWHID16/TabPulse-Extension',
    color: '#fc815c',
    tags: ['#JavaScript (ES6+)', '#Chrome Extension API (MV3)', '#Service Worker', '#Chrome Storage API', '#HTML5', '#CSS3', '#Asynchronous JS'],
    align: 'left'
  }
];

const WorkItem = ({ work }) => {
    const isLeft = work.align === 'left';
    return (
        <div className="flex flex-col sm:flex-row gap-4 mt-12 sm:gap-[80px] items-center sm:mt-20 relative">
            <div className={`h-[1px] ${isLeft ? 'left-1/4 right-1/2' : 'left-1/2 right-1/4'} bg-[#1788ae] absolute top-1/2 hidden sm:block`}></div>
            <div className="w-4 h-4 rounded-full border-[3px] absolute left-1/2 -translate-x-1/2 bg-[#111] z-10 hover:scale-110 ease-in-out duration-100 hidden sm:block" style={{ borderColor: work.color }}></div>
            
            <a href={work.link} className={`flex w-full relative justify-center sm:justify-start ${!isLeft ? 'sm:order-2' : ''}`}>
                <div className={`flex flex-col items-center relative group sm:hover:scale-105 ease-in-out duration-200 ${!isLeft ? 'sm:ml-auto' : 'sm:mr-auto'}`}>
                    <img className="max-w-[400px] w-full relative z-10 drop-shadow-[0_0px_60px_rgba(59,130,246,0.6)]" src={work.image} alt={work.title} />
                    <span className={`flex group-hover:-top-14 ease-jump duration-200 sm:absolute left-1/2 sm:-translate-x-1/2 top-5 px-2 py-1 text-sm sm:text-base mt-2 rounded w-max items-center gap-1 after:hidden sm:after:block after:w-4 after:h-4 after:bg-inherit after:absolute after:left-1/2 after:-translate-x-1/2 after:rotate-45 after:-bottom-2 ${work.textColor || ''}`} style={{ backgroundColor: work.color }}>
                        {work.title} <ExternalLinkIcon />
                    </span>
                </div>
            </a>

            <div className={`w-full ${!isLeft ? 'sm:order-1' : ''}`}>
                <h3 className="font-bold text-2xl md:text-4xl" style={{ color: work.color }}>{work.title}</h3>
                <span className="text-base md:text-lg" style={{ color: work.color }}>{work.subtitle}</span>
                <p className="text-justify text-sm md:text-base mt-2">{work.description}</p>
                <ul className="flex flex-wrap gap-2 mt-2">
                    {work.tags.map((tag, index) => (
                        <li key={index} className="border rounded-[50px] border-[#999] px-[10px] py-[5px] text-sm md:text-base">{tag}</li>
                    ))}
                </ul>
            </div>
        </div>
    );
};


const Works = React.forwardRef((props, ref) => {
  return (
    <section ref={ref} className="max-w-screen-xl mx-auto px-4 relative pb-8 sm:pb-16">
      {/* COMMENT: The following classes were changed to create the bordered box effect.
        - Removed `sm:border-b-2` (which created the underline).
        - Added `sm:border-2` (to create a full border on small screens and up).
        - Added `rounded-md` (to make the corners of the border rounded).
      */}
      <h2 className="text-3xl sm:text-[40px] bg-[#111] relative z-10 font-bold px-4 py-2 w-max mx-auto text-center text-[#1788ae] sm:border-2 border-[#1788ae] rounded-md">
        Latest Works
      </h2>
      {worksData.map((work, index) => (
        <WorkItem key={index} work={work} />
      ))}
      <div className="w-[2px] hidden sm:block bg-[#1788ae] absolute top-0 bottom-0 left-1/2 -translate-x-1/2"></div>
    </section>
  );
});

export default Works;
