import React, { useEffect } from 'react';

const MatterAnimation = () => {
  useEffect(() => {
    // Function to load a script
    const loadScript = (src, onDone) => {
      const script = document.createElement('script');
      script.src = src;
      script.onload = onDone;
      script.onerror = () => console.error(`Failed to load script: ${src}`);
      document.body.appendChild(script);
    };

    // Load scripts in sequence
    loadScript('https://cdnjs.cloudflare.com/ajax/libs/matter-js/0.12.0/matter.min.js', () => {
      loadScript('https://cdn.jsdelivr.net/npm/matter-wrap@0.2.0/build/matter-wrap.min.js', () => {
        loadScript('https://cdn.jsdelivr.net/npm/matter-attractors@0.1.6/build/matter-attractors.min.js', () => {
          loadScript('/matter.js'); // From the public folder
        });
      });
    });

    // Cleanup function to remove scripts when component unmounts
    return () => {
      const scripts = document.querySelectorAll('script[src*="matter"]');
      scripts.forEach(s => s.remove());
    };
  }, []);

  return <div className="absolute inset-0 hidden md:block" id="wrapper-canvas"></div>;
};

export default MatterAnimation;