import { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";

export default function VideoWalkthrough() {
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 80,
    damping: 25,
    restDelta: 0.001,
  });

  // Aperture / sliding doors
  const leftPanel = useTransform(smoothProgress, [0, 0.45], ["0%", "-100%"]);
  const rightPanel = useTransform(smoothProgress, [0, 0.45], ["0%", "100%"]);

  // Panel overlay opacity — fades out as doors open
  const panelTextOpacity = useTransform(smoothProgress, [0, 0.3], [1, 0]);

  // Video: starts zoomed in, blurred; pulls back and sharpens
  const videoScale = useTransform(smoothProgress, [0.05, 0.65], [1.6, 1]);
  const videoBlur = useTransform(smoothProgress, [0, 0.35], ["blur(16px)", "blur(0px)"]);
  const videoBrightness = useTransform(smoothProgress, [0.2, 0.6], [0.65, 0.9]); 

  // Vignette overlay
  const vignetteOpacity = useTransform(smoothProgress, [0.3, 0.7], [0, 1]);

  // Central content
  const titleY = useTransform(smoothProgress, [0.35, 0.72], [80, 0]);
  const titleOpacity = useTransform(smoothProgress, [0.42, 0.65], [0, 1]);

  // Tag line
  const tagY = useTransform(smoothProgress, [0.45, 0.78], [40, 0]);
  const tagOpacity = useTransform(smoothProgress, [0.52, 0.72], [0, 1]);

  // Corner ornaments
  const ornamentOpacity = useTransform(smoothProgress, [0.5, 0.75], [0, 1]);
  const ornamentScale = useTransform(smoothProgress, [0.5, 0.75], [0.85, 1]);

  // Scroll cue
  const scrollCueOpacity = useTransform(smoothProgress, [0, 0.12], [1, 0]);

  // Subtle horizontal rule
  const hrScaleX = useTransform(smoothProgress, [0.55, 0.8], [0, 1]);

  // Filter transformations for reactivity
  const brightnessFilter = useTransform(videoBrightness, (v) => `brightness(${v})`);

  return (
    <>
      {/* Google Fonts */}
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
        className="vw-root relative bg-warm-white z-10"
        style={{ height: "420vh" }}
      >
        <div className="sticky top-0 h-screen w-full flex items-center justify-center overflow-hidden">

          {/* ── VIDEO / BACKDROP ── */}
          <motion.div
            className="absolute inset-0 z-0 bg-[#0B0D09]"
            style={{ scale: videoScale, filter: videoBlur }}
          >
             {/* Poster Image / Background Fallback */}
             <div 
               className="absolute inset-0 bg-cover bg-center opacity-40 transition-opacity duration-1000"
               style={{ backgroundImage: 'url("/images/Shot 15_V2.webp")' }}
             />
             
            <motion.video
              autoPlay muted loop playsInline
              className="relative w-full h-full object-cover"
              style={{ filter: brightnessFilter, opacity: 0.85 }}
            >
              <source
                src="https://assets.mixkit.co/videos/preview/mixkit-modern-apartment-with-bright-living-room-43034-large.mp4"
                type="video/mp4"
              />
            </motion.video>
          </motion.div>

          {/* ── RADIAL VIGNETTE ── */}
          <motion.div
            className="absolute inset-0 z-[1] pointer-events-none"
            style={{
              opacity: vignetteOpacity,
              background: "radial-gradient(ellipse 70% 60% at 50% 50%, transparent 30%, rgba(11,13,9,0.72) 100%)",
            }}
          />

          {/* ── FILM GRAIN overlay ── */}
          <div
            className="absolute inset-0 z-[2] pointer-events-none opacity-[0.04] mix-blend-overlay"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='200' height='200' filter='url(%23n)' opacity='1'/%3E%3C/svg%3E")`,
            }}
          />

          {/* ── LEFT DOOR ── */}
          <motion.div
            style={{ x: leftPanel }}
            className="absolute inset-y-0 left-0 w-1/2 z-20 overflow-hidden"
          >
            <div className="absolute inset-0 bg-[var(--cream)]" />
            <div className="absolute right-0 top-0 bottom-0 w-px bg-[var(--gold)] opacity-40" />
            <motion.div
              style={{ opacity: panelTextOpacity }}
              className="absolute inset-0 flex items-center justify-end pr-8"
            >
              <span
                className="vw-serif text-[22vw] font-light leading-none text-[#0B0D09] select-none"
                style={{ opacity: 0.06, letterSpacing: "-0.02em" }}
              >
                W
              </span>
            </motion.div>
          </motion.div>

          {/* ── RIGHT DOOR ── */}
          <motion.div
            style={{ x: rightPanel }}
            className="absolute inset-y-0 right-0 w-1/2 z-20 overflow-hidden"
          >
            <div className="absolute inset-0 bg-[var(--cream)]" />
            <div className="absolute left-0 top-0 bottom-0 w-px bg-[var(--gold)] opacity-40" />
            <motion.div
              style={{ opacity: panelTextOpacity }}
              className="absolute inset-0 flex items-center justify-start pl-8"
            >
              <span
                className="vw-serif text-[22vw] font-light leading-none text-[#0B0D09] select-none"
                style={{ opacity: 0.06, letterSpacing: "-0.02em" }}
              >
                T
              </span>
            </motion.div>
          </motion.div>

          {/* ── CORNER ORNAMENTS ── */}
          {[
            "top-8 left-8 border-t border-l",
            "top-8 right-8 border-t border-r",
            "bottom-8 left-8 border-b border-l",
            "bottom-8 right-8 border-b border-r",
          ].map((cls, i) => (
            <motion.div
              key={i}
              className={`absolute z-30 w-10 h-10 border-[var(--gold)] pointer-events-none ${cls}`}
              style={{ opacity: ornamentOpacity, scale: ornamentScale }}
            />
          ))}

          {/* ── THIN HORIZONTAL RULE ── */}
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

          {/* ── CENTRAL CONTENT ── */}
          <div className="relative z-30 flex flex-col items-center text-center px-6">
            <motion.p
              style={{ y: tagY, opacity: tagOpacity }}
              className="mb-5 tracking-[0.45em] uppercase text-[0.6rem] text-[var(--gold-light)]"
            >
              Step Inside the Vision
            </motion.p>

            <motion.h2
              className="text-white"
              style={{
                y: titleY,
                opacity: titleOpacity,
              }}
            >
              Modern<br />
              <span className="italic text-gold">Refinement</span>
            </motion.h2>

            <motion.p
              style={{ y: tagY, opacity: tagOpacity }}
              className="mt-6 text-[0.68rem] tracking-[0.3em] uppercase text-[var(--muted)]"
            >
              Interiors · Architecture · Living
            </motion.p>
          </div>

          {/* ── SCROLL CUE ── */}
          <motion.div
            style={{ opacity: scrollCueOpacity }}
            className="absolute bottom-10 left-1/2 -translate-x-1/2 z-30 flex flex-col items-center gap-3"
          >
            <div className="flex gap-[3px] items-end h-5">
              {[1, 0.6, 0.4, 0.6, 1].map((h, i) => (
                <div
                  key={i}
                  className="w-[2px] bg-[var(--gold-light)] rounded-full"
                  style={{
                    height: `${h * 100}%`,
                    animation: `pulse-line 1.6s ease-in-out ${i * 0.12}s infinite`,
                  }}
                />
              ))}
            </div>
            <span className="text-[9px] uppercase tracking-[0.35em] text-white/30">Scroll</span>
          </motion.div>

        </div>
      </section>
    </>
  );
}