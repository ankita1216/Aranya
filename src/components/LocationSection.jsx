import React, { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";
import { 
  GraduationCap, 
  HeartPulse, 
  ShoppingBag, 
  Plane, 
  ShieldCheck,
  MapPin,
  ChevronLeft,
  ChevronRight
} from "lucide-react";

const locationData = [
  {
    id: "education",
    category: "Education",
    icon: GraduationCap,
    places: [
      { name: "Dharapur Higher Secondary School", distance: "2.2 km" },
      { name: "Girijananda Chowdhury University", distance: "2.9 km" },
      { name: "Assam Don Bosco University", distance: "3.5 km" },
      { name: "Assamese School", distance: "5.2 km" },
      { name: "Guwahati University", distance: "6.5 km" }
    ]
  },
  {
    id: "healthcare",
    category: "Healthcare",
    icon: HeartPulse,
    places: [
      { name: "Guwahati University Hospital", distance: "10.7 km" },
      { name: "Apollo Excelcare Hospital", distance: "13.2 km" }
    ]
  },
  {
    id: "shopping",
    category: "Shopping & Lifestyle",
    icon: ShoppingBag,
    places: [
      { name: "Kiranshree Grand Hotel", distance: "3.7 km" },
      { name: "University Shopping Complex", distance: "6.6 km" },
      { name: "Decathlon Azara", distance: "6.7 km" },
      { name: "NCS Square Mall", distance: "9.0 km" },
      { name: "Westside", distance: "9.0 km" }
    ]
  },
  {
    id: "connectivity",
    category: "Connectivity",
    icon: Plane,
    places: [
      { name: "Lokpriya Gopinath Bordoloi Int. Airport", distance: "2 km" },
      { name: "Jalukbari Flyover", distance: "10 km" }
    ]
  },
  {
    id: "essentials",
    category: "Essentials",
    icon: ShieldCheck,
    places: [
      { name: "BCPL Petrol Pump Super Service", distance: "650 m" },
      { name: "Dharapur Chariali", distance: "2.2 km" },
      { name: "Indian Oil Ramani Service Station", distance: "3.7 km" },
      { name: "Azara Police Station", distance: "4.8 km" }
    ]
  }
];

export default function LocationSection() {
  const scrollContainerRef = useRef(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  const handleScroll = () => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
      // Prevent division by zero if not scrollable
      if (scrollWidth > clientWidth) {
        const progress = scrollLeft / (scrollWidth - clientWidth);
        setScrollProgress(progress);
      } else {
        setScrollProgress(0);
      }
    }
  };

  const scroll = (direction) => {
    if (scrollContainerRef.current) {
      const { clientWidth } = scrollContainerRef.current;
      scrollContainerRef.current.scrollBy({
        left: direction === 'left' ? -clientWidth : clientWidth,
        behavior: 'smooth'
      });
    }
  };

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (container) {
      container.addEventListener('scroll', handleScroll);
      // Initialize progress
      handleScroll();
      return () => container.removeEventListener('scroll', handleScroll);
    }
  }, []);

  return (
    <section id="location" className="relative bg-deep-green overflow-hidden section-padding">
      {/* Hide scrollbar styles */}
      <style>{`
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
      
      {/* --- Background Decorative Watermark --- */}
      <div className="absolute inset-0 flex items-center justify-start pointer-events-none opacity-[0.02] overflow-hidden z-0 pl-10">
         <h1 className="text-[25vw] whitespace-nowrap text-[#F8F3E7]">
           ARANYA SURROUNDINGS
         </h1>
      </div>

      {/* --- Section Header --- */}
      <div className="max-w-7xl mx-auto w-full relative z-20 mb-2 md:mb-8 shrink-0 px-4 md:px-0">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl"
        >
          <div className="flex items-center gap-4 mb-3 md:mb-4">
            <div className="w-8 md:w-12 h-[1px] bg-gold"></div>
            <span className="uppercase-track text-gold">Prime Location</span>
          </div>
          <h2 className="text-white">
            Everything You Need,<br/>
            <span className="text-gold italic">Within Your Reach</span>
          </h2>
          <p className="max-w-2xl text-white/80">
            Aranya is perfectly situated to offer seamless connectivity to key city landmarks, premium healthcare, top educational institutions, and vibrant lifestyle destinations.
          </p>
        </motion.div>
      </div>

      {/* --- Horizontal Scroll Track --- */}
      <div 
        ref={scrollContainerRef}
        className="flex w-full items-center relative z-10 overflow-x-auto snap-x snap-mandatory hide-scrollbar pb-12"
      >
         {locationData.map((category, index) => (
            <div key={category.id} className="min-w-full w-full flex flex-col justify-center px-6 md:px-12 xl:px-24 relative snap-center shrink-0">
              
              {/* Category Header */}
              <div className="mb-12 md:mb-24">
                  <div className="flex items-center gap-4 md:gap-6 mb-6">
                    <div className="p-3 md:p-5 bg-white/10 rounded-full border border-white/30">
                      <category.icon className="text-white" size={36} strokeWidth={1.5} />
                    </div>
                    <h2 className="tracking-tight text-white">{category.category}</h2>
                  </div>
                 <div className="w-24 md:w-48 h-[1px] bg-gradient-to-r from-[#C9A44D] to-transparent" />
              </div>

              {/* Timeline Layout */}
              <div className="relative w-full max-w-7xl mx-auto">
                 
                 {/* Central Timeline Line (Desktop Only) */}
                  <div className="absolute top-1/2 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#F8F3E7]/10 to-transparent -translate-y-1/2 hidden xl:block" />

                  <div className="grid grid-cols-1 md:grid-cols-2 xl:flex xl:flex-row justify-center xl:justify-between gap-6 md:gap-4 relative z-10 w-full">
                   {category.places.map((place, idx) => {
                      const isTop = idx % 2 === 0;
                      
                      return (
                          <div key={idx} className={`flex-1 flex flex-col ${isTop ? 'xl:justify-end xl:pb-20' : 'xl:justify-start xl:pt-20'} relative group min-w-0`}>
                            
                            {/* Connection Line & Node (Desktop Only) */}
                             <div className={`hidden xl:block absolute left-1/2 -translate-x-1/2 w-[1px] bg-gradient-to-b from-[#C9A44D]/0 via-[#C9A44D]/40 to-[#C9A44D]/0 transition-all duration-700 opacity-50 group-hover:opacity-100 ${isTop ? 'bottom-0 h-20' : 'top-0 h-20'}`} />
                             <div className={`hidden xl:block absolute left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-[#12382A] border-[3px] border-[#C9A44D]/50 group-hover:border-[#C9A44D] group-hover:shadow-[0_0_20px_rgba(201,164,77,0.8)] group-hover:bg-[#C9A44D] transition-all duration-500 z-20 ${isTop ? 'bottom-[-8px]' : 'top-[-8px]'}`} />

                            {/* Content Card */}
                            <div className="flex flex-row md:flex-col items-center md:items-start gap-4 md:gap-2 p-4 md:p-6 rounded-2xl bg-[#F8F3E7]/5 border border-transparent group-hover:border-[#C9A44D]/30 group-hover:bg-[#F8F3E7]/10 transition-all duration-500 backdrop-blur-md relative z-30 mx-2 md:mx-4 hover:-translate-y-2 md:hover:-translate-y-0 hover:shadow-2xl w-full min-w-0 overflow-hidden">
                               <div className="flex items-center gap-3 shrink-0">
                                 <div className="p-2 rounded-full bg-deep-green border border-white/20 group-hover:border-white transition-colors duration-500">
                                    <MapPin size={18} className="text-white/40 group-hover:text-white transition-colors" />
                                 </div>
                                  <span className="font-serif font-bold text-sm md:text-lg text-white break-normal whitespace-normal">{place.distance}</span>
                               </div>
                               <h3 className="text-sm md:text-base md:mt-2 text-left text-white w-full break-normal whitespace-normal leading-tight">{place.name}</h3>
                            </div>

                         </div>
                      )
                   })}
                 </div>
              </div>

           </div>
         ))}
      </div>

      {/* --- Navigation Controls --- */}
       <div className="absolute bottom-10 left-0 right-0 px-6 md:px-12 xl:px-24 flex items-center justify-between z-50 pointer-events-none">
         {/* Left Arrow */}
          <button 
            onClick={() => scroll('left')}
            className={`p-3 md:p-4 rounded-full bg-deep-green border border-white/30 text-white backdrop-blur-md transition-all duration-300 pointer-events-auto hover:bg-white hover:text-deep-green shadow-lg ${scrollProgress <= 0.01 ? 'opacity-0 translate-y-4' : 'opacity-100 translate-y-0 hover:scale-110'}`}
          >
           <ChevronLeft size={24} />
         </button>

         {/* Scroll Progress Indicator */}
          <div className="flex flex-col items-center gap-3 pointer-events-auto">
            <span className="uppercase-track text-white/80 flex items-center gap-2">
              Explore Surroundings
            </span>
            <div className="w-[120px] md:w-[200px] h-[2px] bg-white/10 rounded-full overflow-hidden relative">
              <motion.div 
                className="h-full bg-white absolute top-0 left-0"
                style={{ width: `${scrollProgress * 100}%` }}
                layout
              />
            </div>
          </div>

         {/* Right Arrow */}
          <button 
            onClick={() => scroll('right')}
            className={`p-3 md:p-4 rounded-full bg-deep-green border border-white/30 text-white backdrop-blur-md transition-all duration-300 pointer-events-auto hover:bg-white hover:text-deep-green shadow-lg ${scrollProgress >= 0.99 ? 'opacity-0 translate-y-4' : 'opacity-100 translate-y-0 hover:scale-110'}`}
          >
           <ChevronRight size={24} />
         </button>
      </div>
    </section>
  );
}
