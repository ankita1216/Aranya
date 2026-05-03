import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import StyleAccents from "./StyleAccents";

const aranyaViews = [
  {
    src: "/images/Aranya.webp",
    label: "Arrival View",
    note: "Arrival framed by landscape.",
  },
  {
    src: "/images/Aranya2.png",
    label: "Garden Edge",
    note: "Homes layered with open greens.",
  },
  {
    src: "/images/Aranya3.png",
    label: "Evening Mood",
    note: "A warmer evening perspective.",
  },
  {
    src: "/images/Aranya4.png",
    label: "Wide Perspective",
    note: "The complete Aranya canvas.",
  },
];

export default function AranyaHighlight() {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeView = aranyaViews[activeIndex];

  // Simple, clean auto-play interval
  useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % aranyaViews.length);
    }, 4200);

    return () => window.clearInterval(timer);
  }, []);

  return (
    <section className="relative z-20 overflow-hidden bg-[#f8f0df] bg-gradient-to-b from-[#7f917b]/34 via-[#f8f0df] via-50% to-[#7f917b]/42">
      {/* 
        Aesthetic Gradient Background: 
        Starts with a soft mix of green (#7f917b) at the top, 
        transitions to pure cream (#f8f0df) in the middle, 
        and fades back into a slightly deeper green mix at the bottom.
      */}
      <StyleAccents variant="style_2" position="top-right" size="w-52 sm:w-72 lg:w-[28rem]" opacity={0.18} rotate={-12} />
      <StyleAccents variant="style_1" position="bottom-left" size="w-56 sm:w-80 lg:w-[30rem]" opacity={0.18} rotate={18} flip />

      {/* Main Gallery Area */}
      <div className="relative z-10 flex h-[80vh] w-full items-center justify-center overflow-hidden sm:h-[90vh]">
        <AnimatePresence mode="wait">
          <motion.img
            key={activeView.src}
            src={activeView.src}
            alt={activeView.label}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            className="absolute inset-0 h-full w-full object-contain p-4 sm:p-8"
          />
        </AnimatePresence>

        {/* Gradient overlay to ensure text is always readable over bright images */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/50 via-black/5 to-transparent" />

        {/* Floating Content Card */}
        <div className="absolute inset-x-0 bottom-16 z-10 flex justify-center px-6 sm:bottom-20 md:justify-end md:px-12 lg:px-20">
          <div className="w-full max-w-[17rem] rounded-lg border border-white/10 bg-black/30 px-5 py-4 text-white shadow-2xl backdrop-blur-md sm:max-w-xs">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeView.note}
                initial={{ opacity: 0, y: 5 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -5 }}
                transition={{ duration: 0.4 }}
              >
                <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#f8f0df]">
                  {activeView.label}
                </p>
                <p className="mt-2 text-sm font-medium leading-relaxed text-white/90">
                  {activeView.note}
                </p>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Minimalist Corner Accents (Updated to the new green) */}
        <div className="absolute left-8 top-8 hidden h-16 w-16 border-l border-t border-[#7f917b]/50 md:block" />
        <div className="absolute bottom-8 right-8 hidden h-16 w-16 border-b border-r border-[#7f917b]/50 md:block" />

        {/* Navigation Dots */}
        <div className="absolute bottom-6 left-1/2 z-20 flex -translate-x-1/2 items-center gap-3">
          {aranyaViews.map((view, index) => (
            <button
              key={view.src}
              type="button"
              onClick={() => setActiveIndex(index)}
              aria-label={`Show ${view.label}`}
              className={`h-2 rounded-full transition-all duration-300 ${activeIndex === index
                  ? "w-10 bg-[#f8f0df]"
                  : "w-2 bg-[#f8f0df]/40 hover:bg-[#f8f0df]/80"
                }`}
            />
          ))}
        </div>
      </div>

      {/* After the View — dark green block, fully readable */}
      <div className="relative z-30 bg-[#0f2318]">
        {/* thin gold top border */}
        <div className="h-[2px] w-full" style={{ background: "linear-gradient(90deg, transparent, #C9A44D 30%, #C9A44D 70%, transparent)" }} />

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="mx-auto max-w-7xl px-6 py-16 sm:px-12 lg:px-20"
        >
          <div className="flex flex-col gap-10 md:flex-row md:items-end md:justify-between">
            {/* Left */}
            <div className="md:max-w-2xl">
              <p className="mb-5 flex items-center gap-3 text-[10px] font-bold uppercase tracking-[0.42em] text-[#C9A44D]">
                <span className="h-px w-8 bg-[#C9A44D]" />
                After the View
              </p>
              <h3 className="font-serif text-3xl font-light leading-tight text-white sm:text-4xl md:text-5xl">
                Some places impress you once.{" "}
                <em className="not-italic text-[#C9A44D]">Aranya</em> is made to stay with you.
              </h3>
            </div>

            {/* Right */}
            <div className="md:max-w-xs md:text-right">
              <p className="text-[15px] font-light leading-8 text-white/60">
                A quieter return, a softer evening, a home that feels personal before it feels grand.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
