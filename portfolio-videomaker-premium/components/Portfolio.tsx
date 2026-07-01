'use client';

import { motion } from 'framer-motion';
import { Play } from 'lucide-react';
import { useMemo, useState } from 'react';
import { categories, type Project, type ProjectCategory, projects } from '@/data/portfolio';
import AnimatedSection from './AnimatedSection';
import ProjectModal from './ProjectModal';
import SectionHeading from './SectionHeading';

export default function Portfolio() {
  const [activeCategory, setActiveCategory] = useState<ProjectCategory>('Todos');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const filteredProjects = useMemo(() => {
    if (activeCategory === 'Todos') return projects;
    return projects.filter((project) => project.category === activeCategory);
  }, [activeCategory]);

  return (
    <section id="portfolio" className="section-y container-px mx-auto max-w-7xl">
      <SectionHeading
        eyebrow="Portfólio"
        title="Projetos com impacto visual e intenção estratégica."
        description="Galeria com filtros e modal individual para apresentação de vídeo, cliente, descrição e serviços realizados."
      />

      <AnimatedSection className="mt-10 flex gap-3 overflow-x-auto pb-3">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setActiveCategory(category)}
            className={`shrink-0 rounded-full border px-5 py-3 text-sm font-semibold transition ${
              activeCategory === category
                ? 'border-gold bg-gold text-black'
                : 'border-white/10 bg-white/[0.03] text-white/60 hover:border-gold/40 hover:text-gold'
            }`}
          >
            {category}
          </button>
        ))}
      </AnimatedSection>

      <motion.div layout className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {filteredProjects.map((project, index) => (
          <motion.article
            layout
            key={project.id}
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: index * 0.04 }}
            className="group overflow-hidden rounded-[2rem] border border-white/10 bg-panel"
          >
            <button onClick={() => setSelectedProject(project)} className="block w-full text-left">
              <div className="relative aspect-[4/5] overflow-hidden bg-[#0f0f0f]">
                <video
                  className="h-full w-full object-cover opacity-70 transition duration-700 group-hover:scale-105 group-hover:opacity-95"
                  src={project.videoUrl}
                  poster="/poster.svg"
                  muted
                  loop
                  playsInline
                  preload="none"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
                <div className="absolute left-5 top-5 rounded-full border border-white/10 bg-black/40 px-4 py-2 text-xs uppercase tracking-[0.2em] text-gold backdrop-blur-md">
                  {project.category}
                </div>
                <div className="absolute left-5 top-1/2 flex h-14 w-14 -translate-y-1/2 items-center justify-center rounded-full bg-gold text-black shadow-gold transition group-hover:scale-110">
                  <Play className="h-6 w-6 fill-black" />
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-5">
                  <p className="text-sm text-white/55">{project.client}</p>
                  <h3 className="mt-2 font-display text-2xl font-semibold text-white">{project.title}</h3>
                </div>
              </div>
            </button>
          </motion.article>
        ))}
      </motion.div>

      <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
    </section>
  );
}
