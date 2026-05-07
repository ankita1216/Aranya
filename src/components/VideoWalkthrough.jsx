import { useRef, useState } from "react";
import { motion } from "framer-motion";
import { Play } from "lucide-react";
import StyleAccents from "./StyleAccents";

export default function VideoWalkthrough() {
  const iframeRef = useRef(null);
  const [hasStarted, setHasStarted] = useState(false);

  const sendCommand = (command, args = []) => {
    iframeRef.current?.contentWindow.postMessage(
      JSON.stringify({ event: "command", func: command, args }),
      "*"
    );
  };

  const startVideo = () => {
    setHasStarted(true);
    setTimeout(() => sendCommand("playVideo"), 350);
  };

  return (
    /* Changed bg-gradient to solid cream color bg-[#f8f0df] */
    <section
      id="walkthrough"
      className="relative overflow-hidden bg-[#f8f0df] py-14 text-[#112018] sm:py-20 md:py-24"
    >
      {/* Removed the #edf0e6 (greenish) gradient overlay div from here */}

      <StyleAccents variant="style_2" position="top-right" size="w-56 sm:w-72 lg:w-96" opacity={0.2} rotate={22} />
      <StyleAccents variant="style_1" position="bottom-left" size="w-56 sm:w-72 lg:w-96" opacity={0.18} rotate={-20} flip />

      <div className="relative z-10 mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12">
        <div className="mb-8 flex flex-col justify-between gap-5 sm:mb-10 sm:gap-6 md:flex-row md:items-end">
          <div>
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-4 flex items-center gap-3 text-[11px] font-bold uppercase tracking-[0.42em] text-[#C9A44D] opacity-100"
            >
              <span className="h-[2px] w-8 bg-[#C9A44D]" /> Video Walkthrough
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="max-w-4xl font-serif text-3xl font-semibold leading-tight text-[#112018] sm:text-4xl md:text-6xl"
            >
              Experience <span className="font-medium italic text-[#C9A44D]">Aranya</span> in Motion
            </motion.h2>
          </div>
          <p className="max-w-sm text-sm font-medium leading-7 text-[#314033]/72 opacity-100">
            Step through arrival, amenities, interiors, and open spaces in a refined cinematic preview.
          </p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.65 }}
          className="overflow-hidden rounded-xl border border-[#C9A44D]/70 bg-[#0b0d09] shadow-[0_32px_90px_rgba(22,28,18,0.20)]"
        >
          <div className="relative aspect-video min-h-[24rem] overflow-hidden bg-[#0b0d09] max-sm:min-h-[34rem]">
            <iframe
              ref={iframeRef}
              className="absolute inset-0 h-full w-full border-none"
              src="https://www.youtube.com/embed/0xOfYiOB6iM?enablejsapi=1&mute=1&controls=0&rel=0&modestbranding=1&playsinline=1"
              title="Aranya walkthrough video"
              allow="autoplay; encrypted-media"
            />

            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/82 via-black/10 to-black/18" />
            <div className="pointer-events-none absolute bottom-0 right-0 h-24 w-56 bg-gradient-to-tl from-[#0b0d09] via-[#0b0d09]/76 to-transparent" />

            {!hasStarted && (
              <button
                type="button"
                onClick={startVideo}
                className="absolute inset-0 z-20 flex flex-col items-center justify-center gap-5 bg-black/22 text-white transition hover:bg-black/12"
              >
                <span className="flex h-20 w-20 items-center justify-center rounded-full border border-white/70 bg-white text-[#0b0d09] shadow-[0_22px_80px_rgba(0,0,0,0.38)] transition hover:scale-105 sm:h-24 sm:w-24">
                  <Play fill="currentColor" size={34} className="ml-1" />
                </span>
                <span className="rounded-full border border-white/35 bg-black/48 px-6 py-3 text-[11px] font-semibold uppercase tracking-[0.38em] text-white opacity-100 backdrop-blur-md">
                  Begin Tour
                </span>
              </button>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
}