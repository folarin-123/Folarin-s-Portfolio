import { experience } from '../data/experience';
import Card from '../components/ui/Card';
import Container from '../components/ui/Container';
import SectionHeading from '../components/ui/SectionHeading';

export default function Experience() {
  return (
    <section id="experience" className="scroll-mt-24 py-20 sm:py-28">
      <Container>
        <SectionHeading eyebrow="04 / Experience & leadership" title="Learning through practice." />
        <Card className="grid gap-7 p-7 sm:grid-cols-2 sm:p-9">
          {experience.map((item) => (
            <article key={item.organization} className="border-l border-accent/50 pl-4">
              <p className="font-mono text-xs text-slate-500">{item.date}</p>
              <h3 className="mt-2 font-semibold text-white">{item.role}</h3>
              <p className="mt-1 text-sm text-slate-400">{item.organization}</p>
            </article>
          ))}
        </Card>
      </Container>
    </section>
  );
}
