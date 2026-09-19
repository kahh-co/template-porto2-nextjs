import Reveal from "./Reveal";

export default function IntroStatement() {
  return (
    <section className="border-b border-line">
      <div className="mx-auto max-w-archive px-5 py-16 md:px-8 md:py-24">
        <Reveal>
          <p className="max-w-4xl font-serif text-3xl leading-[1.15] md:text-5xl">
            Turning ideas into digital products that feel simple, useful, and
            intentional.
          </p>
        </Reveal>
        <Reveal delay={0.1}>
          <div className="mt-10 flex flex-wrap gap-x-10 gap-y-3 border-t border-line pt-6 font-mono text-[11px] tracking-[0.2em] text-muted">
            <span>WEB DEVELOPMENT</span>
            <span>SYSTEM INFORMATION</span>
            <span>UI / UX</span>
            <span>DIGITAL PRODUCTS</span>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
