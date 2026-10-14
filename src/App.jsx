import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import About from './sections/About';
import Contact from './sections/Contact';
import Experience from './sections/Experience';
import Hero from './sections/Hero';
import Projects from './sections/Projects';
import Skills from './sections/Skills';

export default function App() {
  return (
    <div className="min-h-screen overflow-clip bg-ink text-slate-200 antialiased">
      <a
        className="sr-only z-50 rounded-lg bg-accent px-4 py-3 font-semibold text-ink focus:not-sr-only focus:fixed focus:left-4 focus:top-4"
        href="#main-content"
      >
        Skip to content
      </a>
      <Navbar />
      <main id="main-content">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
