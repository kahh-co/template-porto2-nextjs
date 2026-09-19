import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";

const steps = [
  { no: "01", title: "DISCOVER", desc: "Understand the problem." },
  { no: "02", title: "DESIGN", desc: "Shape the experience." },
  { no: "03", title: "BUILD", desc: "Turn ideas into functional products." },
  { no: "04", title: "REFINE", desc: "Test, improve, and iterate." },
];

export default function Process() {
  return (
    <section className="border-b border-line">
      <div className="mx-auto max-w-archive px-5 py-16 md:px-8 md:py-24">
        <SectionHeading index="04" label="PROCESS" title="How I work." />
        <div className="mt-12 grid gap-8 md:grid-cols-4">
          {steps.map((s, i) => (
            <Reveal key={s.no} delay={i * 0.06}>
              <div className="border-t border-ink pt-5">
                <p className="font-mono text-[11px] tracking-[0.2em] text-olive">
                  {s.no}
                </p>
                <h3 className="mt-3 font-mono text-[14px] tracking-[0.14em]">
                  {s.title}
                </h3>
                <p className="mt-3 text-[14px] leading-relaxed text-muted">
                  {s.desc}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
