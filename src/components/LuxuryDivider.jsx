import { motion } from "framer-motion";

export default function LuxuryDivider() {
  return (
    <div className="relative h-24 md:h-32 flex items-center justify-center overflow-hidden pointer-events-none">
      <motion.div 
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: false, margin: "-20%" }}
        transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
        className="absolute w-full h-[1px] bg-gradient-to-r from-transparent via-[#C9A44D]/50 to-transparent shadow-[0_0_15px_rgba(201,164,77,0.4)]"
      />
      
      <motion.div
        initial={{ opacity: 0, scale: 0.5, rotate: 45 }}
        whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
        viewport={{ once: false }}
        transition={{ duration: 1, delay: 0.2 }}
        className="z-10 w-10 h-10 border border-[#C9A44D]/40 bg-[#2D5644] rotate-45 flex items-center justify-center"
      >
        <div className="w-2 h-2 bg-[#C9A44D] rotate-45" />
      </motion.div>
    </div>
  );
}
