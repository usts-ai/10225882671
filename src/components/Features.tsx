import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaGamepad, FaTrophy, FaUsers, FaMap } from 'react-icons/fa';

const Features: React.FC = () => {
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
    visible: (i: number) => ({
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        delay: i * 0.1,
        ease: [0.6, 0.05, 0.01, 0.9]
      }
    })
  };

  const features = [
    {
      icon: <FaGamepad className="text-4xl text-[#FF6F00]" />,
      title: "Gameplay Immersif",
      description: "Plongez dans un monde ouvert riche et détaillé avec des graphismes de pointe et une physique réaliste."
    },
    {
      icon: <FaTrophy className="text-4xl text-[#FF6F00]" />,
      title: "Système de Progression",
      description: "Évoluez à travers un système de compétences complexe et personnalisez votre style de jeu selon vos préférences."
    },
    {
      icon: <FaUsers className="text-4xl text-[#FF6F00]" />,
      title: "Mode Multijoueur",
      description: "Affrontez d'autres joueurs ou coopérez pour accomplir des missions épiques dans un environnement en constante évolution."
    },
    {
      icon: <FaMap className="text-4xl text-[#FF6F00]" />,
      title: "Monde Dynamique",
      description: "Explorez un univers où vos actions ont un impact réel sur l'environnement et l'histoire du jeu."
    }
  ];

  return (
    <section id="features" className="py-20 bg-gradient-to-b from-black to-gray-900">
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
            custom={0}
            className="text-3xl md:text-4xl font-bold text-white mb-4"
          >
            Fonctionnalités <span className="text-[#FF6F00]">Exceptionnelles</span>
          </motion.h2>
          <motion.p 
            variants={itemVariants}
            custom={1}
            className="text-gray-400 max-w-2xl mx-auto"
          >
            Découvrez ce qui rend GameUniverse unique et pourquoi des millions de joueurs à travers le monde l'adorent.
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              custom={index + 2}
              className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-xl p-6 hover:bg-gray-800/50 transition-all duration-300 hover:shadow-xl hover:shadow-[#FF6F00]/10 group"
              whileHover={{ y: -10 }}
            >
              <div className="bg-black/30 rounded-full w-16 h-16 flex items-center justify-center mb-4 group-hover:bg-[#FF6F00]/20 transition-colors duration-300">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-2">{feature.title}</h3>
              <p className="text-gray-400">{feature.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div 
          className="mt-16 text-center"
          variants={itemVariants}
          custom={6}
        >
          <motion.button
            className="bg-gradient-to-r from-[#FF6F00] to-[#FFAB00] text-white px-8 py-3 rounded-lg font-bold shadow-lg inline-flex items-center"
            whileHover={{ scale: 1.05, boxShadow: "0px 5px 15px rgba(255, 111, 0, 0.4)" }}
            whileTap={{ scale: 0.95 }}
          >
            En Savoir Plus
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Features;
