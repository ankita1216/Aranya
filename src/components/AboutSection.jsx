// AboutSection.jsx — Bulletproof Marquee Ticker (Inline Layout)
import { Trees, Building, Home, Sparkles } from "lucide-react";

const stats = [
  { label: "Open Green Area", value: "70%", Icon: Trees },
  { label: "Clubhouse", value: "1535", unit: "sqm", Icon: Building },
  { label: "Total Units", value: "257", Icon: Home },
  { label: "Completion", value: "2031", Icon: Sparkles },
];

const ITEMS = [...stats, ...stats, ...stats];

export default function AboutSection() {
  return (
    <section
      id="experience"
      style={{ background: "#1F4D3F", overflow: "hidden", position: "relative", padding: "20px 0" }}
    >
      <style>{`
        @keyframes marquee-scroll {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-33.3334%); }
        }
        .marquee-outer {
          overflow: hidden;
          width: 100%;
          position: relative;
        }
        .marquee-track {
          display: inline-flex;
          flex-wrap: nowrap;
          align-items: center;
          white-space: nowrap;
          width: max-content;
          animation: marquee-scroll 32s linear infinite;
          will-change: transform;
        }
        .marquee-track:hover {
          animation-play-state: paused;
        }

        /* 
          REMOVED left padding (0) so the first item starts completely flush left.
          Distributed the gap (32px) and right padding (32px) to keep the gold divider perfectly centered. 
        */
        .marquee-item {
          display: inline-flex;
          flex-shrink: 0;
          align-items: center;
          gap: 32px; 
          padding: 0 32px 0 0; 
          min-width: max-content;
          cursor: default;
        }
        
        .marquee-stat {
          display: inline-flex;
          flex-shrink: 0;
          align-items: center;
          gap: 14px;
          transition: transform 0.4s ease;
          white-space: nowrap;
        }
        .marquee-item:hover .marquee-stat {
          transform: translateY(-2px);
        }

        .marquee-icon {
          flex-shrink: 0;
          width: 36px;
          height: 36px;
          border-radius: 50%;
          border: 1px solid rgba(255,255,255,0.2);
          background: rgba(255,255,255,0.1);
          display: inline-flex;
          align-items: center;
          justify-content: center;
        }

        .marquee-inline {
          display: inline-flex;
          align-items: baseline;
          flex-shrink: 0;
          gap: 12px;
          white-space: nowrap;
        }
        .marquee-value {
          font-family: 'Playfair Display', Georgia, serif;
          font-size: 1.5rem;
          line-height: 1;
          color: #ffffff;
          letter-spacing: -0.01em;
          white-space: nowrap;
          flex-shrink: 0;
        }
        .marquee-unit {
          font-family: sans-serif;
          font-size: 9px;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.2em;
          color: rgba(255,255,255,0.55);
          margin-left: 4px;
          flex-shrink: 0;
        }
        .marquee-label {
          font-family: sans-serif;
          font-size: 9px;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.26em;
          color: rgba(255,255,255,0.5);
          white-space: nowrap;
          flex-shrink: 0;
        }

        .marquee-divider {
          flex-shrink: 0;
          width: 1px;
          height: 32px;
          background: linear-gradient(
            to bottom,
            transparent,
            rgba(201,164,77,0.6) 50%,
            transparent
          );
        }

        .marquee-fade-left,
        .marquee-fade-right {
          position: absolute;
          top: 0; bottom: 0;
          width: 90px;
          z-index: 10;
          pointer-events: none;
        }
        .marquee-fade-left  { left: 0;  background: linear-gradient(to right, #1F4D3F, transparent); }
        .marquee-fade-right { right: 0; background: linear-gradient(to left,  #1F4D3F, transparent); }
      `}</style>

      <h2 className="sr-only">Aranya key statistics</h2>

      <div className="marquee-fade-left" aria-hidden="true" />
      <div className="marquee-fade-right" aria-hidden="true" />

      <div className="marquee-outer">
        <div className="marquee-track">
          {ITEMS.map(({ label, value, unit, Icon }, i) => (
            <div key={i} className="marquee-item">
              <div className="marquee-stat">
                <div className="marquee-icon">
                  <Icon size={15} color="rgba(255,255,255,0.8)" />
                </div>

                <div className="marquee-inline">
                  <span className="marquee-value">
                    {value}
                    {unit && <span className="marquee-unit">{unit}</span>}
                  </span>
                  <span className="marquee-label">{label}</span>
                </div>
              </div>
              <div className="marquee-divider" aria-hidden="true" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}