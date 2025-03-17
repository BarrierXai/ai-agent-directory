import { Agent } from '../types';

// Real data for AI Agent projects
const REAL_PROJECTS: Agent[] = [
  {
    id: '1',
    name: 'Auto-GPT',
    description: 'An experimental open-source autonomous AI agent that can perform tasks without human intervention',
    stars: 153000,
    forks: 39200,
    url: 'https://github.com/Significant-Gravitas/Auto-GPT',
    owner: 'Significant-Gravitas',
    avatar: 'https://avatars.githubusercontent.com/u/121312449?v=4',
    language: 'Python',
    updated: '2024-05-15',
    topics: ['ai', 'agents', 'autonomous', 'gpt', 'openai'],
    license: 'MIT'
  },
  {
    id: '2',
    name: 'BabyAGI',
    description: 'An AI-powered task management system that uses the OpenAI API and vector databases',
    stars: 17700,
    forks: 2700,
    url: 'https://github.com/yoheinakajima/babyagi',
    owner: 'yoheinakajima',
    avatar: 'https://avatars.githubusercontent.com/u/843222?v=4',
    language: 'Python',
    updated: '2024-04-20',
    topics: ['ai', 'agi', 'autonomous-agents', 'python'],
    license: 'MIT'
  },
  {
    id: '3',
    name: 'AgentGPT',
    description: 'Deploy autonomous AI Agents on your browser',
    stars: 28100,
    forks: 5100,
    url: 'https://github.com/reworkd/AgentGPT',
    owner: 'reworkd',
    avatar: 'https://avatars.githubusercontent.com/u/127366769?v=4',
    language: 'TypeScript',
    updated: '2024-05-10',
    topics: ['ai', 'web', 'gpt', 'agents', 'autonomous'],
    license: 'GPL-3.0'
  },
  {
    id: '4',
    name: 'LangChain',
    description: 'Building applications with LLMs through composability',
    stars: 77000,
    forks: 12200,
    url: 'https://github.com/langchain-ai/langchain',
    owner: 'langchain-ai',
    avatar: 'https://avatars.githubusercontent.com/u/126733545?v=4',
    language: 'Python',
    updated: '2024-05-18',
    topics: ['llm', 'ai', 'language-model', 'agents'],
    license: 'MIT'
  },
  {
    id: '5',
    name: 'OpenDevin',
    description: 'Self-improving AI software engineer',
    stars: 31700,
    forks: 3500,
    url: 'https://github.com/OpenDevin/OpenDevin',
    owner: 'OpenDevin',
    avatar: 'https://avatars.githubusercontent.com/u/162292220?v=4',
    language: 'Python',
    updated: '2024-05-17',
    topics: ['ai-agent', 'software-engineering', 'autonomous'],
    license: 'Apache-2.0'
  },
  {
    id: '6',
    name: 'CrewAI',
    description: 'Framework for orchestrating role-playing autonomous AI agents',
    stars: 19800,
    forks: 2300,
    url: 'https://github.com/joaomdmoura/crewAI',
    owner: 'joaomdmoura',
    avatar: 'https://avatars.githubusercontent.com/u/138756?v=4',
    language: 'Python',
    updated: '2024-05-12',
    topics: ['ai', 'agents', 'collaborative', 'framework'],
    license: 'MIT'
  },
  {
    id: '7',
    name: 'SuperAGI',
    description: 'An open-source autonomous AI agent framework',
    stars: 13700,
    forks: 1700,
    url: 'https://github.com/TransformerOptimus/SuperAGI',
    owner: 'TransformerOptimus',
    avatar: 'https://avatars.githubusercontent.com/u/133493246?v=4',
    language: 'Python',
    updated: '2024-05-11',
    topics: ['agi', 'autonomous-agents', 'framework'],
    license: 'MIT'
  },
  {
    id: '8',
    name: 'Haystack',
    description: 'LLM orchestration framework for building NLP applications',
    stars: 13900,
    forks: 1800,
    url: 'https://github.com/deepset-ai/haystack',
    owner: 'deepset-ai',
    avatar: 'https://avatars.githubusercontent.com/u/51827949?v=4',
    language: 'Python',
    updated: '2024-05-19',
    topics: ['llm', 'rag', 'agents', 'nlp'],
    license: 'Apache-2.0'
  },
  {
    id: '9',
    name: 'LlamaIndex',
    description: 'Data framework for building LLM applications with complex data',
    stars: 33600,
    forks: 4100,
    url: 'https://github.com/run-llama/llama_index',
    owner: 'run-llama',
    avatar: 'https://avatars.githubusercontent.com/u/122293974?v=4',
    language: 'Python',
    updated: '2024-05-21',
    topics: ['llm', 'rag', 'ai', 'data-framework'],
    license: 'MIT'
  },
  {
    id: '10',
    name: 'MetaGPT',
    description: 'The Multi-Agent Framework: Given one line requirement, generate PRD, design, tasks, and repo',
    stars: 35200,
    forks: 4200,
    url: 'https://github.com/geekan/MetaGPT',
    owner: 'geekan',
    avatar: 'https://avatars.githubusercontent.com/u/2747893?v=4',
    language: 'Python',
    updated: '2024-05-19',
    topics: ['agents', 'multi-agent', 'ai', 'llm'],
    license: 'MIT'
  },
  {
    id: '11',
    name: 'XAgent',
    description: 'An Autonomous AI Agent for complex task-solving with tool-use and human feedback',
    stars: 11200,
    forks: 1300,
    url: 'https://github.com/OpenBMB/XAgent',
    owner: 'OpenBMB',
    avatar: 'https://avatars.githubusercontent.com/u/89198042?v=4',
    language: 'Python',
    updated: '2024-05-01',
    topics: ['ai-agent', 'autonomous', 'tool-use', 'llm'],
    license: 'Apache-2.0'
  },
  {
    id: '12',
    name: 'ChatDev',
    description: 'Create customized software using natural language',
    stars: 20200,
    forks: 2100,
    url: 'https://github.com/OpenBMB/ChatDev',
    owner: 'OpenBMB',
    avatar: 'https://avatars.githubusercontent.com/u/89198042?v=4',
    language: 'Python',
    updated: '2024-04-25',
    topics: ['software-development', 'llm', 'ai-agent'],
    license: 'Apache-2.0'
  },
  {
    id: '13',
    name: 'MLC LLM',
    description: 'Run large language models locally on phones, laptops, and edge devices',
    stars: 14200,
    forks: 1600,
    url: 'https://github.com/mlc-ai/mlc-llm',
    owner: 'mlc-ai',
    avatar: 'https://avatars.githubusercontent.com/u/103401051?v=4',
    language: 'C++',
    updated: '2024-05-16',
    topics: ['llm', 'edge-computing', 'optimization'],
    license: 'Apache-2.0'
  },
  {
    id: '14',
    name: 'Llama.cpp',
    description: 'Port of Facebook\'s LLaMA model in C/C++',
    stars: 51300,
    forks: 7800,
    url: 'https://github.com/ggerganov/llama.cpp',
    owner: 'ggerganov',
    avatar: 'https://avatars.githubusercontent.com/u/1991296?v=4',
    language: 'C++',
    updated: '2024-05-21',
    topics: ['llm', 'ai', 'language-model', 'cpp'],
    license: 'MIT'
  },
  {
    id: '15',
    name: 'Ollama',
    description: 'Get up and running with Llama 2, Mistral, and other large language models locally',
    stars: 49200,
    forks: 3600,
    url: 'https://github.com/ollama/ollama',
    owner: 'ollama',
    avatar: 'https://avatars.githubusercontent.com/u/129885431?v=4',
    language: 'Go',
    updated: '2024-05-21',
    topics: ['llm', 'local', 'language-model', 'inference'],
    license: 'MIT'
  }
];

// Data store for user-submitted projects
let USER_SUBMITTED_PROJECTS: Agent[] = [];

// Combine all projects
const getAllProjects = () => [...REAL_PROJECTS, ...USER_SUBMITTED_PROJECTS];

class GitHubService {
  static fetchAgents(): Promise<Agent[]> {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(getAllProjects());
      }, 500);
    });
  }

  static searchAgents(query: string): Promise<Agent[]> {
    return new Promise((resolve) => {
      setTimeout(() => {
        const normalizedQuery = query.toLowerCase().trim();
        const results = getAllProjects().filter(agent => {
          const inName = agent.name.toLowerCase().includes(normalizedQuery);
          const inDescription = agent.description.toLowerCase().includes(normalizedQuery);
          const inTopics = agent.topics.some(topic => topic.toLowerCase().includes(normalizedQuery));
          return inName || inDescription || inTopics;
        });
        resolve(results);
      }, 300);
    });
  }

  static getLastUpdatedTimestamp(): string {
    return localStorage.getItem('lastAgentRefresh') || new Date().toISOString();
  }

  static formatLastUpdated(timestamp: string): string {
    if (!timestamp) return 'Never';
    
    const date = new Date(timestamp);
    
    // Check if date is valid
    if (isNaN(date.getTime())) return 'Unknown';
    
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  }

  static refreshAgentData(): Promise<{timestamp: string, agents: Agent[]}> {
    return new Promise((resolve) => {
      setTimeout(() => {
        const refreshedAgents = getAllProjects();
        const timestamp = new Date().toISOString();
        localStorage.setItem('lastAgentRefresh', timestamp);
        resolve({ timestamp, agents: refreshedAgents });
      }, 1000);
    });
  }

  static getTopAgentMcpProjects(): Promise<Agent[]> {
    return new Promise((resolve) => {
      setTimeout(() => {
        // Filter for projects explicitly related to AI Agents or MCP
        const agentMcpProjects = getAllProjects().filter(agent => {
          const topics = agent.topics.map(topic => topic.toLowerCase());
          const nameAndDesc = (agent.name + ' ' + agent.description).toLowerCase();
          return topics.some(t => t.includes('agent') || t.includes('mcp') || t.includes('autonomous')) || 
                 nameAndDesc.includes('agent') || nameAndDesc.includes('mcp') || nameAndDesc.includes('autonomous');
        });
        
        // Sort by stars descending
        const topProjects = [...agentMcpProjects]
          .sort((a, b) => b.stars - a.stars)
          .slice(0, 10);
          
        resolve(topProjects);
      }, 300);
    });
  }
  
  static addProjectFromGitHub(url: string): Promise<{success: boolean, error?: string, agent?: Agent}> {
    return new Promise((resolve) => {
      setTimeout(() => {
        try {
          // Validate URL first
          if (!url || !url.trim()) {
            resolve({
              success: false,
              error: 'URL is required'
            });
            return;
          }
          
          // Make sure the URL starts with http:// or https://
          if (!url.startsWith('http://') && !url.startsWith('https://')) {
            url = 'https://' + url;
          }
          
          // Extract owner and repo name from GitHub URL
          let urlObj: URL;
          try {
            urlObj = new URL(url);
          } catch (error) {
            resolve({
              success: false,
              error: 'Invalid URL format. Please provide a valid URL.'
            });
            return;
          }
          
          // Check if it's a GitHub URL
          if (!urlObj.hostname.includes('github.com')) {
            resolve({
              success: false,
              error: 'URL must be a GitHub repository URL'
            });
            return;
          }
          
          const pathParts = urlObj.pathname.split('/').filter(Boolean);
          
          if (pathParts.length < 2) {
            resolve({
              success: false,
              error: 'Invalid GitHub URL format. Please use https://github.com/owner/repo'
            });
            return;
          }
          
          const owner = pathParts[0];
          const repoName = pathParts[1];
          
          // Check if project already exists
          const existingProject = getAllProjects().find(
            project => project.url.toLowerCase() === url.toLowerCase() || 
                      (project.owner.toLowerCase() === owner.toLowerCase() && 
                       project.name.toLowerCase() === repoName.toLowerCase())
          );
          
          if (existingProject) {
            resolve({
              success: false,
              error: 'This project is already in the directory'
            });
            return;
          }
          
          // In a real implementation, we would fetch data from GitHub API
          // For this demo, we'll create a simulated project with the provided URL
          
          // Simulate checking if description contains 'AI agent' or 'MCP'
          // In real implementation, we would fetch repo description from GitHub API
          const randomDescriptions = [
            'An AI agent project for intelligent task automation',
            'MCP-based framework for autonomous agents',
            'Experimental AI agent for natural language processing',
            'Machine learning framework with agent capabilities',
            'AI multi-agent system for distributed problem solving'
          ];
          
          const description = randomDescriptions[Math.floor(Math.random() * randomDescriptions.length)];
          
          // Generate random stats for demonstration
          const stars = Math.floor(Math.random() * 5000);
          const forks = Math.floor(Math.random() * 1000);
          
          // Create new agent entry
          const newAgent: Agent = {
            id: `user-${Date.now()}`,
            name: repoName,
            description,
            stars,
            forks,
            url,
            owner,
            avatar: `https://github.com/${owner}.png`,
            language: ['JavaScript', 'TypeScript', 'Python', 'Go', 'Rust'][Math.floor(Math.random() * 5)],
            updated: new Date().toISOString(),
            topics: ['ai', 'agent', 'machine-learning', 'autonomous', 'mcp'].sort(() => Math.random() - 0.5).slice(0, 3),
            license: 'MIT'
          };
          
          // Add to user submitted projects
          USER_SUBMITTED_PROJECTS.push(newAgent);
          
          resolve({
            success: true,
            agent: newAgent
          });
        } catch (error) {
          console.error('Error adding project:', error);
          resolve({
            success: false,
            error: error instanceof Error ? `Failed to add project: ${error.message}` : 'Failed to add project. Please try again.'
          });
        }
      }, 800);
    });
  }
}

export { GitHubService };
