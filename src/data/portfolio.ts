export const profile = {
  name: "Umang R. Dabhi",
  firstName: "Umang",
  role: "Full Stack Developer",
  tagline: "MERN · PERN · AI Integration",
  summary:
    "Dynamic full stack developer skilled in building scalable, real-world applications using modern tech stacks. Passionate about solving problems through clean, functional code.",
  email: "umangdabhi3004@gmail.com",
  phone: "+91 70430 45865",
  phoneHref: "tel:+917043045865",
  location: "Gujarat, India",
  github: "https://github.com/UmangDabhi",
  linkedin: "https://www.linkedin.com/in/umang-dabhi-20b215246/",
  resume: "/resume.pdf",
  available: true,
};

export const about = {
  paragraphs: [
    "I'm a passionate full stack developer with expertise in modern web technologies and a strong foundation in computer science principles. My journey in software development has been driven by curiosity and a desire to create meaningful solutions.",
    "With experience across the entire development lifecycle, I've worked on projects ranging from e-learning platforms to game development, always focusing on clean, maintainable code and user-centric design.",
    "I thrive in collaborative environments and enjoy mentoring junior developers, sharing knowledge.",
  ],
  philosophy:
    "Code is poetry written in logic. Every function should tell a story, every variable should have purpose, and every solution should be elegant in its simplicity.",
  softSkills: [
    "Dynamic Solution Creator",
    "Problem Solving",
    "Team Management",
    "Project Management",
    "Technical Communication",
    "Time Management",
  ],
};

export interface Education {
  level: string;
  institute: string;
  score: string;
  period: string;
}

export const education: Education[] = [
  { level: "B.Tech IT", institute: "Marwadi University", score: "CGPA 9.60", period: "2021 – 2025" },
  { level: "12th GSEB", institute: "Jay Somnath High School", score: "76.15%", period: "May 2021" },
  { level: "10th GSEB", institute: "Matruchhaya High School", score: "86.83% · 98.46 percentile", period: "March 2019" },
];

export interface Experience {
  role: string;
  company: string;
  location: string;
  duration: string;
  type: "Full-time" | "Internship";
  achievements: string[];
}

export const experiences: Experience[] = [
  {
    role: "MERN Stack Developer",
    company: "InitFusion Pvt. Ltd.",
    location: "Ahmedabad, India",
    duration: "June 2024 – Present",
    type: "Full-time",
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
    duration: "Jan 2024 – June 2024",
    type: "Internship",
    achievements: [
      "Developed scalable RESTful APIs using Node.js and Express.js.",
      "Integrated third-party services, including Thermal Print.",
      "Gained foundational knowledge of React and component-based architecture.",
      "Implemented secure user authentication and role-based authorization.",
    ],
  },
  {
    role: "Game Developer Intern",
    company: "Interactive Warriors Studio",
    location: "Remote",
    duration: "Jun 2023 – Jan 2024",
    type: "Internship",
    achievements: [
      "Designed and implemented core gameplay mechanics using Unity and C#.",
      "Developed a mobile game featuring complex game logic and dynamic challenges.",
      "Built a dynamic level generation system to enhance replayability.",
      "Created interactive UI/UX components to improve player engagement and experience.",
    ],
  },
];

export const stats = [
  { label: "Years of Experience", value: "2+" },
  { label: "Projects Completed", value: "15+" },
  { label: "Technologies Mastered", value: "10+" },
];

export interface Project {
  title: string;
  stack: string[];
  description: string;
  isConfidential: boolean;
  demo?: string;
  featured?: boolean;
}

export const projects: Project[] = [
  {
    title: "ScienceExperts — E-Learning Platform",
    stack: ["PERN", "NestJS", "React", "PostgreSQL", "S3", "EC2"],
    description:
      "A full-featured E-learning platform with secure payment integration, quiz modules, role-based access, and scalable AWS deployment.",
    isConfidential: false,
    demo: "https://shreeedu.co.in/",
    featured: true,
  },
  {
    title: "Bank Document Verification System",
    stack: ["PERN", "PostgreSQL", "NestJS", "ReactJS", "Docker"],
    description:
      "A secure system for verifying customer loan requirements, letting banks decide outcomes based on their own dynamic rules — scalable PERN stack with containerized deployment.",
    isConfidential: true,
  },
  {
    title: "AI Property Chat Bot",
    stack: ["Gemini API", "NestJS", "Custom Scraper", "Double-Tick", "Docker"],
    description:
      "An AI-powered real estate assistant with web scraping capabilities, built using Gemini API and containerized services.",
    isConfidential: true,
  },
  {
    title: "Streaming Web App",
    stack: ["React", "Redux Toolkit", "Agora-RTC", "Socket.io", "TailwindCSS"],
    description:
      "Real-time video streaming platform with chat functionality using Agora RTC and live socket communication.",
    isConfidential: true,
  },
  {
    title: "Cricket Fantasy App",
    stack: ["React", "Redux Toolkit", "Socket.io"],
    description:
      "Live cricket fantasy web app with real-time scoring and player stats using sockets and Redux state management.",
    isConfidential: true,
  },
  {
    title: "Travel Admin Website",
    stack: ["PERN", "PostgreSQL", "NestJS", "ReactJS"],
    description:
      "Admin panel for travel management, including user roles, trip tracking, and custom dashboard analytics.",
    isConfidential: true,
  },
];

export interface SkillGroup {
  category: string;
  skills: { name: string; level: number }[];
}

export const skillGroups: SkillGroup[] = [
  {
    category: "Frontend",
    skills: [
      { name: "React", level: 90 },
      { name: "Redux Toolkit", level: 90 },
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
      { name: "Data Structures", level: 75 },
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

export const additionalTechnologies = [
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

export interface Certificate {
  title: string;
  issuer: string;
  date: string;
  description: string;
  type: string;
  path: string;
}

export const certificates: Certificate[] = [
  {
    title: "Node.js Certificate",
    issuer: "Infosys",
    date: "2024",
    description:
      "Backend development fundamentals, Express.js, and RESTful API creation.",
    type: "Technical",
    path: "/certificates/NodeJs.pdf",
  },
  {
    title: "Postman API Student Expert",
    issuer: "Postman",
    date: "2024",
    description:
      "API testing, documentation, and automation using Postman.",
    type: "Technical",
    path: "/certificates/Postman.jpg",
  },
  {
    title: "React JS Complete Guide",
    issuer: "Udemy",
    date: "2023",
    description:
      "Hooks, component architecture, state management, and API integration.",
    type: "Technical",
    path: "/certificates/ReactJs.pdf",
  },
  {
    title: "Game Development Finishing School",
    issuer: "Finishing School",
    date: "2022",
    description:
      "3-month offline course on Unity, C#, gameplay programming, and production pipeline.",
    type: "Offline",
    path: "/certificates/GameDevCertificate.jpg",
  },
];

export const navLinks = [
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "skills", label: "Skills" },
  { id: "certificates", label: "Certificates" },
  { id: "contact", label: "Contact" },
];
