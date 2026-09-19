"use client";

import { useState } from "react";
import Image from "next/image";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";
import { projects } from "@/data/projects";

export default function Projects() {
  const [cursor, setCursor] = useState<{ x: number; y: number; show: boolean }>({
    x: 0,
    y: 0,
    show: false,
  });

  return (
    <section id="work" className="border-b border-line">
      <div className="mx-auto max-w-archive px-5 py-16 md:px-8 md:py-24">
        <SectionHeading index="02" label="SELECTED WORK" title="Things I've built." />

        <div className="mt-12">
          {projects.map((p, i) => (
            <Reveal key={p.no} delay={i * 0.04}>
              <a
                href="/work"
                onMouseMove={(e) => setCursor({ x: e.clientX, y: e.clientY, show: true })}
                onMouseLeave={() => setCursor((c) => ({ ...c, show: false }))}
                className="group grid gap-6 border-t border-line py-10 transition-colors last:border-b md:grid-cols-12 md:items-end"
              >
                <div className="md:col-span-5">
                  <div className="font-mono text-[12px] tracking-[0.2em] text-olive transition-all duration-300 group-hover:text-[14px]">
                    {p.no}
                  </div>
                  <h3 className="mt-3 font-serif text-4xl leading-none transition-transform duration-300 group-hover:translate-x-2 md:text-6xl">
                    {p.title}
                  </h3>
                  <p className="mt-3 border-t border-line pt-3 text-[15px] text-muted">
                    {p.subtitle}
                  </p>
                  <div className="mt-4 flex flex-wrap gap-2 font-mono text-[10px] tracking-[0.16em] text-muted">
                    {p.tags.map((t) => (
                      <span key={t} className="border border-line px-2 py-1">
                        {t}
                      </span>
                    ))}
                    <span className="px-1 py-1">{p.year}</span>
                  </div>
                  <span className="mt-5 inline-block font-mono text-[12px] tracking-[0.16em] opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    VIEW PROJECT →
                  </span>
                </div>
                <div className="md:col-span-7">
                  <div className="overflow-hidden border border-line bg-[#EDEDEA]">
                    <Image
                      src={p.image}
                      alt={`${p.title} — ${p.subtitle}`}
                      width={1200}
                      height={750}
                      className="aspect-[16/10] w-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.03]"
                    />
                  </div>
                </div>
              </a>
            </Reveal>
          ))}
        </div>
      </div>

      {cursor.show && (
        <div
          className="cursor-view hidden md:flex"
          style={{ left: cursor.x, top: cursor.y }}
        >
          VIEW →
        </div>
      )}
    </section>
  );
}
