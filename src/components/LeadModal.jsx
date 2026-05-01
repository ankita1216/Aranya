import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function LeadModal({ isOpen, onClose }) {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    price: "",
    location: ""
  });

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
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
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
            className="relative w-full max-w-lg overflow-hidden rounded-[2.5rem] bg-[#f8f3e7] shadow-2xl"
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute right-6 top-6 z-10 p-2 text-[#2d5644] transition-transform hover:rotate-90"
            >
              <X size={24} />
            </button>

            <div className="flex flex-col p-8 md:p-12">
              <div className="mb-8 text-center">
                <h2 className="font-serif text-3xl md:text-4xl text-[#2d5644]">Enquire Now</h2>
                <div className="mx-auto mt-3 h-[1px] w-12 bg-[#c9a44d]" />
                <p className="mt-4 text-xs font-semibold uppercase tracking-[0.2em] text-[#8a7033]">
                  Your private sanctuary awaits
                </p>
              </div>

              <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                <div className="flex flex-col gap-1.5">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-[#2d5644]/60 ml-1">Name</label>
                  <input
                    required
                    type="text"
                    placeholder="Enter your name"
                    className="w-full rounded-2xl border border-[#2d5644]/10 bg-white px-6 py-4 text-sm outline-none transition-colors focus:border-[#c9a44d]"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div className="flex flex-col gap-1.5">
                    <label className="text-[10px] font-bold uppercase tracking-widest text-[#2d5644]/60 ml-1">Phone No</label>
                    <input
                      required
                      type="tel"
                      placeholder="Phone number"
                      className="w-full rounded-2xl border border-[#2d5644]/10 bg-white px-6 py-4 text-sm outline-none transition-colors focus:border-[#c9a44d]"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label className="text-[10px] font-bold uppercase tracking-widest text-[#2d5644]/60 ml-1">Email</label>
                    <input
                      required
                      type="email"
                      placeholder="Your email"
                      className="w-full rounded-2xl border border-[#2d5644]/10 bg-white px-6 py-4 text-sm outline-none transition-colors focus:border-[#c9a44d]"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div className="flex flex-col gap-1.5">
                    <label className="text-[10px] font-bold uppercase tracking-widest text-[#2d5644]/60 ml-1">Requirement</label>
                    <select
                      required
                      className="w-full appearance-none rounded-2xl border border-[#2d5644]/10 bg-white px-6 py-4 text-sm outline-none transition-colors focus:border-[#c9a44d]"
                      value={formData.price}
                      onChange={(e) => setFormData({ ...formData, price: e.target.value })}
                    >
                      <option value="" disabled>Select Price</option>
                      <option value="2bhk-50l">2 BHK @ 50 Lakh</option>
                      <option value="3bhk-60l">3 BHK @ 60 Lakh</option>
                      <option value="4bhk-80l">4 BHK @ 80 Lakh</option>
                    </select>
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label className="text-[10px] font-bold uppercase tracking-widest text-[#2d5644]/60 ml-1">Location</label>
                    <select
                      required
                      className="w-full appearance-none rounded-2xl border border-[#2d5644]/10 bg-white px-6 py-4 text-sm outline-none transition-colors focus:border-[#c9a44d]"
                      value={formData.location}
                      onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                    >
                      <option value="" disabled>Select City</option>
                      <option value="dharapur">Dharapur</option>
                      <option value="guwahati">Guwahati</option>
                    </select>
                  </div>
                </div>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  className="mt-4 w-full rounded-2xl bg-[#2d5644] py-5 text-[11px] font-bold uppercase tracking-[0.2em] text-white shadow-xl transition-colors hover:bg-[#1f3b2e]"
                >
                  Confirm Interest
                </motion.button>
              </form>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
