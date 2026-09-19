"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";

export default function Hero() {
  const reduce = useReducedMotion();

  const fadeUp = {
    hidden: { opacity: 0, y: 20 },
    show: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] as const },
    }),
  };

  const content = (
    <>
      <p className="font-mono text-[11px] tracking-[0.22em] text-muted">
        PERSONAL PORTFOLIO / 2026
      </p>

      <h1 className="mt-6 font-serif text-[13vw] leading-[0.95] sm:text-6xl md:text-7xl lg:text-[5.2rem]">
        I build digital experiences
        <br />
        with purpose and character.
      </h1>

      <p className="mt-6 max-w-md text-[15px] leading-relaxed text-muted">
        Web Developer &amp; Information Systems Student based in Indonesia.
      </p>

      <div className="mt-8 flex flex-wrap items-center gap-6">
        <Link
          href="#work"
          className="group font-mono text-[12px] tracking-[0.16em] text-ink"
        >
          <span className="border-b border-ink pb-1 transition-colors group-hover:border-olive group-hover:text-olive">
            VIEW SELECTED WORK →
          </span>
        </Link>
        <Link
          href="/contact"
          className="rounded-full bg-ink px-6 py-3 font-mono text-[12px] tracking-[0.14em] text-paper transition-colors hover:bg-olive"
        >
          GET IN TOUCH
        </Link>
      </div>

      <div className="mt-12 border-t border-line pt-5 font-mono text-[11px] tracking-[0.18em] text-muted">
        WEB DEVELOPMENT / SYSTEMS / DIGITAL
      </div>
    </>
  );

  return (
    <section className="border-b border-line">
      <div className="mx-auto grid max-w-archive gap-10 px-5 pb-14 pt-10 md:grid-cols-12 md:px-8 md:pt-16">
        <div className="md:col-span-7">
          {reduce ? (
            content
          ) : (
            <>
              <motion.div variants={fadeUp} initial="hidden" animate="show" custom={0}>
                <p className="font-mono text-[11px] tracking-[0.22em] text-muted">
                  LABIB KARL-SCHNEIDER — DIGITAL ARCHIVE / 2026
                </p>
              </motion.div>
              <motion.div variants={fadeUp} initial="hidden" animate="show" custom={1}>
                <h1 className="mt-6 font-serif text-[13vw] leading-[0.95] sm:text-6xl md:text-7xl lg:text-[5.2rem]">
                  I build digital experiences
                  <br />
                  with purpose and character.
                </h1>
              </motion.div>
              <motion.div variants={fadeUp} initial="hidden" animate="show" custom={2}>
                <p className="mt-6 max-w-md text-[15px] leading-relaxed text-muted">
                  Web Developer &amp; Information Systems Student based in
                  Indonesia.
                </p>
                <div className="mt-8 flex flex-wrap items-center gap-6">
                  <Link
                    href="#work"
                    className="group font-mono text-[12px] tracking-[0.16em] text-ink"
                  >
                    <span className="border-b border-ink pb-1 transition-colors group-hover:border-olive group-hover:text-olive">
                      VIEW SELECTED WORK →
                    </span>
                  </Link>
                  <Link
                    href="/contact"
                    className="rounded-full bg-ink px-6 py-3 font-mono text-[12px] tracking-[0.14em] text-paper transition-colors hover:bg-olive"
                  >
                    GET IN TOUCH
                  </Link>
                </div>
                <div className="mt-12 border-t border-line pt-5 font-mono text-[11px] tracking-[0.18em] text-muted">
                  WEB DEVELOPMENT / SYSTEMS / DIGITAL
                </div>
              </motion.div>
            </>
          )}
        </div>

        <div className="md:col-span-5">
          <motion.figure
            initial={reduce ? undefined : { opacity: 0, y: 24 }}
            animate={reduce ? undefined : { opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.25 }}
            className="relative"
          >
            <div className="overflow-hidden bg-[#EDEDEA]">
              <Image
                src="/images/profile.jpg"
                alt="Portrait of Labib Karl-Schneider"
                width={800}
                height={1000}
                priority
                className="img-editorial aspect-[3/4] w-full object-cover object-top"
              />
            </div>
            <figcaption className="mt-3 flex justify-between font-mono text-[11px] tracking-[0.16em] text-muted">
              <span>FIG. 01 — PORTRAIT</span>
              <span>2026.09</span>
            </figcaption>
          </motion.figure>
        </div>
      </div>
    </section>
  );
}
