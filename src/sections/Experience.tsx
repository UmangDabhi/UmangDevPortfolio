import { Briefcase, MapPin } from "lucide-react";
import Reveal from "../components/Reveal";
import SectionHeading from "../components/SectionHeading";
import { experiences } from "../data/portfolio";

const Experience = () => (
  <section id="experience" className="py-24 sm:py-32">
    <div className="section-shell">
      <SectionHeading index="02" label="Experience" title="Where I've shipped" />

      <div className="relative">
        <span
          className="absolute left-4 sm:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-glow-cyan/40 via-white/[0.08] to-transparent"
          aria-hidden
        />
        <div className="space-y-14">
          {experiences.map((exp, index) => {
            const alignRight = index % 2 === 1;
            return (
              <Reveal
                key={exp.company}
                delay={index * 0.08}
                className={`relative pl-12 sm:pl-0 sm:w-[calc(50%-2.5rem)] ${
                  alignRight ? "sm:ml-auto" : ""
                }`}
              >
                <span
                  className={`absolute top-7 left-4 -translate-x-1/2 h-3 w-3 rounded-full bg-glow-cyan shadow-[0_0_16px_rgba(103,232,249,0.8)] ${
                    alignRight ? "sm:-left-10" : "sm:left-auto sm:-right-10 sm:translate-x-1/2"
                  }`}
                  aria-hidden
                />
                <div className="glass-card glass-card-hover p-7">
                  <div className="flex items-start justify-between gap-4 mb-1">
                    <h3 className="font-display font-bold text-lg text-mist-100">{exp.role}</h3>
                    <span
                      className={`shrink-0 px-2.5 py-1 text-[0.65rem] font-mono uppercase tracking-wider rounded-full border ${
                        exp.type === "Full-time"
                          ? "border-emerald-400/40 text-emerald-300 bg-emerald-400/10"
                          : "border-glow-indigo/40 text-glow-indigo bg-glow-indigo/10"
                      }`}
                    >
                      {exp.type}
                    </span>
                  </div>
                  <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-sm text-mist-400 mb-5">
                    <span className="flex items-center gap-1.5 text-glow-cyan font-medium">
                      <Briefcase className="h-3.5 w-3.5" />
                      {exp.company}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <MapPin className="h-3.5 w-3.5" />
                      {exp.location}
                    </span>
                    <span className="font-mono text-xs text-mist-500">{exp.duration}</span>
                  </div>
                  <ul className="space-y-2.5">
                    {exp.achievements.map((achievement) => (
                      <li key={achievement} className="flex gap-3 text-sm text-mist-400 leading-relaxed">
                        <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-glow-teal" aria-hidden />
                        {achievement}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </div>
  </section>
);

export default Experience;
