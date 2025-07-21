import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { name: 'Home', path: '/' },
    { name: 'Schedule', path: '/schedule' },
    { name: 'About', path: '/about' },
  ];

  return (
    <nav className="fixed w-full z-50 bg-blue-900/80 backdrop-blur-lg">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-20">
          {/* Left Section: Logos + Title */}
          <div className="flex items-center space-x-4 overflow-x-auto">
            <div className="flex items-center gap-2 md:gap-4 whitespace-nowrap">
              <img src="/images/ieee-logo.png" alt="IEEE Logo" className="h-8" />
              <img src="/images/logo2.png" alt="Logo 2" className="h-8" />
              <img src="/images/htb.png" alt="HTB Logo" className="h-10 md:h-16 w-auto" />
              <img src="/images/sairam_institutions_logo.png" alt="Sairam Logo" className="h-10 md:h-16 w-auto" />
            </div>
            <Link to="/" className="text-lg md:text-2xl font-bold text-white pl-2">
              Genesis <span className="text-accent">2.0</span>
            </Link>
          </div>

          {/* Desktop Links */}
          <div className="hidden md:flex space-x-8">
            {links.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className="text-blue-200 hover:text-accent transition-colors"
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden text-white"
            onClick={() => setIsOpen(!isOpen)}
          >
            <FontAwesomeIcon icon={isOpen ? faTimes : faBars} className="text-xl" />
          </button>
        </div>

        {/* Mobile Dropdown Menu */}
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: isOpen ? 1 : 0, height: isOpen ? 'auto' : 0 }}
          className="md:hidden overflow-hidden"
        >
          <div className="py-4 space-y-4">
            {links.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className="block text-blue-200 hover:text-accent transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </Link>
            ))}
          </div>
        </motion.div>
      </div>
    </nav>
  );
};

export default Navbar;
