import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

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

export default function HeroSection() {
  return (
    <section className="relative min-h-[100svh] overflow-hidden bg-[#f5efe1] text-[#172018]">
      {/* Decorative Background Grid */}
      <div className="absolute inset-0 opacity-[0.16] [background-image:linear-gradient(90deg,#8c7b45_1px,transparent_1px),linear-gradient(0deg,#8c7b45_1px,transparent_1px)] [background-size:4.2rem_4.2rem]" />

      {/* Rotating Circle Decoration */}
      <motion.div
        className="absolute -right-20 top-20 h-[42rem] w-[42rem] rounded-full border border-[#a98b39]/30"
        animate={{ rotate: 360 }}
        transition={{ duration: 46, repeat: Infinity, ease: "linear" }}
      />

      <div className="relative z-10 flex min-h-[100svh] flex-col px-5 py-8 sm:px-10 lg:px-[4.4rem] pt-32 lg:pt-40">
        <div className="grid flex-1 items-center gap-10 py-14 lg:grid-cols-[0.82fr_1.18fr]">
          {/* Text Content */}
          <div className="max-w-xl">
            <motion.p
              className="mb-5 text-[12px] font-semibold uppercase tracking-[0.24em] text-[#8a7033]"
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
              className="mt-8 max-w-md text-base leading-8 text-[#314033]/80"
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
              className="mt-10"
            >
              <a
                href="#experience"
                className="inline-flex items-center gap-3 border-b border-[#756329] pb-1 text-xs font-semibold uppercase tracking-[0.16em] text-[#26311f]"
              >
                Discover More
                <ArrowRight className="h-4 w-4" />
              </a>
            </motion.div>
          </div>

          {/* Image Cards Grid */}
          <div className="relative grid gap-10 sm:grid-cols-2 lg:gap-16">
            {imageStories.map((item, index) => (
              <motion.article
                key={item.label}
                className={`group relative overflow-hidden rounded-3xl shadow-[0_32px_80px_rgba(31,38,25,0.18)] h-[32rem] lg:h-[40rem] ${index === 0 ? "sm:mt-24" : "sm:mt-0"
                  }`}
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.8, delay: index * 0.15 }}
              >
                <img
                  src={item.src}
                  alt={item.title}
                  className={`absolute inset-0 w-full h-full object-cover transition-transform duration-1000 ease-out group-hover:scale-110 ${item.position}`}
                />
                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0)_40%,rgba(0,0,0,0.8)_100%)] transition-opacity duration-500 group-hover:opacity-90" />

                <div className="absolute inset-x-0 bottom-0 p-8 md:p-10 text-[#f7f0de] transition-transform duration-500 group-hover:-translate-y-2">
                  <p className="text-[0.7rem] font-semibold uppercase tracking-[0.2em] text-[#f1d57a] mb-2">
                    {item.label}
                  </p>
                  <h3 className="font-serif text-3xl md:text-4xl leading-tight max-w-[280px]">{item.title}</h3>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </div>

      {/* Google Fonts */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@300;400;500;600;700&display=swap');
      `}</style>
    </section>
  );
}