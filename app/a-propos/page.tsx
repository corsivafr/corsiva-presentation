"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import EyebrowLabel from "@/components/ui/EyebrowLabel";

const values = [
  {
    icon: "🏆",
    title: "Excellence sans compromis",
    desc: "Chaque véhicule est inspecté, nettoyé, préparé avant chaque location. Zéro défaut toléré.",
  },
  {
    icon: "🤝",
    title: "Confiance mutuelle",
    desc: "Propriétaires, clients, partenaires — notre modèle repose sur des relations durables et transparentes.",
  },
  {
    icon: "⚡",
    title: "Réactivité",
    desc: "Réponse sous 24h, livraison J+1 possible, équipe disponible 7j/7. Le service premium, c'est aussi la rapidité.",
  },
  {
    icon: "🌍",
    title: "Ancrage local",
    desc: "Nés en Savoie, développés en Auvergne-Rhône-Alpes. On connaît les routes, les événements, les attentes locales.",
  },
];

const milestones = [
  { year: "2022", title: "Fondation à Chambéry", desc: "Jivko Bregou crée Corsiva avec 3 véhicules et une vision : démocratiser l'accès à l'automobile de prestige en région alpine." },
  { year: "2023", title: "Lancement du programme partenaire", desc: "Les wedding planners et concierges rejoignent l'aventure. Plus de 50 partenaires en 12 mois." },
  { year: "2024", title: "Expansion Lyon & Annecy", desc: "La flotte dépasse 30 véhicules. Corsiva ouvre sa zone de livraison à Lyon, Annecy et Grenoble." },
  { year: "2025", title: "Leader régional", desc: "300+ véhicules gérés, 98% de satisfaction. Corsiva devient la référence de la conciergerie automobile en Savoie." },
  { year: "2026", title: "Innovation continue", desc: "Plateforme digitale propriétaires & partenaires, nouveaux modèles électriques, expansion nationale en préparation." },
];

export default function AProposPage() {
  return (
    <>
      {/* HERO */}
      <section
        style={{
          position: "relative",
          padding: "140px 24px 100px",
          background: "var(--bg)",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: 0,
            right: 0,
            width: "45%",
            bottom: 0,
            overflow: "hidden",
          }}
          className="hero-img-wrap"
        >
          <Image
            src="/assets/vehicules/taycan/01.jpg"
            alt="Corsiva — Notre histoire"
            fill
            sizes="45vw"
            style={{ objectFit: "cover", objectPosition: "center" }}
            priority
            quality={85}
          />
          <div
            style={{
              position: "absolute",
              inset: 0,
              background: "linear-gradient(to right, var(--bg) 0%, transparent 40%)",
            }}
          />
        </div>

        <div style={{ maxWidth: 1280, margin: "0 auto", position: "relative", zIndex: 1 }}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            style={{ maxWidth: 580 }}
          >
            <EyebrowLabel>Notre histoire</EyebrowLabel>
            <h1
              style={{
                fontFamily: "var(--font-fraunces)",
                fontSize: "clamp(36px, 5vw, 64px)",
                fontWeight: 700,
                marginTop: 20,
                letterSpacing: "-0.03em",
                lineHeight: 1.1,
              }}
            >
              L'automobile premium,{" "}
              <em style={{ fontStyle: "italic", fontWeight: 400, color: "var(--accent-2)" }}>accessible</em>
            </h1>
            <p
              style={{
                color: "var(--text-2)",
                fontSize: 17,
                lineHeight: 1.7,
                marginTop: 24,
                maxWidth: 480,
              }}
            >
              Corsiva est née d'une conviction simple : les Alpes méritent une conciergerie automobile à la hauteur de leur prestige. Depuis Chambéry, nous avons bâti la référence régionale.
            </p>
            <div style={{ marginTop: 48, display: "flex", gap: 48, flexWrap: "wrap" }}>
              {[
                { value: "4 ans", label: "d'expertise" },
                { value: "300+", label: "véhicules gérés" },
                { value: "98%", label: "satisfaction" },
              ].map((s) => (
                <div key={s.label}>
                  <p style={{ fontSize: 32, fontWeight: 800, color: "var(--text)", fontVariantNumeric: "tabular-nums" }}>
                    {s.value}
                  </p>
                  <p style={{ color: "var(--text-3)", fontSize: 13, marginTop: 2 }}>{s.label}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* MISSION */}
      <section style={{ padding: "100px 24px", background: "var(--bg-2)" }}>
        <div style={{ maxWidth: 860, margin: "0 auto" }}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            style={{ textAlign: "center" }}
          >
            <EyebrowLabel>Notre mission</EyebrowLabel>
            <h2
              style={{
                fontFamily: "var(--font-fraunces)",
                fontSize: "clamp(28px, 4vw, 48px)",
                fontWeight: 700,
                marginTop: 20,
                letterSpacing: "-0.02em",
                lineHeight: 1.2,
              }}
            >
              Connecter les propriétaires de véhicules d'exception aux clients qui les méritent
            </h2>
            <p
              style={{
                color: "var(--text-2)",
                fontSize: 17,
                lineHeight: 1.8,
                marginTop: 28,
                maxWidth: 680,
                margin: "28px auto 0",
              }}
            >
              Corsiva n'est pas qu'une agence de location. C'est un écosystème qui profite à trois acteurs : les propriétaires qui valorisent leur patrimoine automobile, les clients qui vivent des expériences d'exception, et les partenaires qui enrichissent leurs offres. Tout le monde gagne.
            </p>
          </motion.div>
        </div>
      </section>

      {/* TIMELINE */}
      <section style={{ padding: "100px 24px", background: "var(--bg)" }}>
        <div style={{ maxWidth: 900, margin: "0 auto" }}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            style={{ marginBottom: 64 }}
          >
            <EyebrowLabel>Chronologie</EyebrowLabel>
            <h2
              style={{
                fontFamily: "var(--font-fraunces)",
                fontSize: "clamp(26px, 3.5vw, 44px)",
                fontWeight: 700,
                marginTop: 20,
                letterSpacing: "-0.02em",
              }}
            >
              Notre parcours
            </h2>
          </motion.div>

          <div style={{ position: "relative" }}>
            <div
              style={{
                position: "absolute",
                left: 60,
                top: 0,
                bottom: 0,
                width: 1,
                background: "var(--border)",
              }}
              className="timeline-line"
            />

            {milestones.map((m, i) => (
              <motion.div
                key={m.year}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                style={{
                  display: "flex",
                  gap: 40,
                  alignItems: "flex-start",
                  marginBottom: 48,
                  position: "relative",
                }}
                className="timeline-item"
              >
                <div
                  style={{
                    minWidth: 80,
                    textAlign: "right",
                    position: "relative",
                  }}
                >
                  <span
                    style={{
                      fontFamily: "var(--font-fraunces)",
                      fontSize: 13,
                      fontWeight: 700,
                      color: "var(--accent-2)",
                      letterSpacing: "0.02em",
                    }}
                  >
                    {m.year}
                  </span>
                  <div
                    style={{
                      position: "absolute",
                      right: -22,
                      top: "50%",
                      transform: "translateY(-50%)",
                      width: 10,
                      height: 10,
                      borderRadius: "50%",
                      background: "var(--accent)",
                      border: "2px solid var(--bg)",
                      zIndex: 1,
                    }}
                    className="timeline-dot"
                  />
                </div>
                <div
                  style={{
                    flex: 1,
                    background: "var(--card)",
                    border: "1px solid var(--border)",
                    borderRadius: 12,
                    padding: "24px 28px",
                  }}
                >
                  <h3 style={{ fontSize: 17, fontWeight: 700, color: "var(--text)" }}>{m.title}</h3>
                  <p style={{ color: "var(--text-2)", fontSize: 14, lineHeight: 1.65, marginTop: 8 }}>{m.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* VALUES */}
      <section style={{ padding: "100px 24px", background: "var(--bg-2)" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto" }}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            style={{ textAlign: "center", marginBottom: 60 }}
          >
            <EyebrowLabel>Nos valeurs</EyebrowLabel>
            <h2
              style={{
                fontFamily: "var(--font-fraunces)",
                fontSize: "clamp(26px, 3.5vw, 44px)",
                fontWeight: 700,
                marginTop: 20,
                letterSpacing: "-0.02em",
              }}
            >
              Ce qui nous guide
            </h2>
          </motion.div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
              gap: 20,
            }}
          >
            {values.map((v, i) => (
              <motion.div
                key={v.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                style={{
                  background: "var(--card)",
                  border: "1px solid var(--border)",
                  borderRadius: 14,
                  padding: "32px 28px",
                }}
              >
                <p style={{ fontSize: 36 }}>{v.icon}</p>
                <h3 style={{ fontSize: 17, fontWeight: 700, color: "var(--text)", marginTop: 16, letterSpacing: "-0.01em" }}>
                  {v.title}
                </h3>
                <p style={{ color: "var(--text-2)", fontSize: 14, lineHeight: 1.65, marginTop: 10 }}>{v.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FLEET SHOWCASE */}
      <section style={{ padding: "100px 24px", background: "var(--bg)" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto" }}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            style={{ textAlign: "center", marginBottom: 60 }}
          >
            <EyebrowLabel>Notre flotte</EyebrowLabel>
            <h2
              style={{
                fontFamily: "var(--font-fraunces)",
                fontSize: "clamp(26px, 3.5vw, 44px)",
                fontWeight: 700,
                marginTop: 20,
                letterSpacing: "-0.02em",
              }}
            >
              BMW, Mercedes-Benz, Porsche
            </h2>
            <p style={{ color: "var(--text-2)", fontSize: 16, lineHeight: 1.7, marginTop: 16, maxWidth: 480, margin: "16px auto 0" }}>
              Chaque véhicule est sélectionné pour son prestige, entretenu avec soin, assuré en full-omnium.
            </p>
          </motion.div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(4, 1fr)",
              gap: 16,
            }}
            className="fleet-grid"
          >
            {[
              { src: "/assets/vehicules/g-brabus/01.jpg", label: "Mercedes G63 Brabus" },
              { src: "/assets/vehicules/taycan/01.jpg", label: "Porsche Taycan Turbo S" },
              { src: "/assets/vehicules/m3/01.jpg", label: "BMW M4 Competition" },
              { src: "/assets/vehicules/cayenne/01.jpg", label: "Porsche Cayenne GTS" },
            ].map((item, i) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, scale: 0.97 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                style={{
                  position: "relative",
                  height: 200,
                  borderRadius: 12,
                  overflow: "hidden",
                  border: "1px solid var(--border)",
                }}
              >
                <Image
                  src={item.src}
                  alt={item.label}
                  fill
                  sizes="(max-width: 480px) 100vw, (max-width: 900px) 50vw, 25vw"
                  style={{ objectFit: "cover" }}
                  quality={75}
                />
                <div
                  style={{
                    position: "absolute",
                    inset: 0,
                    background: "linear-gradient(to top, rgba(10,10,10,0.8) 0%, transparent 60%)",
                  }}
                />
                <p
                  style={{
                    position: "absolute",
                    bottom: 12,
                    left: 16,
                    fontSize: 12,
                    fontWeight: 600,
                    color: "var(--text)",
                  }}
                >
                  {item.label}
                </p>
              </motion.div>
            ))}
          </div>

          <div style={{ textAlign: "center", marginTop: 32 }}>
            <Link
              href="/flotte"
              style={{
                padding: "12px 32px",
                background: "transparent",
                color: "var(--text)",
                borderRadius: 10,
                fontSize: 14,
                fontWeight: 600,
                textDecoration: "none",
                border: "1px solid var(--border-strong)",
              }}
            >
              Voir tout le catalogue →
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section
        style={{
          padding: "100px 24px",
          background: "var(--bg-2)",
          textAlign: "center",
        }}
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{ maxWidth: 580, margin: "0 auto" }}
        >
          <EyebrowLabel>Rejoignez l'aventure</EyebrowLabel>
          <h2
            style={{
              fontFamily: "var(--font-fraunces)",
              fontSize: "clamp(26px, 3.5vw, 44px)",
              fontWeight: 700,
              marginTop: 20,
              letterSpacing: "-0.02em",
            }}
          >
            Corsiva, c'est pour vous aussi
          </h2>
          <p style={{ color: "var(--text-2)", fontSize: 16, lineHeight: 1.7, marginTop: 16 }}>
            Propriétaire, client ou partenaire — découvrez l'espace qui vous correspond.
          </p>
          <div style={{ marginTop: 36, display: "flex", gap: 14, justifyContent: "center", flexWrap: "wrap" }}>
            <Link
              href="/client"
              style={{
                padding: "13px 28px",
                background: "var(--accent)",
                color: "#fff",
                borderRadius: 10,
                fontSize: 15,
                fontWeight: 700,
                textDecoration: "none",
              }}
            >
              Louer un véhicule
            </Link>
            <Link
              href="/contact"
              style={{
                padding: "13px 28px",
                background: "transparent",
                color: "var(--text)",
                borderRadius: 10,
                fontSize: 15,
                fontWeight: 600,
                textDecoration: "none",
                border: "1px solid var(--border-strong)",
              }}
            >
              Nous contacter
            </Link>
          </div>
        </motion.div>
      </section>

      <style>{`
        @media (max-width: 900px) {
          .hero-img-wrap { display: none !important; }
          .fleet-grid { grid-template-columns: repeat(2, 1fr) !important; }
          .timeline-line { left: 40px !important; }
          .timeline-dot { right: -18px !important; }
        }
        @media (max-width: 480px) {
          .fleet-grid { grid-template-columns: 1fr !important; }
          .timeline-item { flex-direction: column !important; }
          .timeline-line { display: none !important; }
        }
      `}</style>
    </>
  );
}
