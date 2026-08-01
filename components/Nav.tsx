"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useState, useTransition, useRef, useEffect } from "react";
import { Menu, X, Shield, MessageSquare, ChevronDown, ExternalLink, Globe, LogIn } from "lucide-react";
import { AeviaLogo } from "@/components/AeviaLogo";

const navLinks = [
  { href: "/blog", label: "Blog" },
];

const NAV_T = {
  fr: {
    products: "Produits", soon: "Bientôt", cta: "Contact",
    mobileProducts: "Produits", mobileLang: "Langue",
    login: "Se connecter", loginSub: "Accéder à votre espace",
    descLaunch: "Site web en 7 jours — 3 templates pro",
    descSecurity: "Audit sécurité & performance en 60s",
    descInbox: "CRM multi-canal — téléphone, email, chat web",
  },
  en: {
    products: "Products", soon: "Coming soon", cta: "Contact",
    mobileProducts: "Products", mobileLang: "Language",
    login: "Sign in", loginSub: "Access your account",
    descLaunch: "Website in 7 days — 3 pro templates",
    descSecurity: "Security & performance audit in 60s",
    descInbox: "Multi-channel CRM — phone, email, web chat",
  },
  es: {
    products: "Productos", soon: "Próximamente", cta: "Contacto",
    mobileProducts: "Productos", mobileLang: "Idioma",
    login: "Iniciar sesión", loginSub: "Accede a tu cuenta",
    descLaunch: "Sitio web en 7 días — 3 plantillas pro",
    descSecurity: "Auditoría de seguridad y rendimiento en 60s",
    descInbox: "CRM multicanal — teléfono, email, chat web",
  },
  de: {
    products: "Produkte", soon: "Bald", cta: "Kontakt",
    mobileProducts: "Produkte", mobileLang: "Sprache",
    login: "Anmelden", loginSub: "Zugang zu Ihrem Konto",
    descLaunch: "Website in 7 Tagen — 3 Pro-Vorlagen",
    descSecurity: "Sicherheits- & Performance-Audit in 60s",
    descInbox: "Multichannel-CRM — Telefon, E-Mail, Web-Chat",
  },
  pt: {
    products: "Produtos", soon: "Em breve", cta: "Contacto",
    mobileProducts: "Produtos", mobileLang: "Idioma",
    login: "Entrar", loginSub: "Acesse sua conta",
    descLaunch: "Site em 7 dias — 3 templates pro",
    descSecurity: "Auditoria de segurança e performance em 60s",
    descInbox: "CRM multicanal — telefone, email, chat no site",
  },
} as const;

type NavTKey = keyof typeof NAV_T;
type NavTrans = typeof NAV_T.fr;

const products: Array<{
  name: string;
  href: string;
  descKey: keyof NavTrans;
  status: "live" | "soon";
}> = [
  { name: "AeviaLaunch",   href: "https://launch.aevia.services",    descKey: "descLaunch",    status: "live" },
  { name: "AeviaSecurity", href: "https://security.aevia.services",  descKey: "descSecurity",  status: "live" },
  { name: "AeviaInbox",    href: "https://inbox.aevia.services",     descKey: "descInbox",     status: "live" },
];

const LOCALES = [
  { code: "fr", label: "Français", flag: "🇫🇷" },
  { code: "en", label: "English",  flag: "🇬🇧" },
  { code: "es", label: "Español",  flag: "🇪🇸" },
  { code: "de", label: "Deutsch",  flag: "🇩🇪" },
  { code: "pt", label: "Português",flag: "🇵🇹" },
];

function LangSwitcher() {
  const router = useRouter();
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [, startTransition] = useTransition();

  const segments = pathname.split("/");
  const detectedCode = LOCALES.find(l => l.code === segments[1])?.code ?? "fr";
  const current = LOCALES.find(l => l.code === detectedCode) ?? LOCALES[0];

  function switchLocale(code: string) {
    setOpen(false);
    const segs = pathname.split("/");
    if (LOCALES.some(l => l.code === segs[1])) {
      segs[1] = code;
    } else {
      segs.splice(1, 0, code);
    }
    startTransition(() => {
      router.push(segs.join("/") || "/");
    });
  }

  return (
    <div className="relative">
      <button
        onClick={() => setOpen(v => !v)}
        className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-md text-sm text-zinc-400 hover:text-white hover:bg-zinc-800/60 transition-colors"
        aria-label="Change language"
      >
        <Globe size={14} />
        <span className="hidden md:inline">{current.flag} {current.code.toUpperCase()}</span>
        <span className="md:hidden">{current.flag}</span>
        <ChevronDown size={12} className={`transition-transform ${open ? "rotate-180" : ""}`} />
      </button>
      {open && (
        <div className="absolute right-0 mt-1 w-40 bg-zinc-900 border border-zinc-800 rounded-xl shadow-xl shadow-black/40 overflow-hidden z-50">
          {LOCALES.map(l => (
            <button
              key={l.code}
              onClick={() => switchLocale(l.code)}
              className={`w-full flex items-center gap-2 px-3 py-2 text-sm transition-colors hover:bg-zinc-800 ${
                l.code === detectedCode ? "text-white font-semibold" : "text-zinc-400"
              }`}
            >
              <span>{l.flag}</span>
              <span>{l.label}</span>
              {l.code === detectedCode && <span className="ml-auto w-1.5 h-1.5 rounded-full bg-red-400" />}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

const loginLinks = [
  { name: "AeviaSecurity", href: "https://security.aevia.services/login", icon: Shield },
  { name: "AeviaInbox",    href: "https://inbox.aevia.services/fr/account/login", icon: MessageSquare },
] as const;

export function Nav() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [loginOpen, setLoginOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const loginRef = useRef<HTMLDivElement>(null);

  // Click-based dropdowns — close on outside click or item selection
  useEffect(() => {
    function onDocClick(e: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setDropdownOpen(false);
      }
      if (loginRef.current && !loginRef.current.contains(e.target as Node)) {
        setLoginOpen(false);
      }
    }
    document.addEventListener("mousedown", onDocClick);
    return () => document.removeEventListener("mousedown", onDocClick);
  }, []);

  const segments = pathname.split("/");
  const locale = (LOCALES.some((l) => l.code === segments[1]) ? segments[1] : "fr") as NavTKey;
  const t = NAV_T[locale] ?? NAV_T.fr;

  function localePath(path: string) {
    return `/${locale}${path}`;
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-zinc-800/60 bg-[#09090b]/80 backdrop-blur-md">
      <div className="mx-auto max-w-5xl px-6 h-14 flex items-center justify-between">

        <Link href={`/${locale}`} className="hover:opacity-80 transition-opacity">
          <AeviaLogo />
        </Link>

        <nav className="hidden sm:flex items-center gap-1">
          <div ref={dropdownRef} className="relative">
            <button
              onClick={() => setDropdownOpen((v) => !v)}
              aria-expanded={dropdownOpen}
              aria-haspopup="true"
              className="px-3 py-1.5 rounded-md text-sm text-zinc-400 hover:text-white hover:bg-zinc-800/60 transition-colors flex items-center gap-1"
            >
              {t.products}
              <ChevronDown size={14} className={`transition-transform ${dropdownOpen ? "rotate-180" : ""}`} />
            </button>

            {dropdownOpen && (
              <div className="absolute left-0 top-full pt-2 w-80" onClick={() => setDropdownOpen(false)}>
                <div className="bg-zinc-900 border border-zinc-800 rounded-xl shadow-xl shadow-black/40 overflow-hidden p-2 flex flex-col gap-1">
                  {products.map((p) => {
                    const isLive = p.status === "live";
                    return (
                      <a
                        key={p.name}
                        href={p.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`block p-2.5 rounded-lg transition-colors group ${isLive ? "hover:bg-zinc-800/60 cursor-pointer" : "opacity-60 cursor-not-allowed pointer-events-none"}`}
                      >
                        <div className="min-w-0">
                          <div className="flex items-center gap-2 mb-0.5">
                            <span className="font-semibold text-white text-sm group-hover:text-red-300 transition-colors">
                              {p.name}
                            </span>
                            {isLive ? (
                              <>
                                <span className="bg-emerald-500/20 text-emerald-300 text-[10px] px-1.5 py-0.5 rounded-full font-medium">Live</span>
                                <ExternalLink className="w-3 h-3 text-zinc-600 group-hover:text-zinc-400 transition-colors" />
                              </>
                            ) : (
                              <span className="bg-amber-500/20 text-amber-300 text-[10px] px-1.5 py-0.5 rounded-full font-medium">{t.soon}</span>
                            )}
                          </div>
                          <p className="text-xs text-zinc-500">{t[p.descKey]}</p>
                        </div>
                      </a>
                    );
                  })}
                </div>
              </div>
            )}
          </div>

          {navLinks.map((l) => {
            const fullHref = localePath(l.href);
            return (
              <Link
                key={l.href}
                href={fullHref}
                className={`px-3 py-1.5 rounded-md text-sm transition-colors ${
                  pathname === fullHref ? "text-white bg-zinc-800" : "text-zinc-400 hover:text-white hover:bg-zinc-800/60"
                }`}
              >
                {l.label}
              </Link>
            );
          })}

          <LangSwitcher />

          <div ref={loginRef} className="relative">
            <button
              onClick={() => setLoginOpen((v) => !v)}
              aria-expanded={loginOpen}
              aria-haspopup="true"
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-md text-sm text-zinc-400 hover:text-white hover:bg-zinc-800/60 transition-colors"
            >
              <LogIn size={14} />
              <span>{t.login}</span>
              <ChevronDown size={12} className={`transition-transform ${loginOpen ? "rotate-180" : ""}`} />
            </button>

            {loginOpen && (
              <div className="absolute right-0 top-full pt-2 w-64" onClick={() => setLoginOpen(false)}>
                <div className="bg-zinc-900 border border-zinc-800 rounded-xl shadow-xl shadow-black/40 overflow-hidden p-2 flex flex-col gap-1">
                  <p className="text-[10px] text-zinc-600 uppercase tracking-wider font-medium px-2.5 pt-1 pb-0.5">{t.loginSub}</p>
                  {loginLinks.map((l) => {
                    const Icon = l.icon;
                    return (
                      <a
                        key={l.name}
                        href={l.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-3 px-2.5 py-2 rounded-lg hover:bg-zinc-800/60 transition-colors group"
                      >
                        <Icon className="w-4 h-4 text-red-400 shrink-0" />
                        <span className="text-sm font-medium text-white group-hover:text-red-300 transition-colors">{l.name}</span>
                        <ExternalLink className="w-3 h-3 text-zinc-600 group-hover:text-zinc-400 transition-colors ml-auto" />
                      </a>
                    );
                  })}
                </div>
              </div>
            )}
          </div>

          <Link
            href="/contact"
            className="ml-2 px-4 py-1.5 rounded-full bg-red-600 hover:bg-red-500 text-white text-sm font-semibold transition-colors"
          >
            {t.cta}
          </Link>
        </nav>

        <button
          className="sm:hidden text-zinc-400 hover:text-white"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle navigation"
        >
          {mobileOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {mobileOpen && (
        <div className="sm:hidden border-t border-zinc-800 bg-[#09090b] px-6 py-4 flex flex-col gap-1">
          {navLinks.map((l) => {
            const fullHref = localePath(l.href);
            return (
              <Link
                key={l.href}
                href={fullHref}
                onClick={() => setMobileOpen(false)}
                className={`px-3 py-2.5 rounded-md text-sm transition-colors ${
                  pathname === fullHref ? "text-white bg-zinc-800" : "text-zinc-400 hover:text-white"
                }`}
              >
                {l.label}
              </Link>
            );
          })}

          <div className="mt-2 pt-2 border-t border-zinc-800 flex flex-col gap-1">
            <p className="text-xs text-zinc-600 px-3 py-1 uppercase tracking-wider font-medium">{t.login}</p>
            {loginLinks.map((l) => {
              const Icon = l.icon;
              return (
                <a
                  key={l.name}
                  href={l.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setMobileOpen(false)}
                  className="flex items-center gap-3 px-3 py-2.5 rounded-md text-sm text-zinc-400 hover:text-white hover:bg-zinc-800/60 transition-colors"
                >
                  <Icon className="w-4 h-4 text-red-400 shrink-0" />
                  <span>{l.name}</span>
                </a>
              );
            })}
          </div>

          <div className="mt-2 pt-2 border-t border-zinc-800 flex flex-col gap-1">
            <p className="text-xs text-zinc-600 px-3 py-1 uppercase tracking-wider font-medium">{t.mobileProducts}</p>
            {products.map((p) => {
              const isLive = p.status === "live";
              return (
                <a
                  key={p.name}
                  href={isLive ? p.href : "#"}
                  target={isLive ? "_blank" : undefined}
                  rel={isLive ? "noopener noreferrer" : undefined}
                  onClick={() => setMobileOpen(false)}
                  className="flex items-center justify-between px-3 py-2.5 rounded-md text-sm text-zinc-400 hover:text-white hover:bg-zinc-800/60 transition-colors"
                >
                  <span>{p.name}</span>
                  {isLive ? (
                    <span className="bg-emerald-500/20 text-emerald-300 text-[10px] px-1.5 py-0.5 rounded-full">Live</span>
                  ) : (
                    <span className="bg-amber-500/20 text-amber-300 text-[10px] px-1.5 py-0.5 rounded-full">{t.soon}</span>
                  )}
                </a>
              );
            })}
          </div>

          <div className="mt-2 pt-2 border-t border-zinc-800">
            <p className="text-xs text-zinc-600 px-3 py-1 uppercase tracking-wider font-medium mb-1">{t.mobileLang}</p>
            <LangSwitcher />
          </div>

          <div className="mt-3 pt-3 border-t border-zinc-800">
            <Link
              href="/contact"
              onClick={() => setMobileOpen(false)}
              className="block w-full text-center px-4 py-2.5 rounded-full bg-red-600 hover:bg-red-500 text-white text-sm font-semibold transition-colors"
            >
              {t.cta}
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
