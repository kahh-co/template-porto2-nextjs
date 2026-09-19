import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-paper">
      <div className="mx-auto max-w-archive px-5 py-12 md:px-8">
        <div className="grid gap-8 md:grid-cols-3">
          <div>
            <p className="font-mono text-[13px] tracking-[0.14em]">LABIB KARL-SCHNEIDER</p>
            <p className="mt-3 font-mono text-[11px] tracking-[0.16em] text-muted">
              WEB DEVELOPER
              <br />
              INFORMATION SYSTEMS
            </p>
          </div>
          <div className="font-mono text-[11px] tracking-[0.16em] text-muted">
            <p>© 2026 LABIB K-S.</p>
            <p className="mt-2">BUILT WITH NEXT.JS</p>
          </div>
          <div className="md:text-right">
            <Link
              href="#top"
              className="font-mono text-[12px] tracking-[0.16em] hover:text-olive"
            >
              BACK TO TOP ↑
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
