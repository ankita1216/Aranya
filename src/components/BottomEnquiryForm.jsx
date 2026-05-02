import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Send, X } from "lucide-react";
import { useNavigate } from "react-router-dom";

const initialFormData = {
  name: "",
  phone: "",
  email: "",
  price: "",
  location: "",
};

export default function BottomEnquiryForm({ isVisible }) {
  const navigate = useNavigate();
  const [isDismissed, setIsDismissed] = useState(false);
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
          className="fixed inset-x-0 bottom-0 z-[70] px-2 pb-2 sm:px-5 sm:pb-5"
        >
          <div className="mx-auto max-h-[78vh] max-w-[1180px] overflow-y-auto rounded-2xl border border-white/42 bg-[#fff8eb]/78 p-3 text-[#172018] shadow-[0_24px_80px_rgba(20,28,18,0.20)] backdrop-blur-2xl sm:max-h-none sm:p-4">
            <div className="mb-2 flex items-start justify-between gap-3 px-1 sm:mb-3 sm:items-center sm:gap-4">
              <div>
                <p className="text-[9px] font-bold uppercase tracking-[0.32em] text-[#a87923] opacity-100">
                  Enquire Quietly
                </p>
                <h3 className="mt-1 font-serif text-lg leading-none text-[#172018] sm:text-xl">
                  Let Aranya call you back.
                </h3>
              </div>
              <button
                type="button"
                onClick={() => setIsDismissed(true)}
                className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-[#d8cba8]/70 bg-white/45 text-[#172018] transition hover:border-[#bd8f2a] hover:text-[#bd8f2a]"
                aria-label="Dismiss enquiry form"
              >
                <X size={17} />
              </button>
            </div>

            <form onSubmit={handleSubmit} className="grid grid-cols-2 gap-2 lg:grid-cols-[1fr_0.9fr_1fr_0.9fr_0.9fr_auto]">
              <input
                required
                type="text"
                placeholder="Name"
                value={formData.name}
                onChange={(event) => updateField("name", event.target.value)}
                className="col-span-2 h-11 rounded-xl border border-[#d8cba8]/70 bg-white/78 px-3 text-sm text-[#172018] outline-none placeholder:text-[#314033]/45 focus:border-[#bd8f2a] sm:h-12 sm:px-4 lg:col-span-1"
              />
              <input
                required
                type="tel"
                placeholder="Phone"
                value={formData.phone}
                onChange={(event) => updateField("phone", event.target.value)}
                className="h-11 rounded-xl border border-[#d8cba8]/70 bg-white/78 px-3 text-sm text-[#172018] outline-none placeholder:text-[#314033]/45 focus:border-[#bd8f2a] sm:h-12 sm:px-4"
              />
              <input
                required
                type="email"
                placeholder="Email"
                value={formData.email}
                onChange={(event) => updateField("email", event.target.value)}
                className="h-11 rounded-xl border border-[#d8cba8]/70 bg-white/78 px-3 text-sm text-[#172018] outline-none placeholder:text-[#314033]/45 focus:border-[#bd8f2a] sm:h-12 sm:px-4"
              />
              <select
                required
                value={formData.price}
                onChange={(event) => updateField("price", event.target.value)}
                className="h-11 rounded-xl border border-[#d8cba8]/70 bg-white/78 px-3 text-sm text-[#172018] outline-none focus:border-[#bd8f2a] sm:h-12 sm:px-4"
              >
                <option value="" disabled>
                  Requirement
                </option>
                <option value="2bhk-50l">2 BHK @ 50 Lakh</option>
                <option value="3bhk-60l">3 BHK @ 60 Lakh</option>
                <option value="4bhk-80l">4 BHK @ 80 Lakh</option>
              </select>
              <select
                required
                value={formData.location}
                onChange={(event) => updateField("location", event.target.value)}
                className="h-11 rounded-xl border border-[#d8cba8]/70 bg-white/78 px-3 text-sm text-[#172018] outline-none focus:border-[#bd8f2a] sm:h-12 sm:px-4"
              >
                <option value="" disabled>
                  City
                </option>
                <option value="dharapur">Dharapur</option>
                <option value="guwahati">Guwahati</option>
              </select>
              <button
                type="submit"
                className="col-span-2 inline-flex h-11 items-center justify-center gap-2 rounded-xl bg-[#172018] px-5 text-[10px] font-bold uppercase tracking-[0.2em] text-[#fff8eb] transition hover:bg-[#bd8f2a] hover:text-[#172018] sm:h-12 lg:col-span-1"
              >
                Send
                <Send size={14} />
              </button>
            </form>
          </div>
        </motion.aside>
      )}
    </AnimatePresence>
  );
}
