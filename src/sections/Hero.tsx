import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { ArrowDown, Download, Github, Linkedin } from "lucide-react";
import { useEffect, useState } from "react";
import Magnetic from "../components/Magnetic";
import { profile, stats } from "../data/portfolio";

const TYPED_LINE = "const developer = new FullStack('MERN', 'PERN', 'AI');";

const useTypewriter = (text: string, speed: number, startDelay: number) => {
  const [output, setOutput] = useState("");

  useEffect(() => {
    let index = 0;
    let interval: ReturnType<typeof setInterval>;
    const timeout = setTimeout(() => {
      interval = setInterval(() => {
        index += 1;
        setOutput(text.slice(0, index));
        if (index >= text.length) clearInterval(interval);
      }, speed);
    }, startDelay);
    return () => {
      clearTimeout(timeout);
      clearInterval(interval);
    };
  }, [text, speed, startDelay]);

  return output;
};

const STAGGER_NAME = `${"Umang"}.`;

const Hero = () => {
  const prefersReducedMotion = useReducedMotion();
  const typed = useTypewriter(TYPED_LINE, 35, 1400);
  const { scrollY } = useScroll();
  const orbY = useTransform(scrollY, [0, 600], [0, 140]);
  const orbY2 = useTransform(scrollY, [0, 600], [0, -90]);
  const photoY = useTransform(scrollY, [0, 600], [0, 60]);

  const fadeUp = (delay: number) => ({
    initial: prefersReducedMotion ? false : { opacity: 0, y: 28 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.7, delay, ease: [0.21, 0.47, 0.32, 0.98] as const },
  });

  return (
    <section id="top" className="relative min-h-screen flex flex-col justify-center overflow-hidden">
      {/* Atmosphere */}
      <div className="absolute inset-0 grid-lines" aria-hidden />
      <motion.div
        style={{ y: orbY }}
        className="absolute -top-32 left-1/3 -translate-x-1/2 w-[42rem] h-[42rem] rounded-full bg-glow-cyan/[0.06] blur-[120px]"
        aria-hidden
      />
      <motion.div
        style={{ y: orbY2 }}
        className="absolute top-1/3 -right-40 w-[30rem] h-[30rem] rounded-full bg-glow-indigo/[0.08] blur-[110px]"
        aria-hidden
      />
      {/* Oversized backdrop word */}
      <span
        aria-hidden
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-display font-extrabold text-[26vw] leading-none text-white/[0.025] select-none whitespace-nowrap pointer-events-none"
      >
        BOSS
      </span>

      <div className="section-shell relative pt-28 pb-16 w-full">
        <div className="grid lg:grid-cols-[1fr_auto] gap-12 lg:gap-16 items-center">
          <div>
            {/* Status badge */}
            <motion.div {...fadeUp(0)} className="mb-8">
              <span className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white/[0.04] border border-white/[0.08] text-sm text-mist-200">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full rounded-full bg-emerald-400 animate-ping opacity-60" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
                </span>
                Available for work · {profile.location}
              </span>
            </motion.div>

            <h1 className="font-display font-extrabold tracking-tight text-5xl sm:text-7xl xl:text-8xl text-mist-100 mb-6">
              <span className="sr-only">{profile.firstName}.</span>
              <span aria-hidden className="block overflow-hidden">
                {STAGGER_NAME.split("").map((char, index) => (
                  <motion.span
                    key={`${char}-${index}`}
                    initial={prefersReducedMotion ? false : { y: "110%", opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{
                      duration: 0.7,
                      delay: 0.1 + index * 0.06,
                      ease: [0.21, 0.47, 0.32, 0.98],
                    }}
                    className={`inline-block ${char === "." ? "text-glow-cyan" : ""}`}
                  >
                    {char}
                  </motion.span>
                ))}
              </span>
              <motion.span {...fadeUp(0.5)} className="block text-gradient pb-2">
                {profile.role}
              </motion.span>
            </h1>

            <motion.div {...fadeUp(0.6)} className="font-mono text-sm sm:text-base text-mist-400 mb-6 h-6">
              <span className="text-glow-teal">➜</span> {typed}
              <span className="inline-block w-2 h-4 ml-0.5 bg-glow-cyan/80 animate-pulse-soft align-middle" />
            </motion.div>

            <motion.p {...fadeUp(0.7)} className="max-w-xl text-mist-400 leading-relaxed mb-10">
              {profile.summary}
            </motion.p>

            <motion.div {...fadeUp(0.8)} className="flex flex-wrap items-center gap-4 mb-14">
              <Magnetic>
                <a
                  href="#projects"
                  className="inline-block px-7 py-3.5 rounded-xl font-medium text-ink-950 bg-gradient-to-r from-glow-cyan to-glow-teal hover:shadow-[0_0_36px_-6px_rgba(103,232,249,0.55)] transition-shadow"
                >
                  View Projects
                </a>
              </Magnetic>
              <Magnetic>
                <a
                  href={profile.resume}
                  download
                  className="flex items-center gap-2 px-7 py-3.5 rounded-xl font-medium text-mist-100 border border-white/[0.12] hover:border-glow-cyan/40 hover:bg-white/[0.04] transition-colors"
                >
                  <Download className="h-4 w-4" />
                  Resume
                </a>
              </Magnetic>
              <div className="flex items-center gap-2 sm:ml-2">
                <Magnetic strength={0.5}>
                  <a
                    href={profile.github}
                    target="_blank"
                    rel="noreferrer"
                    aria-label="GitHub"
                    className="inline-block p-3 rounded-xl border border-white/[0.08] text-mist-400 hover:text-glow-cyan hover:border-glow-cyan/40 transition-colors"
                  >
                    <Github className="h-5 w-5" />
                  </a>
                </Magnetic>
                <Magnetic strength={0.5}>
                  <a
                    href={profile.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    aria-label="LinkedIn"
                    className="inline-block p-3 rounded-xl border border-white/[0.08] text-mist-400 hover:text-glow-cyan hover:border-glow-cyan/40 transition-colors"
                  >
                    <Linkedin className="h-5 w-5" />
                  </a>
                </Magnetic>
              </div>
            </motion.div>

            {/* Stats strip */}
            <motion.div {...fadeUp(0.9)} className="grid grid-cols-3 max-w-lg divide-x divide-white/[0.08]">
              {stats.map(({ label, value }) => (
                <div key={label} className="px-5 first:pl-0">
                  <div className="font-display text-2xl sm:text-3xl font-bold text-mist-100">{value}</div>
                  <div className="text-xs text-mist-500 mt-1">{label}</div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Portrait */}
          <motion.div
            initial={prefersReducedMotion ? false : { opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.4, ease: [0.21, 0.47, 0.32, 0.98] }}
            style={{ y: photoY }}
            className="hidden lg:block relative justify-self-end"
          >
            <div
              className="absolute -inset-10 rounded-full bg-glow-cyan/[0.08] blur-[60px] animate-pulse-soft"
              aria-hidden
            />
            {/* Rotating conic ring */}
            <div
              className="absolute -inset-[3px] rounded-[2.2rem] animate-[spin_9s_linear_infinite] bg-[conic-gradient(from_0deg,transparent_0%,rgba(103,232,249,0.9)_12%,transparent_28%,transparent_55%,rgba(129,140,248,0.8)_68%,transparent_82%)]"
              aria-hidden
            />
            <div className="relative rounded-[2.1rem] p-1 bg-ink-950">
              <img
                src="/profile.png"
                alt={`${profile.name} at work`}
                width={320}
                height={320}
                className="w-72 xl:w-80 aspect-square object-cover rounded-[1.85rem] border border-white/[0.08] saturate-[1.05]"
              />
              {/* Floating tech chips */}
              <motion.span
                animate={prefersReducedMotion ? undefined : { y: [0, -10, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -left-8 top-10 px-3 py-1.5 font-mono text-xs rounded-lg bg-ink-800/90 border border-glow-cyan/30 text-glow-cyan shadow-[0_0_20px_rgba(103,232,249,0.25)]"
              >
                {"<MERN />"}
              </motion.span>
              <motion.span
                animate={prefersReducedMotion ? undefined : { y: [0, 10, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute -right-7 bottom-14 px-3 py-1.5 font-mono text-xs rounded-lg bg-ink-800/90 border border-glow-indigo/40 text-glow-indigo shadow-[0_0_20px_rgba(129,140,248,0.25)]"
              >
                {"{ AI }"}
              </motion.span>
            </div>
          </motion.div>
        </div>
      </div>

      <motion.a
        href="#about"
        aria-label="Scroll to about"
        initial={prefersReducedMotion ? false : { opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 p-2 text-mist-500 hover:text-glow-cyan transition-colors"
      >
        <ArrowDown className="h-5 w-5 animate-bounce" />
      </motion.a>
    </section>
  );
};

export default Hero;
