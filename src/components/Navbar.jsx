import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, Menu, X, Phone } from "lucide-react";

const navLinks = [
  { name: "Overview", href: "#about" },
  { name: "Amenities", href: "#amenities" },
  { name: "Walkthrough Video", href: "#walkthrough" },
  { name: "Gallery", href: "#gallery" },
  { name: "Plan", href: "#plans" },
  { name: "Location", href: "#location" },
  { name: "About Us", href: "#developer" },
];

export default function Navbar({ isHidden, onOpenModal }) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const closeMenu = () => setIsMobileMenuOpen(false);

  return (
    <>
      {/* ── Main Navbar ── */}
      <nav
        className="fixed left-0 top-0 z-50 w-full transition-all duration-500"
        style={{
          transform: isHidden ? "translateY(-110%)" : "translateY(0)",
          opacity: isHidden ? 0 : 1,
          pointerEvents: isHidden ? "none" : "auto",
        }}
      >
        {/* Outer padding */}
        <div className="px-4 pt-4 sm:px-6 lg:px-8">
          <div
            className={[
              "mx-auto flex h-[4.25rem] max-w-[1340px] items-center justify-between rounded-2xl border px-5 transition-all duration-500 sm:h-[4.5rem] sm:px-6",
              scrolled
                ? "border-white/10 bg-[#0b2117]/95 shadow-[0_20px_60px_rgba(0,0,0,0.4)] backdrop-blur-2xl"
                : "border-white/15 bg-[#0b2117]/80 shadow-[0_8px_40px_rgba(0,0,0,0.3)] backdrop-blur-xl",
            ].join(" ")}
          >

            {/* ── Logo lockup ── */}
            <a href="#" className="flex min-w-0 items-center group">
              <div className="flex h-16 w-16 md:h-18 md:w-18 shrink-0 items-center justify-center overflow-hidden transition">
                <img
                  src="/logo/trust.webp"
                  alt="Aranya Logo"
                  className="h-full w-full object-contain"
                />
              </div>
            </a>

            {/* ── Desktop nav + Right actions ── */}
            <div className="flex items-center gap-6 lg:gap-8">
              {/* Nav links */}
              <div className="hidden items-center gap-1 lg:flex">
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    className="relative whitespace-nowrap rounded-lg px-3.5 py-2 text-[10px] font-bold uppercase tracking-[0.18em] text-white transition duration-200 hover:text-[#C9A44D]
                      after:absolute after:bottom-1 after:left-3.5 after:right-3.5 after:h-px after:scale-x-0 after:bg-[#C9A44D] after:transition-transform after:duration-200 hover:after:scale-x-100"
                  >
                    {link.name}
                  </a>
                ))}
              </div>

              {/* CTA button */}
              <button
                onClick={onOpenModal}
                className="hidden items-center gap-2 rounded-xl px-5 py-2.5 text-[10px] font-bold uppercase tracking-[0.18em] transition duration-200 lg:inline-flex"
                style={{
                  background: "linear-gradient(135deg, #C9A44D, #b8903c)",
                  color: "#0f2318",
                  boxShadow: "0 2px 16px rgba(201,164,77,0.3)",
                }}
              >
                Download Brochure
                <ArrowUpRight size={13} />
              </button>

              {/* Hamburger */}
              <button
                type="button"
                onClick={() => setIsMobileMenuOpen(true)}
                className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/15 bg-white/8 text-white transition hover:border-white/30 lg:hidden"
                aria-label="Open menu"
              >
                <Menu size={20} />
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* ── Mobile full-screen menu ── */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 z-[100] flex flex-col overflow-y-auto bg-[#06100b] px-6 py-7 text-[#F8F3E7]"
          >
            {/* Mobile header */}
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="flex h-14 w-14 items-center justify-center overflow-hidden rounded-xl border border-[#C9A44D]/40 bg-white p-2">
                  <img src="/logo/trust.webp" alt="Aranya Logo" className="h-full w-full object-contain" />
                </div>
                <div>
                  <p className="font-serif text-2xl tracking-[0.1em] text-white">ARANYA</p>
                  <p className="text-[10px] font-bold uppercase tracking-[0.32em] text-[#C9A44D]">By Rang Homes</p>
                </div>
              </div>
              <button
                type="button"
                onClick={closeMenu}
                className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/12 bg-white/6 text-white transition hover:border-white/30"
                aria-label="Close menu"
              >
                <X size={20} />
              </button>
            </div>

            {/* Gold separator */}
            <div className="mt-8 h-px bg-gradient-to-r from-transparent via-[#C9A44D]/40 to-transparent" />

            {/* Nav items */}
            <nav className="mt-6 flex flex-col gap-1">
              {navLinks.map((link, idx) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  initial={{ opacity: 0, x: -16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.05, duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                  onClick={closeMenu}
                  className="group flex items-center justify-between rounded-xl px-4 py-4 transition hover:bg-white/5"
                >
                  <span className="font-serif text-3xl font-light text-white transition group-hover:text-[#C9A44D] sm:text-4xl">
                    {link.name}
                  </span>
                  <ArrowUpRight size={18} className="text-[#C9A44D]/50 transition group-hover:text-[#C9A44D]" />
                </motion.a>
              ))}
            </nav>

            {/* Bottom actions */}
            <div className="mt-auto pt-10 flex flex-col gap-3">
              <button
                type="button"
                onClick={() => { closeMenu(); onOpenModal(); }}
                className="flex items-center justify-center gap-2 rounded-xl py-4 text-[11px] font-bold uppercase tracking-[0.24em]"
                style={{
                  background: "linear-gradient(135deg, #C9A44D, #b8903c)",
                  color: "#0f2318",
                  boxShadow: "0 4px 20px rgba(201,164,77,0.25)",
                }}
              >
                Enquire Now
                <ArrowUpRight size={14} />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
