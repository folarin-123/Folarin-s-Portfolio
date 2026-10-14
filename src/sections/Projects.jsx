import { motion } from 'motion/react';
import { projects } from '../data/projects';
import { externalLinkProps } from '../lib/links';
import { useReducedMotion } from '../hooks/useReducedMotion';
import Badge from '../components/ui/Badge';
import Button from '../components/ui/Button';
import Card from '../components/ui/Card';
import Container from '../components/ui/Container';
import SectionHeading from '../components/ui/SectionHeading';

export default function Projects() {
  const reducedMotion = useReducedMotion();
  return (
    <section id="projects" className="scroll-mt-24 py-20 sm:py-28">
      <Container>
        <SectionHeading
          eyebrow="03 / Selected work"
          title="Projects built to solve real problems."
        />
        <div className="grid gap-5 md:grid-cols-2">
          {projects.map((project, index) => (
            <motion.div
              key={project.name}
              initial={reducedMotion ? false : { opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{
                duration: reducedMotion ? 0 : 0.35,
                delay: reducedMotion ? 0 : index * 0.04,
              }}
            >
              <Card
                as="article"
                className="group h-full overflow-hidden transition duration-300 hover:-translate-y-1 hover:border-accent/50"
              >
                <div className="aspect-[16/8] overflow-hidden border-b border-white/10 bg-panel">
                  <img
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.03]"
                    src={project.image}
                    alt={project.imageAlt}
                    loading="lazy"
                    width="800"
                    height="400"
                  />
                </div>
                <div className="flex flex-col p-6 sm:p-7">
                  <h3 className="text-xl font-semibold text-white">{project.name}</h3>
                  <p className="mt-3 flex-1 leading-relaxed text-slate-400">
                    {project.description}
                  </p>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {project.technologies.map((technology) => (
                      <Badge key={technology}>{technology}</Badge>
                    ))}
                  </div>
                  <div className="mt-6 flex gap-3">
                    {project.liveUrl && (
                      <Button
                        href={project.liveUrl}
                        {...externalLinkProps}
                        className="min-h-10 px-4 py-2"
                      >
                        Live <span aria-hidden="true">↗</span>
                      </Button>
                    )}
                    {project.githubUrl && (
                      <Button
                        href={project.githubUrl}
                        variant="secondary"
                        {...externalLinkProps}
                        className="min-h-10 px-4 py-2"
                      >
                        GitHub <span aria-hidden="true">↗</span>
                      </Button>
                    )}
                    {!project.liveUrl && !project.githubUrl && (
                      <p className="text-xs text-slate-500">Project links coming soon</p>
                    )}
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
