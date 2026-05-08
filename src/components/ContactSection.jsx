import { useState } from "react";
import { motion } from "framer-motion";
import { Send, CheckCircle2 } from "lucide-react";
import { useNavigate } from "react-router-dom";

const fadeUp = {
  hidden: { opacity: 0, y: 15 },
  show: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1], delay: i * 0.05 },
  }),
};

const inputCls =
  "w-full rounded-md border-b-2 border-transparent bg-[#f4eee0] px-4 py-2.5 text-sm text-[#112018] placeholder:text-[#112018]/40 outline-none transition-all duration-200 focus:border-[#407266] focus:bg-white shadow-inner";

const selectCls =
  "w-full rounded-md border-b-2 border-transparent bg-[#f4eee0] px-4 py-2.5 text-sm text-[#112018] outline-none transition-all duration-200 focus:border-[#407266] focus:bg-white appearance-none cursor-pointer shadow-inner select-arrow-dark";

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
      className="relative bg-[#305242] pt-14 pb-14 md:pt-20 md:pb-24 text-white"
    >
      <div className="mx-auto w-full max-w-[1440px] px-5 sm:px-8 lg:px-12">

        {/* ── Header bar ── */}
        <motion.div
          variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }}
          className="mb-14 flex flex-col md:flex-row md:items-end md:justify-between gap-8 pb-8 border-b border-white/10"
        >
          <div>
            <p className="mb-1.5 flex items-center gap-3 text-[10px] font-bold uppercase tracking-[0.3em] text-[#C9A44D]">
              <span className="h-px w-5 bg-[#C9A44D]" />
              Begin Your Journey
            </p>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-white leading-none">
              Let's find your <em className="not-italic text-[#C9A44D] font-medium">Perfect Home</em>
            </h2>
          </div>
          <p className="text-sm text-white/60 max-w-sm leading-relaxed">
            Leave your details and our property experts will reach out to schedule a private walkthrough.
          </p>
        </motion.div>

        {/* ── Main grid ── */}
        {/* Inner container to limit form stretch while maintaining outer alignment */}
        <div className="mx-auto grid max-w-6xl gap-6 mt-8 lg:grid-cols-[1.15fr_1fr] lg:items-stretch">

          {/* ── Form Card ── */}
          <motion.div
            variants={fadeUp} custom={1} initial="hidden" whileInView="show" viewport={{ once: true }}
            className="flex flex-col rounded-2xl bg-white shadow-lg shadow-[#112018]/6 overflow-hidden"
          >
            {submitted ? (
              <div className="flex h-full flex-col items-center justify-center gap-3 p-10 text-center">
                <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ type: "spring", stiffness: 200 }}>
                  <CheckCircle2 size={52} className="text-[#C9A44D]" />
                </motion.div>
                <p className="font-serif text-2xl !text-[#112018]">We'll be in touch soon.</p>
                <p className="text-sm !text-[#112018]/60">Redirecting you shortly…</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="grid gap-2.5 p-5 md:p-6">

                {/* Row 1 */}
                <div className="grid gap-2.5 sm:grid-cols-2">
                  <div className="flex flex-col gap-1">
                    <label className="text-[10px] font-bold uppercase tracking-[0.15em] !text-[#112018]/70 pl-1">Full Name *</label>
                    <input required type="text" placeholder="John Doe"
                      value={form.name} onChange={set("name")} className={inputCls} />
                  </div>
                  <div className="flex flex-col gap-1">
                    <label className="text-[10px] font-bold uppercase tracking-[0.15em] !text-[#112018]/70 pl-1">Phone *</label>
                    <input required type="tel" placeholder="+91 00000 00000"
                      value={form.phone} onChange={set("phone")} className={inputCls} />
                  </div>
                </div>

                {/* Row 2 */}
                <div className="flex flex-col gap-1">
                  <label className="text-[10px] font-bold uppercase tracking-[0.15em] !text-[#112018]/70 pl-1">Email Address *</label>
                  <input required type="email" placeholder="your@email.com"
                    value={form.email} onChange={set("email")} className={inputCls} />
                </div>

                {/* Row 3 */}
                <div className="grid gap-2.5 sm:grid-cols-2">
                  <div className="flex flex-col gap-1">
                    <label className="text-[10px] font-bold uppercase tracking-[0.15em] !text-[#112018]/70 pl-1">Requirement</label>
                    <div className="relative">
                      <select value={form.requirement} onChange={set("requirement")} className={selectCls}>
                        <option value="">Select BHK</option>
                        <option value="2bhk">2 BHK</option>
                        <option value="3bhk">3 BHK</option>
                        <option value="4bhk">4 BHK</option>
                        <option value="villa">Villa / Penthouse</option>
                      </select>
                    </div>
                  </div>
                  <div className="flex flex-col gap-1">
                    <label className="text-[10px] font-bold uppercase tracking-[0.15em] !text-[#112018]/70 pl-1">Best Time to Call</label>
                    <select value={form.time} onChange={set("time")} className={selectCls}>
                      <option value="">Any time</option>
                      <option value="morning">Morning (9 AM – 12 PM)</option>
                      <option value="afternoon">Afternoon (12 – 4 PM)</option>
                      <option value="evening">Evening (4 – 7 PM)</option>
                    </select>
                  </div>
                </div>

                {/* Row 4 */}
                <div className="flex flex-col gap-1">
                  <label className="text-[10px] font-bold uppercase tracking-[0.15em] !text-[#112018]/70 pl-1">Message (optional)</label>
                  <textarea rows={2} placeholder="I am looking for..."
                    value={form.message} onChange={set("message")}
                    className={`${inputCls} resize-none`} />
                </div>

                {/* Submit */}
                <motion.button
                  type="submit" disabled={isLoading} whileHover={{ scale: 1.01 }} whileTap={{ scale: 0.98 }}
                  className="mt-2 flex w-full items-center justify-center gap-2 rounded-md bg-[#407266] py-3 text-xs font-bold uppercase tracking-[0.2em] text-white transition-colors hover:bg-[#2a5046] disabled:opacity-60"
                >
                  {isLoading ? (
                    <span className="h-4 w-4 rounded-full border-2 border-white/30 border-t-white animate-spin" />
                  ) : (
                    <>Confirm Enquiry <Send size={13} /></>
                  )}
                </motion.button>
              </form>
            )}
          </motion.div>

          {/* ── Right Panel ── */}
          <motion.div
            variants={fadeUp} custom={2} initial="hidden" whileInView="show" viewport={{ once: true }}
            className="group relative flex flex-col min-h-[380px] rounded-2xl overflow-hidden"
          >
            {/* Background Image */}
            <div className="absolute inset-0 w-full h-full">
              <img
                src="/images/Pool Cam.webp"
                alt="Aranya pool"
                className="h-full w-full object-cover transition-transform duration-1000 group-hover:scale-105"
              />
            </div>

            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#112018]/60 via-transparent to-transparent" />

            {/* Stats Card */}
            <div className="relative mt-auto p-2.5">
              <div className="rounded-xl bg-white/96 backdrop-blur-md p-4 md:p-5 shadow-2xl ring-1 ring-[#112018]/5">

                <div className="mb-4 flex flex-col gap-0.5">
                  <p className="text-[10px] font-bold uppercase tracking-[0.25em] !text-[#C9A44D]">Club Aranya</p>
                  <p className="font-serif text-xl !text-[#112018] leading-snug">34m × 8.4m Pool & Lounge</p>
                </div>

                <div className="grid grid-cols-2 gap-y-3.5 gap-x-4 border-t border-[#72816e]/20 pt-4">
                  {[
                    { val: "2 Towers", sub: "G+9 & G+10" },
                    { val: "257 Units", sub: "2, 3 & 4 BHK" },
                    { val: "69%", sub: "Green Open Space" },
                    { val: "16,000+", sub: "Sq Ft Club" },
                  ].map(({ val, sub }) => (
                    <div key={sub} className="flex flex-col">
                      <p className="font-serif text-lg font-medium !text-[#112018]">{val}</p>
                      <p className="text-[9px] font-bold uppercase tracking-[0.15em] !text-[#112018]/55">{sub}</p>
                    </div>
                  ))}
                </div>

              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
