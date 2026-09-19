import Reveal from "./Reveal";

export default function SectionHeading({
  index,
  label,
  title,
}: {
  index: string;
  label: string;
  title: string;
}) {
  return (
    <Reveal>
      <div className="flex items-center gap-4 font-mono text-[11px] tracking-[0.18em] text-muted">
        <span className="text-olive">{index}</span>
        <span className="h-px w-10 bg-line" aria-hidden />
        <span>/ {label}</span>
      </div>
      <h2 className="mt-5 font-serif text-4xl leading-[1.05] md:text-6xl">
        {title}
      </h2>
    </Reveal>
  );
}
