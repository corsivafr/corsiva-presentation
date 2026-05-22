"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";

const navLinks = [
  { href: "/proprietaire", label: "Propriétaire" },
  { href: "/client", label: "Client" },
  { href: "/partenaire", label: "Partenaire" },
  { href: "/flotte", label: "Flotte" },
  { href: "/a-propos", label: "À propos" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-[rgba(10,10,10,0.95)] border-b border-[var(--border)] backdrop-blur-xl"
            : "bg-transparent border-b border-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto h-20 flex items-center justify-between" style={{ paddingLeft: "clamp(1.5rem, 4vw, 4rem)", paddingRight: "clamp(1rem, 3vw, 2rem)" }}>
          {/* Logo */}
          <Link href="/" className="flex items-center shrink-0">
            <Image
              src="/assets/logos/Full Corsiva Blanc.svg"
              alt="Corsiva"
              width={140}
              height={32}
              className="h-8 w-auto"
              priority
            />
          </Link>

          {/* Desktop nav — center */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => {
              const active = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`relative text-[13px] font-medium tracking-wide transition-colors duration-200 pb-0.5 group ${
                    active ? "text-white" : "text-[var(--text-2)] hover:text-white"
                  }`}
                >
                  {link.label}
                  <span
                    className={`absolute bottom-0 left-0 h-px bg-[var(--gold)] transition-all duration-300 ${
                      active ? "w-full" : "w-0 group-hover:w-full"
                    }`}
                  />
                </Link>
              );
            })}
          </nav>

          {/* Right CTA + hamburger */}
          <div className="flex items-center gap-4">
            <Link
              href="https://corsiva-pwa.vercel.app/login"
              className="hidden lg:inline-block"
              style={{ padding: "10px 20px", background: "var(--accent)", color: "#fff", fontSize: 13, fontWeight: 600, borderRadius: 10, letterSpacing: "0.04em", whiteSpace: "nowrap" }}
            >
              Accéder à mon espace
            </Link>
            <button
              onClick={() => setOpen(!open)}
              className="lg:hidden text-white p-1.5 -mr-1.5"
              aria-label="Menu"
            >
              {open ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile overlay */}
      <div
        className={`fixed inset-0 z-40 bg-[var(--bg)] flex flex-col transition-all duration-500 ${
          open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        style={{ paddingTop: 80 }}
      >
        <nav className="flex flex-col px-8 pt-8 gap-1">
          {navLinks.map((link) => {
            const active = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`py-4 text-2xl font-semibold border-b border-[var(--border)] transition-colors duration-200 ${
                  active ? "text-[var(--gold)]" : "text-white"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>
        <div className="px-8 mt-8">
          <Link
            href="https://corsiva-pwa.vercel.app/login"
            className="block w-full py-4 bg-[var(--accent)] text-white text-center font-semibold rounded-xl text-lg"
          >
            Accéder à mon espace
          </Link>
        </div>
        <div className="px-8 mt-6">
          <a
            href="tel:+33480819138"
            className="text-[var(--text-3)] text-sm"
          >
            04 80 81 91 38
          </a>
        </div>
      </div>
    </>
  );
}
