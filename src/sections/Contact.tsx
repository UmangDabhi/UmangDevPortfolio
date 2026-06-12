import { Github, Linkedin, Mail, MapPin, Phone, Send } from "lucide-react";
import { FormEvent, useState } from "react";
import Reveal from "../components/Reveal";
import SectionHeading from "../components/SectionHeading";
import { profile } from "../data/portfolio";

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    const subject = encodeURIComponent(`Portfolio message from ${form.name}`);
    const body = encodeURIComponent(`Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`);
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
  };

  const inputClasses =
    "w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-white/[0.08] text-mist-100 placeholder:text-mist-500 focus:outline-none focus:border-glow-cyan/50 focus:ring-1 focus:ring-glow-cyan/30 transition-colors";

  return (
    <section id="contact" className="py-24 sm:py-32 relative overflow-hidden">
      <div
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[50rem] h-[20rem] rounded-full bg-glow-cyan/[0.05] blur-[120px]"
        aria-hidden
      />
      <div className="section-shell relative">
        <SectionHeading index="06" label="Contact" title="Let's build something" />

        <div className="grid lg:grid-cols-2 gap-6">
          {/* Info panel */}
          <Reveal className="glass-card p-8 flex flex-col">
            <p className="text-mist-400 leading-relaxed mb-8">
              I'm always interested in new opportunities and exciting projects. Whether you have a
              question or just want to say hi, my inbox is open.
            </p>

            <div className="space-y-3 mb-8">
              <a
                href={`mailto:${profile.email}`}
                className="flex items-center gap-4 p-3 -mx-3 rounded-xl hover:bg-white/[0.04] transition-colors group"
              >
                <span className="p-2.5 rounded-lg bg-glow-cyan/10 border border-glow-cyan/20">
                  <Mail className="h-4 w-4 text-glow-cyan" />
                </span>
                <span className="text-mist-200 group-hover:text-glow-cyan transition-colors">
                  {profile.email}
                </span>
              </a>
              <a
                href={profile.phoneHref}
                className="flex items-center gap-4 p-3 -mx-3 rounded-xl hover:bg-white/[0.04] transition-colors group"
              >
                <span className="p-2.5 rounded-lg bg-glow-cyan/10 border border-glow-cyan/20">
                  <Phone className="h-4 w-4 text-glow-cyan" />
                </span>
                <span className="text-mist-200 group-hover:text-glow-cyan transition-colors">
                  {profile.phone}
                </span>
              </a>
              <div className="flex items-center gap-4 p-3 -mx-3">
                <span className="p-2.5 rounded-lg bg-glow-cyan/10 border border-glow-cyan/20">
                  <MapPin className="h-4 w-4 text-glow-cyan" />
                </span>
                <span className="text-mist-200">{profile.location}</span>
              </div>
            </div>

            <div className="mt-auto flex items-center justify-between">
              <div className="flex gap-2">
                <a
                  href={profile.github}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="GitHub"
                  className="p-3 rounded-xl border border-white/[0.08] text-mist-400 hover:text-glow-cyan hover:border-glow-cyan/40 transition-colors"
                >
                  <Github className="h-5 w-5" />
                </a>
                <a
                  href={profile.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="LinkedIn"
                  className="p-3 rounded-xl border border-white/[0.08] text-mist-400 hover:text-glow-cyan hover:border-glow-cyan/40 transition-colors"
                >
                  <Linkedin className="h-5 w-5" />
                </a>
              </div>
              <span className="flex items-center gap-2 text-sm text-emerald-300">
                <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse-soft" />
                Open to work
              </span>
            </div>
          </Reveal>

          {/* Form */}
          <Reveal delay={0.1} className="glass-card p-8">
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="name" className="block text-sm text-mist-400 mb-2">
                    Name
                  </label>
                  <input
                    id="name"
                    type="text"
                    required
                    value={form.name}
                    onChange={(event) => setForm({ ...form, name: event.target.value })}
                    placeholder="Your name"
                    className={inputClasses}
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm text-mist-400 mb-2">
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    required
                    value={form.email}
                    onChange={(event) => setForm({ ...form, email: event.target.value })}
                    placeholder="you@email.com"
                    className={inputClasses}
                  />
                </div>
              </div>
              <div>
                <label htmlFor="message" className="block text-sm text-mist-400 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  required
                  rows={6}
                  value={form.message}
                  onChange={(event) => setForm({ ...form, message: event.target.value })}
                  placeholder="Tell me about your project…"
                  className={`${inputClasses} resize-none`}
                />
              </div>
              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-medium text-ink-950 bg-gradient-to-r from-glow-cyan to-glow-teal hover:shadow-[0_0_36px_-6px_rgba(103,232,249,0.55)] transition-shadow"
              >
                <Send className="h-4 w-4" />
                Send Message
              </button>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
};

export default Contact;
