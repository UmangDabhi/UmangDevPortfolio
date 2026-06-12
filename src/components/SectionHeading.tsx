import Reveal from "./Reveal";

interface SectionHeadingProps {
  index: string;
  label: string;
  title: string;
}

const SectionHeading = ({ index, label, title }: SectionHeadingProps) => (
  <Reveal className="mb-12 sm:mb-16">
    <div className="flex items-center gap-4 mb-4">
      <span className="font-mono text-glow-cyan/60 text-sm">{index}</span>
      <span className="mono-label">{label}</span>
      <span className="h-px flex-1 bg-gradient-to-r from-glow-cyan/30 to-transparent" />
    </div>
    <h2 className="font-display text-3xl sm:text-5xl font-bold text-mist-100">{title}</h2>
  </Reveal>
);

export default SectionHeading;
