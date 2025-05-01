import React from 'react';
import { motion } from 'framer-motion';
import { FaGamepad, FaTwitter, FaInstagram, FaYoutube, FaDiscord, FaTwitch, FaFacebook } from 'react-icons/fa';

const Footer: React.FC = () => {
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
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  const footerLinks = [
    {
      title: "À Propos",
      links: [
        { name: "Notre Histoire", href: "#" },
        { name: "L'Équipe", href: "#" },
        { name: "Carrières", href: "#" },
        { name: "Presse", href: "#" }
      ]
    },
    {
      title: "Support",
      links: [
        { name: "FAQ", href: "#" },
        { name: "Centre d'Aide", href: "#" },
        { name: "Contactez-nous", href: "#" },
        { name: "Signaler un Bug", href: "#" }
      ]
    },
    {
      title: "Légal",
      links: [
        { name: "Conditions d'Utilisation", href: "#" },
        { name: "Politique de Confidentialité", href: "#" },
        { name: "Cookies", href: "#" },
        { name: "Licences", href: "#" }
      ]
    }
  ];

  const socialIcons = [
    { icon: <FaTwitter />, href: "#", label: "Twitter" },
    { icon: <FaInstagram />, href: "#", label: "Instagram" },
    { icon: <FaYoutube />, href: "#", label: "YouTube" },
    { icon: <FaDiscord />, href: "#", label: "Discord" },
    { icon: <FaTwitch />, href: "#", label: "Twitch" },
    { icon: <FaFacebook />, href: "#", label: "Facebook" }
  ];

  return (
    <footer className="bg-black pt-16 pb-8 overflow-hidden relative">
      {/* Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxkZWZzPjxwYXR0ZXJuIGlkPSJncmlkIiB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHBhdHRlcm5Vbml0cz0idXNlclNwYWNlT25Vc2UiPjxwYXRoIGQ9Ik0gNDAgMCBMIDAgMCAwIDQwIiBmaWxsPSJub25lIiBzdHJva2U9IiNmZjZmMDAiIHN0cm9rZS1vcGFjaXR5PSIwLjA1IiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-30 mix-blend-overlay"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {/* Logo and Description */}
          <motion.div 
            className="lg:col-span-2"
            variants={itemVariants}
          >
            <div className="flex items-center mb-4">
              <FaGamepad className="text-3xl text-[#FF6F00] mr-2" />
              <span className="text-white font-bold text-xl">GameUniverse</span>
            </div>
            <p className="text-gray-400 mb-6 max-w-md">
              Plongez dans un univers de jeu immersif où chaque décision compte. Rejoignez des millions de joueurs dans cette aventure épique qui redéfinit le genre.
            </p>
            <div className="flex space-x-4">
              {socialIcons.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  aria-label={social.label}
                  className="bg-gray-800 hover:bg-[#FF6F00] text-white p-2 rounded-full transition-colors duration-300"
                  whileHover={{ scale: 1.1, y: -5 }}
                  whileTap={{ scale: 0.9 }}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Links */}
          {footerLinks.map((column, index) => (
            <motion.div key={index} variants={itemVariants}>
              <h3 className="text-white font-bold text-lg mb-4">{column.title}</h3>
              <ul className="space-y-2">
                {column.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <motion.a
                      href={link.href}
                      className="text-gray-400 hover:text-[#FF6F00] transition-colors duration-300 block"
                      whileHover={{ x: 5 }}
                    >
                      {link.name}
                    </motion.a>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>

        {/* Newsletter */}
        <motion.div 
          className="border-t border-gray-800 pt-8 mb-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.div 
            className="max-w-xl mx-auto text-center"
            variants={itemVariants}
          >
            <h3 className="text-white font-bold text-xl mb-4">Restez informé</h3>
            <p className="text-gray-400 mb-6">
              Inscrivez-vous à notre newsletter pour recevoir les dernières actualités, mises à jour et offres exclusives.
            </p>
            <div className="flex flex-col sm:flex-row gap-2">
              <input 
                type="email" 
                placeholder="Votre adresse email" 
                className="bg-gray-800 text-white px-4 py-3 rounded-lg flex-grow focus:outline-none focus:ring-2 focus:ring-[#FF6F00]"
              />
              <motion.button
                className="bg-gradient-to-r from-[#FF6F00] to-[#FFAB00] text-white px-6 py-3 rounded-lg font-bold"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                S'inscrire
              </motion.button>
            </div>
          </motion.div>
        </motion.div>

        {/* Copyright */}
        <motion.div 
          className="border-t border-gray-800 pt-8 text-center"
          variants={itemVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <p className="text-gray-500 text-sm">
            &copy; {new Date().getFullYear()} GameUniverse. Tous droits réservés.
          </p>
          <div className="flex justify-center space-x-4 mt-4 text-gray-500 text-sm">
            <motion.a 
              href="#" 
              className="hover:text-[#FF6F00] transition-colors duration-300"
              whileHover={{ y: -2 }}
            >
              Conditions d'utilisation
            </motion.a>
            <span>•</span>
            <motion.a 
              href="#" 
              className="hover:text-[#FF6F00] transition-colors duration-300"
              whileHover={{ y: -2 }}
            >
              Politique de confidentialité
            </motion.a>
            <span>•</span>
            <motion.a 
              href="#" 
              className="hover:text-[#FF6F00] transition-colors duration-300"
              whileHover={{ y: -2 }}
            >
              Cookies
            </motion.a>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
