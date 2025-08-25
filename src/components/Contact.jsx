import React, { useState } from 'react';
import UserIcon from './icons/UserIcon';
import FormEmailIcon from './icons/FormEmailIcon';

const Contact = () => {
  // State to hold form data
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  // State to handle submission status
  const [formSuccess, setFormSuccess] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const form = e.target;
    const netlifyFormData = new URLSearchParams(new FormData(form)).toString();

    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: netlifyFormData
    })
    .then(() => {
        setFormSuccess(true); // Show success message
    })
    .catch((error) => alert(error));
  };

  return (
    <section className="max-w-screen-xl mx-auto px-4 pb-12">
      <h2 className="text-3xl sm:text-[40px] bg-[#111] relative z-10 font-bold px-4 py-2 w-max mx-auto text-center text-[#1788ae] sm:border-2 border-[#1788ae] rounded-md">
        Let's Connect
      </h2>
      <div className="flex flex-col md:flex-row items-center mt-10">
        <div className="w-full">
          <img src="/assets/images/contact-me.svg" alt="phone" />
        </div>
        
        {formSuccess ? (
          <div className="w-full text-center p-8 bg-gray-800 rounded-lg">
            <h3 className="text-2xl font-bold text-green-400">Thank you!</h3>
            <p className="text-gray-300 mt-2">Your message has been sent successfully.</p>
          </div>
        ) : (
          <form 
            className="w-full" 
            name="contactUS" 
            data-netlify="true"
            onSubmit={handleSubmit}
          >
            <input type="hidden" name="form-name" value="contactUS" />
            
            <label htmlFor="name" className="block mb-2 text-sm font-medium text-white">Name</label>
            <div className="relative mb-4">
              <UserIcon />
              <input 
                type="text" 
                id="name" 
                name="name" 
                value={formData.name}
                onChange={handleChange}
                className="bg-gray-50 border-2 outline-none border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[#1788ae] focus:border-[#1788ae] block w-full ps-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white" 
                placeholder="Enter your name" 
                required
              />
            </div>

            <label htmlFor="email" className="block mb-2 text-sm font-medium text-white">Your Email</label>
            <div className="relative mb-4">
              <FormEmailIcon />
              <input 
                type="email" 
                id="email" 
                name="email" 
                value={formData.email}
                onChange={handleChange}
                className="bg-gray-50 border-2 outline-none border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[#1788ae] focus:border-[#1788ae] block w-full ps-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white" 
                placeholder="name@example.com"
                required
              />
            </div>

            <label htmlFor="message" className="block mb-2 text-sm font-medium text-white">Message</label>
            <textarea 
              id="message" 
              name="message" 
              rows="8" 
              value={formData.message}
              onChange={handleChange}
              className="bg-gray-50 border-2 outline-none border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[#1788ae] focus:border-[#1788ae] block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
              required
            ></textarea>

            <button type="submit" className="w-full text-white bg-[#1788ae] hover:bg-[#1280a4] focus:ring-4 focus:ring-[#4489a0] font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 focus:outline-none mt-4">
              Send
            </button>
          </form>
        )}
      </div>
    </section>
  );
};

export default Contact;
