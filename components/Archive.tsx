import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";

const rows = [
  { year: "2026", text: "Building digital products" },
  { year: "2025", text: "Exploring web development" },
  { year: "2024", text: "Started building with code" },
];

export default function Archive() {
  return (
    <section className="border-b border-line">
      <div className="mx-auto grid max-w-archive gap-10 px-5 py-16 md:grid-cols-12 md:px-8 md:py-24">
        <div className="md:col-span-5">
          <SectionHeading index="05" label="ARCHIVE" title="Small timeline." />
          <Reveal delay={0.1}>
            <p className="mt-6 inline-block border border-line px-4 py-2 font-mono text-[11px] tracking-[0.16em] text-muted">
              Currently exploring: <span className="text-olive">AI × Web Development</span>
            </p>
          </Reveal>
        </div>
        <div className="md:col-span-7">
          <div className="border-t border-line">
            {rows.map((r, i) => (
              <Reveal key={r.year} delay={i * 0.05}>
                <div className="grid grid-cols-4 gap-4 border-b border-line py-6">
                  <span className="font-mono text-[13px] tracking-[0.16em] text-olive">
                    {r.year}
                  </span>
                  <span className="col-span-3 font-serif text-2xl">{r.text}</span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
