import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ZoomIn, ZoomOut, Maximize2, ChevronLeft, ChevronRight, RotateCcw } from "lucide-react";

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

const CATEGORIES = ["All", "Exteriors", "Interiors", "Amenities"];

export default function GallerySection() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState(1);
  const [showLightbox, setShowLightbox] = useState(false);
  const [zoomScale, setZoomScale] = useState(1);

  const filtered = activeCategory === "All"
    ? galleryData
    : galleryData.filter(i => i.category === activeCategory);

  const safeIndex = Math.min(activeIndex, filtered.length - 1);
  const current = filtered[safeIndex];

  const goTo = useCallback((i) => {
    setDirection(i > safeIndex ? 1 : -1);
    setActiveIndex(i);
    setZoomScale(1); // Reset zoom on image change
  }, [safeIndex]);

  const handleCategory = (cat) => {
    setActiveCategory(cat);
    setActiveIndex(0);
    setZoomScale(1);
  };

  const toggleLightbox = () => {
    setShowLightbox(!showLightbox);
    setZoomScale(1);
  };

  const handleZoom = (delta) => {
    setZoomScale(prev => Math.min(Math.max(prev + delta, 0.5), 3));
  };

  // Keyboard support
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!showLightbox) return;
      if (e.key === "Escape") toggleLightbox();
      if (e.key === "ArrowRight") goTo((safeIndex + 1) % filtered.length);
      if (e.key === "ArrowLeft") goTo((safeIndex - 1 + filtered.length) % filtered.length);
      if (e.key === "+") handleZoom(0.2);
      if (e.key === "-") handleZoom(-0.2);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [showLightbox, safeIndex, filtered.length, goTo]);

  return (
    <section
      id="gallery"
      className="bg-warm-white section-padding overflow-hidden relative"
    >
      {/* ── Header ── */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16 flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <p className="uppercase-track text-gold mb-2">
            The Gallery
          </p>
          <h2 className="text-deep-green">
            Endless <em className="text-gold italic">Elegance</em>
          </h2>
        </motion.div>

        {/* Category filters */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex flex-wrap gap-2"
        >
          {CATEGORIES.map(cat => (
            <button
              key={cat}
              onClick={() => handleCategory(cat)}
              className={`uppercase-track text-[9px] px-4 py-2 border transition-all duration-300 ${activeCategory === cat
                  ? "bg-gold text-white border-gold"
                  : "bg-transparent text-deep-green/40 border-deep-green/10 hover:border-deep-green/30"
                }`}
            >
              {cat}
            </button>
          ))}
        </motion.div>
      </div>

      {/* ── Main area: image + sidebar ── */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16 grid grid-cols-1 lg:grid-cols-[1fr_320px] gap-8">

        {/* LEFT: active image — natural size, no crop */}
        <div style={{ position: "relative" }}>
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={current?.src}
              custom={direction}
              initial={{ opacity: 0, y: direction * 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: direction * -20 }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="group cursor-zoom-in relative"
              onClick={toggleLightbox}
            >
              <img
                src={current?.src}
                alt={current?.title}
                style={{
                  width: "100%",
                  height: "auto",
                  display: "block",
                  maxHeight: "72vh",
                  objectFit: "cover",
                  objectPosition: "top left",
                  background: "#0D1A11",
                }}
              />
              <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <div className="bg-gold/90 p-3 rounded-full text-deep-green transform scale-90 group-hover:scale-100 transition-transform">
                  <Maximize2 size={24} />
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Caption bar below image */}
          <AnimatePresence mode="wait">
            <motion.div
              key={current?.src + "-caption"}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.35 }}
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                padding: "14px 0",
                borderBottom: "1px solid rgba(45,86,68,0.15)",
              }}
            >
              <div>
                <span style={{
                  fontFamily: "sans-serif", fontSize: 9,
                  letterSpacing: "0.3em", textTransform: "uppercase",
                  color: "#C9A44D", marginRight: 16,
                }}>
                  {current?.category}
                </span>
                <span style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontSize: 20, fontWeight: 400, color: "#2D5644",
                }}>
                  {current?.title}
                </span>
              </div>
              <span style={{
                fontFamily: "sans-serif", fontSize: 10,
                letterSpacing: "0.2em", color: "rgba(45,86,68,0.25)",
              }}>
                {String(safeIndex + 1).padStart(2, "0")} / {String(filtered.length).padStart(2, "0")}
              </span>
            </motion.div>
          </AnimatePresence>

          {/* Prev / Next */}
          <div style={{ display: "flex", gap: 8, marginTop: 16 }}>
            <button
              onClick={() => goTo((safeIndex - 1 + filtered.length) % filtered.length)}
              style={{
                width: 44, height: 44, background: "transparent",
                border: "1px solid rgba(45,86,68,0.12)",
                color: "rgba(45,86,68,0.45)",
                cursor: "pointer", fontSize: 18,
                display: "flex", alignItems: "center", justifyContent: "center",
                transition: "all 0.2s",
              }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = "#C9A44D"; e.currentTarget.style.color = "#C9A44D"; }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = "rgba(45,86,68,0.12)"; e.currentTarget.style.color = "rgba(45,86,68,0.45)"; }}
            >←</button>
            <button
              onClick={() => goTo((safeIndex + 1) % filtered.length)}
              style={{
                width: 44, height: 44, background: "transparent",
                border: "1px solid rgba(45,86,68,0.12)",
                color: "rgba(45,86,68,0.45)",
                cursor: "pointer", fontSize: 18,
                display: "flex", alignItems: "center", justifyContent: "center",
                transition: "all 0.2s",
              }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = "#C9A44D"; e.currentTarget.style.color = "#C9A44D"; }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = "rgba(45,86,68,0.12)"; e.currentTarget.style.color = "rgba(45,86,68,0.45)"; }}
            >→</button>
          </div>
        </div>

        {/* RIGHT: thumbnail list */}
        <div style={{
          display: "flex",
          flexDirection: "column",
          maxHeight: "80vh",
          overflowY: "auto",
          scrollbarWidth: "none",
          borderLeft: "1px solid rgba(45,86,68,0.06)",
          paddingLeft: 2,
        }}>
          {filtered.map((item, i) => {
            const isActive = i === safeIndex;
            return (
              <motion.button
                key={item.src}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.4, delay: i * 0.03 }}
                onClick={() => goTo(i)}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 12,
                  padding: "10px 16px",
                  background: isActive ? "rgba(201,164,77,0.07)" : "transparent",
                  border: "none",
                  borderBottom: "1px solid rgba(45,86,68,0.05)",
                  borderLeft: isActive ? "2px solid #C9A44D" : "2px solid transparent",
                  cursor: "pointer",
                  textAlign: "left",
                  transition: "all 0.2s ease",
                  flexShrink: 0,
                }}
                onMouseEnter={e => { if (!isActive) e.currentTarget.style.background = "rgba(45,86,68,0.025)"; }}
                onMouseLeave={e => { if (!isActive) e.currentTarget.style.background = "transparent"; }}
              >
                {/* Thumb */}
                <div style={{ width: 60, height: 40, flexShrink: 0, overflow: "hidden" }}>
                  <img
                    src={item.src}
                    alt={item.title}
                    style={{
                      width: "100%", height: "100%",
                      objectFit: "cover", display: "block",
                      opacity: isActive ? 1 : 0.45,
                      transition: "opacity 0.2s",
                    }}
                  />
                </div>

                {/* Label */}
                <div className="flex-1 min-w-0">
                  <p className={`uppercase-track text-[9px] mb-1 transition-colors duration-300 ${isActive ? "text-gold" : "text-deep-green/20"}`}>
                    {item.category}
                  </p>
                  <p className={`font-serif text-sm transition-colors duration-300 truncate ${isActive ? "text-deep-green" : "text-deep-green/40"}`}>
                    {item.title}
                  </p>
                </div>

                {/* Active indicator */}
                <div style={{
                  width: 3, height: 3, borderRadius: "50%",
                  background: isActive ? "#C9A44D" : "transparent",
                  flexShrink: 0, transition: "background 0.2s",
                }} />
              </motion.button>
            );
          })}
        </div>
      </div>

      {/* ── Lightbox Modal ── */}
      <AnimatePresence>
        {showLightbox && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-sm flex flex-col items-center justify-center overflow-hidden"
          >
            {/* Top Bar */}
            <div className="absolute top-0 left-0 right-0 p-6 flex items-center justify-between z-[110]">
              <div className="text-white/60 text-xs tracking-widest uppercase">
                {current?.category} — <span className="text-gold">{current?.title}</span>
              </div>
              <button
                onClick={toggleLightbox}
                className="p-2 text-white/60 hover:text-white transition-colors"
              >
                <X size={32} strokeWidth={1.5} />
              </button>
            </div>

            {/* Main Content Area */}
            <div className="relative w-full h-full flex items-center justify-center p-4 md:p-12 overflow-hidden">
              {/* Navigation Buttons */}
              <button
                onClick={(e) => { e.stopPropagation(); goTo((safeIndex - 1 + filtered.length) % filtered.length); }}
                className="absolute left-4 md:left-8 z-[110] p-4 text-white/30 hover:text-gold transition-colors bg-white/5 hover:bg-white/10 rounded-full"
              >
                <ChevronLeft size={32} />
              </button>
              <button
                onClick={(e) => { e.stopPropagation(); goTo((safeIndex + 1) % filtered.length); }}
                className="absolute right-4 md:right-8 z-[110] p-4 text-white/30 hover:text-gold transition-colors bg-white/5 hover:bg-white/10 rounded-full"
              >
                <ChevronRight size={32} />
              </button>

              {/* Image Container with Zoom */}
              <motion.div
                className="relative flex items-center justify-center w-full h-full"
                drag={zoomScale > 1}
                dragConstraints={{ left: -500, right: 500, top: -500, bottom: 500 }}
              >
                <motion.img
                  key={current?.src}
                  src={current?.src}
                  alt={current?.title}
                  initial={{ scale: 0.9, opacity: 0 }}
                  animate={{ scale: zoomScale, opacity: 1 }}
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  style={{
                    maxHeight: "85vh",
                    maxWidth: "90vw",
                    objectFit: "contain",
                    cursor: zoomScale > 1 ? "grab" : "default",
                  }}
                  whileDrag={{ cursor: "grabbing" }}
                />
              </motion.div>
            </div>

            {/* Bottom Controls */}
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex items-center gap-6 bg-white/5 backdrop-blur-md px-8 py-4 rounded-full border border-white/10 z-[110]">
              <button
                onClick={() => handleZoom(-0.2)}
                disabled={zoomScale <= 0.5}
                className="text-white/60 hover:text-gold disabled:opacity-20 transition-colors"
                title="Zoom Out"
              >
                <ZoomOut size={24} strokeWidth={1.5} />
              </button>
              
              <div className="w-12 text-center text-white/60 font-mono text-sm">
                {Math.round(zoomScale * 100)}%
              </div>

              <button
                onClick={() => handleZoom(0.2)}
                disabled={zoomScale >= 3}
                className="text-white/60 hover:text-gold disabled:opacity-20 transition-colors"
                title="Zoom In"
              >
                <ZoomIn size={24} strokeWidth={1.5} />
              </button>

              <div className="w-px h-6 bg-white/10 mx-2" />

              <button
                onClick={() => setZoomScale(1)}
                className="text-white/60 hover:text-gold transition-colors"
                title="Reset"
              >
                <RotateCcw size={22} strokeWidth={1.5} />
              </button>
            </div>

            {/* Counter */}
            <div className="absolute bottom-8 right-8 text-white/20 text-sm tracking-[0.2em] z-[110]">
              {String(safeIndex + 1).padStart(2, "0")} / {String(filtered.length).padStart(2, "0")}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
