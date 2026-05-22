import Image from "next/image";
import Link from "next/link";

const P = "clamp(1.5rem, 5vw, 6rem)";

const navLinks = [
  { href: "/proprietaire", label: "Espace Propriétaire" },
  { href: "/client", label: "Espace Client" },
  { href: "/partenaire", label: "Espace Partenaire" },
  { href: "/flotte", label: "Notre flotte" },
  { href: "/a-propos", label: "À propos" },
];

const services = [
  "Location courte durée",
  "Location mariage",
  "Corporate & événementiel",
  "Gestion de flotte",
  "Programme partenaire",
];

export default function Footer() {
  return (
    <footer style={{ background: "var(--bg-2)", borderTop: "1px solid var(--border)" }}>
      <div style={{ maxWidth: 1280, margin: "0 auto", paddingLeft: P, paddingRight: P, paddingTop: "5rem", paddingBottom: "2.5rem" }}>

        {/* Top grid — 4 colonnes */}
        <div style={{ display: "grid", gridTemplateColumns: "2fr 1fr 1fr 1fr", gap: 48, marginBottom: 56 }}>

          {/* Brand */}
          <div>
            <Image src="/assets/logos/Full Corsiva Blanc.svg" alt="Corsiva" width={130} height={30} style={{ height: 32, width: "auto", marginBottom: 20 }} />
            <p style={{ color: "var(--text-3)", fontSize: 14, lineHeight: 1.7, maxWidth: 240 }}>
              Conciergerie automobile de prestige en Auvergne-Rhône-Alpes.
            </p>
            <div style={{ marginTop: 24, display: "flex", alignItems: "center", gap: 8 }}>
              <span style={{ color: "var(--gold)", fontSize: 10 }}>◆</span>
              <span style={{ color: "var(--text-3)", fontSize: 11, letterSpacing: "0.14em", textTransform: "uppercase" }}>Premium · Confidentiel</span>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <p style={{ color: "var(--text-3)", fontSize: 11, fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase", marginBottom: 20 }}>Navigation</p>
            <ul style={{ display: "flex", flexDirection: "column", gap: 12, listStyle: "none", padding: 0, margin: 0 }}>
              {navLinks.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} style={{ color: "var(--text-2)", fontSize: 14, textDecoration: "none" }}>{l.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <p style={{ color: "var(--text-3)", fontSize: 11, fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase", marginBottom: 20 }}>Services</p>
            <ul style={{ display: "flex", flexDirection: "column", gap: 12, listStyle: "none", padding: 0, margin: 0 }}>
              {services.map((s) => (
                <li key={s} style={{ color: "var(--text-2)", fontSize: 14 }}>{s}</li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <p style={{ color: "var(--text-3)", fontSize: 11, fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase", marginBottom: 20 }}>Contact</p>
            <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
              <a href="tel:+33480819138" style={{ color: "var(--text-2)", fontSize: 14, textDecoration: "none" }}>04 80 81 91 38</a>
              <a href="mailto:contact@corsiva.fr" style={{ color: "var(--text-2)", fontSize: 14, textDecoration: "none" }}>contact@corsiva.fr</a>
              <p style={{ color: "var(--text-3)", fontSize: 14, lineHeight: 1.6, margin: 0 }}>
                Rue Marguerite Sevez<br />73000 Chambéry
              </p>
              <p style={{ color: "var(--text-3)", fontSize: 12, margin: 0 }}>
                Livraison possible sur Lyon, Annecy, Grenoble
              </p>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div style={{ borderTop: "1px solid var(--border)", paddingTop: 28, display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: 16 }}>
          <p style={{ color: "var(--text-3)", fontSize: 12, margin: 0 }}>© 2026 Corsiva. Tous droits réservés.</p>
          <div style={{ display: "flex", alignItems: "center", gap: 24 }}>
            <Link href="/contact" style={{ color: "var(--text-3)", fontSize: 12, textDecoration: "none" }}>Mentions légales</Link>
            <Link href="/contact" style={{ color: "var(--text-3)", fontSize: 12, textDecoration: "none" }}>Confidentialité</Link>
            <a href="tel:+33480819138" style={{ color: "var(--text-3)", fontSize: 12, textDecoration: "none" }}>+33 4 80 81 91 38</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
