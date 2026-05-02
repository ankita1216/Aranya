import { useRef, useState } from "react";
import { motion } from "framer-motion";
import { Pause, Play, RotateCcw, RotateCw } from "lucide-react";

export default function VideoWalkthrough() {
  const iframeRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [hasStarted, setHasStarted] = useState(false);

  const sendCommand = (command, args = []) => {
    iframeRef.current?.contentWindow.postMessage(
      JSON.stringify({ event: "command", func: command, args }),
      "*"
    );
  };

  const startVideo = () => {
    setHasStarted(true);
    setIsPlaying(true);
    setTimeout(() => sendCommand("playVideo"), 350);
  };

  const togglePlay = () => {
    const nextPlaying = !isPlaying;
    sendCommand(nextPlaying ? "playVideo" : "pauseVideo");
    setHasStarted(true);
    setIsPlaying(nextPlaying);
  };

  return (
    <section id="walkthrough" className="relative overflow-hidden bg-white py-14 text-[#172018] sm:py-20 md:py-24">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-[#f8f0df] to-white" />
      <div className="pointer-events-none absolute -right-28 top-16 h-80 w-80 rounded-full bg-[#c9a44d]/14 blur-3xl" />
      <div className="pointer-events-none absolute -left-24 bottom-10 h-72 w-72 rounded-full bg-[#f5efe1] blur-3xl" />

      <div className="relative z-10 mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12">
        <div className="mb-8 flex flex-col justify-between gap-5 sm:mb-10 sm:gap-6 md:flex-row md:items-end">
          <div>
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-4 flex items-center gap-3 text-[11px] font-bold uppercase tracking-[0.42em] text-[#a87923] opacity-100"
            >
              <span className="h-[2px] w-8 bg-[#a87923]" /> Video Walkthrough
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="max-w-4xl font-serif text-3xl font-semibold leading-tight text-[#132019] sm:text-4xl md:text-6xl"
            >
              Experience <span className="font-medium italic text-[#bd8f2a]">Aranya</span> in Motion
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
          className="overflow-hidden rounded-xl border border-[#d8cba8]/70 bg-[#0b0d09] shadow-[0_32px_90px_rgba(22,28,18,0.20)]"
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

            <div className="absolute bottom-0 left-0 right-0 z-30 p-3 sm:p-6">
              <div className="rounded-2xl border border-white/28 bg-black/66 p-3 text-white shadow-[0_22px_70px_rgba(0,0,0,0.34)] backdrop-blur-xl sm:p-5">
                <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                  <div className="min-w-0">
                    <p className="text-[10px] font-bold uppercase tracking-[0.34em] text-white opacity-100">
                      Walkthrough Film
                    </p>
                    <p className="mt-1 truncate text-sm font-medium text-white/82 opacity-100">
                      A full-screen look at the Aranya lifestyle.
                    </p>
                  </div>

                  <div className="flex shrink-0 items-center gap-3">
                    <button
                      type="button"
                      aria-label="Rewind video"
                      onClick={() => sendCommand("seekTo", [-10, false])}
                      className="flex h-11 w-11 items-center justify-center rounded-full border border-white/28 bg-white/10 text-white transition hover:bg-white hover:text-[#0b0d09]"
                    >
                      <RotateCcw size={19} />
                    </button>
                    <button
                      type="button"
                      aria-label={isPlaying ? "Pause video" : "Play video"}
                      onClick={togglePlay}
                      className="flex h-14 w-14 items-center justify-center rounded-full border border-white bg-white text-[#0b0d09] shadow-[0_12px_34px_rgba(255,255,255,0.22)] transition hover:bg-[#f8f0df]"
                    >
                      {isPlaying ? <Pause fill="currentColor" size={22} /> : <Play fill="currentColor" className="ml-1" size={23} />}
                    </button>
                    <button
                      type="button"
                      aria-label="Forward video"
                      onClick={() => sendCommand("seekTo", [10, false])}
                      className="flex h-11 w-11 items-center justify-center rounded-full border border-white/28 bg-white/10 text-white transition hover:bg-white hover:text-[#0b0d09]"
                    >
                      <RotateCw size={19} />
                    </button>
                  </div>
                </div>
                <div className="mt-4 h-2 overflow-hidden rounded-full bg-white/22">
                  <div className="h-full w-2/3 rounded-full bg-white" />
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
