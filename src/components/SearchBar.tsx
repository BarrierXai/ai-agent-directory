
import { useState, useEffect, useRef } from 'react';
import { Search, X, RefreshCw, Plus } from 'lucide-react';

interface SearchBarProps {
  defaultValue?: string;
  onSearch: (query: string) => void;
  onRefresh?: () => void;
  onAddProject?: () => void;
  lastUpdated?: string;
  isSticky?: boolean;
  isCompact?: boolean;
}

const SearchBar = ({ 
  defaultValue = '', 
  onSearch, 
  onRefresh, 
  onAddProject,
  lastUpdated,
  isSticky = false,
  isCompact = false
}: SearchBarProps) => {
  const [query, setQuery] = useState(defaultValue);
  const [isFocused, setIsFocused] = useState(false);
  const [isRefreshing, setIsRefreshing] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    setQuery(defaultValue);
  }, [defaultValue]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch(query);
    if (inputRef.current) {
      inputRef.current.blur();
    }
  };

  const clearSearch = () => {
    setQuery('');
    onSearch('');
  };
  
  const handleRefresh = () => {
    if (onRefresh) {
      setIsRefreshing(true);
      onRefresh();
      
      // Reset the refreshing state after animation
      setTimeout(() => {
        setIsRefreshing(false);
      }, 1000);
    }
  };

  return (
    <div 
      className={`w-full transition-all duration-300 ${
        isSticky 
          ? 'sticky top-20 z-30 py-2 bg-white/80 backdrop-blur-md shadow-sm border-b border-gray-200/50' 
          : ''
      }`}
    >
      <form 
        onSubmit={handleSubmit}
        className={`relative ${isCompact ? 'max-w-xl mx-auto' : 'max-w-2xl mx-auto'}`}
      >
        <div className="relative">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <Search className={`h-4 w-4 transition-colors ${isFocused ? 'text-blue-500' : 'text-gray-400'}`} />
          </div>
          <input
            ref={inputRef}
            type="text"
            className={`block w-full pl-9 pr-10 ${isCompact ? 'py-2 text-sm' : 'py-3'} border rounded-lg bg-white/90 transition-all duration-200 ${
              isFocused 
                ? 'border-blue-500 shadow-md ring-1 ring-blue-200' 
                : 'border-gray-300 shadow-sm'
            }`}
            placeholder="Search AI agents, libraries, or tools..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
          />
          {query && (
            <button
              type="button"
              onClick={clearSearch}
              className="absolute inset-y-0 right-24 flex items-center pr-3 text-gray-400 hover:text-gray-600 transition-colors"
            >
              <X className="h-4 w-4" />
            </button>
          )}
          {onAddProject && (
            <button
              type="button"
              onClick={onAddProject}
              className="absolute inset-y-0 right-12 flex items-center text-gray-400 hover:text-gray-600 transition-colors px-2"
              title="Add new project"
            >
              <Plus className="h-4 w-4" />
            </button>
          )}
          {onRefresh && !onAddProject && (
            <button
              type="button"
              onClick={handleRefresh}
              className="absolute inset-y-0 right-12 flex items-center text-gray-400 hover:text-gray-600 transition-colors px-2"
              title="Refresh agent directory"
            >
              <RefreshCw className={`h-4 w-4 ${isRefreshing ? 'animate-spin' : ''}`} />
            </button>
          )}
          <button
            type="submit"
            className={`absolute inset-y-0 right-0 flex items-center px-3 text-white bg-gray-900 rounded-r-lg hover:bg-gray-800 transition-colors ${isCompact ? 'text-sm' : ''}`}
          >
            Search
          </button>
        </div>
        
        {lastUpdated && !isCompact && (
          <div className="text-xs text-gray-500 mt-1 text-right">
            Last updated: {lastUpdated}
          </div>
        )}
      </form>
    </div>
  );
};

export default SearchBar;
