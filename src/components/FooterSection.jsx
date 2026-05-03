import { motion } from "framer-motion";
import { Mail, MapPin, Phone, Globe, Building2, ArrowUpRight, CheckCircle2 } from "lucide-react";

/* ─── Data ──────────────────────────────────── */
const navLinks = [
  { name: "About",     href: "#experience" },
  { name: "Amenities", href: "#amenities"  },
  { name: "Location",  href: "#location"   },
  { name: "Plans",     href: "#plans"      },
  { name: "Gallery",   href: "#gallery"    },
];

const socialLinks = [
  {
    name: "Instagram", href: "#",
    icon: ({ size = 16 }) => (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <rect x="4" y="4" width="16" height="16" rx="4.5" stroke="currentColor" strokeWidth="1.8" />
        <circle cx="12" cy="12" r="3.4" stroke="currentColor" strokeWidth="1.8" />
        <circle cx="17.1" cy="6.9" r="1" fill="currentColor" />
      </svg>
    ),
  },
  {
    name: "Facebook", href: "#",
    icon: ({ size = 16 }) => (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M14.3 8.2V6.8c0-.7.5-1.1 1.2-1.1H17V3.1c-.8-.1-1.6-.1-2.4-.1-2.4 0-4 1.5-4 4.1v1.1H8v2.9h2.6V21h3.2v-9.9h2.7l.4-2.9h-3.1Z" fill="currentColor" />
      </svg>
    ),
  },
  {
    name: "X", href: "#",
    icon: ({ size = 16 }) => (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M17.53 3h3.28l-7.16 8.18L22.08 21h-6.6l-5.17-6.76L4.39 21H1.1l7.66-8.75L.68 3h6.77l4.67 6.18L17.53 3Zm-1.15 16.27h1.82L6.46 4.64H4.51l11.87 14.63Z" fill="currentColor" />
      </svg>
    ),
  },
];

const deliveredProjects = [
  {
    name: "Rang Homes Phase 1",
    location: "Dharapur, Guwahati",
    tag: "Completed",
    img: "/images/Aranya.webp",
  },
  {
    name: "Rang Homes Phase 2",
    location: "Dharapur, Guwahati",
    tag: "Completed",
    img: "/images/Cam-02_Revised.webp",
  },
  {
    name: "Rang Homes Punjabi Bagh",
    location: "New Delhi",
    tag: "Ultra Luxurious",
    img: "/images/Shot 15_V2.webp",
  },
];

const teamPartners = [
  { role: "Principal & Landscape Architect", name: "Confluence"       },
  { role: "MEP Architect",                   name: "AEPL"             },
  { role: "Structural Architect",            name: "S.P.A Consultants"},
  { role: "Local Architect",                 name: "On Record"        },
];

const fadeUp = {
  hidden: { opacity: 0, y: 36 },
  show: (i = 0) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: i * 0.1 },
  }),
};

/* ─── Sub-components ─────────────────────────── */

// Gold eyebrow label
function Label({ children }) {
  return (
    <p className="flex items-center gap-3 text-[10px] font-bold uppercase tracking-[0.42em] text-[#C9A44D]">
      <span className="h-px w-8 bg-[#C9A44D]" />
      {children}
    </p>
  );
}

/* ─── Main Component ──────────────────────────── */
export default function FooterSection() {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="footer" className="relative bg-[#06100b] text-[#F8F3E7] overflow-hidden">

      {/* ══════════════════════════════════════════
          HERO BANNER — full-bleed cinematic close
      ══════════════════════════════════════════ */}
      <div className="relative h-[70vh] min-h-[500px] overflow-hidden">
        {/* CSS fixed-background parallax — never shows black edges */}
        <div
          aria-hidden="true"
          style={{
            backgroundImage: 'url("/images/Shot_07_5KShot_07_5K.webp")',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundAttachment: 'fixed',
          }}
          className="absolute inset-0"
        />
        {/* Dark gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-black/40 to-[#06100b]" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-transparent to-transparent" />

        {/* Hero text */}
        <div className="absolute inset-0 flex flex-col justify-end px-6 pb-20 md:px-14 lg:px-20">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className="mb-4 flex items-center gap-3 text-[10px] font-bold uppercase tracking-[0.45em] text-[#C9A44D]">
              <span className="h-px w-8 bg-[#C9A44D]" /> The Story Continues
            </p>
            <h2 className="max-w-4xl font-serif text-5xl font-light leading-[1.05] text-white md:text-6xl lg:text-7xl">
              Come home to a place that remembers the{" "}
              <em className="not-italic text-[#C9A44D]">quiet parts</em> of you.
            </h2>
          </motion.div>
        </div>
      </div>

      {/* ══════════════════════════════════════════
          STORY — Developer narrative with image
      ══════════════════════════════════════════ */}
      <section className="relative px-6 py-24 md:px-14 lg:px-20">
        {/* faint radial glow */}
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_70%_50%_at_50%_0%,rgba(201,164,77,0.07),transparent)]" />

        <div className="relative mx-auto max-w-7xl">
          <div className="grid gap-16 lg:grid-cols-2 lg:items-center">

            {/* Left — image stack */}
            <motion.div
              variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }}
              className="relative"
            >
              {/* Main image */}
              <div className="relative overflow-hidden rounded-3xl aspect-[4/5]">
                <img
                  src="/images/Entrance Cam_rang Homes.webp"
                  alt="Aranya entrance"
                  className="h-full w-full object-cover transition duration-700 hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
              </div>
              {/* Floating accent card */}
              <div className="absolute -bottom-6 -right-4 md:-right-8 w-52 overflow-hidden rounded-2xl border border-white/15 bg-[#0b2117]/90 p-5 shadow-2xl backdrop-blur-xl">
                <p className="font-serif text-4xl font-light text-[#C9A44D]">600<span className="text-2xl">+</span></p>
                <p className="mt-1 text-[9px] font-bold uppercase tracking-[0.3em] text-white/50">Homes Delivered</p>
                <div className="mt-3 h-px bg-white/10" />
                <p className="mt-3 text-[9px] font-bold uppercase tracking-[0.3em] text-white/50">Across Guwahati & Delhi NCR</p>
              </div>
            </motion.div>

            {/* Right — story text */}
            <motion.div
              variants={fadeUp} custom={1} initial="hidden" whileInView="show" viewport={{ once: true }}
              className="lg:pl-8"
            >
              <Label>About the Developer</Label>

              {/* Logo + name */}
              <div className="mt-6 mb-8 flex items-center gap-4">
                <div className="rounded-xl bg-white p-2.5 shadow-lg shrink-0">
                  <img src="/images/RANG HOMES-New1.webp" alt="Indo Group Logo" className="h-9 w-auto object-contain" />
                </div>
                <div>
                  <h3 className="font-serif text-2xl font-light text-white">Indotech Infracon Pvt. Ltd.</h3>
                  <p className="text-[9px] font-bold uppercase tracking-[0.32em] text-[#C9A44D]/60 mt-0.5">Indo Group</p>
                </div>
              </div>

              <p className="text-[15px] font-light leading-8 text-white/70">
                A trusted name in the construction and development of group housing projects across Guwahati and Delhi NCR. Over the last <span className="text-white/90 font-normal">eight years</span>, INDO GROUP has grown steadily by delivering projects that combine thoughtful design, solid engineering and a strong commitment to timely execution.
              </p>
              <p className="mt-5 text-[15px] font-light leading-8 text-white/70">
                Built on a foundation of integrity and craftsmanship, every project reflects our belief that quality must be consistent, details must be deliberate, and every home must stand as a <span className="text-white/90 font-normal">long-term asset</span> for its residents.
              </p>

              {/* Stats row */}
              <div className="mt-10 grid grid-cols-3 gap-6 border-t border-white/10 pt-10">
                {[
                  { val: "8+",   label: "Years of Excellence"  },
                  { val: "600+", label: "Homes Delivered"      },
                  { val: "3",    label: "Landmark Projects"    },
                ].map(({ val, label }) => (
                  <div key={label}>
                    <p className="font-serif text-4xl font-light text-[#C9A44D]">{val}</p>
                    <p className="mt-1.5 text-[9px] font-bold uppercase tracking-[0.25em] text-white/40">{label}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          CONTACT CARDS — glass on dark
      ══════════════════════════════════════════ */}
      <section className="relative px-6 pb-24 md:px-14 lg:px-20">
        <div className="mx-auto max-w-7xl">

          {/* Full-bleed image with glass cards on top */}
          <div className="relative overflow-hidden rounded-[2.5rem]">
            <img
              src="/images/Club Cam_rang Homes_rev.webp"
              alt="Club Aranya"
              className="h-[520px] w-full object-cover object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#06100b]/90 via-[#06100b]/60 to-[#06100b]/20" />

            {/* Cards over image */}
            <div className="absolute inset-0 flex flex-col justify-center px-8 md:px-12 lg:px-16">
              <motion.div
                variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }}
                className="mb-8"
              >
                <Label>Get in Touch</Label>
              </motion.div>

              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 max-w-4xl">
                {/* Card 1 — Aranya site */}
                <motion.div
                  variants={fadeUp} custom={1} initial="hidden" whileInView="show" viewport={{ once: true }}
                  className="rounded-2xl border border-white/15 bg-white/8 p-6 backdrop-blur-2xl"
                >
                  <p className="mb-3 text-[9px] font-bold uppercase tracking-[0.3em] text-[#C9A44D]">Site Office</p>
                  <div className="flex items-start gap-3 mb-4">
                    <MapPin size={14} className="mt-0.5 shrink-0 text-[#C9A44D]" />
                    <p className="text-sm font-light leading-7 text-white/80">
                      RH Aerocity, Dharapur,<br />Palashbari Road, Assam – 781017
                    </p>
                  </div>
                  <a href="tel:18001201255555" className="flex items-center gap-2 text-sm text-white/60 hover:text-[#C9A44D] transition">
                    <Phone size={13} /> 1800 12012 5555
                  </a>
                </motion.div>

                {/* Card 2 — Corporate */}
                <motion.div
                  variants={fadeUp} custom={2} initial="hidden" whileInView="show" viewport={{ once: true }}
                  className="rounded-2xl border border-white/15 bg-white/8 p-6 backdrop-blur-2xl"
                >
                  <p className="mb-3 text-[9px] font-bold uppercase tracking-[0.3em] text-[#C9A44D]">Corporate Office</p>
                  <div className="flex items-start gap-3 mb-4">
                    <Building2 size={14} className="mt-0.5 shrink-0 text-[#C9A44D]" />
                    <p className="text-sm font-light leading-7 text-white/80">
                      Vasant Square Mall,<br />B-5 Vasant Kunj, New Delhi – 110070
                    </p>
                  </div>
                  <a href="tel:01171834410" className="flex items-center gap-2 text-sm text-white/60 hover:text-[#C9A44D] transition">
                    <Phone size={13} /> 011-71834410/11
                  </a>
                </motion.div>

                {/* Card 3 — Email / Web */}
                <motion.div
                  variants={fadeUp} custom={3} initial="hidden" whileInView="show" viewport={{ once: true }}
                  className="rounded-2xl border border-white/15 bg-white/8 p-6 backdrop-blur-2xl"
                >
                  <p className="mb-3 text-[9px] font-bold uppercase tracking-[0.3em] text-[#C9A44D]">Connect</p>
                  <div className="space-y-3">
                    <a href="mailto:info@indogroup.in" className="flex items-center gap-3 text-sm text-white/80 hover:text-[#C9A44D] transition">
                      <Mail size={14} /> info@indogroup.in
                    </a>
                    <a href="https://www.indogroup.in" target="_blank" rel="noreferrer" className="flex items-center gap-3 text-sm text-white/80 hover:text-[#C9A44D] transition">
                      <Globe size={14} /> www.indogroup.in
                    </a>
                  </div>
                  {/* Social */}
                  <div className="mt-6 flex gap-2">
                    {socialLinks.map((s) => {
                      const Icon = s.icon;
                      return (
                        <a key={s.name} href={s.href} aria-label={s.name}
                          className="flex h-9 w-9 items-center justify-center rounded-full border border-white/15 text-white/50 hover:border-[#C9A44D] hover:text-[#C9A44D] transition">
                          <Icon size={16} />
                        </a>
                      );
                    })}
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          DELIVERED PROJECTS — image cards
      ══════════════════════════════════════════ */}
      <section className="px-6 pb-24 md:px-14 lg:px-20">
        <div className="mx-auto max-w-7xl">
          <motion.div
            variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }}
            className="mb-10 flex items-end justify-between"
          >
            <div>
              <Label>Our Legacy</Label>
              <h3 className="mt-4 font-serif text-4xl font-light text-white">Delivered Projects</h3>
            </div>
            <p className="hidden md:block text-sm font-light text-white/40 max-w-xs text-right leading-7">
              Every project is a promise kept — communities delivered with precision and care.
            </p>
          </motion.div>

          <div className="grid gap-5 sm:grid-cols-3">
            {deliveredProjects.map((proj, i) => (
              <motion.div
                key={proj.name}
                variants={fadeUp} custom={i * 0.15 + 0.5}
                initial="hidden" whileInView="show" viewport={{ once: true }}
                className="group relative overflow-hidden rounded-2xl aspect-[3/4] cursor-pointer"
              >
                <img
                  src={proj.img}
                  alt={proj.name}
                  className="h-full w-full object-cover transition duration-700 group-hover:scale-108"
                />
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent" />

                {/* Content */}
                <div className="absolute inset-0 flex flex-col justify-end p-6">
                  <span className="mb-3 self-start rounded-full border border-[#C9A44D]/50 px-3 py-1 text-[8px] font-bold uppercase tracking-widest text-[#C9A44D]">
                    {proj.tag}
                  </span>
                  <h4 className="font-serif text-2xl font-light text-white leading-tight">{proj.name}</h4>
                  <div className="mt-2 flex items-center gap-2 text-sm text-white/50">
                    <MapPin size={12} />{proj.location}
                  </div>
                  <CheckCircle2 size={16} className="absolute right-5 top-5 text-[#C9A44D]/50 opacity-0 group-hover:opacity-100 transition duration-300" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          DESIGN TEAM — minimal dark grid
      ══════════════════════════════════════════ */}
      <section className="px-6 pb-20 md:px-14 lg:px-20">
        <div className="mx-auto max-w-7xl">
          <motion.div
            variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }}
            className="mb-8"
          >
            <Label>Transforming Spaces</Label>
            <h3 className="mt-4 font-serif text-3xl font-light text-white">Design &amp; Consulting Team</h3>
          </motion.div>
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {teamPartners.map((t, i) => (
              <motion.div
                key={t.role}
                variants={fadeUp} custom={i * 0.1 + 0.3}
                initial="hidden" whileInView="show" viewport={{ once: true }}
                className="group flex items-start gap-4 rounded-2xl border border-white/8 bg-white/[0.03] p-5 hover:border-[#C9A44D]/25 hover:bg-white/[0.06] transition"
              >
                <div className="mt-1 h-6 w-6 shrink-0 rounded-full border border-[#C9A44D]/40 flex items-center justify-center">
                  <ArrowUpRight size={12} className="text-[#C9A44D]/60 group-hover:text-[#C9A44D] transition" />
                </div>
                <div>
                  <p className="mb-1 text-[8px] font-bold uppercase tracking-[0.28em] text-[#C9A44D]/60">{t.role}</p>
                  <p className="font-serif text-lg text-white/85">{t.name}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          DISCLAIMER
      ══════════════════════════════════════════ */}
      <section className="px-6 pb-16 md:px-14 lg:px-20">
        <div className="mx-auto max-w-7xl rounded-2xl border border-white/6 bg-white/[0.02] px-8 py-7">
          <p className="mb-2 text-[9px] font-bold uppercase tracking-[0.35em] text-[#C9A44D]/50">Disclaimer</p>
          <p className="text-[11px] font-light leading-7 text-white/30">
            The floor plans are as per the approved plans and specifications as of date. These plans may vary by +/- 3% and are subject to changes. The furniture, accessories, etc. shown in the plans does not form a part of the offering. Customers are requested to visit the site office and apprise themselves of all the necessary details prior to making any purchase decisions. Views &amp; photographs used are artist's impression for illustration purpose only. The information, features, offerings and other details herein are only indicative and the developer/owner reserves its right to change any or all of these in its discretion subject to grant of approval from relevant authorities. Costs, designs and facilities may be subject to change without notice.
          </p>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          BOTTOM BAR — nav + quote + copyright
      ══════════════════════════════════════════ */}
      <div className="border-t border-white/8 px-6 md:px-14 lg:px-20">
        <div className="mx-auto max-w-7xl">
          {/* Quote + nav */}
          <div className="flex flex-col gap-8 py-10 md:flex-row md:items-center md:justify-between">
            <nav className="flex flex-wrap gap-x-7 gap-y-3">
              {navLinks.map((link) => (
                <a key={link.name} href={link.href}
                  className="text-[11px] font-bold uppercase tracking-[0.24em] text-white/38 transition hover:text-[#C9A44D]">
                  {link.name}
                </a>
              ))}
            </nav>
            <p className="max-w-sm font-serif text-lg italic leading-snug text-[#C9A44D]/70">
              "A home should not only shelter you. It should soften the day before you step inside."
            </p>
          </div>

          {/* Copyright */}
          <div className="flex flex-col items-start justify-between gap-4 border-t border-white/6 py-6 md:flex-row md:items-center">
            <div className="flex items-center gap-4">
              <div className="bg-white rounded-md p-1.5">
                <img src="/images/RANG HOMES-New1.webp" alt="Rang Homes" className="h-5 w-auto object-contain" />
              </div>
              <p className="text-[10px] uppercase tracking-[0.22em] text-white/30">
                © {currentYear} Aranya by Rang Homes. All Rights Reserved.
              </p>
            </div>
            <a href="https://www.indogroup.in" target="_blank" rel="noreferrer"
              className="text-[10px] uppercase tracking-[0.22em] text-white/30 hover:text-[#C9A44D] transition flex items-center gap-1.5">
              www.indogroup.in <ArrowUpRight size={10} />
            </a>
          </div>
        </div>
      </div>

    </footer>
  );
}
