const photos = [
  {
    src: "/images/hero1.webp",
    title: "Arrival through a living canopy",
    label: "Hero View",
  },
  {
    src: "/images/hero2.webp",
    title: "Residences wrapped in green",
    label: "Landscape",
  },
  {
    src: "/images/hero3.webp",
    title: "A clubhouse made for slow evenings",
    label: "Club Aranya",
  },
];

function PhotoSection() {
  return (
    <section
      id="photo-section"
      className="bg-[#08100b] px-6 py-20 text-[#f7f0de] sm:px-10 lg:px-[4.4rem] lg:py-28"
    >
      <div className="mx-auto max-w-[82rem]">
        <div className="mb-12 flex flex-col justify-between gap-5 border-b border-[#c9ad5d]/30 pb-8 md:flex-row md:items-end">
          <div>
            <p className="mb-3 text-xs font-medium uppercase tracking-[0.22em] text-[#d6ba61]">
              The Experience
            </p>
            <h2 className="max-w-3xl font-serif text-4xl leading-tight sm:text-5xl lg:text-6xl">
              Where architecture lives quietly inside nature.
            </h2>
          </div>
          <p className="max-w-md text-sm leading-7 text-white/68">
            The first image remains the signature mood: warm arrival, visible
            architecture, deep greens, and a soft residential glow.
          </p>
        </div>

        <div className="grid gap-5 lg:grid-cols-[1.2fr_0.8fr]">
          <article className="group relative min-h-[30rem] overflow-hidden">
            <img
              src={photos[0].src}
              alt={photos[0].title}
              className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.06),rgba(0,0,0,0.72))]" />
            <div className="absolute bottom-0 left-0 p-7 sm:p-10">
              <p className="mb-3 text-xs font-medium uppercase tracking-[0.2em] text-[#d6ba61]">
                {photos[0].label}
              </p>
              <h3 className="max-w-xl font-serif text-4xl leading-tight">
                {photos[0].title}
              </h3>
            </div>
          </article>

          <div className="grid gap-5">
            {photos.slice(1).map((photo) => (
              <article
                key={photo.title}
                className="group relative min-h-[14.4rem] overflow-hidden"
              >
                <img
                  src={photo.src}
                  alt={photo.title}
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.02),rgba(0,0,0,0.7))]" />
                <div className="absolute bottom-0 left-0 p-6">
                  <p className="mb-2 text-[0.68rem] font-medium uppercase tracking-[0.18em] text-[#d6ba61]">
                    {photo.label}
                  </p>
                  <h3 className="font-serif text-2xl leading-tight">
                    {photo.title}
                  </h3>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default PhotoSection;
