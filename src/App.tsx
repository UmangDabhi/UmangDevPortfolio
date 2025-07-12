import { AnimatePresence } from 'framer-motion';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import ScrollToTop from './components/ScrollToTop';
import About from './pages/About';
import Blog from './pages/Blog';
import Certificates from './pages/Certificates';
import CodeSnippets from './pages/CodeSnippets';
import Contact from './pages/Contact';
import Experience from './pages/Experience';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Skills from './pages/Skills';
import TechStack from './pages/TechStack';

function App() {
  return (
    <Router>
      <div className="bg-primary-900 text-white min-h-screen font-mono">
        <Navbar />
        <AnimatePresence mode="wait">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/experience" element={<Experience />} />
            <Route path="/certificates" element={<Certificates />} />
            <Route path="/code-snippets" element={<CodeSnippets />} />
            <Route path="/tech-stack" element={<TechStack />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </AnimatePresence>
        <ScrollToTop />
      </div>
    </Router>
  );
}

export default App;