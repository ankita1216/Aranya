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
  Utensils,
  ArrowUpRight
} from "lucide-react";

const amenities = [
  { name: "Infinity Pool", icon: Waves, desc: "A serene escape with panoramic views of the horizon.", size: "lg" },
  { name: "Modern Gym", icon: Dumbbell, desc: "State-of-the-art equipment for your fitness ritual.", size: "md" },
  { name: "Zen Gardens", icon: Trees, desc: "Private green alcoves for meditation.", size: "md" },
  { name: "Club Lounge", icon: Coffee, desc: "Premium spaces for social connections.", size: "md" },
  { name: "Gaming Zone", icon: Gamepad2, desc: "High-tech indoor recreation area.", size: "md" },
  { name: "24/7 Security", icon: ShieldCheck, desc: "Advanced smart-surveillance systems.", size: "lg" },
  { name: "Banquet Hall", icon: Users, desc: "Grand venues for milestone celebrations.", size: "md" },
  { name: "Wellness Spa", icon: Sparkles, desc: "Curated therapies for rejuvenation.", size: "md" },
  { name: "Jogging Track", icon: Wind, desc: "Lush pathways for morning runs.", size: "md" },
  { name: "Reading Room", icon: Library, desc: "A quiet sanctuary for literature.", size: "md" },
  { name: "BBQ Pavilion", icon: Flame, desc: "Open-air pits for gourmet gatherings.", size: "lg" },
  { name: "Fine Dining", icon: Utensils, desc: "In-house culinary experiences.", size: "md" },
];

export default function AmenitiesSection() {
  return (
    <section id="amenities" className="relative py-24 overflow-hidden bg-[#f5efe1] text-[#172018]">

      {/* --- BG GRID MAINTAINED --- */}
      <div className="absolute inset-0 opacity-[0.16] [background-image:linear-gradient(90deg,#8c7b45_1px,transparent_1px),linear-gradient(0deg,#8c7b45_1px,transparent_1px)] [background-size:4.2rem_4.2rem]" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12">

        {/* Header - Kept same as request */}
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

        {/* --- NEW BENTO GRID DESIGN --- */}
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
          {amenities.map((item, index) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className="break-inside-avoid group relative bg-white/40 backdrop-blur-sm border border-[#8c7b45]/10 p-8 rounded-3xl hover:bg-white hover:border-[#C9A44D]/30 transition-all duration-500 shadow-sm hover:shadow-2xl"
            >
              {/* Corner Icon Accent */}
              <div className="absolute top-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <ArrowUpRight className="w-5 h-5 text-[#C9A44D]" />
              </div>

              {/* Icon Container */}
              <div className="mb-6 inline-flex items-center justify-center w-12 h-12 rounded-xl bg-[#172018] text-[#f5efe1] group-hover:bg-[#C9A44D] group-hover:rotate-[360deg] transition-all duration-700">
                <item.icon strokeWidth={1.5} className="w-6 h-6" />
              </div>

              {/* Content */}
              <h3 className="font-serif text-2xl text-[#172018] mb-3">
                {item.name}
              </h3>

              <p className="text-[13px] leading-relaxed text-[#314033]/70 font-medium">
                {item.desc}
              </p>

              {/* Interaction Stripe */}
              <div className="mt-8 h-[2px] w-0 bg-[#C9A44D] group-hover:w-12 transition-all duration-500" />
            </motion.div>
          ))}
        </div>
      </div>

      {/* Watermark maintained */}
      <div className="absolute -bottom-10 right-0 opacity-[0.03] select-none pointer-events-none">
        <h2 className="font-serif text-[15vw] leading-none text-[#172018]">LUXURY</h2>
      </div>
    </section>
  );
}