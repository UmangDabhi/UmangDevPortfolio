import { motion } from "framer-motion";
import { Award, Calendar, ExternalLink } from "lucide-react";
import PageLayout from "../components/PageLayout";

const Certificates = () => {
  const certificates = [
    {
      title: "Node.js Certificate",
      issuer: "Infosys",
      date: "2024",
      description:
        "Completed Infosys's certification program on Node.js, covering backend development fundamentals, Express.js, and RESTful API creation.",
      type: "Technical",
      path: "/certificates/NodeJs.pdf",
    },
    {
      title: "Postman API Fundamental Student Expert Certificate",
      issuer: "Postman",
      date: "2024",
      description:
        "Earned the Postman Student Expert badge by demonstrating strong understanding of API testing, documentation, and automation using Postman.",
      type: "Technical",
      path: "/certificates/Postman.jpg",
    },
    {
      title: "React JS Complete Guide",
      issuer: "Udemy",
      date: "2023",
      description: "Completed an in-depth course on React.js, including hooks, component architecture, state management, and integration with APIs.",
      type: "Technical",
      path: "/certificates/ReactJs.pdf",
    },
    {
      title: "Game Development Finishing School",
      issuer: "Finishing School",
      date: "2022",
      description:
        "Completed a 3-month offline Game Development course led by industry experts, focusing on Unity, C#, gameplay programming, and production pipeline.",
      type: "Offline",
      path: "/certificates/GameDevCertificate.jpg",
    },
  ];

  const getTypeColor = (type: string) => {
    switch (type) {
      case "Professional":
        return "bg-purple-500/20 text-purple-300 border-purple-500/30";
      case "Technical":
        return "bg-blue-500/20 text-blue-300 border-blue-500/30";
      case "Bootcamp":
        return "bg-green-500/20 text-green-300 border-green-500/30";
      case "Management":
        return "bg-orange-500/20 text-orange-300 border-orange-500/30";
      default:
        return "bg-primary-400/20 text-primary-300 border-primary-400/30";
    }
  };

  return (
    <PageLayout title="Certificates">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {certificates.map((cert, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ y: -5 }}
            className="bg-primary-800/50 backdrop-blur-sm border border-primary-600/20 rounded-lg p-6 hover:border-primary-400/30 transition-all duration-300 group"
          >
            <div className="flex items-start justify-between mb-4">
              <div className="flex-1">
                <Award className="h-8 w-8 text-primary-400 mb-3" />
                <h3 className="text-lg font-bold text-primary-200 mb-2 group-hover:text-primary-100 transition-colors">{cert.title}</h3>
              </div>
              <motion.a
                href={cert.path}
                download
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="p-2 hover:bg-primary-600/20 rounded-lg transition-all duration-200"
              >
                <ExternalLink className="h-4 w-4 text-primary-400" />
              </motion.a>
            </div>

            <p className="text-primary-400 font-semibold mb-2">{cert.issuer}</p>
            <div className="flex items-center space-x-2 mb-3">
              <Calendar className="h-4 w-4 text-primary-300" />
              <span className="text-primary-300 text-sm">{cert.date}</span>
            </div>
            <p className="text-primary-200 text-sm mb-4 leading-relaxed">{cert.description}</p>
            <span className={`inline-block px-3 py-1 text-xs font-medium rounded-full border ${getTypeColor(cert.type)}`}>{cert.type}</span>
          </motion.div>
        ))}
      </div>

      {/* Additional Info */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.8 }}
        className="mt-12 bg-primary-800/50 backdrop-blur-sm border border-primary-600/20 rounded-lg p-6"
      >
        <h3 className="text-xl font-bold text-primary-400 mb-4">Continuous Learning</h3>
        <p className="text-primary-200 leading-relaxed">
          I believe in continuous learning and staying updated with the latest technologies. These certifications represent my commitment to
          professional development and expertise in various domains of software development. I regularly participate in workshops, webinars, and
          online courses to enhance my skills.
        </p>
      </motion.div>
    </PageLayout>
  );
};

export default Certificates;
