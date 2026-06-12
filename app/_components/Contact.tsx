"use client";

import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send, MessageCircle, User, MessageSquare } from "lucide-react";
import { useState } from "react";

const fadeUp = (delay = 0) => ({
  initial: { y: 20, opacity: 0 },
  whileInView: { y: 0, opacity: 1 },
  viewport: { once: true, margin: "-80px" },
  transition: { duration: 0.6, ease: "easeOut" as const, delay },
});

const inputClass =
  "w-full rounded-xl border border-white/8 bg-brand-surface/80 py-3 pl-11 pr-4 text-sm text-brand-light placeholder-brand-muted/40 outline-none backdrop-blur-sm transition-colors duration-200 focus:border-brand-purple/50 focus:bg-brand-surface";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const text = `Halo MST!%0A%0ANama: ${encodeURIComponent(form.name)}%0AEmail: ${encodeURIComponent(form.email)}%0ATelepon: ${encodeURIComponent(form.phone)}%0APesan: ${encodeURIComponent(form.message)}`;
    window.open(`https://wa.me/6283180553200?text=${text}`, "_blank");
  };

  return (
    <section id="contact" className="px-6 py-24">
      <div className="mx-auto max-w-6xl">
        {/* Header */}
        <motion.div {...fadeUp(0)} className="text-center">
          <p className="text-xs font-medium uppercase tracking-widest text-brand-cyan">
            Kontak
          </p>
          <h2
            className="mt-3 text-3xl font-extrabold md:text-4xl"
            style={{ letterSpacing: "-0.02em" }}
          >
            <span className="bg-gradient-to-r from-[#c084fc] via-[#818cf8] to-[#22d3ee] bg-clip-text text-transparent">
              Hubungi Kami
            </span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base text-brand-muted leading-relaxed">
            Punya pertanyaan atau ingin memulai proyek? Silakan isi form di bawah
            atau hubungi langsung.
          </p>
        </motion.div>

        <div className="mt-16 grid gap-10 lg:grid-cols-5">
          {/* Form */}
          <motion.form
            {...fadeUp(0.1)}
            onSubmit={handleSubmit}
            className="space-y-5 lg:col-span-3"
          >
            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <label htmlFor="name" className="mb-2 block text-sm font-medium text-brand-light">
                  Nama Lengkap
                </label>
                <div className="relative">
                  <User className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-brand-muted/40" />
                  <input
                    id="name" name="name" type="text" required
                    value={form.name} onChange={handleChange}
                    placeholder="John Doe"
                    className={inputClass}
                  />
                </div>
              </div>
              <div>
                <label htmlFor="email" className="mb-2 block text-sm font-medium text-brand-light">
                  Email
                </label>
                <div className="relative">
                  <Mail className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-brand-muted/40" />
                  <input
                    id="email" name="email" type="email" required
                    value={form.email} onChange={handleChange}
                    placeholder="john@example.com"
                    className={inputClass}
                  />
                </div>
              </div>
            </div>

            <div>
              <label htmlFor="phone" className="mb-2 block text-sm font-medium text-brand-light">
                Telepon / WhatsApp
              </label>
              <div className="relative">
                <Phone className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-brand-muted/40" />
                <input
                  id="phone" name="phone" type="tel"
                  value={form.phone} onChange={handleChange}
                  placeholder="+62 831-8055-3200"
                  className={inputClass}
                />
              </div>
            </div>

            <div>
              <label htmlFor="message" className="mb-2 block text-sm font-medium text-brand-light">
                Pesan
              </label>
              <div className="relative">
                <MessageSquare className="absolute left-4 top-4 h-4 w-4 text-brand-muted/40" />
                <textarea
                  id="message" name="message" required rows={5}
                  value={form.message} onChange={handleChange}
                  placeholder="Tulis pesan Anda..."
                  className={`${inputClass} resize-none`}
                />
              </div>
            </div>

            <button
              type="submit"
              className="inline-flex w-full items-center justify-center gap-3 rounded-xl bg-brand-purple py-3.5 text-sm font-semibold text-white transition-all duration-300 hover:bg-brand-purple/80 hover:shadow-[0_0_20px_rgba(139,92,246,0.25)] sm:w-auto sm:px-8"
            >
              <Send className="h-4 w-4" />
              Kirim via WhatsApp
            </button>
          </motion.form>

          {/* Info sidebar */}
          <motion.div {...fadeUp(0.2)} className="space-y-5 lg:col-span-2">
            {/* Contact info */}
            <div className="rounded-2xl border border-white/8 bg-brand-surface/60 p-7 backdrop-blur-sm">
              <h3 className="text-sm font-semibold text-brand-light">Informasi Kontak</h3>
              <ul className="mt-5 space-y-5">
                <li className="flex items-start gap-4">
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-brand-purple/10 text-brand-purple border border-brand-purple/20">
                    <Mail className="h-4 w-4" />
                  </div>
                  <div>
                    <p className="text-xs font-medium text-brand-light">Email</p>
                    <a
                      href="mailto:mindsoftwaretechnologi@gmail.com"
                      className="mt-0.5 block text-xs text-brand-muted transition-colors hover:text-white break-all"
                    >
                      mindsoftwaretechnologi@gmail.com
                    </a>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-brand-cyan/10 text-brand-cyan border border-brand-cyan/20">
                    <Phone className="h-4 w-4" />
                  </div>
                  <div>
                    <p className="text-xs font-medium text-brand-light">Telepon</p>
                    <a
                      href="https://wa.me/6283180553200"
                      target="_blank" rel="noopener noreferrer"
                      className="mt-0.5 block text-xs text-brand-muted transition-colors hover:text-white"
                    >
                      +62 831-8055-3200
                    </a>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-white/5 text-brand-muted border border-white/8">
                    <MapPin className="h-4 w-4" />
                  </div>
                  <div>
                    <p className="text-xs font-medium text-brand-light">Lokasi</p>
                    <p className="mt-0.5 text-xs text-brand-muted">Indonesia</p>
                  </div>
                </li>
              </ul>
            </div>

            {/* WhatsApp CTA */}
            <div className="rounded-2xl border border-white/8 bg-brand-surface/60 p-7 backdrop-blur-sm">
              <h3 className="text-sm font-semibold text-brand-light">Lebih Cepat via WhatsApp</h3>
              <p className="mt-2 text-xs text-brand-muted leading-relaxed">
                Ingin respon lebih cepat? Langsung chat saja via WhatsApp. Tim kami siap membantu.
              </p>
              <a
                href="https://wa.me/6283180553200"
                target="_blank" rel="noopener noreferrer"
                className="mt-5 inline-flex items-center gap-2.5 rounded-xl border border-white/8 bg-white/5 px-5 py-2.5 text-sm font-medium text-brand-light transition-colors duration-200 hover:border-white/16 hover:bg-white/8"
              >
                <MessageCircle className="h-4 w-4 text-brand-cyan" />
                Chat WhatsApp
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
