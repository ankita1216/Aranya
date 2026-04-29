import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function SectionWrapper({ children, id }) {
  const containerRef = useRef(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  // Unique Reveal Animation: 3D Perspective Tilt & Blur
  const rotateX = useTransform(scrollYProgress, [0, 0.5], [10, 0]);
  const z = useTransform(scrollYProgress, [0, 0.5], [-100, 0]);
  const filter = useTransform(scrollYProgress, [0, 0.3], ["blur(10px)", "blur(0px)"]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  return (
    <div 
      ref={containerRef} 
      className="relative py-12 md:py-24"
      style={{ perspective: "1200px" }}
    >
      <motion.div
        id={id}
        style={{ 
          rotateX,
          z,
          filter,
          opacity,
          perspective: "1000px",
          transformStyle: "preserve-3d"
        }}
        className="relative will-change-transform"
      >
        {children}
      </motion.div>
    </div>
  );
}
