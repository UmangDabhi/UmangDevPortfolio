import { motion, useReducedMotion } from "framer-motion";
import Reveal from "../components/Reveal";
import SectionHeading from "../components/SectionHeading";
import { additionalTechnologies, skillGroups } from "../data/portfolio";

const Skills = () => {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section id="skills" className="py-24 sm:py-32">
      <div className="section-shell">
        <SectionHeading index="04" label="Skills" title="The toolbox" />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {skillGroups.map((group, groupIndex) => (
            <Reveal key={group.category} delay={(groupIndex % 3) * 0.07} className="glass-card glass-card-hover p-7">
              <h3 className="mono-label mb-6">{group.category}</h3>
              <div className="space-y-4">
                {group.skills.map((skill) => (
                  <div key={skill.name}>
                    <div className="flex justify-between items-baseline mb-1.5">
                      <span className="text-sm text-mist-200">{skill.name}</span>
                      <span className="font-mono text-xs text-glow-cyan/70">{skill.level}%</span>
                    </div>
                    <div className="h-1 rounded-full bg-white/[0.06] overflow-hidden">
                      <motion.div
                        initial={prefersReducedMotion ? false : { width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, ease: "easeOut" }}
                        className="h-full rounded-full bg-gradient-to-r from-glow-cyan to-glow-indigo"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </Reveal>
          ))}
        </div>

        {/* Marquee of additional technologies */}
        <Reveal delay={0.15} className="mt-12 relative overflow-hidden py-4 [mask-image:linear-gradient(to_right,transparent,black_15%,black_85%,transparent)]">
          <div className="flex w-max gap-3 animate-marquee hover:[animation-play-state:paused]">
            {[...additionalTechnologies, ...additionalTechnologies].map((tech, index) => (
              <span
                key={`${tech}-${index}`}
                className="shrink-0 px-4 py-2 font-mono text-xs rounded-full bg-white/[0.03] border border-white/[0.08] text-mist-400"
              >
                {tech}
              </span>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default Skills;
