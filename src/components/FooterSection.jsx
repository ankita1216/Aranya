import { motion } from "framer-motion";
import { Mail, MapPin, Phone, Globe, Building2, ArrowUpRight } from "lucide-react";

/* ─── Data ──────────────────────────────────── */
const navLinks = [
  { name: "About",     href: "#experience" },
  { name: "Amenities", href: "#amenities"  },
  { name: "Location",  href: "#location"   },
  { name: "Plans",     href: "#plans"      },
  { name: "Gallery",   href: "#gallery"    },
];

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  show: (i = 0) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: i * 0.1 },
  }),
};

/* ─── Main Component ──────────────────────────── */
export default function FooterSection() {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="footer" className="relative bg-[#0b2117] text-[#F8F3E7] overflow-hidden">

      {/* ══════════════════════════════════════════
          MINIMALIST GET IN TOUCH SECTION
      ══════════════════════════════════════════ */}
      <section className="px-6 pt-16 pb-16 md:px-14 lg:px-20 border-t border-white/5">
        <div className="mx-auto max-w-7xl">

          <div className="grid gap-12 sm:grid-cols-2 lg:gap-24">
            {/* Corporate Office */}
            <motion.div
              variants={fadeUp} custom={1} initial="hidden" whileInView="show" viewport={{ once: true }}
              className="flex flex-col"
            >
              <div className="flex items-center gap-3 mb-5">
                <Building2 size={16} className="text-[#C9A44D]" />
                <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#C9A44D]">Corporate Office</p>
              </div>
              <p className="font-serif text-lg leading-relaxed text-white/80 max-w-md">
                12 C & D, 2nd Floor, Vasant Square Mall,<br />
                B-5 Vasant Kunj, New Delhi – 110070
              </p>
              <div className="mt-8 flex flex-wrap gap-x-8 gap-y-4">
                <a href="tel:01171834410" className="flex items-center gap-2 text-sm font-light text-white/50 hover:text-[#C9A44D] transition-colors">
                  <Phone size={13} /> 011-71834410/11
                </a>
                <a href="mailto:info@indogroup.in" className="flex items-center gap-2 text-sm font-light text-white/50 hover:text-[#C9A44D] transition-colors">
                  <Mail size={13} /> info@indogroup.in
                </a>
                <a href="https://www.indogroup.in" target="_blank" rel="noreferrer" className="flex items-center gap-2 text-sm font-light text-white/50 hover:text-[#C9A44D] transition-colors">
                  <Globe size={13} /> www.indogroup.in
                </a>
              </div>
            </motion.div>

            {/* Site Address */}
            <motion.div
              variants={fadeUp} custom={2} initial="hidden" whileInView="show" viewport={{ once: true }}
              className="flex flex-col"
            >
              <div className="flex items-center gap-3 mb-5">
                <MapPin size={16} className="text-[#C9A44D]" />
                <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#C9A44D]">Site Address</p>
              </div>
              <p className="font-serif text-lg leading-relaxed text-white/80 max-w-md">
                RH Aerocity, Dharapur,<br />
                Palashbari Road, Assam – 781017
              </p>
              <div className="mt-8">
                <a href="tel:18001201255555" className="flex items-center gap-2 text-sm font-light text-white/50 hover:text-[#C9A44D] transition-colors">
                  <Phone size={13} /> 1800 12012 5555
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          BOTTOM BAR — nav + quote + copyright
      ══════════════════════════════════════════ */}
      <div className="px-6 md:px-14 lg:px-20">
        <div className="mx-auto max-w-7xl">
          {/* Divider */}
          <div className="h-px bg-white/5 w-full" />

          {/* Quote + nav */}
          <div className="flex flex-col gap-10 py-12 lg:flex-row lg:items-center lg:justify-between">
            <nav className="flex flex-wrap gap-x-8 gap-y-4">
              {navLinks.map((link) => (
                <a key={link.name} href={link.href}
                  className="text-[11px] font-bold uppercase tracking-[0.28em] text-white/40 transition-all hover:text-[#C9A44D]">
                  {link.name}
                </a>
              ))}
            </nav>
            <p className="max-w-md font-serif text-xl italic leading-snug text-[#C9A44D]/70 lg:text-right">
              "A home should not only shelter you. It should soften the day before you step inside."
            </p>
          </div>

          {/* Copyright */}
          <div className="flex flex-col items-start justify-between gap-6 border-t border-white/5 py-8 md:flex-row md:items-center">
            <div className="flex items-center gap-5">
              <div className="bg-white/90 rounded-md p-1.5 transition-transform hover:scale-105">
                <img src="/images/RANG HOMES-New1.webp" alt="Rang Homes" className="h-5 w-auto object-contain" />
              </div>
              <p className="text-[10px] uppercase tracking-[0.24em] text-white/20">
                © {currentYear} Aranya by Rang Homes.
              </p>
            </div>
            <a href="https://www.indogroup.in" target="_blank" rel="noreferrer"
              className="text-[10px] uppercase tracking-[0.24em] text-white/20 hover:text-[#C9A44D] transition-colors flex items-center gap-2">
              www.indogroup.in <ArrowUpRight size={11} />
            </a>
          </div>
        </div>
      </div>

    </footer>
  );
}
