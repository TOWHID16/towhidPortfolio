import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
// import required modules
import { Navigation, Pagination } from 'swiper/modules';

const testimonialsData = [
  {
    name: 'M.M. Zahid Hasan',
    title: 'Software Engineering Student, SUST',
    quote: '“Collaborating with Towhid on web projects is always a great experience. He is a fantastic team member who brings both strong technical skills and a creative approach to the table. His dedication to getting things right makes him an invaluable partner, and I hope to see all the great projects coming up!”',
    image: '/assets/images/zahid.JPG'
  },
  {
    name: 'Nafi Ullah Shafin',
    title: 'Software Engineer, App-Concept.com GmbH',
    quote: '“Towhid is an outstanding developer who always delivers beyond expectations! He quickly understands project needs, suggests smart improvements, and implements them flawlessly. His dedication and attention to detail make the process smooth and stress-free. Thanks to his work, my project is performing better than I imagined. I would be happy to collaborate with him again!”',
    image: '/assets/images/nafi.JPG'
  },
  {
    name: 'Sahidur Rahman Sharif',
    title: 'CSE Student, SUST',
    quote: '“Knowing Towhid, I can speak to his incredible work ethic, dedication and passion. His enthusiasm for technology is genuinely inspiring, and I have no doubt he will be an incredible developer.”',
    image: '/assets/images/sharif.jpg'
  }
];

const Testimonials = () => {
  return (
    <section className="max-w-screen-xl mx-auto pb-12">
      <h2 className="text-3xl sm:text-[40px] bg-[#111] sm:w-max relative z-10 font-bold px-4 py-2 mx-auto text-center text-[#1788ae] sm:border-2 border-[#1788ae] rounded-md">
        Kind Words
      </h2>
      <Swiper
        navigation={true}
        pagination={{ clickable: true }}
        modules={[Navigation, Pagination]}
        className="mySwiper !py-14"
      >
        {testimonialsData.map((testimonial, index) => (
          <SwiperSlide key={index} className="px-4">
            <div className="flex flex-col md:flex-row w-full md:max-w-[800px] items-center rounded-lg p-9 shadow-[0_0px_50px_rgba(59,130,246,0.6)] cursor-grab">
              <img className="shrink-0 w-[120px] h-[120px] md:w-[180px] md:h-[180px] rounded-full drop-shadow-[0_0px_80px_rgba(59,130,246,1)]" src={testimonial.image} alt={`testimonial ${index + 1}`} />
              <div className="testimonial-text ml-6 text-left pt-6 md:pt-16 relative">
                <p className="text-sm md:text-base mb-2">{testimonial.quote}</p>
                <h2 className="text-right text-[#459bd5] font-bold text-2xl md:text-4xl">{testimonial.name}</h2>
                <h5 className="text-right text-[#459bd5] text-base md:text-lg">{testimonial.title}</h5>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Testimonials;