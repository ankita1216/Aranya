import { useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Maximize2, ChevronRight, ChevronLeft } from "lucide-react";
import StyleAccents from "./StyleAccents";

const galleryData = [
  { src: "/images/Entrance Cam_rang Homes.webp", title: "Grand Entrance", category: "Exteriors" },
  { src: "/images/Living Dining (00000)_6K.webp", title: "Luxury Living", category: "Interiors" },
  { src: "/images/Pool Cam.webp", title: "Infinity Pool", category: "Amenities" },
  { src: "/images/Master Bedroom_0015k.webp", title: "Master Suite", category: "Interiors" },
  { src: "/images/Club Cam_rang Homes_rev.webp", title: "The Clubhouse", category: "Amenities" },
  { src: "/images/Tower Lobby_001 (00000)_6K.webp", title: "Tower Lobby", category: "Interiors" },
  { src: "/images/Banquet (00000)_6K.webp", title: "Banquet Hall", category: "Amenities" },
  { src: "/images/GYM (00000)_6K.webp", title: "Fitness Center", category: "Amenities" },
  { src: "/images/Gaming Room (00000)_6K.webp", title: "Gaming Lounge", category: "Amenities" },
  { src: "/images/KIDs_Play (00000)_5k.webp", title: "Kids Indoor", category: "Amenities" },
  { src: "/images/Kids Cam_Rang Homes.webp", title: "Outdoor Play", category: "Exteriors" },
  { src: "/images/Shot_07_5KShot_07_5K.webp", title: "Balcony Views", category: "Interiors" },
  { src: "/images/Shot 15_V2.webp", title: "Landscaped Gardens", category: "Exteriors" },
  { src: "/images/Club lobby (00120)_6K.webp", title: "Club Lobby", category: "Interiors" },
  { src: "/images/Cam-02_Revised.webp", title: "Exterior Facade", category: "Exteriors" },
];

export default function GallerySection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [showLightbox, setShowLightbox] = useState(false);
  const [zoomScale, setZoomScale] = useState(1);

  const current = galleryData[activeIndex];

  const goTo = useCallback((i) => {
    const n = ((i % galleryData.length) + galleryData.length) % galleryData.length;
    setActiveIndex(n);
    setZoomScale(1);
  }, []);

  return (
    <section id="gallery" className="relative overflow-hidden bg-[#f6efe1] bg-gradient-to-b from-[#f5efe1] via-[#f8f0df] to-[#e7eadf] py-24 text-[#112018]">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-[#f5efe1] to-transparent" />
      <StyleAccents variant="style_1" position="center-left" size="w-56 sm:w-72 lg:w-96" opacity={0.18} rotate={12} />
      <StyleAccents variant="style_2" position="top-right" size="w-52 sm:w-72 lg:w-[26rem]" opacity={0.2} rotate={-18} flip />

      <div className="relative z-10 mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12">

        {/* --- HEADER SECTION --- */}
        <div className="relative mb-14 flex flex-col justify-between gap-8 overflow-visible md:flex-row md:items-end">
          <div className="relative min-h-[9rem] overflow-visible pb-2 pr-28 sm:pr-44 md:pr-56">
            <motion.span
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              key={`bg-num-${activeIndex}`}
              className="pointer-events-none absolute right-0 top-1/2 z-0 -translate-y-1/2 select-none font-serif text-[76px] font-bold leading-none text-[#C9A44D]/42 sm:text-[118px] md:-right-8 md:text-[138px] lg:-right-16"
            >
              {String(activeIndex + 1).padStart(2, "0")}
            </motion.span>
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="relative z-10 mb-4 flex items-center gap-3 text-[11px] font-bold uppercase tracking-[0.42em] text-[#C9A44D] opacity-100"
            >
              <span className="h-[2px] w-8 bg-[#C9A44D]" /> Gallery Section
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="relative z-10 font-serif text-4xl font-semibold leading-tight text-[#112018] md:text-6xl"
            >
              The <span className="font-medium italic text-[#C9A44D]">Gallery</span> Collection
            </motion.h2>
          </div>
          <p className="max-w-sm text-sm font-medium leading-7 text-[#314033]/72 opacity-100">
            A refined view of interiors, amenities, arrivals, and open-air moments across Aranya.
          </p>
        </div>

        {/* --- MAIN STAGE --- */}
        <div className="grid grid-cols-12 items-stretch gap-5 lg:gap-7">

          {/* Hero Image Container */}
          <div className="group relative col-span-12 overflow-hidden rounded-lg border border-[#C9A44D]/70 bg-white shadow-[0_26px_70px_rgba(47,42,28,0.16)] lg:col-span-9">
            <div className="aspect-[16/9] overflow-hidden bg-[#efe4cd]">
              <AnimatePresence mode="wait">
                <motion.img
                  key={current?.src}
                  src={current?.src}
                  initial={{ scale: 1.1, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ scale: 1.05, opacity: 0 }}
                  transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
                  className="h-full w-full object-cover"
                />
              </AnimatePresence>
            </div>

            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/82 via-black/22 to-black/10" />

            {/* Navigation Arrows for Mobile/Tablet */}
            <div className="pointer-events-none absolute inset-y-0 left-0 right-0 flex items-center justify-between px-4 lg:hidden">
              <button
                onClick={() => goTo(activeIndex - 1)}
                className="pointer-events-auto flex h-12 w-12 items-center justify-center rounded-full bg-white/70 text-[#112018] shadow-lg backdrop-blur-md"
              >
                <ChevronLeft size={24} strokeWidth={2.5} />
              </button>
              <button
                onClick={() => goTo(activeIndex + 1)}
                className="pointer-events-auto flex h-12 w-12 items-center justify-center rounded-full bg-white/70 text-[#112018] shadow-lg backdrop-blur-md"
              >
                <ChevronRight size={24} strokeWidth={2.5} />
              </button>
            </div>

            <div className="pointer-events-none absolute bottom-7 left-6 z-10 sm:bottom-10 sm:left-10 lg:bottom-12 lg:left-12">
              <motion.div
                key={current?.title}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
              >
                <p className="mb-2 text-[11px] font-black uppercase tracking-[0.4em] !text-white opacity-100 drop-shadow-[0_2px_12px_rgba(0,0,0,0.85)]">
                  {current?.category}
                </p>
                <h3 className="font-serif text-4xl font-semibold tracking-tight !text-white drop-shadow-[0_3px_18px_rgba(0,0,0,0.9)] md:text-6xl">
                  {current?.title}
                </h3>
              </motion.div>
            </div>

            {/* Lightbox Trigger */}
            <button
              onClick={() => setShowLightbox(true)}
              className="absolute right-6 top-6 flex h-12 w-12 items-center justify-center rounded-full border border-white/40 bg-white/24 text-white opacity-0 shadow-xl backdrop-blur-md transition-opacity group-hover:opacity-100"
            >
              <Maximize2 size={18} />
            </button>
          </div>

          {/* Sidebar Navigation */}
          <div className="col-span-3 hidden flex-col gap-6 rounded-lg border border-[#C9A44D]/70 bg-[#fff8eb]/78 p-5 shadow-[0_22px_54px_rgba(47,42,28,0.10)] lg:flex">
            <p className="text-[11px] font-bold uppercase tracking-widest text-[#1f4d3f] opacity-100">Next Perspective</p>
            <div
              className="group relative aspect-[4/5] cursor-pointer overflow-hidden rounded-lg bg-[#efe4cd]"
              onClick={() => goTo(activeIndex + 1)}
            >
              <AnimatePresence mode="wait">
                <motion.img
                  key={galleryData[(activeIndex + 1) % galleryData.length]?.src}
                  src={galleryData[(activeIndex + 1) % galleryData.length]?.src}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="h-full w-full object-cover transition-all duration-700 group-hover:scale-105"
                />
              </AnimatePresence>
              <div className="absolute inset-0 bg-gradient-to-t from-black/42 via-transparent to-transparent transition-colors group-hover:from-black/25" />
              <div className="absolute bottom-4 right-4 text-white drop-shadow-md">
                <ChevronRight size={40} strokeWidth={1.5} />
              </div>
            </div>

            {/* Progress Counter */}
            <div className="mt-2 flex items-center gap-4">
              <span className="font-serif text-2xl font-bold text-[#C9A44D]">{String(activeIndex + 1).padStart(2, '0')}</span>
              <div className="relative h-[2px] flex-1 bg-[#C9A44D]/22">
                <motion.div
                  animate={{ width: `${((activeIndex + 1) / galleryData.length) * 100}%` }}
                  className="absolute inset-y-0 left-0 bg-[#C9A44D]"
                />
              </div>
              <span className="text-[12px] font-bold text-[#314033]/48">{String(galleryData.length).padStart(2, '0')}</span>
            </div>
          </div>
        </div>
      </div>

      {/* --- LIGHTBOX (Omitting for brevity, remains same as previous) --- */}
      <AnimatePresence>
        {showLightbox && (
          <motion.div
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-[#0c0c0c] flex flex-col items-center justify-center p-8"
          >
            <button
              onClick={() => setShowLightbox(false)}
              className="absolute top-10 right-10 text-white/50 hover:text-gold transition-colors"
            >
              <X size={32} strokeWidth={1.5} />
            </button>
            <div className="relative w-full max-w-6xl aspect-video flex items-center justify-center overflow-hidden lg:overflow-visible">
              <button onClick={() => goTo(activeIndex - 1)} className="absolute left-2 lg:-left-16 text-white/50 lg:text-white/20 hover:text-gold transition-colors">
                <ChevronLeft size={64} strokeWidth={1} />
              </button>
              <motion.img
                key={current.src}
                src={current.src}
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: zoomScale, opacity: 1 }}
                className="max-h-[80vh] object-contain shadow-2xl"
              />
              <button onClick={() => goTo(activeIndex + 1)} className="absolute right-2 lg:-right-16 text-white/50 lg:text-white/20 hover:text-gold transition-colors">
                <ChevronRight size={64} strokeWidth={1} />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
