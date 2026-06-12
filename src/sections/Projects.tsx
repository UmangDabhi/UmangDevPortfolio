import { ArrowUpRight, Lock } from "lucide-react";
import Reveal from "../components/Reveal";
import SectionHeading from "../components/SectionHeading";
import TiltCard from "../components/TiltCard";
import { Project, projects } from "../data/portfolio";

const ART_STYLES = [
  { gradient: "from-glow-cyan/25 via-glow-teal/10 to-transparent", orb: "bg-glow-cyan/25" },
  { gradient: "from-glow-indigo/25 via-purple-400/10 to-transparent", orb: "bg-glow-indigo/25" },
  { gradient: "from-emerald-400/20 via-glow-teal/10 to-transparent", orb: "bg-emerald-400/25" },
  { gradient: "from-rose-400/20 via-orange-300/10 to-transparent", orb: "bg-rose-400/25" },
  { gradient: "from-amber-300/20 via-glow-cyan/10 to-transparent", orb: "bg-amber-300/25" },
  { gradient: "from-sky-400/20 via-glow-indigo/10 to-transparent", orb: "bg-sky-400/25" },
];

const monogram = (title: string) =>
  title
    .replace(/[^a-zA-Z ]/g, "")
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((word) => word[0])
    .join("");

const ProjectArt = ({ title, artIndex, featured }: { title: string; artIndex: number; featured: boolean }) => {
  const art = ART_STYLES[artIndex % ART_STYLES.length];
  return (
    <div
      className={`relative -mx-7 -mt-7 mb-6 overflow-hidden ${featured ? "sm:-mx-9 sm:-mt-9 h-40 sm:h-52" : "h-28"}`}
      aria-hidden
    >
      <div className={`absolute inset-0 bg-gradient-to-br ${art.gradient}`} />
      <div className={`absolute -top-10 -right-6 w-40 h-40 rounded-full blur-[50px] ${art.orb} group-hover:scale-125 transition-transform duration-700`} />
      <div className="absolute inset-0 [background-image:linear-gradient(rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.04)_1px,transparent_1px)] [background-size:28px_28px]" />
      <span className="absolute -bottom-5 right-3 font-display font-extrabold text-7xl sm:text-8xl text-white/[0.06] select-none group-hover:text-white/[0.1] transition-colors duration-500">
        {monogram(title)}
      </span>
      <div className="absolute bottom-0 inset-x-0 h-12 bg-gradient-to-t from-ink-950/60 to-transparent" />
    </div>
  );
};

const ProjectCard = ({ project, featured, artIndex }: { project: Project; featured: boolean; artIndex: number }) => {
  const Wrapper = project.demo ? "a" : "div";

  return (
    <Wrapper
      {...(project.demo ? { href: project.demo, target: "_blank", rel: "noreferrer" } : {})}
      className={`group glass-card glass-card-hover relative flex flex-col p-7 overflow-hidden ${
        featured ? "sm:col-span-2 sm:row-span-2 sm:p-9" : ""
      } ${project.demo ? "cursor-pointer" : ""}`}
    >
      <ProjectArt title={project.title} artIndex={artIndex} featured={featured} />

      <div className="flex items-start justify-between gap-3 mb-4">
        {project.isConfidential ? (
          <span className="flex items-center gap-1.5 px-2.5 py-1 text-[0.65rem] font-mono uppercase tracking-wider rounded-full border border-amber-400/30 text-amber-300 bg-amber-400/10">
            <Lock className="h-3 w-3" />
            NDA
          </span>
        ) : (
          <span className="px-2.5 py-1 text-[0.65rem] font-mono uppercase tracking-wider rounded-full border border-emerald-400/30 text-emerald-300 bg-emerald-400/10">
            Live
          </span>
        )}
        {project.demo && (
          <ArrowUpRight className="h-5 w-5 text-mist-500 group-hover:text-glow-cyan group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
        )}
      </div>

      <h3
        className={`font-display font-bold text-mist-100 mb-3 group-hover:text-glow-cyan transition-colors ${
          featured ? "text-2xl sm:text-3xl" : "text-lg"
        }`}
      >
        {project.title}
      </h3>

      <p className={`text-mist-400 leading-relaxed mb-6 ${featured ? "text-base max-w-md" : "text-sm"}`}>
        {project.description}
      </p>

      <div className="mt-auto flex flex-wrap gap-2">
        {project.stack.map((tech) => (
          <span
            key={tech}
            className="px-2.5 py-1 font-mono text-[0.7rem] rounded-md bg-white/[0.04] border border-white/[0.08] text-mist-200"
          >
            {tech}
          </span>
        ))}
      </div>
    </Wrapper>
  );
};

const Projects = () => (
  <section id="projects" className="py-24 sm:py-32">
    <div className="section-shell">
      <SectionHeading index="03" label="Projects" title="Selected work" />

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 auto-rows-fr">
        {projects.map((project, index) => (
          <Reveal key={project.title} delay={(index % 3) * 0.07} className={project.featured ? "sm:col-span-2 sm:row-span-2 flex" : "flex"}>
            <TiltCard className="flex">
              <ProjectCard project={project} featured={Boolean(project.featured)} artIndex={index} />
            </TiltCard>
          </Reveal>
        ))}
      </div>

      <Reveal delay={0.2} className="mt-10 text-center">
        <p className="text-sm text-mist-500">
          Most client work is under NDA — happy to walk through architecture and decisions in a call.
        </p>
      </Reveal>
    </div>
  </section>
);

export default Projects;
