'use client';

import { motion } from 'framer-motion';
import { ChevronDown, Play } from 'lucide-react';
import { contactLinks, siteConfig } from '@/data/site';
import ButtonLink from './ButtonLink';

export default function Hero() {
  return (
    <section id="inicio" className="relative min-h-screen overflow-hidden bg-background">
      <video
        className="absolute inset-0 h-full w-full object-cover opacity-45 mask-fade"
        src={siteConfig.heroVideo}
        poster={siteConfig.heroPoster}
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        aria-label="Vídeo de fundo do portfólio"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-background/50 to-background" />
      <div className="absolute inset-0 bg-cinema-grid bg-[size:72px_72px] opacity-[0.08]" />
      <motion.div
        aria-hidden="true"
        className="absolute right-[-10rem] top-24 h-[34rem] w-[34rem] rounded-full bg-gold-radial blur-3xl"
        animate={{ scale: [1, 1.12, 1], opacity: [0.5, 0.8, 0.5] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
      />

      <div className="container-px relative z-10 mx-auto flex min-h-screen max-w-7xl items-end pb-20 pt-32 sm:pb-24 lg:items-center lg:pb-0">
        <div className="grid w-full gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">
          <div>
            <motion.p
              initial={{ opacity: 0, y: 22 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.25 }}
              className="font-display text-xs font-semibold uppercase tracking-[0.45em] text-gold"
            >
              Portfólio audiovisual premium
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 42 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
              className="mt-6 max-w-5xl font-display text-[clamp(4rem,13vw,12rem)] font-bold uppercase leading-[0.78] tracking-[-0.08em] text-white"
            >
              Ana
              <span className="block text-gold">Bonfim</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.55 }}
              className="mt-8 max-w-2xl text-lg leading-8 text-white/68 sm:text-xl"
            >
              Filmes, reels e conteúdos comerciais com direção visual, ritmo e acabamento cinematográfico para marcas que querem parecer grandes.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              className="mt-10 flex flex-col gap-4 sm:flex-row"
            >
              <ButtonLink href="#portfolio">Ver Portfólio</ButtonLink>
              <ButtonLink href={contactLinks.whatsapp} target="_blank" variant="secondary">
                Solicitar orçamento
              </ButtonLink>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.75 }}
            className="glass-panel hidden rounded-[2rem] p-5 shadow-soft lg:block"
          >
            <div className="flex items-center gap-4">
              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-gold text-black">
                <Play className="h-6 w-6 fill-black" />
              </div>
              <div>
                <p className="font-display text-lg font-semibold">Showreel 2026</p>
                <p className="mt-1 text-sm text-white/55">Direção, captação, edição e cor.</p>
              </div>
            </div>
            <div className="mt-6 h-px w-full bg-white/10" />
            <div className="mt-6 grid grid-cols-3 gap-3 text-center">
              {['4K', 'REELS', 'ADS'].map((item) => (
                <div key={item} className="rounded-2xl border border-white/10 bg-white/[0.03] px-3 py-4">
                  <p className="font-display text-sm font-bold text-gold">{item}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      <motion.a
        href="#sobre"
        aria-label="Rolar para a seção sobre"
        className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2 rounded-full border border-white/10 p-3 text-white/60 transition hover:border-gold/50 hover:text-gold"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <ChevronDown className="h-5 w-5" />
      </motion.a>
    </section>
  );
}
