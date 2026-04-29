import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { 
  ShieldCheck, 
  Eye, 
  Flame, 
  Zap, 
  ArrowUpDown, 
  Car, 
  UserPlus, 
  Home, 
  Gamepad2, 
  Baby, 
  Users, 
  TreePine, 
  Droplets, 
  MoveUp, 
  Medal,
  Activity
} from "lucide-react";
import { useState, useRef } from "react";

const amenities = [
  { icon: ShieldCheck, title: "24/7 Security", category: "Safety" },
  { icon: Eye, title: "CCTV Monitoring", category: "Safety" },
  { icon: Flame, title: "Fire Safety Systems", category: "Safety" },
  { icon: Activity, title: "Earthquake Resistant", category: "Structure" },
  { icon: Zap, title: "Power Backup", category: "Utilities" },
  { icon: ArrowUpDown, title: "Spacious Lifts", category: "Utilities" },
  { icon: Car, title: "Ample Parking", category: "Parking" },
  { icon: UserPlus, title: "Visitor Parking", category: "Parking" },
  { icon: Home, title: "Exclusive Clubhouse", category: "Lifestyle" },
  { icon: Gamepad2, title: "Indoor Games", category: "Lifestyle" },
  { icon: Baby, title: "Children's Play Area", category: "Lifestyle" },
  { icon: Users, title: "Community Hall", category: "Lifestyle" },
  { icon: TreePine, title: "Landscaped Gardens", category: "Nature" },
  { icon: Droplets, title: "Sewage Treatment", category: "Utilities" },
  { icon: MoveUp, title: "Wide Staircases", category: "Structure" },
  { icon: Medal, title: "Quality Materials", category: "Structure" },
];

export default function AmenitiesSection() {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const containerRef = useRef(null);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.5, y: 20 },
    visible: { 
      opacity: 1, 
      scale: 1, 
      y: 0,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
    }
  };

  return (
    <section id="amenities" className="bg-warm-white section-padding overflow-hidden relative">
      {/* Background Decorative Element */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gold/5 rounded-full blur-[120px] pointer-events-none" />
      
      <div className="max-w-[1400px] mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-40">
          <motion.p 
            initial={{ opacity: 0, letterSpacing: "1em" }}
            whileInView={{ opacity: 1, letterSpacing: "0.3em" }}
            transition={{ duration: 1 }}
            className="uppercase-track text-gold mb-8"
          >
            The Essentials
          </motion.p>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            Crafted for <span className="italic text-gold">Precision.</span>
          </motion.h2>
        </div>

        {/* Unique Staggered Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-2 md:grid-cols-4 gap-x-8 gap-y-24 lg:gap-y-32 [&>*:nth-child(even)]:translate-y-12 lg:[&>*:nth-child(even)]:translate-y-20"
        >
          {amenities.map((item, i) => (
            <motion.div
              key={i}
              variants={itemVariants}
              onMouseEnter={() => setHoveredIndex(i)}
              onMouseLeave={() => setHoveredIndex(null)}
              className="relative flex flex-col items-center group cursor-crosshair"
            >
              {/* Floating Icon Base */}
              <div className="relative mb-8">
                {/* Glow Effect */}
                <AnimatePresence>
                  {hoveredIndex === i && (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1.2 }}
                      exit={{ opacity: 0, scale: 0.8 }}
                      className="absolute inset-0 bg-gold/20 rounded-full blur-2xl z-0"
                    />
                  )}
                </AnimatePresence>

                {/* The Icon */}
                <motion.div
                   animate={hoveredIndex === i ? { 
                    y: -10, 
                    scale: 1.1,
                    rotate: [0, -10, 10, 0],
                  } : { y: 0, scale: 1 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  className="relative z-10 p-6 rounded-2xl border border-black/5 bg-white text-black/40 group-hover:text-gold group-hover:border-gold/50 transition-colors duration-500 shadow-sm"
                >
                  <item.icon size={32} strokeWidth={1.5} />
                </motion.div>

                {/* Animated Ring */}
                <motion.div 
                  animate={hoveredIndex === i ? { opacity: 1, scale: 1.4 } : { opacity: 0, scale: 1 }}
                  className="absolute inset-0 border border-[#c5a35c]/40 rounded-full z-0 pointer-events-none"
                />
              </div>

               <div className="text-center">
                <motion.h3 
                  animate={hoveredIndex === i ? { y: -5, color: "#C9A44D" } : { y: 0, color: "#2D5644" }}
                  transition={{ duration: 0.4 }}
                  className="text-lg lg:text-xl px-2"
                >
                  {item.title}
                </motion.h3>
              </div>

              {/* Connecting Line (Subtle) */}
              <div className="absolute top-1/2 -right-4 w-8 h-[1px] bg-black/5 hidden lg:block" />
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom Decorative Label */}
         <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="mt-40 pt-20 border-t border-black/5 flex flex-col md:flex-row justify-between items-center gap-10"
        >
          <div className="flex items-center gap-4">
            <div className="w-12 h-[1px] bg-gold/50" />
            <p className="uppercase-track text-black/40">Engineered Excellence</p>
          </div>
          <p className="max-w-md italic text-lg text-black/60 text-center md:text-right leading-relaxed">
            "A harmony of safety, utility, and leisure, hidden within the minimalist architecture."
          </p>
        </motion.div>
      </div>

      <style>{`
        .cursor-crosshair:hover {
          cursor: crosshair;
        }
      `}</style>
    </section>
  );
}
