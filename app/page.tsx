"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import ClientDashboard from "@/components/mockups/ClientDashboard";
import OwnerDashboard from "@/components/mockups/OwnerDashboard";
import PartnerDashboard from "@/components/mockups/PartnerDashboard";

const fadeUp = (delay = 0) => ({
  hidden: { opacity: 0, y: 32 },
  visible: {
    opacity: 1, y: 0,
    transition: { duration: 0.75, delay, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] },
  },
});
const stagger = { hidden: {}, visible: { transition: { staggerChildren: 0.12 } } };

const P = "clamp(1.5rem, 5vw, 6rem)";
const SEC = "clamp(4rem, 7vw, 8rem)";

const fleet = [
  { brand: "BMW", model: "M3 Competition G80", category: "Sport", price: "399", image: "https://coinmentor.eu/assets/img_corsiva/m3-garage-int.jpg" },
  { brand: "Mercedes-Benz", model: "G 63 Brabus 2018", category: "SUV Prestige", price: "800", image: "https://coinmentor.eu/assets/img_corsiva/G63brabus.jpg" },
  { brand: "Porsche", model: "Taycan 4", category: "Électrique", price: "299", image: "https://coinmentor.eu/assets/img_corsiva/9pc.jpg" },
  { brand: "Porsche", model: "Cayenne S Coupé", category: "SUV Sport", price: "450", image: "https://coinmentor.eu/assets/img_corsiva/cayenne.jpg" },
];

const stats = [
  { value: "300+", label: "Véhicules gérés" },
  { value: "98 %", label: "Taux de satisfaction" },
  { value: "76 %", label: "Taux d'occupation" },
  { value: "4 ans", label: "D'expertise" },
];

const benefits = [
  { title: "Conciergerie dédiée", desc: "Un interlocuteur unique disponible 7j/7 pour chaque demande, de la réservation à la remise des clés." },
  { title: "Flotte d'exception", desc: "BMW, Porsche, Mercedes-Benz — sélectionnés, préparés et entretenus selon les standards les plus exigeants." },
  { title: "Livraison sur site", desc: "Nous livrons sur votre lieu en Auvergne-Rhône-Alpes. Hôtel, domicile, gare, aéroport." },
  { title: "Transparence totale", desc: "Pas de surprises. Tarification claire, contrat détaillé, assurance incluse pour chaque location." },
];

export default function HomePage() {
  return (
    <>
      {/* ── 1. HERO ── */}
      <section style={{ position: "relative", minHeight: "100vh", display: "flex", flexDirection: "column", justifyContent: "flex-end", overflow: "hidden" }}>
        <div style={{ position: "absolute", inset: 0 }}>
          <Image src="/assets/vehicules/g-brabus/02.jpg" alt="Corsiva" fill className="object-cover object-center" priority quality={90} />
          <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to right, rgba(10,10,10,0.88) 0%, rgba(10,10,10,0.55) 50%, transparent 100%)" }} />
          <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(10,10,10,0.7) 0%, transparent 60%)" }} />
        </div>

        <div style={{ position: "relative", zIndex: 10, maxWidth: 1280, margin: "0 auto", width: "100%", paddingLeft: P, paddingRight: P, paddingBottom: "7rem", paddingTop: "10rem" }}>
          <motion.div variants={stagger} initial="hidden" animate="visible" style={{ maxWidth: 600 }}>
            <motion.p variants={fadeUp(0)} style={{ color: "var(--gold)", fontSize: 11, fontWeight: 700, letterSpacing: "0.18em", textTransform: "uppercase", marginBottom: 24 }}>
              Conciergerie Automobile · Auvergne-Rhône-Alpes
            </motion.p>
            <motion.h1 variants={fadeUp(0.1)} style={{ fontSize: "clamp(2.8rem, 6vw, 5rem)", fontWeight: 800, color: "#fff", lineHeight: 1.06, marginBottom: 24 }}>
              L&apos;excellence<br />automobile,{" "}
              <span className="font-fraunces italic" style={{ fontWeight: 400, color: "var(--gold)" }}>à votre service.</span>
            </motion.h1>
            <motion.p variants={fadeUp(0.2)} style={{ color: "var(--text-2)", fontSize: 18, lineHeight: 1.7, marginBottom: 40, maxWidth: 480 }}>
              Location de véhicules d&apos;exception avec service de conciergerie complet en Auvergne-Rhône-Alpes.
            </motion.p>
            <motion.div variants={fadeUp(0.3)} style={{ display: "flex", flexWrap: "wrap", gap: 16 }}>
              <Link href="/flotte" style={{ padding: "13px 28px", border: "1.5px solid var(--gold)", color: "var(--gold)", fontWeight: 600, fontSize: 14, borderRadius: 10, letterSpacing: "0.04em", display: "inline-block" }}>
                Découvrir la flotte
              </Link>
              <Link href="/login" style={{ padding: "13px 28px", background: "var(--accent)", color: "#fff", fontWeight: 600, fontSize: 14, borderRadius: 10, letterSpacing: "0.04em", display: "inline-block" }}>
                Accéder à mon espace
              </Link>
            </motion.div>
          </motion.div>
        </div>

        {/* Stats strip */}
        <div style={{ position: "relative", zIndex: 10, borderTop: "1px solid var(--border)", background: "rgba(10,10,10,0.7)", backdropFilter: "blur(12px)" }}>
          <div style={{ maxWidth: 1280, margin: "0 auto", paddingLeft: P, paddingRight: P }}>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)" }}>
              {stats.map((s, i) => (
                <div key={i} style={{ padding: "20px 24px", display: "flex", flexDirection: "column", gap: 4, borderRight: i < 3 ? "1px solid var(--border)" : "none" }}>
                  <span style={{ fontSize: 24, fontWeight: 700, color: "#fff" }}>{s.value}</span>
                  <span style={{ fontSize: 11, color: "var(--text-3)", letterSpacing: "0.08em", textTransform: "uppercase" }}>{s.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── 2. SPACES ── */}
      <section style={{ padding: `${SEC} 0`, background: "var(--bg-2)", overflow: "hidden" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto", paddingLeft: P, paddingRight: P }}>
          {/* Header */}
          <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }} style={{ textAlign: "center", marginBottom: 80 }}>
            <motion.p variants={fadeUp(0)} style={{ color: "var(--gold)", fontSize: 11, fontWeight: 700, letterSpacing: "0.18em", textTransform: "uppercase", marginBottom: 16 }}>
              Votre espace
            </motion.p>
            <motion.h2 variants={fadeUp(0.08)} style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.5rem)", fontWeight: 700, color: "#fff" }}>
              Un service pensé pour{" "}
              <span className="font-fraunces italic" style={{ fontWeight: 400, color: "var(--gold)" }}>chaque profil</span>
            </motion.h2>
          </motion.div>

          {/* Propriétaire */}
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 64, alignItems: "center", marginBottom: 112 }}>
            <motion.div initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }} style={{ display: "flex", justifyContent: "center", perspective: 1200 }}>
              <motion.div initial={{ rotateY: 8, rotateX: -4 }} whileInView={{ rotateY: 4, rotateX: -2 }} whileHover={{ rotateY: 0, rotateX: 0 }} viewport={{ once: true }} transition={{ duration: 0.9 }} style={{ transformStyle: "preserve-3d" }}>
                <OwnerDashboard />
              </motion.div>
            </motion.div>
            <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }}>
              <motion.p variants={fadeUp(0)} style={{ color: "var(--accent)", fontSize: 11, fontWeight: 700, letterSpacing: "0.18em", textTransform: "uppercase", marginBottom: 16 }}>Espace Propriétaire</motion.p>
              <motion.h3 variants={fadeUp(0.08)} style={{ fontSize: "clamp(1.5rem, 2.5vw, 2rem)", fontWeight: 700, color: "#fff", marginBottom: 20 }}>
                Rentabilisez votre <span className="font-fraunces italic" style={{ fontWeight: 400 }}>véhicule</span>
              </motion.h3>
              <motion.p variants={fadeUp(0.14)} style={{ color: "var(--text-2)", fontSize: 15, lineHeight: 1.8, marginBottom: 28 }}>
                Confiez votre BMW, Porsche ou Mercedes à Corsiva. Gestion complète des réservations, entretien, assurance — vous percevez votre net chaque mois. Jusqu&apos;à <strong style={{ color: "#fff" }}>3 240 € / mois</strong>.
              </motion.p>
              <motion.div variants={fadeUp(0.2)} style={{ display: "flex", flexDirection: "column", gap: 10, marginBottom: 32 }}>
                {["Suivi en temps réel depuis l'app", "Reversement net mensuel garanti", "76% taux d'occupation moyen"].map((item) => (
                  <div key={item} style={{ display: "flex", alignItems: "center", gap: 12 }}>
                    <span style={{ color: "var(--accent)", fontSize: 13 }}>✓</span>
                    <span style={{ color: "var(--text-2)", fontSize: 14 }}>{item}</span>
                  </div>
                ))}
              </motion.div>
              <motion.div variants={fadeUp(0.26)}>
                <Link href="/proprietaire" style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "12px 24px", border: "1.5px solid var(--accent)", color: "var(--accent)", fontWeight: 600, fontSize: 14, borderRadius: 10 }}>
                  Découvrir l&apos;espace propriétaire <span>→</span>
                </Link>
              </motion.div>
            </motion.div>
          </div>

          {/* Client */}
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 64, alignItems: "center", marginBottom: 112 }}>
            <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }}>
              <motion.p variants={fadeUp(0)} style={{ color: "var(--gold)", fontSize: 11, fontWeight: 700, letterSpacing: "0.18em", textTransform: "uppercase", marginBottom: 16 }}>Espace Client</motion.p>
              <motion.h3 variants={fadeUp(0.08)} style={{ fontSize: "clamp(1.5rem, 2.5vw, 2rem)", fontWeight: 700, color: "#fff", marginBottom: 20 }}>
                Conduisez <span className="font-fraunces italic" style={{ fontWeight: 400 }}>l&apos;exception</span>
              </motion.h3>
              <motion.p variants={fadeUp(0.14)} style={{ color: "var(--text-2)", fontSize: 15, lineHeight: 1.8, marginBottom: 28 }}>
                Location courte durée, mariage, événement corporate. Livraison sur toute l&apos;Auvergne-Rhône-Alpes. Programme fidélité exclusif avec crédits et avantages à chaque location.
              </motion.p>
              <motion.div variants={fadeUp(0.2)} style={{ display: "flex", flexDirection: "column", gap: 10, marginBottom: 32 }}>
                {["Réservation en quelques minutes", "Livraison à domicile, hôtel, gare", "Programme fidélité Bronze → Platine"].map((item) => (
                  <div key={item} style={{ display: "flex", alignItems: "center", gap: 12 }}>
                    <span style={{ color: "var(--gold)", fontSize: 13 }}>✓</span>
                    <span style={{ color: "var(--text-2)", fontSize: 14 }}>{item}</span>
                  </div>
                ))}
              </motion.div>
              <motion.div variants={fadeUp(0.26)}>
                <Link href="/client" style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "12px 24px", border: "1.5px solid var(--gold)", color: "var(--gold)", fontWeight: 600, fontSize: 14, borderRadius: 10 }}>
                  Je veux louer <span>→</span>
                </Link>
              </motion.div>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }} style={{ display: "flex", justifyContent: "center", perspective: 1200 }}>
              <motion.div initial={{ rotateY: -8, rotateX: -4 }} whileInView={{ rotateY: -4, rotateX: -2 }} whileHover={{ rotateY: 0, rotateX: 0 }} viewport={{ once: true }} transition={{ duration: 0.9 }} style={{ transformStyle: "preserve-3d" }}>
                <ClientDashboard />
              </motion.div>
            </motion.div>
          </div>

          {/* Partenaire */}
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 64, alignItems: "center" }}>
            <motion.div initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }} style={{ display: "flex", justifyContent: "center", perspective: 1200 }}>
              <motion.div initial={{ rotateY: 8, rotateX: -4 }} whileInView={{ rotateY: 4, rotateX: -2 }} whileHover={{ rotateY: 0, rotateX: 0 }} viewport={{ once: true }} transition={{ duration: 0.9 }} style={{ transformStyle: "preserve-3d" }}>
                <PartnerDashboard />
              </motion.div>
            </motion.div>
            <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }}>
              <motion.p variants={fadeUp(0)} style={{ color: "var(--success)", fontSize: 11, fontWeight: 700, letterSpacing: "0.18em", textTransform: "uppercase", marginBottom: 16 }}>Espace Partenaire</motion.p>
              <motion.h3 variants={fadeUp(0.08)} style={{ fontSize: "clamp(1.5rem, 2.5vw, 2rem)", fontWeight: 700, color: "#fff", marginBottom: 20 }}>
                Commissions jusqu&apos;à <span className="font-fraunces italic" style={{ fontWeight: 400 }}>15 %</span>
              </motion.h3>
              <motion.p variants={fadeUp(0.14)} style={{ color: "var(--text-2)", fontSize: 15, lineHeight: 1.8, marginBottom: 28 }}>
                Concierges d&apos;hôtels, wedding planners, conseillers en gestion de patrimoine — recommandez Corsiva et percevez une commission sur chaque location conclue.
              </motion.p>
              <motion.div variants={fadeUp(0.2)} style={{ display: "flex", flexDirection: "column", gap: 10, marginBottom: 32 }}>
                {["Tableau de bord leads en temps réel", "Commissions de 8% à 15% selon niveau", "Paiement mensuel automatique"].map((item) => (
                  <div key={item} style={{ display: "flex", alignItems: "center", gap: 12 }}>
                    <span style={{ color: "var(--success)", fontSize: 13 }}>✓</span>
                    <span style={{ color: "var(--text-2)", fontSize: 14 }}>{item}</span>
                  </div>
                ))}
              </motion.div>
              <motion.div variants={fadeUp(0.26)}>
                <Link href="/partenaire" style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "12px 24px", border: "1.5px solid var(--success)", color: "var(--success)", fontWeight: 600, fontSize: 14, borderRadius: 10 }}>
                  Devenir partenaire <span>→</span>
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── 3. FLEET ── */}
      <section style={{ padding: `${SEC} 0`, background: "var(--bg)" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto", paddingLeft: P, paddingRight: P }}>
          <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }} style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", gap: 24, marginBottom: 56, flexWrap: "wrap" }}>
            <div>
              <motion.p variants={fadeUp(0)} style={{ color: "var(--gold)", fontSize: 11, fontWeight: 700, letterSpacing: "0.18em", textTransform: "uppercase", marginBottom: 16 }}>La flotte</motion.p>
              <motion.h2 variants={fadeUp(0.08)} style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.5rem)", fontWeight: 700, color: "#fff" }}>
                Des véhicules <span className="font-fraunces italic" style={{ fontWeight: 400 }}>hors du commun</span>
              </motion.h2>
            </div>
            <motion.div variants={fadeUp(0.12)}>
              <Link href="/flotte" style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "10px 20px", border: "1px solid var(--border)", color: "var(--text-2)", fontSize: 13, fontWeight: 600, borderRadius: 10 }}>
                Voir toute la flotte <span>→</span>
              </Link>
            </motion.div>
          </motion.div>

          <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-60px" }} style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 20 }}>
            {fleet.map((v) => (
              <motion.div key={v.model} variants={fadeUp(0)}>
                <Link href="/flotte" className="group" style={{ display: "block", background: "var(--card)", border: "1px solid var(--border)", borderRadius: 20, overflow: "hidden" }}>
                  <div style={{ position: "relative", height: 200, overflow: "hidden" }}>
                    <Image src={v.image} alt={`${v.brand} ${v.model}`} fill className="object-cover object-center transition-transform duration-700 group-hover:scale-105" />
                    <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(10,10,10,0.65) 0%, transparent 55%)" }} />
                    <span style={{ position: "absolute", top: 12, left: 12, fontSize: 10, fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: "rgba(255,255,255,0.9)", background: "rgba(10,10,10,0.6)", backdropFilter: "blur(6px)", padding: "3px 10px", borderRadius: 999 }}>
                      {v.category}
                    </span>
                  </div>
                  <div style={{ padding: "18px 20px" }}>
                    <p style={{ color: "var(--text-3)", fontSize: 10, fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase", marginBottom: 4 }}>{v.brand}</p>
                    <h3 style={{ color: "#fff", fontWeight: 700, fontSize: 15, marginBottom: 14 }}>{v.model}</h3>
                    <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                      <div>
                        <span style={{ fontSize: 20, fontWeight: 800, color: "#fff" }}>{v.price} €</span>
                        <span style={{ fontSize: 11, color: "var(--text-3)", marginLeft: 4 }}>/ jour</span>
                      </div>
                      <span style={{ color: "var(--accent)", fontSize: 12, fontWeight: 600 }}>Réserver →</span>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── 4. STATS ── */}
      <section style={{ padding: "4rem 0", background: "var(--bg-2)", borderTop: "1px solid var(--border)", borderBottom: "1px solid var(--border)" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto", paddingLeft: P, paddingRight: P }}>
          <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true }} style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", borderLeft: "1px solid var(--border)" }}>
            {stats.map((s, i) => (
              <motion.div key={i} variants={fadeUp(i * 0.08)} style={{ padding: "16px 32px", textAlign: "center", borderRight: "1px solid var(--border)" }}>
                <div style={{ fontSize: 40, fontWeight: 700, color: "#fff", marginBottom: 8 }}>{s.value}</div>
                <div style={{ fontSize: 11, color: "var(--text-3)", letterSpacing: "0.12em", textTransform: "uppercase" }}>{s.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── 5. WHY CORSIVA ── */}
      <section style={{ padding: `${SEC} 0`, background: "var(--bg)" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto", paddingLeft: P, paddingRight: P }}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 64, alignItems: "center" }}>
            <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }}>
              <motion.p variants={fadeUp(0)} style={{ color: "var(--gold)", fontSize: 11, fontWeight: 700, letterSpacing: "0.18em", textTransform: "uppercase", marginBottom: 16 }}>Pourquoi Corsiva</motion.p>
              <motion.h2 variants={fadeUp(0.08)} style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.5rem)", fontWeight: 700, color: "#fff", marginBottom: 40 }}>
                Le standard <span className="font-fraunces italic" style={{ fontWeight: 400 }}>de l&apos;excellence</span>
              </motion.h2>
              <div style={{ display: "flex", flexDirection: "column", gap: 28 }}>
                {benefits.map((b, i) => (
                  <motion.div key={i} variants={fadeUp(0.08 + i * 0.06)} style={{ display: "flex", gap: 20 }}>
                    <div style={{ marginTop: 2, color: "var(--gold)", fontSize: 12, flexShrink: 0 }}>◆</div>
                    <div>
                      <h3 style={{ color: "#fff", fontWeight: 600, fontSize: 15, marginBottom: 6 }}>{b.title}</h3>
                      <p style={{ color: "var(--text-2)", fontSize: 14, lineHeight: 1.7 }}>{b.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, margin: "-80px" }} transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }} style={{ position: "relative", height: 520 }}>
              <div style={{ position: "absolute", top: 0, left: 0, width: "58%", height: "62%", borderRadius: 20, overflow: "hidden", border: "1px solid var(--border)" }}>
                <Image src="/assets/vehicules/taycan/03.jpg" alt="Porsche Taycan" fill className="object-cover" />
              </div>
              <div style={{ position: "absolute", bottom: 0, right: 0, width: "55%", height: "58%", borderRadius: 20, overflow: "hidden", border: "1px solid var(--border)" }}>
                <Image src="/assets/vehicules/m3/02.jpg" alt="BMW M3" fill className="object-cover" />
              </div>
              <div style={{ position: "absolute", bottom: "30%", left: 0, width: "36%", height: "32%", borderRadius: 20, overflow: "hidden", border: "1px solid var(--border)" }}>
                <Image src="/assets/vehicules/cayenne/03.jpg" alt="Porsche Cayenne" fill className="object-cover" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── 6. CTA FINALE ── */}
      <section style={{ position: "relative", padding: "clamp(5rem, 9vw, 10rem) 0", overflow: "hidden", background: "var(--bg-2)" }}>
        <div style={{ position: "absolute", inset: 0, opacity: 0.2 }}>
          <Image src="/assets/vehicules/g-brabus/04.jpg" alt="" fill className="object-cover object-center" />
          <div style={{ position: "absolute", inset: 0, background: "var(--bg-2)", opacity: 0.7 }} />
        </div>
        <div style={{ position: "relative", zIndex: 10, maxWidth: 1280, margin: "0 auto", paddingLeft: P, paddingRight: P, textAlign: "center" }}>
          <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <motion.p variants={fadeUp(0)} style={{ color: "var(--gold)", fontSize: 11, fontWeight: 700, letterSpacing: "0.18em", textTransform: "uppercase", marginBottom: 24 }}>Commencer</motion.p>
            <motion.h2 variants={fadeUp(0.08)} style={{ fontSize: "clamp(2.2rem, 5vw, 4rem)", fontWeight: 800, color: "#fff", marginBottom: 24, lineHeight: 1.1 }}>
              Prêt à vivre <span className="font-fraunces italic" style={{ fontWeight: 400 }}>l&apos;exception ?</span>
            </motion.h2>
            <motion.p variants={fadeUp(0.16)} style={{ color: "var(--text-2)", fontSize: 18, marginBottom: 40, maxWidth: 480, margin: "0 auto 40px" }}>
              Découvrez la flotte ou accédez directement à votre espace personnel.
            </motion.p>
            <motion.div variants={fadeUp(0.24)} style={{ display: "flex", flexWrap: "wrap", gap: 16, justifyContent: "center" }}>
              <Link href="/flotte" style={{ padding: "14px 32px", border: "1.5px solid var(--gold)", color: "var(--gold)", fontWeight: 600, fontSize: 14, borderRadius: 10, display: "inline-block" }}>
                Découvrir la flotte
              </Link>
              <Link href="/login" style={{ padding: "14px 32px", background: "var(--accent)", color: "#fff", fontWeight: 600, fontSize: 14, borderRadius: 10, display: "inline-block" }}>
                Accéder à mon espace
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
