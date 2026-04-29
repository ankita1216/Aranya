import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export default function VideoWalkthrough() {
  const containerRef = useRef(null);
  
  // Track scroll progress
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  // Portal Expansion Animation: Clip-path circle grows from center
  const maskSize = useTransform(scrollYProgress, [0.3, 0.7], ["10%", "100%"]);
  const videoScale = useTransform(scrollYProgress, [0.3, 0.7], [1.5, 1]);
  const textOpacity = useTransform(scrollYProgress, [0.6, 0.8], [0, 1]);

  return (
    <section 
      ref={containerRef} 
      id="walkthrough"
      className="relative h-[250vh] bg-warm-white"
    >
      <div className="sticky top-0 h-screen w-full flex items-center justify-center overflow-hidden">
        
        {/* Background Text / Branding */}
        <div className="absolute inset-0 flex items-center justify-center opacity-[0.03] pointer-events-none">
          <span className="text-[25vw] font-light uppercase tracking-tighter">Portal</span>
        </div>

        {/* The "Portal" Video Reveal */}
        <motion.div 
          style={{ 
            clipPath: `circle(${maskSize.get() !== undefined ? maskSize.get() : "10%"} at 50% 50%)`,
            WebkitClipPath: `circle(${maskSize.get() !== undefined ? maskSize.get() : "10%"} at 50% 50%)`
          }}
          className="relative w-full h-full z-10"
        >
          {/* Custom style for the motion div since clipPath needs real-time update */}
          <motion.div 
            style={{ 
                clipPath: useTransform(scrollYProgress, [0.3, 0.7], ["circle(10% at 50% 50%)", "circle(100% at 50% 50%)"]),
                WebkitClipPath: useTransform(scrollYProgress, [0.3, 0.7], ["circle(10% at 50% 50%)", "circle(100% at 50% 50%)"])
            }}
            className="w-full h-full"
          >
            <motion.div style={{ scale: videoScale }} className="w-full h-full">
              <video
                autoPlay
                muted
                loop
                playsInline
                className="w-full h-full object-cover"
              >
                <source 
                  src="https://assets.mixkit.co/videos/preview/mixkit-luxury-house-exterior-with-swimming-pool-1184-large.mp4" 
                  type="video/mp4" 
                />
              </video>
              <div className="absolute inset-0 bg-black/30" />
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Floating Typography */}
        <motion.div 
          style={{ opacity: textOpacity }}
          className="absolute z-20 text-center px-6"
        >
          <p className="uppercase-track text-gold mb-4">
            A Living Masterpiece
          </p>
          <h2 className="text-deep-green">
            The Walkthrough
          </h2>
          <div className="mt-12 flex flex-col items-center gap-4">
            <div className="w-px h-16 bg-gradient-to-b from-[#C9A44D] to-transparent" />
          </div>
        </motion.div>

        {/* Framing Elements */}
        <div className="absolute inset-0 border-[20px] md:border-[40px] border-warm-white z-30 pointer-events-none" />
      </div>
    </section>
  );
}
