import { Agent } from '../types';

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
    updated: '2024-05-15',
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
    updated: '2024-04-20',
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
    updated: '2024-05-10',
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
    updated: '2024-05-18',
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
    updated: '2024-05-17',
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
    updated: '2024-05-12',
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
    updated: '2024-05-11',
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
    updated: '2024-05-19',
    topics: ['llm', 'rag', 'agents', 'nlp'],
    license: 'Apache-2.0'
  },
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
    updated: '2024-05-05',
    topics: ['azure', 'ai', 'microsoft', 'cloud'],
    license: 'MIT'
  },
  {
    id: '10',
    name: 'Semantic Kernel',
    description: 'Microsoft\'s AI orchestration SDK for context-aware AI experiences',
    stars: 14500,
    forks: 1870,
    url: 'https://github.com/microsoft/semantic-kernel',
    owner: 'microsoft',
    avatar: 'https://avatars.githubusercontent.com/u/6154722?v=4',
    language: 'C#',
    updated: '2024-05-21',
    topics: ['ai', 'semantic', 'kernel', 'microsoft'],
    license: 'MIT'
  }
];

for (let i = 11; i <= 210; i++) {
  EXTENDED_DATA.push({
    id: i.toString(),
    name: `AI Agent Project ${i}`,
    description: `An innovative AI agent project #${i} with advanced capabilities for autonomous task performance`,
    stars: Math.floor(Math.random() * 10000) + 500,
    forks: Math.floor(Math.random() * 1000) + 50,
    url: `https://github.com/org-${i}/project-${i}`,
    owner: `org-${i}`,
    avatar: `https://avatars.githubusercontent.com/u/${100000 + i}?v=4`,
    language: ['Python', 'TypeScript', 'JavaScript', 'C++', 'Rust', 'Go'][Math.floor(Math.random() * 6)],
    updated: `2024-${Math.floor(Math.random() * 5) + 1}-${Math.floor(Math.random() * 28) + 1}`,
    topics: ['ai-agent', 'llm', 'machine-learning', 'mcp', 'nlp', 'rag', 'autonomous'].slice(0, Math.floor(Math.random() * 4) + 2),
    license: ['MIT', 'Apache-2.0', 'GPL-3.0'][Math.floor(Math.random() * 3)]
  });
}

class GitHubService {
  static fetchAgents(): Promise<Agent[]> {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(EXTENDED_DATA);
      }, 500);
    });
  }

  static searchAgents(query: string): Promise<Agent[]> {
    return new Promise((resolve) => {
      setTimeout(() => {
        const normalizedQuery = query.toLowerCase().trim();
        const results = EXTENDED_DATA.filter(agent => {
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
        const refreshedAgents = [...EXTENDED_DATA];
        const timestamp = new Date().toISOString();
        localStorage.setItem('lastAgentRefresh', timestamp);
        resolve({ timestamp, agents: refreshedAgents });
      }, 1000);
    });
  }

  static getTopAgentMcpProjects(): Promise<Agent[]> {
    return new Promise((resolve) => {
      setTimeout(() => {
        const agentMcpProjects = EXTENDED_DATA.filter(agent => {
          const topics = agent.topics.map(topic => topic.toLowerCase());
          const nameAndDesc = (agent.name + ' ' + agent.description).toLowerCase();
          return topics.some(t => t.includes('agent') || t.includes('mcp')) || 
                 nameAndDesc.includes('agent') || nameAndDesc.includes('mcp');
        });
        
        const topProjects = [...agentMcpProjects]
          .sort((a, b) => b.stars - a.stars)
          .slice(0, 10);
          
        resolve(topProjects);
      }, 300);
    });
  }
}

export { GitHubService };
