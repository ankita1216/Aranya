export default function SectionWrapper({ children, id }) {
  return (
    <div 
      className="relative max-w-full overflow-x-hidden pb-12 md:pb-24"
    >
      <div id={id} className="relative max-w-full">
        {children}
      </div>
    </div>
  );
}
