import { skillGroups } from '../data/skills';
import Badge from '../components/ui/Badge';
import Card from '../components/ui/Card';
import Container from '../components/ui/Container';
import SectionHeading from '../components/ui/SectionHeading';

export default function Skills() {
  return (
    <section id="skills" className="scroll-mt-24 py-20 sm:py-28">
      <Container>
        <SectionHeading eyebrow="02 / Skills" title="Tools I work with." />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {skillGroups.map((group) => (
            <Card key={group.name} className="p-6">
              <h3 className="mb-5 text-sm font-semibold text-white">{group.name}</h3>
              <div className="flex flex-wrap gap-2">
                {group.items.map((skill) => (
                  <Badge key={skill}>{skill}</Badge>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
}
