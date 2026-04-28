import { ArrowUpRight, Mail, MapPin, Phone } from "lucide-react";

const footerLinks = ["Experience", "Residences", "Amenities", "Location"];
const enquiryLinks = ["Schedule a visit", "Download brochure", "Talk to advisor"];

function FooterSection() {
  return (
    <footer id="enquiry" className="relative overflow-hidden bg-[#030604] text-[#f7f0de]">
      <div className="absolute inset-x-0 top-0 h-px bg-[linear-gradient(90deg,transparent,#c9ad5d,transparent)]" />
      <div className="mx-auto grid max-w-[82rem] gap-12 px-6 py-16 sm:px-10 lg:grid-cols-[1.1fr_0.9fr] lg:px-[4.4rem] lg:py-20">
        <div>
          <img
            src="/logo/trust.png"
            alt="Aranya by Rang Homes"
            className="mb-8 w-44"
          />
          <p className="max-w-2xl font-serif text-4xl leading-tight text-[#e9ddb9] sm:text-5xl">
            A home that remembers the forest, the light, and the quiet between
            generations.
          </p>
          <p className="mt-6 max-w-xl text-sm leading-7 text-white/62">
            Aranya brings open green, crafted arrival experiences, and everyday
            leisure into one composed residential address.
          </p>
        </div>

        <div className="grid gap-8 sm:grid-cols-2">
          <div>
            <p className="mb-5 text-xs font-medium uppercase tracking-[0.24em] text-[#d6ba61]">
              Explore
            </p>
            <nav className="grid gap-3">
              {footerLinks.map((link) => (
                <a
                  key={link}
                  href={`#${link.toLowerCase()}`}
                  className="group inline-flex items-center justify-between border-b border-white/12 pb-3 text-sm uppercase tracking-[0.14em] text-white/72 transition-colors hover:text-[#d6ba61]"
                >
                  {link}
                  <ArrowUpRight className="h-4 w-4 opacity-0 transition-opacity group-hover:opacity-100" />
                </a>
              ))}
            </nav>
          </div>

          <div>
            <p className="mb-5 text-xs font-medium uppercase tracking-[0.24em] text-[#d6ba61]">
              Enquiry
            </p>
            <div className="grid gap-3">
              {enquiryLinks.map((link) => (
                <a
                  key={link}
                  href="#"
                  className="border-b border-white/12 pb-3 text-sm uppercase tracking-[0.14em] text-white/72 transition-colors hover:text-[#d6ba61]"
                >
                  {link}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="lg:col-span-2">
          <div className="grid gap-4 border-y border-[#c9ad5d]/22 py-7 md:grid-cols-3">
            <div className="flex items-center gap-4">
              <MapPin className="h-5 w-5 text-[#d6ba61]" strokeWidth={1.4} />
              <span className="text-sm text-white/68">Near the airport corridor</span>
            </div>
            <div className="flex items-center gap-4">
              <Phone className="h-5 w-5 text-[#d6ba61]" strokeWidth={1.4} />
              <span className="text-sm text-white/68">Private walkthroughs available</span>
            </div>
            <div className="flex items-center gap-4">
              <Mail className="h-5 w-5 text-[#d6ba61]" strokeWidth={1.4} />
              <span className="text-sm text-white/68">concierge@aranya.example</span>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-3 text-xs uppercase tracking-[0.16em] text-white/42 sm:flex-row sm:items-center sm:justify-between lg:col-span-2">
          <p>Aranya by Rang Homes</p>
          <p>Designed for open green living</p>
        </div>
      </div>
    </footer>
  );
}

export default FooterSection;
