import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  GraduationCap, HeartPulse, ShoppingBag,
  Plane, ShieldCheck, MapPin, ChevronLeft, ChevronRight, Navigation
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

const mapUrl = "https://www.google.com/maps/search/?api=1&query=RH%20Aerocity%20Dharapur%20Palashbari%20Road%20Assam%20781017";

export default function LocationSection() {
  const [activeTab, setActiveTab] = useState(0);
  const activeLocation = locationData[activeTab];

  const nextTab = () => setActiveTab((prev) => (prev + 1) % locationData.length);
  const prevTab = () => setActiveTab((prev) => (prev - 1 + locationData.length) % locationData.length);

  return (
    <section id="location" className="relative overflow-hidden bg-[#08180f] py-14 text-white sm:py-18 md:py-24">
      <img
        src="/images/Entrance Cam_rang Homes.webp"
        alt=""
        aria-hidden="true"
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-[#07140d]/96 via-[#07140d]/72 to-[#07140d]/28" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#07140d] via-transparent to-[#07140d]/42" />
      <div className="pointer-events-none absolute -right-28 top-16 h-96 w-96 rounded-full bg-[#c9a44d]/18 blur-3xl" />

      <div className="relative z-10 mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12">
        <div className="mb-8 grid gap-6 sm:mb-10 sm:gap-8 lg:grid-cols-[minmax(0,0.95fr)_minmax(420px,0.75fr)] lg:items-end">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="mb-4 flex items-center gap-3">
              <span className="h-[2px] w-9 bg-[#c9a44d]" />
              <span className="text-[11px] font-bold uppercase tracking-[0.42em] text-[#f1d48a] opacity-100">The Address</span>
            </div>
            <h2 className="max-w-4xl font-serif text-4xl font-light leading-[1.02] text-white sm:text-5xl md:text-7xl">
              Project Location <br />
              <span className="font-light italic text-[#f1d48a]">& Nearby Places</span>
            </h2>
            <p className="mt-5 max-w-2xl text-sm font-light leading-7 text-white/72 opacity-100 sm:mt-7 sm:text-base sm:leading-8">
              Aranya sits where the city begins to slow down: close to the airport, connected to everyday essentials, yet held inside a calmer residential edge.
            </p>
          </motion.div>

          <div className="rounded-3xl border border-white/14 bg-white/[0.08] p-4 shadow-[0_28px_90px_rgba(0,0,0,0.26)] backdrop-blur-xl sm:p-5">
            <p className="mb-3 text-[10px] font-bold uppercase tracking-[0.34em] text-[#f1d48a] opacity-100">
              Site Address
            </p>
            <div className="flex items-start gap-4">
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-[#c9a44d]/35 bg-[#c9a44d]/12 text-[#f1d48a]">
                <MapPin size={22} />
              </span>
              <div>
                <h3 className="font-serif text-2xl leading-tight text-white sm:text-3xl">RH Aerocity, Dharapur</h3>
                <p className="mt-2 text-sm leading-7 text-white/68 opacity-100">
                  Palashbari Road, Assam 781017
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="grid gap-4 sm:gap-6 lg:grid-cols-[320px_minmax(0,1fr)]">
          <aside className="rounded-3xl border border-white/12 bg-black/24 p-3 shadow-[0_24px_70px_rgba(0,0,0,0.22)] backdrop-blur-xl">
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
                        ? "border-[#c9a44d]/55 bg-[#c9a44d] text-[#172018] shadow-[0_18px_38px_rgba(201,164,77,0.22)]"
                        : "border-white/10 bg-white/[0.055] text-white/68 hover:border-[#c9a44d]/45 hover:text-white",
                    ].join(" ")}
                  >
                    <span
                      className={[
                        "flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border",
                        isActive ? "border-[#172018]/20 bg-[#172018] text-[#f1d48a]" : "border-white/10 bg-white/8 text-[#f1d48a]",
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
                className="rounded-3xl border border-white/12 bg-white/[0.09] p-5 shadow-[0_24px_70px_rgba(0,0,0,0.24)] backdrop-blur-xl sm:p-6"
              >
                <div className="mb-6 flex items-start justify-between gap-5">
                  <div>
                    <p className="mb-2 text-[10px] font-bold uppercase tracking-[0.34em] text-[#f1d48a] opacity-100">
                      Route Notes
                    </p>
                    <h3 className="font-serif text-3xl leading-tight text-white md:text-4xl">
                      {activeLocation.category}
                    </h3>
                  </div>
                  <div className="flex gap-3">
                    <button onClick={prevTab} className="flex h-11 w-11 items-center justify-center rounded-full border border-white/14 bg-white/8 text-white transition hover:border-[#c9a44d] hover:text-[#f1d48a]">
                      <ChevronLeft size={19} />
                    </button>
                    <button onClick={nextTab} className="flex h-11 w-11 items-center justify-center rounded-full border border-white/14 bg-white/8 text-white transition hover:border-[#c9a44d] hover:text-[#f1d48a]">
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
                      className="group rounded-2xl border border-white/10 bg-black/20 p-5 transition hover:border-[#c9a44d]/50 hover:bg-black/28"
                    >
                      <div className="mb-5 flex items-center justify-between gap-4">
                        <span className="font-serif text-3xl leading-none text-[#f1d48a]">
                          {place.distance}
                        </span>
                        <MapPin size={16} className="text-white/44 transition group-hover:text-[#f1d48a]" />
                      </div>
                      <div className="mb-3 h-px w-10 bg-[#c9a44d]/55 transition group-hover:w-full" />
                      <h4 className="text-sm font-semibold uppercase tracking-[0.12em] text-white/82">
                        {place.name}
                      </h4>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </AnimatePresence>

            <div className="relative min-h-[22rem] overflow-hidden rounded-3xl border border-white/12 bg-[#06100b]/74 p-5 text-white shadow-[0_26px_70px_rgba(0,0,0,0.28)] backdrop-blur-xl sm:min-h-[28rem] sm:p-6">
              <img
                src="/images/Shot_07_5KShot_07_5K.webp"
                alt=""
                aria-hidden="true"
                className="absolute inset-0 h-full w-full object-cover opacity-34"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#06100b] via-[#06100b]/72 to-[#06100b]/40" />

              <div className="relative z-10 flex h-full flex-col justify-between">
                <div>
                  <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-xl border border-[#c9a44d]/35 bg-[#c9a44d]/12 text-[#f1d48a]">
                    <Navigation size={24} />
                  </div>
                  <p className="mb-3 text-[10px] font-bold uppercase tracking-[0.36em] text-[#f1d48a] opacity-100">
                    Map Access
                  </p>
                  <h3 className="font-serif text-3xl leading-tight text-white sm:text-4xl md:text-5xl">
                    The route home should feel simple.
                  </h3>
                  <p className="mt-4 max-w-xs text-sm leading-7 text-white/68 opacity-100">
                    Open the exact project location and let the journey begin from wherever you are.
                  </p>
                </div>

                <a
                  href={mapUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-10 inline-flex items-center justify-center rounded-full bg-[#c9a44d] px-6 py-4 text-[11px] font-bold uppercase tracking-[0.28em] text-[#142419] transition hover:bg-white"
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
