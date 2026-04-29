import { useState, useEffect, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight } from "lucide-react";

import hero1 from "/images/hero1.png";
import hero2 from "/images/hero2.png";
import hero3 from "/images/hero3.png";

// ── Floating dust particles ──────────────────────────────────────────────────
function Particles() {
  const particles = Array.from({ length: 28 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 3 + 1,
    dur: Math.random() * 12 + 8,
    delay: Math.random() * 6,
    drift: (Math.random() - 0.5) * 60,
  }));

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-10">
      {particles.map((p) => (
        <motion.div
          key={p.id}
          className="absolute rounded-full"
          style={{
            left: `${p.x}%`,
            top: `${p.y}%`,
            width: p.size,
            height: p.size,
            background: "radial-gradient(circle, rgba(201,164,77,0.6) 0%, rgba(201,164,77,0) 100%)",
          }}
          animate={{
            y: [0, -80, 0],
            x: [0, p.drift, 0],
            opacity: [0, 0.8, 0],
            scale: [0.5, 1.2, 0.5],
          }}
          transition={{
            duration: p.dur,
            delay: p.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
}

// ── Leaf shadow overlay ──────────────────────────────────────────────────────
function LeafShadows() {
  return (
    <div className="absolute inset-0 pointer-events-none z-10 overflow-hidden">
      {[...Array(5)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute"
          style={{
            left: `${10 + i * 18}%`,
            top: `${-10 + i * 5}%`,
            width: 180 + i * 40,
            height: 180 + i * 40,
            background: `radial-gradient(ellipse, rgba(18,56,42,${0.06 + i * 0.02}) 0%, transparent 70%)`,
            borderRadius: "60% 40% 70% 30% / 50% 60% 40% 50%",
          }}
          animate={{
            x: [0, 12, -8, 0],
            y: [0, -10, 6, 0],
            rotate: [0, 4, -3, 0],
            scale: [1, 1.05, 0.97, 1],
          }}
          transition={{
            duration: 14 + i * 2,
            repeat: Infinity,
            ease: "easeInOut",
            delay: i * 1.5,
          }}
        />
      ))}
    </div>
  );
}

// ── Stats bar ────────────────────────────────────────────────────────────────
const stats = [
  { value: "70%", label: "Open Green" },
  { value: "1535 SQM", label: "Clubhouse" },
  { value: "2 mins", label: "from Airport" },
  { value: "25+", label: "Amenities" },
  { value: "Built for", label: "Generations" },
];

// ── Main component ───────────────────────────────────────────────────────────
export default function AranyaHero() {
  const containerRef = useRef(null);

  const [scrollProgress, setScrollProgress] = useState(0);
  const [activePhase, setActivePhase] = useState(0); // 0=morning,1=evening,2=night
  const [lineVisible, setLineVisible] = useState([false, false, false]);

  // Track scroll within the sticky container
  useEffect(() => {
    const el = document.getElementById("aranya-scroll-track");
    const onScroll = () => {
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const scrolled = -rect.top;
      const total = el.offsetHeight - window.innerHeight;
      const p = Math.min(Math.max(scrolled / total, 0), 1);
      setScrollProgress(p);
      if (p < 0.33) setActivePhase(0);
      else if (p < 0.66) setActivePhase(1);
      else setActivePhase(2);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Stagger line reveals on mount
  useEffect(() => {
    const timers = [
      setTimeout(() => setLineVisible((l) => [true, l[1], l[2]]), 800),
      setTimeout(() => setLineVisible((l) => [l[0], true, l[2]]), 1400),
      setTimeout(() => setLineVisible((l) => [l[0], l[1], true]), 2000),
    ];
    return () => timers.forEach(clearTimeout);
  }, []);

  // Per-image opacities
  const img1Opacity = scrollProgress < 0.33 ? 1 : Math.max(0, 1 - (scrollProgress - 0.33) / 0.2);
  const img2Opacity =
    scrollProgress < 0.2
      ? 0
      : scrollProgress < 0.45
        ? (scrollProgress - 0.2) / 0.25
        : scrollProgress < 0.66
          ? 1
          : Math.max(0, 1 - (scrollProgress - 0.66) / 0.2);
  const img3Opacity = scrollProgress < 0.55 ? 0 : Math.min(1, (scrollProgress - 0.55) / 0.25);

  // Subtle zoom per layer
  const img1Scale = 1 + scrollProgress * 0.06;
  const img2Scale = 1 + Math.max(0, scrollProgress - 0.2) * 0.05;
  const img3Scale = 1 + Math.max(0, scrollProgress - 0.55) * 0.04;

  // Parallax Y offsets
  const img1Y = scrollProgress * -40;
  const img2Y = scrollProgress * -20;
  const img3Y = scrollProgress * -10;

  const emotionalLines = [
    "Morning begins in calm.",
    "Evenings feel alive.",
    "Nights belong to you.",
  ];



  return (
    <div
      id="aranya-scroll-track"
      style={{ height: "350vh" }}
      className="relative"
    >
      {/* ── Sticky viewport ─────────────────────────────────────────────── */}
      <div className="sticky top-0 h-screen w-full overflow-hidden" ref={containerRef}>

        {/* ── Image layers ─────────────────────────────────────────────── */}
        {[
          { src: hero1, opacity: img1Opacity, scale: img1Scale, y: img1Y },
          { src: hero2, opacity: img2Opacity, scale: img2Scale, y: img2Y },
          { src: hero3, opacity: img3Opacity, scale: img3Scale, y: img3Y },
        ].map((layer, i) => (
          <div
            key={i}
            className="absolute inset-0 will-change-transform"
            style={{
              opacity: layer.opacity,
              transform: `scale(${layer.scale}) translateY(${layer.y}px)`,
              transition: "opacity 0.6s ease",
              zIndex: i + 1,
            }}
          >
            <motion.div
              className="w-full h-full"
              initial={i === 0 ? { scale: 1.15, filter: "blur(10px)" } : {}}
              animate={i === 0 ? { scale: 1, filter: "blur(0px)" } : {}}
              transition={{ duration: 1.8, ease: "easeOut" }}
            >
              <img
                src={layer.src}
                alt={`hero layer ${i + 1}`}
                className="w-full h-full object-cover object-center"
                style={{
                  filter: i === 2 ? "brightness(0.75) saturate(1.2)" : i === 1 ? "brightness(0.85)" : "brightness(0.9)",
                }}
              />
            </motion.div>
          </div>
        ))}

        {/* ── Gradient overlay ────────────────────────────────────────── */}
        <div
          className="absolute inset-0 z-10"
          style={{
            background: `linear-gradient(
              105deg,
              rgba(18,56,42,${0.72 + img3Opacity * 0.15}) 0%,
              rgba(18,56,42,${0.35 + img3Opacity * 0.1}) 45%,
              transparent 100%
            )`,
            transition: "background 0.8s ease",
          }}
        />

        {/* ── Ambient corner vignette ─────────────────────────────────── */}
        <div className="absolute inset-0 z-10 pointer-events-none"
          style={{
            background: "radial-gradient(ellipse at 80% 50%, transparent 40%, rgba(10,25,18,0.5) 100%)",
          }}
        />

        {/* ── Particles & leaf shadows ─────────────────────────────────── */}
        <Particles />
        <LeafShadows />


        {/* ── Hero text block ──────────────────────────────────────────── */}
        <div
          className="absolute inset-0 z-30 flex flex-col justify-center px-8 md:px-16 lg:px-24"
          style={{ paddingTop: "5vh" }}
        >
          {/* Emotional lines */}
          <div className="mb-6 flex flex-col gap-2">
            {emotionalLines.map((line, i) => (
              <motion.p
                key={i}
                initial={{ opacity: 0, x: -30 }}
                animate={lineVisible[i] ? { opacity: activePhase >= i ? 1 : 0.28, x: 0 } : {}}
                transition={{ duration: 0.9, ease: "easeOut" }}
                className="text-sm md:text-base tracking-widest font-light italic"
                style={{
                  color: activePhase === i ? "#C9A44D" : "rgba(248,243,231,0.55)",
                  fontFamily: "'Cormorant Garamond', Georgia, serif",
                  letterSpacing: "0.18em",
                  transition: "color 0.8s ease",
                }}
              >
                {line}
              </motion.p>
            ))}
          </div>

          {/* Main title */}
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="leading-none mb-4"
            style={{
              fontFamily: "'Cormorant Garamond', 'Garamond', Georgia, serif",
              fontSize: "clamp(4.5rem, 12vw, 10rem)",
              fontWeight: 300,
              color: "#F8F3E7",
              letterSpacing: "0.08em",
            }}
          >
            ARANYA
          </motion.h1>

          {/* Gold rule */}
          <motion.div
            initial={{ scaleX: 0, opacity: 0 }}
            animate={{ scaleX: 1, opacity: 1 }}
            transition={{ duration: 1, delay: 1.2, ease: "easeOut" }}
            style={{
              width: 80,
              height: 1,
              background: "linear-gradient(90deg, #C9A44D, transparent)",
              transformOrigin: "left",
              marginBottom: "1.5rem",
            }}
          />

          {/* Subtext */}
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 1.6, ease: "easeOut" }}
            className="text-xs md:text-sm tracking-[0.3em] uppercase mb-10"
            style={{ color: "rgba(201,164,77,0.75)" }}
          >
            Three moments. One life.
          </motion.p>

          {/* CTA */}
          <motion.a
            href="#"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 2, ease: "easeOut" }}
            className="group inline-flex items-center gap-3 w-fit"
          >
            <span
              className="text-[11px] tracking-[0.3em] uppercase border-b pb-1 transition-all duration-400"
              style={{
                color: "#C9A44D",
                borderColor: "rgba(201,164,77,0.4)",
              }}
              onMouseEnter={(e) => (e.target.style.borderColor = "#C9A44D")}
              onMouseLeave={(e) => (e.target.style.borderColor = "rgba(201,164,77,0.4)")}
            >
              Explore the experience
            </span>
            <motion.div
              className="transition-transform duration-300"
              whileHover={{ x: 6 }}
            >
              <ArrowRight size={14} color="#C9A44D" strokeWidth={1.5} />
            </motion.div>
          </motion.a>
        </div>

        {/* ── Phase indicator dots ─────────────────────────────────────── */}
        <div className="absolute right-8 md:right-12 top-1/2 -translate-y-1/2 z-40 flex flex-col gap-3">
          {[0, 1, 2].map((i) => (
            <div
              key={i}
              className="rounded-full transition-all duration-500"
              style={{
                width: activePhase === i ? 6 : 4,
                height: activePhase === i ? 6 : 4,
                background: activePhase === i ? "#C9A44D" : "rgba(248,243,231,0.35)",
              }}
            />
          ))}
        </div>

        {/* ── Scroll nudge ─────────────────────────────────────────────── */}
        <motion.div
          className="absolute bottom-32 left-1/2 -translate-x-1/2 z-40 flex flex-col items-center gap-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: scrollProgress > 0.05 ? 0 : 1 }}
          transition={{ duration: 0.6 }}
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
            className="flex flex-col items-center gap-1"
          >
            <div
              className="w-px h-8"
              style={{ background: "linear-gradient(to bottom, transparent, rgba(201,164,77,0.7))" }}
            />
            <span className="text-[8px] tracking-[0.35em] uppercase" style={{ color: "rgba(201,164,77,0.6)" }}>
              Scroll
            </span>
          </motion.div>
        </motion.div>

        {/* ── Stats bar ────────────────────────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 2.4, ease: "easeOut" }}
          className="absolute bottom-0 left-0 right-0 z-40"
          style={{
            background: "rgba(18,56,42,0.55)",
            backdropFilter: "blur(16px)",
            WebkitBackdropFilter: "blur(16px)",
            borderTop: "1px solid rgba(201,164,77,0.15)",
          }}
        >
          <div className="flex flex-wrap justify-around items-center px-6 md:px-14 py-4 md:py-5 gap-y-3">
            {stats.map((s, i) => (
              <div key={i} className="flex flex-col items-center text-center px-3">
                <span
                  className="text-sm md:text-base font-light"
                  style={{
                    color: "#C9A44D",
                    fontFamily: "'Cormorant Garamond', Georgia, serif",
                    letterSpacing: "0.05em",
                  }}
                >
                  {s.value}
                </span>
                <span
                  className="text-[9px] tracking-[0.2em] uppercase mt-0.5"
                  style={{ color: "rgba(248,243,231,0.55)" }}
                >
                  {s.label}
                </span>
                {i < stats.length - 1 && (
                  <div
                    className="hidden md:block absolute"
                    style={{
                      width: 1,
                      height: 24,
                      background: "rgba(201,164,77,0.2)",
                      right: 0,
                      top: "50%",
                      transform: "translateY(-50%)",
                    }}
                  />
                )}
              </div>
            ))}
          </div>
        </motion.div>

        {/* ── Time-of-day ambient band ─────────────────────────────────── */}
        <div
          className="absolute top-0 right-0 w-1 h-full z-20 transition-all duration-1000"
          style={{
            background:
              activePhase === 0
                ? "linear-gradient(to bottom, rgba(255,220,140,0.4), transparent)"
                : activePhase === 1
                  ? "linear-gradient(to bottom, rgba(255,140,60,0.3), transparent)"
                  : "linear-gradient(to bottom, rgba(201,164,77,0.5), transparent)",
          }}
        />
      </div>

      {/* Google Fonts */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;1,300;1,400&display=swap');
        * { box-sizing: border-box; }
        html { scroll-behavior: smooth; }
      `}</style>
    </div>
  );
}