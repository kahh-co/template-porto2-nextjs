import Reveal from "@/components/Reveal";

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-archive px-5 py-16 md:px-8">
      <Reveal>
        <p className="font-mono text-[11px] tracking-[0.2em] text-muted">
          <span className="text-olive">01</span> / ABOUT — FULL PAGE
        </p>
        <h1 className="mt-5 font-serif text-5xl md:text-7xl">A little about Labib.</h1>
        <p className="mt-6 max-w-2xl leading-relaxed">
          I&apos;m Labib Karl-Schneider, an Information Systems student and
          aspiring web developer. I care about functionality, simplicity, and
          thoughtful design — from understanding the problem, shaping the
          experience, building the product, to refining it.
        </p>
      </Reveal>
      <Reveal delay={0.1}>
        <dl className="mt-10 max-w-2xl border-t border-line">
          {[
            ["BASED IN", "INDONESIA"],
            ["FOCUS", "WEB DEVELOPMENT"],
            ["FIELD", "INFORMATION SYSTEMS"],
            ["CURRENTLY", "LEARNING & BUILDING"],
            ["EXPLORING", "AI × WEB DEVELOPMENT"],
          ].map(([k, v]) => (
            <div
              key={k}
              className="grid grid-cols-2 gap-4 border-b border-line py-4 font-mono text-[12px] tracking-[0.14em]"
            >
              <dt className="text-muted">{k}</dt>
              <dd>{v}</dd>
            </div>
          ))}
        </dl>
      </Reveal>
    </div>
  );
}
