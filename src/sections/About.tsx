import { GraduationCap, Quote } from "lucide-react";
import Reveal from "../components/Reveal";
import SectionHeading from "../components/SectionHeading";
import { about, education } from "../data/portfolio";

const About = () => (
  <section id="about" className="py-24 sm:py-32">
    <div className="section-shell">
      <SectionHeading index="01" label="About" title="Behind the keyboard" />

      <div className="grid lg:grid-cols-5 gap-6">
        {/* Story */}
        <Reveal className="lg:col-span-3 glass-card glass-card-hover p-8">
          <div className="space-y-5 text-mist-400 leading-relaxed">
            {about.paragraphs.map((paragraph) => (
              <p key={paragraph.slice(0, 24)}>{paragraph}</p>
            ))}
          </div>
          <div className="mt-8 flex flex-wrap gap-2.5">
            {about.softSkills.map((skill) => (
              <span
                key={skill}
                className="px-3 py-1.5 text-xs rounded-full bg-white/[0.04] border border-white/[0.08] text-mist-200"
              >
                {skill}
              </span>
            ))}
          </div>
        </Reveal>

        {/* Education */}
        <Reveal delay={0.1} className="lg:col-span-2 glass-card glass-card-hover p-8">
          <div className="flex items-center gap-3 mb-6">
            <GraduationCap className="h-5 w-5 text-glow-cyan" />
            <h3 className="font-display font-bold text-mist-100">Education</h3>
          </div>
          <ol className="relative border-l border-white/[0.08] space-y-7 pl-6">
            {education.map(({ level, institute, score, period }) => (
              <li key={level} className="relative">
                <span className="absolute -left-[1.85rem] top-1.5 h-2.5 w-2.5 rounded-full bg-glow-cyan shadow-[0_0_12px_rgba(103,232,249,0.7)]" />
                <div className="font-medium text-mist-100">{level}</div>
                <div className="text-sm text-mist-400">{institute}</div>
                <div className="font-mono text-xs text-glow-teal mt-1">{score}</div>
                <div className="text-xs text-mist-500 mt-0.5">{period}</div>
              </li>
            ))}
          </ol>
        </Reveal>

        {/* Philosophy */}
        <Reveal delay={0.15} className="lg:col-span-5 glass-card p-8 relative overflow-hidden">
          <div
            className="absolute -top-20 -right-20 w-64 h-64 rounded-full bg-glow-indigo/[0.08] blur-[80px]"
            aria-hidden
          />
          <Quote className="h-6 w-6 text-glow-cyan/60 mb-4" />
          <p className="text-lg sm:text-xl text-mist-200 italic leading-relaxed max-w-3xl">
            “{about.philosophy}”
          </p>
        </Reveal>
      </div>
    </div>
  </section>
);

export default About;
