import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Features from '../components/Features';
import Gameplay from '../components/Gameplay';
import Community from '../components/Community';
import Shop from '../components/Shop';
import Footer from '../components/Footer';

const HomePage: React.FC = () => {
  // Animation pour le bouton de retour en haut
  const controls = useAnimation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 500) {
        controls.start({ opacity: 1, y: 0 });
      } else {
        controls.start({ opacity: 0, y: 20 });
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [controls]);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <div className="bg-black text-white min-h-screen">
      <Header />
      <Hero />
      <Features />
      <Gameplay />
      <Community />
      <Shop />
      <Footer />

      {/* Bouton de retour en haut */}
      <motion.button
        className="fixed bottom-8 right-8 bg-[#FF6F00] hover:bg-[#E65100] text-white w-12 h-12 rounded-full flex items-center justify-center shadow-lg z-50"
        onClick={scrollToTop}
        initial={{ opacity: 0, y: 20 }}
        animate={controls}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        aria-label="Retour en haut"
      >
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          className="h-6 w-6" 
          fill="none" 
          viewBox="0 0 24 24" 
          stroke="currentColor"
        >
          <path 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            strokeWidth={2} 
            d="M5 10l7-7m0 0l7 7m-7-7v18" 
          />
        </svg>
      </motion.button>
    </div>
  );
};

export default HomePage;
