import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion, useScroll, useSpring, useTransform } from "framer-motion";

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
  const containerRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const activeView = aranyaViews[activeIndex];

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const smoothProgress = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });
  const frameScale = useTransform(smoothProgress, [0.1, 0.45], [0.84, 1]);
  const frameRadius = useTransform(smoothProgress, [0.1, 0.45], ["42px", "0px"]);
  const frameOpacity = useTransform(smoothProgress, [0.04, 0.12, 0.84, 0.94], [0, 1, 1, 0]);
  const imageScale = useTransform(smoothProgress, [0.1, 0.8], [1.12, 1]);
  const imageY = useTransform(smoothProgress, [0.1, 0.8], ["-4%", "4%"]);
  const contentOpacity = useTransform(smoothProgress, [0.14, 0.28], [0, 1]);
  const contentY = useTransform(smoothProgress, [0.14, 0.28], [20, 0]);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % aranyaViews.length);
    }, 4200);

    return () => window.clearInterval(timer);
  }, []);

  return (
    <section ref={containerRef} className="relative z-20 h-[116vh] bg-[#f8f0df] sm:h-[124vh]">
      <div className="sticky top-0 flex h-screen w-full items-center justify-center overflow-hidden">
        <motion.div
          style={{
            scale: frameScale,
            borderRadius: frameRadius,
            opacity: frameOpacity,
          }}
          className="relative h-full w-full overflow-hidden bg-[#06100B] shadow-[0_0_100px_rgba(0,0,0,0.36)] md:h-screen"
        >
          <motion.div className="relative h-full w-full" style={{ y: imageY }}>
            <AnimatePresence mode="wait">
              <motion.img
                key={activeView.src}
                src={activeView.src}
                alt={activeView.label}
                style={{ scale: imageScale }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 1.05, ease: [0.22, 1, 0.36, 1] }}
                className="absolute inset-0 h-full w-full object-cover"
              />
            </AnimatePresence>
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/8 to-black/18" />
          </motion.div>

          <motion.div
            style={{ opacity: contentOpacity, y: contentY }}
            className="absolute inset-x-0 bottom-12 z-10 flex justify-end px-4 text-right sm:bottom-16 sm:px-8 lg:px-14"
          >
            <div className="max-w-[17rem] rounded-lg border border-white/20 bg-black/34 px-4 py-3 text-white shadow-[0_20px_60px_rgba(0,0,0,0.24)] backdrop-blur-md sm:max-w-xs sm:px-5 sm:py-4">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeView.note}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.45 }}
                >
                  <p className="text-[10px] font-bold uppercase tracking-[0.32em] text-[#f1d48a] opacity-100">
                    {activeView.label}
                  </p>
                  <p className="mt-2 text-sm font-medium leading-6 text-white/86 opacity-100">
                    {activeView.note}
                  </p>
                </motion.div>
              </AnimatePresence>
            </div>
          </motion.div>

          <div className="absolute left-6 top-6 hidden h-20 w-20 border-l border-t border-[#c9a44d]/18 md:block" />
          <div className="absolute bottom-6 right-6 hidden h-20 w-20 border-b border-r border-[#c9a44d]/18 md:block" />

          <div className="absolute bottom-6 left-1/2 z-20 flex -translate-x-1/2 items-center gap-3">
            {aranyaViews.map((view, index) => (
              <button
                key={view.src}
                type="button"
                onClick={() => setActiveIndex(index)}
                aria-label={`Show ${view.label}`}
                className={[
                  "h-2.5 rounded-full transition-all",
                  activeIndex === index ? "w-10 bg-[#c9a44d]" : "w-2.5 bg-white/55 hover:bg-white",
                ].join(" ")}
              />
            ))}
          </div>
        </motion.div>
      </div>

      <div className="absolute inset-x-0 bottom-0 z-30 bg-[#f8f0df] px-5 py-4 sm:px-8 sm:py-5 lg:px-14">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="mx-auto flex max-w-6xl flex-col gap-3 border-t border-[#c9a44d]/35 pt-4 md:flex-row md:items-end md:justify-between"
        >
          <div>
            <p className="mb-3 text-[10px] font-bold uppercase tracking-[0.36em] text-[#a87923] opacity-100">
              After the View
            </p>
            <h3 className="max-w-3xl font-serif text-xl leading-tight text-[#172018] sm:text-2xl md:text-4xl">
              Some places impress you once. Aranya is made to stay with you.
            </h3>
          </div>
          <p className="max-w-sm text-sm font-medium leading-6 text-[#314033]/72 opacity-100">
            A quieter return, a softer evening, a home that feels personal before it feels grand.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
