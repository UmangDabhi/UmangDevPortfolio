import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import PageLayout from "../components/PageLayout";

const Projects = () => {
  const projects = [
    {
      title: "ScienceExperts (E-Learning Website)",
      stack: ["PERN", "NestJS", "React", "PostgreSQL", "S3", "EC2"],
      description:
        "A full-featured E-learning platform with secure payment integration, quiz modules, role-based access, and scalable AWS deployment.",
      isConfidential: false,
      demo: "https://shreeedu.co.in/",
    },
    {
      title: "[Confidential] Bank Document Verification System",
      stack: ["PERN", "PostgreSQL", "NestJS", "ReactJS", "Docker (Basic)"],
      description:
        "A secure system for verifying customer loan requirement and letting banks decide positive negative based on their own dynamic requirement, using a scalable PERN stack with containerized deployment.",
      isConfidential: true,
      github: "#",
      demo: "#",
    },
    {
      title: "[Confidential] AI Property Chat Bot",
      stack: ["Gemini API", "NestJS", "Custom Scraper", "Double-Tick", "Docker (Basic)"],
      description: "An AI-powered real estate assistant with web scraping capabilities, built using Gemini API and containerized services.",
      isConfidential: true,
      github: "#",
      demo: "#",
    },
    {
      title: "[Confidential] Streaming Web App",
      stack: ["React", "Redux Toolkit", "Agora-RTC", "Socket.io", "TailwindCSS"],
      description: "Real-time video streaming platform with chat functionality using Agora RTC and live socket communication.",
      isConfidential: true,
      github: "#",
      demo: "#",
    },
    {
      title: "[Confidential] Cricket Fantasy App",
      stack: ["React", "Redux Toolkit", "Socket.io"],
      description: "Live cricket fantasy web app with real-time scoring and player stats using sockets and Redux state management.",
      isConfidential: true,
      github: "#",
      demo: "#",
    },
    {
      title: "[Confidential] Travel Admin Website",
      stack: ["PERN", "PostgreSQL", "NestJS", "ReactJS"],
      description: "Admin panel for travel management, including user roles, trip tracking, and custom dashboard analytics.",
      isConfidential: true,
      github: "#",
      demo: "#",
    },
  ];

  return (
    <PageLayout title="Projects">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ y: -5, scale: 1.02 }}
            className={`bg-primary-800/50 backdrop-blur-sm border rounded-lg overflow-hidden transition-all duration-300 group ${
              project.isConfidential ? "border-yellow-500/30 hover:border-yellow-400/50" : "border-primary-600/20 hover:border-primary-400/30"
            }`}
          >
            {/* Confidential Badge */}
            {project.isConfidential && (
              <div className="bg-yellow-500/20 border-b border-yellow-500/30 px-4 py-2">
                <span className="text-yellow-300 text-xs font-semibold flex items-center">🔒 CONFIDENTIAL PROJECT</span>
              </div>
            )}

            {/* Project Header */}
            <div className="p-6">
              <div className="bg-primary-900/50 rounded-lg p-4 mb-4 font-mono text-sm">
                <div className="text-primary-300">
                  <span className="text-primary-400">{"{"}</span>
                </div>
                <div className="ml-4 space-y-1">
                  <div>
                    <span className="text-primary-200">"title":</span> <span className="text-green-400">"{project.title}"</span>,
                  </div>
                  <div>
                    <span className="text-primary-200">"stack":</span> <span className="text-yellow-400">[</span>
                    <span className="text-green-400">
                      {project.stack.map((tech, i) => (
                        <span key={tech}>
                          "{tech}"{i < project.stack.length - 1 ? ", " : ""}
                        </span>
                      ))}
                    </span>
                    <span className="text-yellow-400">]</span>
                  </div>
                </div>
                <div className="text-primary-300">
                  <span className="text-primary-400">{"}"}</span>
                </div>
              </div>

              {/* Tech Stack Badges */}
              <div className="flex flex-wrap gap-2 mb-4">
                {project.stack.map((tech) => (
                  <motion.span
                    key={tech}
                    whileHover={{ scale: 1.1 }}
                    className="px-2 py-1 bg-primary-400/20 text-primary-300 text-xs rounded border border-primary-400/30"
                  >
                    {tech}
                  </motion.span>
                ))}
              </div>

              {/* Description */}
              <p className="text-primary-200 text-sm mb-6 leading-relaxed">{project.description}</p>

              {/* Action Buttons */}
              <div className={`flex space-x-3 ${project.isConfidential ? "opacity-50" : ""}`}>
                {project.github && (
                  <motion.a
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    href={project.github}
                    className={`flex-1 flex items-center justify-center space-x-2 py-2 px-4 bg-primary-600/20 hover:bg-primary-600/30 border border-primary-600/30 rounded-lg transition-all duration-200 text-primary-300 hover:text-primary-200 ${
                      project.isConfidential ? "pointer-events-none" : ""
                    }`}
                  >
                    <Github className="h-4 w-4" />
                    <span className="text-sm">{project.isConfidential ? "Private" : "Code"}</span>
                  </motion.a>
                )}
                <motion.a
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  href={project.demo}
                  className={`flex-1 flex items-center justify-center space-x-2 py-2 px-4 bg-primary-400/20 hover:bg-primary-400/30 border border-primary-400/30 rounded-lg transition-all duration-200 text-primary-300 hover:text-primary-200 ${
                    project.isConfidential ? "pointer-events-none" : ""
                  }`}
                >
                  <ExternalLink className="h-4 w-4" />
                  <span className="text-sm">{project.isConfidential ? "NDA" : "Demo"}</span>
                </motion.a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </PageLayout>
  );
};

export default Projects;
