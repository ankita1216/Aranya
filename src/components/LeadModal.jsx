import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function LeadModal({ isOpen, onClose }) {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    price: "",
    location: "",
    message: ""
  });

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Lead captured:", formData);
    // Add your logic here (e.g., send to API)
    onClose();
    navigate("/thank-you");
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[110] flex items-center justify-center p-4">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="relative w-[92%] sm:w-full max-w-md mx-auto max-h-[90vh] overflow-y-auto no-scrollbar rounded-[2rem] bg-[#f8f3e7] shadow-2xl"
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute right-6 top-6 z-20 p-2 text-[#407266] transition-transform hover:rotate-90"
            >
              <X size={24} />
            </button>

            <div className="flex flex-col max-h-[90vh]">
              {/* Header - Fixed at top of modal */}
              <div className="p-8 pb-4 pt-12 md:p-10 md:pb-6 md:pt-16 text-center">
                <h1 
                  className="font-serif text-3xl md:text-4xl leading-tight mb-2"
                  style={{ color: '#407266', fontWeight: 'bold' }}
                >
                  Enquire Now
                </h1>
                <div className="mx-auto h-[1.5px] w-12 bg-[#C9A44D] mb-4" />
                <p 
                  className="text-[11px] font-bold uppercase tracking-[0.25em]"
                  style={{ color: '#8A7033' }}
                >
                  Your private sanctuary awaits
                </p>
              </div>

              {/* Form - Scrollable */}
              <div className="flex-1 overflow-y-auto no-scrollbar p-8 pt-0 md:p-10 md:pt-0">
                <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                <div className="flex flex-col gap-1.5">
                  <label className="text-[9px] font-bold uppercase tracking-widest text-[#407266]/60 ml-1">Name</label>
                  <input
                    required
                    type="text"
                    placeholder="Enter your name"
                    className="w-full rounded-xl border border-[#407266]/10 bg-white px-5 py-3.5 text-sm text-black placeholder:text-black/50 outline-none transition-colors focus:border-[#c9a44d]"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div className="flex flex-col gap-1.5">
                    <label className="text-[10px] font-bold uppercase tracking-widest text-[#407266]/60 ml-1">Phone No</label>
                    <input
                      required
                      type="tel"
                      placeholder="Phone number"
                      className="w-full rounded-xl border border-[#407266]/10 bg-white px-5 py-3.5 text-sm text-black placeholder:text-black/50 outline-none transition-colors focus:border-[#c9a44d]"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label className="text-[10px] font-bold uppercase tracking-widest text-[#407266]/60 ml-1">Email</label>
                    <input
                      required
                      type="email"
                      placeholder="Your email"
                      className="w-full rounded-xl border border-[#407266]/10 bg-white px-5 py-3.5 text-sm text-black placeholder:text-black/50 outline-none transition-colors focus:border-[#c9a44d]"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div className="flex flex-col gap-1.5">
                    <label className="text-[10px] font-bold uppercase tracking-widest text-[#407266]/60 ml-1">Requirement</label>
                    <select
                      required
                      className="w-full appearance-none rounded-xl border border-[#407266]/10 bg-white px-5 py-3.5 text-sm text-black outline-none transition-colors focus:border-[#c9a44d]"
                      value={formData.price}
                      onChange={(e) => setFormData({ ...formData, price: e.target.value })}
                    >
                      <option value="" disabled className="text-black/50">Select Price</option>
                      <option value="2bhk-50l">2 BHK @ 50 Lakh</option>
                      <option value="3bhk-60l">3 BHK @ 60 Lakh</option>
                      <option value="4bhk-80l">4 BHK @ 80 Lakh</option>
                    </select>
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label className="text-[10px] font-bold uppercase tracking-widest text-[#407266]/60 ml-1">Location</label>
                    <select
                      required
                      className="w-full appearance-none rounded-xl border border-[#407266]/10 bg-white px-5 py-3.5 text-sm text-black outline-none transition-colors focus:border-[#c9a44d]"
                      value={formData.location}
                      onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                    >
                      <option value="" disabled className="text-black/50">Select City</option>
                      <option value="dharapur">Dharapur</option>
                      <option value="guwahati">Guwahati</option>
                    </select>
                  </div>
                </div>
                <div className="flex flex-col gap-1.5">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-[#407266]/60 ml-1">Message</label>
                  <textarea
                    placeholder="Your message (optional)"
                    rows={2}
                    className="w-full rounded-xl border border-[#407266]/10 bg-white px-5 py-3 text-sm text-black placeholder:text-black/50 outline-none transition-colors focus:border-[#c9a44d] resize-none"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  />
                </div>
                <motion.button
                  whileHover={{ scale: 1.01 }}
                  whileTap={{ scale: 0.99 }}
                  type="submit"
                  className="mt-4 w-full rounded-xl bg-[#407266] py-4 text-[10px] font-bold uppercase tracking-[0.2em] text-white shadow-xl transition-colors hover:bg-[#1f3b2e]"
                >
                  Confirm Interest
                </motion.button>
              </form>
            </div>
          </div>
        </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}