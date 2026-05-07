import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import DecorativeElements from "./DecorativeElements";
import StyleAccents from "./StyleAccents";

import first from "/images/first.webp";
import second from "/images/secondmage.webp";

const imageStories = [
  {
    // label: "Sustainable",
    // title: "Eco-conscious Architecture",
    src: first,
    // Shifted to the opposite side (pushes image right)
    position: "object-[30%_center]"
  },
  {
    // label: "Modern",
    // title: "Contemporary Spaces",
    src: second,
    // Shifted to the opposite side (pushes image right)
    position: "object-[40%_center]"
  }
];

export default function HeroSection({ onOpenModal }) {

  return (
    <section className="relative h-screen overflow-hidden bg-[#f5efe1] text-[#112018]">
      <DecorativeElements type="organic" position="left-top" opacity={0.08} size="w-96" />
      <DecorativeElements type="blob" position="right-bottom" opacity={0.06} size="w-[30rem]" />
      <StyleAccents variant="style_1" position="top-left" size="w-52 sm:w-72 lg:w-96" opacity={0.34} rotate={-18} />
      <StyleAccents variant="style_2" position="bottom-right" size="w-56 sm:w-80 lg:w-[28rem]" opacity={0.22} rotate={14} flip />

      {/* Decorative Background Grid */}
      <div className="absolute inset-0 opacity-[0.1] [background-image:linear-gradient(90deg,#7f917b_1px,transparent_1px),linear-gradient(0deg,#7f917b_1px,transparent_1px)] [background-size:4.2rem_4.2rem]" />

      {/* Rotating Circle Decoration */}
      <motion.div
        className="absolute -right-20 top-20 h-[42rem] w-[42rem] rounded-full border border-[#C9A44D]/30"
        animate={{ rotate: 360 }}
        transition={{ duration: 46, repeat: Infinity, ease: "linear" }}
      />

      <div className="relative z-10 flex h-full flex-col px-5 py-6 sm:px-10 lg:px-[4.4rem] pt-24 lg:pt-28">
        <div className="grid flex-1 items-center gap-12 py-2 lg:grid-cols-[0.9fr_1.1fr]">
          {/* Text Content */}
          <div className="max-w-2xl lg:pr-12">
            <motion.p
              className="mb-6 text-[12px] font-semibold uppercase tracking-[0.24em] text-[#C9A44D]"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.65 }}
            >
              Living redefined
            </motion.p>
            <motion.h2
              className="font-serif text-[62px] leading-[1.1] text-[#112018]"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.8, delay: 0.08 }}
            >
              Private <span className="text-[#C9A44D]">greens</span>
              <br />
              Public <span className="text-[#C9A44D]">calm</span>
            </motion.h2>
            <motion.p
              className="mt-8 max-w-md text-lg leading-relaxed text-[#314033]/80"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.75, delay: 0.18 }}
            >
              Experience an editorial lifestyle where soft motion meets premium comfort.
              A gallery of moments curated across your full home.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.75, delay: 0.3 }}
              className="mt-12"
            >
              <button
                onClick={onOpenModal}
                className="inline-flex items-center gap-4 border-b border-[#C9A44D] pb-2 text-[11px] font-bold uppercase tracking-[0.2em] text-[#112018] group transition-all"
              >
                Discover More
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </button>
            </motion.div>
          </div>

          {/* Image Cards Grid */}
          <div className="relative grid grid-cols-2 gap-4 lg:gap-8 w-full h-full items-end">
            {imageStories.map((item, index) => (
              <motion.article
                key={index}
                className={`relative w-full max-h-[60vh] aspect-[3/4.5] md:aspect-[3/4.5] rounded-t-[18rem] rounded-b-none overflow-hidden shadow-[0_40px_100px_rgba(0,0,0,0.2)] border-[6px] md:border-[10px] border-[#f5efe1] group ${index === 0 ? "mb-12 md:mb-16" : "mb-0"
                  }`}
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ y: -15, scale: 1.02 }}
                viewport={{ once: true }}
                transition={{ duration: 1.2, delay: index * 0.2, ease: [0.22, 1, 0.36, 1] }}
              >
                <img
                  src={item.src}
                  alt={item.title || "Hero Image"}
                  fetchpriority="high"
                  loading="eager"
                  decoding="async"
                  className={`w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 ${item.position}`}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-80 group-hover:opacity-70 transition-opacity" />

                {/* Text Content (Shifted slightly up to make room for the card) */}
                <div className="absolute bottom-20 md:bottom-24 left-6 md:left-10 right-6 md:right-10 text-center transition-transform duration-500 group-hover:-translate-y-2">
                  {item.label && (
                    <span className="inline-block px-3 py-1 border border-white/40 rounded-full text-[8px] font-bold uppercase tracking-[0.2em] !text-white mb-3">
                      {item.label}
                    </span>
                  )}
                  {item.title && (
                    <h3 className="font-serif text-lg md:text-2xl !text-white leading-tight">
                      {item.title}
                    </h3>
                  )}
                </div>

                {/* Floating Premium Tag - Removed rounded-xl, using rounded-none */}
                <div className="absolute bottom-4 md:bottom-6 left-1/2 -translate-x-1/2 w-[85%] bg-white/10 backdrop-blur-md border border-white/20 rounded-none px-4 py-2.5 flex items-center justify-between shadow-2xl transition-transform duration-500 group-hover:-translate-y-1">
                  <div className="flex flex-col text-left">
                    <span className="text-[8px] md:text-[9px] font-bold uppercase tracking-[0.2em] text-[#C9A44D] mb-1">Location</span>
                    <span className="text-[12px] md:text-[12px] font-serif text-white">Dharapur,Guwahati</span>
                  </div>

                  <div className="h-6 w-[1px] bg-white/20"></div>

                  <div className="flex flex-col text-right">
                    <span className="text-[8px] md:text-[9px] font-bold uppercase tracking-[0.2em] text-[#C9A44D] mb-1">Price</span>
                    <span className="text-[12px] md:text-[12px] font-serif text-white">Starting at 40 Lac</span>
                  </div>
                </div>

              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}