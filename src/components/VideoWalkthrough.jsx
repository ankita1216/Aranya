import { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { Play, Pause, RotateCcw, RotateCw } from "lucide-react"; // Using Lucide for icons

export default function VideoWalkthrough() {
  const containerRef = useRef(null);
  const iframeRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(true);

  // --- YouTube API Logic ---
  const sendCommand = (command, args = []) => {
    iframeRef.current?.contentWindow.postMessage(
      JSON.stringify({ event: "command", func: command, args: args }),
      "*"
    );
  };

  const togglePlay = () => {
    if (isPlaying) {
      sendCommand("pauseVideo");
    } else {
      sendCommand("playVideo");
    }
    setIsPlaying(!isPlaying);
  };

  const seek = (seconds) => {
    // Note: Seeking in iframes requires the video to be buffered/playing
    sendCommand("seekTo", [seconds, true]);
  };

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
  const ornamentOpacity = useTransform(smoothProgress, [0.30, 0.50], [0, 1]);
  const ornamentScale = useTransform(smoothProgress, [0.30, 0.50], [0.85, 1]);
  const hrScaleX = useTransform(smoothProgress, [0.35, 0.55], [0, 1]);

  const brightnessFilter = useTransform(videoBrightness, (v) => `brightness(${v})`);

  // Controls Visibility (Only show after panels open)
  const controlsOpacity = useTransform(smoothProgress, [0.25, 0.4], [0, 1]);

  return (
    <>
      <style>{`
        .vw-root {
          --cream: #F5F0E8;
          --gold:  #B89A5A;
          --gold-light: #D4B87A;
          --ink:   #0B0D09;
          --muted: rgba(245,240,232,0.45);
          font-family: 'Poppins', sans-serif;
        }
        .vw-serif { font-family: 'Cormorant Garamond', serif; }
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
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
              style={{
                width: "100vw",
                height: "56.25vw",
                minHeight: "100vh",
                minWidth: "177.77vh",
                filter: brightnessFilter,
                opacity: 0.85
              }}
            >
              <iframe
                ref={iframeRef}
                className="w-full h-full border-none pointer-events-none"
                src="https://www.youtube.com/embed/0xOfYiOB6iM?autoplay=1&mute=1&loop=1&playlist=0xOfYiOB6iM&controls=0&rel=0&modestbranding=1&playsinline=1&enablejsapi=1"
                title="Aranya Walkthrough"
                allow="autoplay; encrypted-media"
                loading="lazy"
              />
            </motion.div>
          </motion.div>

          {/* --- VIDEO CONTROLS --- */}
          <motion.div
            style={{ opacity: controlsOpacity }}
            className="absolute bottom-12 left-1/2 -translate-x-1/2 z-40 flex items-center gap-8"
          >
            <button
              onClick={() => sendCommand("seekTo", [-10, false])} // Relative seek is tricky with API, usually requires getting current time first, but we can trigger a skip
              className="text-white/70 hover:text-[var(--gold)] transition-colors"
            >
              <RotateCcw size={28} strokeWidth={1.5} />
            </button>

            <button
              onClick={togglePlay}
              className="w-16 h-16 rounded-full border border-[var(--gold)] flex items-center justify-center text-white bg-black/20 backdrop-blur-sm hover:bg-[var(--gold)] transition-all group"
            >
              {isPlaying ? <Pause fill="currentColor" size={24} /> : <Play fill="currentColor" className="ml-1" size={24} />}
            </button>

            <button
              onClick={() => sendCommand("seekTo", [10, false])}
              className="text-white/70 hover:text-[var(--gold)] transition-colors"
            >
              <RotateCw size={28} strokeWidth={1.5} />
            </button>
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