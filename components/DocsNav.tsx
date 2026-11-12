"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { BookOpen, MessageSquare, Sparkles, Shield } from "lucide-react";

const LOCALES = ["fr", "en", "es", "de", "pt"];

const TABS = [
  { key: "overview", href: "", label: "Vue d'ensemble", icon: BookOpen },
  { key: "inbox", href: "/inbox", label: "Aevia Inbox", icon: MessageSquare },
  { key: "launch", href: "/launch", label: "Aevia Launch", icon: Sparkles },
  { key: "security", href: "/security", label: "Aevia Security", icon: Shield },
] as const;

export function DocsNav() {
  const pathname = usePathname();
  const segments = pathname.split("/");
  const locale = LOCALES.includes(segments[1]) ? segments[1] : "fr";
  const base = `/${locale}/docs`;

  return (
    <div className="sticky top-14 z-40 border-b border-zinc-800/60 bg-[#09090b]/90 backdrop-blur-md">
      <div className="mx-auto max-w-3xl px-6 flex items-center gap-1 overflow-x-auto">
        {TABS.map((tab) => {
          const href = `${base}${tab.href}`;
          const active = pathname === href;
          const Icon = tab.icon;
          return (
            <Link
              key={tab.key}
              href={href}
              className={`flex items-center gap-1.5 px-3 py-2.5 text-sm whitespace-nowrap border-b-2 transition-colors ${
                active
                  ? "border-red-500 text-white"
                  : "border-transparent text-zinc-400 hover:text-white"
              }`}
            >
              <Icon size={14} />
              {tab.label}
            </Link>
          );
        })}
      </div>
    </div>
  );
}
