import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowRight,
  House,
  Leaf,
  Menu,
  Plane,
  TreePine,
  Users,
  X,
} from "lucide-react";

const heroImages = ["/images/hero1.png", "/images/hero2.png", "/images/hero3.png"];

const navLinks = [
  "THE EXPERIENCE",
  "AMENITIES",
  "RESIDENCES",
  "LOCATION",
  "ABOUT US",
];

const stats = [
  { icon: Leaf, value: "70%", label: "OPEN GREEN" },
  { icon: House, value: "1535 SQM", label: "CLUBHOUSE" },
  { icon: Plane, value: "2 MINS", label: "FROM AIRPORT" },
  { icon: TreePine, value: "25+", label: "LIFESTYLE AMENITIES" },
  { icon: Users, value: "BUILT FOR", label: "GENERATIONS" },
];

const slideDurations = [11000, 5200, 5200];

const slideStories = [
  {
    eyebrow: "Forest arrival",
    line: "A quiet walk home, held by light, trees, and the warmth of arrival.",
  },
  {
    eyebrow: "Private greens",
    line: "Residences planned around open breathing space, not leftover landscape.",
  },
  {
    eyebrow: "Club Aranya",
    line: "Leisure that feels intimate, generous, and made for slow evenings.",
  },
];

function HeroSection() {
  const [activeSlide, setActiveSlide] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const timer = window.setTimeout(() => {
      setActiveSlide((slide) => (slide + 1) % heroImages.length);
    }, slideDurations[activeSlide]);

    return () => window.clearTimeout(timer);
  }, [activeSlide]);

  return (
    <section className="relative min-h-[100svh] overflow-hidden bg-[#070c08] text-[#f7f0de]">
      <AnimatePresence mode="wait">
        <motion.img
          key={heroImages[activeSlide]}
          src={heroImages[activeSlide]}
          alt="Aranya residences surrounded by landscaped greens"
          className="absolute inset-0 h-full w-full object-cover object-center"
          initial={{ opacity: 0, scale: 1.035 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.4, ease: "easeOut" }}
        />
      </AnimatePresence>

      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(5,10,6,0.48)_0%,rgba(5,10,6,0.28)_26%,rgba(5,10,6,0.04)_54%,rgba(5,10,6,0.22)_100%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(3,5,3,0.42)_0%,rgba(3,5,3,0)_36%,rgba(3,5,3,0.03)_60%,rgba(3,5,3,0.88)_100%)]" />
      <div className="absolute inset-y-0 left-0 w-[36rem] max-w-[70vw] bg-[radial-gradient(circle_at_12%_48%,rgba(5,10,6,0.62),rgba(5,10,6,0.32)_42%,rgba(5,10,6,0)_72%)]" />

      <header className="relative z-30 flex h-24 items-center justify-between px-5 sm:h-28 sm:px-12 lg:h-36 lg:px-[4.4rem]">
        <a href="#" className="block w-32 sm:w-48 lg:w-52" aria-label="Aranya home">
          <img src="/logo/trust.png" alt="Aranya by Rang Homes" className="w-full" />
        </a>

        <nav className="hidden items-center gap-9 xl:flex">
          {navLinks.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase().replaceAll(" ", "-")}`}
              className="text-[0.76rem] font-medium tracking-[0.12em] text-white/86 transition-colors duration-300 hover:text-[#d7b862]"
            >
              {link}
            </a>
          ))}
        </nav>

        <button
          className="grid h-11 w-11 place-items-center text-[#d7b862]"
          aria-label="Open navigation menu"
          type="button"
          onClick={() => setIsMenuOpen((open) => !open)}
        >
          {isMenuOpen ? (
            <X strokeWidth={1.5} className="h-9 w-9" />
          ) : (
            <Menu strokeWidth={1.5} className="h-10 w-10" />
          )}
        </button>
      </header>

      {isMenuOpen && (
        <div className="absolute inset-0 z-20 bg-[#071008]/96 px-6 pt-28 backdrop-blur-md xl:hidden">
          <nav className="grid gap-6 border-y border-[#d6ba61]/22 py-8">
            {navLinks.map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase().replaceAll(" ", "-")}`}
                className="font-serif text-3xl text-[#f7f0de]"
                onClick={() => setIsMenuOpen(false)}
              >
                {link}
              </a>
            ))}
            <a
              href="#enquiry"
              className="mt-3 inline-flex w-fit items-center gap-3 border border-[#d6ba61] px-5 py-3 text-xs font-medium uppercase tracking-[0.16em] text-[#d6ba61]"
              onClick={() => setIsMenuOpen(false)}
            >
              Enquire Now
              <ArrowRight className="h-4 w-4" />
            </a>
          </nav>
        </div>
      )}

      <div className="absolute left-4 top-[40%] z-20 hidden sm:block lg:left-[3.25rem]">
        <div className="relative flex h-32 w-px flex-col items-center justify-center gap-5 bg-white/24">
          {heroImages.map((_, index) => (
            <button
              key={index}
              type="button"
              aria-label={`Go to hero slide ${index + 1}`}
              aria-current={activeSlide === index}
              onClick={() => setActiveSlide(index)}
              className={`absolute -left-[0.32rem] h-3 w-3 rounded-full border transition-all duration-300 ${
                activeSlide === index
                  ? "scale-110 border-[#d9b64d] bg-[#d9b64d]"
                  : "border-white/70 bg-white/70 hover:border-[#d9b64d] hover:bg-[#d9b64d]"
              }`}
              style={{ top: `${index * 3.4 + 1.6}rem` }}
            />
          ))}
        </div>
      </div>

      <div className="absolute bottom-[9.5rem] left-1/2 z-20 flex -translate-x-1/2 gap-3 sm:hidden">
        {heroImages.map((_, index) => (
          <button
            key={index}
            type="button"
            aria-label={`Go to hero slide ${index + 1}`}
            onClick={() => setActiveSlide(index)}
            className={`h-2 rounded-full transition-all duration-300 ${
              activeSlide === index ? "w-8 bg-[#d9b64d]" : "w-2 bg-white/68"
            }`}
          />
        ))}
      </div>

      <main className="relative z-10 flex min-h-[calc(100svh-6rem)] items-center px-5 pb-52 pt-0 sm:px-12 sm:pb-40 lg:min-h-[calc(100svh-9rem)] lg:px-[7.4rem] lg:pb-36">
        <div className="w-full max-w-[32rem] sm:max-w-[37rem]">
          <motion.p
            className="mb-4 text-[0.62rem] font-medium uppercase tracking-[0.22em] text-[#d6ba61] sm:mb-5 sm:text-[0.68rem] sm:tracking-[0.28em]"
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 0.12 }}
          >
            An address held by nature
          </motion.p>

          <motion.p
            className="mb-5 font-serif text-[1.95rem] leading-[1.18] text-white drop-shadow-[0_2px_12px_rgba(0,0,0,0.5)] sm:mb-7 sm:text-5xl lg:text-[2.45rem]"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.2 }}
          >
            Not just a home.
            <br />
            A way of living.
          </motion.p>

          <motion.h1
            className="font-serif text-[3.05rem] font-medium leading-none tracking-[0.11em] text-[#cfb866] drop-shadow-[0_4px_18px_rgba(0,0,0,0.52)] min-[390px]:text-[3.45rem] sm:text-[5.9rem] sm:tracking-[0.18em] lg:text-[5.25rem] xl:text-[5.8rem]"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.95, delay: 0.35 }}
          >
            ARANYA
          </motion.h1>

          <motion.div
            className="my-5 flex items-center gap-2 text-[#c9ad5d] sm:my-8"
            initial={{ opacity: 0, x: -18 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.85, delay: 0.55 }}
          >
            <span className="h-px w-[10rem] bg-[#c9ad5d] sm:w-[17rem]" />
            <span className="font-serif text-2xl leading-none">‹</span>
          </motion.div>

          <motion.p
            className="font-serif text-[1.15rem] leading-[1.45] text-white drop-shadow-[0_2px_10px_rgba(0,0,0,0.55)] sm:text-[1.52rem]"
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.85, delay: 0.72 }}
          >
            Where 70% is not built.
            <br />
            It breathes.
          </motion.p>

          <motion.p
            className="mt-4 max-w-[23rem] text-[0.82rem] leading-6 text-white/74 sm:mt-5 sm:max-w-[26rem] sm:text-sm sm:leading-7"
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.85, delay: 0.82 }}
          >
            A calm address shaped around canopy walks, soft arrival courts, and
            homes that let morning light, shade, and stillness become part of
            every day.
          </motion.p>

          <motion.div
            className="mt-9 flex flex-wrap items-center gap-5 sm:mt-14"
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.85, delay: 0.9 }}
          >
            <a
              href="#photo-section"
              className="group inline-flex items-center gap-4 text-[#e2c159]"
            >
              <span className="grid h-9 w-9 place-items-center rounded-full border border-[#e2c159] transition-colors group-hover:bg-[#e2c159]">
                <ArrowRight className="h-4 w-4 transition-colors group-hover:text-[#071008]" />
              </span>
              <span className="text-xs font-medium uppercase tracking-[0.16em] text-white/82">
                Discover Your Space
              </span>
            </a>

            <a
              href="#enquiry"
              className="group inline-flex min-h-11 items-center gap-3 border-b border-[#d6ba61] pb-1 text-xs font-semibold uppercase tracking-[0.16em] text-[#f1d57a] transition-colors hover:text-white"
            >
              Enquire Now
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
          </motion.div>
        </div>
      </main>

      <div className="pointer-events-none absolute right-8 top-[46%] z-10 hidden max-w-[14.5rem] border-l border-[#d6ba61]/34 pl-5 text-right lg:block">
        <p className="text-[0.62rem] font-medium uppercase tracking-[0.25em] text-[#d6ba61]">
          {slideStories[activeSlide].eyebrow}
        </p>
        <p className="mt-3 text-sm leading-6 text-white/64">
          {slideStories[activeSlide].line}
        </p>
      </div>

      <div className="absolute bottom-0 left-0 z-20 w-full bg-[linear-gradient(90deg,rgba(8,18,12,0.96),rgba(18,31,19,0.92),rgba(8,15,10,0.96))] px-3 py-4 shadow-[0_-24px_50px_rgba(0,0,0,0.4)] sm:px-10 sm:py-6">
        <div className="mx-auto grid max-w-[82rem] grid-cols-2 gap-y-3 sm:grid-cols-3 sm:gap-y-6 lg:grid-cols-5 lg:gap-y-0">
          {stats.map(({ icon: Icon, value, label }) => (
            <div
              key={label}
              className="flex min-h-12 items-center gap-3 px-2 text-[#d6ba61] sm:min-h-16 sm:gap-5 sm:px-4 lg:border-r lg:border-white/18 lg:px-8 last:lg:border-r-0"
            >
              <Icon strokeWidth={1.2} className="h-7 w-7 shrink-0 sm:h-11 sm:w-11" />
              <div>
                <p className="font-serif text-[1rem] leading-tight tracking-[0.04em] sm:text-[1.4rem]">
                  {value}
                </p>
                <p className="mt-1 text-[0.52rem] font-medium uppercase tracking-[0.08em] sm:text-[0.68rem] sm:tracking-[0.12em]">
                  {label}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
