'use client';

import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { contactLinks, siteConfig } from '@/data/site';

const navItems = [
  { label: 'Sobre', href: '#sobre' },
  { label: 'Serviços', href: '#servicos' },
  { label: 'Portfólio', href: '#portfolio' },
  { label: 'Processo', href: '#processo' },
  { label: 'Contato', href: '#contato' }
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed left-0 right-0 top-0 z-40 transition duration-300 ${
        scrolled ? 'border-b border-white/10 bg-background/75 backdrop-blur-xl' : 'bg-transparent'
      }`}
    >
      <nav className="container-px mx-auto flex h-20 max-w-7xl items-center justify-between">
        <Link href="#inicio" className="font-display text-sm font-bold uppercase tracking-[0.25em] text-white">
          <span className="text-gold">A</span>B
        </Link>

        <div className="hidden items-center gap-8 lg:flex">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} className="text-sm text-white/65 transition hover:text-gold">
              {item.label}
            </Link>
          ))}
        </div>

        <div className="hidden items-center gap-3 lg:flex">
          <Link href={contactLinks.instagram} target="_blank" className="text-sm text-white/65 transition hover:text-gold">
            {siteConfig.instagram}
          </Link>
          <Link
            href={contactLinks.whatsapp}
            target="_blank"
            className="rounded-full border border-gold/50 px-5 py-2.5 text-sm font-semibold text-gold transition hover:bg-gold hover:text-black"
          >
            Orçamento
          </Link>
        </div>

        <button
          aria-label="Abrir menu"
          className="rounded-full border border-white/10 p-2 text-white lg:hidden"
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      {open ? (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="container-px border-t border-white/10 bg-background/95 py-6 backdrop-blur-xl lg:hidden"
        >
          <div className="flex flex-col gap-4">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="rounded-2xl border border-white/10 px-4 py-3 text-white/75"
              >
                {item.label}
              </Link>
            ))}
            <Link
              href={contactLinks.whatsapp}
              target="_blank"
              className="rounded-2xl bg-gold px-4 py-3 text-center font-semibold text-black"
            >
              Solicitar orçamento
            </Link>
          </div>
        </motion.div>
      ) : null}
    </motion.header>
  );
}
