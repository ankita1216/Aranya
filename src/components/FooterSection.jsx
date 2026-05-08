import { motion } from "framer-motion";
import { Mail, MapPin, Phone, Globe, Building2, ArrowUpRight } from "lucide-react";

/* ─── Data ──────────────────────────────────── */
const navLinks = [
  { name: "About", href: "#experience" },
  { name: "Amenities", href: "#amenities" },
  { name: "Location", href: "#location" },
  { name: "Plans", href: "#plans" },
  { name: "Gallery", href: "#gallery" },
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
    <footer id="footer" className="relative bg-[#305242] text-[#F8F3E7] overflow-hidden">

      {/* ══════════════════════════════════════════
          MINIMALIST GET IN TOUCH SECTION
      ══════════════════════════════════════════ */}
      {/* COMPACT: Reduced pt-16 pb-16 to pt-12 pb-12 */}
      <section className="px-6 pt-12 pb-12 md:px-14 lg:px-20 border-t border-white/5">
        <div className="mx-auto max-w-7xl">

          {/* COMPACT: Reduced lg:gap-24 to lg:gap-20 */}
          <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-3 lg:gap-20">
            {/* Corporate Office */}
            <motion.div
              variants={fadeUp} custom={1} initial="hidden" whileInView="show" viewport={{ once: true }}
              className="flex flex-col"
            >
              {/* COMPACT: Reduced mb-5 to mb-4 */}
              <div className="flex items-center gap-3 mb-4">
                <Building2 size={16} className="text-[#C9A44D]" />
                <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#C9A44D]">Corporate Office</p>
              </div>
              <p className="font-serif text-lg leading-relaxed text-white/80 max-w-md">
                12 C & D, 2nd Floor, Vasant Square Mall,<br />
                B-5 Vasant Kunj, New Delhi – 110070
              </p>
            </motion.div>

            {/* RERA Number */}
            <motion.div
              variants={fadeUp} custom={2} initial="hidden" whileInView="show" viewport={{ once: true }}
              className="flex flex-col"
            >
              <div className="flex items-center gap-3 mb-4">
                <Building2 size={16} className="text-[#C9A44D]" />
                <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#C9A44D]">RERA Number</p>
              </div>
              <p className="font-serif text-lg leading-relaxed text-white/80 max-w-sm">
                PRM/KA/RERA/1251/446/PR/210907/004501
              </p>
            </motion.div>

            {/* Site Address */}
            <motion.div
              variants={fadeUp} custom={3} initial="hidden" whileInView="show" viewport={{ once: true }}
              className="flex flex-col"
            >
              {/* COMPACT: Reduced mb-5 to mb-4 */}
              <div className="flex items-center gap-3 mb-4">
                <MapPin size={16} className="text-[#C9A44D]" />
                <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#C9A44D]">Site Address</p>
              </div>
              <p className="font-serif text-lg leading-relaxed text-white/80 max-w-md">
                RH Aerocity, Dharapur,<br />
                Palashbari Road, Assam – 781017
              </p>
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
          {/* COMPACT: Reduced py-12 to py-10 and gap-10 to gap-8 */}
          <div className="flex flex-col gap-8 py-10 lg:flex-row lg:items-center lg:justify-between">
            <nav className="flex flex-wrap gap-x-8 gap-y-4">
              {navLinks.map((link) => (
                <a key={link.name} href={link.href}
                  className="text-[11px] font-bold uppercase tracking-[0.28em] text-white/40 transition-all hover:text-[#C9A44D]">
                  {link.name}
                </a>
              ))}
            </nav>
            {/* WIDENED max-w-md to max-w-xl so it forces the quote into exactly 2 lines */}
            <p className="max-w-xl font-serif text-xl italic leading-snug text-[#C9A44D]/70 lg:text-right">
              "A home should not only shelter you. It should soften the day before you step inside."
            </p>
          </div>

          {/* Copyright */}
          {/* COMPACT: Reduced py-8 to py-6 and gap-6 to gap-5 */}
          <div className="flex flex-col items-start justify-between gap-5 border-t border-white/5 py-6 md:flex-row md:items-center">
            <div className="flex items-center gap-5">
              <div className="bg-white/90 rounded-md p-1.5 transition-transform hover:scale-105">
                <img src="/images/RANG HOMES-New1.webp" alt="Rang Homes" className="h-5 w-auto object-contain" />
              </div>
              <p className="text-[10px] uppercase tracking-[0.24em] text-white/20">
                © {currentYear} Aranya by Rang Homes.
              </p>
            </div>

          </div>
        </div>
      </div>

    </footer>
  );
}