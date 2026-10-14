import { useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { profile } from '../../data/profile';
import { useScrollSpy } from '../../hooks/useScrollSpy';
import { useReducedMotion } from '../../hooks/useReducedMotion';
import Button from '../ui/Button';

const links = [
  { label: 'About', id: 'about' },
  { label: 'Skills', id: 'skills' },
  { label: 'Projects', id: 'projects' },
  { label: 'Experience', id: 'experience' },
  { label: 'Contact', id: 'contact' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const activeId = useScrollSpy(links.map((link) => link.id));
  const reducedMotion = useReducedMotion();
  const duration = reducedMotion ? 0 : 0.2;

  return (
    <header className="sticky top-0 z-40 border-b border-white/5 bg-ink/85 backdrop-blur-xl">
      <nav
        aria-label="Main navigation"
        className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4 sm:px-8 lg:px-10"
      >
        <a
          className="rounded-lg font-semibold tracking-tight text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-accent"
          href="#home"
          onClick={() => setOpen(false)}
        >
          {profile.name}
        </a>
        <div className="hidden items-center gap-6 md:flex">
          {links.map((link) => (
            <a
              key={link.id}
              className={`text-sm transition hover:text-accent ${activeId === link.id ? 'text-accent' : 'text-slate-400'}`}
              href={`#${link.id}`}
              aria-current={activeId === link.id ? 'location' : undefined}
            >
              {link.label}
            </a>
          ))}
          <Button href="/resume.pdf" download className="min-h-10 px-4 py-2">
            Resume
          </Button>
        </div>
        <button
          className="inline-flex size-11 items-center justify-center rounded-lg border border-white/10 text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-accent md:hidden"
          type="button"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          aria-controls="mobile-navigation"
          onClick={() => setOpen(!open)}
        >
          <span aria-hidden="true">{open ? '×' : '☰'}</span>
        </button>
      </nav>
      <AnimatePresence>
        {open && (
          <motion.div
            id="mobile-navigation"
            className="absolute inset-x-0 top-full border-b border-white/10 bg-ink px-5 pb-6 shadow-2xl md:hidden"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration }}
          >
            <div className="mx-auto flex max-w-6xl flex-col gap-2 pt-3">
              {links.map((link) => (
                <a
                  key={link.id}
                  className="rounded-lg px-3 py-3 text-slate-300 hover:bg-white/5 hover:text-accent"
                  href={`#${link.id}`}
                  onClick={() => setOpen(false)}
                >
                  {link.label}
                </a>
              ))}
              <Button href="/resume.pdf" download className="mt-2" onClick={() => setOpen(false)}>
                Download Resume
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
