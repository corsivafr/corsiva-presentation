"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import ClientDashboard from "@/components/mockups/ClientDashboard";

const fadeUp = (delay = 0) => ({
  hidden: { opacity: 0, y: 32 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.75, delay, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] },
  },
});

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

export default function HeroClient() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <Image
          src="/assets/vehicules/taycan/01.jpg"
          alt="Porsche Taycan — Location Corsiva"
          fill
          className="object-cover object-center"
          priority
          quality={90}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[rgba(10,10,10,0.96)] via-[rgba(10,10,10,0.75)] to-[rgba(10,10,10,0.4)]" />
        <div className="absolute inset-0 bg-gradient-to-t from-[rgba(10,10,10,0.5)] via-transparent to-transparent" />
        {/* Radial accent — gold */}
        <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse at 70% 40%, rgba(212,175,108,0.10) 0%, transparent 60%)" }} />
      </div>

      {/* Accent band — gold for client */}
      <div className="absolute top-0 left-0 w-1 h-full bg-[var(--gold)]" />

      {/* Content — 2 col grid */}
      <div className="relative z-10 max-w-7xl mx-auto py-32 w-full" style={{ paddingLeft: "clamp(2rem, 5vw, 6rem)", paddingRight: "clamp(2rem, 5vw, 6rem)" }}>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          {/* Left — text */}
          <motion.div variants={stagger} initial="hidden" animate="visible">
            <motion.div variants={fadeUp(0)} className="flex items-center gap-3 mb-6">
              <span className="text-[var(--gold)] text-xs font-bold tracking-[0.18em] uppercase">
                Espace Client
              </span>
              <span className="h-px w-10 bg-[var(--gold)]" />
            </motion.div>

            <motion.h1
              variants={fadeUp(0.1)}
              className="font-manrope text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-[1.18] mb-8"
            >
              Votre expérience.{" "}
              <br className="hidden sm:block" />
              Vos avantages.{" "}
              <span className="font-fraunces italic text-[var(--gold)]" style={{ fontWeight: 400 }}>
                À chaque trajet.
              </span>
            </motion.h1>

            <motion.p
              variants={fadeUp(0.2)}
              className="text-[var(--text-2)] text-lg leading-[1.8] mb-6 max-w-lg"
            >
              Location courte durée, mariage, corporate ou week-end. Programme fidélité exclusif avec crédits cumulés et avantages à chaque location.
            </motion.p>

            <motion.div variants={fadeUp(0.3)} style={{ display: "flex", flexWrap: "wrap", gap: 16, marginTop: 8, marginBottom: 40 }}>
              <Link
                href="/flotte"
                style={{ padding: "14px 32px", background: "var(--gold)", color: "#000", fontWeight: 600, fontSize: 14, borderRadius: 12, transition: "all 0.3s", letterSpacing: "0.05em", border: "none", display: "inline-block" }}
              >
                Voir la flotte
              </Link>
              <Link
                href="/contact?objet=location"
                style={{ padding: "14px 32px", background: "transparent", color: "#fff", fontWeight: 600, fontSize: 14, borderRadius: 12, transition: "all 0.3s", letterSpacing: "0.05em", border: "1.5px solid rgba(255,255,255,0.35)", display: "inline-block" }}
              >
                Faire une demande
              </Link>
            </motion.div>

            <motion.div variants={fadeUp(0.4)} className="flex flex-wrap gap-6 border-t border-[var(--border)]" style={{ paddingTop: 32 }}>
              {[
                { icon: "◆", label: "Livraison sur site" },
                { icon: "◆", label: "Assurance incluse" },
                { icon: "◆", label: "Programme fidélité" },
              ].map((item) => (
                <div key={item.label} className="flex items-center gap-2">
                  <span className="text-[var(--gold)] text-[10px]">{item.icon}</span>
                  <span className="text-[var(--text-2)] text-sm">{item.label}</span>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right — 3D phone mockup */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="hidden lg:flex justify-center items-center"
            style={{ perspective: 1200 }}
          >
            <motion.div
              initial={{ rotateY: -12, rotateX: 4 }}
              animate={{ rotateY: -4, rotateX: 2 }}
              whileHover={{ rotateY: 0, rotateX: 0 }}
              transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
              style={{ transformStyle: "preserve-3d" }}
            >
              <ClientDashboard />
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
