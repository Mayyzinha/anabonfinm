import Link from 'next/link';
import { contactLinks, siteConfig } from '@/data/site';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-white/10 bg-black">
      <div className="container-px mx-auto max-w-7xl py-10">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <Link href="#inicio" className="font-display text-2xl font-bold uppercase tracking-[-0.04em] text-white">
              {siteConfig.name}<span className="text-gold">.</span>
            </Link>
            <p className="mt-3 text-sm text-white/45">{siteConfig.professionalName} — produção audiovisual premium.</p>
          </div>

          <div className="flex flex-wrap gap-4 text-sm text-white/55">
            <Link href="#portfolio" className="transition hover:text-gold">
              Portfólio
            </Link>
            <Link href="#servicos" className="transition hover:text-gold">
              Serviços
            </Link>
            <Link href={contactLinks.instagram} target="_blank" className="transition hover:text-gold">
              Instagram
            </Link>
            <Link href={contactLinks.whatsapp} target="_blank" className="transition hover:text-gold">
              WhatsApp
            </Link>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-3 border-t border-white/10 pt-6 text-sm text-white/35 sm:flex-row sm:items-center sm:justify-between">
          <p>© {year} {siteConfig.name}. Todos os direitos reservados.</p>
          <p>Desenvolvido com Next.js, Tailwind e Framer Motion.</p>
        </div>
      </div>
    </footer>
  );
}
