const positions = {
  "top-left": "-left-24 top-8",
  "top-right": "-right-24 top-8",
  "center-left": "-left-32 top-1/2 -translate-y-1/2",
  "center-right": "-right-32 top-1/2 -translate-y-1/2",
  "bottom-left": "-bottom-20 -left-20",
  "bottom-right": "-bottom-20 -right-20",
};

export default function StyleAccents({
  variant = "style_2",
  position = "top-right",
  size = "w-72",
  opacity = 1,
  rotate = 0,
  flip = false,
  color = null,
  className = "",
}) {
  const imageUrl = `/images/${variant}.png`;

  return (
    <div
      className={[
        "pointer-events-none absolute z-0 select-none",
        positions[position],
        size,
        className,
      ].join(" ")}
      aria-hidden="true"
    >
      {color ? (
        <div
          className="h-full w-full"
          style={{
            backgroundColor: color,
            maskImage: `url(${imageUrl})`,
            maskSize: "contain",
            maskRepeat: "no-repeat",
            maskPosition: "center",
            WebkitMaskImage: `url(${imageUrl})`,
            WebkitMaskSize: "contain",
            WebkitMaskRepeat: "no-repeat",
            WebkitMaskPosition: "center",
            opacity: opacity * 0.7,
            transform: `${flip ? "scaleX(-1) " : ""}rotate(${rotate}deg)`,
          }}
        />
      ) : (
        <img
          src={imageUrl}
          alt=""
          className="h-auto w-full object-contain mix-blend-normal"
          loading="lazy"
          style={{
            opacity: opacity * 0.7,
            filter: "saturate(1.1) contrast(1.05) brightness(1.1) drop-shadow(none)",
            transform: `${flip ? "scaleX(-1) " : ""}rotate(${rotate}deg)`,
          }}
        />
      )}
    </div>
  );
}
