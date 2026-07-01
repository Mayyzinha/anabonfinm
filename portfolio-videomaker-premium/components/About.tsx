import { differentials } from '@/data/portfolio';
import { siteConfig } from '@/data/site';
import AnimatedSection from './AnimatedSection';
import SectionHeading from './SectionHeading';

export default function About() {
  return (
    <section id="sobre" className="section-y container-px mx-auto max-w-7xl">
      <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
        <SectionHeading
          eyebrow="Sobre"
          title="Narrativas visuais para marcas com presença."
          description="Um portfólio construído para transmitir sofisticação, clareza e resultado. A proposta é unir estética cinematográfica com pensamento comercial, criando vídeos que prendem atenção e valorizam cada detalhe da marca."
        />

        <div className="space-y-6">
          <AnimatedSection className="glass-panel rounded-[2rem] p-6 sm:p-8">
            <p className="text-lg leading-9 text-white/70">
              Sou {siteConfig.name}, videomaker focada em transformar ideias, produtos, eventos e histórias em conteúdos audiovisuais de alto padrão. Meu trabalho combina direção visual, edição estratégica, ritmo, colorização e atenção aos detalhes para entregar vídeos com aparência profissional e impacto real.
            </p>
            <p className="mt-6 text-lg leading-9 text-white/70">
              Atuo com captação, edição, reels, comerciais, institucionais e conteúdos para redes sociais, sempre buscando uma estética limpa, moderna e memorável.
            </p>
          </AnimatedSection>

          <div className="grid gap-4 sm:grid-cols-3">
            {differentials.map((item, index) => {
              const Icon = item.icon;
              return (
                <AnimatedSection key={item.title} delay={index * 0.08} className="glass-panel rounded-[1.5rem] p-5">
                  <Icon className="h-6 w-6 text-gold" />
                  <h3 className="mt-5 font-display text-lg font-semibold text-white">{item.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-white/55">{item.description}</p>
                </AnimatedSection>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
