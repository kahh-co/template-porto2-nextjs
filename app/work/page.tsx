import Image from "next/image";
import Reveal from "@/components/Reveal";
import { projects } from "@/data/projects";

export default function WorkPage() {
  return (
    <div className="mx-auto max-w-archive px-5 py-16 md:px-8">
      <Reveal>
        <p className="font-mono text-[11px] tracking-[0.2em] text-muted">
          <span className="text-olive">02</span> / SELECTED WORK — INDEX
        </p>
        <h1 className="mt-5 font-serif text-5xl md:text-7xl">Things I&apos;ve built.</h1>
      </Reveal>
      <div className="mt-12 border-t border-line">
        {projects.map((p) => (
          <div key={p.no} className="grid gap-6 border-b border-line py-10 md:grid-cols-12">
            <div className="md:col-span-4">
              <p className="font-mono text-[12px] tracking-[0.2em] text-olive">{p.no}</p>
              <h2 className="mt-2 font-serif text-4xl">{p.title}</h2>
              <p className="mt-2 text-muted">{p.subtitle}</p>
              <p className="mt-4 text-[14px] leading-relaxed">{p.description}</p>
              <p className="mt-4 font-mono text-[11px] tracking-[0.16em] text-muted">
                {p.tags.join(" · ")} — {p.year}
              </p>
            </div>
            <div className="md:col-span-8">
              <div className="overflow-hidden border border-line bg-[#EDEDEA]">
                <Image
                  src={p.image}
                  alt={p.title}
                  width={1200}
                  height={750}
                  className="aspect-[16/10] w-full object-cover"
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
