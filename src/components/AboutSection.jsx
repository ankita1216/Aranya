import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Home, Star, MapPin, Building, Trees, Sparkles } from "lucide-react";

const stats = [
  { label: "Open Green Area", value: "70%", icon: <Trees className="text-[#C9A44D]" size={24} /> },
  { label: "Clubhouse Size", value: "1535 SQM", icon: <Building className="text-[#C9A44D]" size={24} /> },
  { label: "Total Units", value: "257", icon: <Building className="text-[#C9A44D]" size={24} /> },
  { label: "Completion", value: "2031", icon: <Sparkles className="text-[#C9A44D]" size={24} /> },
];

export default function AboutSection() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const imageY = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);

  return (
    <section ref={containerRef} id="experience" className="relative section-padding bg-deep-green overflow-hidden">
      {/* Decorative Glow */}
      <div className="absolute top-1/2 left-[-10%] w-[600px] h-[600px] bg-[rgba(201,164,77,0.03)] rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Header Section */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-32">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <p className="uppercase-track mb-6 text-gold">The Vision</p>
            <h2>
              ARANYA By Ranghomes: <br />
              <span className="italic text-gold">A Sanctuary for Generations</span>
            </h2>
            <p className="mb-8 max-w-xl">
              Nestled in the Aerocity Dharapur of Guwahati, Aranya is a meticulously crafted residential masterpiece. 
              Designed for those who seek tranquility away from the city's hustle, yet desire proximity to the world via the nearby International Airport.
            </p>
            <div className="flex flex-wrap gap-4">
               <div className="flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5">
                 <Home size={14} className="text-gold" />
                 <span className="uppercase-track text-[9px] text-white/60">Nature-First Design</span>
               </div>
               <div className="flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5">
                 <Star size={14} className="text-gold" />
                 <span className="uppercase-track text-[9px] text-white/60">Vaastu Compliant</span>
               </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="absolute inset-0 border border-[#C9A44D]/20 translate-x-6 translate-y-6 rounded-2xl md:rounded-[3rem] -z-10" />
            <div className="overflow-hidden rounded-2xl md:rounded-[3rem] aspect-[4/5] md:aspect-auto md:h-[600px] shadow-2xl">
              <motion.img 
                style={{ y: imageY }}
                src="/images/Shot 15_V2.webp" 
                alt="Aranya Project Render" 
                className="w-full h-full object-cover"
              />
            </div>
            {/* Floating Badge */}
            <motion.div 
              initial={{ rotate: -10, scale: 0 }}
              whileInView={{ rotate: 12, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, type: "spring" }}
              className="absolute -bottom-10 -right-4 md:-right-10 bg-[#C9A44D] p-8 rounded-full shadow-2xl flex flex-col items-center justify-center text-[#2D5644] w-32 h-32 md:w-40 md:h-40"
            >
               <span className="text-3xl md:text-5xl font-bold">70%</span>
               <span className="uppercase-track text-[8px] text-center leading-none mt-1">Open Green Area</span>
            </motion.div>
          </motion.div>
        </div>

        {/* The Stats Bento */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-32">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10, backgroundColor: "rgba(201,164,77,0.05)" }}
              className="p-8 rounded-3xl bg-[rgba(255,255,255,0.02)] border border-white/5 transition-all duration-500"
            >
              <div className="mb-6 w-12 h-12 rounded-xl bg-[rgba(201,164,77,0.1)] flex items-center justify-center">
                {stat.icon}
              </div>
              <h4 className="text-3xl md:text-4xl font-light mb-2">{stat.value}</h4>
              <p className="uppercase-track text-white/40">{stat.label}</p>
            </motion.div>
          ))}
        </div>

        {/* Detailed Description / USPs */}
        <div className="grid lg:grid-cols-3 gap-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col"
          >
            <div className="w-10 h-[1px] bg-[#C9A44D] mb-6" />
            <h3>Spacious Living</h3>
            <p>
              Offering premium 2BHK, 3BHK, and 4BHK apartments, alongside exclusive Club Apartments. Each home is designed with spacious living and private terraces for selected units.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="flex flex-col"
          >
            <div className="w-10 h-[1px] bg-[#C9A44D] mb-6" />
            <h3>The Club Experience</h3>
            <p>
              A massive 1535 SQM Clubhouse serves as the heart of the community. Featuring an infinity pool, state-of-the-art gym, and indoor games, it's designed for recreation and connection.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="flex flex-col"
          >
            <div className="w-10 h-[1px] bg-[#C9A44D] mb-6" />
            <h3>Strategic Location</h3>
            <p>
              Located just 2km from the International Airport and within minutes of top schools, universities, and hospitals like Apollo Excelcare, Aranya offers unparalleled convenience.
            </p>
          </motion.div>
        </div>

      </div>
    </section>
  );
}
