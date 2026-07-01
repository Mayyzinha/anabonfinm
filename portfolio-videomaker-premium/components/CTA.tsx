import { contactLinks } from '@/data/site';
import ButtonLink from './ButtonLink';
import AnimatedSection from './AnimatedSection';

export default function CTA() {
  return (
    <section className="container-px mx-auto max-w-7xl py-20 sm:py-24">
      <AnimatedSection>
        <div className="relative overflow-hidden rounded-[2.5rem] border border-gold/20 bg-[#151100] px-6 py-16 text-center shadow-gold sm:px-12 lg:py-24">
          <div className="absolute left-1/2 top-0 h-72 w-72 -translate-x-1/2 rounded-full bg-gold/20 blur-3xl" />
          <div className="relative mx-auto max-w-4xl">
            <p className="font-display text-xs font-semibold uppercase tracking-[0.4em] text-gold">Vamos criar?</p>
            <h2 className="mt-5 font-display text-4xl font-semibold leading-none text-white sm:text-6xl lg:text-8xl">
              Sua marca pode ter um vídeo com cara de alto padrão.
            </h2>
            <p className="mx-auto mt-7 max-w-2xl text-lg leading-8 text-white/65">
              Envie uma mensagem com sua ideia, objetivo e prazo. A partir disso, preparo uma proposta personalizada para o seu projeto.
            </p>
            <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
              <ButtonLink href={contactLinks.whatsapp} target="_blank">
                Solicitar orçamento
              </ButtonLink>
              <ButtonLink href="#portfolio" variant="secondary">
                Ver projetos
              </ButtonLink>
            </div>
          </div>
        </div>
      </AnimatedSection>
    </section>
  );
}
