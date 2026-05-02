import { useRef, useState } from "react";
import { motion, useScroll, useTransform, useSpring, AnimatePresence } from "framer-motion";
import { Play, Pause, RotateCcw, RotateCw, PlayCircle } from "lucide-react";

export default function VideoWalkthrough() {
  const containerRef = useRef(null);
  const iframeRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false); // Start paused
  const [hasStarted, setHasStarted] = useState(false); // Track if user entered

  // --- YouTube API Logic ---
  const sendCommand = (command, args = []) => {
    iframeRef.current?.contentWindow.postMessage(
      JSON.stringify({ event: "command", func: command, args: args }),
      "*"
    );
  };

  // Function to enter and start the experience
  const handleStartExperience = () => {
    setHasStarted(true);
    setIsPlaying(true);
    // Programmatically scroll down a bit to trigger the gate opening
    const targetScroll = window.innerHeight * 0.4;
    window.scrollTo({ top: containerRef.current.offsetTop + targetScroll, behavior: 'smooth' });

    // Small delay to ensure iframe is ready to receive play command
    setTimeout(() => sendCommand("playVideo"), 500);
  };

  const togglePlay = () => {
    if (isPlaying) {
      sendCommand("pauseVideo");
    } else {
      sendCommand("playVideo");
    }
    setIsPlaying(!isPlaying);
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

  // Animation values
  const leftPanel = useTransform(smoothProgress, [0, 0.22], ["0%", "-100%"]);
  const rightPanel = useTransform(smoothProgress, [0, 0.22], ["0%", "100%"]);
  const panelTextOpacity = useTransform(smoothProgress, [0, 0.15], [1, 0]);
  const videoScale = useTransform(smoothProgress, [0.05, 0.35], [1.6, 1]);
  const videoBlur = useTransform(smoothProgress, [0, 0.18], ["blur(16px)", "blur(0px)"]);
  const videoBrightness = useTransform(smoothProgress, [0.1, 0.35], [0.4, 0.9]);
  const vignetteOpacity = useTransform(smoothProgress, [0.15, 0.4], [0, 1]);
  const controlsOpacity = useTransform(smoothProgress, [0.25, 0.4], [0, 1]);

  return (
    <>
      <style>{`
        .vw-root {
          --gold: #B89A5A;
          --ink: #0B0D09;
        }
        .vw-serif { font-family: 'Cormorant Garamond', serif; }
      `}</style>

      <section
        ref={containerRef}
        id="walkthrough"
        className="vw-root relative bg-[#0B0D09] z-10"
        style={{ height: "220vh" }}
      >
        <div className="sticky top-0 h-screen w-full flex items-center justify-center overflow-hidden">

          {/* --- VIDEO LAYER --- */}
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
                filter: useTransform(videoBrightness, (v) => `brightness(${v})`),
                opacity: 0.85
              }}
            >
              <iframe
                ref={iframeRef}
                className="w-full h-full border-none pointer-events-none"
                src="https://www.youtube.com/embed/0xOfYiOB6iM?enablejsapi=1&mute=1&controls=0&rel=0&modestbranding=1&playsinline=1"
                title="Walkthrough"
                allow="autoplay; encrypted-media"
              />
            </motion.div>
          </motion.div>

          {/* --- CENTRAL PLAY ICON (VISIBLE ONLY AT START) --- */}
          <AnimatePresence>
            {!hasStarted && (
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 1.2 }}
                className="absolute z-50 flex flex-col items-center gap-4 cursor-pointer group"
                onClick={handleStartExperience}
              >
                <div className="relative">
                  <motion.div
                    animate={{ scale: [1, 1.1, 1] }}
                    transition={{ repeat: Infinity, duration: 2 }}
                    className="absolute inset-0 rounded-full bg-[var(--gold)]/20 blur-xl"
                  />
                  <PlayCircle size={100} strokeWidth={0.5} className="text-[var(--gold)] relative z-10 transition-transform group-hover:scale-110" />
                </div>
                <span className="text-[var(--gold)] tracking-[0.5em] text-sm font-bold uppercase ml-2">Begin Tour</span>
              </motion.div>
            )}
          </AnimatePresence>

          {/* --- GATES --- */}
          <motion.div style={{ x: leftPanel }} className="absolute inset-y-0 left-0 w-1/2 z-20 overflow-hidden">
            <div className="absolute inset-0 bg-deep-green" />
            <div className="absolute right-0 top-0 bottom-0 w-px bg-[var(--gold)] opacity-40" />
            <motion.div style={{ opacity: panelTextOpacity }} className="absolute inset-0 flex items-center justify-end pr-8">
              <span className="vw-serif text-[22vw] font-light leading-none text-white/5 select-none">W</span>
            </motion.div>
          </motion.div>

          <motion.div style={{ x: rightPanel }} className="absolute inset-y-0 right-0 w-1/2 z-20 overflow-hidden">
            <div className="absolute inset-0 bg-deep-green" />
            <div className="absolute left-0 top-0 bottom-0 w-px bg-[var(--gold)] opacity-40" />
            <motion.div style={{ opacity: panelTextOpacity }} className="absolute inset-0 flex items-center justify-start pl-8">
              <span className="vw-serif text-[22vw] font-light leading-none text-white/5 select-none">T</span>
            </motion.div>
          </motion.div>

          {/* --- VIDEO PLAYER CONTROLS (SHOWN AFTER OPENING) --- */}
          <motion.div
            style={{ opacity: controlsOpacity }}
            className="absolute bottom-12 left-1/2 -translate-x-1/2 z-40 flex items-center gap-8"
          >
            <button onClick={() => sendCommand("seekTo", [-10, false])} className="text-white/70 hover:text-[var(--gold)]">
              <RotateCcw size={28} />
            </button>

            <button
              onClick={togglePlay}
              className="w-16 h-16 rounded-full border border-[var(--gold)] flex items-center justify-center text-white bg-black/20 backdrop-blur-sm hover:bg-[var(--gold)]"
            >
              {isPlaying ? <Pause fill="currentColor" size={24} /> : <Play fill="currentColor" className="ml-1" size={24} />}
            </button>

            <button onClick={() => sendCommand("seekTo", [10, false])} className="text-white/70 hover:text-[var(--gold)]">
              <RotateCw size={28} />
            </button>
          </motion.div>

          <motion.div
            className="absolute inset-0 z-[1] pointer-events-none"
            style={{
              opacity: vignetteOpacity,
              background: "radial-gradient(ellipse 70% 60% at 50% 50%, transparent 30%, rgba(11,13,9,0.85) 100%)",
            }}
          />
        </div>
      </section>
    </>
  );
}