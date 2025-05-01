import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaDiscord, FaTwitch, FaYoutube, FaTwitter } from 'react-icons/fa';

const Community: React.FC = () => {
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

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: (i: number) => ({
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.6,
        delay: i * 0.1,
        ease: "easeOut"
      }
    }),
    hover: {
      y: -10,
      boxShadow: "0px 10px 20px rgba(255, 111, 0, 0.2)",
      transition: {
        duration: 0.3,
        ease: "easeInOut"
      }
    }
  };

  const socialPlatforms = [
    {
      icon: <FaDiscord className="text-4xl text-[#5865F2]" />,
      name: "Discord",
      members: "50K+ membres",
      description: "Rejoignez notre serveur Discord pour discuter avec d'autres joueurs et recevoir de l'aide.",
      color: "from-[#5865F2]/20 to-[#5865F2]/5"
    },
    {
      icon: <FaTwitch className="text-4xl text-[#9146FF]" />,
      name: "Twitch",
      members: "25K+ abonnés",
      description: "Regardez nos streams hebdomadaires et des tournois exclusifs en direct.",
      color: "from-[#9146FF]/20 to-[#9146FF]/5"
    },
    {
      icon: <FaYoutube className="text-4xl text-[#FF0000]" />,
      name: "YouTube",
      members: "100K+ abonnés",
      description: "Découvrez des tutoriels, des analyses et des moments forts de gameplay.",
      color: "from-[#FF0000]/20 to-[#FF0000]/5"
    },
    {
      icon: <FaTwitter className="text-4xl text-[#1DA1F2]" />,
      name: "Twitter",
      members: "75K+ followers",
      description: "Suivez-nous pour les dernières actualités, mises à jour et événements spéciaux.",
      color: "from-[#1DA1F2]/20 to-[#1DA1F2]/5"
    }
  ];

  // Témoignages de joueurs
  const testimonials = [
    {
      avatar: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100' viewBox='0 0 100 100'%3E%3Ccircle cx='50' cy='50' r='50' fill='%23FF6F00'/%3E%3Ccircle cx='50' cy='40' r='20' fill='%23FFF'/%3E%3Ccircle cx='50' cy='90' r='35' fill='%23FFF'/%3E%3C/svg%3E",
      name: "Thomas D.",
      role: "Joueur depuis 2 ans",
      quote: "GameUniverse a complètement changé ma façon de voir les jeux vidéo. L'immersion est incroyable et la communauté est fantastique !"
    },
    {
      avatar: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100' viewBox='0 0 100 100'%3E%3Ccircle cx='50' cy='50' r='50' fill='%23FFAB00'/%3E%3Ccircle cx='50' cy='40' r='20' fill='%23FFF'/%3E%3Ccircle cx='50' cy='90' r='35' fill='%23FFF'/%3E%3C/svg%3E",
      name: "Sophie M.",
      role: "Streameuse",
      quote: "En tant que streameuse, j'adore partager mes aventures dans GameUniverse. Le jeu offre tellement de possibilités et de moments épiques à partager !"
    },
    {
      avatar: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100' viewBox='0 0 100 100'%3E%3Ccircle cx='50' cy='50' r='50' fill='%23E65100'/%3E%3Ccircle cx='50' cy='40' r='20' fill='%23FFF'/%3E%3Ccircle cx='50' cy='90' r='35' fill='%23FFF'/%3E%3C/svg%3E",
      name: "Lucas P.",
      role: "Compétiteur",
      quote: "Le système de combat est parfaitement équilibré pour les compétitions. Je n'ai jamais vu un jeu aussi bien pensé pour les joueurs professionnels et amateurs."
    }
  ];

  return (
    <section id="community" className="py-20 bg-gradient-to-b from-black to-gray-900 overflow-hidden">
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
            Rejoignez Notre <span className="text-[#FF6F00]">Communauté</span>
          </motion.h2>
          <motion.p 
            variants={itemVariants}
            custom={1}
            className="text-gray-400 max-w-2xl mx-auto"
          >
            Connectez-vous avec des milliers de joueurs passionnés et participez à la croissance de l'univers du jeu.
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {socialPlatforms.map((platform, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              custom={index}
              whileHover="hover"
              className={`bg-gradient-to-b ${platform.color} backdrop-blur-sm border border-gray-800 rounded-xl p-6 transition-all duration-300`}
            >
              <div className="flex items-center mb-4">
                {platform.icon}
                <div className="ml-3">
                  <h3 className="text-xl font-bold text-white">{platform.name}</h3>
                  <p className="text-sm text-gray-400">{platform.members}</p>
                </div>
              </div>
              <p className="text-gray-300 mb-4">{platform.description}</p>
              <motion.button
                className="w-full bg-white/10 hover:bg-white/20 text-white py-2 rounded-lg font-medium transition-colors duration-300"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
              >
                Rejoindre
              </motion.button>
            </motion.div>
          ))}
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={controls}
          className="mt-20"
        >
          <motion.h3 
            variants={itemVariants}
            custom={0}
            className="text-2xl font-bold text-white text-center mb-10"
          >
            Ce que disent nos joueurs
          </motion.h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                custom={index + 1}
                className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-xl p-6 relative"
              >
                <div className="absolute -top-6 left-1/2 transform -translate-x-1/2">
                  <img 
                    src={testimonial.avatar} 
                    alt={testimonial.name} 
                    className="w-12 h-12 rounded-full border-2 border-[#FF6F00]"
                  />
                </div>
                <div className="pt-6 text-center">
                  <h4 className="text-lg font-bold text-white">{testimonial.name}</h4>
                  <p className="text-sm text-[#FF6F00] mb-4">{testimonial.role}</p>
                  <p className="text-gray-400 italic">"{testimonial.quote}"</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div 
          className="mt-16 text-center"
          variants={itemVariants}
          custom={5}
        >
          <motion.div
            className="inline-block bg-gradient-to-r from-[#FF6F00] to-[#FFAB00] p-[2px] rounded-lg"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <button className="bg-gray-900 text-white px-8 py-3 rounded-lg font-bold">
              Créer un Compte
            </button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Community;
