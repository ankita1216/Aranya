import { useState } from "react";
import { motion } from "framer-motion";
import { Send, Phone, Mail, MapPin, CheckCircle2 } from "lucide-react";
import { useNavigate } from "react-router-dom";

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: (i = 0) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1], delay: i * 0.08 },
  }),
};

const inputCls =
  "w-full rounded-xl border border-white/15 bg-white/8 px-4 py-3.5 text-sm text-white placeholder:text-white/35 outline-none transition-all duration-200 focus:border-[#C9A44D]/60 focus:bg-white/12 backdrop-blur-sm";

const selectCls =
  "w-full rounded-xl border border-white/15 bg-[#0f2318] px-4 py-3.5 text-sm text-white outline-none transition-all duration-200 focus:border-[#C9A44D]/60 appearance-none cursor-pointer";

const contactInfo = [
  { icon: Phone, label: "Toll Free", value: "1800 12012 5555", href: "tel:18001201255555" },
  { icon: Mail,  label: "Email",     value: "info@indogroup.in", href: "mailto:info@indogroup.in" },
  { icon: MapPin,label: "Site",      value: "RH Aerocity, Dharapur, Assam", href: "#location" },
];

export default function ContactSection() {
  const navigate = useNavigate();
  const [submitted, setSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [form, setForm] = useState({
    name: "", phone: "", email: "", requirement: "", time: "", message: "",
  });

  const set = (k) => (e) => setForm((p) => ({ ...p, [k]: e.target.value }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    await new Promise((r) => setTimeout(r, 600));
    console.log("Contact form:", form);
    setIsLoading(false);
    setSubmitted(true);
    setTimeout(() => navigate("/thank-you"), 1200);
  };

  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-[#08180f] px-6 py-24 text-white md:px-12 lg:px-20"
    >
      {/* Background imagery */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-20"
        style={{
          backgroundImage: 'url("/images/Pool Cam.webp")',
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
        }}
      />
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#08180f]/80 via-[#08180f]/70 to-[#08180f]" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_70%_60%_at_50%_0%,rgba(201,164,77,0.08),transparent)]" />

      <div className="relative z-10 mx-auto max-w-7xl">

        {/* ── Header ── */}
        <div className="mb-16 grid gap-10 lg:grid-cols-[1fr_auto] lg:items-end">
          <motion.div
            variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }}
          >
            <p className="mb-5 flex items-center gap-3 text-[10px] font-bold uppercase tracking-[0.42em] text-[#C9A44D]">
              <span className="h-px w-8 bg-[#C9A44D]" />
              Begin Your Journey
            </p>
            <h2 className="font-serif text-4xl font-light leading-tight text-white md:text-5xl lg:text-6xl">
              Let's find your{" "}
              <em className="not-italic text-[#C9A44D]">perfect home</em>
              <br className="hidden md:block" /> at Aranya.
            </h2>
          </motion.div>

          {/* Contact quick-links */}
          <motion.div
            variants={fadeUp} custom={1} initial="hidden" whileInView="show" viewport={{ once: true }}
            className="flex flex-col gap-3 lg:items-end"
          >
            {contactInfo.map(({ icon: Icon, label, value, href }) => (
              <a key={label} href={href}
                className="flex items-center gap-3 group"
              >
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-white/15 bg-white/5 text-[#C9A44D] group-hover:border-[#C9A44D]/40 transition">
                  <Icon size={15} />
                </span>
                <div className="lg:text-right">
                  <p className="text-[8px] font-bold uppercase tracking-[0.3em] text-white/40">{label}</p>
                  <p className="text-sm text-white/75 group-hover:text-[#C9A44D] transition">{value}</p>
                </div>
              </a>
            ))}
          </motion.div>
        </div>

        {/* ── Main grid ── */}
        <div className="grid gap-8 lg:grid-cols-[1fr_420px] lg:items-start">

          {/* ── Form card ── */}
          <motion.div
            variants={fadeUp} custom={2} initial="hidden" whileInView="show" viewport={{ once: true }}
            className="overflow-hidden rounded-3xl border border-white/10 bg-white/[0.04] shadow-[0_32px_100px_rgba(0,0,0,0.4)] backdrop-blur-xl"
          >
            {/* Card top bar */}
            <div className="flex items-center justify-between border-b border-white/8 px-8 py-5">
              <p className="text-[10px] font-bold uppercase tracking-[0.38em] text-[#C9A44D]">
                Contact Us
              </p>
              <div className="flex gap-1.5">
                {[0,1,2].map(i => (
                  <span key={i} className="h-2 w-2 rounded-full bg-white/15" />
                ))}
              </div>
            </div>

            {submitted ? (
              <div className="flex flex-col items-center justify-center gap-4 px-8 py-20 text-center">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: "spring", stiffness: 200 }}
                >
                  <CheckCircle2 size={52} className="text-[#C9A44D]" />
                </motion.div>
                <p className="font-serif text-2xl text-white">We'll be in touch soon.</p>
                <p className="text-sm text-white/50">Redirecting to confirmation…</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="grid gap-5 p-8">
                {/* Row 1 */}
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="flex flex-col gap-2">
                    <label className="text-[9px] font-bold uppercase tracking-[0.3em] text-white/40">Full Name *</label>
                    <input required type="text" placeholder="Your full name"
                      value={form.name} onChange={set("name")} className={inputCls} />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="text-[9px] font-bold uppercase tracking-[0.3em] text-white/40">Phone *</label>
                    <input required type="tel" placeholder="10-digit number"
                      value={form.phone} onChange={set("phone")} className={inputCls} />
                  </div>
                </div>

                {/* Row 2 */}
                <div className="flex flex-col gap-2">
                  <label className="text-[9px] font-bold uppercase tracking-[0.3em] text-white/40">Email Address *</label>
                  <input required type="email" placeholder="your@email.com"
                    value={form.email} onChange={set("email")} className={inputCls} />
                </div>

                {/* Row 3 */}
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="flex flex-col gap-2">
                    <label className="text-[9px] font-bold uppercase tracking-[0.3em] text-white/40">Requirement</label>
                    <select value={form.requirement} onChange={set("requirement")} className={selectCls}>
                      <option value="">Select BHK</option>
                      <option value="2bhk">2 BHK</option>
                      <option value="3bhk">3 BHK</option>
                      <option value="4bhk">4 BHK</option>
                      <option value="villa">Villa / Penthouse</option>
                    </select>
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="text-[9px] font-bold uppercase tracking-[0.3em] text-white/40">Best Time to Call</label>
                    <select value={form.time} onChange={set("time")} className={selectCls}>
                      <option value="">Any time</option>
                      <option value="morning">Morning (9 AM – 12 PM)</option>
                      <option value="afternoon">Afternoon (12 – 4 PM)</option>
                      <option value="evening">Evening (4 – 7 PM)</option>
                    </select>
                  </div>
                </div>

                {/* Row 4 — message */}
                <div className="flex flex-col gap-2">
                  <label className="text-[9px] font-bold uppercase tracking-[0.3em] text-white/40">Message (optional)</label>
                  <textarea rows={3} placeholder="Any specific questions or preferences…"
                    value={form.message} onChange={set("message")}
                    className={`${inputCls} resize-none`} />
                </div>

                {/* Submit */}
                <motion.button
                  type="submit"
                  disabled={isLoading}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="mt-2 flex w-full items-center justify-center gap-2.5 rounded-xl py-4 text-[11px] font-bold uppercase tracking-[0.22em] transition-all disabled:opacity-60"
                  style={{
                    background: "linear-gradient(135deg, #C9A44D, #b8903c)",
                    color: "#0f2318",
                    boxShadow: "0 4px 20px rgba(201,164,77,0.3)",
                  }}
                >
                  {isLoading ? (
                    <span className="h-4 w-4 rounded-full border-2 border-[#0f2318]/30 border-t-[#0f2318] animate-spin" />
                  ) : (
                    <>Confirm Enquiry <Send size={14} /></>
                  )}
                </motion.button>

                <p className="text-center text-[10px] text-white/25">
                  Your information is secure and will not be shared.
                </p>
              </form>
            )}
          </motion.div>

          {/* ── Right panel — project highlights ── */}
          <motion.div
            variants={fadeUp} custom={3} initial="hidden" whileInView="show" viewport={{ once: true }}
            className="flex flex-col gap-5"
          >
            {/* Pool image card */}
            <div className="relative overflow-hidden rounded-3xl aspect-[4/3]">
              <img
                src="/images/Pool Cam.webp"
                alt="Aranya pool"
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
              <div className="absolute bottom-5 left-5 right-5">
                <p className="text-[9px] font-bold uppercase tracking-[0.32em] text-[#C9A44D]">Club Aranya</p>
                <p className="mt-1 font-serif text-xl text-white">34m × 8.4m Swimming Pool</p>
              </div>
            </div>

            {/* Key highlights */}
            <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur-md">
              <p className="mb-5 text-[9px] font-bold uppercase tracking-[0.35em] text-[#C9A44D]">
                Project Highlights
              </p>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { val: "2 Towers",  sub: "G+9 & G+10"      },
                  { val: "257 Units", sub: "2, 3 & 4 BHK"    },
                  { val: "69%",       sub: "Green Open Space" },
                  { val: "16,000+",   sub: "Sq ft Club"       },
                ].map(({ val, sub }) => (
                  <div key={sub} className="border-t border-white/10 pt-4">
                    <p className="font-serif text-2xl font-light text-[#C9A44D]">{val}</p>
                    <p className="mt-1 text-[9px] font-bold uppercase tracking-[0.22em] text-white/40">{sub}</p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
