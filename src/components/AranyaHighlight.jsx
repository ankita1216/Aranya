import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { useRef } from "react";
import DecorativeElements from "./DecorativeElements";

export default function AranyaHighlight() {
  const containerRef = useRef(null);

  // Track scroll progress for the cinematic expansion
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const smoothProgress = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });

  // Frame expansion logic: Starts as a contained box and grows to full screen
  const frameScale = useTransform(smoothProgress, [0.1, 0.45], [0.85, 1]);
  const frameRadius = useTransform(smoothProgress, [0.1, 0.45], ["40px", "0px"]);
  const frameOpacity = useTransform(smoothProgress, [0.05, 0.15, 0.85, 0.95], [0, 1, 1, 0]);

  // Internal image parallax/zoom
  const imageScale = useTransform(smoothProgress, [0.1, 0.8], [1.15, 1]);
  const imageY = useTransform(smoothProgress, [0.1, 0.8], ["-5%", "5%"]);

  // Text reveal logic
  const contentOpacity = useTransform(smoothProgress, [0.1, 0.25], [0, 1]);
  const contentY = useTransform(smoothProgress, [0.1, 0.25], [40, 0]);

  return (
    <section
      ref={containerRef}
      className="relative h-[180vh] bg-warm-white z-20"
    >
      <DecorativeElements type="leaf" position="left-top" opacity={0.06} size="w-72" />
      <DecorativeElements type="organic" position="right-bottom" opacity={0.08} size="w-80" />
      <div className="sticky top-0 h-screen w-full flex items-center justify-center overflow-hidden">
        <motion.div
          style={{
            scale: frameScale,
            borderRadius: frameRadius,
            opacity: frameOpacity
          }}
          className="relative w-[100%] h-full md:h-screen overflow-hidden bg-[#06100B] shadow-[0_0_100px_rgba(0,0,0,0.4)]"
        >
          {/* Main Background Image */}
          <motion.div
            className="w-full h-full relative"
            style={{ y: imageY }}
          >
            <motion.img
              style={{ scale: imageScale }}
              src="/images/Aranya.webp"
              alt="Aranya Landmark"
              className="w-full h-full object-cover"
            />

            {/* Cinematic Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-black/40" />
          </motion.div>

          {/* Floating Content Overlay */}
          <motion.div
            style={{ opacity: contentOpacity, y: contentY }}
            className="absolute inset-0 flex flex-col items-center justify-center text-center px-6 md:px-20"
          >
            <div className="relative z-10">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1 }}
                className="mb-8"
              >
                <div className="flex items-center justify-center gap-4 mb-6">
                  <div className="w-12 h-[1px] bg-gold/50" />
                  <span className="uppercase-track text-gold text-xs md:text-sm tracking-[0.6em]">The Landmark</span>
                  <div className="w-12 h-[1px] bg-gold/50" />
                </div>

                <h2 className="!text-white mb-10 drop-shadow-2xl">
                  Nature's <br />
                  <span className="italic text-gold font-light">Grandeur</span>
                </h2>
              </motion.div>

              <div className="w-24 h-[1px] bg-gold mx-auto mb-10" />

              <p className="!text-white/80 text-lg md:text-4xl font-light tracking-wide leading-relaxed max-w-4xl mx-auto italic font-serif">
                "A masterpiece where every corner whispers the story of grace."
              </p>
            </div>
          </motion.div>

          {/* Decorative Elements */}
          <div className="absolute top-12 left-12 w-20 h-20 border-t border-l border-gold/10 hidden md:block" />
          <div className="absolute bottom-12 right-12 w-20 h-20 border-b border-r border-gold/10 hidden md:block" />
        </motion.div>
      </div>

      {/* Scroll Hint */}
      {/* <div className="absolute bottom-12 left-1/2 -translate-x-1/2 z-30 flex flex-col items-center gap-4 opacity-80">
        <span className="uppercase-track text-[9px] text-deep-green tracking-[0.4em]">Explore the Vision</span>
        <div className="w-[1px] h-16 bg-gradient-to-b from-deep-green to-transparent" />
      </div> */}
    </section>
  );
}



