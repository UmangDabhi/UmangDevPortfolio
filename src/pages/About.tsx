import { motion } from "framer-motion";
import PageLayout from "../components/PageLayout";

const About = () => {
  const skills = [
    "Dynamic Solution Creator",
    "Problem Solving",
    "Team Management",
    "Project Management",
    "Technical Communication",
    "Time Management",
  ];

  return (
    <PageLayout title="About Me">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Left Column - Career Summary */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="bg-primary-800/50 backdrop-blur-sm border border-primary-600/20 rounded-lg p-6"
        >
          <h2 className="text-2xl font-bold text-primary-400 mb-6">Career Summary</h2>
          <div className="space-y-4 text-primary-200">
            <p>
              I'm a passionate full stack developer with expertise in modern web technologies and a strong foundation in computer science principles.
              My journey in software development has been driven by curiosity and a desire to create meaningful solutions.
            </p>
            <p>
              With experience across the entire development lifecycle, I've worked on projects ranging from e-learning platforms to game development,
              always focusing on clean, maintainable code and user-centric design.
            </p>
            <p>I thrive in collaborative environments and enjoy mentoring junior developers, sharing knowledge.</p>
          </div>
        </motion.div>

        {/* Right Column - Education */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="bg-primary-800/50 backdrop-blur-sm border border-primary-600/20 rounded-lg p-6"
        >
          <h2 className="text-2xl font-bold text-primary-400 mb-6">Education</h2>
          <div className="bg-primary-900/50 rounded-lg p-4 font-mono text-sm">
            <div className="text-primary-300">
              <span className="text-primary-400">const</span> education = [
            </div>

            {/* B.Tech */}
            <div className="ml-4 space-y-1 text-primary-300">
              <div>{"  {"}</div>
              <div className="ml-4">
                <span className="text-primary-200">level:</span> <span className="text-green-400">"B.Tech IT"</span>,
              </div>
              <div className="ml-4">
                <span className="text-primary-200">institute:</span> <span className="text-green-400">"Marwadi University"</span>,
              </div>
              <div className="ml-4">
                <span className="text-primary-200">cgpa:</span> <span className="text-green-400">"9.60"</span>,
              </div>
              <div className="ml-4">
                <span className="text-primary-200">duration:</span> <span className="text-green-400">"2021 - 2025"</span>
              </div>
              <div>{"  },"}</div>
            </div>

            {/* 12th */}
            <div className="ml-4 space-y-1 text-primary-300">
              <div>{"  {"}</div>
              <div className="ml-4">
                <span className="text-primary-200">level:</span> <span className="text-green-400">"12th GSEB"</span>,
              </div>
              <div className="ml-4">
                <span className="text-primary-200">institute:</span> <span className="text-green-400">"Jay Somnath High School"</span>,
              </div>
              <div className="ml-4">
                <span className="text-primary-200">percentage:</span> <span className="text-green-400">"76.15%"</span>,
              </div>
              <div className="ml-4">
                <span className="text-primary-200">year:</span> <span className="text-green-400">"May 2021"</span>
              </div>
              <div>{"  },"}</div>
            </div>

            {/* 10th */}
            <div className="ml-4 space-y-1 text-primary-300">
              <div>{"  {"}</div>
              <div className="ml-4">
                <span className="text-primary-200">level:</span> <span className="text-green-400">"10th GSEB"</span>,
              </div>
              <div className="ml-4">
                <span className="text-primary-200">institute:</span> <span className="text-green-400">"Matruchhaya High School"</span>,
              </div>
              <div className="ml-4">
                <span className="text-primary-200">percentage:</span> <span className="text-green-400">"86.83%"</span>,
              </div>
              <div className="ml-4">
                <span className="text-primary-200">percentile:</span> <span className="text-green-400">"98.46"</span>,
              </div>
              <div className="ml-4">
                <span className="text-primary-200">year:</span> <span className="text-green-400">"March 2019"</span>
              </div>
              <div>{"  }"}</div>
            </div>

            <div className="text-primary-300">];</div>
          </div>
        </motion.div>

        {/* Full Width - Soft Skills */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="lg:col-span-2 bg-primary-800/50 backdrop-blur-sm border border-primary-600/20 rounded-lg p-6"
        >
          <h2 className="text-2xl font-bold text-primary-400 mb-6">Soft Skills & Leadership</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {skills.map((skill, index) => (
              <motion.div
                key={skill}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-primary-900/50 border border-primary-600/20 rounded-lg p-3 text-center hover:bg-primary-600/20 transition-all duration-200"
              >
                <span className="text-primary-200 font-medium">{skill}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Philosophy */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="lg:col-span-2 bg-primary-800/50 backdrop-blur-sm border border-primary-600/20 rounded-lg p-6"
        >
          <h2 className="text-2xl font-bold text-primary-400 mb-6">Development Philosophy</h2>
          <div className="bg-primary-900/50 rounded-lg p-4 border-l-4 border-primary-400">
            <p className="text-primary-200 italic">
              "Code is poetry written in logic. Every function should tell a story, every variable should have purpose, and every solution should be
              elegant in its simplicity. I believe in writing code that not only works today but can be understood and maintained tomorrow."
            </p>
          </div>
        </motion.div>
      </div>
    </PageLayout>
  );
};

export default About;
