
import { useRef, useEffect, useState } from 'react';
import { Search } from 'lucide-react';
import { useInView } from '../utils/animations';

interface HeroProps {
  onSearch: (query: string) => void;
}

const Hero = ({ onSearch }: HeroProps) => {
  const heroRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(heroRef, '-100px');
  const [searchQuery, setSearchQuery] = useState('');
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch(searchQuery);
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
        
        <form 
          onSubmit={handleSearch}
          className="relative max-w-2xl mx-auto"
        >
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Search className="h-5 w-5 text-gray-400" />
            </div>
            <input
              type="text"
              className="block w-full pl-10 pr-3 py-4 border border-gray-300 rounded-xl bg-white/70 backdrop-blur-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 shadow-lg transition-all duration-200 text-gray-900"
              placeholder="Search AI agents, tools, or frameworks..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <button
              type="submit"
              className="absolute inset-y-0 right-0 flex items-center px-4 text-white bg-gray-900 rounded-r-xl hover:bg-gray-800 transition-colors"
            >
              Search
            </button>
          </div>
          <div className="mt-3 flex flex-wrap justify-center gap-2 text-sm text-gray-600">
            <span className="text-gray-500">Popular:</span>
            <button 
              type="button"
              onClick={() => {
                setSearchQuery('autonomous');
                onSearch('autonomous');
              }}
              className="hover:text-gray-900 transition-colors"
            >
              Autonomous
            </button>
            <button 
              type="button"
              onClick={() => {
                setSearchQuery('LangChain');
                onSearch('LangChain');
              }}
              className="hover:text-gray-900 transition-colors"
            >
              LangChain
            </button>
            <button 
              type="button"
              onClick={() => {
                setSearchQuery('GPT');
                onSearch('GPT');
              }}
              className="hover:text-gray-900 transition-colors"
            >
              GPT
            </button>
          </div>
        </form>
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
