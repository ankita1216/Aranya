import { motion } from "framer-motion";
import {
  Dumbbell,
  Waves,
  Trees,
  Coffee,
  Gamepad2,
  ShieldCheck,
  Users,
  Sparkles,
  Wind,
  Library,
  Flame,
  Utensils,
} from "lucide-react";

const amenities = [
  {
    name: "Infinity Pool",
    icon: Waves,
    desc: "Ultra-premium pool at sunset with panoramic horizon views.",
    image: "/amenities_1.webp",
    className: "lg:col-span-4 lg:row-span-3",
  },
  {
    name: "Gaming Zone",
    icon: Gamepad2,
    desc: "High-tech indoor recreation area with neon accents.",
    image: "/amenities_2.webp",
    className: "lg:col-span-4 lg:row-span-2",
  },
  {
    name: "Jogging Track",
    icon: Wind,
    desc: "Lush pathways through a landscaped park at golden hour.",
    image: "/amenities_3.webp",
    className: "lg:col-span-4 lg:row-span-2",
    light: true,
  },
  {
    name: "Modern Gym",
    icon: Dumbbell,
    desc: "State-of-the-art fitness center with forest views.",
    image: "/amenities_4.webp",
    className: "lg:col-span-4 lg:row-span-3",
  },
  {
    name: "24/7 Security",
    icon: ShieldCheck,
    desc: "Luxury gatehouse with advanced surveillance systems.",
    className: "lg:col-span-4 lg:row-span-1",
    horizontal: true,
    plain: true,
  },
  {
    name: "Reading Room",
    icon: Library,
    desc: "Quiet sanctuary with floor-to-ceiling bookshelves.",
    image: "/amenities_6.webp",
    className: "lg:col-span-4 lg:row-span-2",
    split: true,
  },
  {
    name: "Zen Gardens",
    icon: Trees,
    desc: "Tranquil meditation alcoves with koi ponds.",
    image: "/amenities_7.webp",
    className: "lg:col-span-4 lg:row-span-2",
    light: true,
  },
  {
    name: "Banquet Hall",
    icon: Users,
    desc: "Grand venue with crystal chandeliers for celebrations.",
    image: "/amenities_8.webp",
    className: "lg:col-span-4 lg:row-span-2",
  },
  {
    name: "BBQ Pavilion",
    icon: Flame,
    desc: "Stylish outdoor gourmet gathering space.",
    image: "/amenities_9.webp",
    className: "lg:col-span-4 lg:row-span-2",
  },
  {
    name: "Wellness Spa",
    icon: Sparkles,
    desc: "Curated therapies in a serene indoor pool environment.",
    image: "/amenities_10.webp",
    className: "lg:col-span-4 lg:row-span-3",
  },
  {
    name: "Club Lounge",
    icon: Coffee,
    desc: "Sophisticated social space with city views.",
    image: "/amenities_11.webp",
    className: "lg:col-span-4 lg:row-span-2",
    split: true,
  },
  {
    name: "Fine Dining",
    icon: Utensils,
    desc: "In-house Michelin-star level culinary experience.",
    image: "/amenities_12.webp",
    className: "lg:col-span-4 lg:row-span-2",
  },
];

function AmenityCard({ item, index }) {
  const Icon = item.icon;

  return (
    <motion.article
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.55, delay: index * 0.035 }}
      className={[
        "group relative min-h-[14.5rem] overflow-hidden rounded-lg border shadow-[0_18px_45px_rgba(26,31,24,0.12)] sm:min-h-[15.5rem] md:min-h-[17rem] lg:min-h-0",
        "border-[#d8cba8]/65 bg-[#f7f0e3]",
        item.className,
      ].join(" ")}
    >
      {item.plain ? (
        <div className="absolute inset-0 bg-[#fbf6eb]">
          <div className="absolute inset-0 opacity-[0.28] [background-image:linear-gradient(90deg,#d1bd82_1px,transparent_1px),linear-gradient(0deg,#d1bd82_1px,transparent_1px)] [background-size:2.6rem_2.6rem]" />
          <div className="absolute -right-10 -top-10 h-28 w-28 rounded-full bg-[#c9a44d]/16 blur-2xl" />
        </div>
      ) : item.split ? (
        <div className="absolute inset-0 grid grid-cols-1 md:grid-cols-[1.25fr_0.95fr]">
          <img
            src={item.image}
            alt=""
            aria-hidden="true"
            className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
            loading="lazy"
          />
          <div className="relative hidden h-full flex-col justify-center bg-[#4b3623] p-6 text-[#fbf5e9] md:flex">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.13),transparent_44%)]" />
          </div>
        </div>
      ) : (
        <>
          <img
            src={item.image}
            alt=""
            aria-hidden="true"
            className={[
              "absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105",
              item.light ? "opacity-90" : "",
            ].join(" ")}
            loading="lazy"
          />
          <div
            className={[
              "absolute inset-0",
              item.light
                ? "bg-gradient-to-r from-[#f4ead8]/92 via-[#f4ead8]/62 to-transparent"
                : "bg-gradient-to-t from-[#101a12]/96 via-[#101a12]/52 to-transparent",
            ].join(" ")}
          />
        </>
      )}

      {item.horizontal ? (
        <div className="relative z-10 flex h-full min-h-[7.5rem] items-center gap-4 p-4 sm:gap-5 sm:p-5 md:gap-6 md:p-6 lg:min-h-0">
          <div className="flex h-[3.25rem] w-[3.25rem] shrink-0 items-center justify-center rounded-lg border border-[#c9a44d]/35 bg-[#142419] text-[#f8f0df] shadow-lg">
            <Icon strokeWidth={1.45} className="h-6 w-6" />
          </div>
          <div className="min-w-0">
            <h3 className="font-serif text-2xl leading-none text-[#18251b]">{item.name}</h3>
            <p className="mt-2 max-w-sm text-[12px] leading-relaxed text-[#314033]/78 opacity-100 lg:mt-3 lg:text-[13px]">{item.desc}</p>
          </div>
        </div>
      ) : (
        <div
          className={[
            "relative z-10 flex h-full flex-col justify-end p-4 sm:p-5 md:p-6",
            item.light ? "text-[#1a261d]" : "text-[#fbf5e9]",
            item.split ? "md:ml-[55%]" : "",
          ].join(" ")}
        >
          <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-lg border border-[#c9a44d]/35 bg-[#142419] text-[#f8f0df] shadow-lg sm:h-12 sm:w-12">
            <Icon strokeWidth={1.45} className="h-5 w-5 sm:h-6 sm:w-6" />
          </div>
          <h3 className="font-serif text-[1.45rem] leading-none sm:text-[1.65rem]">{item.name}</h3>
          <p
            className={[
              "mt-2 max-w-[15rem] text-[12px] leading-relaxed sm:mt-3 sm:text-[13px]",
              item.light ? "text-[#314033]/70" : "text-[#fff8eb]/86",
            ].join(" ")}
          >
            {item.desc}
          </p>
          <span className="mt-4 block h-[2px] w-9 bg-[#c9a44d] sm:mt-5" />
        </div>
      )}
    </motion.article>
  );
}

function AmenitiesFinish() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.55 }}
      className="relative mt-5 overflow-hidden rounded-lg border border-[#d8cba8]/70 bg-[#142419] px-6 py-8 text-[#fbf5e9] shadow-[0_18px_45px_rgba(26,31,24,0.14)] sm:px-8 lg:mt-6"
    >
      <div className="absolute inset-0 opacity-[0.16] [background-image:linear-gradient(90deg,#c9a44d_1px,transparent_1px),linear-gradient(0deg,#c9a44d_1px,transparent_1px)] [background-size:3rem_3rem]" />
      <div className="absolute -right-12 -top-20 h-48 w-48 rounded-full bg-[#c9a44d]/20 blur-3xl" />
      <div className="relative flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="text-[10px] font-semibold uppercase tracking-[0.38em] text-[#c9a44d] opacity-100">
            Wellness Crafted
          </p>
          <h3 className="mt-3 max-w-3xl font-serif text-[clamp(2rem,4vw,3.4rem)] leading-[1.02] text-[#fff8eb]">
            Spaces composed for calm, connection, and celebration.
          </h3>
        </div>
        <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-lg border border-[#c9a44d]/45 bg-[#f8f0df] text-[#142419] shadow-lg">
          <Sparkles strokeWidth={1.45} className="h-7 w-7" />
        </div>
      </div>
    </motion.div>
  );
}

export default function AmenitiesSection() {
  return (
    <section id="amenities" className="relative w-full max-w-full overflow-hidden bg-[#f5efe1] py-14 text-[#172018] md:py-24">

      <div className="pointer-events-none absolute -right-28 -top-20 h-96 w-96 rounded-full bg-[#d9c080]/20 blur-3xl" />
      <div className="pointer-events-none absolute right-0 top-0 h-72 w-72 opacity-[0.1] [background:repeating-conic-gradient(from_18deg,#2d3c2f_0deg_3deg,transparent_3deg_10deg)] [clip-path:ellipse(54%_70%_at_100%_0%)]" />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-64 bg-gradient-to-b from-[#f8f0df] via-[#f8f0df]/88 to-transparent" />

      <div className="relative z-10 mx-auto w-full max-w-[1420px] px-5 sm:px-8 lg:px-12">

        <div className="mb-9 grid min-w-0 gap-8 md:mb-12 lg:mb-14">
          <div className="min-w-0">
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-4 flex max-w-full items-center gap-4 text-[10px] font-semibold uppercase tracking-[0.22em] text-[#9b7422] opacity-100 sm:mb-5 sm:gap-7 sm:text-[11px] sm:tracking-[0.42em]"
            >
              <span className="h-[1px] w-9 bg-[#9b7422]" /> Lifestyle Elevated
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="max-w-[58rem] font-serif text-[clamp(2.55rem,12vw,5.6rem)] font-normal leading-[0.95] text-[#102016] drop-shadow-[0_1px_0_rgba(255,255,255,0.75)]"
            >
              The <span className="italic text-[#bd8f2a]">Amenities</span> <span className="block xl:inline">Selection</span>
            </motion.h2>
          </div>
        </div>

        <div className="grid min-w-0 auto-rows-auto grid-cols-1 gap-4 md:grid-cols-2 md:gap-5 lg:auto-rows-[7.25rem] lg:[grid-auto-flow:dense] lg:[grid-template-columns:repeat(12,minmax(0,1fr))]">
          {amenities.map((item, index) => (
            <AmenityCard key={item.name} item={item} index={index} />
          ))}
        </div>

        <AmenitiesFinish />
      </div>
    </section>
  );
}
