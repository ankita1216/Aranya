import { motion } from "framer-motion";
import {
  Dumbbell,
  Waves,
  Trees,
  Coffee,
  Gamepad2,
  ShieldCheck,
  Users,
  Footprints,
  Flower2,
  Library,
  Flame,
  Utensils,
  Wine,
  ArrowUpRight,
} from "lucide-react";

// FIX 1: Ensure this import path is correct based on your file structure
import StyleAccents from "./StyleAccents";

const amenities = [
  {
    name: "Infinity Pool",
    icon: Waves,
    desc: "Ultra-premium pool at sunset with panoramic horizon views.",
  },
  {
    name: "Gaming Zone",
    icon: Gamepad2,
    desc: "High-tech indoor recreation area with neon accents.",
  },
  {
    name: "Jogging Track",
    icon: Footprints,
    desc: "Lush pathways through a landscaped park at golden hour.",
  },
  {
    name: "Modern Gym",
    icon: Dumbbell,
    desc: "State-of-the-art fitness center with forest views.",
  },
  {
    name: "24/7 Security",
    icon: ShieldCheck,
    desc: "Luxury gatehouse with advanced surveillance systems.",
  },
  {
    name: "Reading Room",
    icon: Library,
    desc: "Quiet sanctuary with floor-to-ceiling bookshelves.",
  },
  {
    name: "Zen Gardens",
    icon: Trees,
    desc: "Tranquil meditation alcoves with koi ponds.",
  },
  {
    name: "Banquet Hall",
    icon: Wine,
    desc: "Grand venue with crystal chandeliers for celebrations.",
  },
  {
    name: "BBQ Pavilion",
    icon: Flame,
    desc: "Stylish outdoor gourmet gathering space.",
  },
  {
    name: "Wellness Spa",
    icon: Flower2,
    desc: "Curated therapies in a serene indoor pool environment.",
  },
  {
    name: "Club Lounge",
    icon: Coffee,
    desc: "Sophisticated social space with city views.",
  },
  {
    name: "Fine Dining",
    icon: Utensils,
    desc: "In-house Michelin-star level culinary experience.",
  },
];

function AmenityCard({ item, index }) {
  const Icon = item.icon;

  // Checkerboard pattern logic for 4 columns
  // Calculate which row the card is in (0 for first row, 1 for second, etc.)
  const row = Math.floor(index / 4);

  // If it's an even row (row 0, 2), use the normal odd/even logic
  // If it's an odd row (row 1, 3), flip the logic so it starts with Dark/Green
  const isDark = row % 2 === 0 ? index % 2 !== 0 : index % 2 === 0;

  return (
    <motion.article
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.55, delay: index * 0.035 }}
      className={`group relative flex h-full min-h-[14rem] flex-col justify-between overflow-hidden rounded-xl border p-6 shadow-[0_8px_30px_rgba(114,129,110,0.06)] transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(114,129,110,0.12)] ${isDark
          ? "bg-[#305242] border-white/10"
          : "bg-[#f8f0df] border-[#72816e]/30"
        }`}
    >
      {/* Dynamic Grid Background */}
      <div
        className={`absolute inset-0 opacity-[0.06] [background-size:2.5rem_2.5rem] transition-opacity duration-500 group-hover:opacity-[0.12] ${isDark
            ? "[background-image:linear-gradient(90deg,#ffffff_1px,transparent_1px),linear-gradient(0deg,#ffffff_1px,transparent_1px)]"
            : "[background-image:linear-gradient(90deg,#407266_1px,transparent_1px),linear-gradient(0deg,#407266_1px,transparent_1px)]"
          }`}
      />

      {/* Dynamic Blur blob */}
      <div
        className={`absolute -right-16 -top-16 h-48 w-48 rounded-full blur-[45px] transition-all duration-700 ${isDark
            ? "bg-white/10 group-hover:bg-white/20"
            : "bg-[#407266]/10 group-hover:bg-[#407266]/20"
          }`}
      />

      <div className="relative z-10 flex h-full flex-col">
        {/* Icon Container */}
        <div
          className={`mb-5 flex h-[4.5rem] w-[3rem] shrink-0 items-center justify-center rounded-t-full rounded-b-xl border shadow-sm backdrop-blur-md transition-all duration-500 group-hover:scale-105 ${isDark
              ? "border-white/30 bg-white/10 text-white group-hover:border-white/60 group-hover:bg-white/20"
              : "border-[#407266]/30 bg-[#407266]/5 text-[#407266] group-hover:border-[#407266]/50 group-hover:bg-[#407266]/10"
            }`}
        >
          <Icon strokeWidth={1.2} className="h-6 w-6" />
        </div>

        <div className="mt-auto">
          {/* Title - Explicitly making it white for dark mode */}
          <h3
            className={`font-serif text-[1.35rem] leading-tight sm:text-[1.5rem] ${isDark ? "!text-white" : "text-[#112018]"
              }`}
          >
            {item.name}
          </h3>

          {/* Description - Explicitly making it light for dark mode */}
          <p
            className={`mt-2 text-[12px] font-medium leading-relaxed ${isDark ? "!text-white/90" : "text-[#112018]/70"
              }`}
          >
            {item.desc}
          </p>
        </div>
      </div>
    </motion.article>
  );
}

function AmenitiesFinish({ onOpenModal }) {
  return (
    <div className="col-span-full mt-4 flex justify-center md:mt-6">
      <motion.button
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        whileHover={{
          scale: 1.05,
          boxShadow: "0 12px 40px rgba(201,164,77,0.4)",
        }}
        whileTap={{ scale: 0.95 }}
        onClick={onOpenModal}
        className="group relative flex items-center gap-3 overflow-hidden rounded-full px-10 py-5 text-[11px] font-bold uppercase tracking-[0.25em] transition-all"
        style={{
          background: "linear-gradient(135deg, #C9A44D, #b8903c)",
          color: "#0b2117",
          boxShadow: "0 8px 30px rgba(201,164,77,0.3)",
        }}
      >
        <span className="relative z-10">Download Brochure</span>
        <ArrowUpRight
          size={16}
          className="relative z-10 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
        />
        <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-500 group-hover:translate-x-full" />
      </motion.button>
    </div>
  );
}

export default function AmenitiesSection({ onOpenModal }) {
  return (
    <section
      id="amenities"
      className="relative w-full max-w-full overflow-hidden bg-[#E8E0CC] pt-14 pb-14 text-[#112018] md:pt-24 md:pb-16"
    >
      <StyleAccents
        variant="style_1"
        position="top-right"
        size="w-64 sm:w-80 lg:w-[28rem]"
        opacity={0.15}
        rotate={18}
        color="#72816e"
      />
      <StyleAccents
        variant="style_2"
        position="bottom-left"
        size="w-64 sm:w-80 lg:w-[30rem]"
        opacity={0.15}
        rotate={-16}
        flip
        color="#72816e"
        className="!-bottom-16"
      />

      <div className="pointer-events-none absolute right-0 top-0 h-72 w-72 opacity-[0.1] [background:repeating-conic-gradient(from_18deg,#407266_0deg_3deg,transparent_3deg_10deg)] [clip-path:ellipse(54%_70%_at_100%_0%)]" />

      <div className="pointer-events-none absolute inset-x-0 top-0 h-64 bg-gradient-to-b from-[#E8E0CC] via-[#E8E0CC]/80 to-transparent" />

      <div className="relative z-10 mx-auto w-full max-w-[1420px] px-5 sm:px-8 lg:px-12">
        <div className="mb-9 grid min-w-0 gap-8 md:mb-12 lg:mb-14">
          <div className="min-w-0">
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-4 flex max-w-full items-center gap-4 text-[10px] font-bold uppercase tracking-[0.22em] text-[#407266] opacity-100 sm:mb-5 sm:gap-7 sm:text-[11px] sm:tracking-[0.42em]"
            >
              <span className="h-[1px] w-9 bg-[#407266]" /> Lifestyle Elevated
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="max-w-[58rem] font-serif text-[clamp(2.55rem,12vw,5.6rem)] font-normal leading-[0.95] text-[#112018] drop-shadow-sm"
            >
              The <span className="italic text-[#407266]">Amenities</span>{" "}
              <span className="block xl:inline">Selection</span>
            </motion.h2>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-5">
          {amenities.map((item, index) => (
            <AmenityCard key={item.name} item={item} index={index} />
          ))}
          <AmenitiesFinish onOpenModal={onOpenModal} />
        </div>
      </div>
    </section>
  );
}