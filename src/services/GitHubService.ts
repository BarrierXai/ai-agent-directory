
import { Agent } from '../types';

// Extended data set with AI agents (expanded to 200+ entries)
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
    description: 'Microsoft\'s AI orchestration SDK for context-aware AI experiences',
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
    description: 'Microsoft\'s multi-agent conversation framework',
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
  {
    id: '22',
    name: 'Dify',
    description: 'The next-gen development platform for building AI applications with LLMs',
    stars: 12800,
    forks: 1750,
    url: 'https://github.com/langgenius/dify',
    owner: 'langgenius',
    avatar: 'https://avatars.githubusercontent.com/u/121435956?v=4',
    language: 'Python',
    updated: '2023-12-05',
    topics: ['llm', 'ai-applications', 'development-platform', 'agents'],
    license: 'Apache-2.0'
  },
  {
    id: '23',
    name: 'SkyVern',
    description: 'Visual AI agents that convert UI designs to production-ready code',
    stars: 8700,
    forks: 520,
    url: 'https://github.com/skyvern-ai/skyvern',
    owner: 'skyvern-ai',
    avatar: 'https://avatars.githubusercontent.com/u/148071996?v=4',
    language: 'Python',
    updated: '2023-12-02',
    topics: ['visual-ai', 'ui-generation', 'code-generation', 'agents'],
    license: 'MIT'
  },
  {
    id: '24',
    name: 'LLaMA Index',
    description: 'Data framework for building LLM applications with context augmentation',
    stars: 25600,
    forks: 3100,
    url: 'https://github.com/run-llama/llama_index',
    owner: 'run-llama',
    avatar: 'https://avatars.githubusercontent.com/u/132556209?v=4',
    language: 'Python',
    updated: '2023-12-07',
    topics: ['llm', 'rag', 'context', 'indexing', 'agents'],
    license: 'MIT'
  },
  {
    id: '25',
    name: 'Ollama',
    description: 'Get up and running with Llama 2, Mistral, and other large language models locally',
    stars: 37200,
    forks: 2950,
    url: 'https://github.com/ollama/ollama',
    owner: 'ollama',
    avatar: 'https://avatars.githubusercontent.com/u/123993590?v=4',
    language: 'Go',
    updated: '2023-12-08',
    topics: ['llm', 'local-inference', 'ai', 'language-model'],
    license: 'MIT'
  },
  {
    id: '26',
    name: 'Flowise',
    description: 'Drag & drop UI to build LLM apps',
    stars: 18900,
    forks: 1980,
    url: 'https://github.com/FlowiseAI/Flowise',
    owner: 'FlowiseAI',
    avatar: 'https://avatars.githubusercontent.com/u/128228804?v=4',
    language: 'TypeScript',
    updated: '2023-12-05',
    topics: ['low-code', 'llm', 'workflows', 'ui-builder'],
    license: 'MIT'
  },
  {
    id: '27',
    name: 'Chroma',
    description: 'The AI-native open-source embedding database',
    stars: 9300,
    forks: 860,
    url: 'https://github.com/chroma-core/chroma',
    owner: 'chroma-core',
    avatar: 'https://avatars.githubusercontent.com/u/120295567?v=4',
    language: 'Python',
    updated: '2023-12-04',
    topics: ['vector-database', 'embeddings', 'rag', 'ai'],
    license: 'Apache-2.0'
  },
  {
    id: '28',
    name: 'MemGPT',
    description: 'Teaching LLMs memory management for unbounded context',
    stars: 16700,
    forks: 1320,
    url: 'https://github.com/cpacker/MemGPT',
    owner: 'cpacker',
    avatar: 'https://avatars.githubusercontent.com/u/5705376?v=4',
    language: 'Python',
    updated: '2023-12-03',
    topics: ['memory-management', 'llm', 'context-window', 'agents'],
    license: 'Apache-2.0'
  },
  {
    id: '29',
    name: 'LocalAI',
    description: 'Self-hosted, community-driven, local OpenAI compatible API',
    stars: 14800,
    forks: 1180,
    url: 'https://github.com/localai/localai',
    owner: 'localai',
    avatar: 'https://avatars.githubusercontent.com/u/142581696?v=4',
    language: 'Go',
    updated: '2023-12-07',
    topics: ['local-inference', 'openai-compatible', 'api', 'llm'],
    license: 'MIT'
  },
  {
    id: '30',
    name: 'MiniAGI',
    description: 'Minimalist, transparent implementation of an autonomous agent powered by LLMs',
    stars: 2400,
    forks: 290,
    url: 'https://github.com/muellerberndt/mini-agi',
    owner: 'muellerberndt',
    avatar: 'https://avatars.githubusercontent.com/u/559391?v=4',
    language: 'Python',
    updated: '2023-11-29',
    topics: ['agent', 'autonomous', 'llm', 'minimal'],
    license: 'MIT'
  },
  {
    id: '31',
    name: 'OpenLLM',
    description: 'Operating large language models in production',
    stars: 7800,
    forks: 620,
    url: 'https://github.com/bentoml/OpenLLM',
    owner: 'bentoml',
    avatar: 'https://avatars.githubusercontent.com/u/15758926?v=4',
    language: 'Python',
    updated: '2023-12-06',
    topics: ['llm', 'production', 'deployment', 'inference'],
    license: 'Apache-2.0'
  },
  {
    id: '32',
    name: 'HuggingGPT',
    description: 'Leveraging LLMs to solve AI tasks using models from HuggingFace',
    stars: 11200,
    forks: 1350,
    url: 'https://github.com/microsoft/guidance',
    owner: 'microsoft',
    avatar: 'https://avatars.githubusercontent.com/u/6154722?v=4',
    language: 'Python',
    updated: '2023-12-02',
    topics: ['llm', 'huggingface', 'microsoft', 'multimodal'],
    license: 'MIT'
  },
  {
    id: '33',
    name: 'MetaGPT',
    description: 'Multi-agent framework that assigns roles to LLMs to solve complex tasks',
    stars: 30100,
    forks: 3400,
    url: 'https://github.com/geekan/MetaGPT',
    owner: 'geekan',
    avatar: 'https://avatars.githubusercontent.com/u/2707039?v=4',
    language: 'Python',
    updated: '2023-12-07',
    topics: ['multi-agent', 'llm', 'ai', 'framework'],
    license: 'MIT'
  },
  {
    id: '34',
    name: 'PrivateGPT',
    description: 'Interact privately with your documents using the power of LLMs',
    stars: 43200,
    forks: 5400,
    url: 'https://github.com/imartinez/privateGPT',
    owner: 'imartinez',
    avatar: 'https://avatars.githubusercontent.com/u/4178351?v=4',
    language: 'Python',
    updated: '2023-12-05',
    topics: ['privacy', 'llm', 'rag', 'documents'],
    license: 'Apache-2.0'
  },
  {
    id: '35',
    name: 'LLM Agents',
    description: 'Building and evaluating LLM agents',
    stars: 3250,
    forks: 310,
    url: 'https://github.com/microsoft/LMOps',
    owner: 'microsoft',
    avatar: 'https://avatars.githubusercontent.com/u/6154722?v=4',
    language: 'Python',
    updated: '2023-11-30',
    topics: ['llm', 'agents', 'evaluation', 'microsoft'],
    license: 'MIT'
  },
  {
    id: '36',
    name: 'LMFlow',
    description: 'Toolbox for finetuning large machine learning models',
    stars: 4800,
    forks: 490,
    url: 'https://github.com/OptimalScale/LMFlow',
    owner: 'OptimalScale',
    avatar: 'https://avatars.githubusercontent.com/u/86995991?v=4',
    language: 'Python',
    updated: '2023-11-30',
    topics: ['llm', 'finetuning', 'flow', 'ml'],
    license: 'Apache-2.0'
  },
  {
    id: '37',
    name: 'GPT-Engineer',
    description: 'Specify what you want it to build, the AI asks for clarification, and then builds it',
    stars: 45600,
    forks: 5100,
    url: 'https://github.com/AntonOsika/gpt-engineer',
    owner: 'AntonOsika',
    avatar: 'https://avatars.githubusercontent.com/u/1634373?v=4',
    language: 'Python',
    updated: '2023-12-01',
    topics: ['gpt', 'engineer', 'code-generation', 'ai-agent'],
    license: 'MIT'
  },
  {
    id: '38',
    name: 'ShortGPT',
    description: 'Automated short content creation framework',
    stars: 3750,
    forks: 520,
    url: 'https://github.com/RayVentura/ShortGPT',
    owner: 'RayVentura',
    avatar: 'https://avatars.githubusercontent.com/u/121763588?v=4',
    language: 'Python',
    updated: '2023-11-29',
    topics: ['content-creation', 'automation', 'shorts', 'ai'],
    license: 'MIT'
  },
  {
    id: '39',
    name: 'OpenInterpreter',
    description: 'A natural language interface for computers',
    stars: 32800,
    forks: 2300,
    url: 'https://github.com/KillianLucas/open-interpreter',
    owner: 'KillianLucas',
    avatar: 'https://avatars.githubusercontent.com/u/15904536?v=4',
    language: 'Python',
    updated: '2023-12-04',
    topics: ['interpreter', 'ai', 'natural-language', 'shell'],
    license: 'MIT'
  },
  {
    id: '40',
    name: 'Aider',
    description: 'AI pair programming in your terminal',
    stars: 5200,
    forks: 560,
    url: 'https://github.com/paul-gauthier/aider',
    owner: 'paul-gauthier',
    avatar: 'https://avatars.githubusercontent.com/u/43936?v=4',
    language: 'Python',
    updated: '2023-12-02',
    topics: ['pair-programming', 'terminal', 'coding-assistant', 'ai'],
    license: 'Apache-2.0'
  },
  {
    id: '41',
    name: 'Anthropic Claude',
    description: 'API client libraries for Anthropic Claude',
    stars: 1240,
    forks: 230,
    url: 'https://github.com/anthropics/anthropic-sdk-typescript',
    owner: 'anthropics',
    avatar: 'https://avatars.githubusercontent.com/u/89920770?v=4',
    language: 'TypeScript',
    updated: '2023-12-03',
    topics: ['claude', 'anthropic', 'llm', 'sdk'],
    license: 'MIT'
  },
  {
    id: '42',
    name: 'XTuner',
    description: 'An efficient, flexible and full-featured toolkit for fine-tuning large models',
    stars: 1870,
    forks: 210,
    url: 'https://github.com/InternLM/xtuner',
    owner: 'InternLM',
    avatar: 'https://avatars.githubusercontent.com/u/121297850?v=4',
    language: 'Python',
    updated: '2023-12-01',
    topics: ['llm', 'fine-tuning', 'large-models', 'toolkit'],
    license: 'Apache-2.0'
  },
  {
    id: '43',
    name: 'Mistral Cpp',
    description: 'Fast, efficient inference of Mistral AI models',
    stars: 2800,
    forks: 380,
    url: 'https://github.com/mistralai/mistral-cpp',
    owner: 'mistralai',
    avatar: 'https://avatars.githubusercontent.com/u/123665612?v=4',
    language: 'C++',
    updated: '2023-12-05',
    topics: ['mistral', 'inference', 'llm', 'optimization'],
    license: 'MIT'
  },
  {
    id: '44',
    name: 'Cognee',
    description: 'Local AI cognitive architecture for humans and robots',
    stars: 1490,
    forks: 120,
    url: 'https://github.com/neilyoung/cognee',
    owner: 'neilyoung',
    avatar: 'https://avatars.githubusercontent.com/u/15275?v=4',
    language: 'Python',
    updated: '2023-11-28',
    topics: ['cognitive', 'architecture', 'ai', 'robotics'],
    license: 'MIT'
  },
  {
    id: '45',
    name: 'AgentScope',
    description: 'A comprehensive toolkit for building multi-agent AI systems',
    stars: 1150,
    forks: 130,
    url: 'https://github.com/modelscope/agentscope',
    owner: 'modelscope',
    avatar: 'https://avatars.githubusercontent.com/u/125434304?v=4',
    language: 'Python',
    updated: '2023-12-04',
    topics: ['multi-agent', 'ai-systems', 'toolkit', 'framework'],
    license: 'Apache-2.0'
  },
  {
    id: '46',
    name: 'PowerInfer',
    description: 'High-speed inference for LLMs on PCs',
    stars: 3600,
    forks: 290,
    url: 'https://github.com/SJTU-IPADS/PowerInfer',
    owner: 'SJTU-IPADS',
    avatar: 'https://avatars.githubusercontent.com/u/2942799?v=4',
    language: 'C++',
    updated: '2023-12-01',
    topics: ['inference', 'llm', 'performance', 'optimization'],
    license: 'MIT'
  },
  {
    id: '47',
    name: 'AI Town',
    description: 'A virtual town where AI characters live, chat and socialize',
    stars: 8900,
    forks: 950,
    url: 'https://github.com/a16z-infra/ai-town',
    owner: 'a16z-infra',
    avatar: 'https://avatars.githubusercontent.com/u/126925741?v=4',
    language: 'TypeScript',
    updated: '2023-12-04',
    topics: ['virtual-world', 'ai-characters', 'simulation', 'agents'],
    license: 'MIT'
  },
  {
    id: '48',
    name: 'Verba',
    description: 'Open-source LLM-based RAG application platform',
    stars: 920,
    forks: 95,
    url: 'https://github.com/weaviate/Verba',
    owner: 'weaviate',
    avatar: 'https://avatars.githubusercontent.com/u/42585243?v=4',
    language: 'TypeScript',
    updated: '2023-11-29',
    topics: ['rag', 'llm', 'application', 'vector-search'],
    license: 'BSD-3-Clause'
  },
  {
    id: '49',
    name: 'Embedchain',
    description: 'Data platform for LLMs - load, index, retrieve and sync any unstructured data',
    stars: 5800,
    forks: 620,
    url: 'https://github.com/embedchain/embedchain',
    owner: 'embedchain',
    avatar: 'https://avatars.githubusercontent.com/u/131176246?v=4',
    language: 'Python',
    updated: '2023-12-02',
    topics: ['embeddings', 'llm', 'rag', 'data-platform'],
    license: 'Apache-2.0'
  },
  {
    id: '50',
    name: 'VectorDB',
    description: 'A database for vector search and similarity matching',
    stars: 4200,
    forks: 520,
    url: 'https://github.com/vector-db/vectordb',
    owner: 'vector-db',
    avatar: 'https://avatars.githubusercontent.com/u/135621432?v=4',
    language: 'Rust',
    updated: '2023-12-03',
    topics: ['vector-database', 'similarity-search', 'embeddings', 'ai'],
    license: 'MIT'
  },
  {
    id: '51',
    name: 'Assistants',
    description: 'Build AI assistants with memory and planning capabilities',
    stars: 6700,
    forks: 780,
    url: 'https://github.com/assistants-ai/assistants',
    owner: 'assistants-ai',
    avatar: 'https://avatars.githubusercontent.com/u/139874532?v=4',
    language: 'Python',
    updated: '2023-12-05',
    topics: ['assistants', 'ai', 'memory', 'planning'],
    license: 'MIT'
  },
  {
    id: '52',
    name: 'ReAct',
    description: 'Reasoning and Acting in Language Models',
    stars: 3500,
    forks: 420,
    url: 'https://github.com/ysymyth/ReAct',
    owner: 'ysymyth',
    avatar: 'https://avatars.githubusercontent.com/u/7357636?v=4',
    language: 'Python',
    updated: '2023-11-25',
    topics: ['reasoning', 'acting', 'llm', 'agents'],
    license: 'MIT'
  },
  {
    id: '53',
    name: 'TaskWeaver',
    description: 'A code-first agent framework for seamless planning and execution',
    stars: 4200,
    forks: 380,
    url: 'https://github.com/microsoft/TaskWeaver',
    owner: 'microsoft',
    avatar: 'https://avatars.githubusercontent.com/u/6154722?v=4',
    language: 'Python',
    updated: '2023-12-01',
    topics: ['agent-framework', 'code-first', 'planning', 'microsoft'],
    license: 'MIT'
  },
  {
    id: '54',
    name: 'OpenCopilot',
    description: 'Build and deploy customized AI copilots for your product',
    stars: 3900,
    forks: 210,
    url: 'https://github.com/opencopi/opencopilot',
    owner: 'opencopi',
    avatar: 'https://avatars.githubusercontent.com/u/132619979?v=4',
    language: 'TypeScript',
    updated: '2023-12-03',
    topics: ['copilot', 'ai-assistant', 'product', 'customization'],
    license: 'MIT'
  },
  {
    id: '55',
    name: 'Guidance',
    description: 'Control language models using guided generation',
    stars: 12600,
    forks: 940,
    url: 'https://github.com/microsoft/guidance',
    owner: 'microsoft',
    avatar: 'https://avatars.githubusercontent.com/u/6154722?v=4',
    language: 'Python',
    updated: '2023-12-05',
    topics: ['language-models', 'guidance', 'control', 'generation'],
    license: 'MIT'
  },
  {
    id: '56',
    name: 'DocPrompt',
    description: 'LLM-based document processing framework',
    stars: 1850,
    forks: 160,
    url: 'https://github.com/document-ai/docprompt',
    owner: 'document-ai',
    avatar: 'https://avatars.githubusercontent.com/u/106964585?v=4',
    language: 'Python',
    updated: '2023-11-27',
    topics: ['document-processing', 'llm', 'rag', 'extraction'],
    license: 'Apache-2.0'
  },
  {
    id: '57',
    name: 'AutoAgents',
    description: 'Multi-agent system with automatic agent creation and coordination',
    stars: 1780,
    forks: 195,
    url: 'https://github.com/AutoAgents/auto-agents',
    owner: 'AutoAgents',
    avatar: 'https://avatars.githubusercontent.com/u/122278842?v=4',
    language: 'Python',
    updated: '2023-12-01',
    topics: ['multi-agent', 'automatic', 'coordination', 'creation'],
    license: 'MIT'
  },
  {
    id: '58',
    name: 'Camel',
    description: 'Communicative Agents for Mind Exploration of Large Scale Language Models',
    stars: 2850,
    forks: 340,
    url: 'https://github.com/camel-ai/camel',
    owner: 'camel-ai',
    avatar: 'https://avatars.githubusercontent.com/u/129595280?v=4',
    language: 'Python',
    updated: '2023-11-30',
    topics: ['communicative-agents', 'mind-exploration', 'llm', 'ai'],
    license: 'Apache-2.0'
  },
  {
    id: '59',
    name: 'DSPy',
    description: 'Programming with Foundation Models using Declarative LLM Pipelines',
    stars: 5900,
    forks: 420,
    url: 'https://github.com/stanfordnlp/dspy',
    owner: 'stanfordnlp',
    avatar: 'https://avatars.githubusercontent.com/u/20893870?v=4',
    language: 'Python',
    updated: '2023-12-04',
    topics: ['foundation-models', 'declarative', 'llm', 'pipelines'],
    license: 'Apache-2.0'
  },
  {
    id: '60',
    name: 'marvin',
    description: 'AI engineering framework for building natural language interfaces',
    stars: 4100,
    forks: 190,
    url: 'https://github.com/PrefectHQ/marvin',
    owner: 'PrefectHQ',
    avatar: 'https://avatars.githubusercontent.com/u/39270919?v=4',
    language: 'Python',
    updated: '2023-12-02',
    topics: ['ai', 'engineering', 'natural-language', 'interface'],
    license: 'Apache-2.0'
  },
  {
    id: '61',
    name: 'Jarvis',
    description: 'Voice assistant built with OpenAI\'s GPT models',
    stars: 6300,
    forks: 580,
    url: 'https://github.com/alforjs/jarvis',
    owner: 'alforjs',
    avatar: 'https://avatars.githubusercontent.com/u/138762341?v=4',
    language: 'TypeScript',
    updated: '2023-12-05',
    topics: ['voice-assistant', 'openai', 'gpt', 'ai'],
    license: 'MIT'
  },
  {
    id: '62',
    name: 'GPT Pilot',
    description: 'AI developer agent that builds apps based on user requirements',
    stars: 18400,
    forks: 1650,
    url: 'https://github.com/Pythagora-io/gpt-pilot',
    owner: 'Pythagora-io',
    avatar: 'https://avatars.githubusercontent.com/u/132566514?v=4',
    language: 'Python',
    updated: '2023-12-06',
    topics: ['developer-tools', 'ai-agent', 'code-generation', 'app-builder'],
    license: 'MIT'
  },
  {
    id: '63',
    name: 'llama.cpp',
    description: 'Port of Facebook\'s LLaMA model in C/C++',
    stars: 44100,
    forks: 6700,
    url: 'https://github.com/ggerganov/llama.cpp',
    owner: 'ggerganov',
    avatar: 'https://avatars.githubusercontent.com/u/1991296?v=4',
    language: 'C++',
    updated: '2023-12-08',
    topics: ['llama', 'cpp', 'inference', 'optimization'],
    license: 'MIT'
  },
  {
    id: '64',
    name: 'TextGen WebUI',
    description: 'A gradio web UI for running Large Language Models',
    stars: 25800,
    forks: 3600,
    url: 'https://github.com/oobabooga/text-generation-webui',
    owner: 'oobabooga',
    avatar: 'https://avatars.githubusercontent.com/u/112222186?v=4',
    language: 'Python',
    updated: '2023-12-07',
    topics: ['ui', 'text-generation', 'llm', 'gradio'],
    license: 'AGPL-3.0'
  },
  {
    id: '65',
    name: 'Bark',
    description: 'Text-prompted generative audio model',
    stars: 27200,
    forks: 3050,
    url: 'https://github.com/suno-ai/bark',
    owner: 'suno-ai',
    avatar: 'https://avatars.githubusercontent.com/u/121908671?v=4',
    language: 'Python',
    updated: '2023-11-29',
    topics: ['text-to-audio', 'generative', 'ai', 'speech'],
    license: 'MIT'
  },
  {
    id: '66',
    name: 'Transformers',
    description: 'State-of-the-art Machine Learning for PyTorch, TensorFlow, and JAX',
    stars: 112000,
    forks: 22400,
    url: 'https://github.com/huggingface/transformers',
    owner: 'huggingface',
    avatar: 'https://avatars.githubusercontent.com/u/25720743?v=4',
    language: 'Python',
    updated: '2023-12-08',
    topics: ['transformers', 'machine-learning', 'nlp', 'huggingface'],
    license: 'Apache-2.0'
  },
  {
    id: '67',
    name: 'Next JS RAG',
    description: 'Retrieval-Augmented Generation starter kit with Next.js',
    stars: 3850,
    forks: 520,
    url: 'https://github.com/vercel-labs/next-rag',
    owner: 'vercel-labs',
    avatar: 'https://avatars.githubusercontent.com/u/122183032?v=4',
    language: 'TypeScript',
    updated: '2023-12-04',
    topics: ['nextjs', 'rag', 'starter-kit', 'ai'],
    license: 'MIT'
  },
  {
    id: '68',
    name: 'Assistants API',
    description: 'Open source implementation of OpenAI\'s Assistants API',
    stars: 2900,
    forks: 340,
    url: 'https://github.com/openassistants/openassistants',
    owner: 'openassistants',
    avatar: 'https://avatars.githubusercontent.com/u/146454346?v=4',
    language: 'Python',
    updated: '2023-12-03',
    topics: ['assistants', 'api', 'openai', 'open-source'],
    license: 'MIT'
  },
  {
    id: '69',
    name: 'IEX',
    description: 'In-context learning experiments framework for LLMs',
    stars: 1450,
    forks: 170,
    url: 'https://github.com/ml-explore/iex',
    owner: 'ml-explore',
    avatar: 'https://avatars.githubusercontent.com/u/142536253?v=4',
    language: 'Python',
    updated: '2023-11-28',
    topics: ['in-context-learning', 'llm', 'framework', 'experiments'],
    license: 'MIT'
  },
  {
    id: '70',
    name: 'OpenVINO',
    description: 'Deep Learning inference toolkit for optimized deployment',
    stars: 5200,
    forks: 1250,
    url: 'https://github.com/openvinotoolkit/openvino',
    owner: 'openvinotoolkit',
    avatar: 'https://avatars.githubusercontent.com/u/61520544?v=4',
    language: 'C++',
    updated: '2023-12-05',
    topics: ['deep-learning', 'inference', 'optimization', 'deployment'],
    license: 'Apache-2.0'
  },
  {
    id: '71',
    name: 'Voyager',
    description: 'An Open-Ended Embodied Agent with Large Language Models',
    stars: 4700,
    forks: 410,
    url: 'https://github.com/MineDojo/Voyager',
    owner: 'MineDojo',
    avatar: 'https://avatars.githubusercontent.com/u/106974452?v=4',
    language: 'Python',
    updated: '2023-12-01',
    topics: ['embodied-agent', 'llm', 'minecraft', 'ai'],
    license: 'MIT'
  },
  {
    id: '72',
    name: 'GPTCache',
    description: 'Semantic cache for LLMs to boost throughput and reduce costs',
    stars: 3850,
    forks: 320,
    url: 'https://github.com/zilliztech/GPTCache',
    owner: 'zilliztech',
    avatar: 'https://avatars.githubusercontent.com/u/42082890?v=4',
    language: 'Python',
    updated: '2023-11-27',
    topics: ['cache', 'llm', 'semantic', 'cost-reduction'],
    license: 'MIT'
  },
  {
    id: '73',
    name: 'Multi-Modal GPT',
    description: 'Framework for multi-modal large language models',
    stars: 2600,
    forks: 290,
    url: 'https://github.com/open-mmlab/mmgpt',
    owner: 'open-mmlab',
    avatar: 'https://avatars.githubusercontent.com/u/13488594?v=4',
    language: 'Python',
    updated: '2023-12-02',
    topics: ['multi-modal', 'llm', 'vision', 'audio'],
    license: 'Apache-2.0'
  },
  {
    id: '74',
    name: 'LM Studio',
    description: 'Desktop app for running local LLMs',
    stars: 9800,
    forks: 790,
    url: 'https://github.com/lmstudio-ai/lmstudio',
    owner: 'lmstudio-ai',
    avatar: 'https://avatars.githubusercontent.com/u/125832272?v=4',
    language: 'TypeScript',
    updated: '2023-12-04',
    topics: ['desktop-app', 'llm', 'local-inference', 'ai'],
    license: 'AGPL-3.0'
  },
  {
    id: '75',
    name: 'Vercel AI SDK',
    description: 'React hooks and components for AI applications',
    stars: 5300,
    forks: 480,
    url: 'https://github.com/vercel/ai',
    owner: 'vercel',
    avatar: 'https://avatars.githubusercontent.com/u/14985020?v=4',
    language: 'TypeScript',
    updated: '2023-12-07',
    topics: ['react', 'ai', 'sdk', 'streaming'],
    license: 'MIT'
  },
  {
    id: '76',
    name: 'MLC-LLM',
    description: 'Universal LLM deployment across diverse hardware backends',
    stars: 12700,
    forks: 980,
    url: 'https://github.com/mlc-ai/mlc-llm',
    owner: 'mlc-ai',
    avatar: 'https://avatars.githubusercontent.com/u/90234932?v=4',
    language: 'C++',
    updated: '2023-12-05',
    topics: ['llm', 'deployment', 'hardware', 'cross-platform'],
    license: 'Apache-2.0'
  },
  {
    id: '77',
    name: 'ChatDev',
    description: 'Creating software using natural language through LLM-based autonomous agents',
    stars: 18400,
    forks: 1950,
    url: 'https://github.com/OpenBMB/ChatDev',
    owner: 'OpenBMB',
    avatar: 'https://avatars.githubusercontent.com/u/92683872?v=4',
    language: 'Python',
    updated: '2023-12-06',
    topics: ['software-development', 'autonomous-agents', 'llm', 'natural-language'],
    license: 'MIT'
  },
  {
    id: '78',
    name: 'QAnything',
    description: 'Question and answer based on any content',
    stars: 2950,
    forks: 340,
    url: 'https://github.com/netease-youdao/QAnything',
    owner: 'netease-youdao',
    avatar: 'https://avatars.githubusercontent.com/u/27799349?v=4',
    language: 'Python',
    updated: '2023-12-01',
    topics: ['qa', 'rag', 'question-answering', 'llm'],
    license: 'Apache-2.0'
  },
  {
    id: '79',
    name: 'Devin',
    description: 'Autonomous AI software engineer',
    stars: 7400,
    forks: 820,
    url: 'https://github.com/cognition-labs/devin',
    owner: 'cognition-labs',
    avatar: 'https://avatars.githubusercontent.com/u/151543919?v=4',
    language: 'Python',
    updated: '2023-12-03',
    topics: ['autonomous', 'software-engineer', 'ai', 'agent'],
    license: 'MIT'
  },
  {
    id: '80',
    name: 'Poe',
    description: 'Fast, helpful AI chat',
    stars: 1250,
    forks: 290,
    url: 'https://github.com/poe-platform/poe',
    owner: 'poe-platform',
    avatar: 'https://avatars.githubusercontent.com/u/124798947?v=4',
    language: 'TypeScript',
    updated: '2023-12-05',
    topics: ['chat', 'ai', 'platform', 'llm'],
    license: 'MIT'
  },
  {
    id: '81',
    name: 'ExLlama',
    description: 'Optimized inference library for Llama models',
    stars: 3700,
    forks: 360,
    url: 'https://github.com/turboderp/exllama',
    owner: 'turboderp',
    avatar: 'https://avatars.githubusercontent.com/u/131981455?v=4',
    language: 'Python',
    updated: '2023-11-29',
    topics: ['llama', 'inference', 'optimization', 'llm'],
    license: 'MIT'
  },
  {
    id: '82',
    name: 'Replicate',
    description: 'Run machine learning models in the cloud and build applications',
    stars: 5400,
    forks: 410,
    url: 'https://github.com/replicate/replicate',
    owner: 'replicate',
    avatar: 'https://avatars.githubusercontent.com/u/69859174?v=4',
    language: 'Go',
    updated: '2023-12-07',
    topics: ['machine-learning', 'cloud', 'api', 'deployment'],
    license: 'Apache-2.0'
  },
  {
    id: '83',
    name: 'LoLLMS',
    description: 'Library of large language models running locally',
    stars: 1980,
    forks: 190,
    url: 'https://github.com/ParisNeo/lollms',
    owner: 'ParisNeo',
    avatar: 'https://avatars.githubusercontent.com/u/827993?v=4',
    language: 'Python',
    updated: '2023-12-02',
    topics: ['llm', 'local', 'inference', 'library'],
    license: 'Apache-2.0'
  },
  {
    id: '84',
    name: 'Instructor',
    description: 'Structured outputs for LLMs using Pydantic',
    stars: 3950,
    forks: 250,
    url: 'https://github.com/jxnl/instructor',
    owner: 'jxnl',
    avatar: 'https://avatars.githubusercontent.com/u/6481890?v=4',
    language: 'Python',
    updated: '2023-12-04',
    topics: ['structured-outputs', 'llm', 'pydantic', 'validation'],
    license: 'MIT'
  },
  {
    id: '85',
    name: 'Multi-Agent-Debate',
    description: 'Framework for conducting debates between AI agents',
    stars: 2100,
    forks: 230,
    url: 'https://github.com/composable-ai/multi-agent-debate',
    owner: 'composable-ai',
    avatar: 'https://avatars.githubusercontent.com/u/137894706?v=4',
    language: 'Python',
    updated: '2023-11-26',
    topics: ['debate', 'multi-agent', 'discussion', 'ai'],
    license: 'MIT'
  },
  {
    id: '86',
    name: 'Ghostwriter',
    description: 'AI pair programmer that understands your codebase',
    stars: 3400,
    forks: 210,
    url: 'https://github.com/replit/ghostwriter',
    owner: 'replit',
    avatar: 'https://avatars.githubusercontent.com/u/983194?v=4',
    language: 'TypeScript',
    updated: '2023-12-05',
    topics: ['pair-programming', 'code-assistant', 'ai', 'context-aware'],
    license: 'MIT'
  },
  {
    id: '87',
    name: 'FalconLLM',
    description: 'Open source large language model by TII',
    stars: 4700,
    forks: 510,
    url: 'https://github.com/falconry/falcon',
    owner: 'falconry',
    avatar: 'https://avatars.githubusercontent.com/u/11975288?v=4',
    language: 'Python',
    updated: '2023-12-01',
    topics: ['llm', 'large-language-model', 'tii', 'open-source'],
    license: 'Apache-2.0'
  },
  {
    id: '88',
    name: 'Gradient',
    description: 'A Python framework for accelerating the training of large neural networks',
    stars: 1560,
    forks: 180,
    url: 'https://github.com/gradient-ai/gradient',
    owner: 'gradient-ai',
    avatar: 'https://avatars.githubusercontent.com/u/51045476?v=4',
    language: 'Python',
    updated: '2023-11-28',
    topics: ['training', 'neural-networks', 'acceleration', 'framework'],
    license: 'Apache-2.0'
  },
  {
    id: '89',
    name: 'Vicuna',
    description: 'An open-source chatbot by LMSYS',
    stars: 12800,
    forks: 1540,
    url: 'https://github.com/lm-sys/vicuna',
    owner: 'lm-sys',
    avatar: 'https://avatars.githubusercontent.com/u/121410359?v=4',
    language: 'Python',
    updated: '2023-12-04',
    topics: ['chatbot', 'llm', 'open-source', 'conversational'],
    license: 'Apache-2.0'
  },
  {
    id: '90',
    name: 'XAI',
    description: 'Explainable AI framework for interpreting model predictions',
    stars: 2750,
    forks: 310,
    url: 'https://github.com/explainx/xai',
    owner: 'explainx',
    avatar: 'https://avatars.githubusercontent.com/u/69405478?v=4',
    language: 'Python',
    updated: '2023-11-30',
    topics: ['explainable-ai', 'interpretability', 'machine-learning', 'transparency'],
    license: 'MIT'
  },
  {
    id: '91',
    name: 'GPTQ-for-LLaMa',
    description: 'Quantization for LLaMA models with GPTQ',
    stars: 13600,
    forks: 1840,
    url: 'https://github.com/qwopqwop200/GPTQ-for-LLaMa',
    owner: 'qwopqwop200',
    avatar: 'https://avatars.githubusercontent.com/u/9354268?v=4',
    language: 'Python',
    updated: '2023-12-02',
    topics: ['quantization', 'llama', 'gptq', 'optimization'],
    license: 'MIT'
  },
  {
    id: '92',
    name: 'OnPrem',
    description: 'Enterprise LLM platform for on-premise deployment',
    stars: 1840,
    forks: 210,
    url: 'https://github.com/onprem-ai/onprem',
    owner: 'onprem-ai',
    avatar: 'https://avatars.githubusercontent.com/u/116602854?v=4',
    language: 'Python',
    updated: '2023-12-05',
    topics: ['llm', 'enterprise', 'on-premise', 'deployment'],
    license: 'Apache-2.0'
  },
  {
    id: '93',
    name: 'LiteLLM',
    description: 'Call all LLM APIs using the OpenAI format',
    stars: 4200,
    forks: 380,
    url: 'https://github.com/BerriAI/litellm',
    owner: 'BerriAI',
    avatar: 'https://avatars.githubusercontent.com/u/103894297?v=4',
    language: 'Python',
    updated: '2023-12-03',
    topics: ['llm', 'api', 'openai', 'proxy'],
    license: 'MIT'
  },
  {
    id: '94',
    name: 'TensorRT-LLM',
    description: 'High-performance LLM inference framework on NVIDIA GPUs',
    stars: 4100,
    forks: 470,
    url: 'https://github.com/NVIDIA/TensorRT-LLM',
    owner: 'NVIDIA',
    avatar: 'https://avatars.githubusercontent.com/u/1728152?v=4',
    language: 'C++',
    updated: '2023-12-07',
    topics: ['nvidia', 'tensorrt', 'llm', 'inference'],
    license: 'Apache-2.0'
  },
  {
    id: '95',
    name: 'Alpaca',
    description: 'Fine-tuned instruction-following LLaMA model',
    stars: 27100,
    forks: 3650,
    url: 'https://github.com/tatsu-lab/alpaca',
    owner: 'tatsu-lab',
    avatar: 'https://avatars.githubusercontent.com/u/57647145?v=4',
    language: 'Python',
    updated: '2023-11-29',
    topics: ['instruction-following', 'llama', 'fine-tuning', 'llm'],
    license: 'Apache-2.0'
  },
  {
    id: '96',
    name: 'vLLM',
    description: 'High-throughput and memory-efficient inference for LLMs',
    stars: 11300,
    forks: 1280,
    url: 'https://github.com/vllm-project/vllm',
    owner: 'vllm-project',
    avatar: 'https://avatars.githubusercontent.com/u/133828127?v=4',
    language: 'Python',
    updated: '2023-12-08',
    topics: ['inference', 'llm', 'memory-efficiency', 'throughput'],
    license: 'Apache-2.0'
  },
  {
    id: '97',
    name: 'FastChat',
    description: 'Open platform for training, serving, and evaluating LLM-based chatbots',
    stars: 28700,
    forks: 3650,
    url: 'https://github.com/lm-sys/fastchat',
    owner: 'lm-sys',
    avatar: 'https://avatars.githubusercontent.com/u/121410359?v=4',
    language: 'Python',
    updated: '2023-12-06',
    topics: ['llm', 'chatbot', 'training', 'evaluation'],
    license: 'Apache-2.0'
  },
  {
    id: '98',
    name: 'Galactica',
    description: 'LLM for science and research',
    stars: 2950,
    forks: 410,
    url: 'https://github.com/paperswithcode/galactica',
    owner: 'paperswithcode',
    avatar: 'https://avatars.githubusercontent.com/u/46642396?v=4',
    language: 'Python',
    updated: '2023-11-30',
    topics: ['science', 'research', 'llm', 'knowledge'],
    license: 'MIT'
  },
  {
    id: '99',
    name: 'LMQL',
    description: 'Programming language for language model interaction',
    stars: 5100,
    forks: 340,
    url: 'https://github.com/eth-sri/lmql',
    owner: 'eth-sri',
    avatar: 'https://avatars.githubusercontent.com/u/12858071?v=4',
    language: 'Python',
    updated: '2023-12-04',
    topics: ['programming-language', 'llm', 'query', 'interaction'],
    license: 'MIT'
  },
  {
    id: '100',
    name: 'Gorilla',
    description: 'LLM for API calls with accurate tool usage',
    stars: 4860,
    forks: 410,
    url: 'https://github.com/ShishirPatil/gorilla',
    owner: 'ShishirPatil',
    avatar: 'https://avatars.githubusercontent.com/u/8976343?v=4',
    language: 'Python',
    updated: '2023-12-01',
    topics: ['api', 'llm', 'tool-usage', 'accuracy'],
    license: 'Apache-2.0'
  }
];

// Adding new data to reach 200+ projects
for (let i = 101; i <= 210; i++) {
  EXTENDED_DATA.push({
    id: i.toString(),
    name: `AI Project ${i}`,
    description: `An innovative AI agent project #${i} with advanced capabilities`,
    stars: Math.floor(Math.random() * 10000) + 500,
    forks: Math.floor(Math.random() * 1000) + 50,
    url: `https://github.com/org-${i}/project-${i}`,
    owner: `org-${i}`,
    avatar: `https://avatars.githubusercontent.com/u/${100000 + i}?v=4`,
    language: ['Python', 'TypeScript', 'JavaScript', 'C++', 'Rust', 'Go'][Math.floor(Math.random() * 6)],
    updated: `2023-${Math.floor(Math.random() * 12) + 1}-${Math.floor(Math.random() * 28) + 1}`,
    topics: ['ai', 'agents', 'llm', 'machine-learning', 'nlp', 'rag'].slice(0, Math.floor(Math.random() * 4) + 2),
    license: ['MIT', 'Apache-2.0', 'GPL-3.0'][Math.floor(Math.random() * 3)]
  });
}

// The GitHubService class manages interactions with GitHub-related data
class GitHubService {
  // Fetch all agents from the extended data source
  static fetchAgents(): Promise<Agent[]> {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(EXTENDED_DATA);
      }, 500);
    });
  }

  // Search for agents by query string (searches in name, description, and topics)
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

  // Get the last updated timestamp
  static getLastUpdatedTimestamp(): string {
    const savedTimestamp = localStorage.getItem('lastUpdated');
    if (savedTimestamp) {
      return savedTimestamp;
    }
    
    // If no saved timestamp, set current time
    const timestamp = new Date().toISOString();
    localStorage.setItem('lastUpdated', timestamp);
    return timestamp;
  }

  // Format the timestamp for display
  static formatLastUpdated(timestamp: string): string {
    if (!timestamp) return 'Never';
    
    const date = new Date(timestamp);
    const now = new Date();
    
    // If not a valid date
    if (isNaN(date.getTime())) return 'Unknown';
    
    // Calculate the difference in milliseconds
    const diff = now.getTime() - date.getTime();
    
    // Convert to minutes, hours, days
    const minutes = Math.floor(diff / 60000);
    const hours = Math.floor(minutes / 60);
    const days = Math.floor(hours / 24);
    
    if (minutes < 1) return 'Just now';
    if (minutes < 60) return `${minutes} minute${minutes === 1 ? '' : 's'} ago`;
    if (hours < 24) return `${hours} hour${hours === 1 ? '' : 's'} ago`;
    if (days < 30) return `${days} day${days === 1 ? '' : 's'} ago`;
    
    // For older dates, show the formatted date
    return date.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'short', 
      day: 'numeric' 
    });
  }

  // Simulate refreshing the data
  static refreshAgentData(): Promise<{ agents: Agent[], timestamp: string }> {
    return new Promise((resolve) => {
      setTimeout(() => {
        // Shuffle the agents to simulate refreshed data
        const shuffledAgents = [...EXTENDED_DATA].sort(() => Math.random() - 0.5);
        
        // Update timestamp
        const timestamp = new Date().toISOString();
        localStorage.setItem('lastUpdated', timestamp);
        
        resolve({
          agents: shuffledAgents,
          timestamp
        });
      }, 1000);
    });
  }

  // Get trending agents (those with recent updates and high growth in stars)
  static getTrendingAgents(): Promise<Agent[]> {
    return new Promise((resolve) => {
      setTimeout(() => {
        // Simulate trending by taking the top agents by stars
        const trending = [...EXTENDED_DATA]
          .sort((a, b) => new Date(b.updated).getTime() - new Date(a.updated).getTime())
          .slice(0, 10);
        
        resolve(trending);
      }, 300);
    });
  }
}

export { GitHubService };
