import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Copy, Check, Code, Terminal, Database, Globe } from 'lucide-react';
import PageLayout from '../components/PageLayout';

const CodeSnippets = () => {
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const snippets = [
    {
      id: 'react-hook',
      title: 'Custom React Hook - useLocalStorage',
      category: 'React',
      icon: Globe,
      description: 'A reusable hook for managing localStorage with React state synchronization',
      language: 'typescript',
      code: `import { useState, useEffect } from 'react';

export function useLocalStorage<T>(
  key: string,
  initialValue: T
): [T, (value: T | ((val: T) => T)) => void] {
  const [storedValue, setStoredValue] = useState<T>(() => {
    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      console.error(\`Error reading localStorage key "\${key}":\`, error);
      return initialValue;
    }
  });

  const setValue = (value: T | ((val: T) => T)) => {
    try {
      const valueToStore = value instanceof Function ? value(storedValue) : value;
      setStoredValue(valueToStore);
      window.localStorage.setItem(key, JSON.stringify(valueToStore));
    } catch (error) {
      console.error(\`Error setting localStorage key "\${key}":\`, error);
    }
  };

  return [storedValue, setValue];
}`
    },
    {
      id: 'api-wrapper',
      title: 'API Response Wrapper',
      category: 'Node.js',
      icon: Terminal,
      description: 'Standardized API response wrapper with error handling',
      language: 'javascript',
      code: `class ApiResponse {
  constructor(statusCode, data, message = "Success") {
    this.statusCode = statusCode;
    this.data = data;
    this.message = message;
    this.success = statusCode < 400;
  }
}

class ApiError extends Error {
  constructor(
    statusCode,
    message = "Something went wrong",
    errors = [],
    stack = ""
  ) {
    super(message);
    this.statusCode = statusCode;
    this.data = null;
    this.message = message;
    this.success = false;
    this.errors = errors;

    if (stack) {
      this.stack = stack;
    } else {
      Error.captureStackTrace(this, this.constructor);
    }
  }
}

const asyncHandler = (requestHandler) => {
  return (req, res, next) => {
    Promise.resolve(requestHandler(req, res, next)).catch((err) => next(err));
  };
};

export { ApiResponse, ApiError, asyncHandler };`
    },
    {
      id: 'db-connection',
      title: 'MongoDB Connection with Retry Logic',
      category: 'Database',
      icon: Database,
      description: 'Robust MongoDB connection with automatic retry and error handling',
      language: 'javascript',
      code: `import mongoose from 'mongoose';

class DatabaseConnection {
  constructor() {
    this.isConnected = false;
    this.maxRetries = 5;
    this.retryDelay = 5000;
  }

  async connect(uri, options = {}) {
    const defaultOptions = {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      maxPoolSize: 10,
      serverSelectionTimeoutMS: 5000,
      socketTimeoutMS: 45000,
      ...options
    };

    for (let attempt = 1; attempt <= this.maxRetries; attempt++) {
      try {
        await mongoose.connect(uri, defaultOptions);
        this.isConnected = true;
        console.log(\`✅ MongoDB connected successfully (attempt \${attempt})\`);
        
        mongoose.connection.on('error', this.handleError.bind(this));
        mongoose.connection.on('disconnected', this.handleDisconnection.bind(this));
        
        return;
      } catch (error) {
        console.error(\`❌ MongoDB connection attempt \${attempt} failed:\`, error.message);
        
        if (attempt === this.maxRetries) {
          throw new Error(\`Failed to connect to MongoDB after \${this.maxRetries} attempts\`);
        }
        
        await this.delay(this.retryDelay * attempt);
      }
    }
  }

  handleError(error) {
    console.error('MongoDB connection error:', error);
    this.isConnected = false;
  }

  handleDisconnection() {
    console.warn('MongoDB disconnected. Attempting to reconnect...');
    this.isConnected = false;
  }

  delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  async disconnect() {
    if (this.isConnected) {
      await mongoose.disconnect();
      this.isConnected = false;
      console.log('MongoDB disconnected');
    }
  }
}

export default new DatabaseConnection();`
    },
    {
      id: 'auth-middleware',
      title: 'JWT Authentication Middleware',
      category: 'Security',
      icon: Code,
      description: 'Express middleware for JWT token validation and user authentication',
      language: 'javascript',
      code: `import jwt from 'jsonwebtoken';
import { ApiError } from '../utils/ApiError.js';
import { asyncHandler } from '../utils/asyncHandler.js';
import User from '../models/User.js';

export const verifyJWT = asyncHandler(async (req, res, next) => {
  try {
    const token = req.cookies?.accessToken || 
                  req.header("Authorization")?.replace("Bearer ", "");

    if (!token) {
      throw new ApiError(401, "Unauthorized request");
    }

    const decodedToken = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);
    
    const user = await User.findById(decodedToken?._id).select(
      "-password -refreshToken"
    );

    if (!user) {
      throw new ApiError(401, "Invalid Access Token");
    }

    req.user = user;
    next();
  } catch (error) {
    throw new ApiError(401, error?.message || "Invalid access token");
  }
});

export const verifyPermission = (permissions = []) => {
  return asyncHandler(async (req, res, next) => {
    if (!req.user?._id) {
      throw new ApiError(401, "Unauthorized request");
    }

    if (permissions.length && !permissions.includes(req.user.role)) {
      throw new ApiError(403, "You don't have permission to perform this action");
    }

    next();
  });
};`
    }
  ];

  const copyToClipboard = async (code: string, id: string) => {
    try {
      await navigator.clipboard.writeText(code);
      setCopiedId(id);
      setTimeout(() => setCopiedId(null), 2000);
    } catch (err) {
      console.error('Failed to copy code:', err);
    }
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'React':
        return 'bg-blue-500/20 text-blue-300 border-blue-500/30';
      case 'Node.js':
        return 'bg-green-500/20 text-green-300 border-green-500/30';
      case 'Database':
        return 'bg-purple-500/20 text-purple-300 border-purple-500/30';
      case 'Security':
        return 'bg-red-500/20 text-red-300 border-red-500/30';
      default:
        return 'bg-primary-400/20 text-primary-300 border-primary-400/30';
    }
  };

  return (
    <PageLayout title="Code Snippets">
      <div className="space-y-8">
        {snippets.map((snippet, index) => (
          <motion.div
            key={snippet.id}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ y: -2 }}
            className="bg-primary-800/50 backdrop-blur-sm border border-primary-600/20 rounded-lg overflow-hidden hover:border-primary-400/30 transition-all duration-300"
          >
            {/* Header */}
            <div className="p-6 border-b border-primary-600/20">
              <div className="flex items-start justify-between">
                <div className="flex items-center space-x-4">
                  <div className="p-2 bg-primary-400/20 rounded-lg">
                    <snippet.icon className="h-6 w-6 text-primary-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-primary-200 mb-2">{snippet.title}</h3>
                    <p className="text-primary-300 text-sm">{snippet.description}</p>
                  </div>
                </div>
                <span className={`px-3 py-1 text-xs font-medium rounded-full border ${getCategoryColor(snippet.category)}`}>
                  {snippet.category}
                </span>
              </div>
            </div>

            {/* Code Block */}
            <div className="relative">
              <div className="flex items-center justify-between px-6 py-3 bg-primary-900/50 border-b border-primary-600/20">
                <div className="flex items-center space-x-2">
                  <div className="flex space-x-2">
                    <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  </div>
                  <span className="text-primary-400 text-sm font-mono">{snippet.title.toLowerCase().replace(/\s+/g, '-')}.{snippet.language}</span>
                </div>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => copyToClipboard(snippet.code, snippet.id)}
                  className="flex items-center space-x-2 px-3 py-1 bg-primary-600/20 hover:bg-primary-600/30 border border-primary-600/30 rounded text-primary-300 hover:text-primary-200 transition-all duration-200"
                >
                  {copiedId === snippet.id ? (
                    <>
                      <Check className="h-4 w-4" />
                      <span className="text-sm">Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="h-4 w-4" />
                      <span className="text-sm">Copy</span>
                    </>
                  )}
                </motion.button>
              </div>
              
              <div className="p-6 bg-primary-900/30 overflow-x-auto">
                <pre className="text-sm text-primary-200 font-mono leading-relaxed">
                  <code>{snippet.code}</code>
                </pre>
              </div>
            </div>
          </motion.div>
        ))}

        {/* Usage Tips */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="bg-primary-800/50 backdrop-blur-sm border border-primary-600/20 rounded-lg p-6"
        >
          <h3 className="text-xl font-bold text-primary-400 mb-4">💡 Usage Tips</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-primary-200">
            <div className="space-y-2">
              <p>• All snippets are production-ready and tested</p>
              <p>• TypeScript types included where applicable</p>
              <p>• Error handling implemented for robustness</p>
            </div>
            <div className="space-y-2">
              <p>• Follow your project's coding standards</p>
              <p>• Adapt environment variables as needed</p>
              <p>• Consider adding additional validation</p>
            </div>
          </div>
        </motion.div>
      </div>
    </PageLayout>
  );
};

export default CodeSnippets;