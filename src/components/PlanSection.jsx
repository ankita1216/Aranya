import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ZoomIn, ZoomOut, Maximize } from "lucide-react";

const unitsData = [
  {
    id: "A",
    name: "Unit A",
    plans: [
      { id: "A", label: "Standard", image: "/images/UNIT-A .webp" }
    ]
  },
  {
    id: "B",
    name: "Unit B",
    plans: [
      { id: "B1", label: "Unit B1", image: "/images/UNIT-B1.webp" },
      { id: "B1B", label: "Unit B1B", image: "/images/UNIT-B1B.webp" },
      { id: "B1C", label: "Unit B1C", image: "/images/UNIT-B1C.webp" },
      { id: "B2", label: "Unit B2", image: "/images/UNIT-B2.webp" },
      { id: "B3", label: "Unit B3", image: "/images/UNIT-B3.webp" },
      { id: "B3A", label: "Unit B3A", image: "/images/UNIT-B3A.webp" },
      { id: "B3B", label: "Unit B3B", image: "/images/UNIT-B3B.webp" },
      { id: "B4", label: "Unit B4", image: "/images/UNIT-B4 .webp" },
      { id: "B4A", label: "Unit B4A", image: "/images/UNIT-B4A.webp" },
      { id: "B6", label: "Unit B6", image: "/images/UNIT-B6.webp" }
    ]
  },
  {
    id: "C",
    name: "Unit C",
    plans: [
      { id: "C1", label: "Unit C1", image: "/images/UNIT-C1.webp" },
      { id: "C1A", label: "Unit C1A", image: "/images/UNIT-C1A.webp" },
      { id: "C1B", label: "Unit C1B", image: "/images/UNIT-C1B.webp" },
      { id: "C2", label: "Unit C2", image: "/images/UNIT-C2 .webp" },
      { id: "C2A", label: "Unit C2A", image: "/images/UNIT-C2A.webp" }
    ]
  },
  {
    id: "D",
    name: "Unit D",
    plans: [
      { id: "D", label: "Standard", image: "/images/UNIT-D.webp" }
    ]
  }
];

export default function PlanSection() {
  const [activeUnit, setActiveUnit] = useState("B");
  const [activeSubTab, setActiveSubTab] = useState(unitsData.find(u => u.id === "B").plans[0].id);
  const [zoom, setZoom] = useState(1);
  const containerRef = useRef(null);

  const currentUnit = unitsData.find((u) => u.id === activeUnit);
  const currentPlan = currentUnit.plans.find((p) => p.id === activeSubTab) || currentUnit.plans[0];

  const handleUnitChange = (id) => {
    setActiveUnit(id);
    const newUnit = unitsData.find((u) => u.id === id);
    setActiveSubTab(newUnit.plans[0].id); // Reset to first plan of new unit
    setZoom(1);
  };

  return (
    <section id="plans" className="relative  bg-deep-green overflow-hidden">
      {/* Background aesthetics */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[rgba(201,164,77,0.03)] rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-[rgba(18,56,42,0.4)] rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto w-full relative z-20 mb-2 md:mb-8 px-4 md:px-0">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl"
        >
          <div className="flex items-center gap-4 mb-3 md:mb-4">
            <div className="w-8 md:w-12 h-[1px] bg-gold"></div>
            <span className="uppercase-track text-gold">Architectural Excellence</span>
          </div>
          <h2 className="text-white">
            Floor <span className="text-gold italic">Plans</span>
          </h2>
          <p className="max-w-2xl text-white/80">
            Meticulously crafted spaces designed for elevated living, combining functional brilliance with aesthetic grace.
          </p>
        </motion.div>
      </div>

      <div className="max-w-7xl mx-auto w-full relative z-20 px-4 md:px-0">
        {/* Tabs Container */}
        <div className="flex flex-col gap-8">
          {/* Primary Tabs */}
          <div className="flex flex-wrap items-center justify-center md:justify-start gap-6 md:gap-12 border-b border-[rgba(201,164,77,0.15)] pb-4 relative">
            {unitsData.map((unit) => {
              const isActive = activeUnit === unit.id;
              return (
                <button
                  key={unit.id}
                  onClick={() => handleUnitChange(unit.id)}
                  className={`relative uppercase-track pb-2 transition-colors duration-500 ${isActive ? "text-gold" : "text-white/40 hover:text-white/80"}`}
                >
                  {unit.name}
                  {isActive && (
                    <motion.div
                      layoutId="primary-tab-indicator"
                      className="absolute left-0 right-0 bottom-[-16px] h-[2px] bg-gold"
                      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                    />
                  )}
                </button>
              );
            })}
          </div>

          {/* Secondary Tabs (Subtabs) */}
          <AnimatePresence mode="wait">
            {currentUnit.plans.length > 1 && (
              <motion.div
                key={`subtabs-${activeUnit}`}
                initial={{ opacity: 0, height: 0, y: -10 }}
                animate={{ opacity: 1, height: "auto", y: 0 }}
                exit={{ opacity: 0, height: 0, y: -10 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                className="flex flex-wrap items-center justify-center md:justify-start gap-3 md:gap-4 overflow-hidden"
              >
                {currentUnit.plans.map((plan) => {
                  const isActive = activeSubTab === plan.id;
                  return (
                    <button
                      key={plan.id}
                      onClick={() => { setActiveSubTab(plan.id); setZoom(1); }}
                      className={`relative uppercase-track text-[9px] py-2 px-4 rounded-full border transition-all duration-300 ${isActive
                          ? "border-gold text-gold bg-gold/5 shadow-[0_0_15px_rgba(201,164,77,0.15)]"
                          : "border-white/10 text-white/40 hover:border-white/30 hover:text-white/80"
                        }`}
                    >
                      {plan.label}
                    </button>
                  );
                })}
              </motion.div>
            )}
          </AnimatePresence>

          {/* Plan Display Area */}
          <div
            ref={containerRef}
            className="relative w-full aspect-square md:aspect-video bg-black/20 rounded-2xl border border-gold/10 overflow-hidden flex items-center justify-center p-6 md:p-12 mt-2"
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={`${activeUnit}-${activeSubTab}`}
                initial={{ opacity: 0, filter: "blur(5px)" }}
                animate={{ opacity: 1, filter: "blur(0px)" }}
                exit={{ opacity: 0, filter: "blur(5px)" }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                className={`w-full h-full flex items-center justify-center ${zoom > 1 ? "cursor-grab active:cursor-grabbing" : "cursor-pointer"}`}
              >
                <motion.img
                  src={currentPlan.image}
                  alt={`${currentUnit.name} Plan ${currentPlan.label}`}
                  className="w-full h-full object-contain"
                  style={{ filter: "drop-shadow(0 0 20px rgba(201,164,77,0.1))" }}
                  animate={{ scale: zoom }}
                  drag={zoom > 1}
                  dragConstraints={containerRef}
                  dragElastic={0.1}
                  onClick={() => setZoom(z => z === 1 ? 2 : 1)}
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                />
              </motion.div>
            </AnimatePresence>

            {/* Zoom Controls */}
            <div className="absolute bottom-6 md:bottom-10 right-6 md:right-10 flex gap-2 bg-deep-green/70 p-2 rounded-xl backdrop-blur-md border border-gold/10 z-20">
              <button onClick={() => setZoom(z => Math.min(z + 0.5, 4))} className="p-2 text-[#C9A44D] hover:bg-[rgba(201,164,77,0.1)] rounded-lg transition-colors">
                <ZoomIn size={18} />
              </button>
              <button onClick={() => setZoom(1)} className="p-2 text-[#C9A44D] hover:bg-[rgba(201,164,77,0.1)] rounded-lg transition-colors">
                <Maximize size={18} />
              </button>
              <button onClick={() => setZoom(z => Math.max(z - 0.5, 1))} className="p-2 text-[#C9A44D] hover:bg-[rgba(201,164,77,0.1)] rounded-lg transition-colors">
                <ZoomOut size={18} />
              </button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
