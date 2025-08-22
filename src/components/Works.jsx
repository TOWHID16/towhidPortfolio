import React from 'react';
import ExternalLinkIcon from './icons/ExternalLinkIcon';

const worksData = [
  {
    title: 'PhyCare',
    subtitle: '(Mental Health Platform)',
    description: 'Deeply understand advanced concepts, practice with real-world exercises, build expertise with hands-on projects to boost your career.',
    image: '/assets/images/ProCodrr.webp',
    link: 'https://procodrr.com',
    color: '#459bd5',
    tags: ['#react.js', '#express.js', '#node.js', '#swiper.js', '#mongoDB', '#mongoose', '#css', '#javascript', '#figma'],
    align: 'left'
  },
    {
    title: 'EazyGrad',
    subtitle: '(EdTech Startup)',
    description: 'Being a lead developer, revamped the site to a highly responsive, and interactive website. Created new features and pages. Worked as a team with product manager and ux designer.',
    image: '/assets/images/eazygrad.webp',
    link: '#',
    color: '#ffe578',
    textColor: 'text-black',
    tags: ['#react.js', '#express.js', '#node.js', '#swiper.js', '#mongoDB', '#mongoose', '#css', '#javascript', '#figma'],
    align: 'right'
  },
  {
    title: 'Harigurus',
    subtitle: '(Event Booking)',
    description: 'HariGurus is a one-stop-shop for all Hindu religious, customs and traditional requirements. Built the complete site from scratch.',
    image: '/assets/images/harigurus.webp',
    link: '#',
    color: '#fc815c',
    tags: ['#react.js', '#express.js', '#node.js', '#swiper.js', '#mongoDB', '#mongoose', '#css', '#javascript', '#figma'],
    align: 'left'
  },
  {
    title: 'Web Dev English',
    subtitle: '(Coaching and Consulting)',
    description: "Being a lead developer, revamped the site to a highly responsive, and interactive website. Created new features and pages. Worked as a team with product manager and ux designer.",
    image: '/assets/images/web-dev-english.webp',
    link: '#',
    color: '#47afa1',
    tags: ['#react.js', '#express.js', '#node.js', '#swiper.js', '#mongoDB', '#mongoose', '#css', '#javascript', '#figma'],
    align: 'right'
  },
    {
    title: 'Pioneer Digital',
    subtitle: '(Digital Marketing Agency)',
    description: 'One of the featured site while working with TheBrandWick.com (agency). Worked as a frontend developer to make the site user-interactive and responsive.',
    image: '/assets/images/pioneer-digital.webp',
    link: '#',
    color: '#fc815c',
    tags: ['#react.js', '#express.js', '#node.js', '#swiper.js', '#mongoDB', '#mongoose', '#css', '#javascript', '#figma'],
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
