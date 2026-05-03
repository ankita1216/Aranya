import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Globe, Building2, CheckCircle2 } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  show: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1], delay: i * 0.1 },
  }),
};

const deliveredProjects = [
  {
    name: "Rang Homes Phase 1",
    location: "Dharapur, Guwahati",
    tag: "Completed",
  },
  {
    name: "Rang Homes Phase 2",
    location: "Dharapur, Guwahati",
    tag: "Completed",
  },
  {
    name: "Rang Homes Punjabi Bagh",
    location: "New Delhi",
    tag: "Ultra Luxurious",
  },
];

const teamPartners = [
  { role: "Principal & Landscape Architect", name: "Confluence" },
  { role: "MEP Architect", name: "AEPL" },
  { role: "Structural Architect", name: "S.P.A Consultants" },
  { role: "Local Architect", name: "On Record" },
];

export default function DeveloperSection() {
  return (
    <section
      id="developer"
      className="relative overflow-hidden bg-[#08180f] px-6 py-20 text-[#F8F3E7] md:px-12 lg:px-20"
    >
      {/* Subtle texture gradient */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_-10%,rgba(201,164,77,0.07),transparent)]" />

      <div className="relative z-10 mx-auto max-w-7xl">
        {/* ── Section Label ── */}
        <motion.p
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="mb-4 flex items-center gap-3 text-[10px] font-bold uppercase tracking-[0.42em] text-[#C9A44D]"
        >
          <span className="h-[1px] w-9 bg-[#C9A44D]" />
          About the Developer
        </motion.p>

        {/* ── Headline ── */}
        <motion.h2
          variants={fadeUp}
          custom={1}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="mb-14 max-w-3xl font-serif text-4xl font-light leading-tight text-white md:text-5xl"
        >
          Building communities people are proud to call{" "}
          <span className="italic text-[#C9A44D]">home.</span>
        </motion.h2>

        {/* ── DEVELOPER CARD ── */}
        <div className="mb-14 overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.04] shadow-[0_28px_90px_rgba(0,0,0,0.3)] backdrop-blur-md">
          <div className="grid gap-px bg-white/10 lg:grid-cols-[1.4fr_1fr]">
            {/* Left — About */}
            <div className="bg-[#0b2117]/95 p-8 md:p-10">
              {/* Logo badge */}
              <div className="mb-7 inline-block rounded-xl bg-white p-3 shadow-lg">
                <img
                  src="/images/RANG HOMES-New1.webp"
                  alt="Indo Group / Rang Homes Logo"
                  className="h-10 w-auto object-contain"
                />
              </div>

              <h3 className="mb-1 font-serif text-2xl font-light text-[#C9A44D]">
                Indotech Infracon Pvt. Ltd.
              </h3>
              <p className="mb-6 text-[10px] font-bold uppercase tracking-[0.3em] text-white/35">
                Indo Group
              </p>

              <p className="text-sm font-light leading-8 text-white/70">
                A trusted name in the construction and development of group
                housing projects across Guwahati and Delhi NCR. Over the last
                eight years, INDO GROUP has grown steadily by delivering
                projects that combine thoughtful design, solid engineering and a
                strong commitment to timely execution.
              </p>
              <p className="mt-4 text-sm font-light leading-8 text-white/70">
                Built on a foundation of integrity and craftsmanship, we
                continue to create high-class housing projects — planned with
                care and delivered with precision. From layout to lifestyle
                amenities, every aspect is meticulously considered to ensure
                comfort, convenience and long-term value.
              </p>

              {/* Stats row */}
              <div className="mt-8 grid grid-cols-3 gap-4 border-t border-white/10 pt-8">
                {[
                  { val: "8+", label: "Years" },
                  { val: "600+", label: "Homes Delivered" },
                  { val: "3", label: "Landmark Projects" },
                ].map(({ val, label }) => (
                  <div key={label} className="text-center">
                    <p className="font-serif text-3xl font-light text-[#C9A44D]">
                      {val}
                    </p>
                    <p className="mt-1 text-[9px] font-bold uppercase tracking-[0.25em] text-white/40">
                      {label}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Right — Contact */}
            <div className="bg-[#0b2117]/95 p-8 md:p-10">
              <h4 className="mb-7 font-serif text-xl font-light text-white">
                Get in Touch
              </h4>

              {/* Corporate Office */}
              <div className="mb-6">
                <p className="mb-3 text-[9px] font-bold uppercase tracking-[0.3em] text-[#C9A44D]">
                  Corporate Office
                </p>
                <div className="flex items-start gap-3">
                  <Building2 size={15} className="mt-0.5 shrink-0 text-[#C9A44D]" />
                  <p className="text-sm font-light leading-7 text-white/65">
                    12 C &amp; D, 2nd Floor, Vasant Square Mall,
                    <br />
                    B-5 Vasant Kunj, New Delhi – 110070
                  </p>
                </div>
                <div className="mt-3 flex flex-col gap-2 pl-[22px]">
                  <a
                    href="tel:01171834410"
                    className="flex items-center gap-2 text-sm text-white/55 transition hover:text-[#C9A44D]"
                  >
                    <Phone size={13} />
                    011-71834410/11
                  </a>
                  <a
                    href="mailto:info@indogroup.in"
                    className="flex items-center gap-2 text-sm text-white/55 transition hover:text-[#C9A44D]"
                  >
                    <Mail size={13} />
                    info@indogroup.in
                  </a>
                  <a
                    href="https://www.indogroup.in"
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-2 text-sm text-white/55 transition hover:text-[#C9A44D]"
                  >
                    <Globe size={13} />
                    www.indogroup.in
                  </a>
                </div>
              </div>

              {/* Divider */}
              <div className="my-6 h-px bg-white/10" />

              {/* Site Address */}
              <div>
                <p className="mb-3 text-[9px] font-bold uppercase tracking-[0.3em] text-[#C9A44D]">
                  Site Address
                </p>
                <div className="flex items-start gap-3">
                  <MapPin size={15} className="mt-0.5 shrink-0 text-[#C9A44D]" />
                  <p className="text-sm font-light leading-7 text-white/65">
                    RH Aerocity, Dharapur,
                    <br />
                    Palashbari Road, Assam – 781017
                  </p>
                </div>
                <div className="mt-3 pl-[22px]">
                  <a
                    href="tel:18001201255555"
                    className="flex items-center gap-2 text-sm text-white/55 transition hover:text-[#C9A44D]"
                  >
                    <Phone size={13} />
                    1800 12012 5555
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ── DELIVERED PROJECTS ── */}
        <motion.div
          variants={fadeUp}
          custom={2}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="mb-14"
        >
          <p className="mb-7 text-[10px] font-bold uppercase tracking-[0.38em] text-[#C9A44D]">
            Delivered Projects
          </p>
          <div className="grid gap-4 sm:grid-cols-3">
            {deliveredProjects.map((proj, i) => (
              <motion.div
                key={proj.name}
                variants={fadeUp}
                custom={i * 0.15 + 2.5}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.04] p-7 transition hover:border-[#C9A44D]/30 hover:bg-white/[0.07]"
              >
                <span className="mb-4 inline-block rounded-full border border-[#C9A44D]/40 px-3 py-1 text-[8px] font-bold uppercase tracking-widest text-[#C9A44D]">
                  {proj.tag}
                </span>
                <h4 className="font-serif text-xl font-light text-white">
                  {proj.name}
                </h4>
                <div className="mt-3 flex items-center gap-2 text-sm text-white/45">
                  <MapPin size={12} />
                  {proj.location}
                </div>
                <CheckCircle2
                  size={18}
                  className="absolute right-6 top-6 text-[#C9A44D]/30 transition group-hover:text-[#C9A44D]/60"
                />
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* ── TEAM ── */}
        <motion.div
          variants={fadeUp}
          custom={4}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="mb-14"
        >
          <p className="mb-7 text-[10px] font-bold uppercase tracking-[0.38em] text-[#C9A44D]">
            Design &amp; Consulting Team
          </p>
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {teamPartners.map((t) => (
              <div
                key={t.role}
                className="rounded-xl border border-white/8 bg-white/[0.035] px-5 py-4"
              >
                <p className="mb-1 text-[8px] font-bold uppercase tracking-[0.28em] text-[#C9A44D]/70">
                  {t.role}
                </p>
                <p className="font-serif text-lg text-white/85">{t.name}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* ── DISCLAIMER ── */}
        <div className="rounded-2xl border border-white/8 bg-white/[0.025] p-7 md:p-9">
          <p className="mb-3 text-[9px] font-bold uppercase tracking-[0.35em] text-[#C9A44D]/70">
            Disclaimer
          </p>
          <p className="text-[11px] font-light leading-7 text-white/38">
            The floor plans are as per the approved plans and specifications as
            of date. These plans may vary by +/- 3% and are subject to changes.
            The furniture, accessories, etc. shown in the plans does not form a
            part of the offering. Customers are requested to visit the site
            office and apprise themselves of all the necessary details prior to
            making any purchase decisions. Views &amp; photographs used in this
            brochure are artist's impression for illustration purpose only. The
            information, features, offerings and other details herein are only
            indicative and the developer/owner reserves its right to change any
            or all of these in its discretion subject to grant of approval from
            relevant authorities. This printed material does not constitute an
            offer, an invitation to an offer and/or commitment of any nature
            between the developer/owner and recipients. Costs, designs and
            facilities and/or specifications may be subject to change without
            notice. Any decorative item and furniture shown in any
            unit/private terrace/private area are not a part of our offering.
          </p>
        </div>
      </div>
    </section>
  );
}
