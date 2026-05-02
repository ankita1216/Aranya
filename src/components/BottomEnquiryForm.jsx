import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Send, X, ChevronUp, ChevronDown } from "lucide-react";
import { useNavigate } from "react-router-dom";

const initialFormData = {
  name: "",
  phone: "",
  email: "",
  price: "",
  location: "",
  message: ""
};

export default function BottomEnquiryForm({ isVisible }) {
  const navigate = useNavigate();
  const [isDismissed, setIsDismissed] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const [formData, setFormData] = useState(initialFormData);

  const shouldShow = isVisible && !isDismissed;

  const updateField = (field, value) => {
    setFormData((current) => ({ ...current, [field]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Bottom enquiry captured:", formData);
    setFormData(initialFormData);
    navigate("/thank-you");
  };

  return (
    <AnimatePresence>
      {shouldShow && (
        <motion.aside
          initial={{ opacity: 0, y: 120 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 120 }}
          transition={{ duration: 0.42, ease: [0.22, 1, 0.36, 1] }}
          className="fixed inset-x-0 bottom-0 z-[70] px-2 pb-2 sm:px-5 sm:pb-4 pointer-events-none"
        >
          <div className="mx-auto max-w-[1040px] w-full pointer-events-auto">
            <div className={`relative overflow-hidden rounded-2xl border border-white/45 bg-[#fff8eb]/95 text-[#172018] shadow-[0_18px_60px_rgba(20,28,18,0.25)] backdrop-blur-2xl transition-all duration-500 ${isExpanded ? 'p-6' : 'p-2'}`}>
              
              {/* Header Toggle (Mobile friendly) */}
              <div className="flex items-center justify-between lg:hidden mb-2">
                <button 
                  onClick={() => setIsExpanded(!isExpanded)}
                  className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-[#407266]"
                >
                  {isExpanded ? <ChevronDown size={16} /> : <ChevronUp size={16} />}
                  Quick Enquiry
                </button>
                <button onClick={() => setIsDismissed(true)} className="text-[#172018]/40"><X size={18} /></button>
              </div>

              <form
                onSubmit={handleSubmit}
                className={`flex flex-col gap-4 ${isExpanded ? 'block' : 'hidden lg:flex lg:flex-row lg:items-center lg:gap-3'}`}
              >
                {/* Name */}
                <div className="flex-1 min-w-0">
                  <input
                    required
                    type="text"
                    placeholder="Name"
                    value={formData.name}
                    onChange={(event) => updateField("name", event.target.value)}
                    className="h-10 w-full rounded-xl border border-[#d8cba8]/70 bg-white/82 px-4 text-sm text-[#172018] outline-none placeholder:text-[#314033]/45 focus:border-[#bd8f2a] sm:h-11"
                  />
                </div>

                {/* Phone */}
                <div className="flex-1 min-w-0">
                  <input
                    required
                    type="tel"
                    placeholder="Phone"
                    value={formData.phone}
                    onChange={(event) => updateField("phone", event.target.value)}
                    className="h-10 w-full rounded-xl border border-[#d8cba8]/70 bg-white/82 px-4 text-sm text-[#172018] outline-none placeholder:text-[#314033]/45 focus:border-[#bd8f2a] sm:h-11"
                  />
                </div>

                {/* Email */}
                <div className={`flex-1 min-w-0 ${isExpanded ? 'block' : 'hidden xl:block'}`}>
                  <input
                    required
                    type="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={(event) => updateField("email", event.target.value)}
                    className="h-10 w-full rounded-xl border border-[#d8cba8]/70 bg-white/82 px-4 text-sm text-[#172018] outline-none placeholder:text-[#314033]/45 focus:border-[#bd8f2a] sm:h-11"
                  />
                </div>

                {/* Requirement */}
                <div className={`flex-1 min-w-[140px] ${isExpanded ? 'block' : 'hidden lg:block'}`}>
                  <select
                    required
                    value={formData.price}
                    onChange={(e) => updateField("price", e.target.value)}
                    className="h-10 w-full rounded-xl border border-[#d8cba8]/70 bg-white/82 px-4 text-sm text-[#172018] outline-none focus:border-[#bd8f2a] sm:h-11 appearance-none"
                  >
                    <option value="" disabled>Requirement</option>
                    <option value="2bhk">2 BHK</option>
                    <option value="3bhk">3 BHK</option>
                    <option value="4bhk">4 BHK</option>
                  </select>
                </div>

                {/* Location */}
                <div className={`flex-1 min-w-[140px] ${isExpanded ? 'block' : 'hidden lg:block'}`}>
                  <select
                    required
                    value={formData.location}
                    onChange={(e) => updateField("location", e.target.value)}
                    className="h-10 w-full rounded-xl border border-[#d8cba8]/70 bg-white/82 px-4 text-sm text-[#172018] outline-none focus:border-[#bd8f2a] sm:h-11 appearance-none"
                  >
                    <option value="" disabled>Location</option>
                    <option value="dharapur">Dharapur</option>
                    <option value="guwahati">Guwahati</option>
                  </select>
                </div>

                {/* Message */}
                <div className={`flex-1 min-w-0 ${isExpanded ? 'block' : 'hidden'}`}>
                  <input
                    type="text"
                    placeholder="Message"
                    value={formData.message}
                    onChange={(event) => updateField("message", event.target.value)}
                    className="h-10 w-full rounded-xl border border-[#d8cba8]/70 bg-white/82 px-4 text-sm text-[#172018] outline-none placeholder:text-[#314033]/45 focus:border-[#bd8f2a] sm:h-11"
                  />
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  className="inline-flex h-10 shrink-0 items-center justify-center gap-2 rounded-xl bg-[#172018] px-6 text-[10px] font-bold uppercase tracking-[0.18em] text-[#fff8eb] transition hover:bg-[#bd8f2a] hover:text-[#172018] sm:h-11 sm:px-8"
                >
                  Enquire
                  <Send size={14} />
                </button>

                {/* Close (Desktop) */}
                <button
                  type="button"
                  onClick={() => setIsDismissed(true)}
                  className="hidden lg:flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-[#d8cba8]/70 bg-white/55 text-[#172018] transition hover:border-[#bd8f2a] hover:text-[#bd8f2a] sm:h-11 sm:w-11"
                  aria-label="Dismiss enquiry form"
                >
                  <X size={16} />
                </button>
              </form>
            </div>
          </div>
        </motion.aside>
      )}
    </AnimatePresence>
  );
}
