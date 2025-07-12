import React from 'react';
import { motion } from 'framer-motion';

interface PageLayoutProps {
  children: React.ReactNode;
  title?: string;
}

const PageLayout: React.FC<PageLayoutProps> = ({ children, title }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.3 }}
      className="min-h-screen pt-8"
    >
      {title && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8"
        >
          <div className="bg-primary-800/50 backdrop-blur-sm border border-primary-600/20 rounded-lg p-4 hover:border-primary-400/30 transition-all duration-300">
            <div className="flex items-center space-x-2 mb-2">
              <div className="flex space-x-2">
                <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              </div>
              <span className="text-primary-400 text-sm">terminal.sh</span>
            </div>
            <h1 className="text-2xl font-bold text-primary-200">
              <span className="text-primary-400">const</span> currentPage = "
              <span className="text-primary-300">{title}</span>";
            </h1>
          </div>
        </motion.div>
      )}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16"
      >
        {children}
      </motion.div>
    </motion.div>
  );
};

export default PageLayout;