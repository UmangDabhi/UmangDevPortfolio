import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Calendar, Clock, Tag, ArrowRight, Search } from 'lucide-react';
import PageLayout from '../components/PageLayout';

const Blog = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedTag, setSelectedTag] = useState('all');

  const blogPosts = [
    {
      id: 1,
      title: "Building Scalable React Applications with TypeScript",
      excerpt: "Learn how to structure large React applications using TypeScript, custom hooks, and modern patterns for maintainable code.",
      content: `# Building Scalable React Applications with TypeScript

When building large-scale React applications, proper architecture and TypeScript integration become crucial for long-term maintainability.

## Key Principles

### 1. Component Architecture
- Keep components small and focused
- Use composition over inheritance
- Implement proper prop interfaces

### 2. State Management
- Use React Context for global state
- Implement custom hooks for business logic
- Consider Redux Toolkit for complex state

### 3. TypeScript Best Practices
- Define strict interfaces for props
- Use generic types for reusable components
- Leverage utility types for flexibility

## Example Implementation

\`\`\`typescript
interface UserCardProps {
  user: User;
  onEdit: (id: string) => void;
  className?: string;
}

const UserCard: React.FC<UserCardProps> = ({ 
  user, 
  onEdit, 
  className = '' 
}) => {
  return (
    <div className={\`card \${className}\`}>
      <h3>{user.name}</h3>
      <button onClick={() => onEdit(user.id)}>
        Edit User
      </button>
    </div>
  );
};
\`\`\`

This approach ensures type safety while maintaining component reusability.`,
      date: "2024-01-15",
      readTime: "8 min read",
      tags: ["React", "TypeScript", "Architecture"],
      category: "Frontend"
    },
    {
      id: 2,
      title: "Optimizing Node.js Performance: Tips and Tricks",
      excerpt: "Discover advanced techniques for improving Node.js application performance, from memory management to async optimization.",
      content: `# Optimizing Node.js Performance: Tips and Tricks

Performance optimization in Node.js requires understanding the event loop, memory management, and async patterns.

## Performance Strategies

### 1. Event Loop Optimization
- Avoid blocking the event loop
- Use worker threads for CPU-intensive tasks
- Implement proper error handling

### 2. Memory Management
- Monitor memory usage with profiling tools
- Implement proper garbage collection strategies
- Use streaming for large data processing

### 3. Database Optimization
- Implement connection pooling
- Use indexes effectively
- Consider caching strategies

## Code Example

\`\`\`javascript
const cluster = require('cluster');
const numCPUs = require('os').cpus().length;

if (cluster.isMaster) {
  for (let i = 0; i < numCPUs; i++) {
    cluster.fork();
  }
  
  cluster.on('exit', (worker) => {
    console.log(\`Worker \${worker.process.pid} died\`);
    cluster.fork();
  });
} else {
  require('./app.js');
}
\`\`\`

This clustering approach can significantly improve application throughput.`,
      date: "2024-01-10",
      readTime: "6 min read",
      tags: ["Node.js", "Performance", "Backend"],
      category: "Backend"
    },
    {
      id: 3,
      title: "Modern CSS Techniques for Better UX",
      excerpt: "Explore cutting-edge CSS features like container queries, CSS Grid, and custom properties for creating responsive designs.",
      content: `# Modern CSS Techniques for Better UX

Modern CSS offers powerful features that can significantly improve user experience and developer productivity.

## Advanced CSS Features

### 1. Container Queries
- Responsive design based on container size
- More flexible than media queries
- Better component-based styling

### 2. CSS Grid & Flexbox
- Complex layouts made simple
- Better browser support
- Responsive by default

### 3. Custom Properties (CSS Variables)
- Dynamic theming
- Runtime value changes
- Better maintainability

## Practical Example

\`\`\`css
.card-container {
  container-type: inline-size;
}

@container (min-width: 300px) {
  .card {
    display: grid;
    grid-template-columns: 1fr 2fr;
    gap: 1rem;
  }
}

:root {
  --primary-color: #3b82f6;
  --spacing-unit: 0.5rem;
}

.button {
  background: var(--primary-color);
  padding: calc(var(--spacing-unit) * 2);
}
\`\`\`

These techniques provide more control and flexibility in modern web design.`,
      date: "2024-01-05",
      readTime: "5 min read",
      tags: ["CSS", "UX", "Frontend"],
      category: "Frontend"
    },
    {
      id: 4,
      title: "Database Design Patterns for Scalable Applications",
      excerpt: "Learn essential database design patterns and optimization techniques for building applications that scale.",
      content: `# Database Design Patterns for Scalable Applications

Proper database design is crucial for application scalability and performance.

## Design Patterns

### 1. Normalization vs Denormalization
- When to normalize for consistency
- Strategic denormalization for performance
- Finding the right balance

### 2. Indexing Strategies
- Compound indexes for complex queries
- Partial indexes for filtered data
- Index maintenance considerations

### 3. Sharding and Partitioning
- Horizontal vs vertical partitioning
- Sharding key selection
- Cross-shard query challenges

## MongoDB Example

\`\`\`javascript
// Compound index for efficient queries
db.users.createIndex({ 
  "status": 1, 
  "lastLogin": -1, 
  "email": 1 
});

// Aggregation pipeline for complex data processing
db.orders.aggregate([
  { $match: { status: "completed" } },
  { $group: { 
    _id: "$userId", 
    totalSpent: { $sum: "$amount" },
    orderCount: { $sum: 1 }
  }},
  { $sort: { totalSpent: -1 } },
  { $limit: 10 }
]);
\`\`\`

These patterns help maintain performance as your application grows.`,
      date: "2023-12-28",
      readTime: "10 min read",
      tags: ["Database", "MongoDB", "Performance"],
      category: "Backend"
    },
    {
      id: 5,
      title: "Implementing Real-time Features with WebSockets",
      excerpt: "Build real-time applications using WebSockets, Socket.io, and modern browser APIs for instant user interactions.",
      content: `# Implementing Real-time Features with WebSockets

Real-time communication is essential for modern web applications, from chat systems to live updates.

## WebSocket Implementation

### 1. Basic WebSocket Setup
- Client-server connection establishment
- Message handling and error management
- Connection lifecycle management

### 2. Socket.io Integration
- Room-based communication
- Event-driven architecture
- Automatic fallback mechanisms

### 3. Scaling Considerations
- Load balancing with sticky sessions
- Redis adapter for multiple servers
- Connection state management

## Implementation Example

\`\`\`javascript
// Server-side Socket.io setup
const io = require('socket.io')(server);

io.on('connection', (socket) => {
  console.log('User connected:', socket.id);
  
  socket.on('join-room', (roomId) => {
    socket.join(roomId);
    socket.to(roomId).emit('user-joined', socket.id);
  });
  
  socket.on('message', (data) => {
    socket.to(data.room).emit('message', {
      id: socket.id,
      message: data.message,
      timestamp: new Date()
    });
  });
  
  socket.on('disconnect', () => {
    console.log('User disconnected:', socket.id);
  });
});
\`\`\`

This setup provides a foundation for real-time communication features.`,
      date: "2023-12-20",
      readTime: "7 min read",
      tags: ["WebSockets", "Real-time", "Socket.io"],
      category: "Backend"
    }
  ];

  const allTags = ['all', ...Array.from(new Set(blogPosts.flatMap(post => post.tags)))];

  const filteredPosts = blogPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesTag = selectedTag === 'all' || post.tags.includes(selectedTag);
    return matchesSearch && matchesTag;
  });

  const [selectedPost, setSelectedPost] = useState<number | null>(null);

  return (
    <PageLayout title="Blog & Changelog">
      {selectedPost ? (
        // Full Post View
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setSelectedPost(null)}
            className="mb-6 flex items-center space-x-2 text-primary-400 hover:text-primary-300 transition-colors"
          >
            <ArrowRight className="h-4 w-4 rotate-180" />
            <span>Back to posts</span>
          </motion.button>

          {(() => {
            const post = blogPosts.find(p => p.id === selectedPost);
            if (!post) return null;

            return (
              <div className="bg-primary-800/50 backdrop-blur-sm border border-primary-600/20 rounded-lg overflow-hidden">
                <div className="p-8">
                  <div className="mb-6">
                    <h1 className="text-3xl font-bold text-primary-200 mb-4">{post.title}</h1>
                    <div className="flex items-center space-x-6 text-sm text-primary-300">
                      <div className="flex items-center space-x-2">
                        <Calendar className="h-4 w-4" />
                        <span>{new Date(post.date).toLocaleDateString()}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Clock className="h-4 w-4" />
                        <span>{post.readTime}</span>
                      </div>
                    </div>
                  </div>

                  <div className="prose prose-invert max-w-none">
                    <div className="text-primary-200 leading-relaxed whitespace-pre-line">
                      {post.content}
                    </div>
                  </div>

                  <div className="mt-8 pt-6 border-t border-primary-600/20">
                    <div className="flex flex-wrap gap-2">
                      {post.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-3 py-1 bg-primary-400/20 text-primary-300 text-sm rounded-full border border-primary-400/30"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            );
          })()}
        </motion.div>
      ) : (
        // Blog List View
        <>
          {/* Search and Filter */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-8 space-y-4"
          >
            {/* Search Bar */}
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-primary-400" />
              <input
                type="text"
                placeholder="Search posts..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 bg-primary-800/50 border border-primary-600/30 rounded-lg focus:ring-2 focus:ring-primary-400 focus:border-transparent text-primary-200 placeholder-primary-400"
              />
            </div>

            {/* Tag Filter */}
            <div className="flex flex-wrap gap-2">
              {allTags.map((tag) => (
                <motion.button
                  key={tag}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setSelectedTag(tag)}
                  className={`px-3 py-1 rounded-full text-sm font-medium transition-all duration-200 flex items-center space-x-1 ${
                    selectedTag === tag
                      ? 'bg-primary-400/20 text-primary-200 border border-primary-400/50'
                      : 'text-primary-300 hover:bg-primary-600/20 hover:text-primary-200 border border-primary-600/30'
                  }`}
                >
                  <Tag className="h-3 w-3" />
                  <span>{tag}</span>
                </motion.button>
              ))}
            </div>
          </motion.div>

          {/* Blog Posts Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {filteredPosts.map((post, index) => (
              <motion.article
                key={post.id}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5, scale: 1.02 }}
                className="bg-primary-800/50 backdrop-blur-sm border border-primary-600/20 rounded-lg overflow-hidden hover:border-primary-400/30 transition-all duration-300 cursor-pointer group"
                onClick={() => setSelectedPost(post.id)}
              >
                <div className="p-6">
                  {/* Category Badge */}
                  <div className="mb-4">
                    <span className="px-2 py-1 bg-primary-400/20 text-primary-300 text-xs rounded border border-primary-400/30">
                      {post.category}
                    </span>
                  </div>

                  {/* Title */}
                  <h2 className="text-xl font-bold text-primary-200 mb-3 group-hover:text-primary-100 transition-colors">
                    {post.title}
                  </h2>

                  {/* Excerpt */}
                  <p className="text-primary-300 text-sm mb-4 leading-relaxed">
                    {post.excerpt}
                  </p>

                  {/* Meta Info */}
                  <div className="flex items-center justify-between text-xs text-primary-400 mb-4">
                    <div className="flex items-center space-x-4">
                      <div className="flex items-center space-x-1">
                        <Calendar className="h-3 w-3" />
                        <span>{new Date(post.date).toLocaleDateString()}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Clock className="h-3 w-3" />
                        <span>{post.readTime}</span>
                      </div>
                    </div>
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1 mb-4">
                    {post.tags.slice(0, 3).map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-1 bg-primary-900/50 text-primary-300 text-xs rounded border border-primary-600/30"
                      >
                        {tag}
                      </span>
                    ))}
                    {post.tags.length > 3 && (
                      <span className="px-2 py-1 bg-primary-900/50 text-primary-300 text-xs rounded border border-primary-600/30">
                        +{post.tags.length - 3}
                      </span>
                    )}
                  </div>

                  {/* Read More */}
                  <div className="flex items-center space-x-2 text-primary-400 group-hover:text-primary-300 transition-colors">
                    <span className="text-sm font-medium">Read more</span>
                    <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </motion.article>
            ))}
          </div>

          {filteredPosts.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-12"
            >
              <p className="text-primary-300">No posts found matching your criteria.</p>
            </motion.div>
          )}

          {/* About Blog Section */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="mt-12 bg-primary-800/50 backdrop-blur-sm border border-primary-600/20 rounded-lg p-8"
          >
            <h3 className="text-2xl font-bold text-primary-400 mb-4">About This Blog</h3>
            <p className="text-primary-200 leading-relaxed">
              This blog serves as a knowledge base where I share insights, tutorials, and experiences 
              from my journey as a full-stack developer. Topics range from frontend frameworks and 
              backend architectures to database optimization and deployment strategies. Each post 
              includes practical examples and real-world applications to help fellow developers 
              solve similar challenges.
            </p>
          </motion.div>
        </>
      )}
    </PageLayout>
  );
};

export default Blog;