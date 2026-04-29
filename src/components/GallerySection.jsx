import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight, Maximize2 } from "lucide-react";

const galleryData = [
  { src: "/images/Entrance Cam_rang Homes.webp", title: "Grand Entrance", category: "Exteriors" },
  { src: "/images/Club Cam_rang Homes_rev.webp", title: "The Clubhouse", category: "Amenities" },
  { src: "/images/Pool Cam.webp", title: "Infinity Pool", category: "Amenities" },
  { src: "/images/Living Dining (00000)_6K.webp", title: "Luxury Living Room", category: "Interiors" },
  { src: "/images/Cam-02_Revised.webp", title: "Exterior Facade", category: "Exteriors" },
  { src: "/images/Master Bedroom_0015k.webp", title: "Master Suite", category: "Interiors" },
  { src: "/images/Tower Lobby_001 (00000)_6K.webp", title: "Tower Lobby", category: "Interiors" },
  { src: "/images/Banquet (00000)_6K.webp", title: "Banquet Hall", category: "Amenities" },
  { src: "/images/GYM (00000)_6K.webp", title: "Fitness Center", category: "Amenities" },
  { src: "/images/Gaming Room (00000)_6K.webp", title: "Gaming Lounge", category: "Amenities" },
  { src: "/images/KIDs_Play (00000)_5k.webp", title: "Indoor Kids Area", category: "Amenities" },
  { src: "/images/Kids Cam_Rang Homes.webp", title: "Outdoor Play Area", category: "Exteriors" },
  { src: "/images/Shot_07_5KShot_07_5K.webp", title: "Balcony Views", category: "Interiors" },
  { src: "/images/Shot 15_V2.webp", title: "Landscaped Gardens", category: "Exteriors" },
  { src: "/images/Club lobby (00120)_6K.webp", title: "Club Lobby", category: "Interiors" },
];

export default function GallerySection() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  // Split gallery into two rows for the marquee
  const row1 = galleryData.slice(0, 8);
  const row2 = galleryData.slice(8, 15);

  // Lock body scroll when lightbox is open
  useEffect(() => {
    if (selectedImage) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [selectedImage]);

  const openLightbox = (image, globalIndex) => {
    setCurrentIndex(globalIndex);
    setSelectedImage(image);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  const nextImage = (e) => {
    e.stopPropagation();
    const newIndex = (currentIndex + 1) % galleryData.length;
    setCurrentIndex(newIndex);
    setSelectedImage(galleryData[newIndex]);
  };

  const prevImage = (e) => {
    e.stopPropagation();
    const newIndex = (currentIndex - 1 + galleryData.length) % galleryData.length;
    setCurrentIndex(newIndex);
    setSelectedImage(galleryData[newIndex]);
  };

  // Helper component to render a marquee row
  const MarqueeRow = ({ items, direction = "left", speed = 40, offsetIndex = 0 }) => {
    // Duplicate items so the scroll appears seamless
    const doubledItems = [...items, ...items];
    
    return (
      <div 
        className="relative flex overflow-hidden whitespace-nowrap w-full py-4"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <motion.div
          className="flex gap-6 md:gap-10 items-center px-4"
          animate={{
            x: direction === "left" ? ["0%", "-50%"] : ["-50%", "0%"]
          }}
          transition={{
            repeat: Infinity,
            ease: "linear",
            duration: speed,
          }}
          // Pause the entire marquee when user hovers over any image
          style={{ animationPlayState: isHovered ? "paused" : "running" }}
        >
          {doubledItems.map((item, index) => {
            // Find global index for lightbox navigation
            const globalIndex = galleryData.findIndex(g => g.src === item.src);
            
            return (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05 }}
                className="relative shrink-0 w-[280px] h-[350px] md:w-[400px] md:h-[500px] rounded-2xl overflow-hidden cursor-pointer group shadow-[0_10px_30px_rgba(0,0,0,0.3)]"
                onClick={() => openLightbox(item, globalIndex)}
              >
                <img 
                  src={item.src} 
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[rgba(10,25,18,0.9)] via-[rgba(10,25,18,0.2)] to-transparent opacity-60 group-hover:opacity-90 transition-opacity duration-500" />
                
                {/* Border glow */}
                <div className="absolute inset-0 border border-[#C9A44D] opacity-0 group-hover:opacity-40 rounded-2xl transition-opacity duration-500 pointer-events-none" />

                <div className="absolute bottom-6 left-6 flex flex-col items-start translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  <span className="uppercase-track text-[9px] text-white mb-2 drop-shadow-md">
                    {item.category}
                  </span>
                  <h3 className="text-xl md:text-2xl drop-shadow-md whitespace-normal text-white">
                    {item.title}
                  </h3>
                </div>

                <div className="absolute top-6 right-6 w-10 h-10 rounded-full bg-[rgba(201,164,77,0.1)] backdrop-blur-md border border-[rgba(201,164,77,0.3)] flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 shadow-xl group-hover:scale-110">
                  <Maximize2 size={16} color="#C9A44D" />
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    );
  };

  return (
    <section id="gallery" className="relative section-padding bg-gold-theme overflow-hidden flex flex-col justify-center min-h-screen">
      {/* Background aesthetics */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[rgba(201,164,77,0.03)] rounded-full blur-[150px] pointer-events-none" />

      {/* Header */}
      <div className="text-center mb-16 relative z-10 flex flex-col items-center">
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="uppercase-track text-white mb-4"
        >
          The Gallery
        </motion.p>
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-white"
        >
          Endless Elegance
        </motion.h2>
        <motion.div 
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
          style={{ width: 60, height: 1, background: "linear-gradient(90deg, transparent, #C9A44D, transparent)" }}
          className="mt-8"
        />
      </div>

      {/* Infinite Seamless Marquees */}
      <div className="relative z-10 w-full flex flex-col gap-4 md:gap-8">
        <MarqueeRow items={row1} direction="left" speed={45} />
        <MarqueeRow items={row2} direction="right" speed={55} />
      </div>

      {/* Cinematic Full-Screen Lightbox */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-[rgba(6,16,11,0.98)] backdrop-blur-2xl"
            onClick={closeLightbox}
          >
            {/* Close Button */}
            <button 
              className="absolute top-8 right-8 z-50 p-4 rounded-full bg-[rgba(255,255,255,0.05)] hover:bg-[rgba(201,164,77,0.2)] transition-colors border border-[rgba(255,255,255,0.1)] hover:border-[#C9A44D]"
              onClick={closeLightbox}
            >
              <X size={24} color="#F8F3E7" />
            </button>

            {/* Navigation Buttons */}
            <button 
              className="absolute left-4 md:left-12 z-50 p-4 rounded-full bg-[rgba(255,255,255,0.05)] hover:bg-[rgba(201,164,77,0.2)] transition-colors border border-[rgba(255,255,255,0.1)] hover:border-[#C9A44D]"
              onClick={prevImage}
            >
              <ChevronLeft size={24} color="#F8F3E7" />
            </button>
            
            <button 
              className="absolute right-4 md:right-12 z-50 p-4 rounded-full bg-[rgba(255,255,255,0.05)] hover:bg-[rgba(201,164,77,0.2)] transition-colors border border-[rgba(255,255,255,0.1)] hover:border-[#C9A44D]"
              onClick={nextImage}
            >
              <ChevronRight size={24} color="#F8F3E7" />
            </button>

            {/* Main Image Container */}
            <div className="w-full h-full p-4 md:p-24 flex items-center justify-center flex-col relative" onClick={(e) => e.stopPropagation()}>
              <AnimatePresence mode="wait">
                <motion.img
                  key={currentIndex}
                  src={selectedImage.src}
                  alt={selectedImage.title}
                  initial={{ opacity: 0, scale: 0.95, filter: "blur(10px)" }}
                  animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                  exit={{ opacity: 0, scale: 1.05, filter: "blur(10px)" }}
                  transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                  className="max-w-full max-h-[85vh] object-contain rounded-lg shadow-[0_0_50px_rgba(201,164,77,0.15)]"
                />
              </AnimatePresence>
              
              <motion.div 
                key={`text-${currentIndex}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.1 }}
                className="absolute bottom-8 md:bottom-12 text-center"
              >
                <h3 className="text-2xl md:text-3xl tracking-widest text-[#C9A44D]" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                  {selectedImage.title}
                </h3>
                <p className="text-[10px] tracking-[0.3em] uppercase mt-2 opacity-50 text-[#F8F3E7]">
                  {selectedImage.category} • {currentIndex + 1} / {galleryData.length}
                </p>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
