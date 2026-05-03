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
  opacity = 0.18,
  rotate = 0,
  flip = false,
  className = "",
}) {
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
      <img
        src={`/images/${variant}.png`}
        alt=""
        className="h-auto w-full object-contain"
        loading="lazy"
        style={{
          opacity,
          transform: `${flip ? "scaleX(-1) " : ""}rotate(${rotate}deg)`,
        }}
      />
    </div>
  );
}
