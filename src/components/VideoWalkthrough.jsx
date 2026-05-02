import { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";

export default function VideoWalkthrough() {
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 140,
    damping: 22,
    restDelta: 0.001,
  });

  const leftPanel = useTransform(smoothProgress, [0, 0.22], ["0%", "-100%"]);
  const rightPanel = useTransform(smoothProgress, [0, 0.22], ["0%", "100%"]);
  const panelTextOpacity = useTransform(smoothProgress, [0, 0.15], [1, 0]);

  const videoScale = useTransform(smoothProgress, [0.05, 0.35], [1.6, 1]);
  const videoBlur = useTransform(smoothProgress, [0, 0.18], ["blur(16px)", "blur(0px)"]);
  const videoBrightness = useTransform(smoothProgress, [0.1, 0.35], [0.65, 0.9]);

  const vignetteOpacity = useTransform(smoothProgress, [0.15, 0.4], [0, 1]);

  const titleY = useTransform(smoothProgress, [0.20, 0.45], [80, 0]);
  const titleOpacity = useTransform(smoothProgress, [0.25, 0.42], [0, 1]);

  const tagY = useTransform(smoothProgress, [0.28, 0.50], [40, 0]);
  const tagOpacity = useTransform(smoothProgress, [0.32, 0.48], [0, 1]);

  const ornamentOpacity = useTransform(smoothProgress, [0.30, 0.50], [0, 1]);
  const ornamentScale = useTransform(smoothProgress, [0.30, 0.50], [0.85, 1]);

  const scrollCueOpacity = useTransform(smoothProgress, [0, 0.08], [1, 0]);
  const hrScaleX = useTransform(smoothProgress, [0.35, 0.55], [0, 1]);

  const brightnessFilter = useTransform(videoBrightness, (v) => `brightness(${v})`);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;1,300;1,400&family=Didact+Gothic&display=swap');
        .vw-root {
          --cream: #F5F0E8;
          --gold:  #B89A5A;
          --gold-light: #D4B87A;
          --ink:   #0B0D09;
          --muted: rgba(245,240,232,0.45);
          font-family: 'Didact Gothic', sans-serif;
        }
        .vw-serif { font-family: 'Cormorant Garamond', serif; }
        @keyframes pulse-line {
          0%, 100% { opacity: 0.3; transform: scaleY(1); }
          50%       { opacity: 0.9; transform: scaleY(1.4); }
        }
      `}</style>

      <section
        ref={containerRef}
        id="walkthrough"
        className="vw-root relative bg-deep-green z-10"
        style={{ height: "220vh" }}
      >
        <div className="sticky top-0 h-screen w-full flex items-center justify-center overflow-hidden">

          <motion.div
            className="absolute inset-0 z-0 bg-[#0B0D09]"
            style={{ scale: videoScale, filter: videoBlur }}
          >

            <motion.div
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none"
              style={{
                width: "100vw",
                height: "56.25vw", // 16:9 ratio
                minHeight: "100vh",
                minWidth: "177.77vh", // 16:9 ratio
                filter: brightnessFilter,
                opacity: 0.85
              }}
            >
              <iframe
                className="w-full h-full border-none"
                src="https://www.youtube.com/embed/0xOfYiOB6iM?autoplay=1&mute=1&loop=1&playlist=0xOfYiOB6iM&controls=0&rel=0&modestbranding=1&playsinline=1&enablejsapi=1"
                title="Aranya Walkthrough"
                allow="autoplay; encrypted-media"
              />
            </motion.div>
          </motion.div>

          <motion.div
            className="absolute inset-0 z-[1] pointer-events-none"
            style={{
              opacity: vignetteOpacity,
              background: "radial-gradient(ellipse 70% 60% at 50% 50%, transparent 30%, rgba(11,13,9,0.72) 100%)",
            }}
          />
          <motion.div
            style={{ x: leftPanel }}
            className="absolute inset-y-0 left-0 w-1/2 z-20 overflow-hidden"
          >
            <div className="absolute inset-0 bg-deep-green" />
            <div className="absolute right-0 top-0 bottom-0 w-px bg-[var(--gold)] opacity-40" />
            <motion.div
              style={{ opacity: panelTextOpacity }}
              className="absolute inset-0 flex items-center justify-end pr-8"
            >
              <span className="vw-serif text-[22vw] font-light leading-none text-white select-none" style={{ opacity: 0.04, letterSpacing: "-0.02em" }}>W</span>
            </motion.div>
          </motion.div>

          <motion.div
            style={{ x: rightPanel }}
            className="absolute inset-y-0 right-0 w-1/2 z-20 overflow-hidden"
          >
            <div className="absolute inset-0 bg-deep-green" />
            <div className="absolute left-0 top-0 bottom-0 w-px bg-[var(--gold)] opacity-40" />
            <motion.div
              style={{ opacity: panelTextOpacity }}
              className="absolute inset-0 flex items-center justify-start pl-8"
            >
              <span className="vw-serif text-[22vw] font-light leading-none text-white select-none" style={{ opacity: 0.04, letterSpacing: "-0.02em" }}>T</span>
            </motion.div>
          </motion.div>

          {["top-8 left-8 border-t border-l", "top-8 right-8 border-t border-r", "bottom-8 left-8 border-b border-l", "bottom-8 right-8 border-b border-r"].map((cls, i) => (
            <motion.div
              key={i}
              className={`absolute z-30 w-10 h-10 border-[var(--gold)] pointer-events-none ${cls}`}
              style={{ opacity: ornamentOpacity, scale: ornamentScale }}
            />
          ))}

          <motion.div
            className="absolute left-1/2 z-30 pointer-events-none"
            style={{
              top: "calc(50% + 8rem)",
              translateX: "-50%",
              scaleX: hrScaleX,
              transformOrigin: "center",
              width: "6rem",
              height: "1px",
              background: "var(--gold)",
              opacity: 0.6,
            }}
          />
        </div>
      </section>
    </>
  );
}