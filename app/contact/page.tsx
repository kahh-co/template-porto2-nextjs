import Reveal from "@/components/Reveal";

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-archive px-5 py-16 md:px-8 md:py-24">
      <Reveal>
        <p className="font-mono text-[11px] tracking-[0.2em] text-muted">
          <span className="text-olive">06</span> / CONTACT
        </p>
        <h1 className="mt-5 font-serif text-5xl leading-[1.05] md:text-7xl">
          Have an idea?
          <br />
          Let&apos;s make it real.
        </h1>
        <a
          href="mailto:budi.santoso@email.com"
          className="mt-10 inline-block bg-ink px-8 py-4 font-mono text-[13px] tracking-[0.16em] text-paper hover:bg-olive"
        >
          START A CONVERSATION →
        </a>
        <div className="mt-12 border-t border-line pt-8">
          <p className="font-mono text-[11px] tracking-[0.2em] text-muted">EMAIL</p>
          <a
            href="mailto:budi.santoso@email.com"
            className="mt-2 block font-serif text-3xl hover:text-olive"
          >
            budi.santoso@email.com
          </a>
          <p className="mt-8 font-mono text-[11px] tracking-[0.2em] text-muted">SOCIAL</p>
          <p className="mt-2 flex gap-4 font-mono text-[13px] tracking-[0.12em]">
            <a href="https://github.com/budisantoso" className="hover:text-olive">GitHub</a>
            <span className="text-line">·</span>
            <a href="https://linkedin.com/in/budisantoso" className="hover:text-olive">LinkedIn</a>
            <span className="text-line">·</span>
            <a href="https://instagram.com/budisantoso" className="hover:text-olive">Instagram</a>
          </p>
        </div>
      </Reveal>
    </div>
  );
}
