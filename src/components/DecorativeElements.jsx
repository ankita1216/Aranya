import { motion } from "framer-motion";

const LeafShape = ({ className, color = "currentColor" }) => (
  <svg viewBox="0 0 100 100" className={className}>
    <path
      fill={color}
      d="M50,0 C60,30 90,40 100,50 C70,60 60,90 50,100 C40,70 10,60 0,50 C30,40 40,10 50,0 Z"
    />
  </svg>
);

const BlobShape = ({ className, color = "currentColor" }) => (
  <svg viewBox="0 0 100 100" className={className}>
    <path
      fill={color}
      d="M30,10 C50,-10 90,10 90,40 C90,70 60,90 30,80 C10,70 -10,30 30,10 Z"
    />
  </svg>
);

const OrganicLeaf = ({ className, color = "currentColor" }) => (
  <svg viewBox="0 0 200 200" className={className}>
    <path
      fill={color}
      d="M100,20 C120,60 180,80 180,120 C180,160 140,180 100,180 C60,180 20,160 20,120 C20,80 80,60 100,20 Z"
    />
  </svg>
);

export default function DecorativeElements({ type = "leaf", color = "#1f4d3f", opacity = 0.1, position = "left-top", size = "w-64" }) {
  const positions = {
    "left-top": "top-0 -left-24",
    "right-top": "top-0 -right-24",
    "left-bottom": "bottom-0 -left-24",
    "right-bottom": "bottom-0 -right-24",
    "left-center": "top-1/2 -left-32 -translate-y-1/2",
    "right-center": "top-1/2 -right-32 -translate-y-1/2",
  };

  const Shape = type === "leaf" ? LeafShape : type === "blob" ? BlobShape : OrganicLeaf;

  return (
    <motion.div
      className={`absolute ${positions[position]} ${size} pointer-events-none z-0 hidden lg:block`}
      style={{ opacity }}
      animate={{
        y: [0, -20, 0],
        rotate: [0, 5, -5, 0],
        scale: [1, 1.05, 0.95, 1],
      }}
      transition={{
        duration: 15 + Math.random() * 10,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    >
      <Shape color={color} className="w-full h-full blur-xl" />
    </motion.div>
  );
}
