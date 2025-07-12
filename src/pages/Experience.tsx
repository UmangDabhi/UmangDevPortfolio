import { motion } from "framer-motion";
import { Building, Calendar, MapPin, User } from "lucide-react";
import PageLayout from "../components/PageLayout";

const Experience = () => {
  const experiences = [
    {
      role: "MERN Stack Developer",
      company: "InitFusion Pvt. Ltd.",
      location: "Ahmedabad, India",
      duration: "June 2024 - Present",
      type: "Full-time",
      color: "from-green-500/20 to-emerald-500/20",
      borderColor: "border-green-500/30",
      achievements: [
        "Developed and maintained scalable web applications using the MERN stack.",
        "Built dynamic solutions and reusable components to improve development efficiency.",
        "Collaborated with cross-functional teams to deliver high-quality, production-ready features.",
        "Led projects and teams, designed robust database schemas, and mentored junior developers.",
      ],
    },
    {
      role: "Backend Intern",
      company: "FlashPackers Inc.",
      location: "Remote",
      duration: "Jan 2024 - June 2024",
      type: "Internship",
      color: "from-blue-500/20 to-cyan-500/20",
      borderColor: "border-blue-500/30",
      achievements: [
        "Developed scalable RESTful APIs using Node.js and Express.js.",
        "Integrated third-party services, including Thermal Print",
        "Gained foundational knowledge of React and component-based architecture.",
        "Implemented secure user authentication and role-based authorization.",
      ],
    },
    {
      role: "Game Developer Intern",
      company: "Interactive Warriors Studio",
      location: "Remote",
      duration: "Jun 2023 - Jan 2024",
      type: "Internship",
      color: "from-purple-500/20 to-pink-500/20",
      borderColor: "border-purple-500/30",
      achievements: [
        "Designed and implemented core gameplay mechanics using Unity and C#.",
        "Developed a mobile game featuring complex game logic and dynamic challenges.",
        "Built a dynamic level generation system to enhance replayability.",
        "Created interactive UI/UX components to improve player engagement and experience.",
      ],
    },
  ];

  return (
    <PageLayout title="Experience">
      <div className="space-y-8">
        {experiences.map((exp, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.15 }}
            whileHover={{ scale: 1.02, y: -5 }}
            className="relative"
          >
            <div
              className={`bg-gradient-to-r ${exp.color} backdrop-blur-sm border ${exp.borderColor} rounded-lg overflow-hidden hover:border-opacity-60 transition-all duration-300`}
            >
              {/* Header Section */}
              <div className="bg-primary-800/50 p-6 border-b border-primary-600/20">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  {/* Left: Role & Company */}
                  <div className="space-y-3">
                    <motion.div
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.2 + 0.1 }}
                      className="flex items-center space-x-3"
                    >
                      <User className="h-5 w-5 text-primary-400" />
                      <h3 className="text-xl font-bold text-primary-200">{exp.role}</h3>
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.2 + 0.2 }}
                      className="flex items-center space-x-3"
                    >
                      <Building className="h-5 w-5 text-primary-400" />
                      <h4 className="text-lg text-primary-400 font-semibold">{exp.company}</h4>
                    </motion.div>
                  </div>

                  {/* Right: Details */}
                  <div className="space-y-3">
                    <motion.div
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.2 + 0.3 }}
                      className="flex items-center space-x-2 text-sm text-primary-300"
                    >
                      <Calendar className="h-4 w-4" />
                      <span>{exp.duration}</span>
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.2 + 0.4 }}
                      className="flex items-center space-x-2 text-sm text-primary-300"
                    >
                      <MapPin className="h-4 w-4" />
                      <span>{exp.location}</span>
                    </motion.div>

                    <motion.span
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: index * 0.2 + 0.5 }}
                      className={`inline-block px-3 py-1 text-xs font-medium rounded-full border ${exp.borderColor} bg-primary-900/30`}
                    >
                      {exp.type}
                    </motion.span>
                  </div>
                </div>
              </div>

              {/* Achievements Section */}
              <div className="p-6">
                <motion.h5
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: index * 0.2 + 0.6 }}
                  className="text-sm font-semibold text-primary-400 mb-4 uppercase tracking-wider"
                >
                  Key Achievements
                </motion.h5>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {exp.achievements.map((achievement, achievementIndex) => (
                    <motion.div
                      key={achievementIndex}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{
                        duration: 0.4,
                        delay: index * 0.2 + 0.7 + achievementIndex * 0.1,
                      }}
                      whileHover={{ x: 5 }}
                      className="flex items-start space-x-3 p-3 bg-primary-900/30 rounded-lg hover:bg-primary-900/50 transition-all duration-200"
                    >
                      <div className="w-2 h-2 bg-primary-400 rounded-full mt-2 flex-shrink-0"></div>
                      <p className="text-primary-200 text-sm leading-relaxed">{achievement}</p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        ))}

        {/* Career Summary */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-12 bg-primary-800/50 backdrop-blur-sm border border-primary-600/20 rounded-lg p-8"
        >
          <div className="text-center">
            <h3 className="text-2xl font-bold text-primary-400 mb-4">Career Journey</h3>
            <p className="text-primary-200 leading-relaxed max-w-3xl mx-auto">
              My journey in software development has been marked by continuous learning and growth. From game development to full-stack web
              applications, I've gained diverse experience across multiple domains, always focusing on delivering high-quality solutions and staying
              current with emerging technologies.
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
            {[
              { label: "Years of Experience", value: "2+", icon: "📅" },
              { label: "Projects Completed", value: "15+", icon: "🚀" },
              { label: "Technologies Mastered", value: "10+", icon: "⚡" },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1 + index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="text-center p-4 bg-primary-900/30 rounded-lg border border-primary-600/20"
              >
                <div className="text-2xl mb-2">{stat.icon}</div>
                <div className="text-2xl font-bold text-primary-400 mb-1">{stat.value}</div>
                <div className="text-sm text-primary-300">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </PageLayout>
  );
};

export default Experience;
