import CursorGlow from "./components/CursorGlow";
import Footer from "./components/Footer";
import Nav from "./components/Nav";
import ScrollProgress from "./components/ScrollProgress";
import About from "./sections/About";
import Certificates from "./sections/Certificates";
import Contact from "./sections/Contact";
import Experience from "./sections/Experience";
import Hero from "./sections/Hero";
import Projects from "./sections/Projects";
import Skills from "./sections/Skills";

function App() {
  return (
    <div className="noise-overlay">
      <ScrollProgress />
      <CursorGlow />
      <Nav />
      <main>
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Certificates />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
