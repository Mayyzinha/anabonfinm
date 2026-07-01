'use client';

import { motion, useInView, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { useEffect, useRef } from 'react';
import { stats } from '@/data/portfolio';
import AnimatedSection from './AnimatedSection';

function Counter({ value, suffix }: { value: number; suffix: string }) {
  const ref = useRef<HTMLSpanElement | null>(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });
  const motionValue = useMotionValue(0);
  const spring = useSpring(motionValue, { stiffness: 80, damping: 18 });
  const rounded = useTransform(spring, (latest) => `${Math.round(latest).toLocaleString('pt-BR')}${suffix}`);

  useEffect(() => {
    if (inView) motionValue.set(value);
  }, [inView, motionValue, value]);

  return <motion.span ref={ref}>{rounded}</motion.span>;
}

export default function Stats() {
  return (
    <section className="container-px mx-auto max-w-7xl pb-20 sm:pb-24 lg:pb-32">
      <AnimatedSection>
        <div className="grid overflow-hidden rounded-[2rem] border border-white/10 bg-gold text-black sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((item) => (
            <div key={item.label} className="border-b border-black/10 p-8 sm:border-r lg:border-b-0">
              <p className="font-display text-5xl font-bold sm:text-6xl">
                <Counter value={item.value} suffix={item.suffix} />
              </p>
              <p className="mt-3 text-sm font-semibold uppercase tracking-[0.22em] text-black/60">{item.label}</p>
            </div>
          ))}
        </div>
      </AnimatedSection>
    </section>
  );
}
