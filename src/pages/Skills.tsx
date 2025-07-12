import { motion } from "framer-motion";
import PageLayout from "../components/PageLayout";

const Skills = () => {
  const skillCategories = [
    {
      category: "Frontend",
      skills: [
        { name: "React", level: 90 },
        { name: "Redux ToolKit", level: 90 },
        { name: "TypeScript", level: 85 },
        { name: "JavaScript", level: 95 },
        { name: "Tailwind CSS", level: 90 },
        { name: "HTML/CSS", level: 95 },
      ],
    },
    {
      category: "Backend",
      skills: [
        { name: "NestJS", level: 90 },
        { name: "Node.js", level: 90 },
        { name: "Express.js", level: 90 },
      ],
    },
    {
      category: "Databases",
      skills: [
        { name: "PostgreSQL", level: 90 },
        { name: "MongoDB", level: 85 },
      ],
    },
    {
      category: "Code Concepts",
      skills: [
        { name: "OOP", level: 90 },
        { name: "Schema Design", level: 85 },
        { name: "Data Structures ", level: 75 },
      ],
    },
    {
      category: "Dev Tools",
      skills: [
        { name: "Git", level: 90 },
        { name: "Docker", level: 75 },
        { name: "VS Code", level: 95 },
        { name: "Postman", level: 80 },
      ],
    },
    {
      category: "Cloud & Basics",
      skills: [
        { name: "AWS", level: 50 },
        { name: "Linux", level: 70 },
        { name: "Nginx", level: 50 },
      ],
    },
  ];

  const additionalTechnologies = [
    "Socket.io",
    "JWT",
    "REST APIs",
    "Agile",
    "Scrum",
    "Selenium",
    "K6",
    "Responsive Design",
    "Code Optimization",
    "Performance Optimization",
  ];
  return (
    <PageLayout title="Skills">
      <div className="space-y-8">
        {skillCategories.map((category, categoryIndex) => (
          <motion.div
            key={category.category}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
            className="bg-primary-800/50 backdrop-blur-sm border border-primary-600/20 rounded-lg p-6"
          >
            <h3 className="text-xl font-bold text-primary-400 mb-6">{category.category}</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {category.skills.map((skill, skillIndex) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: categoryIndex * 0.1 + skillIndex * 0.05 }}
                  className="space-y-2"
                >
                  <div className="flex justify-between items-center">
                    <span className="text-primary-200 font-medium">{skill.name}</span>
                    <span className="text-primary-400 text-sm font-mono">{skill.level}%</span>
                  </div>
                  <div className="bg-primary-900/50 rounded-full h-2 overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${skill.level}%` }}
                      transition={{ duration: 1, delay: categoryIndex * 0.2 + skillIndex * 0.1 }}
                      className="h-full bg-gradient-to-r from-primary-400 to-primary-200 rounded-full"
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}

        {/* Additional Skills Tags */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="bg-primary-800/50 backdrop-blur-sm border border-primary-600/20 rounded-lg p-6"
        >
          <h3 className="text-xl font-bold text-primary-400 mb-6">Additional Technologies</h3>
          <div className="flex flex-wrap gap-3">
            {additionalTechnologies.map((tech, index) => (
              <motion.span
                key={tech}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: 0.7 + index * 0.05 }}
                className="px-3 py-1 bg-primary-900/50 border border-primary-600/20 rounded-full text-primary-300 text-sm hover:bg-primary-600/20 hover:border-primary-400/30 transition-all duration-200 cursor-default"
              >
                {tech}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </PageLayout>
  );
};

export default Skills;
