
import { useRef, useEffect, useState } from 'react';
import { Search } from 'lucide-react';
import SearchBar from './SearchBar';
import { useInView } from '../utils/animations';
import { GitHubService } from '../services/GitHubService';

interface HeroProps {
  onSearch: (query: string) => void;
}

const Hero = ({ onSearch }: HeroProps) => {
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
      className="relative min-h-[80vh] flex flex-col items-center justify-center px-4 pt-20 pb-32 overflow-hidden"
    >
      {/* Background elements */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse-soft"></div>
        <div className="absolute top-1/3 right-1/4 w-64 h-64 bg-purple-100 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse-soft" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-1/4 right-1/3 w-80 h-80 bg-pink-100 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse-soft" style={{ animationDelay: '2s' }}></div>
      </div>

      <div 
        className={`max-w-5xl mx-auto text-center transition-opacity duration-1000 ease-out transform ${
          isVisible ? 'opacity-100' : 'opacity-0'
        }`}
      >
        <div className="inline-block mb-6 bg-black/5 backdrop-blur-md text-sm px-3 py-1 rounded-full">
          <span className="font-medium">Discover AI Agents & Open Source Projects</span>
        </div>
        
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6 text-gray-900 tracking-tight leading-tight text-balance">
          The definitive directory of <br className="hidden md:block" />
          <span className="bg-gradient-to-r from-gray-900 via-blue-800 to-purple-900 bg-clip-text text-transparent">
            AI Agents & Projects
          </span>
        </h1>
        
        <p className="text-lg md:text-xl text-gray-600 mb-10 max-w-3xl mx-auto">
          Explore the cutting-edge world of AI agents and open-source projects, all meticulously cataloged and regularly updated for developers, researchers, and enthusiasts.
        </p>
        
        <div className="max-w-2xl mx-auto">
          <SearchBar 
            defaultValue="" 
            onSearch={onSearch} 
            onRefresh={handleRefresh}
            lastUpdated={GitHubService.formatLastUpdated(lastUpdated)}
          />
          
          <div className="mt-3 flex flex-wrap justify-center gap-2 text-sm text-gray-600">
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
        className={`absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white via-white/80 to-transparent transition-opacity duration-1000 ${
          isInView ? 'opacity-100' : 'opacity-0'
        }`}
      ></div>
    </div>
  );
};

export default Hero;
