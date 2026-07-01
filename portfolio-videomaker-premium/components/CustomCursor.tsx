'use client';

import { motion, useMotionValue, useSpring } from 'framer-motion';
import { useEffect, useState } from 'react';

export default function CustomCursor() {
  const [isPointer, setIsPointer] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 400, damping: 35 });
  const springY = useSpring(y, { stiffness: 400, damping: 35 });

  useEffect(() => {
    const move = (event: MouseEvent) => {
      setIsVisible(true);
      x.set(event.clientX - 12);
      y.set(event.clientY - 12);
      const target = event.target as HTMLElement | null;
      setIsPointer(Boolean(target?.closest('a, button, input, textarea, select')));
    };

    const leave = () => setIsVisible(false);

    window.addEventListener('mousemove', move);
    window.addEventListener('mouseleave', leave);
    return () => {
      window.removeEventListener('mousemove', move);
      window.removeEventListener('mouseleave', leave);
    };
  }, [x, y]);

  return (
    <motion.div
      aria-hidden="true"
      className="pointer-events-none fixed left-0 top-0 z-[90] hidden h-6 w-6 rounded-full border border-gold/70 mix-blend-difference md:block"
      style={{ x: springX, y: springY }}
      animate={{
        opacity: isVisible ? 1 : 0,
        scale: isPointer ? 2.25 : 1,
        backgroundColor: isPointer ? 'rgba(255,195,0,0.18)' : 'rgba(255,195,0,0)'
      }}
      transition={{ duration: 0.2 }}
    />
  );
}
