"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const fadeUp = (delay = 0) => ({
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] },
  },
});

const stagger = { hidden: {}, visible: { transition: { staggerChildren: 0.08 } } };

type Category = "Tous" | "Sport" | "SUV" | "Électrique";

interface Vehicle {
  brand: string;
  model: string;
  category: Category;
  price: number;
  image: string;
  specs: { puissance: string; transmission: string; places: number; carburant: string };
  desc: string;
}

// Vrais véhicules de la flotte Corsiva (source: store.ts)
const vehicles: Vehicle[] = [
  {
    brand: "BMW", model: "M3 Competition G80", category: "Sport", price: 399,
    image: "https://coinmentor.eu/assets/img_corsiva/m3-garage-int.jpg",
    specs: { puissance: "530 ch", transmission: "Automatique", places: 4, carburant: "Essence" },
    desc: "La berline sport de référence. 0–100 km/h en 3,9 s, sonorité inline-6 biturbo et habitacle carbone.",
  },
  {
    brand: "Porsche", model: "Taycan 4", category: "Électrique", price: 299,
    image: "https://coinmentor.eu/assets/img_corsiva/9pc.jpg",
    specs: { puissance: "476 ch", transmission: "Automatique", places: 5, carburant: "Électrique" },
    desc: "La sportive électrique par excellence. Charge ultra-rapide, 0–100 en 4,0 s, technologie Porsche.",
  },
  {
    brand: "Mercedes-Benz", model: "G 63 Brabus 2018", category: "SUV", price: 800,
    image: "https://coinmentor.eu/assets/img_corsiva/G63brabus.jpg",
    specs: { puissance: "571 ch", transmission: "Automatique", places: 5, carburant: "Essence" },
    desc: "Le SUV le plus exclusif de la flotte. Préparation Brabus — présence et puissance absolues.",
  },
  {
    brand: "Porsche", model: "Cayenne S Coupé", category: "SUV", price: 450,
    image: "https://coinmentor.eu/assets/img_corsiva/cayenne.jpg",
    specs: { puissance: "470 ch", transmission: "Automatique", places: 5, carburant: "Hybride" },
    desc: "Le SUV sportif de Porsche. Ligne coupé, conduite dynamique et luxe à chaque kilomètre.",
  },
  {
    brand: "BMW", model: "M235i", category: "Sport", price: 200,
    image: "https://coinmentor.eu/assets/img_corsiva/M235i.jpg",
    specs: { puissance: "306 ch", transmission: "Automatique", places: 4, carburant: "Essence" },
    desc: "La compacte sportive parfaite. Agilité, confort et moteur biturbo — idéale pour les city-trips.",
  },
  {
    brand: "Mercedes-Benz", model: "CLA 250", category: "Sport", price: 160,
    image: "https://coinmentor.eu/assets/img_corsiva/cla.jpg",
    specs: { puissance: "272 ch", transmission: "Automatique", places: 5, carburant: "Électrique" },
    desc: "Élégance et sportivité au quotidien. Design AMG affûté, habitacle premium et finition irréprochable.",
  },
  {
    brand: "Mercedes-Benz", model: "G 63 AMG 2024", category: "SUV", price: 1000,
    image: "https://coinmentor.eu/assets/img_corsiva/g2024.png",
    specs: { puissance: "585 ch", transmission: "Automatique", places: 5, carburant: "Essence" },
    desc: "L'icône automobile dans sa version AMG. V8 biturbo, présence inégalée, sonorité unique.",
  },
  {
    brand: "BMW", model: "420d", category: "Sport", price: 150,
    image: "/assets/vehicules/420d-v2.jpg",
    specs: { puissance: "190 ch", transmission: "Automatique", places: 4, carburant: "Diesel" },
    desc: "Le Gran Coupé BMW par excellence. Style fastback, habitacle spacieux et consommation maîtrisée.",
  },
];

const categories: Category[] = ["Tous", "Sport", "SUV", "Électrique"];

const PADDING = "clamp(3rem, 6vw, 7rem)";

export default function FlottePage() {
  const [active, setActive] = useState<Category>("Tous");
  const filtered = active === "Tous" ? vehicles : vehicles.filter((v) => v.category === active);

  return (
    <>
      {/* ── Hero ── */}
      <section className="relative min-h-[52vh] flex flex-col justify-end overflow-hidden">
        <div className="absolute inset-0">
          <Image src="/assets/vehicules/taycan/04.jpg" alt="La flotte Corsiva" fill className="object-cover object-center" priority quality={90} />
          <div className="absolute inset-0 bg-gradient-to-r from-[rgba(10,10,10,0.85)] via-[rgba(10,10,10,0.5)] to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-[rgba(10,10,10,0.8)] via-transparent to-transparent" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto w-full" style={{ paddingLeft: PADDING, paddingRight: PADDING, paddingTop: "11rem", paddingBottom: "6rem" }}>
          <motion.div variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.1 } } }} initial="hidden" animate="visible" className="max-w-xl">
            <motion.p variants={fadeUp(0)} className="text-[var(--gold)] text-xs font-semibold tracking-[0.18em] uppercase mb-5">La flotte</motion.p>
            <motion.h1 variants={fadeUp(0.1)} className="text-5xl md:text-6xl font-bold text-white mb-5 leading-tight">
              Des véhicules{" "}<span className="font-fraunces italic" style={{ fontWeight: 400 }}>d&apos;exception</span>
            </motion.h1>
            <motion.p variants={fadeUp(0.2)} className="text-[var(--text-2)] text-lg leading-relaxed">
              BMW, Porsche, Mercedes-Benz — sélectionnés pour répondre aux attentes les plus exigeantes.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* ── Filter + Grid ── */}
      <section style={{ paddingTop: "clamp(5rem, 8vw, 9rem)", paddingBottom: "clamp(4rem, 6vw, 8rem)", background: "var(--bg)" }}>
        <div className="max-w-7xl mx-auto" style={{ paddingLeft: PADDING, paddingRight: PADDING }}>

          {/* Filter tabs */}
          <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} style={{ display: "flex", flexWrap: "wrap", gap: 8, marginBottom: 48, alignItems: "center" }}>
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActive(cat)}
                style={{
                  padding: "8px 20px", borderRadius: 999, fontSize: 13, fontWeight: 600,
                  letterSpacing: "0.04em", transition: "all 0.25s", cursor: "pointer",
                  background: active === cat ? "var(--accent)" : "transparent",
                  color: active === cat ? "#fff" : "var(--text-2)",
                  border: active === cat ? "1.5px solid var(--accent)" : "1.5px solid var(--border)",
                }}
              >
                {cat}
              </button>
            ))}
            <span style={{ marginLeft: "auto", color: "var(--text-3)", fontSize: 13 }}>
              {filtered.length} véhicule{filtered.length > 1 ? "s" : ""}
            </span>
          </motion.div>

          {/* Liste de véhicules — chaque carte pleine largeur */}
          <motion.div
            key={active}
            variants={stagger}
            initial="hidden"
            animate="visible"
            style={{ display: "flex", flexDirection: "column", gap: 20 }}
          >
            {filtered.map((v) => (
              <motion.div key={`${v.brand}-${v.model}`} variants={fadeUp(0)}>
                <div
                  className="group flex flex-col md:grid"
                  style={{
                    gridTemplateColumns: "360px 1fr",
                    background: "var(--card)", border: "1px solid var(--border)",
                    borderRadius: 20, overflow: "hidden",
                    transition: "border-color 0.3s, box-shadow 0.3s",
                  }}
                >
                  {/* Photo */}
                  <div style={{ position: "relative", minHeight: 240, height: "100%", overflow: "hidden" }}>
                    <Image
                      src={v.image} alt={`${v.brand} ${v.model}`} fill
                      className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
                    />
                    <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to right, transparent 60%, rgba(10,10,10,0.6))" }} />
                    <span style={{
                      position: "absolute", top: 14, left: 14,
                      fontSize: 10, fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase",
                      color: "rgba(255,255,255,0.9)", background: "rgba(10,10,10,0.6)",
                      backdropFilter: "blur(6px)", padding: "4px 10px", borderRadius: 999,
                    }}>
                      {v.brand}
                    </span>
                    <span style={{
                      position: "absolute", top: 14, right: 14,
                      fontSize: 10, fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase",
                      color: "var(--gold)", background: "rgba(212,175,108,0.12)",
                      border: "1px solid rgba(212,175,108,0.28)",
                      backdropFilter: "blur(6px)", padding: "4px 10px", borderRadius: 999,
                    }}>
                      {v.category}
                    </span>
                  </div>

                  {/* Content */}
                  <div style={{ display: "flex", flexDirection: "column", padding: "28px 32px" }}>
                    <p style={{ color: "var(--gold)", fontSize: 11, fontWeight: 700, letterSpacing: "0.16em", textTransform: "uppercase", marginBottom: 6 }}>{v.brand}</p>
                    <h3 style={{ color: "#fff", fontWeight: 700, fontSize: 22, marginBottom: 8 }}>{v.model}</h3>
                    <p style={{ color: "var(--text-2)", fontSize: 14, lineHeight: 1.7, marginBottom: 20, flex: 1 }}>{v.desc}</p>

                    {/* Specs */}
                    <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 10, marginBottom: 24 }}>
                      {([
                        ["Puissance", v.specs.puissance],
                        ["Transmission", v.specs.transmission],
                        ["Places", `${v.specs.places} places`],
                        ["Carburant", v.specs.carburant],
                      ] as [string, string][]).map(([label, val]) => (
                        <div key={label} style={{
                          background: "rgba(255,255,255,0.04)", border: "1px solid var(--border)",
                          borderRadius: 10, padding: "10px 14px",
                        }}>
                          <p style={{ color: "var(--text-3)", fontSize: 10, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: 4 }}>{label}</p>
                          <p style={{ color: "#fff", fontSize: 13, fontWeight: 600 }}>{val}</p>
                        </div>
                      ))}
                    </div>

                    {/* Prix + CTA */}
                    <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", paddingTop: 20, borderTop: "1px solid var(--border)" }}>
                      <div>
                        <span style={{ fontSize: 30, fontWeight: 800, color: "#fff" }}>{v.price} €</span>
                        <span style={{ fontSize: 12, color: "var(--text-3)", marginLeft: 6 }}>/ jour</span>
                      </div>
                      <Link href="/contact" style={{
                        padding: "12px 28px", background: "var(--accent)", color: "#fff",
                        fontSize: 14, fontWeight: 600, borderRadius: 10, letterSpacing: "0.04em",
                        display: "inline-block",
                      }}>
                        Réserver
                      </Link>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── CTA strip ── */}
      <section style={{ padding: "64px 0", background: "var(--bg-2)", borderTop: "1px solid var(--border)" }}>
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6" style={{ paddingLeft: PADDING, paddingRight: PADDING }}>
          <div>
            <p style={{ color: "var(--gold)", fontSize: 11, fontWeight: 700, letterSpacing: "0.18em", textTransform: "uppercase", marginBottom: 8 }}>Vous avez un véhicule ?</p>
            <h2 style={{ fontSize: 24, fontWeight: 700, color: "#fff" }}>
              Confiez-le à <span className="font-fraunces italic" style={{ fontWeight: 400 }}>Corsiva.</span>
            </h2>
          </div>
          <div style={{ display: "flex", gap: 12 }}>
            <Link href="/proprietaire" style={{ padding: "12px 24px", border: "1.5px solid var(--gold)", color: "var(--gold)", fontWeight: 600, fontSize: 13, borderRadius: 12, display: "inline-block" }}>
              Espace Propriétaire
            </Link>
            <Link href="/contact" style={{ padding: "12px 24px", background: "var(--accent)", color: "#fff", fontWeight: 600, fontSize: 13, borderRadius: 12, display: "inline-block" }}>
              Nous contacter
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
