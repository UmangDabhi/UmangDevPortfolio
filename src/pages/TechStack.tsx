import { motion } from 'framer-motion';
import { Clock, Cloud, Code, Database, Globe, Star, TrendingUp, Wrench } from 'lucide-react';
import { useState } from 'react';
import PageLayout from '../components/PageLayout';

const TechStack = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const techCategories = [
    {
      id: 'frontend',
      name: 'Frontend',
      icon: Globe,
      color: 'from-blue-500/20 to-cyan-500/20',
      borderColor: 'border-blue-500/30',
      technologies: [
        {
          name: 'React',
          level: 95,
          experience: '3+ years',
          projects: 15,
          description: 'Advanced React development with hooks, context, and performance optimization',
          highlights: ['Custom Hooks', 'State Management', 'Performance Optimization', 'Testing']
        },
        {
          name: 'TypeScript',
          level: 90,
          experience: '2+ years',
          projects: 12,
          description: 'Strong typing, interfaces, generics, and advanced TypeScript patterns',
          highlights: ['Type Safety', 'Generics', 'Utility Types', 'Declaration Files']
        },
        {
          name: 'Vue.js',
          level: 85,
          experience: '2 years',
          projects: 8,
          description: 'Vue 3 composition API, Vuex, and component-based architecture',
          highlights: ['Composition API', 'Vuex', 'Vue Router', 'Nuxt.js']
        },
        {
          name: 'Tailwind CSS',
          level: 95,
          experience: '2+ years',
          projects: 20,
          description: 'Utility-first CSS framework for rapid UI development',
          highlights: ['Custom Components', 'Responsive Design', 'Dark Mode', 'Animations']
        }
      ]
    },
    {
      id: 'backend',
      name: 'Backend',
      icon: Code,
      color: 'from-green-500/20 to-emerald-500/20',
      borderColor: 'border-green-500/30',
      technologies: [
        {
          name: 'Node.js',
          level: 92,
          experience: '3+ years',
          projects: 18,
          description: 'Server-side JavaScript with Express, APIs, and microservices',
          highlights: ['Express.js', 'RESTful APIs', 'Microservices', 'Performance Tuning']
        },
        {
          name: 'NestJS',
          level: 88,
          experience: '2 years',
          projects: 10,
          description: 'Enterprise-grade Node.js framework with TypeScript and decorators',
          highlights: ['Dependency Injection', 'Guards & Interceptors', 'GraphQL', 'Testing']
        },
        {
          name: 'Python',
          level: 85,
          experience: '2+ years',
          projects: 12,
          description: 'Backend development with FastAPI, Django, and data processing',
          highlights: ['FastAPI', 'Django', 'Data Analysis', 'Machine Learning']
        },
        {
          name: 'GraphQL',
          level: 80,
          experience: '1.5 years',
          projects: 6,
          description: 'Query language for APIs with Apollo Server and client',
          highlights: ['Apollo Server', 'Schema Design', 'Resolvers', 'Subscriptions']
        }
      ]
    },
    {
      id: 'database',
      name: 'Databases',
      icon: Database,
      color: 'from-purple-500/20 to-pink-500/20',
      borderColor: 'border-purple-500/30',
      technologies: [
        {
          name: 'MongoDB',
          level: 90,
          experience: '3+ years',
          projects: 16,
          description: 'NoSQL database with aggregation pipelines and indexing strategies',
          highlights: ['Aggregation', 'Indexing', 'Replication', 'Sharding']
        },
        {
          name: 'PostgreSQL',
          level: 88,
          experience: '2+ years',
          projects: 12,
          description: 'Advanced SQL with complex queries, triggers, and stored procedures',
          highlights: ['Complex Queries', 'Triggers', 'JSONB', 'Performance Optimization']
        },
        {
          name: 'Redis',
          level: 82,
          experience: '2 years',
          projects: 10,
          description: 'In-memory caching, session storage, and pub/sub messaging',
          highlights: ['Caching', 'Session Storage', 'Pub/Sub', 'Data Structures']
        },
        {
          name: 'Firebase',
          level: 85,
          experience: '2 years',
          projects: 8,
          description: 'Real-time database, authentication, and cloud functions',
          highlights: ['Firestore', 'Authentication', 'Cloud Functions', 'Real-time Updates']
        }
      ]
    },
    {
      id: 'cloud',
      name: 'Cloud & DevOps',
      icon: Cloud,
      color: 'from-orange-500/20 to-red-500/20',
      borderColor: 'border-orange-500/30',
      technologies: [
        {
          name: 'AWS',
          level: 85,
          experience: '2+ years',
          projects: 14,
          description: 'EC2, S3, Lambda, RDS, and CloudFormation for scalable applications',
          highlights: ['EC2', 'S3', 'Lambda', 'RDS', 'CloudFormation']
        },
        {
          name: 'Docker',
          level: 83,
          experience: '2 years',
          projects: 12,
          description: 'Containerization, multi-stage builds, and orchestration',
          highlights: ['Containerization', 'Multi-stage Builds', 'Docker Compose', 'Optimization']
        },
        {
          name: 'Vercel',
          level: 92,
          experience: '2+ years',
          projects: 20,
          description: 'Serverless deployment platform for frontend applications',
          highlights: ['Serverless Functions', 'Edge Network', 'Analytics', 'Preview Deployments']
        },
        {
          name: 'Netlify',
          level: 90,
          experience: '2+ years',
          projects: 15,
          description: 'JAMstack deployment with form handling and edge functions',
          highlights: ['JAMstack', 'Form Handling', 'Edge Functions', 'Split Testing']
        }
      ]
    },
    {
      id: 'tools',
      name: 'Tools & Others',
      icon: Wrench,
      color: 'from-yellow-500/20 to-orange-500/20',
      borderColor: 'border-yellow-500/30',
      technologies: [
        {
          name: 'Git',
          level: 95,
          experience: '3+ years',
          projects: 25,
          description: 'Version control, branching strategies, and collaborative workflows',
          highlights: ['Branching Strategies', 'Merge Conflicts', 'Git Flow', 'Hooks']
        },
        {
          name: 'VS Code',
          level: 98,
          experience: '4+ years',
          projects: 30,
          description: 'Advanced IDE usage with extensions, debugging, and customization',
          highlights: ['Extensions', 'Debugging', 'Snippets', 'Workspace Settings']
        },
        {
          name: 'Jest',
          level: 85,
          experience: '2 years',
          projects: 10,
          description: 'Unit testing, integration testing, and test-driven development',
          highlights: ['Unit Testing', 'Mocking', 'Coverage Reports', 'TDD']
        },
        {
          name: 'Postman',
          level: 92,
          experience: '3+ years',
          projects: 20,
          description: 'API testing, documentation, and automated testing workflows',
          highlights: ['API Testing', 'Collections', 'Environments', 'Automation']
        }
      ]
    }
  ];

  const filteredCategories = selectedCategory === 'all' 
    ? techCategories 
    : techCategories.filter(cat => cat.id === selectedCategory);

  return (
    <PageLayout title="Tech Stack Deep Dive">
      {/* Category Filter */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mb-8 bg-primary-800/50 backdrop-blur-sm border border-primary-600/20 rounded-lg p-4"
      >
        <div className="flex flex-wrap gap-3">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setSelectedCategory('all')}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
              selectedCategory === 'all'
                ? 'bg-primary-400/20 text-primary-200 border border-primary-400/50'
                : 'text-primary-300 hover:bg-primary-600/20 hover:text-primary-200'
            }`}
          >
            All Technologies
          </motion.button>
          {techCategories.map((category) => (
            <motion.button
              key={category.id}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 flex items-center space-x-2 ${
                selectedCategory === category.id
                  ? 'bg-primary-400/20 text-primary-200 border border-primary-400/50'
                  : 'text-primary-300 hover:bg-primary-600/20 hover:text-primary-200'
              }`}
            >
              <category.icon className="h-4 w-4" />
              <span>{category.name}</span>
            </motion.button>
          ))}
        </div>
      </motion.div>

      {/* Technology Categories */}
      <div className="space-y-12">
        {filteredCategories.map((category, categoryIndex) => (
          <motion.div
            key={category.id}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
            className={`bg-gradient-to-r ${category.color} backdrop-blur-sm border ${category.borderColor} rounded-lg overflow-hidden`}
          >
            {/* Category Header */}
            <div className="bg-primary-800/50 p-6 border-b border-primary-600/20">
              <div className="flex items-center space-x-4">
                <div className="p-3 bg-primary-400/20 rounded-lg">
                  <category.icon className="h-8 w-8 text-primary-400" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-primary-200">{category.name}</h2>
                  <p className="text-primary-300">
                    {category.technologies.length} technologies • 
                    {category.technologies.reduce((sum, tech) => sum + tech.projects, 0)} projects
                  </p>
                </div>
              </div>
            </div>

            {/* Technologies Grid */}
            <div className="p-6">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {category.technologies.map((tech, techIndex) => (
                  <motion.div
                    key={tech.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: (categoryIndex * 0.1) + (techIndex * 0.05) }}
                    whileHover={{ scale: 1.02, y: -2 }}
                    className="bg-primary-900/30 rounded-lg p-6 border border-primary-600/20 hover:border-primary-400/30 transition-all duration-300"
                  >
                    {/* Tech Header */}
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-xl font-bold text-primary-200">{tech.name}</h3>
                      <div className="flex items-center space-x-2">
                        <Star className="h-4 w-4 text-yellow-400" />
                        <span className="text-primary-400 font-mono text-sm">{tech.level}%</span>
                      </div>
                    </div>

                    {/* Progress Bar */}
                    <div className="mb-4">
                      <div className="bg-primary-800/50 rounded-full h-2 overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={{ width: `${tech.level}%` }}
                          transition={{ duration: 1, delay: (categoryIndex * 0.2) + (techIndex * 0.1) }}
                          className="h-full bg-gradient-to-r from-primary-400 to-primary-200 rounded-full"
                        />
                      </div>
                    </div>

                    {/* Stats */}
                    <div className="grid grid-cols-2 gap-4 mb-4">
                      <div className="flex items-center space-x-2">
                        <Clock className="h-4 w-4 text-primary-400" />
                        <span className="text-primary-300 text-sm">{tech.experience}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <TrendingUp className="h-4 w-4 text-primary-400" />
                        <span className="text-primary-300 text-sm">{tech.projects} projects</span>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-primary-200 text-sm mb-4 leading-relaxed">
                      {tech.description}
                    </p>

                    {/* Highlights */}
                    <div className="space-y-2">
                      <h4 className="text-sm font-semibold text-primary-400 uppercase tracking-wider">
                        Key Skills
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {tech.highlights.map((highlight, index) => (
                          <motion.span
                            key={highlight}
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: (categoryIndex * 0.2) + (techIndex * 0.1) + (index * 0.05) }}
                            className="px-2 py-1 bg-primary-800/50 text-primary-300 text-xs rounded border border-primary-600/30"
                          >
                            {highlight}
                          </motion.span>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Learning Philosophy */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.8 }}
        className="mt-12 bg-primary-800/50 backdrop-blur-sm border border-primary-600/20 rounded-lg p-8"
      >
        <h3 className="text-2xl font-bold text-primary-400 mb-6">Learning & Growth Philosophy</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h4 className="text-lg font-semibold text-primary-200 mb-3">Continuous Learning</h4>
            <p className="text-primary-300 leading-relaxed">
              I believe in staying current with emerging technologies and best practices. 
              My approach involves hands-on experimentation, building real projects, and 
              contributing to open-source communities to deepen my understanding.
            </p>
          </div>
          <div>
            <h4 className="text-lg font-semibold text-primary-200 mb-3">Technology Selection</h4>
            <p className="text-primary-300 leading-relaxed">
              I choose technologies based on project requirements, team expertise, and 
              long-term maintainability. My focus is on building scalable, performant 
              solutions while maintaining code quality and developer experience.
            </p>
          </div>
        </div>
      </motion.div>
    </PageLayout>
  );
};

export default TechStack;