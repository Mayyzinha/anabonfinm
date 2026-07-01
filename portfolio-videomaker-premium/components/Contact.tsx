'use client';

import { Instagram, Mail, MapPin, MessageCircle, Send } from 'lucide-react';
import { FormEvent, useState } from 'react';
import { contactLinks, siteConfig } from '@/data/site';
import AnimatedSection from './AnimatedSection';
import SectionHeading from './SectionHeading';

const contactCards = [
  {
    label: 'WhatsApp',
    value: siteConfig.whatsappLabel,
    href: contactLinks.whatsapp,
    icon: MessageCircle
  },
  {
    label: 'Instagram',
    value: siteConfig.instagram,
    href: contactLinks.instagram,
    icon: Instagram
  },
  {
    label: 'E-mail',
    value: siteConfig.email,
    href: contactLinks.email,
    icon: Mail
  }
];

export default function Contact() {
  const [status, setStatus] = useState('');

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const form = new FormData(event.currentTarget);
    const name = String(form.get('name') || '');
    const service = String(form.get('service') || '');
    const message = String(form.get('message') || '');

    const text = `Olá, Ana! Meu nome é ${name}. Tenho interesse em ${service}. ${message}`;
    window.open(`https://wa.me/${siteConfig.whatsapp}?text=${encodeURIComponent(text)}`, '_blank');
    setStatus('Mensagem preparada no WhatsApp.');
    event.currentTarget.reset();
  }

  return (
    <section id="contato" className="section-y container-px mx-auto max-w-7xl">
      <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr]">
        <div>
          <SectionHeading
            eyebrow="Contato"
            title="Vamos transformar sua ideia em vídeo."
            description="Fale pelo WhatsApp, Instagram, e-mail ou preencha o formulário para iniciar um orçamento personalizado."
          />

          <div className="mt-10 space-y-4">
            {contactCards.map((card, index) => {
              const Icon = card.icon;
              return (
                <AnimatedSection key={card.label} delay={index * 0.06}>
                  <a
                    href={card.href}
                    target="_blank"
                    rel="noreferrer"
                    className="group flex items-center gap-4 rounded-[1.5rem] border border-white/10 bg-panel p-5 transition hover:border-gold/40 hover:bg-gold/5"
                  >
                    <span className="flex h-12 w-12 items-center justify-center rounded-full bg-gold/10 text-gold transition group-hover:bg-gold group-hover:text-black">
                      <Icon className="h-5 w-5" />
                    </span>
                    <span>
                      <span className="block text-sm text-white/45">{card.label}</span>
                      <span className="mt-1 block font-display text-lg font-semibold text-white">{card.value}</span>
                    </span>
                  </a>
                </AnimatedSection>
              );
            })}
          </div>

          <AnimatedSection className="mt-6 flex items-center gap-3 text-sm text-white/50">
            <MapPin className="h-4 w-4 text-gold" />
            Atendimento em {siteConfig.location} e projetos remotos.
          </AnimatedSection>
        </div>

        <AnimatedSection>
          <form onSubmit={handleSubmit} className="glass-panel rounded-[2rem] p-6 sm:p-8">
            <div className="grid gap-5 sm:grid-cols-2">
              <label className="block">
                <span className="text-sm text-white/55">Seu nome</span>
                <input
                  name="name"
                  required
                  className="mt-2 w-full rounded-2xl border border-white/10 bg-black/35 px-4 py-4 text-white outline-none transition placeholder:text-white/25 focus:border-gold/60"
                  placeholder="Digite seu nome"
                />
              </label>

              <label className="block">
                <span className="text-sm text-white/55">Serviço</span>
                <select
                  name="service"
                  required
                  className="mt-2 w-full rounded-2xl border border-white/10 bg-black/35 px-4 py-4 text-white outline-none transition focus:border-gold/60"
                  defaultValue=""
                >
                  <option value="" disabled>
                    Selecione
                  </option>
                  <option>Captação de vídeo</option>
                  <option>Edição profissional</option>
                  <option>Reels</option>
                  <option>Comercial</option>
                  <option>Institucional</option>
                  <option>Evento</option>
                </select>
              </label>
            </div>

            <label className="mt-5 block">
              <span className="text-sm text-white/55">Mensagem</span>
              <textarea
                name="message"
                rows={7}
                required
                className="mt-2 w-full resize-none rounded-2xl border border-white/10 bg-black/35 px-4 py-4 text-white outline-none transition placeholder:text-white/25 focus:border-gold/60"
                placeholder="Conte um pouco sobre o projeto, data, objetivo e formato desejado."
              />
            </label>

            <button
              type="submit"
              className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-gold px-6 py-4 font-semibold text-black transition hover:bg-white sm:w-auto"
            >
              Enviar para WhatsApp
              <Send className="h-4 w-4" />
            </button>
            {status ? <p className="mt-4 text-sm text-gold">{status}</p> : null}
          </form>
        </AnimatedSection>
      </div>
    </section>
  );
}
