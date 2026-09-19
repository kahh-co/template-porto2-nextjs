import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";

const meta = [
  { k: "BASED IN", v: "INDONESIA" },
  { k: "FOCUS", v: "WEB DEVELOPMENT" },
  { k: "FIELD", v: "INFORMATION SYSTEMS" },
  { k: "CURRENTLY", v: "LEARNING & BUILDING" },
];

export default function About() {
  return (
    <section id="about" className="border-b border-line">
      <div className="mx-auto grid max-w-archive gap-10 px-5 py-16 md:grid-cols-12 md:px-8 md:py-24">
        <div className="md:col-span-5">
          <SectionHeading index="01" label="ABOUT" title="A little about Labib." />
        </div>
        <div className="md:col-span-7">
          <Reveal delay={0.05}>
            <p className="max-w-xl text-[16px] leading-relaxed text-ink">
              I&apos;m Labib Karl-Schneider, an Information Systems student and
              aspiring web developer interested in building digital products
              that combine functionality, simplicity, and thoughtful design.
            </p>
          </Reveal>
          <Reveal delay={0.12}>
            <dl className="mt-10 border-t border-line">
              {meta.map((row) => (
                <div
                  key={row.k}
                  className="grid grid-cols-2 gap-4 border-b border-line py-4 font-mono text-[12px] tracking-[0.14em]"
                >
                  <dt className="text-muted">{row.k}</dt>
                  <dd className="text-ink">{row.v}</dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
