import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  GraduationCap, HeartPulse, ShoppingBag,
  Plane, ShieldCheck, MapPin, ChevronLeft, ChevronRight, Navigation
} from "lucide-react";
import StyleAccents from "./StyleAccents";

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

const mapUrl = "https://www.google.com/maps/search/?api=1&query=RH%20Aerocity%20Dharapur%20Palashbari%20Road%20Assam%20781017";

export default function LocationSection() {
  const [activeTab, setActiveTab] = useState(0);
  const activeLocation = locationData[activeTab];

  const nextTab = () => setActiveTab((prev) => (prev + 1) % locationData.length);
  const prevTab = () => setActiveTab((prev) => (prev - 1 + locationData.length) % locationData.length);

  return (
    <section id="location" className="relative overflow-hidden bg-[#f8f0df] py-14 text-[#112018] sm:py-18 md:py-24">
      {/* BACKGROUND IMAGE FIX: Increased opacity, removed multiply blend mode */}
      <img
        src="/images/Entrance Cam_rang Homes.webp"
        alt=""
        aria-hidden="true"
        className="absolute inset-0 h-full w-full object-cover opacity-60"
      />
      {/* 
        OVERLAY FIX: 
        Left side is mostly solid cream for text readability. 
        Right side fades to transparent so the image shows clearly! 
      */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#f8f0df]/95 via-[#f8f0df]/70 to-[#f8f0df]/10" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#f8f0df] via-transparent to-[#f8f0df]/80" />

      <StyleAccents variant="style_1" position="top-left" size="w-56 sm:w-72 lg:w-96" opacity={0.18} rotate={-16} />
      <StyleAccents variant="style_2" position="bottom-right" size="w-56 sm:w-80 lg:w-[28rem]" opacity={0.18} rotate={20} flip />

      <div className="relative z-10 mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12">
        <div className="mb-8 grid gap-6 sm:mb-10 sm:gap-8 lg:grid-cols-[minmax(0,0.95fr)_minmax(420px,0.75fr)] lg:items-end">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="mb-4 flex items-center gap-3">
              <span className="h-[2px] w-9 bg-[#1f4d3f]" />
              <span className="text-[11px] font-bold uppercase tracking-[0.42em] text-[#1f4d3f] opacity-100">The Address</span>
            </div>
            <h2 className="max-w-4xl font-serif text-4xl font-light leading-[1.02] text-[#112018] sm:text-5xl md:text-7xl">
              Project Location <br />
              <span className="font-light italic text-[#1f4d3f]">& Nearby Places</span>
            </h2>
            <p className="mt-5 max-w-2xl text-sm font-medium leading-7 text-[#112018]/80 opacity-100 sm:mt-7 sm:text-base sm:leading-8">
              Aranya sits where the city begins to slow down: close to the airport, connected to everyday essentials, yet held inside a calmer residential edge.
            </p>
          </motion.div>

          <div className="rounded-3xl border border-[#7f917b]/30 bg-white/40 p-4 shadow-[0_28px_90px_rgba(114,129,110,0.15)] backdrop-blur-xl sm:p-5">
            <p className="mb-3 text-[10px] font-bold uppercase tracking-[0.34em] text-[#1f4d3f] opacity-100">
              Site Address
            </p>
            <div className="flex items-start gap-4">
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-[#1f4d3f]/30 bg-[#1f4d3f]/10 text-[#1f4d3f]">
                <MapPin size={22} />
              </span>
              <div>
                <h3 className="font-serif text-2xl leading-tight text-[#112018] sm:text-3xl">RH Aerocity, Dharapur</h3>
                <p className="mt-2 text-sm font-medium leading-7 text-[#112018]/70 opacity-100">
                  Palashbari Road, Assam 781017
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="grid gap-4 sm:gap-6 lg:grid-cols-[320px_minmax(0,1fr)]">
          <aside className="rounded-3xl border border-[#7f917b]/30 bg-white/40 p-3 shadow-[0_24px_70px_rgba(114,129,110,0.15)] backdrop-blur-xl">
            <div className="grid grid-cols-1 gap-2 min-[420px]:grid-cols-2 sm:grid-cols-3 lg:grid-cols-1">
              {locationData.map((item, idx) => {
                const Icon = item.icon;
                const isActive = activeTab === idx;

                return (
                  <button
                    key={item.id}
                    onClick={() => setActiveTab(idx)}
                    className={[
                      "flex min-w-0 items-center gap-3 rounded-2xl border p-3 text-left transition-all",
                      isActive
                        ? "border-[#1f4d3f]/50 bg-[#1f4d3f] text-[#f8f0df] shadow-[0_18px_38px_rgba(64,114,102,0.25)]"
                        : "border-[#7f917b]/20 bg-white/30 text-[#112018]/70 hover:border-[#1f4d3f]/40 hover:text-[#112018]",
                    ].join(" ")}
                  >
                    <span
                      className={[
                        "flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border",
                        isActive ? "border-[#112018]/20 bg-[#112018] text-[#f8f0df]" : "border-[#7f917b]/30 bg-white/50 text-[#1f4d3f]",
                      ].join(" ")}
                    >
                      <Icon size={19} strokeWidth={1.6} />
                    </span>
                    <span className="min-w-0">
                      <span className="block text-[10px] font-bold uppercase tracking-[0.24em] opacity-70">
                        0{idx + 1}
                      </span>
                      <span className="block truncate text-sm font-semibold">
                        {item.category}
                      </span>
                    </span>
                  </button>
                );
              })}
            </div>
          </aside>

          <div className="grid gap-6 xl:grid-cols-[minmax(0,1fr)_400px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeLocation.id}
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.45, ease: "circOut" }}
                className="rounded-3xl border border-[#7f917b]/30 bg-white/40 p-5 shadow-[0_24px_70px_rgba(114,129,110,0.15)] backdrop-blur-xl sm:p-6"
              >
                <div className="mb-6 flex items-start justify-between gap-5">
                  <div>
                    <p className="mb-2 text-[10px] font-bold uppercase tracking-[0.34em] text-[#1f4d3f] opacity-100">
                      Route Notes
                    </p>
                    <h3 className="font-serif text-3xl leading-tight text-[#112018] md:text-4xl">
                      {activeLocation.category}
                    </h3>
                  </div>
                  <div className="flex gap-3">
                    <button onClick={prevTab} className="flex h-11 w-11 items-center justify-center rounded-full border border-[#7f917b]/30 bg-white/50 text-[#1f4d3f] transition hover:border-[#1f4d3f] hover:text-[#112018]">
                      <ChevronLeft size={19} />
                    </button>
                    <button onClick={nextTab} className="flex h-11 w-11 items-center justify-center rounded-full border border-[#7f917b]/30 bg-white/50 text-[#1f4d3f] transition hover:border-[#1f4d3f] hover:text-[#112018]">
                      <ChevronRight size={19} />
                    </button>
                  </div>
                </div>

                <div className="grid gap-3 md:grid-cols-2">
                  {activeLocation.places.map((place, idx) => (
                    <motion.div
                      key={place.name}
                      initial={{ opacity: 0, y: 14 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: idx * 0.06 }}
                      className="group rounded-2xl border border-[#7f917b]/20 bg-white/30 p-5 transition hover:border-[#1f4d3f]/50 hover:bg-white/60"
                    >
                      <div className="mb-5 flex items-center justify-between gap-4">
                        <span className="font-serif text-3xl leading-none text-[#1f4d3f]">
                          {place.distance}
                        </span>
                        <MapPin size={16} className="text-[#112018]/40 transition group-hover:text-[#1f4d3f]" />
                      </div>
                      <div className="mb-3 h-px w-10 bg-[#1f4d3f]/40 transition group-hover:w-full" />
                      <h4 className="text-sm font-semibold uppercase tracking-[0.12em] text-[#112018]/80">
                        {place.name}
                      </h4>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </AnimatePresence>

            <div className="relative min-h-[22rem] overflow-hidden rounded-3xl border border-[#7f917b]/30 bg-[#f8f0df]/80 p-5 text-[#112018] shadow-[0_26px_70px_rgba(114,129,110,0.15)] backdrop-blur-xl sm:min-h-[28rem] sm:p-6">
              {/* IMAGE FIX: Boosted opacity and removed multiply blend */}
              <img
                src="/images/Shot_07_5KShot_07_5K.webp"
                alt=""
                aria-hidden="true"
                className="absolute inset-0 h-full w-full object-cover opacity-50"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#f8f0df]/90 via-[#f8f0df]/60 to-[#f8f0df]/30" />

              <div className="relative z-10 flex h-full flex-col justify-between">
                <div>
                  <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-xl border border-[#1f4d3f]/30 bg-[#1f4d3f]/10 text-[#1f4d3f]">
                    <Navigation size={24} />
                  </div>
                  <p className="mb-3 text-[10px] font-bold uppercase tracking-[0.36em] text-[#1f4d3f] opacity-100">
                    Map Access
                  </p>
                  <h3 className="font-serif text-3xl leading-tight text-[#112018] sm:text-4xl md:text-5xl">
                    The route home should feel simple.
                  </h3>
                  <p className="mt-4 max-w-xs text-sm font-medium leading-7 text-[#112018]/80 opacity-100">
                    Open the exact project location and let the journey begin from wherever you are.
                  </p>
                </div>

                <a
                  href={mapUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-10 inline-flex items-center justify-center rounded-full bg-[#1f4d3f] px-6 py-4 text-[11px] font-bold uppercase tracking-[0.28em] text-white transition hover:bg-[#112018]"
                >
                  View Google Map
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
