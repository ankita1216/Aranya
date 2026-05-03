export default function SectionWrapper({ children, id }) {
  return (
    <div 
      className="relative max-w-full overflow-x-hidden"
    >
      <div id={id} className="relative max-w-full">
        {children}
      </div>
    </div>
  );
}
