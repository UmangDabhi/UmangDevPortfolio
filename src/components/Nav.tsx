import { AnimatePresence, motion } from "framer-motion";
import { Menu, Terminal, X } from "lucide-react";
import { useEffect, useState } from "react";
import { navLinks, profile } from "../data/portfolio";

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeId, setActiveId] = useState<string>("");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const sections = navLinks
      .map(({ id }) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null);

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActiveId(entry.target.id);
        }
      },
      { rootMargin: "-40% 0px -55% 0px" }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-40 transition-all duration-300 ${
        scrolled ? "bg-ink-950/80 backdrop-blur-md border-b border-white/[0.06]" : "bg-transparent"
      }`}
    >
      <nav className="section-shell flex items-center justify-between h-16 sm:h-20">
        <a href="#top" className="flex items-center gap-2.5 group">
          <span className="relative flex items-center justify-center w-9 h-9 rounded-xl bg-white/[0.04] border border-white/[0.08] group-hover:border-glow-cyan/40 transition-colors">
            <Terminal className="h-4 w-4 text-glow-cyan" />
          </span>
          <span className="font-display font-bold text-mist-100 tracking-tight">
            umang<span className="text-glow-cyan">.dev</span>
          </span>
        </a>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-1">
          {navLinks.map(({ id, label }) => (
            <a
              key={id}
              href={`#${id}`}
              className={`relative px-3.5 py-2 text-sm rounded-lg transition-colors duration-200 ${
                activeId === id ? "text-mist-100" : "text-mist-400 hover:text-mist-100"
              }`}
            >
              {activeId === id && (
                <motion.span
                  layoutId="nav-active"
                  className="absolute inset-0 rounded-lg bg-white/[0.06] border border-glow-cyan/20"
                  transition={{ type: "spring", bounce: 0.2, duration: 0.5 }}
                />
              )}
              <span className="relative z-10">{label}</span>
            </a>
          ))}
          <a
            href={profile.resume}
            download
            className="ml-3 px-4 py-2 text-sm font-medium rounded-lg bg-glow-cyan/10 border border-glow-cyan/30 text-glow-cyan hover:bg-glow-cyan/20 transition-colors"
          >
            Resume
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setIsOpen((open) => !open)}
          aria-label="Toggle navigation"
          className="md:hidden p-2 rounded-lg text-mist-200 hover:bg-white/[0.06]"
        >
          {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden overflow-hidden bg-ink-950/95 backdrop-blur-md border-b border-white/[0.06]"
          >
            <div className="section-shell py-4 flex flex-col gap-1">
              {navLinks.map(({ id, label }) => (
                <a
                  key={id}
                  href={`#${id}`}
                  onClick={() => setIsOpen(false)}
                  className={`px-4 py-3 rounded-lg text-sm ${
                    activeId === id ? "bg-white/[0.06] text-mist-100" : "text-mist-400"
                  }`}
                >
                  {label}
                </a>
              ))}
              <a
                href={profile.resume}
                download
                onClick={() => setIsOpen(false)}
                className="mt-2 px-4 py-3 text-center text-sm font-medium rounded-lg bg-glow-cyan/10 border border-glow-cyan/30 text-glow-cyan"
              >
                Download Resume
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Nav;
