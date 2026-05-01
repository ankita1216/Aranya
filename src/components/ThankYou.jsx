import { motion } from "framer-motion";
import { Download, Home, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

export default function ThankYou() {
  return (
    <div className="relative min-h-screen bg-[#06100B] flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="/images/Shot_07_5KShot_07_5K.webp" 
          alt="Aranya Architecture" 
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#06100B] via-transparent to-[#06100B]" />
      </div>

      <div className="relative z-10 max-w-3xl px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="inline-flex items-center justify-center mb-8">
            <motion.img
              src="/logo/trust.webp"
              alt="Aranya Logo"
              className="h-24 md:h-32 w-auto brightness-200"
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.4, type: "spring", stiffness: 150 }}
            />
          </div>

          <h1 className="font-serif text-5xl md:text-7xl text-white mb-6">
            Thank <span className="text-gold">You.</span>
          </h1>
          
          <p className="text-white/70 text-lg md:text-xl leading-relaxed mb-12 max-w-xl mx-auto">
            Your interest in ARANYA has been recorded. Our team of specialists will contact you shortly to guide you through your future sanctuary.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <motion.a
              href="/brochure.pdf"
              download="Aranya_Brochure.pdf"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-3 bg-gold text-white px-8 py-4 rounded-full font-bold uppercase tracking-widest text-xs shadow-xl shadow-gold/20 transition-all hover:bg-[#b89542]"
            >
              <Download size={18} />
              Download Brochure
            </motion.a>

            <Link to="/">
              <motion.button
                whileHover={{ x: -5 }}
                className="flex items-center gap-2 text-white/60 hover:text-white transition-colors uppercase tracking-[0.2em] text-[10px] font-bold"
              >
                <ArrowLeft size={14} />
                Back to Home
              </motion.button>
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
