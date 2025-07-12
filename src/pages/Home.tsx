import { motion } from "framer-motion";
import { Download, ExternalLink, Github, Linkedin } from "lucide-react";
import PageLayout from "../components/PageLayout";
import TypeWriter from "../components/TypeWriter";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <PageLayout>
      <div className="min-h-[calc(100vh-8rem)] flex items-center">
        <div className="w-full">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left"
          >
            {/* Terminal Style Intro */}
            <div className="bg-primary-800/50 backdrop-blur-sm border border-primary-600/20 rounded-lg p-6 mb-8">
              <div className="flex items-center space-x-2 mb-4">
                <div className="flex space-x-2">
                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                </div>
                <span className="text-primary-400 text-sm">terminal.sh</span>
              </div>
              <div className="font-mono text-sm">
                <div className="text-primary-300">
                  <span className="text-primary-400">➜</span> umang-portfolio git:(main) ✗ <TypeWriter text="echo 'Hello, World!'" delay={50} />
                </div>
              </div>
            </div>

            {/* Main Content */}
            <motion.h1
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 2, duration: 0.8 }}
              className="text-4xl md:text-6xl font-bold mb-6"
            >
              <span className="text-primary-200">Hi, I'm </span>
              <span className="text-primary-400">Umang R. Dabhi</span>
            </motion.h1>

            <motion.h2
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 2.5, duration: 0.8 }}
              className="text-xl md:text-3xl text-primary-300 mb-8"
            >
              Full Stack Developer | MERN | PERN | AI Integration
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 3, duration: 0.8 }}
              className="text-lg text-primary-200 mb-12 max-w-2xl"
            >
              Dynamic full stack developer skilled in building scalable, real-world applications using modern tech stacks. Passionate about solving
              problems through clean, functional code.
            </motion.p>

            {/* Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 3.5, duration: 0.8 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-12"
            >
              {/* Use Link for internal navigation */}
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link
                  to="/projects"
                  className="px-8 py-3 bg-primary-400 hover:bg-primary-300 text-primary-900 font-semibold rounded-lg transition-all duration-200 flex items-center justify-center space-x-2 hover:shadow-lg hover:shadow-primary-400/25"
                >
                  <ExternalLink className="h-5 w-5" />
                  <span>View Projects</span>
                </Link>
              </motion.div>

              {/* Use anchor tag with download for resume */}
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <a
                  href="/resume.pdf"
                  download
                  className="px-8 py-3 border border-primary-400 text-primary-400 hover:bg-primary-400/10 font-semibold rounded-lg transition-all duration-200 flex items-center justify-center space-x-2 hover:shadow-lg hover:shadow-primary-400/25"
                >
                  <Download className="h-5 w-5" />
                  <span>Download Resume</span>
                </a>
              </motion.div>
            </motion.div>
            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 4, duration: 0.8 }}
              className="flex space-x-6 justify-center lg:justify-start"
            >
              <motion.a
                whileHover={{ scale: 1.1, y: -2 }}
                href="https://github.com/UmangDabhi"
                className="p-3 bg-primary-800/50 hover:bg-primary-600/50 border border-primary-600/20 rounded-lg transition-all duration-200 hover:border-primary-400/30 hover:shadow-lg hover:shadow-primary-400/20"
              >
                <Github className="h-6 w-6 text-primary-300" />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.1, y: -2 }}
                href="https://www.linkedin.com/in/umang-dabhi-20b215246/"
                className="p-3 bg-primary-800/50 hover:bg-primary-600/50 border border-primary-600/20 rounded-lg transition-all duration-200 hover:border-primary-400/30 hover:shadow-lg hover:shadow-primary-400/20"
              >
                <Linkedin className="h-6 w-6 text-primary-300" />
              </motion.a>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </PageLayout>
  );
};

export default Home;
