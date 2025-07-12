import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { Menu, X, Terminal } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { path: "/", label: "Home", icon: "🏠" },
    { path: "/about", label: "About", icon: "👨‍💻" },
    { path: "/projects", label: "Projects", icon: "🧪" },
    { path: "/skills", label: "Skills", icon: "🧠" },
    { path: "/experience", label: "Experience", icon: "🧾" },
    { path: "/certificates", label: "Certificates", icon: "🏅" },
    // { path: '/code-snippets', label: 'Code', icon: '💻' },
    // { path: '/tech-stack', label: 'Tech Stack', icon: '⚡' },
    { path: "/blog", label: "Blog", icon: "📝" },
    { path: "/contact", label: "Contact", icon: "📞" },
  ];

  return (
    <nav className="bg-primary-800/90 backdrop-blur-md border-b border-primary-600/20 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Link to="/" className="flex items-center space-x-2">
              <Terminal className="h-8 w-8 text-primary-400 animate-pulse" />
              <span className="text-xl font-bold text-primary-200">umang.dev</span>
            </Link>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {navItems.map(({ path, label, icon }) => (
                <motion.div key={path} whileHover={{ scale: 1.05, y: -2 }} whileTap={{ scale: 0.95 }}>
                  <Link
                    to={path}
                    className={`relative px-3 py-2 rounded-md text-sm font-medium transition-all duration-200 ${
                      location.pathname === path
                        ? "bg-primary-400/20 text-primary-200 border border-primary-400/50 shadow-lg shadow-primary-400/20"
                        : "text-primary-300 hover:bg-primary-600/20 hover:text-primary-200 hover:border hover:border-primary-600/30"
                    }`}
                  >
                    {location.pathname === path && (
                      <motion.div
                        layoutId="activeTab"
                        className="absolute inset-0 bg-primary-400/10 rounded-md border border-primary-400/30"
                        transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                      />
                    )}
                    <span className="relative z-10">
                      <span className="mr-2">{icon}</span>
                      {label}
                    </span>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-primary-300 hover:text-primary-200 hover:bg-primary-600/20"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </motion.button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-primary-800/95 rounded-lg mt-2">
              {navItems.map(({ path, label, icon }) => (
                <motion.div key={path} whileHover={{ x: 5 }} whileTap={{ scale: 0.95 }}>
                  <Link
                    to={path}
                    onClick={() => setIsOpen(false)}
                    className={`block px-3 py-2 rounded-md text-base font-medium transition-all duration-200 ${
                      location.pathname === path
                        ? "bg-primary-400/20 text-primary-200 border border-primary-400/50 shadow-lg shadow-primary-400/20"
                        : "text-primary-300 hover:bg-primary-600/20 hover:text-primary-200"
                    }`}
                  >
                    <span className="mr-2">{icon}</span>
                    {label}
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
