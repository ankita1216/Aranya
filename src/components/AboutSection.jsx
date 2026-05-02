import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Home, Star, MapPin, Building, Trees, Sparkles, ArrowUpRight } from "lucide-react";
import DecorativeElements from "./DecorativeElements";

const stats = [
  { label: "Open Green Area", value: "70%", icon: Trees },
  { label: "Clubhouse", value: "1535 SQM", icon: Building },
  { label: "Total Units", value: "257", icon: Building },
  { label: "Completion", value: "2031", icon: Sparkles },
];

const usps = [
  {
    index: "01",
    title: "Spacious Living",
    body: "Premium 2BHK, 3BHK, and 4BHK apartments alongside exclusive Club Apartments — each crafted with generous proportions and private terraces.",
  },
  {
    index: "02",
    title: "The Club Experience",
    body: "A 1535 SQM Clubhouse with infinity pool, state-of-the-art gym, and indoor games — the beating heart of the Aranya community.",
  },
  {
    index: "03",
    title: "Strategic Location",
    body: "2km from the International Airport. Minutes from Apollo Excelcare, top schools, and universities — convenience redefined.",
  },
];

export default function AboutSection() {
  const containerRef = useRef(null);
  const imageRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const { scrollYProgress: imageScroll } = useScroll({
    target: imageRef,
    offset: ["start end", "end start"],
  });

  const imageScale = useTransform(imageScroll, [0, 1], [1.08, 1.0]);

  return (
    <section
      ref={containerRef}
      id="experience"
      className="relative bg-deep-green overflow-hidden"
    >
      <DecorativeElements type="leaf" position="left-center" color="#C9A44D" opacity={0.05} size="w-80" />
      <DecorativeElements type="organic" position="right-top" color="#C9A44D" opacity={0.04} size="w-[28rem]" />
      {/* ── FULL-WIDTH IMAGE HERO ── */}
      <div className="relative w-full" ref={imageRef}>

        <div className="relative w-full h-[70vh] md:h-[85vh] lg:h-screen overflow-hidden">
          <motion.img
            style={{ scale: imageScale }}
            src="/images/Shot 15_V2.webp"
            alt="Aranya — A Sanctuary for Generations"
            className="w-full h-full object-cover object-center"
          />
          {/* Layered gradients for depth */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#407266]/55 via-transparent to-[#407266]/95" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#407266]/35 via-transparent to-transparent" />
        </div>

        {/* Vision label — top left */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="absolute top-10 left-6 md:left-12 lg:left-16 flex items-center gap-3"
        >
          <div className="w-6 h-[1px] bg-[#C9A44D]" />
          <span className="uppercase-track text-[10px] text-[#C9A44D] tracking-[0.25em]">The Vision</span>
        </motion.div>

        {/* Floating badge — top right */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="absolute top-8 right-6 md:right-12 lg:right-16 flex flex-col items-center justify-center w-24 h-24 md:w-32 md:h-32 rounded-full border border-[#C9A44D]/40 bg-[rgba(45,86,68,0.55)] backdrop-blur-md"
        >
          <span className="text-2xl md:text-3xl font-bold text-[#C9A44D]">70%</span>
          <span className="uppercase-track text-[7px] text-white/60 text-center leading-tight mt-1 px-2">Open Green</span>
        </motion.div>

        {/* Title overlay at bottom of image */}
        <div className="absolute bottom-0 left-0 right-0 px-6 md:px-12 lg:px-16 pb-12 md:pb-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, ease: "easeOut" }}
          >
            <h2 className="text-white leading-none mb-2">
              ARANYA
              <span className="block italic text-[#C9A44D] font-light">By Ranghomes</span>
            </h2>
            <p className="text-white/45 text-sm md:text-base">
              Aerocity Dharapur, Guwahati
            </p>
          </motion.div>
        </div>
      </div>

      {/* ── CONTENT BELOW IMAGE ── */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 lg:px-16 mt-8 md:mt-12">

        {/* Intro row */}
        <div className="grid lg:grid-cols-2 gap-12 mb-12 items-start">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-white/60 leading-relaxed text-base md:text-lg max-w-lg"
          >
            Nestled away from the city's hustle, yet connected to the world —
            Aranya is a meticulously crafted residential masterpiece designed
            for those who seek tranquility without compromise.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="flex flex-wrap gap-3 lg:justify-end items-start"
          >
            {[
              { icon: Home, label: "Nature-First Design" },
              { icon: Star, label: "Vaastu Compliant" },
              { icon: MapPin, label: "Guwahati, Assam" },
            ].map(({ icon: Icon, label }, i) => (
              <div key={i} className="flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm">
                <Icon size={12} className="text-[#C9A44D]" />
                <span className="uppercase-track text-[9px] text-white/60">{label}</span>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Stats grid — separated by 1px gaps */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-white/8 rounded-2xl overflow-hidden mb-12">
          {stats.map((stat, i) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="group bg-deep-green hover:bg-[rgba(201,164,77,0.04)] transition-colors duration-500 p-8 flex flex-col gap-4 cursor-default"
              >
                <div className="w-10 h-10 rounded-full border border-[#C9A44D]/20 bg-[rgba(201,164,77,0.06)] flex items-center justify-center group-hover:border-[#C9A44D]/50 transition-colors duration-300">
                  <Icon size={16} className="text-[#C9A44D]" />
                </div>
                <div>
                  <p className="text-3xl lg:text-4xl font-light text-white group-hover:text-[#C9A44D] transition-colors duration-300 leading-none mb-1">
                    {stat.value}
                  </p>
                  <p className="uppercase-track text-[9px] text-white/35 group-hover:text-white/60 transition-colors duration-300">
                    {stat.label}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Divider */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="w-full h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent mb-12 origin-left"
        />

        {/* USP rows */}
        <div>
          {usps.map((usp, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              className="group relative"
            >
              <div className="absolute top-0 left-0 right-0 h-[1px] bg-white/8" />

              <div className="grid grid-cols-12 items-center gap-6 py-10 px-6 -mx-6 hover:bg-[rgba(201,164,77,0.025)] transition-all duration-500 rounded-xl">
                <div className="col-span-12 md:col-span-1 flex items-center gap-4 md:flex-col md:items-start md:gap-2">
                  <span className="uppercase-track text-[10px] text-[#C9A44D]/80 group-hover:text-[#C9A44D] transition-colors duration-300 tabular-nums font-bold">
                    {usp.index}
                  </span>
                  <motion.div
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 + 0.3, duration: 0.6 }}
                    className="h-[1px] w-8 md:w-6 bg-[#C9A44D]/30 group-hover:bg-[#C9A44D] origin-left transition-colors duration-300"
                  />
                </div>

                <div className="col-span-12 md:col-span-3">
                  <h3 className="text-white group-hover:text-[#C9A44D] transition-colors duration-300 leading-tight">
                    {usp.title}
                  </h3>
                </div>

                <div className="col-span-12 md:col-span-6">
                  <p className="text-white/45 group-hover:text-white/75 transition-colors duration-500 leading-relaxed">
                    {usp.body}
                  </p>
                </div>

                <div className="col-span-12 md:col-span-2 flex justify-end">
                  <div className="w-9 h-9 rounded-full border border-white/10 group-hover:border-[#C9A44D]/50 bg-transparent group-hover:bg-[rgba(201,164,77,0.08)] flex items-center justify-center transition-all duration-300">
                    <ArrowUpRight size={14} className="text-white/20 group-hover:text-[#C9A44D] transition-colors duration-300" />
                  </div>
                </div>
              </div>

              {i === usps.length - 1 && (
                <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-white/8" />
              )}
            </motion.div>
          ))}
        </div>

        {/* Bottom tagline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mt-12 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 pt-8 border-t border-white/8"
        >
          <p className="italic text-[#C9A44D] text-lg md:text-2xl font-light max-w-md leading-snug">
            "A home where nature and luxury live in perfect balance."
          </p>
          <div className="flex items-center gap-3 px-5 py-3 rounded-full border border-[#C9A44D]/30 bg-[rgba(201,164,77,0.05)]">
            <Sparkles size={14} className="text-[#C9A44D]" />
            <span className="uppercase-track text-[9px] text-[#C9A44D]/70">Est. Completion 2031</span>
          </div>
        </motion.div>

      </div>

      {/* Ambient glows */}
      <div className="absolute top-[60%] right-[-5%] w-[500px] h-[500px] bg-[rgba(201,164,77,0.04)] rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-[80%] left-[-5%] w-[400px] h-[400px] bg-[rgba(201,164,77,0.03)] rounded-full blur-[120px] pointer-events-none" />
    </section>
  );
}
