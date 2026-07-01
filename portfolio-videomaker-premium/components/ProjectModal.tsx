'use client';

import { AnimatePresence, motion } from 'framer-motion';
import { X } from 'lucide-react';
import type { Project } from '@/data/portfolio';

export default function ProjectModal({ project, onClose }: { project: Project | null; onClose: () => void }) {
  return (
    <AnimatePresence>
      {project ? (
        <motion.div
          className="fixed inset-0 z-[80] flex items-center justify-center bg-black/80 p-4 backdrop-blur-xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          role="dialog"
          aria-modal="true"
          aria-label={`Projeto ${project.title}`}
          onClick={onClose}
        >
          <motion.article
            className="max-h-[92vh] w-full max-w-5xl overflow-y-auto rounded-[2rem] border border-white/10 bg-[#101010] shadow-soft"
            initial={{ opacity: 0, scale: 0.96, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: 20 }}
            transition={{ duration: 0.35 }}
            onClick={(event) => event.stopPropagation()}
          >
            <div className="flex items-center justify-between border-b border-white/10 p-5">
              <div>
                <p className="font-display text-xs uppercase tracking-[0.35em] text-gold">{project.category}</p>
                <h3 className="mt-2 font-display text-2xl font-semibold text-white">{project.title}</h3>
              </div>
              <button
                aria-label="Fechar projeto"
                onClick={onClose}
                className="rounded-full border border-white/10 p-3 text-white/70 transition hover:border-gold/50 hover:text-gold"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <div className="p-5 sm:p-8">
              <video
                className="aspect-video w-full rounded-[1.5rem] border border-white/10 bg-black object-cover"
                src={project.videoUrl}
                poster="/poster.svg"
                controls
                preload="metadata"
              />

              <div className="mt-8 grid gap-8 lg:grid-cols-[0.75fr_1.25fr]">
                <div className="rounded-[1.5rem] border border-white/10 bg-white/[0.03] p-5">
                  <p className="text-sm text-white/45">Cliente</p>
                  <p className="mt-2 font-display text-xl font-semibold text-white">{project.client}</p>
                  <div className="mt-5 h-px bg-white/10" />
                  <p className="mt-5 text-sm text-white/45">Ano</p>
                  <p className="mt-2 text-white">{project.year}</p>
                </div>

                <div>
                  <p className="text-lg leading-8 text-white/70">{project.description}</p>
                  <div className="mt-6 flex flex-wrap gap-2">
                    {project.services.map((service) => (
                      <span key={service} className="rounded-full border border-gold/25 bg-gold/10 px-4 py-2 text-sm text-gold">
                        {service}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.article>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
