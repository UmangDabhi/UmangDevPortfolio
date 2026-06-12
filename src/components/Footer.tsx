import { ArrowUp } from "lucide-react";
import { profile } from "../data/portfolio";

const Footer = () => (
  <footer className="border-t border-white/[0.06]">
    <div className="section-shell py-8 flex flex-col sm:flex-row items-center justify-between gap-4">
      <p className="text-sm text-mist-500">
        © {new Date().getFullYear()} {profile.name} · Built with React & Tailwind
      </p>
      <a
        href="#top"
        aria-label="Back to top"
        className="flex items-center gap-2 text-sm text-mist-400 hover:text-glow-cyan transition-colors"
      >
        Back to top
        <ArrowUp className="h-4 w-4" />
      </a>
    </div>
  </footer>
);

export default Footer;
