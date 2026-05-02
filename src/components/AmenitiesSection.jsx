import React from "react";
import { motion } from "framer-motion";
import {
  Dumbbell,
  Waves,
  Trees,
  Coffee,
  Gamepad2,
  ShieldCheck,
  Users,
  Sparkles,
  Wind,
  Library,
  Flame,
  Utensils
} from "lucide-react";

const amenities = [
  { name: "Infinity Pool", icon: Waves, desc: "A serene escape with panoramic views of the horizon." },
  { name: "Modern Gym", icon: Dumbbell, desc: "State-of-the-art equipment for your daily fitness ritual." },
  { name: "Zen Gardens", icon: Trees, desc: "Private green alcoves designed for deep meditation." },
  { name: "Club Lounge", icon: Coffee, desc: "Premium spaces for social connections and quiet work." },
  { name: "Gaming Zone", icon: Gamepad2, desc: "High-tech indoor recreation area for all age groups." },
  { name: "24/7 Security", icon: ShieldCheck, desc: "Advanced smart-surveillance and concierge systems." },
  { name: "Banquet Hall", icon: Users, desc: "Grand venues tailored for your milestone celebrations." },
  { name: "Wellness Spa", icon: Sparkles, desc: "Curated therapies for total mental and physical rejuvenation." },
  { name: "Jogging Track", icon: Wind, desc: "Lush, landscaped pathways for your morning runs." },
  { name: "Reading Room", icon: Library, desc: "A quiet sanctuary for literature and peaceful study." },
  { name: "BBQ Pavilion", icon: Flame, desc: "Open-air pits for gourmet weekend gatherings." },
  { name: "Fine Dining", icon: Utensils, desc: "In-house culinary experiences within the complex." },
];

export default function AmenitiesSection() {
  return (
    <section id="amenities" className="relative py-24 overflow-hidden bg-[#f5efe1] text-[#172018]">

      {/* --- MATCHING HERO GRID BACKGROUND --- */}
      <div className="absolute inset-0 opacity-[0.16] [background-image:linear-gradient(90deg,#8c7b45_1px,transparent_1px),linear-gradient(0deg,#8c7b45_1px,transparent_1px)] [background-size:4.2rem_4.2rem]" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12">

        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
          <div className="max-w-2xl">
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="uppercase tracking-[0.3em] text-[10px] font-bold text-[#8a7033] mb-4 flex items-center gap-3"
            >
              <span className="w-8 h-[1px] bg-[#8a7033]/40" /> Lifestyle Elements
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="font-serif text-5xl md:text-6xl text-[#172018] leading-tight"
            >
              The <span className="text-[#C9A44D] italic">Amenities</span> <br />
              Selection
            </motion.h2>
          </div>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-[#314033]/60 text-sm max-w-xs pb-2"
          >
            A meticulously curated collection of spaces designed to elevate every facet of your daily life.
          </motion.p>
        </div>

        {/* Amenities Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12">
          {amenities.map((item, index) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.05 }}
              className="group relative"
            >
              {/* --- PREMIUM ICON DISPLAY --- */}
              <div className="relative w-16 h-16 mb-8">
                {/* Decorative background shadow/glow */}
                <div className="absolute inset-0 bg-[#C9A44D]/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

                {/* Back Layer (The Offset Plate) */}
                <div className="absolute inset-0 bg-[#8c7b45]/10 rounded-2xl rotate-6 group-hover:rotate-12 transition-transform duration-500" />

                {/* Front Layer (The Icon Container) */}
                <div className="absolute inset-0 bg-white border border-[#C9A44D]/20 rounded-2xl flex items-center justify-center shadow-sm group-hover:shadow-xl group-hover:-translate-y-1 transition-all duration-500">
                  <item.icon
                    strokeWidth={1.2}
                    className="w-8 h-8 text-[#8a7033] group-hover:text-[#172018] transition-colors duration-500"
                  />
                </div>
              </div>

              {/* Text Content */}
              <h3 className="font-serif text-2xl text-[#172018] mb-3 group-hover:text-[#8a7033] transition-colors duration-300">
                {item.name}
              </h3>
              <p className="text-[13px] leading-relaxed text-[#314033]/70 font-medium max-w-[240px]">
                {item.desc}
              </p>

              {/* Animated Underline */}
              <div className="mt-6 w-8 h-[1px] bg-[#C9A44D]/30 group-hover:w-full transition-all duration-700 origin-left" />
            </motion.div>
          ))}
        </div>
      </div>

      {/* Decorative Large Watermark */}
      <div className="absolute -bottom-10 right-0 opacity-[0.03] select-none pointer-events-none">
        <h2 className="font-serif text-[15vw] leading-none text-[#172018]">LUXURY</h2>
      </div>
    </section>
  );
}