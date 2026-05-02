import { useState, useCallback, useRef } from "react";
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
              className="text-[120px] font-serif text-gold/5 absolute -top-16 -left-4 pointer-events-none select-none"
            >
              {String(activeIndex + 1).padStart(2, "0")}
            </motion.span>
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="uppercase tracking-[0.4em] text-[10px] text-gold mb-4 flex items-center gap-3"
            >
              <span className="w-8 h-[1px] bg-gold/40" /> Curated Spaces
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-4xl md:text-6xl font-serif text-deep-green leading-tight"
            >
              The <span className="italic text-gold">Visual</span> Collection
            </motion.h2>
          </div>
        </div>

        {/* --- MAIN STAGE --- */}
        <div className="grid grid-cols-12 gap-4 items-center">

          {/* Hero Image Container */}
          <div className="col-span-12 lg:col-span-9 relative group">
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

            {/* Navigation Arrows for Mobile/Tablet (Visible when no sidebar) */}
            <div className="absolute inset-y-0 left-0 right-0 flex justify-between items-center px-4 lg:hidden pointer-events-none">
              <button
                onClick={() => goTo(activeIndex - 1)}
                className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white pointer-events-auto"
              >
                <ChevronLeft size={20} />
              </button>
              <button
                onClick={() => goTo(activeIndex + 1)}
                className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white pointer-events-auto"
              >
                <ChevronRight size={20} />
              </button>
            </div>

            {/* Image Overlay Label */}
            <div className="absolute bottom-8 left-8 z-10">
              <motion.div
                key={current?.title}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                className="bg-deep-green/90 backdrop-blur-md p-6 text-white min-w-[240px]"
              >
                <p className="text-[9px] uppercase tracking-widest text-gold/80 mb-2">{current?.category}</p>
                <h3 className="text-2xl font-serif">{current?.title}</h3>
              </motion.div>
            </div>

            {/* Lightbox Trigger */}
            <button
              onClick={() => setShowLightbox(true)}
              className="absolute top-6 right-6 w-12 h-12 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity"
            >
              <Maximize2 size={18} />
            </button>
          </div>

          {/* Sidebar Navigation / Next Preview */}
          <div className="hidden lg:flex col-span-3 flex-col gap-6 pl-8">
            <p className="text-[10px] uppercase tracking-widest text-deep-green/30 italic">Next Perspective</p>
            <div
              className="relative aspect-[4/5] overflow-hidden cursor-pointer group"
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
              <div className="absolute inset-0 bg-deep-green/20 group-hover:bg-transparent transition-colors" />
              <div className="absolute bottom-4 right-4 text-white">
                <ChevronRight size={32} strokeWidth={1} />
              </div>
            </div>

            {/* Progress Counter */}
            <div className="flex items-center gap-4 mt-4">
              <span className="text-gold font-serif text-xl">{String(activeIndex + 1).padStart(2, '0')}</span>
              <div className="flex-1 h-[1px] bg-gold/20 relative">
                <motion.div
                  animate={{ width: `${((activeIndex + 1) / galleryData.length) * 100}%` }}
                  className="absolute inset-y-0 left-0 bg-gold"
                />
              </div>
              <span className="text-deep-green/30 text-[10px]">{String(galleryData.length).padStart(2, '0')}</span>
            </div>
          </div>
        </div>
      </div>

      {/* --- PREMIUM LIGHTBOX --- */}
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
              <X size={32} strokeWidth={1} />
            </button>

            <div className="relative w-full max-w-6xl aspect-video flex items-center justify-center">
              <button onClick={() => goTo(activeIndex - 1)} className="absolute -left-16 text-white/20 hover:text-gold">
                <ChevronLeft size={48} strokeWidth={1} />
              </button>

              <motion.img
                key={current.src}
                src={current.src}
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: zoomScale, opacity: 1 }}
                className="max-h-[80vh] object-contain shadow-2xl"
              />

              <button onClick={() => goTo(activeIndex + 1)} className="absolute -right-16 text-white/20 hover:text-gold">
                <ChevronRight size={48} strokeWidth={1} />
              </button>
            </div>

            {/* Lightbox Controls */}
            <div className="absolute bottom-10 flex items-center gap-6 bg-white/5 backdrop-blur-xl px-8 py-4 rounded-full border border-white/10">
              <button onClick={() => setZoomScale(s => Math.max(s - 0.2, 0.5))} className="text-white/60 hover:text-gold"><ZoomOut size={20} /></button>
              <span className="text-gold text-[10px] tracking-widest uppercase min-w-[60px] text-center">Zoom {Math.round(zoomScale * 100)}%</span>
              <button onClick={() => setZoomScale(s => Math.min(s + 0.2, 3))} className="text-white/60 hover:text-gold"><ZoomIn size={20} /></button>
              <div className="w-[1px] h-4 bg-white/10" />
              <button onClick={() => setZoomScale(1)} className="text-white/60 hover:text-gold"><RotateCcw size={18} /></button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}