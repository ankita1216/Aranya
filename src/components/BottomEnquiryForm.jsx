import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Send, X, Home } from "lucide-react";
import { useNavigate } from "react-router-dom";

const initialFormData = {
  name: "",
  phone: "",
  email: "",
  requirement: "",
  time: "",
};

export default function BottomEnquiryForm({ isVisible }) {
  const navigate = useNavigate();
  const [isDismissed, setIsDismissed] = useState(false);
  const [formData, setFormData] = useState(initialFormData);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const shouldShow = isVisible && !isDismissed;

  const update = (field, value) =>
    setFormData((prev) => ({ ...prev, [field]: value }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    // small delay for UX feel
    await new Promise((r) => setTimeout(r, 400));
    console.log("Bottom enquiry captured:", formData);
    setFormData(initialFormData);
    setIsSubmitting(false);
    navigate("/thank-you");
  };

  // Shared input style
  const inputCls =
    "h-10 w-full min-w-0 rounded-lg bg-white/10 border border-white/20 px-3 text-sm text-white placeholder:text-white/45 outline-none focus:border-[#C9A44D] focus:bg-white/15 transition-all duration-200 appearance-none";

  return (
    <AnimatePresence>
      {shouldShow && (
        <motion.aside
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 100 }}
          transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
          className="fixed inset-x-0 bottom-0 z-[70] px-3 pb-3 sm:px-4 sm:pb-4 pointer-events-none"
        >
          <div className="mx-auto max-w-[1080px] w-full pointer-events-auto">
            <div className="relative overflow-hidden rounded-2xl shadow-[0_20px_60px_rgba(0,0,0,0.45)] backdrop-blur-xl"
              style={{ background: "linear-gradient(135deg, #0f1f14 0%, #112018 60%, #1a2e1c 100%)", border: "1px solid rgba(201,164,77,0.25)" }}
            >
              {/* Gold top accent line */}
              <div className="absolute top-0 left-0 right-0 h-[2px]"
                style={{ background: "linear-gradient(90deg, transparent, #C9A44D 30%, #C9A44D 70%, transparent)" }}
              />

              <div className="flex items-center gap-2 px-4 py-3 sm:px-5">
                {/* Brand badge - desktop only */}
                <div className="hidden lg:flex flex-col items-center justify-center shrink-0 mr-2 pr-4 border-r border-white/15 min-w-[90px]">
                  <Home size={15} className="text-[#C9A44D] mb-0.5" />
                  <span className="text-[8px] font-bold uppercase tracking-[0.22em] text-[#C9A44D]">
                    Site Visit
                  </span>
                  <span className="text-[7px] uppercase tracking-widest text-white/40">
                    Book Now
                  </span>
                </div>

                {/* Form */}
                <form
                  onSubmit={handleSubmit}
                  className="flex flex-1 items-center gap-2 sm:gap-2.5 flex-wrap sm:flex-nowrap"
                >
                  {/* Name */}
                  <input
                    required
                    type="text"
                    placeholder="Name"
                    value={formData.name}
                    onChange={(e) => update("name", e.target.value)}
                    className={`${inputCls} flex-1 sm:flex-[1.2]`}
                  />

                  {/* Phone */}
                  <input
                    required
                    type="tel"
                    placeholder="Phone"
                    value={formData.phone}
                    onChange={(e) => update("phone", e.target.value)}
                    className={`${inputCls} flex-1 sm:flex-[1.2]`}
                  />

                  {/* Email - hidden on small screens */}
                  <input
                    required
                    type="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={(e) => update("email", e.target.value)}
                    className={`${inputCls} hidden sm:block flex-1`}
                  />

                  {/* Requirement */}
                  <select
                    required
                    value={formData.requirement}
                    onChange={(e) => update("requirement", e.target.value)}
                    className={`${inputCls} hidden md:block flex-[0.8] cursor-pointer`}
                    style={{ backgroundImage: "none" }}
                  >
                    <option value="" disabled className="bg-[#112018] text-white/60">
                      Requirement
                    </option>
                    <option value="2bhk" className="bg-[#112018] text-white">2 BHK</option>
                    <option value="3bhk" className="bg-[#112018] text-white">3 BHK</option>
                    <option value="4bhk" className="bg-[#112018] text-white">4 BHK</option>
                    <option value="villa" className="bg-[#112018] text-white">Villa</option>
                  </select>

                  {/* Time Preference - desktop only */}
                  <select
                    value={formData.time}
                    onChange={(e) => update("time", e.target.value)}
                    className={`${inputCls} hidden lg:block flex-[0.8] cursor-pointer`}
                    style={{ backgroundImage: "none" }}
                  >
                    <option value="" disabled className="bg-[#112018] text-white/60">
                      Morning
                    </option>
                    <option value="morning" className="bg-[#112018] text-white">Morning (9–12)</option>
                    <option value="afternoon" className="bg-[#112018] text-white">Afternoon (12–4)</option>
                    <option value="evening" className="bg-[#112018] text-white">Evening (4–7)</option>
                  </select>

                  {/* Submit */}
                  <motion.button
                    type="submit"
                    disabled={isSubmitting}
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                    className="shrink-0 h-10 inline-flex items-center gap-1.5 rounded-lg px-5 text-[10px] font-bold uppercase tracking-[0.18em] transition-all duration-200 disabled:opacity-60"
                    style={{
                      background: isSubmitting
                        ? "rgba(201,164,77,0.6)"
                        : "linear-gradient(135deg, #C9A44D, #C9A44D)",
                      color: "#0f1f14",
                      boxShadow: "0 2px 12px rgba(201,164,77,0.35)",
                    }}
                  >
                    {isSubmitting ? (
                      <span className="w-3.5 h-3.5 border-2 border-[#0f1f14]/40 border-t-[#0f1f14] rounded-full animate-spin" />
                    ) : (
                      <>
                        Confirm
                        <Send size={12} />
                      </>
                    )}
                  </motion.button>
                </form>

                {/* Close */}
                <button
                  onClick={() => setIsDismissed(true)}
                  aria-label="Dismiss"
                  className="shrink-0 ml-1 flex h-8 w-8 items-center justify-center rounded-lg border border-white/15 text-white/40 hover:border-[#C9A44D]/50 hover:text-[#C9A44D] transition-all duration-200"
                >
                  <X size={15} />
                </button>
              </div>
            </div>
          </div>
        </motion.aside>
      )}
    </AnimatePresence>
  );
}
