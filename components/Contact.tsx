import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";

export default function Contact() {
  return (
    <section id="contact" className="border-b border-line">
      <div className="mx-auto max-w-archive px-5 py-20 md:px-8 md:py-28">
        <SectionHeading
          index="06"
          label="CONTACT"
          title="Have an idea? Let's make it real."
        />
        <Reveal delay={0.08}>
          <a
            href="mailto:your@email.com"
            className="group mt-10 inline-block font-mono text-[13px] tracking-[0.18em]"
          >
            <span className="bg-ink px-8 py-4 text-paper transition-colors group-hover:bg-olive">
              START A CONVERSATION →
            </span>
          </a>
        </Reveal>
        <Reveal delay={0.14}>
          <div className="mt-12 grid gap-8 border-t border-line pt-8 md:grid-cols-2">
            <div>
              <p className="font-mono text-[11px] tracking-[0.2em] text-muted">EMAIL</p>
              <a
                href="mailto:your@email.com"
                className="mt-2 block font-serif text-2xl hover:text-olive md:text-3xl"
              >
                your@email.com
              </a>
            </div>
            <div>
              <p className="font-mono text-[11px] tracking-[0.2em] text-muted">SOCIAL</p>
              <div className="mt-2 flex gap-4 font-mono text-[13px] tracking-[0.12em]">
                <a href="https://github.com" className="hover:text-olive">GitHub</a>
                <span className="text-line">·</span>
                <a href="https://linkedin.com" className="hover:text-olive">LinkedIn</a>
                <span className="text-line">·</span>
                <a href="https://instagram.com" className="hover:text-olive">Instagram</a>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
