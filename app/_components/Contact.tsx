"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Clock, Send, CheckCircle2 } from "lucide-react";

const fadeUp = (delay: number) => ({
  initial: { opacity: 0, y: 25 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" } as const,
  transition: { duration: 0.5, delay },
});

const contactMethods = [
  {
    icon: <Phone size={20} />,
    title: "WhatsApp / Telepon",
    value: "+62 831-8055-3200",
    desc: "Respon cepat untuk konsultasi dan penawaran.",
    href: "https://wa.me/6283180553200",
    color: "#10B981",
  },
  {
    icon: <Mail size={20} />,
    title: "Email Resmi",
    value: "mindsoftwaretechnologi@gmail.com",
    desc: "Kirim proposal atau spesifikasi teknis proyek.",
    href: "mailto:mindsoftwaretechnologi@gmail.com",
    color: "#0EA5E9",
  },
  {
    icon: <MapPin size={20} />,
    title: "Lokasi Kantor",
    value: "Indonesia",
    desc: "Layanan remote & kunjungan langsung seluruh Nusantara.",
    href: null,
    color: "#8B5CF6",
  },
  {
    icon: <Clock size={20} />,
    title: "Jam Operasional",
    value: "Senin - Jumat (08:00 - 17:00)",
    desc: "Layanan dukungan sistem aktif 24/7.",
    href: null,
    color: "#8B5CF6",
  },
];

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    contact: "",
    service: "Website Development",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.message) return;

    const text = `Halo tim MST! Saya tertarik untuk konsultasi proyek.

*Nama:* ${formData.name}
*Kontak:* ${formData.contact || "-"}
*Layanan yang Diminati:* ${formData.service}

*Detail Pesan:*
${formData.message}`;

    const encoded = encodeURIComponent(text);
    const waUrl = `https://wa.me/6283180553200?text=${encoded}`;
    
    setSubmitted(true);
    window.open(waUrl, "_blank");

    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <section id="kontak" className="py-20 md:py-24 relative overflow-hidden">
      <div className="section-divider absolute top-0 inset-x-0" />

      {/* Ambient background glow */}
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#8B5CF6]/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 pt-8">
        <motion.div {...fadeUp(0)} className="text-center mb-16">
          <span className="inline-block text-xs font-semibold text-[#8B5CF6] uppercase tracking-widest mb-3">
            Hubungi Kami
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-fg mb-4">
            Mulai Langkah <span className="gradient-text">Transformasi Anda</span>
          </h2>
          <p className="text-fg-muted max-w-2xl mx-auto text-base sm:text-lg font-light leading-relaxed">
            Punya ide atau kebutuhan sistem digital untuk bisnis Anda? Mari diskusikan bersama tim teknis kami secara langsung.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-12 gap-10 items-start">
          {/* Contact Info Cards */}
          <motion.div {...fadeUp(0.1)} className="lg:col-span-5 space-y-4">
            {contactMethods.map((c, i) => (
              <div
                key={c.title}
                className="p-5 rounded-2xl bg-surface border border-bd flex items-start gap-4 hover:border-[#8B5CF6]/40 transition-all duration-300 shadow-lg"
              >
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0 border border-bd shadow-inner"
                  style={{
                    background: `linear-gradient(135deg, ${c.color}25, ${c.color}10)`,
                    color: c.color,
                  }}
                >
                  {c.icon}
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-xs font-semibold text-fg-muted uppercase tracking-wider mb-1">
                    {c.title}
                  </h3>
                  {c.href ? (
                    <a
                      href={c.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-base font-bold text-fg hover:text-[#0EA5E9] transition-colors break-all block mb-1"
                    >
                      {c.value}
                    </a>
                  ) : (
                    <p className="text-base font-bold text-fg mb-1">
                      {c.value}
                    </p>
                  )}
                  <p className="text-xs text-fg-muted font-light">
                    {c.desc}
                  </p>
                </div>
              </div>
            ))}
          </motion.div>

          {/* Interactive Form */}
          <motion.div
            {...fadeUp(0.2)}
            className="lg:col-span-7 rounded-3xl bg-surface border border-bd p-8 sm:p-10 shadow-2xl relative"
          >
            <h3 className="font-display text-2xl font-bold text-fg mb-2">
              Kirim Pesan Cepat
            </h3>
            <p className="text-sm text-fg-muted font-light mb-8">
              Isi formulir di bawah ini untuk terhubung langsung via WhatsApp dengan format yang terstruktur.
            </p>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-xs font-medium text-fg-muted uppercase tracking-wider mb-2">
                    Nama Lengkap <span className="text-[#ef4444]">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    required
                    placeholder="Contoh: Budi Santoso"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3.5 rounded-xl bg-page border border-bd text-fg placeholder:text-fg-muted text-sm focus:outline-none focus:border-[#8B5CF6] transition-colors"
                  />
                </div>

                <div>
                  <label htmlFor="contact" className="block text-xs font-medium text-fg-muted uppercase tracking-wider mb-2">
                    Email / No. WhatsApp
                  </label>
                  <input
                    type="text"
                    id="contact"
                    placeholder="Contoh: budi@email.com / 0812..."
                    value={formData.contact}
                    onChange={(e) => setFormData({ ...formData, contact: e.target.value })}
                    className="w-full px-4 py-3.5 rounded-xl bg-page border border-bd text-fg placeholder:text-fg-muted text-sm focus:outline-none focus:border-[#8B5CF6] transition-colors"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="service" className="block text-xs font-medium text-fg-muted uppercase tracking-wider mb-2">
                  Layanan yang Diminati
                </label>
                <select
                  id="service"
                  value={formData.service}
                  onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                  className="w-full px-4 py-3.5 rounded-xl bg-page border border-bd text-fg text-sm focus:outline-none focus:border-[#8B5CF6] transition-colors cursor-pointer"
                >
                  <option value="Undangan Digital">Undangan Digital</option>
                  <option value="Website Development">Website Development / Company Profile</option>
                  <option value="Aplikasi Mobile">Aplikasi Mobile Android & iOS</option>
                  <option value="Desain UI/UX">Desain UI/UX / System Design</option>
                  <option value="Konsultasi IT Umum">Konsultasi IT / Lainnya</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-xs font-medium text-fg-muted uppercase tracking-wider mb-2">
                  Detail Kebutuhan / Pesan <span className="text-[#ef4444]">*</span>
                </label>
                <textarea
                  id="message"
                  required
                  rows={4}
                  placeholder="Ceritakan sedikit tentang ide, fitur, atau target waktu penyelesaian proyek Anda..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-3.5 rounded-xl bg-page border border-bd text-fg placeholder:text-fg-muted text-sm focus:outline-none focus:border-[#8B5CF6] transition-colors resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full py-4 px-6 rounded-xl font-bold text-white text-sm bg-gradient-to-r from-[#8B5CF6] to-[#0EA5E9] hover:opacity-90 transition-all duration-300 shadow-lg shadow-[#8B5CF6]/25 flex items-center justify-center gap-2"
              >
                {submitted ? (
                  <>
                    <CheckCircle2 size={18} />
                    Mengalihkan ke WhatsApp...
                  </>
                ) : (
                  <>
                    <Send size={18} />
                    Kirim Pesan via WhatsApp
                  </>
                )}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
