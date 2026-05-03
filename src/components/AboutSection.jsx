import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Home, Star, MapPin, Building, Trees, Sparkles } from "lucide-react";
import DecorativeElements from "./DecorativeElements";

const stats = [
  { label: "Open Green Area", value: "70%", icon: Trees },
  { label: "Clubhouse", value: "1535 SQM", icon: Building },
  { label: "Total Units", value: "257", icon: Building },
  { label: "Completion", value: "2031", icon: Sparkles },
];

export default function AboutSection() {
  const containerRef = useRef(null);
  const imageRef = useRef(null);

  const { scrollYProgress: imageScroll } = useScroll({
    target: imageRef,
    offset: ["start end", "end start"],
  });

  const imageScale = useTransform(imageScroll, [0, 1], [1.08, 1.0]);

  return (
    <section
      ref={containerRef}
      id="experience"
      // Much stronger green presence! Mixes heavily with cream.
      className="relative overflow-hidden bg-[#e4e9e3] bg-gradient-to-b from-[#72816e]/60 via-[#f8f0df] via-50% to-[#72816e]/70 pb-20 md:pb-32"
    >
      <DecorativeElements type="leaf" position="left-center" color="#72816e" opacity={0.15} size="w-80" />
      <DecorativeElements type="organic" position="right-top" color="#72816e" opacity={0.12} size="w-[28rem]" />

      {/* ── FULL-WIDTH IMAGE HERO ── */}
      <div className="relative w-full" ref={imageRef}>
        <div className="relative w-full h-[60vh] md:h-[80vh] overflow-hidden">
          <motion.img
            style={{ scale: imageScale }}
            src="/images/Shot 15_V2.webp"
            alt="Aranya — A Sanctuary for Generations"
            className="w-full h-full object-cover object-center"
          />
          {/* Top dark gradient for text readability */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-transparent pointer-events-none" />

          {/* Bottom fade now matches the heavier green/cream mix to seamlessly blend the image */}
          <div className="absolute inset-x-0 bottom-0 h-[55%] bg-gradient-to-t from-[#d4dbd1] via-[#d4dbd1]/80 to-transparent pointer-events-none" />
        </div>

        {/* Vision label — top left */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="absolute top-10 left-6 md:left-12 lg:left-16 flex items-center gap-3"
        >
          <div className="w-6 h-[1px] bg-white" />
          <span className="uppercase-track text-[10px] text-white tracking-[0.25em]">The Vision</span>
        </motion.div>

        {/* Floating badge — top right */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="absolute top-8 right-6 md:right-12 lg:right-16 flex flex-col items-center justify-center w-24 h-24 md:w-32 md:h-32 rounded-full border border-white/20 bg-black/20 backdrop-blur-md"
        >
          <span className="text-2xl md:text-3xl font-serif text-white">70%</span>
          <span className="uppercase-track text-[7px] tracking-widest text-white/90 text-center leading-tight mt-1 px-2">Open Green</span>
        </motion.div>
      </div>

      {/* ── PREMIUM EDITORIAL CONTENT BELOW IMAGE ── */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 md:px-12 lg:px-16 -mt-20 md:-mt-32">

        {/* Large Statement Intro */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          className="text-center mb-16 md:mb-24"
        >
          {/* Forced dark color inline to prevent it from turning white */}
          <h2
            className="text-3xl md:text-4xl lg:text-5xl font-serif leading-tight max-w-4xl mx-auto mb-10 drop-shadow-sm"
            style={{ color: "#112018" }}
          >
            Nestled away from the city's hustle, yet connected to the world — Aranya is a meticulously crafted residential masterpiece.
          </h2>

          <div className="flex flex-wrap justify-center gap-3 md:gap-6">
            {[
              { icon: Home, label: "Nature-First Design" },
              { icon: Star, label: "Vaastu Compliant" },
              { icon: MapPin, label: "Guwahati, Assam" },
            ].map(({ icon: Icon, label }, i) => (
              <div key={i} className="flex items-center gap-2 px-5 py-2.5 rounded-full border border-[#72816e]/40 bg-white/50 backdrop-blur-md shadow-sm">
                <Icon size={14} style={{ color: "#407266" }} />
                <span className="uppercase-track text-[10px] tracking-widest font-bold" style={{ color: "#172018" }}>
                  {label}
                </span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Minimalist Stats Row */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.7 }}
              className="flex flex-col gap-4 border-t border-[#72816e]/40 pt-6 group"
            >
              <div className="flex items-center justify-between">
                <p
                  className="text-4xl md:text-5xl font-serif transition-transform duration-500 group-hover:-translate-y-1"
                  style={{ color: "#112018" }}
                >
                  {stat.value}
                </p>
                <stat.icon size={22} style={{ color: "#72816e" }} className="opacity-60 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
              <p
                className="uppercase-track text-[10px] tracking-[0.2em] font-bold"
                style={{ color: "#407266" }}
              >
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Refined Bottom Tagline */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.5 }}
          className="mt-20 md:mt-32 text-center"
        >
          <p
            className="italic text-xl md:text-2xl font-light leading-snug"
            style={{ color: "#2b4a3f" }}
          >
            "A home where nature and luxury live in perfect balance."
          </p>
        </motion.div>

      </div>
    </section>
  );
}