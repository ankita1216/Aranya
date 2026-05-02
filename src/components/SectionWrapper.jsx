export default function SectionWrapper({ children, id }) {
  return (
    <div 
      className="relative pb-12 md:pb-24"
    >
      <div id={id} className="relative">
        {children}
      </div>
    </div>
  );
}
