
import { Agent } from '../types';

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
    name: 'LLaMA',
    description: 'Meta\'s collection of foundation language models',
    stars: 54900,
    forks: 7900,
    url: 'https://github.com/facebookresearch/llama',
    owner: 'facebookresearch',
    avatar: 'https://avatars.githubusercontent.com/u/16943930?v=4',
    language: 'Python',
    updated: '2024-05-05',
    topics: ['llm', 'ai', 'language-model', 'meta'],
    license: 'Meta AI LLAMA 2 COMMUNITY LICENSE AGREEMENT'
  },
  {
    id: '10',
    name: 'Semantic Kernel',
    description: 'Microsoft\'s open-source orchestration SDK for AI models',
    stars: 17100,
    forks: 2200,
    url: 'https://github.com/microsoft/semantic-kernel',
    owner: 'microsoft',
    avatar: 'https://avatars.githubusercontent.com/u/6154722?v=4',
    language: 'C#',
    updated: '2024-05-21',
    topics: ['ai', 'semantic', 'kernel', 'microsoft'],
    license: 'MIT'
  },
  {
    id: '11',
    name: 'GPT4All',
    description: 'Open-source assistant-style large language models that run locally on CPU',
    stars: 60100,
    forks: 6700,
    url: 'https://github.com/nomic-ai/gpt4all',
    owner: 'nomic-ai',
    avatar: 'https://avatars.githubusercontent.com/u/99795015?v=4',
    language: 'C++',
    updated: '2024-05-15',
    topics: ['llm', 'ai', 'gpt', 'language-model'],
    license: 'MIT'
  },
  {
    id: '12',
    name: 'LiteLLM',
    description: 'Call all LLM APIs using the OpenAI format',
    stars: 5300,
    forks: 730,
    url: 'https://github.com/BerriAI/litellm',
    owner: 'BerriAI',
    avatar: 'https://avatars.githubusercontent.com/u/132539786?v=4',
    language: 'Python',
    updated: '2024-05-18',
    topics: ['llm', 'ai', 'openai', 'api'],
    license: 'MIT'
  },
  {
    id: '13',
    name: 'llama.cpp',
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
    id: '14',
    name: 'MiniAGI',
    description: 'A minimal autonomous agent that can perform web research via search engines',
    stars: 730,
    forks: 120,
    url: 'https://github.com/muellerberndt/mini-agi',
    owner: 'muellerberndt',
    avatar: 'https://avatars.githubusercontent.com/u/559386?v=4',
    language: 'Python',
    updated: '2024-03-10',
    topics: ['ai', 'agent', 'autonomous', 'research'],
    license: 'MIT'
  },
  {
    id: '15',
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
    id: '16',
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
    id: '17',
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
    id: '18',
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
    id: '19',
    name: 'LocalAGI',
    description: 'Personal AGI that runs 100% locally',
    stars: 3500,
    forks: 350,
    url: 'https://github.com/EmbraceAGI/LocalAGI',
    owner: 'EmbraceAGI',
    avatar: 'https://avatars.githubusercontent.com/u/129526357?v=4',
    language: 'Python',
    updated: '2024-04-10',
    topics: ['agi', 'local', 'privacy', 'autonomous-agents'],
    license: 'MIT'
  },
  {
    id: '20',
    name: 'HuggingFace Transformers',
    description: 'State-of-the-art Machine Learning for Pytorch, TensorFlow, and JAX',
    stars: 120700,
    forks: 24300,
    url: 'https://github.com/huggingface/transformers',
    owner: 'huggingface',
    avatar: 'https://avatars.githubusercontent.com/u/25720743?v=4',
    language: 'Python',
    updated: '2024-05-21',
    topics: ['nlp', 'machine-learning', 'transformers', 'ai'],
    license: 'Apache-2.0'
  }
];

// Generate additional real-like AI projects with randomized but plausible values
const ADDITIONAL_PROJECTS: Agent[] = [
  {
    id: '21',
    name: 'OpenAI Assistants',
    description: 'Tools for building AI assistants with OpenAI models',
    stars: 12700,
    forks: 1800,
    url: 'https://github.com/openai/openai-python',
    owner: 'openai',
    avatar: 'https://avatars.githubusercontent.com/u/14957082?v=4',
    language: 'Python',
    updated: '2024-05-20',
    topics: ['ai', 'assistants', 'openai', 'api'],
    license: 'MIT'
  },
  {
    id: '22',
    name: 'MistralAI',
    description: 'The official Mistral AI Python client library',
    stars: 3200,
    forks: 340,
    url: 'https://github.com/mistralai/mistral-python',
    owner: 'mistralai',
    avatar: 'https://avatars.githubusercontent.com/u/140400344?v=4',
    language: 'Python',
    updated: '2024-05-18',
    topics: ['llm', 'mistral', 'ai', 'language-model'],
    license: 'Apache-2.0'
  },
  {
    id: '23',
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
  },
  {
    id: '24',
    name: 'LM Studio',
    description: 'Run local LLMs on consumer hardware',
    stars: 7300,
    forks: 480,
    url: 'https://github.com/lmstudio-ai/lmstudio',
    owner: 'lmstudio-ai',
    avatar: 'https://avatars.githubusercontent.com/u/129783575?v=4',
    language: 'TypeScript',
    updated: '2024-05-15',
    topics: ['llm', 'studio', 'local', 'inference'],
    license: 'MIT'
  },
  {
    id: '25',
    name: 'PrivateGPT',
    description: 'Interact with your documents using the power of LLMs, 100% privately',
    stars: 48200,
    forks: 6500,
    url: 'https://github.com/imartinez/privateGPT',
    owner: 'imartinez',
    avatar: 'https://avatars.githubusercontent.com/u/123928?v=4',
    language: 'Python',
    updated: '2024-05-16',
    topics: ['privacy', 'llm', 'rag', 'document-processing'],
    license: 'Apache-2.0'
  },
];

// Combine real projects with additional projects
const ALL_PROJECTS = [...REAL_PROJECTS, ...ADDITIONAL_PROJECTS];

class GitHubService {
  static fetchAgents(): Promise<Agent[]> {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(ALL_PROJECTS);
      }, 500);
    });
  }

  static searchAgents(query: string): Promise<Agent[]> {
    return new Promise((resolve) => {
      setTimeout(() => {
        const normalizedQuery = query.toLowerCase().trim();
        const results = ALL_PROJECTS.filter(agent => {
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
        const refreshedAgents = [...ALL_PROJECTS];
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
        const agentMcpProjects = ALL_PROJECTS.filter(agent => {
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
}

export { GitHubService };
