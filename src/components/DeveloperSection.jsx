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

            <div className="bg-[#0b2117]/95 p-8 md:p-10">
              <p className="mb-7 text-[10px] font-bold uppercase tracking-[0.38em] text-[#C9A44D]">
                Delivered Projects
              </p>
              
              <div className="flex flex-col gap-4">
                {deliveredProjects.map((proj) => (
                  <div
                    key={proj.name}
                    className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.04] p-6 transition hover:border-[#C9A44D]/30 hover:bg-white/[0.07]"
                  >
                    <span className="mb-3 inline-block rounded-full border border-[#C9A44D]/40 px-3 py-0.5 text-[8px] font-bold uppercase tracking-widest text-[#C9A44D]">
                      {proj.tag}
                    </span>
                    <h4 className="font-serif text-lg font-light text-white">
                      {proj.name}
                    </h4>
                    <div className="mt-2 flex items-center gap-2 text-[12px] text-white/45">
                      <MapPin size={11} />
                      {proj.location}
                    </div>
                    <CheckCircle2
                      size={16}
                      className="absolute right-5 top-5 text-[#C9A44D]/30 transition group-hover:text-[#C9A44D]/60"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>


      </div>
    </section>
  );
}
