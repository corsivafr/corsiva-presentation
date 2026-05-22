"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import OwnerDashboard from "@/components/mockups/OwnerDashboard";

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

export default function HeroOwner() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <Image
          src="/assets/vehicules/m3/01.jpg"
          alt="BMW M3 — Espace Propriétaire Corsiva"
          fill
          className="object-cover object-center"
          priority
          quality={90}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[rgba(10,10,10,0.96)] via-[rgba(10,10,10,0.75)] to-[rgba(10,10,10,0.4)]" />
        <div className="absolute inset-0 bg-gradient-to-t from-[rgba(10,10,10,0.5)] via-transparent to-transparent" />
        {/* Radial accent */}
        <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse at 70% 40%, rgba(37,99,255,0.12) 0%, transparent 60%)" }} />
      </div>

      {/* Accent band */}
      <div className="absolute top-0 left-0 w-1 h-full bg-[var(--accent)]" />

      {/* Content — 2 col grid */}
      <div className="relative z-10 max-w-7xl mx-auto py-32 w-full" style={{ paddingLeft: "clamp(2rem, 5vw, 6rem)", paddingRight: "clamp(2rem, 5vw, 6rem)" }}>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          {/* Left — text */}
          <motion.div variants={stagger} initial="hidden" animate="visible">
            <motion.div variants={fadeUp(0)} className="flex items-center gap-3 mb-6">
              <span className="text-[var(--accent)] text-xs font-bold tracking-[0.18em] uppercase">
                Espace Propriétaire
              </span>
              <span className="h-px w-10 bg-[var(--accent)]" />
            </motion.div>

            <motion.h1
              variants={fadeUp(0.1)}
              className="font-manrope text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-[1.18] mb-8"
            >
              Votre véhicule.{" "}
              <br className="hidden sm:block" />
              Vos revenus.{" "}
              <span className="font-fraunces italic text-[var(--accent-2)]" style={{ fontWeight: 400 }}>
                En temps réel.
              </span>
            </motion.h1>

            <motion.p
              variants={fadeUp(0.2)}
              className="text-[var(--text-2)] text-lg leading-[1.8] mb-6 max-w-lg"
            >
              Confiez votre BMW, Porsche ou Mercedes à Corsiva. Gestion complète, assurance incluse, jusqu'à{" "}
              <strong className="text-white">3 240 € / mois</strong>.
            </motion.p>

            <motion.div variants={fadeUp(0.3)} style={{ display: "flex", flexWrap: "wrap", gap: 16, marginTop: 8, marginBottom: 40 }}>
              <Link
                href="/contact?objet=proprietaire"
                style={{ padding: "14px 32px", background: "var(--accent)", color: "#fff", fontWeight: 600, fontSize: 14, borderRadius: 12, transition: "all 0.3s", letterSpacing: "0.05em", border: "none", display: "inline-block" }}
              >
                Confier mon véhicule
              </Link>
              <Link
                href="/login"
                style={{ padding: "14px 32px", background: "transparent", color: "#fff", fontWeight: 600, fontSize: 14, borderRadius: 12, transition: "all 0.3s", letterSpacing: "0.05em", border: "1.5px solid rgba(255,255,255,0.35)", display: "inline-block" }}
              >
                Accéder à mon espace
              </Link>
            </motion.div>

            <motion.div variants={fadeUp(0.4)} className="flex flex-wrap gap-8 border-t border-[var(--border)]" style={{ paddingTop: 32 }}>
              {[
                { v: "3 240 €", l: "/ mois max" },
                { v: "76 %", l: "taux d'occupation" },
                { v: "0 €", l: "de frais cachés" },
              ].map((s) => (
                <div key={s.l}>
                  <div className="text-xl font-bold text-white tabular-nums">{s.v}</div>
                  <div className="text-[var(--text-3)] text-xs tracking-wide mt-0.5">{s.l}</div>
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
              <OwnerDashboard />
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
