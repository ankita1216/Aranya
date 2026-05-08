import { motion } from "framer-motion";
import { MapPin, CheckCircle2 } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  show: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1], delay: i * 0.1 },
  }),
};

const deliveredProjects = [
  { name: "Rang Homes Phase 1", location: "Dharapur, Guwahati", tag: "Completed" },
  { name: "Rang Homes Phase 2", location: "Dharapur, Guwahati", tag: "Completed" },
  { name: "Rang Homes Punjabi Bagh", location: "New Delhi", tag: "Ultra Luxurious" },
];

export default function DeveloperSection() {
  return (
    <section
      id="developer"
      className="relative overflow-hidden bg-[#f8f0df] px-6 py-12 text-[#112018] md:px-12 lg:px-20"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_-10%,rgba(64,114,102,0.05),transparent)]" />

      <div className="relative z-10 mx-auto max-w-7xl">

        {/* ── Header row ── */}
        <div className="mb-8 flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
          <div className="w-full">
            <motion.p
              variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }}
              className="mb-3 flex items-center gap-3 text-[10px] font-bold uppercase tracking-[0.42em] text-[#1f4d3f]"
            >
              <span className="h-[1px] w-9 bg-[#1f4d3f]" />
              About the Developer
            </motion.p>
            {/* CHANGED: Moved the <br /> after "are" so it balances perfectly into 2 lines */}
            <motion.h2
              variants={fadeUp} custom={1} initial="hidden" whileInView="show" viewport={{ once: true }}
              className="w-full font-serif text-4xl font-light leading-tight text-[#112018] md:text-5xl"
            >
              Building communities people are <br className="hidden md:block" />
              proud to call <span className="italic text-[#1f4d3f]">home</span>
            </motion.h2>
          </div>
        </div>

        {/* ── Developer Card ── */}
        <motion.div
          variants={fadeUp} custom={2} initial="hidden" whileInView="show" viewport={{ once: true }}
          className="overflow-hidden rounded-[2rem] border border-[#7f917b]/30 bg-white/40 shadow-[0_28px_90px_rgba(114,129,110,0.12)] backdrop-blur-xl"
        >
          <div className="grid gap-px bg-[#7f917b]/20 lg:grid-cols-[1.5fr_1fr]">

            {/* Left — About */}
            <div className="bg-white/40 p-6 md:p-7 backdrop-blur-md">
              <div className="mb-4 inline-block rounded-xl bg-white p-2.5 shadow-md">
                <img
                  src="/images/RANG HOMES-New1.webp"
                  alt="Indo Group / Rang Homes Logo"
                  className="h-7 w-auto object-contain"
                />
              </div>

              <div className="flex flex-col gap-5 xl:flex-row">
                <div className="flex-1">
                  <h3 className="mb-1 font-serif text-2xl font-light text-[#1f4d3f]">
                    Indotech Infracon Pvt. Ltd.
                  </h3>
                  <p className="mb-3 text-[10px] font-bold uppercase tracking-[0.3em] text-[#112018]/40">
                    Indo Group
                  </p>
                  <p className="text-sm font-medium leading-7 text-[#112018]/80">
                    A trusted name in the construction and development of group housing projects across
                    Guwahati and Delhi NCR. Over the last eight years, INDO GROUP has grown steadily by
                    delivering projects that combine thoughtful design, solid engineering and a strong
                    commitment to timely execution.
                  </p>
                  <p className="mt-2.5 text-sm font-medium leading-7 text-[#112018]/80">
                    Built on a foundation of integrity and craftsmanship, we continue to create high-class
                    housing projects — planned with care and delivered with precision. From layout to
                    lifestyle amenities, every aspect is meticulously considered to ensure comfort,
                    convenience and long-term value.
                  </p>
                </div>

                {/* Stats column */}
                <div className="flex gap-5 border-t border-[#7f917b]/20 pt-4 xl:flex-col xl:justify-center xl:border-l xl:border-t-0 xl:pl-6 xl:pt-0">
                  {[
                    { val: "8+", label: "Years" },
                    { val: "600+", label: "Homes Delivered" },
                    { val: "3", label: "Landmark Projects" },
                  ].map(({ val, label }) => (
                    <div key={label} className="text-center xl:text-left">
                      <p className="font-serif text-3xl font-light text-[#1f4d3f]">{val}</p>
                      <p className="mt-0.5 text-[9px] font-bold uppercase tracking-[0.25em] text-[#112018]/50">{label}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right — Delivered Projects */}
            <div className="bg-white/40 p-6 md:p-7 backdrop-blur-md">
              <p className="mb-4 text-[10px] font-bold uppercase tracking-[0.38em] text-[#1f4d3f]">
                Delivered Projects
              </p>

              <div className="flex flex-col gap-2.5">
                {deliveredProjects.map((proj) => (
                  <div
                    key={proj.name}
                    className="group relative overflow-hidden rounded-2xl border border-[#7f917b]/20 bg-white/50 p-4 transition hover:border-[#1f4d3f]/30 hover:bg-white/80"
                  >
                    <span className="mb-1.5 inline-block rounded-full border border-[#1f4d3f]/40 px-3 py-0.5 text-[8px] font-bold uppercase tracking-widest text-[#1f4d3f]">
                      {proj.tag}
                    </span>
                    <h4 className="font-serif text-lg font-light text-[#112018]">{proj.name}</h4>
                    <div className="mt-1 flex items-center gap-2 text-[12px] text-[#112018]/50">
                      <MapPin size={11} />
                      {proj.location}
                    </div>
                    <CheckCircle2
                      size={16}
                      className="absolute right-4 top-4 text-[#1f4d3f]/30 transition group-hover:text-[#1f4d3f]/60"
                    />
                  </div>
                ))}
              </div>
            </div>

          </div>
        </motion.div>

      </div>
    </section>
  );
}