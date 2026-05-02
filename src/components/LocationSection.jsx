import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  GraduationCap, HeartPulse, ShoppingBag,
  Plane, ShieldCheck, MapPin, ChevronLeft, ChevronRight
} from "lucide-react";

const locationData = [
  {
    id: "connectivity", category: "Connectivity", icon: Plane, places: [
      { name: "Lokpriya Gopinath Bordoloi Int. Airport", distance: "2 km" },
      { name: "Jalukbari Flyover", distance: "10 km" }
    ]
  },
  {
    id: "education", category: "Education", icon: GraduationCap, places: [
      { name: "Dharapur Higher Secondary School", distance: "2.2 km" },
      { name: "Girijananda Chowdhury University", distance: "2.9 km" },
      { name: "Assam Don Bosco University", distance: "3.5 km" },
      { name: "Guwahati University", distance: "6.5 km" }
    ]
  },
  {
    id: "shopping", category: "Lifestyle", icon: ShoppingBag, places: [
      { name: "Kiranshree Grand Hotel", distance: "3.7 km" },
      { name: "University Shopping Complex", distance: "6.6 km" },
      { name: "Decathlon Azara", distance: "6.7 km" },
      { name: "NCS Square Mall", distance: "9.0 km" }
    ]
  },
  {
    id: "healthcare", category: "Healthcare", icon: HeartPulse, places: [
      { name: "Guwahati University Hospital", distance: "10.7 km" },
      { name: "Apollo Excelcare Hospital", distance: "13.2 km" }
    ]
  },
  {
    id: "essentials", category: "Essentials", icon: ShieldCheck, places: [
      { name: "BCPL Petrol Pump Service", distance: "650 m" },
      { name: "Dharapur Chariali", distance: "2.2 km" },
      { name: "Azara Police Station", distance: "4.8 km" }
    ]
  }
];

export default function LocationSection() {
  const [activeTab, setActiveTab] = useState(0);

  const nextTab = () => setActiveTab((prev) => (prev + 1) % locationData.length);
  const prevTab = () => setActiveTab((prev) => (prev - 1 + locationData.length) % locationData.length);

  return (
    <section id="location" className="relative bg-[#5f8975] overflow-hidden py-24 md:py-32">
      {/* Background Subtle Gradient */}
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_20%_20%,rgba(201,164,77,0.05)_0%,transparent_50%)] pointer-events-none" />

      {/* --- Section Header --- */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16 mb-16 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-3 mb-4">
              <span className="w-10 h-[1px] bg-gold" />
              <span className="uppercase tracking-[0.3em] text-gold text-xs font-medium">The Vicinity</span>
            </div>
            <h2 className="text-4xl md:text-6xl text-white font-serif leading-tight">
              A Nexus of <br />
              <span className="text-gold italic font-light">Sophistication</span>
            </h2>
          </motion.div>

          {/* Navigation Pills */}
          <div className="flex items-center gap-2 bg-white/5 p-1.5 rounded-full border border-white/10 backdrop-blur-md">
            {locationData.map((item, idx) => (
              <button
                key={item.id}
                onClick={() => setActiveTab(idx)}
                className={`px-4 py-2 rounded-full text-[10px] uppercase tracking-widest transition-all duration-500 ${activeTab === idx ? "bg-gold text-deep-green" : "text-white/40 hover:text-white"
                  }`}
              >
                {item.category}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* --- Content Area --- */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16 relative z-10">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.6, ease: "circOut" }}
            className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center"
          >
            {/* Big Indicator Info */}
            <div className="lg:col-span-4">
              <div className="relative">
                <span className="text-[12rem] font-serif text-white/[0.03] absolute -top-24 -left-10 select-none">
                  0{activeTab + 1}
                </span>
                <div className="relative z-10">
                  <div className="w-16 h-16 rounded-2xl bg-gold/10 border border-gold/20 flex items-center justify-center mb-6 text-gold">
                    {React.createElement(locationData[activeTab].icon, { size: 32, strokeWidth: 1.2 })}
                  </div>
                  <h3 className="text-3xl text-white font-serif mb-4">{locationData[activeTab].category}</h3>
                  <p className="text-white/50 text-sm leading-relaxed max-w-xs">
                    Strategically connected to the heartbeat of Guwahati, ensuring every essential is just minutes away.
                  </p>
                </div>
              </div>

              {/* Arrow Controls */}
              <div className="flex gap-4 mt-12">
                <button onClick={prevTab} className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-white hover:bg-gold hover:text-deep-green transition-all duration-500">
                  <ChevronLeft size={20} />
                </button>
                <button onClick={nextTab} className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-white hover:bg-gold hover:text-deep-green transition-all duration-500">
                  <ChevronRight size={20} />
                </button>
              </div>
            </div>

            {/* Places Grid */}
            <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-4">
              {locationData[activeTab].places.map((place, idx) => (
                <motion.div
                  key={place.name}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.1 }}
                  className="group relative p-6 rounded-3xl bg-white/[0.02] border border-white/5 hover:border-gold/30 transition-all duration-700 overflow-hidden"
                >
                  <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-100 group-hover:text-gold transition-all duration-700">
                    <MapPin size={16} />
                  </div>

                  <div className="flex flex-col justify-between h-full">
                    <span className="text-gold font-serif text-2xl mb-4 group-hover:scale-110 transition-transform duration-500 block origin-left">
                      {place.distance}
                    </span>
                    <div>
                      <div className="w-8 h-[1px] bg-white/20 mb-3 group-hover:w-full transition-all duration-700" />
                      <h4 className="text-white group-hover:text-gold transition-colors duration-500 text-sm md:text-base tracking-wide uppercase-track">
                        {place.name}
                      </h4>
                    </div>
                  </div>

                  {/* Decorative background hover element */}
                  <div className="absolute -bottom-10 -right-10 w-24 h-24 bg-gold/5 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity" />
                </motion.div>
              ))}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* --- Footer Progress --- */}
      <div className="mt-20 max-w-7xl mx-auto px-6 md:px-12 lg:px-16 flex items-center gap-6 opacity-30">
        <span className="text-white text-[10px] tracking-widest uppercase">Connectivity Hub</span>
        <div className="flex-1 h-[1px] bg-white/10 relative">
          <motion.div
            className="absolute h-full bg-gold top-0 left-0"
            animate={{ width: `${((activeTab + 1) / locationData.length) * 100}%` }}
          />
        </div>
        <span className="text-white text-[10px] tracking-widest uppercase">LGBI International</span>
      </div>

      {/* Decorative Large Text Watermark */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden pointer-events-none opacity-[0.02] translate-y-1/2">
        <h1 className="text-[20vw] font-serif text-white whitespace-nowrap">
          ARANYA SURROUNDINGS
        </h1>
      </div>
    </section>
  );
}