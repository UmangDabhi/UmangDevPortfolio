import { motion, useScroll, useSpring } from "framer-motion";

const ScrollProgress = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 28, restDelta: 0.001 });

  return (
    <motion.div
      aria-hidden
      style={{ scaleX }}
      className="fixed top-0 inset-x-0 z-50 h-[2px] origin-left bg-gradient-to-r from-glow-cyan via-glow-teal to-glow-indigo shadow-[0_0_12px_rgba(103,232,249,0.6)]"
    />
  );
};

export default ScrollProgress;
