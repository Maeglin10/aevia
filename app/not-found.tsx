import Link from "next/link";
import { ArrowLeft, Compass } from "lucide-react";
import { AeviaLogo } from "@/components/AeviaLogo";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#09090b] text-[#fafafa] flex items-center justify-center px-6">
      {/* Ambient brand glow */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute left-[-15%] top-[-10%] h-[45%] w-[45%] rounded-full bg-[#7c3aed]/10 blur-[120px]" />
        <div className="absolute bottom-[-15%] right-[-15%] h-[45%] w-[45%] rounded-full bg-[#8b5cf6]/10 blur-[120px]" />
      </div>

      <div className="relative z-10 max-w-md text-center">
        <div className="mb-8 flex justify-center">
          <AeviaLogo className="h-9 w-auto opacity-90" />
        </div>

        <div className="mx-auto mb-6 inline-flex h-16 w-16 items-center justify-center rounded-2xl border border-[#7c3aed]/25 bg-[#7c3aed]/10">
          <Compass className="h-8 w-8 text-[#8b5cf6]" />
        </div>

        <p className="mb-3 font-mono text-xs uppercase tracking-widest text-[#71717a]">
          404 — Page introuvable
        </p>
        <h1 className="mb-4 text-3xl font-bold md:text-4xl">Cette page n&apos;existe pas</h1>
        <p className="mb-8 text-[#a1a1aa]">
          Le lien est peut-être erroné ou la page a été déplacée. Revenez à l&apos;accueil pour
          retrouver votre chemin.
        </p>

        <Link
          href="/fr"
          className="inline-flex items-center gap-2 rounded-full bg-[#7c3aed] px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#6d28d9]"
        >
          <ArrowLeft className="h-4 w-4" />
          Retour à l&apos;accueil
        </Link>
      </div>
    </div>
  );
}
