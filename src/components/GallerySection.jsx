import { useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ZoomIn, ZoomOut, Maximize2, RotateCcw, ChevronRight, ChevronLeft } from "lucide-react";
import DecorativeElements from "./DecorativeElements";

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
  }, [galleryData.length]);

  return (
    <section id="gallery" className="bg-warm-white py-24 overflow-hidden relative">
      <DecorativeElements type="organic" position="left-top" opacity={0.08} size="w-80" />
      <DecorativeElements type="leaf" position="right-bottom" opacity={0.06} size="w-64" />

      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">

        {/* --- HEADER SECTION --- */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
          <div className="relative">
            <motion.span
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              key={`bg-num-${activeIndex}`}
              className="text-[120px] font-bold font-serif text-gold/10 absolute -top-16 -left-4 pointer-events-none select-none"
            >
              {String(activeIndex + 1).padStart(2, "0")}
            </motion.span>
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="uppercase tracking-[0.4em] text-[12px] font-bold text-gold mb-4 flex items-center gap-3"
            >
              <span className="w-8 h-[2px] bg-gold" /> Curated Spaces
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-4xl md:text-6xl font-bold font-serif text-deep-green leading-tight"
            >
              The <span className="italic text-gold font-medium">Visual</span> Collection
            </motion.h2>
          </div>
        </div>

        {/* --- MAIN STAGE --- */}
        <div className="grid grid-cols-12 gap-4 items-center">

          {/* Hero Image Container */}
          <div className="col-span-12 lg:col-span-9 relative group rounded-sm overflow-hidden shadow-2xl">
            <div className="aspect-[16/9] overflow-hidden bg-stone-200">
              <AnimatePresence mode="wait">
                <motion.img
                  key={current?.src}
                  src={current?.src}
                  initial={{ scale: 1.1, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ scale: 1.05, opacity: 0 }}
                  transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
                  className="w-full h-full object-cover"
                />
              </AnimatePresence>
            </div>

            {/* Subtler bottom-up gradient for text readability, slightly increased from previous to further ensure readability with dark green text */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />

            {/* Navigation Arrows for Mobile/Tablet */}
            <div className="absolute inset-y-0 left-0 right-0 flex justify-between items-center px-4 lg:hidden pointer-events-none">
              <button
                onClick={() => goTo(activeIndex - 1)}
                className="w-12 h-12 rounded-full bg-white/40 backdrop-blur-md flex items-center justify-center text-deep-green pointer-events-auto shadow-lg"
              >
                <ChevronLeft size={24} strokeWidth={2.5} />
              </button>
              <button
                onClick={() => goTo(activeIndex + 1)}
                className="w-12 h-12 rounded-full bg-white/40 backdrop-blur-md flex items-center justify-center text-deep-green pointer-events-auto shadow-lg"
              >
                <ChevronRight size={24} strokeWidth={2.5} />
              </button>
            </div>

            {/* --- LABEL SECTION (UPDATED TO GREEN WITH ENHANCED READABILITY) --- */}
            <div className="absolute bottom-12 left-12 z-10 pointer-events-none">
              <motion.div
                key={current?.title}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                // text-shadow added via inline style for precision and enhanced readability on image
                style={{ textShadow: '2px 2px 10px rgba(0,0,0,0.9), 0px 0px 5px rgba(0,0,0,0.7)' }}
              >
                <p className="text-[12px] uppercase tracking-[0.4em] font-black text-gold mb-2 drop-shadow-lg">
                  {current?.category}
                </p>
                {/* Text color changed from text-white to text-deep-green, additional drop-shadow for visibility against darker image areas */}
                <h3 className="text-4xl md:text-6xl font-bold font-serif text-deep-green tracking-tight drop-shadow-2xl">
                  {current?.title}
                </h3>
              </motion.div>
            </div>

            {/* Lightbox Trigger */}
            <button
              onClick={() => setShowLightbox(true)}
              className="absolute top-6 right-6 w-12 h-12 rounded-full bg-white/20 backdrop-blur-md border border-white/30 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity shadow-xl"
            >
              <Maximize2 size={18} />
            </button>
          </div>

          {/* Sidebar Navigation */}
          <div className="hidden lg:flex col-span-3 flex-col gap-6 pl-8">
            <p className="text-[11px] font-bold uppercase tracking-widest text-deep-green/40 italic">Next Perspective</p>
            <div
              className="relative aspect-[4/5] overflow-hidden cursor-pointer group rounded-sm"
              onClick={() => goTo(activeIndex + 1)}
            >
              <AnimatePresence mode="wait">
                <motion.img
                  key={galleryData[(activeIndex + 1) % galleryData.length]?.src}
                  src={galleryData[(activeIndex + 1) % galleryData.length]?.src}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                />
              </AnimatePresence>
              <div className="absolute inset-0 bg-deep-green/10 group-hover:bg-transparent transition-colors" />
              <div className="absolute bottom-4 right-4 text-white drop-shadow-md">
                <ChevronRight size={40} strokeWidth={1.5} />
              </div>
            </div>

            {/* Progress Counter */}
            <div className="flex items-center gap-4 mt-4">
              <span className="text-gold font-bold font-serif text-2xl">{String(activeIndex + 1).padStart(2, '0')}</span>
              <div className="flex-1 h-[2px] bg-gold/20 relative">
                <motion.div
                  animate={{ width: `${((activeIndex + 1) / galleryData.length) * 100}%` }}
                  className="absolute inset-y-0 left-0 bg-gold"
                />
              </div>
              <span className="text-deep-green/40 font-bold text-[12px]">{String(galleryData.length).padStart(2, '0')}</span>
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
            <div className="relative w-full max-w-6xl aspect-video flex items-center justify-center">
              <button onClick={() => goTo(activeIndex - 1)} className="absolute -left-16 text-white/20 hover:text-gold transition-colors">
                <ChevronLeft size={64} strokeWidth={1} />
              </button>
              <motion.img
                key={current.src}
                src={current.src}
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: zoomScale, opacity: 1 }}
                className="max-h-[80vh] object-contain shadow-2xl"
              />
              <button onClick={() => goTo(activeIndex + 1)} className="absolute -right-16 text-white/20 hover:text-gold transition-colors">
                <ChevronRight size={64} strokeWidth={1} />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}