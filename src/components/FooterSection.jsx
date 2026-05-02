import { Mail, MapPin, Phone } from "lucide-react";

const navLinks = [
  { name: "About", href: "#experience" },
  { name: "Amenities", href: "#amenities" },
  { name: "Location", href: "#location" },
  { name: "Plans", href: "#plans" },
  { name: "Gallery", href: "#gallery" },
];

const socialLinks = [
  {
    name: "Instagram",
    href: "#",
    icon: ({ size = 17, className = "" }) => (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
        <rect x="4" y="4" width="16" height="16" rx="4.5" stroke="currentColor" strokeWidth="1.8" />
        <circle cx="12" cy="12" r="3.4" stroke="currentColor" strokeWidth="1.8" />
        <circle cx="17.1" cy="6.9" r="1" fill="currentColor" />
      </svg>
    ),
  },
  {
    name: "Facebook",
    href: "#",
    icon: ({ size = 17, className = "" }) => (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
        <path
          d="M14.3 8.2V6.8c0-.7.5-1.1 1.2-1.1H17V3.1c-.8-.1-1.6-.1-2.4-.1-2.4 0-4 1.5-4 4.1v1.1H8v2.9h2.6V21h3.2v-9.9h2.7l.4-2.9h-3.1Z"
          fill="currentColor"
        />
      </svg>
    ),
  },
  {
    name: "X",
    href: "#",
    icon: ({ size = 17, className = "" }) => (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
        <path
          d="M17.53 3h3.28l-7.16 8.18L22.08 21h-6.6l-5.17-6.76L4.39 21H1.1l7.66-8.75L.68 3h6.77l4.67 6.18L17.53 3Zm-1.15 16.27h1.82L6.46 4.64H4.51l11.87 14.63Z"
          fill="currentColor"
        />
      </svg>
    ),
  },
];

export default function FooterSection() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden bg-[#08180f] px-6 pb-10 pt-20 text-[#F8F3E7] md:px-12 lg:px-20">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-[#407266]/35 to-transparent" />
      <div className="pointer-events-none absolute -right-32 top-20 h-96 w-96 rounded-full bg-[#C9A44D]/10 blur-3xl" />
      <div className="pointer-events-none absolute -left-28 bottom-10 h-80 w-80 rounded-full bg-[#407266]/22 blur-3xl" />

      <div className="relative z-10 mx-auto max-w-7xl">
        <div className="mb-16 grid gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:items-end">
          <div>
            <p className="mb-5 flex items-center gap-3 text-[10px] font-bold uppercase tracking-[0.42em] text-[#C9A44D] opacity-100">
              <span className="h-[1px] w-9 bg-[#C9A44D]" /> The Story Continues
            </p>
            <h2 className="max-w-5xl font-serif text-4xl font-light leading-[1.02] text-white md:text-6xl lg:text-7xl">
              Come home to a place that remembers the quiet parts of you.
            </h2>
          </div>
          <p className="max-w-md text-sm font-light leading-8 text-white/68 opacity-100">
            At the end of the road, Aranya is not just an address. It is evening light on a balcony, a familiar path through green, and the feeling that the city has softened for you.
          </p>
        </div>

        <div className="mb-16 overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.055] shadow-[0_28px_90px_rgba(0,0,0,0.22)] backdrop-blur-md">
          <div className="grid gap-px bg-white/10 lg:grid-cols-3">
            <div className="bg-[#0b2117]/92 p-7 md:p-9">
              <div className="mb-7 inline-flex bg-white p-2">
                <img
                  src="/images/RANG HOMES-New1.webp"
                  alt="Rang Homes Logo"
                  className="h-12 w-auto object-contain"
                />
              </div>
              <h3 className="font-serif text-3xl text-white">Aranya by Rang Homes</h3>
              <p className="mt-4 text-sm font-light leading-7 text-white/62 opacity-100">
                Crafted for families who want calm without leaving connection behind.
              </p>
              <div className="mt-7 flex gap-3">
                {socialLinks.map((item) => {
                  const Icon = item.icon;
                  return (
                    <a
                      key={item.name}
                      href={item.href}
                      aria-label={item.name}
                      className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white/62 transition hover:border-[#C9A44D] hover:text-[#C9A44D]"
                    >
                      <Icon size={17} />
                    </a>
                  );
                })}
              </div>
            </div>

            <div className="bg-[#0b2117]/92 p-7 md:p-9">
              <h4 className="mb-6 font-serif text-2xl font-light text-[#C9A44D]">Visit the Site</h4>
              <div className="flex items-start gap-4">
                <span className="mt-1 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/10 bg-white/5 text-[#C9A44D]">
                  <MapPin size={17} />
                </span>
              <p className="text-sm font-light leading-7 text-white/66 opacity-100">
                RH Aerocity, Dharapur,<br />
                Palashbari Road, Assam 781017
              </p>
            </div>
            </div>

            <div className="bg-[#0b2117]/92 p-7 md:p-9">
              <h4 className="mb-6 font-serif text-2xl font-light text-[#C9A44D]">Begin a Conversation</h4>
              <div className="space-y-5">
                <a href="tel:1800120125555" className="flex items-center gap-4 text-sm text-white/66 transition hover:text-[#C9A44D]">
                  <span className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-[#C9A44D]">
                    <Phone size={17} />
                  </span>
                  1800 12012 5555
                </a>
                <a href="mailto:info@indogroup.in" className="flex items-center gap-4 text-sm text-white/66 transition hover:text-[#C9A44D]">
                  <span className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-[#C9A44D]">
                    <Mail size={17} />
                  </span>
                  info@indogroup.in
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="mb-10 flex flex-col gap-8 border-y border-white/8 py-8 md:flex-row md:items-center md:justify-between">
          <nav className="flex flex-wrap gap-x-7 gap-y-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-[11px] font-bold uppercase tracking-[0.24em] text-white/48 transition hover:text-[#C9A44D]"
              >
                {link.name}
              </a>
            ))}
          </nav>
          <p className="max-w-md font-serif text-xl italic leading-snug text-[#C9A44D]/86">
            “A home should not only shelter you. It should soften the day before you step inside.”
          </p>
        </div>

        <div className="flex flex-col items-start justify-between gap-5 md:flex-row md:items-center">
          <p className="text-[10px] uppercase tracking-[0.22em] text-white/34">
            © {currentYear} Aranya by Rang Homes. All Rights Reserved.
          </p>
          <p className="text-[10px] uppercase tracking-[0.22em] text-white/34">
            www.indogroup.in
          </p>
        </div>
      </div>
    </footer>
  );
}
