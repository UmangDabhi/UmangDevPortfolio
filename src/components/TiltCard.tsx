import { motion, useMotionTemplate, useMotionValue, useSpring } from "framer-motion";
import { ReactNode, useRef } from "react";

interface TiltCardProps {
  children: ReactNode;
  className?: string;
}

const TiltCard = ({ children, className }: TiltCardProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const rotateX = useMotionValue(0);
  const rotateY = useMotionValue(0);
  const glareX = useMotionValue(50);
  const glareY = useMotionValue(50);
  const springRotateX = useSpring(rotateX, { damping: 20, stiffness: 180 });
  const springRotateY = useSpring(rotateY, { damping: 20, stiffness: 180 });

  const glare = useMotionTemplate`radial-gradient(420px circle at ${glareX}% ${glareY}%, rgba(103,232,249,0.08), transparent 65%)`;

  const onMouseMove = (event: React.MouseEvent) => {
    const bounds = ref.current?.getBoundingClientRect();
    if (!bounds) return;
    const px = (event.clientX - bounds.left) / bounds.width;
    const py = (event.clientY - bounds.top) / bounds.height;
    rotateY.set((px - 0.5) * 8);
    rotateX.set((0.5 - py) * 8);
    glareX.set(px * 100);
    glareY.set(py * 100);
  };

  const onMouseLeave = () => {
    rotateX.set(0);
    rotateY.set(0);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
      style={{ rotateX: springRotateX, rotateY: springRotateY, transformPerspective: 900 }}
      className={`relative h-full w-full will-change-transform ${className ?? ""}`}
    >
      {children}
      <motion.div
        aria-hidden
        style={{ background: glare }}
        className="pointer-events-none absolute inset-0 rounded-2xl"
      />
    </motion.div>
  );
};

export default TiltCard;
