import React, { useState, useRef } from 'react'; // COMMENT: Import useRef
import Header from './components/Header';
import Hero from './components/Hero';
import Works from './components/Works';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import MatterAnimation from './components/MatterAnimation';
import AboutMe from './components/AboutMe';

function App() {
  const [isAboutMeOpen, setIsAboutMeOpen] = useState(false);

  // COMMENT: Create a ref that will point to the "Works" section
  const worksSectionRef = useRef(null);

  // COMMENT: Create a function that smoothly scrolls to the section
  const handleScrollToWorks = () => {
    worksSectionRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <Header />
      <MatterAnimation />
      <main>
        {/* COMMENT: Pass the new scroll function to the Hero component */}
        <Hero
          onAboutMeClick={() => setIsAboutMeOpen(true)}
          onLatestWorksClick={handleScrollToWorks}
        />
        {/* COMMENT: Pass the ref to the Works component so it knows where to scroll to */}
        <Works ref={worksSectionRef} />
        <Testimonials />
        <Contact />
      </main>
      <Footer />

      {isAboutMeOpen && <AboutMe onClose={() => setIsAboutMeOpen(false)} />}
    </>
  );
}

export default App;