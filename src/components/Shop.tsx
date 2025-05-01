import React, { useEffect, useState } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaShoppingCart, FaStar, FaHeart } from 'react-icons/fa';

const Shop: React.FC = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  const [activeTab, setActiveTab] = useState('all');

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
        staggerChildren: 0.1,
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
        duration: 0.6,
        delay: i * 0.1,
        ease: [0.6, 0.05, 0.01, 0.9]
      }
    })
  };

  const productVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: (i: number) => ({
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        delay: i * 0.1,
        ease: "easeOut"
      }
    }),
    hover: {
      y: -10,
      transition: {
        duration: 0.3,
        ease: "easeInOut"
      }
    }
  };

  const tabVariants = {
    inactive: { opacity: 0.7 },
    active: { 
      opacity: 1,
      scale: 1.05,
      transition: { duration: 0.3 }
    }
  };

  const products = [
    {
      id: 1,
      name: "GameUniverse - Édition Standard",
      price: "59.99 €",
      image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='400' viewBox='0 0 300 400'%3E%3Crect width='300' height='400' fill='%23232323'/%3E%3Crect x='20' y='20' width='260' height='360' fill='%23333'/%3E%3Ctext x='150' y='200' font-family='Arial' font-size='20' fill='%23FF6F00' text-anchor='middle'%3EÉdition Standard%3C/text%3E%3Ctext x='150' y='230' font-family='Arial' font-size='16' fill='white' text-anchor='middle'%3EJeu de base%3C/text%3E%3C/svg%3E",
      rating: 4.8,
      category: "game"
    },
    {
      id: 2,
      name: "GameUniverse - Édition Deluxe",
      price: "89.99 €",
      image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='400' viewBox='0 0 300 400'%3E%3Crect width='300' height='400' fill='%23232323'/%3E%3Crect x='20' y='20' width='260' height='360' fill='%23333'/%3E%3Ctext x='150' y='200' font-family='Arial' font-size='20' fill='%23FFAB00' text-anchor='middle'%3EÉdition Deluxe%3C/text%3E%3Ctext x='150' y='230' font-family='Arial' font-size='16' fill='white' text-anchor='middle'%3EContenu exclusif%3C/text%3E%3C/svg%3E",
      rating: 4.9,
      category: "game"
    },
    {
      id: 3,
      name: "Extension: Nouveaux Royaumes",
      price: "29.99 €",
      image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='400' viewBox='0 0 300 400'%3E%3Crect width='300' height='400' fill='%23232323'/%3E%3Crect x='20' y='20' width='260' height='360' fill='%23333'/%3E%3Ctext x='150' y='200' font-family='Arial' font-size='20' fill='%234CAF50' text-anchor='middle'%3ENouveaux Royaumes%3C/text%3E%3Ctext x='150' y='230' font-family='Arial' font-size='16' fill='white' text-anchor='middle'%3EExtension%3C/text%3E%3C/svg%3E",
      rating: 4.7,
      category: "dlc"
    },
    {
      id: 4,
      name: "T-shirt GameUniverse",
      price: "24.99 €",
      image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='400' viewBox='0 0 300 400'%3E%3Crect width='300' height='400' fill='%23232323'/%3E%3Cpath d='M100,100 L200,100 L220,150 L200,200 L100,200 L80,150 Z' fill='%23444'/%3E%3Ctext x='150' y='160' font-family='Arial' font-size='16' fill='%23FF6F00' text-anchor='middle'%3ET-shirt%3C/text%3E%3C/svg%3E",
      rating: 4.5,
      category: "merch"
    },
    {
      id: 5,
      name: "Figurine Héros Légendaire",
      price: "49.99 €",
      image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='400' viewBox='0 0 300 400'%3E%3Crect width='300' height='400' fill='%23232323'/%3E%3Cpath d='M150,80 L180,150 L150,220 L120,150 Z' fill='%23555'/%3E%3Ccircle cx='150' cy='120' r='30' fill='%23666'/%3E%3Ctext x='150' y='260' font-family='Arial' font-size='16' fill='%23FF6F00' text-anchor='middle'%3EFigurine%3C/text%3E%3C/svg%3E",
      rating: 4.9,
      category: "merch"
    },
    {
      id: 6,
      name: "Pass Saisonnier - Année 1",
      price: "39.99 €",
      image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='400' viewBox='0 0 300 400'%3E%3Crect width='300' height='400' fill='%23232323'/%3E%3Crect x='20' y='20' width='260' height='360' fill='%23333'/%3E%3Ctext x='150' y='200' font-family='Arial' font-size='20' fill='%239C27B0' text-anchor='middle'%3EPass Saisonnier%3C/text%3E%3Ctext x='150' y='230' font-family='Arial' font-size='16' fill='white' text-anchor='middle'%3EAnnée 1%3C/text%3E%3C/svg%3E",
      rating: 4.6,
      category: "dlc"
    }
  ];

  const filteredProducts = activeTab === 'all' 
    ? products 
    : products.filter(product => product.category === activeTab);

  const tabs = [
    { id: 'all', label: 'Tous les Produits' },
    { id: 'game', label: 'Jeu de Base' },
    { id: 'dlc', label: 'Extensions' },
    { id: 'merch', label: 'Produits Dérivés' }
  ];

  return (
    <section id="shop" className="py-20 bg-gradient-to-b from-gray-900 to-black">
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
            Notre <span className="text-[#FF6F00]">Boutique</span>
          </motion.h2>
          <motion.p 
            variants={itemVariants}
            custom={1}
            className="text-gray-400 max-w-2xl mx-auto"
          >
            Découvrez notre sélection de produits GameUniverse, des éditions spéciales aux produits dérivés exclusifs.
          </motion.p>
        </motion.div>

        <motion.div 
          className="flex flex-wrap justify-center gap-4 mb-12"
          variants={containerVariants}
          initial="hidden"
          animate={controls}
        >
          {tabs.map((tab, index) => (
            <motion.button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                activeTab === tab.id 
                  ? 'bg-[#FF6F00] text-white' 
                  : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
              }`}
              variants={itemVariants}
              custom={index + 2}
              animate={activeTab === tab.id ? "active" : "inactive"}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {tab.label}
            </motion.button>
          ))}
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={controls}
        >
          {filteredProducts.map((product, index) => (
            <motion.div
              key={product.id}
              className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-xl overflow-hidden group"
              variants={productVariants}
              custom={index}
              whileHover="hover"
            >
              <div className="relative overflow-hidden">
                <img 
                  src={product.image} 
                  alt={product.name} 
                  className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute top-4 right-4 z-10">
                  <motion.button
                    className="bg-white/10 backdrop-blur-sm p-2 rounded-full text-white hover:bg-white/20 transition-colors duration-300"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <FaHeart className="text-lg" />
                  </motion.button>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute bottom-0 left-0 right-0 p-4 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <motion.button
                    className="w-full bg-[#FF6F00] hover:bg-[#E65100] text-white py-2 rounded-lg font-medium transition-colors duration-300 flex items-center justify-center gap-2"
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                  >
                    <FaShoppingCart /> Ajouter au Panier
                  </motion.button>
                </div>
              </div>
              <div className="p-4">
                <div className="flex items-center mb-2">
                  <div className="flex text-[#FFAB00]">
                    {[...Array(5)].map((_, i) => (
                      <FaStar key={i} className={`${i < Math.floor(product.rating) ? 'opacity-100' : 'opacity-30'}`} />
                    ))}
                  </div>
                  <span className="text-gray-400 text-sm ml-2">{product.rating}/5</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-1">{product.name}</h3>
                <p className="text-[#FF6F00] font-bold">{product.price}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div 
          className="mt-16 text-center"
          variants={itemVariants}
          custom={10}
        >
          <motion.button
            className="bg-gradient-to-r from-[#FF6F00] to-[#FFAB00] text-white px-8 py-3 rounded-lg font-bold shadow-lg inline-flex items-center"
            whileHover={{ scale: 1.05, boxShadow: "0px 5px 15px rgba(255, 111, 0, 0.4)" }}
            whileTap={{ scale: 0.95 }}
          >
            Voir Tous les Produits
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Shop;
