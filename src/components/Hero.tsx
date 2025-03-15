
import { useRef, useEffect, useState } from 'react';
import SearchBar from './SearchBar';
import { useInView } from '../utils/animations';
import { GitHubService } from '../services/GitHubService';

interface HeroProps {
  onSearch: (query: string) => void;
  onAddProject: () => void;
}

const Hero = ({ onSearch, onAddProject }: HeroProps) => {
  const heroRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(heroRef, '-100px');
  const [isVisible, setIsVisible] = useState(false);
  const [lastUpdated, setLastUpdated] = useState('');

  useEffect(() => {
    setIsVisible(true);
    setLastUpdated(GitHubService.getLastUpdatedTimestamp());
  }, []);

  const handleRefresh = async () => {
    const { timestamp } = await GitHubService.refreshAgentData();
    setLastUpdated(timestamp);
  };

  return (
    <div 
      ref={heroRef}
      className="relative min-h-[40vh] flex flex-col items-center justify-center px-4 pt-16 pb-16 overflow-hidden"
    >
      {/* Background elements */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-80 h-80 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse-soft"></div>
        <div className="absolute top-1/3 right-1/4 w-56 h-56 bg-purple-100 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse-soft" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-1/4 right-1/3 w-64 h-64 bg-pink-100 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse-soft" style={{ animationDelay: '2s' }}></div>
      </div>

      <div 
        className={`max-w-4xl mx-auto text-center transition-opacity duration-1000 ease-out transform ${
          isVisible ? 'opacity-100' : 'opacity-0'
        }`}
      >
        <div className="inline-block mb-4 bg-black/5 backdrop-blur-md text-sm px-3 py-1 rounded-full">
          <span className="font-medium">1000+ Open Source Projects</span>
        </div>
        
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-4 text-gray-900 tracking-tight leading-tight text-balance">
          The <span className="bg-gradient-to-r from-gray-900 via-blue-800 to-purple-900 bg-clip-text text-transparent">#1 Directory</span> for AI Agents and MCP Orchestration
        </h1>
        
        <p className="text-base md:text-lg text-gray-600 mb-6 max-w-2xl mx-auto">
          Your go-to resource for discovering cutting-edge AI agent projects and tools.
        </p>
        
        <div className="max-w-xl mx-auto">
          <SearchBar 
            defaultValue="" 
            onSearch={onSearch} 
            onAddProject={onAddProject}
            lastUpdated={GitHubService.formatLastUpdated(lastUpdated)}
            isCompact={true}
          />
          
          <div className="mt-2 flex flex-wrap justify-center gap-2 text-xs text-gray-600">
            <span className="text-gray-500">Popular:</span>
            <button 
              type="button"
              onClick={() => onSearch('autonomous')}
              className="hover:text-gray-900 transition-colors"
            >
              Autonomous
            </button>
            <button 
              type="button"
              onClick={() => onSearch('LangChain')}
              className="hover:text-gray-900 transition-colors"
            >
              LangChain
            </button>
            <button 
              type="button"
              onClick={() => onSearch('GPT')}
              className="hover:text-gray-900 transition-colors"
            >
              GPT
            </button>
            <button 
              type="button"
              onClick={() => onSearch('Dify')}
              className="hover:text-gray-900 transition-colors"
            >
              Dify
            </button>
            <button 
              type="button"
              onClick={() => onSearch('MCP')}
              className="hover:text-gray-900 transition-colors"
            >
              MCP
            </button>
          </div>
        </div>
      </div>
      
      <div 
        className={`absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white via-white/80 to-transparent transition-opacity duration-1000 ${
          isInView ? 'opacity-100' : 'opacity-0'
        }`}
      ></div>
    </div>
  );
};

export default Hero;
