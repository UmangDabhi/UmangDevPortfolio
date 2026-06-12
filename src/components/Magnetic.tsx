import { motion, useMotionValue, useSpring } from "framer-motion";
import { ReactNode, useRef } from "react";

interface MagneticProps {
  children: ReactNode;
  strength?: number;
  className?: string;
}

const Magnetic = ({ children, strength = 0.35, className }: MagneticProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { damping: 18, stiffness: 220, mass: 0.4 });
  const springY = useSpring(y, { damping: 18, stiffness: 220, mass: 0.4 });

  const onMouseMove = (event: React.MouseEvent) => {
    const bounds = ref.current?.getBoundingClientRect();
    if (!bounds) return;
    x.set((event.clientX - bounds.left - bounds.width / 2) * strength);
    y.set((event.clientY - bounds.top - bounds.height / 2) * strength);
  };

  const onMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
      style={{ x: springX, y: springY }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default Magnetic;
