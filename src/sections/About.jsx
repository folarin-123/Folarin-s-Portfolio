import Card from '../components/ui/Card';
import Container from '../components/ui/Container';
import SectionHeading from '../components/ui/SectionHeading';

export default function About() {
  return (
    <section id="about" className="scroll-mt-24 py-20 sm:py-28">
      <Container>
        <SectionHeading eyebrow="01 / About" title="Curious by nature. Practical by design." />
        <div className="grid gap-4 md:grid-cols-5">
          <Card className="p-7 sm:p-9 md:col-span-3">
            <p className="text-lg leading-relaxed text-slate-300">
              I’m a computer science student at the University of Ilorin learning to turn ideas into
              maintainable software. I enjoy working across backend systems and user-facing
              interfaces, and I value thoughtful collaboration and steady improvement.
            </p>
            <p className="mt-6 text-sm text-slate-500">
              Currently focused on building reliable web applications and strengthening my
              full-stack practice.
            </p>
          </Card>
          <Card className="flex flex-col justify-between p-7 sm:p-9 md:col-span-2">
            <p className="font-mono text-xs uppercase tracking-[.18em] text-accent">Education</p>
            <div className="mt-8">
              <h3 className="text-xl font-semibold text-white">University of Ilorin</h3>
              <p className="mt-2 text-sm text-slate-400">B.Sc. Computer Science</p>
            </div>
          </Card>
        </div>
      </Container>
    </section>
  );
}
