import { motion } from 'motion/react';
import { profile } from '../data/profile';
import { useReducedMotion } from '../hooks/useReducedMotion';
import Button from '../components/ui/Button';
import Container from '../components/ui/Container';

export default function Hero() {
  const reducedMotion = useReducedMotion();
  return (
    <section
      id="home"
      className="grid-bg flex min-h-[calc(100svh-4rem)] items-center py-20 sm:py-28"
    >
      <Container>
        <motion.div
          initial={reducedMotion ? false : { opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: reducedMotion ? 0 : 0.6 }}
        >
          <p className="mb-6 inline-flex items-center gap-2 rounded-full border border-accent/25 bg-accent/10 px-4 py-2 font-mono text-xs text-accent">
            <span className="size-2 rounded-full bg-accent" /> Junior Backend / Full-Stack Developer
          </p>
          <h1 className="max-w-4xl text-[clamp(2.8rem,9vw,6.5rem)] font-semibold leading-[.98] tracking-[-.05em] text-white">
            Building useful <span className="text-accent">digital tools.</span>
          </h1>
          <p className="mt-7 max-w-2xl text-base leading-relaxed text-slate-300 sm:text-lg">
            {profile.bio}
          </p>
          <p className="mt-3 text-sm text-slate-500">{profile.education}</p>
          <div className="mt-9 flex flex-wrap gap-3">
            <Button href="#projects">
              Explore my work <span aria-hidden="true">↗</span>
            </Button>
            <Button href="/resume.pdf" download variant="secondary">
              Download Resume
            </Button>
          </div>
          <p className="mt-14 font-mono text-xs uppercase tracking-[.16em] text-slate-500">
            Based in Nigeria · Open to opportunities
          </p>
        </motion.div>
      </Container>
    </section>
  );
}
