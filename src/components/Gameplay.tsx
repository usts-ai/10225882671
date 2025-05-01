import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Gameplay: React.FC = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: [0.6, 0.05, 0.01, 0.9]
      }
    }
  };

  const imageVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 1,
        ease: "easeOut"
      }
    }
  };

  // Utilisation d'images génériques pour la démo
  const gameplayImages = [
    "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='800' height='450' viewBox='0 0 800 450'%3E%3Crect width='800' height='450' fill='%23232323'/%3E%3Ctext x='400' y='225' font-family='Arial' font-size='30' fill='%23FF6F00' text-anchor='middle'%3EImage de Gameplay 1%3C/text%3E%3C/svg%3E",
    "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='800' height='450' viewBox='0 0 800 450'%3E%3Crect width='800' height='450' fill='%23232323'/%3E%3Ctext x='400' y='225' font-family='Arial' font-size='30' fill='%23FF6F00' text-anchor='middle'%3EImage de Gameplay 2%3C/text%3E%3C/svg%3E",
    "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='800' height='450' viewBox='0 0 800 450'%3E%3Crect width='800' height='450' fill='%23232323'/%3E%3Ctext x='400' y='225' font-family='Arial' font-size='30' fill='%23FF6F00' text-anchor='middle'%3EImage de Gameplay 3%3C/text%3E%3C/svg%3E"
  ];

  const gameplayFeatures = [
    "Monde ouvert immense à explorer",
    "Combats dynamiques et stratégiques",
    "Personnalisation complète du personnage",
    "Système de progression avancé",
    "Quêtes principales et secondaires captivantes",
    "Interactions sociales avec des PNJ"
  ];

  return (
    <section id="gameplay" className="py-20 bg-gradient-to-b from-gray-900 to-black overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={controls}
          className="text-center mb-16"
        >
          <motion.h2 
            variants={itemVariants}
            className="text-3xl md:text-4xl font-bold text-white mb-4"
          >
            Découvrez le <span className="text-[#FF6F00]">Gameplay</span>
          </motion.h2>
          <motion.p 
            variants={itemVariants}
            className="text-gray-400 max-w-2xl mx-auto"
          >
            Plongez dans un univers riche et détaillé où chaque décision compte et façonne votre aventure unique.
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={controls}
          >
            <div className="relative">
              {gameplayImages.map((image, index) => (
                <motion.div
                  key={index}
                  className="rounded-lg overflow-hidden shadow-2xl"
                  variants={imageVariants}
                  style={{
                    position: 'absolute',
                    top: `${index * 20}px`,
                    left: `${index * 20}px`,
                    zIndex: 3 - index,
                    transform: `rotate(${index * 2 - 2}deg)`,
                    width: '100%',
                    maxWidth: 'calc(100% - 40px)'
                  }}
                  whileHover={{ 
                    zIndex: 10, 
                    scale: 1.05,
                    rotate: 0,
                    transition: { duration: 0.3 }
                  }}
                >
                  <img 
                    src={image} 
                    alt={`Gameplay ${index + 1}`} 
                    className="w-full h-auto rounded-lg border-2 border-gray-800"
                  />
                </motion.div>
              ))}
              <div className="w-full h-80"></div> {/* Espace pour les images empilées */}
            </div>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={controls}
          >
            <motion.h3 
              variants={itemVariants}
              className="text-2xl font-bold text-white mb-6"
            >
              Une Expérience de Jeu Inégalée
            </motion.h3>
            
            <ul className="space-y-4">
              {gameplayFeatures.map((feature, index) => (
                <motion.li
                  key={index}
                  variants={itemVariants}
                  custom={index}
                  className="flex items-start"
                >
                  <div className="bg-[#FF6F00] rounded-full p-1 mt-1 mr-3">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                  </div>
                  <span className="text-gray-300">{feature}</span>
                </motion.li>
              ))}
            </ul>

            <motion.div 
              className="mt-8"
              variants={itemVariants}
            >
              <motion.button
                className="bg-gradient-to-r from-[#FF6F00] to-[#FFAB00] text-white px-6 py-3 rounded-lg font-bold shadow-lg inline-flex items-center"
                whileHover={{ scale: 1.05, boxShadow: "0px 5px 15px rgba(255, 111, 0, 0.4)" }}
                whileTap={{ scale: 0.95 }}
              >
                Voir la Bande-Annonce
              </motion.button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Gameplay;
