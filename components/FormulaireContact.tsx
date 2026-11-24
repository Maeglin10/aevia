"use client";

import { useState } from "react";
import { Send, Mail, MapPin, Phone, CheckCircle2 } from "lucide-react";
import { EMAIL_CONTACT, TELEPHONE_AFFICHE, TELEPHONE_LIEN, type TextesContact } from "@/lib/contact-textes";
import { GithubIcon } from "@/components/GithubIcon";
import { motion } from "framer-motion";

type FieldErrors = { name?: string; email?: string; message?: string };

export function FormulaireContact({ t }: { t: TextesContact }) {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [error, setError] = useState("");
  const [fieldErrors, setFieldErrors] = useState<FieldErrors>({});

  const validate = (): FieldErrors => {
    const errors: FieldErrors = {};
    if (!form.name.trim()) errors.name = t.erreurNom;
    if (!form.email.trim()) {
      errors.email = t.erreurEmail;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim())) {
      errors.email = t.erreurEmailInvalide;
    }
    if (!form.message.trim()) errors.message = t.erreurMessage;
    return errors;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    const errors = validate();
    setFieldErrors(errors);
    if (Object.keys(errors).length > 0) return;

    setStatus("loading");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (!res.ok) throw new Error("Failed to send");
      setStatus("success");
    } catch {
      setStatus("error");
      setError(t.erreurEnvoi);
    }
  };

  if (status === "success") {
    return (
      <div className="min-h-screen pt-24 px-6 flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="text-center"
        >
          <CheckCircle2 className="w-16 h-16 text-emerald-500 mx-auto mb-6" />
          <h1 className="text-2xl font-bold text-white mb-3">{t.envoyeTitre}</h1>
          <p className="text-zinc-400 max-w-sm">
            {t.envoyeTexte}
          </p>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-24 pb-32 px-6">
      {/* Background */}
      <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full bg-red-600/8 blur-[120px]" />
      </div>

      <div className="mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="mb-12"
        >
          <h1 className="text-3xl sm:text-4xl font-bold text-white mb-4">{t.titre}</h1>
          <p className="text-zinc-400 text-lg max-w-xl">
            {t.intro}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
          {/* Form */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="lg:col-span-3"
          >
            <form onSubmit={handleSubmit} noValidate className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="contact-name" className="block text-base text-zinc-300 font-medium mb-2">
                    {t.nom} <span className="text-red-400" aria-hidden="true">*</span>
                  </label>
                  <input
                    id="contact-name"
                    type="text"
                    required
                    aria-required="true"
                    aria-invalid={!!fieldErrors.name}
                    aria-describedby={fieldErrors.name ? "contact-name-error" : undefined}
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    placeholder={t.nomExemple}
                    className={`w-full px-4 py-2.5 rounded-xl border bg-zinc-900 text-white placeholder:text-zinc-400 text-base focus:outline-none transition-colors ${
                      fieldErrors.name
                        ? "border-red-500 focus:border-red-500"
                        : "border-zinc-700 focus:border-red-500"
                    }`}
                  />
                  {fieldErrors.name && (
                    <p id="contact-name-error" className="mt-1.5 text-base text-red-400">
                      {fieldErrors.name}
                    </p>
                  )}
                </div>
                <div>
                  <label htmlFor="contact-email" className="block text-base text-zinc-300 font-medium mb-2">
                    {t.email} <span className="text-red-400" aria-hidden="true">*</span>
                  </label>
                  <input
                    id="contact-email"
                    type="email"
                    required
                    aria-required="true"
                    aria-invalid={!!fieldErrors.email}
                    aria-describedby={fieldErrors.email ? "contact-email-error" : undefined}
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    placeholder={t.emailExemple}
                    className={`w-full px-4 py-2.5 rounded-xl border bg-zinc-900 text-white placeholder:text-zinc-400 text-base focus:outline-none transition-colors ${
                      fieldErrors.email
                        ? "border-red-500 focus:border-red-500"
                        : "border-zinc-700 focus:border-red-500"
                    }`}
                  />
                  {fieldErrors.email && (
                    <p id="contact-email-error" className="mt-1.5 text-base text-red-400">
                      {fieldErrors.email}
                    </p>
                  )}
                </div>
              </div>

              <div>
                <label htmlFor="contact-subject" className="block text-base text-zinc-300 font-medium mb-2">{t.sujet}</label>
                <input
                  id="contact-subject"
                  type="text"
                  value={form.subject}
                  onChange={(e) => setForm({ ...form, subject: e.target.value })}
                  placeholder={t.sujetExemple}
                  className="w-full px-4 py-2.5 rounded-xl border border-zinc-700 bg-zinc-900 text-white placeholder:text-zinc-400 text-base focus:outline-none focus:border-red-500 transition-colors"
                />
              </div>

              <div>
                <label htmlFor="contact-message" className="block text-base text-zinc-300 font-medium mb-2">
                  {t.message} <span className="text-red-400" aria-hidden="true">*</span>
                </label>
                <textarea
                  id="contact-message"
                  required
                  aria-required="true"
                  aria-invalid={!!fieldErrors.message}
                  aria-describedby={fieldErrors.message ? "contact-message-error" : undefined}
                  rows={6}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  placeholder={t.messageExemple}
                  className={`w-full px-4 py-2.5 rounded-xl border bg-zinc-900 text-white placeholder:text-zinc-400 text-base focus:outline-none transition-colors resize-none ${
                    fieldErrors.message
                      ? "border-red-500 focus:border-red-500"
                      : "border-zinc-700 focus:border-red-500"
                  }`}
                />
                {fieldErrors.message && (
                  <p id="contact-message-error" className="mt-1.5 text-base text-red-400">
                    {fieldErrors.message}
                  </p>
                )}
              </div>

              {error && (
                <p className="text-base text-red-400 bg-red-500/10 border border-red-500/20 rounded-xl px-4 py-2.5">
                  {error}
                </p>
              )}

              <button
                type="submit"
                disabled={status === "loading"}
                className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-red-600 hover:bg-red-500 disabled:opacity-60 text-white text-base font-semibold transition-colors"
              >
                <Send className="w-4 h-4" />
                {status === "loading" ? t.envoi : t.envoyer}
              </button>
            </form>
          </motion.div>

          {/* Sidebar info */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.15 }}
            className="lg:col-span-2 space-y-6"
          >
            <div className="p-6 rounded-2xl border border-zinc-800 bg-zinc-900/40 space-y-5">
              <h2 className="text-white font-semibold">{t.coordonnees}</h2>

              <div className="flex items-center gap-3 text-sm">
                <div className="w-8 h-8 rounded-lg bg-zinc-800 flex items-center justify-center text-zinc-400 flex-shrink-0" aria-hidden="true">
                  <Mail className="w-4 h-4" />
                </div>
                <a href={`mailto:${EMAIL_CONTACT}`} className="text-zinc-300 hover:text-white transition-colors">{EMAIL_CONTACT}</a>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <div className="w-8 h-8 rounded-lg bg-zinc-800 flex items-center justify-center text-zinc-400 flex-shrink-0" aria-hidden="true">
                  <Phone className="w-4 h-4" />
                </div>
                <a href={`tel:${TELEPHONE_LIEN}`} className="text-zinc-300 hover:text-white transition-colors">{TELEPHONE_AFFICHE}</a>
              </div>

              <div className="flex items-center gap-3 text-sm">
                <div className="w-8 h-8 rounded-lg bg-zinc-800 flex items-center justify-center text-zinc-400 flex-shrink-0" aria-hidden="true">
                  <MapPin className="w-4 h-4" />
                </div>
                <span className="text-zinc-300">{t.lieu}</span>
              </div>

              <div className="flex items-center gap-3 text-sm">
                <div className="w-8 h-8 rounded-lg bg-zinc-800 flex items-center justify-center text-zinc-400 flex-shrink-0" aria-hidden="true">
                  <GithubIcon className="w-4 h-4" />
                </div>
                <a
                  href="https://github.com/Maeglin10"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-zinc-300 hover:text-white transition-colors"
                  aria-label={t.github}
                >
                  github.com/Maeglin10
                </a>
              </div>
            </div>

            <div className="p-6 rounded-2xl border border-zinc-800 bg-zinc-900/40">
              <h2 className="text-white font-semibold mb-4">{t.sujetsTitre}</h2>
              <ul className="space-y-2.5">
                {t.sujets.map((item) => (
                  <li key={item} className="flex items-center gap-2 text-zinc-400 text-sm">
                    <span className="w-1.5 h-1.5 rounded-full bg-red-500 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
