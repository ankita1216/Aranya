import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Home, Star, MapPin, Building, Trees, Sparkles } from "lucide-react";
import DecorativeElements from "./DecorativeElements";
import StyleAccents from "./StyleAccents";

const stats = [
  { label: "Open Green Area", value: "70%", icon: Trees },
  { label: "Clubhouse", value: "1535 sqm", icon: Building },
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
      className="relative overflow-hidden bg-[#e7eadf] bg-gradient-to-b from-[#7f917b]/45 via-[#f8f0df] via-50% to-[#7f917b]/48 pb-20 md:pb-32"
    >
      <DecorativeElements type="leaf" position="left-center" color="#7f917b" opacity={0.15} size="w-80" />
      <DecorativeElements type="organic" position="right-top" color="#7f917b" opacity={0.12} size="w-[28rem]" />
      <StyleAccents variant="style_2" position="center-right" size="w-72 lg:w-[30rem]" opacity={0.18} rotate={-20} className="hidden md:block" />
      <StyleAccents variant="style_1" position="bottom-left" size="w-64 lg:w-96" opacity={0.18} rotate={24} flip className="hidden md:block" />

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
          <div className="absolute inset-x-0 bottom-0 h-[55%] bg-gradient-to-t from-[#e7eadf] via-[#e7eadf]/84 to-transparent pointer-events-none" />
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

      {/* ── EDITORIAL INTRO CONTENT ── */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 lg:px-16 -mt-20 md:-mt-32">

        <div className="mx-auto mb-20 max-w-5xl md:mb-28">

          {/* Location pill */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="mb-10 flex justify-center"
          >
            <div className="inline-flex items-center gap-2.5 rounded-full border border-[#1f4d3f]/30 bg-white/60 px-5 py-2.5 shadow-[0_4px_24px_rgba(15,35,24,0.10)] backdrop-blur-md">
              <span className="h-1.5 w-1.5 rounded-full bg-[#C9A44D] animate-pulse" />
              <MapPin size={13} className="text-[#1f4d3f]" />
              <span className="text-[10px] font-bold uppercase tracking-[0.32em] text-[#1f4d3f]">
                RH Aerocity · Dharapur · Guwahati
              </span>
            </div>
          </motion.div>

          {/* Giant wordmark headline */}
          <div className="text-center mb-8 overflow-hidden">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="mb-5 flex justify-center"
            >
              <span className="inline-flex items-center gap-2 rounded-full border border-[#C9A44D]/40 bg-[#C9A44D]/10 px-5 py-1.5 text-[9px] font-bold uppercase tracking-[0.45em] text-[#8a6520] shadow-sm backdrop-blur-sm">
                <span className="h-1 w-1 rounded-full bg-[#C9A44D]" />
                Introducing
              </span>
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
              className="font-serif leading-[0.88] drop-shadow-sm"
              style={{ fontSize: "clamp(4rem, 12vw, 9rem)", color: "#0f2318" }}
            >
              Ar<span style={{ color: "#407266" }}>anya</span>
            </motion.h2>

            {/* Animated gold underline */}
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.55 }}
              style={{ transformOrigin: "center" }}
              className="mx-auto mt-4 h-[2px] w-32 rounded-full bg-gradient-to-r from-transparent via-[#C9A44D] to-transparent"
            />
          </div>

          {/* Editorial two-col tagline */}
          <div className="mt-14 grid gap-10 md:grid-cols-[1.2fr_1fr] md:items-start md:gap-16">
            <motion.div
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.3 }}
            >
              <h3 className="font-serif text-2xl font-light leading-snug md:text-3xl lg:text-4xl" style={{ color: "#112018" }}>
                A nature-led address crafted for{" "}
                <em className="not-italic" style={{ color: "#407266" }}>calm</em>,{" "}
                <em className="not-italic" style={{ color: "#407266" }}>connection</em>,
                {" "}and everyday belonging.
              </h3>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.4 }}
              className="flex flex-col gap-6"
            >
              <p className="text-[15px] font-light leading-8" style={{ color: "#2b4a3f" }}>
                Homes shaped around open greens, quiet views, and the comfort of returning to something more personal.
              </p>
              <div className="flex flex-wrap gap-3">
                {[
                  { icon: Home, label: "Nature-First Design" },
                  { icon: Star, label: "Vaastu Compliant" },
                ].map(({ icon: Icon, label }, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.55 + i * 0.1 }}
                    className="flex items-center gap-2 rounded-full border border-[#407266]/30 bg-white/55 px-4 py-2 shadow-sm backdrop-blur-md"
                  >
                    <Icon size={13} style={{ color: "#1f4d3f" }} />
                    <span className="text-[10px] font-bold uppercase tracking-[0.22em]" style={{ color: "#112018" }}>
                      {label}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>


        {/* Minimalist Stats Row */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.7 }}
              className="flex flex-col gap-4 border-t border-[#7f917b]/40 pt-6 group"
            >
              <div className="flex items-center gap-4">
                <stat.icon size={20} style={{ color: "#7f917b" }} className="opacity-60 group-hover:opacity-100 transition-opacity duration-500" />
                <p
                  className="text-3xl md:text-4xl transition-transform duration-500 group-hover:-translate-y-1"
                  style={{ color: "#112018", fontFamily: "'Playfair Display', serif" }}
                >
                  {stat.value.includes("sqm") ? (
                    <>
                      {stat.value.split(" ")[0]}
                      <span className="ml-2 text-sm md:text-base opacity-80 uppercase tracking-wider font-sans">sqm</span>
                    </>
                  ) : (
                    stat.value
                  )}
                </p>
              </div>
              <p
                className="uppercase-track text-[10px] tracking-[0.2em] font-bold"
                style={{ color: "#1f4d3f" }}
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
