import { motion } from "framer-motion";

const photos = [
  {
    src: "/images/hero1.webp",
    title: "The first turn slows the day down.",
    label: "Chapter 01",
    body: "A soft arrival through green, where the city begins to feel quieter before you reach the door.",
  },
  {
    src: "/images/hero2.webp",
    title: "Architecture holds the landscape gently.",
    label: "Chapter 02",
    body: "Homes rise with restraint, leaving enough room for air, light, and everyday stillness.",
  },
  {
    src: "/images/hero3.webp",
    title: "Evenings find their own rhythm here.",
    label: "Chapter 03",
    body: "The clubhouse becomes a warm pause, a place for familiar voices and unhurried time.",
  },
];

function PhotoSection() {
  return (
    <section
      id="photo-section"
      className="relative overflow-hidden bg-[#f8f0df] px-5 py-14 text-[#172018] sm:px-8 sm:py-20 lg:px-12 lg:py-24"
    >
      <div className="pointer-events-none absolute -right-28 top-20 h-80 w-80 rounded-full bg-[#c9a44d]/14 blur-3xl" />
      <div className="pointer-events-none absolute -left-28 bottom-10 h-72 w-72 rounded-full bg-white/70 blur-3xl" />

      <div className="relative z-10 mx-auto max-w-[1440px]">
        <div className="mb-8 grid gap-5 sm:mb-12 sm:gap-7 lg:grid-cols-[minmax(0,1fr)_420px] lg:items-end">
          <div>
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-4 flex items-center gap-3 text-[11px] font-bold uppercase tracking-[0.42em] text-[#a87923] opacity-100"
            >
              <span className="h-[2px] w-9 bg-[#a87923]" /> Photo Story
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="max-w-4xl font-serif text-3xl font-semibold leading-tight text-[#132019] sm:text-4xl md:text-6xl"
            >
              A home should be remembered in <span className="font-medium italic text-[#bd8f2a]">moments</span>.
            </motion.h2>
          </div>
          <p className="max-w-md text-sm font-medium leading-7 text-[#314033]/72 opacity-100">
            These are not just photographs of a project. They are small scenes from the life Aranya is designed to hold.
          </p>
        </div>

        <div className="grid gap-5 lg:grid-cols-[1.15fr_0.85fr]">
          <motion.article
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.65 }}
            className="group relative min-h-[26rem] overflow-hidden rounded-xl border border-[#d8cba8]/70 bg-[#172018] shadow-[0_28px_80px_rgba(47,42,28,0.16)] sm:min-h-[34rem]"
          >
            <img
              src={photos[0].src}
              alt={photos[0].title}
              className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/82 via-black/16 to-transparent" />
            <div className="absolute bottom-0 left-0 max-w-3xl p-7 text-white sm:p-10">
              <p className="mb-3 text-[10px] font-bold uppercase tracking-[0.36em] text-[#f1d48a] opacity-100">
                {photos[0].label}
              </p>
              <h3 className="font-serif text-3xl leading-tight text-white sm:text-6xl">
                {photos[0].title}
              </h3>
              <p className="mt-5 max-w-lg text-sm font-medium leading-7 text-white/78 opacity-100">
                {photos[0].body}
              </p>
            </div>
          </motion.article>

          <div className="grid gap-5">
            {photos.slice(1).map((photo, index) => (
              <motion.article
                key={photo.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.65, delay: index * 0.08 }}
                className="group relative min-h-[14.5rem] overflow-hidden rounded-xl border border-[#d8cba8]/70 bg-[#172018] shadow-[0_20px_54px_rgba(47,42,28,0.12)] sm:min-h-[16.2rem]"
              >
                <img
                  src={photo.src}
                  alt={photo.title}
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/78 via-black/14 to-transparent" />
                <div className="absolute bottom-0 left-0 p-6 text-white">
                  <p className="mb-2 text-[10px] font-bold uppercase tracking-[0.32em] text-[#f1d48a] opacity-100">
                    {photo.label}
                  </p>
                  <h3 className="max-w-md font-serif text-2xl leading-tight text-white sm:text-3xl">
                    {photo.title}
                  </h3>
                  <p className="mt-3 max-w-md text-xs font-medium leading-6 text-white/76 opacity-100">
                    {photo.body}
                  </p>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default PhotoSection;
