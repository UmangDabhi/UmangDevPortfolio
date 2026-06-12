import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect } from "react";

const CursorGlow = () => {
  const x = useMotionValue(-1000);
  const y = useMotionValue(-1000);
  const springX = useSpring(x, { damping: 40, stiffness: 180, mass: 0.8 });
  const springY = useSpring(y, { damping: 40, stiffness: 180, mass: 0.8 });

  useEffect(() => {
    const onMove = (event: PointerEvent) => {
      x.set(event.clientX);
      y.set(event.clientY);
    };
    window.addEventListener("pointermove", onMove, { passive: true });
    return () => window.removeEventListener("pointermove", onMove);
  }, [x, y]);

  return (
    <motion.div
      aria-hidden
      className="pointer-events-none fixed top-0 left-0 z-0 hidden lg:block"
      style={{ x: springX, y: springY }}
    >
      <div className="h-[40rem] w-[40rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(103,232,249,0.05),rgba(129,140,248,0.03)_45%,transparent_70%)]" />
    </motion.div>
  );
};

export default CursorGlow;
