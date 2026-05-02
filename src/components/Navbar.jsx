import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, Menu, X } from "lucide-react";

const navLinks = [
  { name: "About", href: "#experience" },
  { name: "Amenities", href: "#amenities" },
  { name: "Location", href: "#location" },
  { name: "Plans", href: "#plans" },
  { name: "Walkthrough", href: "#walkthrough" },
  { name: "Gallery", href: "#gallery" },
];

export default function Navbar({ isHidden, onOpenModal }) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isHero, setIsHero] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      setIsHero(window.scrollY <= window.innerHeight - 80);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const closeMenu = () => setIsMobileMenuOpen(false);

  return (
    <>
      <nav
        className="fixed left-0 top-0 z-50 w-full px-4 pt-4 transition-all duration-500 sm:px-6 lg:px-10"
        style={{
          transform: isHidden ? "translateY(-120%)" : "translateY(0)",
          opacity: isHidden ? 0 : 1,
          pointerEvents: isHidden ? "none" : "auto",
        }}
      >
        <div
          className={[
            "mx-auto flex h-[4.25rem] max-w-[1320px] items-center justify-between rounded-full border px-4 shadow-[0_18px_55px_rgba(20,28,18,0.12)] backdrop-blur-2xl transition-all duration-500 sm:h-[4.5rem] sm:px-5",
            isHero
              ? "border-[#d8cba8]/75 bg-[#fff8eb]/72 text-[#172018]"
              : "border-white/12 bg-[#0b2117]/78 text-[#F8F3E7]",
          ].join(" ")}
        >
          <a href="#" className="flex min-w-0 items-center gap-3">
            <span
              className={[
                "flex h-11 w-11 shrink-0 items-center justify-center overflow-hidden rounded-full border bg-white p-1.5 transition",
                isHero ? "border-[#d8cba8]" : "border-white/15",
              ].join(" ")}
            >
              <img src="/logo/trust.webp" alt="Aranya Logo" className="h-full w-full object-contain" />
            </span>
            <span className="hidden leading-none sm:block">
              <span className="block font-serif text-xl tracking-[0.08em]">ARANYA</span>
              <span
                className={[
                  "mt-1 block text-[8px] font-bold uppercase tracking-[0.28em]",
                  isHero ? "text-[#8a7033]" : "text-[#C9A44D]",
                ].join(" ")}
              >
                By Rang Homes
              </span>
            </span>
          </a>

          <div
            className={[
              "hidden items-center rounded-full border p-1 lg:flex",
              isHero ? "border-[#d8cba8]/80 bg-white/36" : "border-white/10 bg-white/[0.055]",
            ].join(" ")}
          >
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={[
                  "rounded-full px-4 py-2 text-[10px] font-bold uppercase tracking-[0.18em] transition",
                  isHero
                    ? "text-[#314033]/76 hover:bg-[#172018] hover:text-[#fff8eb]"
                    : "text-white/68 hover:bg-white hover:text-[#172018]",
                ].join(" ")}
              >
                {link.name}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={onOpenModal}
              className={[
                "hidden items-center gap-3 rounded-full px-5 py-3 text-[10px] font-bold uppercase tracking-[0.22em] transition lg:inline-flex",
                isHero
                  ? "bg-[#172018] text-[#fff8eb] hover:bg-[#C9A44D] hover:text-[#172018]"
                  : "bg-[#C9A44D] text-[#172018] hover:bg-white",
              ].join(" ")}
            >
              Brochure
              <ArrowUpRight size={14} />
            </button>

            <button
              type="button"
              onClick={() => setIsMobileMenuOpen(true)}
              className={[
                "flex h-11 w-11 items-center justify-center rounded-full border transition lg:hidden",
                isHero
                  ? "border-[#d8cba8] bg-white/50 text-[#172018]"
                  : "border-white/15 bg-white/8 text-white",
              ].join(" ")}
              aria-label="Open menu"
            >
              <Menu size={21} />
            </button>
          </div>
        </div>
      </nav>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] overflow-y-auto bg-[#08180f] px-6 py-7 text-[#F8F3E7]"
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="font-serif text-3xl">ARANYA</p>
                <p className="mt-1 text-[10px] font-bold uppercase tracking-[0.34em] text-[#C9A44D]">
                  By Rang Homes
                </p>
              </div>
              <button
                type="button"
                onClick={closeMenu}
                className="flex h-11 w-11 items-center justify-center rounded-full border border-white/12 bg-white/6 text-white"
                aria-label="Close menu"
              >
                <X size={21} />
              </button>
            </div>

            <div className="mt-12 flex flex-col gap-2 sm:mt-16 sm:gap-3">
              {navLinks.map((link, idx) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  initial={{ opacity: 0, y: 18 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.055 }}
                  onClick={closeMenu}
                  className="group flex items-center justify-between border-b border-white/8 py-4 sm:py-5"
                >
                  <span className="font-serif text-3xl leading-none text-white transition group-hover:text-[#C9A44D] sm:text-4xl">
                    {link.name}
                  </span>
                  <ArrowUpRight size={18} className="text-[#C9A44D]" />
                </motion.a>
              ))}
            </div>

            <button
              type="button"
              onClick={() => {
                closeMenu();
                onOpenModal();
              }}
              className="mt-10 flex w-full items-center justify-center gap-3 rounded-full bg-[#C9A44D] px-8 py-4 text-[11px] font-bold uppercase tracking-[0.24em] text-[#172018]"
            >
              Download Brochure
              <ArrowUpRight size={15} />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
