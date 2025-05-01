import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaGamepad, FaShoppingCart, FaUser, FaSearch, FaBars, FaTimes } from 'react-icons/fa';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const headerVariants = {
    hidden: { opacity: 0, y: -50 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.5, 
        ease: "easeOut" 
      }
    }
  };

  const menuItemVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.5
      }
    })
  };

  const menuItems = [
    { name: "Accueil", href: "#" },
    { name: "À propos", href: "#about" },
    { name: "Fonctionnalités", href: "#features" },
    { name: "Boutique", href: "#shop" },
    { name: "Communauté", href: "#community" },
    { name: "Support", href: "#support" }
  ];

  return (
    <motion.header 
      className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-black/90 backdrop-blur-md py-2' : 'bg-transparent py-4'}`}
      initial="hidden"
      animate="visible"
      variants={headerVariants}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <motion.div 
          className="flex items-center"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <FaGamepad className="text-3xl text-[#FF6F00] mr-2" />
          <span className="text-white font-bold text-xl md:text-2xl">GameUniverse</span>
        </motion.div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          {menuItems.map((item, i) => (
            <motion.a
              key={item.name}
              href={item.href}
              className="text-white hover:text-[#FF6F00] transition-colors duration-300 font-medium"
              custom={i}
              variants={menuItemVariants}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              {item.name}
            </motion.a>
          ))}
        </nav>

        {/* Action Buttons */}
        <div className="hidden md:flex items-center space-x-4">
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="text-white hover:text-[#FF6F00] transition-colors duration-300"
          >
            <FaSearch className="text-xl" />
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="text-white hover:text-[#FF6F00] transition-colors duration-300"
          >
            <FaUser className="text-xl" />
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="text-white hover:text-[#FF6F00] transition-colors duration-300 relative"
          >
            <FaShoppingCart className="text-xl" />
            <span className="absolute -top-2 -right-2 bg-[#FF6F00] text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">3</span>
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-[#FF6F00] hover:bg-[#E65100] text-white px-4 py-2 rounded-md font-medium transition-colors duration-300"
          >
            Acheter Maintenant
          </motion.button>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button 
            onClick={toggleMenu}
            className="text-white focus:outline-none"
          >
            {isMenuOpen ? 
              <FaTimes className="text-2xl" /> : 
              <FaBars className="text-2xl" />
            }
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <motion.div 
          className="md:hidden bg-black/95 backdrop-blur-md absolute top-full left-0 w-full"
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3 }}
        >
          <div className="container mx-auto px-4 py-4">
            <nav className="flex flex-col space-y-4">
              {menuItems.map((item, i) => (
                <motion.a
                  key={item.name}
                  href={item.href}
                  className="text-white hover:text-[#FF6F00] transition-colors duration-300 font-medium py-2 border-b border-gray-800"
                  custom={i}
                  variants={menuItemVariants}
                  initial="hidden"
                  animate="visible"
                  whileTap={{ scale: 0.95 }}
                >
                  {item.name}
                </motion.a>
              ))}
            </nav>
            <div className="flex items-center space-x-4 mt-4 pt-2 border-t border-gray-800">
              <motion.button
                whileTap={{ scale: 0.9 }}
                className="text-white hover:text-[#FF6F00] transition-colors duration-300"
              >
                <FaSearch className="text-xl" />
              </motion.button>
              <motion.button
                whileTap={{ scale: 0.9 }}
                className="text-white hover:text-[#FF6F00] transition-colors duration-300"
              >
                <FaUser className="text-xl" />
              </motion.button>
              <motion.button
                whileTap={{ scale: 0.9 }}
                className="text-white hover:text-[#FF6F00] transition-colors duration-300 relative"
              >
                <FaShoppingCart className="text-xl" />
                <span className="absolute -top-2 -right-2 bg-[#FF6F00] text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">3</span>
              </motion.button>
              <motion.button
                whileTap={{ scale: 0.95 }}
                className="bg-[#FF6F00] hover:bg-[#E65100] text-white px-4 py-2 rounded-md font-medium transition-colors duration-300 ml-auto"
              >
                Acheter Maintenant
              </motion.button>
            </div>
          </div>
        </motion.div>
      )}
    </motion.header>
  );
};

export default Header;
