
import { Agent } from '../types';

// Sample data for initial render - will be replaced with API data
const SAMPLE_DATA: Agent[] = [
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
    topics: ['ai', 'agents', 'autonomous', 'gpt', 'openai']
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
    topics: ['ai', 'agi', 'autonomous-agents', 'python']
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
    topics: ['ai', 'web', 'gpt', 'agents', 'autonomous']
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
    topics: ['llm', 'ai', 'language-model', 'agents']
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
    topics: ['ai-agent', 'software-engineering', 'autonomous']
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
    topics: ['ai', 'agents', 'collaborative', 'framework']
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
    topics: ['agi', 'autonomous-agents', 'framework']
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
    topics: ['llm', 'rag', 'agents', 'nlp']
  }
];

export class GitHubService {
  // This would be replaced with an actual API call in production
  static async fetchAgents(): Promise<Agent[]> {
    // Simulate network request
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(SAMPLE_DATA);
      }, 800);
    });
  }

  static async searchAgents(query: string): Promise<Agent[]> {
    // Simulate network request with filtering
    return new Promise((resolve) => {
      setTimeout(() => {
        const filteredAgents = SAMPLE_DATA.filter(agent => 
          agent.name.toLowerCase().includes(query.toLowerCase()) || 
          agent.description.toLowerCase().includes(query.toLowerCase()) ||
          agent.topics.some(topic => topic.toLowerCase().includes(query.toLowerCase()))
        );
        resolve(filteredAgents);
      }, 400);
    });
  }
}
