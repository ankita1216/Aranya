import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useState } from "react";
import DecorativeElements from "./DecorativeElements";

import hero1 from "/images/hero1.webp";
import hero2 from "/images/hero2.webp";

const imageStories = [
  {
    label: "Sustainable",
    title: "Eco-conscious Architecture",
    src: hero1,
    position: "object-left"
  },
  {
    label: "Modern",
    title: "Contemporary Spaces",
    src: hero2,
    position: "object-right"
  }
];

export default function HeroSection({ onOpenModal }) {

  return (
    <section className="relative h-screen overflow-hidden bg-[#f5efe1] text-[#172018]">
      <DecorativeElements type="organic" position="left-top" opacity={0.08} size="w-96" />
      <DecorativeElements type="blob" position="right-bottom" opacity={0.06} size="w-[30rem]" />
      {/* Decorative Background Grid */}
      <div className="absolute inset-0 opacity-[0.16] [background-image:linear-gradient(90deg,#8c7b45_1px,transparent_1px),linear-gradient(0deg,#8c7b45_1px,transparent_1px)] [background-size:4.2rem_4.2rem]" />

      {/* Rotating Circle Decoration */}
      <motion.div
        className="absolute -right-20 top-20 h-[42rem] w-[42rem] rounded-full border border-[#a98b39]/30"
        animate={{ rotate: 360 }}
        transition={{ duration: 46, repeat: Infinity, ease: "linear" }}
      />

      <div className="relative z-10 flex h-full flex-col px-5 py-6 sm:px-10 lg:px-[4.4rem] pt-24 lg:pt-28">
        <div className="grid flex-1 items-center gap-12 py-2 lg:grid-cols-[0.9fr_1.1fr]">
          {/* Text Content */}
          <div className="max-w-2xl lg:pr-12">
            <motion.p
              className="mb-6 text-[12px] font-semibold uppercase tracking-[0.24em] text-[#8a7033]"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.65 }}
            >
              Living redefined
            </motion.p>
            <motion.h1
              className="font-serif text-[62px] leading-[1.1] text-[#172018]"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.8, delay: 0.08 }}
            >
              Private <span className="text-[#C9A44D]">greens.</span>
              <br />
              Public <span className="text-[#C9A44D]">calm.</span>
            </motion.h1>
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
                className="inline-flex items-center gap-4 border-b border-[#756329] pb-2 text-[11px] font-bold uppercase tracking-[0.2em] text-[#26311f] group transition-all"
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
                key={item.label}
                className={`relative w-full max-h-[60vh] aspect-[3/4.5] md:aspect-[3/4.5] rounded-t-[18rem] overflow-hidden shadow-[0_40px_100px_rgba(0,0,0,0.2)] border-[6px] md:border-[10px] border-[#f5efe1] group ${
                  index === 0 ? "mb-12 md:mb-16" : "mb-0"
                }`}
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ y: -15, scale: 1.02 }}
                viewport={{ once: true }}
                transition={{ duration: 1.2, delay: index * 0.2, ease: [0.22, 1, 0.36, 1] }}
              >
                <img
                  src={item.src}
                  alt={item.title}
                  fetchpriority="high"
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80 group-hover:opacity-70 transition-opacity" />
                
                <div className="absolute bottom-8 md:bottom-12 left-6 md:left-10 right-6 md:right-10 text-center">
                  <span className="inline-block px-3 py-1 border border-white/40 rounded-full text-[8px] font-bold uppercase tracking-[0.2em] !text-white mb-3">
                    {item.label}
                  </span>
                  <h3 className="font-serif text-lg md:text-2xl !text-white leading-tight">
                    {item.title}
                  </h3>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </div>

    </section>
  );
}