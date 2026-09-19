import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";

const groups = [
  { title: "FRONTEND", items: ["Next.js", "React", "JavaScript", "Tailwind CSS"] },
  { title: "BACKEND", items: ["Laravel", "PHP", "REST API"] },
  { title: "DATABASE", items: ["Supabase", "MySQL"] },
  { title: "TOOLS", items: ["Git", "GitHub", "Figma", "VS Code"] },
];

export default function Skills() {
  return (
    <section className="border-b border-line">
      <div className="mx-auto max-w-archive px-5 py-16 md:px-8 md:py-24">
        <SectionHeading index="03" label="TOOLKIT" title="What I work with." />
        <div className="mt-12 grid gap-px border border-line bg-line sm:grid-cols-2 lg:grid-cols-4">
          {groups.map((g, i) => (
            <Reveal key={g.title} delay={i * 0.05} className="bg-paper">
              <div className="h-full p-8">
                <p className="font-mono text-[11px] tracking-[0.2em] text-olive">
                  {g.title}
                </p>
                <ul className="mt-5 space-y-3">
                  {g.items.map((item) => (
                    <li
                      key={item}
                      className="border-b border-line pb-3 font-serif text-2xl"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
