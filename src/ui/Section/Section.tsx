import { SectionProps } from "./Section.type";

export default function Section({ children, className }: SectionProps) {
  return (
    <section className={`w-full h-full bg-[#12002b] flex flex-1 ${className}`}>
      {children}
    </section>
  );
}
