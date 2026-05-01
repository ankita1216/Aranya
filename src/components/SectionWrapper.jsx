export default function SectionWrapper({ children, id }) {
  return (
    <div 
      className="relative py-12 md:py-24"
    >
      <div id={id} className="relative">
        {children}
      </div>
    </div>
  );
}
