import { Award, Download } from "lucide-react";
import Reveal from "../components/Reveal";
import SectionHeading from "../components/SectionHeading";
import { certificates } from "../data/portfolio";

const Certificates = () => (
  <section id="certificates" className="py-24 sm:py-32">
    <div className="section-shell">
      <SectionHeading index="05" label="Certificates" title="Proof of work" />

      <div className="grid sm:grid-cols-2 gap-5">
        {certificates.map((cert, index) => (
          <Reveal key={cert.title} delay={(index % 2) * 0.08}>
            <a
              href={cert.path}
              download
              className="group glass-card glass-card-hover flex items-start gap-5 p-6 h-full"
            >
              <span className="shrink-0 flex items-center justify-center w-12 h-12 rounded-xl bg-glow-cyan/10 border border-glow-cyan/20">
                <Award className="h-5 w-5 text-glow-cyan" />
              </span>
              <span className="flex-1 min-w-0">
                <span className="flex items-start justify-between gap-3">
                  <span className="font-display font-bold text-mist-100 group-hover:text-glow-cyan transition-colors">
                    {cert.title}
                  </span>
                  <Download className="h-4 w-4 shrink-0 mt-1 text-mist-500 group-hover:text-glow-cyan transition-colors" />
                </span>
                <span className="block text-sm text-glow-teal mt-1">
                  {cert.issuer} · <span className="font-mono text-xs text-mist-500">{cert.date}</span>
                </span>
                <span className="block text-sm text-mist-400 leading-relaxed mt-2">{cert.description}</span>
              </span>
            </a>
          </Reveal>
        ))}
      </div>
    </div>
  </section>
);

export default Certificates;
