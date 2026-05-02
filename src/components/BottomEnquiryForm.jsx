import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Send, X } from "lucide-react";
import { useNavigate } from "react-router-dom";

const initialFormData = {
  name: "",
  phone: "",
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
          className="fixed inset-x-0 bottom-0 z-[70] px-2 pb-2 sm:px-5 sm:pb-4"
        >
          <div className="mx-auto max-w-[1040px] rounded-2xl border border-white/45 bg-[#fff8eb]/88 p-2 text-[#172018] shadow-[0_18px_60px_rgba(20,28,18,0.18)] backdrop-blur-2xl sm:rounded-full">
            <form
              onSubmit={handleSubmit}
              className="grid grid-cols-[1fr_auto] items-center gap-2 sm:grid-cols-[minmax(160px,1fr)_minmax(140px,0.9fr)_auto_auto]"
            >
              <input
                required
                type="text"
                placeholder="Name"
                value={formData.name}
                onChange={(event) => updateField("name", event.target.value)}
                className="h-10 min-w-0 rounded-xl border border-[#d8cba8]/70 bg-white/82 px-3 text-sm text-[#172018] outline-none placeholder:text-[#314033]/45 focus:border-[#bd8f2a] sm:h-11 sm:rounded-full sm:px-4"
              />
              <input
                required
                type="tel"
                placeholder="Phone"
                value={formData.phone}
                onChange={(event) => updateField("phone", event.target.value)}
                className="col-span-2 h-10 min-w-0 rounded-xl border border-[#d8cba8]/70 bg-white/82 px-3 text-sm text-[#172018] outline-none placeholder:text-[#314033]/45 focus:border-[#bd8f2a] sm:col-span-1 sm:h-11 sm:rounded-full sm:px-4"
              />
              <button
                type="submit"
                className="inline-flex h-10 items-center justify-center gap-2 rounded-xl bg-[#172018] px-4 text-[10px] font-bold uppercase tracking-[0.18em] text-[#fff8eb] transition hover:bg-[#bd8f2a] hover:text-[#172018] sm:h-11 sm:rounded-full sm:px-5"
              >
                Send
                <Send size={14} />
              </button>
              <button
                type="button"
                onClick={() => setIsDismissed(true)}
                className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-[#d8cba8]/70 bg-white/55 text-[#172018] transition hover:border-[#bd8f2a] hover:text-[#bd8f2a] sm:h-11 sm:w-11 sm:rounded-full"
                aria-label="Dismiss enquiry form"
              >
                <X size={16} />
              </button>
            </form>
          </div>
        </motion.aside>
      )}
    </AnimatePresence>
  );
}
