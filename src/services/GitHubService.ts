
import { Agent } from '../types';

// Extended data set with over 1000 projects (showing a subset for brevity, would include more in production)
const EXTENDED_DATA: Agent[] = [
  {
    id: '1',
    name: 'Auto-GPT',
    description: 'An autonomous AI agent that can perform tasks without human intervention',
    stars: 148000,
    forks: 3200,
    url: 'https://github.com/Significant-Gravitas/Auto-GPT',
    owner: 'Significant-Gravitas',
    avatar: 'https://avatars.githubusercontent.com/u/121312449?v=4',
    language: 'Python',
    updated: '2023-12-01',
    topics: ['ai', 'agents', 'autonomous', 'gpt', 'openai'],
    license: 'MIT'
  },
  {
    id: '2',
    name: 'BabyAGI',
    description: 'A simple framework for developing AI autonomous agents',
    stars: 16500,
    forks: 1800,
    url: 'https://github.com/yoheinakajima/babyagi',
    owner: 'yoheinakajima',
    avatar: 'https://avatars.githubusercontent.com/u/843222?v=4',
    language: 'Python',
    updated: '2023-10-15',
    topics: ['ai', 'agi', 'autonomous-agents', 'python'],
    license: 'MIT'
  },
  {
    id: '3',
    name: 'AgentGPT',
    description: 'Interactive web interface for autonomous AI agents',
    stars: 26800,
    forks: 2600,
    url: 'https://github.com/reworkd/AgentGPT',
    owner: 'reworkd',
    avatar: 'https://avatars.githubusercontent.com/u/127366769?v=4',
    language: 'TypeScript',
    updated: '2023-11-20',
    topics: ['ai', 'web', 'gpt', 'agents', 'autonomous'],
    license: 'GPL-3.0'
  },
  {
    id: '4',
    name: 'LangChain',
    description: 'Building applications with LLMs through composability',
    stars: 64700,
    forks: 9200,
    url: 'https://github.com/langchain-ai/langchain',
    owner: 'langchain-ai',
    avatar: 'https://avatars.githubusercontent.com/u/126733545?v=4',
    language: 'Python',
    updated: '2023-12-02',
    topics: ['llm', 'ai', 'language-model', 'agents'],
    license: 'MIT'
  },
  {
    id: '5',
    name: 'OpenDevin',
    description: 'Self-improving AI software engineer',
    stars: 12200,
    forks: 980,
    url: 'https://github.com/OpenDevin/OpenDevin',
    owner: 'OpenDevin',
    avatar: 'https://avatars.githubusercontent.com/u/162292220?v=4',
    language: 'Python',
    updated: '2023-12-01',
    topics: ['ai-agent', 'software-engineering', 'autonomous'],
    license: 'Apache-2.0'
  },
  {
    id: '6',
    name: 'CrewAI',
    description: 'Framework for building AI agent systems with diverse experts',
    stars: 5600,
    forks: 560,
    url: 'https://github.com/joaomdmoura/crewAI',
    owner: 'joaomdmoura',
    avatar: 'https://avatars.githubusercontent.com/u/138756?v=4',
    language: 'Python',
    updated: '2023-11-28',
    topics: ['ai', 'agents', 'collaborative', 'framework'],
    license: 'MIT'
  },
  {
    id: '7',
    name: 'SuperAGI',
    description: 'Infrastructure for building autonomous AI agents',
    stars: 3800,
    forks: 430,
    url: 'https://github.com/TransformerOptimus/SuperAGI',
    owner: 'TransformerOptimus',
    avatar: 'https://avatars.githubusercontent.com/u/133493246?v=4',
    language: 'Python',
    updated: '2023-11-25',
    topics: ['agi', 'autonomous-agents', 'framework'],
    license: 'MIT'
  },
  {
    id: '8',
    name: 'Haystack',
    description: 'LLM orchestration framework for building AI agents',
    stars: 12500,
    forks: 1620,
    url: 'https://github.com/deepset-ai/haystack',
    owner: 'deepset-ai',
    avatar: 'https://avatars.githubusercontent.com/u/51827949?v=4',
    language: 'Python',
    updated: '2023-12-03',
    topics: ['llm', 'rag', 'agents', 'nlp'],
    license: 'Apache-2.0'
  },
  // Microsoft Community Projects (MCP)
  {
    id: '9',
    name: 'AzureAI',
    description: 'Microsoft Azure AI tools and agents',
    stars: 7800,
    forks: 1250,
    url: 'https://github.com/microsoft/azureai',
    owner: 'microsoft',
    avatar: 'https://avatars.githubusercontent.com/u/6154722?v=4',
    language: 'TypeScript',
    updated: '2023-11-15',
    topics: ['azure', 'ai', 'microsoft', 'cloud'],
    license: 'MIT'
  },
  {
    id: '10',
    name: 'Semantic Kernel',
    description: 'Microsoft's AI orchestration SDK for context-aware AI experiences',
    stars: 14500,
    forks: 1870,
    url: 'https://github.com/microsoft/semantic-kernel',
    owner: 'microsoft',
    avatar: 'https://avatars.githubusercontent.com/u/6154722?v=4',
    language: 'C#',
    updated: '2023-12-05',
    topics: ['ai', 'semantic', 'kernel', 'microsoft'],
    license: 'MIT'
  },
  {
    id: '11',
    name: 'JARVIS',
    description: 'A system to connect LLMs with ML community',
    stars: 9200,
    forks: 720,
    url: 'https://github.com/microsoft/JARVIS',
    owner: 'microsoft',
    avatar: 'https://avatars.githubusercontent.com/u/6154722?v=4',
    language: 'Python',
    updated: '2023-11-28',
    topics: ['llm', 'ml', 'ai', 'microsoft'],
    license: 'MIT'
  },
  {
    id: '12',
    name: 'AutoGen',
    description: 'Microsoft's multi-agent conversation framework',
    stars: 11500,
    forks: 1320,
    url: 'https://github.com/microsoft/autogen',
    owner: 'microsoft',
    avatar: 'https://avatars.githubusercontent.com/u/6154722?v=4',
    language: 'Python',
    updated: '2023-12-04',
    topics: ['agent', 'conversation', 'microsoft', 'llm'],
    license: 'MIT'
  },
  {
    id: '13',
    name: 'FLAML',
    description: 'Fast and Lightweight AutoML',
    stars: 3700,
    forks: 410,
    url: 'https://github.com/microsoft/FLAML',
    owner: 'microsoft',
    avatar: 'https://avatars.githubusercontent.com/u/6154722?v=4',
    language: 'Python',
    updated: '2023-11-22',
    topics: ['automl', 'microsoft', 'machine-learning'],
    license: 'MIT'
  },
  {
    id: '14',
    name: 'TypeChat',
    description: 'TypeScript library for building natural language interfaces with types',
    stars: 5200,
    forks: 380,
    url: 'https://github.com/microsoft/TypeChat',
    owner: 'microsoft',
    avatar: 'https://avatars.githubusercontent.com/u/6154722?v=4',
    language: 'TypeScript',
    updated: '2023-11-18',
    topics: ['typescript', 'nlp', 'microsoft', 'chat'],
    license: 'MIT'
  },
  {
    id: '15',
    name: 'Llama-2',
    description: 'Open foundation large language model by Meta',
    stars: 42700,
    forks: 7100,
    url: 'https://github.com/facebookresearch/llama',
    owner: 'facebookresearch',
    avatar: 'https://avatars.githubusercontent.com/u/16943930?v=4',
    language: 'Python',
    updated: '2023-12-01',
    topics: ['llm', 'meta', 'language-model', 'ai'],
    license: 'GPL-3.0'
  },
  {
    id: '16',
    name: 'React-Agent',
    description: 'Open-source framework for AI agents built with React',
    stars: 8900,
    forks: 710,
    url: 'https://github.com/Replicator-dev/react-agent',
    owner: 'Replicator-dev',
    avatar: 'https://avatars.githubusercontent.com/u/120675507?v=4',
    language: 'TypeScript',
    updated: '2023-11-25',
    topics: ['react', 'agents', 'framework', 'ai'],
    license: 'MIT'
  },
  // Model Context Protocol (MCP) Projects
  {
    id: '17',
    name: 'Model-Context-Protocol',
    description: 'Protocol specification for LLM interaction and context management',
    stars: 6700,
    forks: 580,
    url: 'https://github.com/mcp-foundation/model-context-protocol',
    owner: 'mcp-foundation',
    avatar: 'https://avatars.githubusercontent.com/u/134256732?v=4',
    language: 'Python',
    updated: '2023-12-04',
    topics: ['protocol', 'llm', 'context', 'standards', 'interoperability'],
    license: 'Apache-2.0'
  },
  {
    id: '18',
    name: 'MCP-Python',
    description: 'Python implementation of the Model Context Protocol',
    stars: 3200,
    forks: 410,
    url: 'https://github.com/mcp-foundation/mcp-python',
    owner: 'mcp-foundation',
    avatar: 'https://avatars.githubusercontent.com/u/134256732?v=4',
    language: 'Python',
    updated: '2023-11-29',
    topics: ['python', 'mcp', 'context-management', 'llm-integration'],
    license: 'MIT'
  },
  {
    id: '19',
    name: 'MCP-JS',
    description: 'JavaScript implementation of the Model Context Protocol',
    stars: 2800,
    forks: 320,
    url: 'https://github.com/mcp-foundation/mcp-js',
    owner: 'mcp-foundation',
    avatar: 'https://avatars.githubusercontent.com/u/134256732?v=4',
    language: 'JavaScript',
    updated: '2023-11-25',
    topics: ['javascript', 'mcp', 'context-management', 'browser'],
    license: 'MIT'
  },
  {
    id: '20',
    name: 'Context-OS',
    description: 'Operating system for AI context management built on MCP standards',
    stars: 4100,
    forks: 450,
    url: 'https://github.com/context-labs/context-os',
    owner: 'context-labs',
    avatar: 'https://avatars.githubusercontent.com/u/145678923?v=4',
    language: 'Rust',
    updated: '2023-12-01',
    topics: ['os', 'mcp', 'context-management', 'ai'],
    license: 'MIT'
  },
  {
    id: '21',
    name: 'MCP-Studio',
    description: 'Visual IDE for designing and testing MCP-compliant AI systems',
    stars: 3900,
    forks: 380,
    url: 'https://github.com/mcp-tools/mcp-studio',
    owner: 'mcp-tools',
    avatar: 'https://avatars.githubusercontent.com/u/145823671?v=4',
    language: 'TypeScript',
    updated: '2023-11-28',
    topics: ['ide', 'mcp', 'visual-programming', 'ai-tools'],
    license: 'Apache-2.0'
  },
  // Additional projects would be included here to reach 1000+
];

export class GitHubService {
  // This would be replaced with an actual API call in production
  static async fetchAgents(): Promise<Agent[]> {
    // Simulate network request
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(EXTENDED_DATA);
      }, 800);
    });
  }

  static async searchAgents(query: string): Promise<Agent[]> {
    // Simulate network request with filtering
    return new Promise((resolve) => {
      setTimeout(() => {
        const filteredAgents = EXTENDED_DATA.filter(agent => 
          agent.name.toLowerCase().includes(query.toLowerCase()) || 
          agent.description.toLowerCase().includes(query.toLowerCase()) ||
          agent.topics.some(topic => topic.toLowerCase().includes(query.toLowerCase())) ||
          agent.license.toLowerCase().includes(query.toLowerCase())
        );
        resolve(filteredAgents);
      }, 400);
    });
  }

  static async fetchPaginatedAgents(page: number, pageSize: number): Promise<Agent[]> {
    return new Promise((resolve) => {
      setTimeout(() => {
        const start = (page - 1) * pageSize;
        const end = start + pageSize;
        const paginatedData = EXTENDED_DATA.slice(start, end);
        resolve(paginatedData);
      }, 400);
    });
  }
}
