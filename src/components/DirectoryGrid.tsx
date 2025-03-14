
import { useState, useEffect, useRef } from 'react';
import AgentCard from './AgentCard';
import { Agent, FilterOptions, SortOption } from '../types';
import Filters from './Filters';
import { GitHubService } from '../services/GitHubService';
import SearchBar from './SearchBar';
import { Button } from './ui/button';

interface DirectoryGridProps {
  initialSearchQuery?: string;
}

const DirectoryGrid = ({ initialSearchQuery = '' }: DirectoryGridProps) => {
  const [agents, setAgents] = useState<Agent[]>([]);
  const [filteredAgents, setFilteredAgents] = useState<Agent[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [languages, setLanguages] = useState<string[]>([]);
  const [filterOptions, setFilterOptions] = useState<FilterOptions>({
    language: null,
    sort: 'stars',
    searchQuery: initialSearchQuery,
  });
  const [scrollPosition, setScrollPosition] = useState(0);
  const directoryRef = useRef<HTMLDivElement>(null);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const pageSize = 12;

  // Load agents
  useEffect(() => {
    const loadAgents = async () => {
      setIsLoading(true);
      try {
        // Create placeholder loading agents
        setAgents(Array(pageSize).fill(null).map((_, i) => ({
          id: `loading-${i}`,
          name: '',
          description: '',
          stars: 0,
          forks: 0,
          url: '',
          owner: '',
          avatar: '',
          language: '',
          updated: '',
          topics: [],
          license: '',
          isLoading: true
        })));

        // Fetch the actual agents
        const data = await GitHubService.fetchPaginatedAgents(page, pageSize);
        
        if (data.length < pageSize) {
          setHasMore(false);
        }
        
        // Extract unique languages
        const allData = await GitHubService.fetchAgents();
        const uniqueLanguages = Array.from(new Set(allData.map(agent => agent.language))).sort();
        setLanguages(uniqueLanguages);
        
        // Set the actual agents
        setAgents(prev => page === 1 ? data : [...prev.filter(a => !a.isLoading), ...data]);
      } catch (error) {
        console.error('Error loading agents:', error);
      } finally {
        setIsLoading(false);
      }
    };

    loadAgents();
  }, [page]);

  // Apply filters
  useEffect(() => {
    const applyFilters = async () => {
      let result = [...agents];
      
      // Filter by language
      if (filterOptions.language) {
        result = result.filter(agent => agent.language === filterOptions.language);
      }
      
      // Sort agents
      result = sortAgents(result, filterOptions.sort);
      
      // Filter by search query
      if (filterOptions.searchQuery) {
        // Replace with actual search if this were a real app
        if (filterOptions.searchQuery.trim() !== '') {
          setIsLoading(true);
          try {
            result = await GitHubService.searchAgents(filterOptions.searchQuery);
            
            // Apply language filter to search results
            if (filterOptions.language) {
              result = result.filter(agent => agent.language === filterOptions.language);
            }
            
            // Apply sort to search results
            result = sortAgents(result, filterOptions.sort);
          } catch (error) {
            console.error('Error searching agents:', error);
          } finally {
            setIsLoading(false);
          }
        }
      }
      
      setFilteredAgents(result);
    };
    
    if (!agents.some(agent => agent.isLoading)) {
      applyFilters();
    }
  }, [agents, filterOptions]);

  // Handle scroll
  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const sortAgents = (agents: Agent[], sort: SortOption): Agent[] => {
    switch (sort) {
      case 'stars':
        return [...agents].sort((a, b) => b.stars - a.stars);
      case 'forks':
        return [...agents].sort((a, b) => b.forks - a.forks);
      case 'updated':
        return [...agents].sort((a, b) => new Date(b.updated).getTime() - new Date(a.updated).getTime());
      default:
        return agents;
    }
  };

  const handleSearch = (query: string) => {
    setPage(1);
    setHasMore(true);
    setFilterOptions({ ...filterOptions, searchQuery: query });
  };

  const handleLanguageChange = (language: string | null) => {
    setPage(1);
    setHasMore(true);
    setFilterOptions({ ...filterOptions, language });
  };

  const handleSortChange = (sort: SortOption) => {
    setFilterOptions({ ...filterOptions, sort });
  };
  
  const loadMore = () => {
    if (!isLoading && hasMore) {
      setPage(prevPage => prevPage + 1);
    }
  };

  const isSearchSticky = scrollPosition > 400;

  return (
    <div ref={directoryRef} className="py-8 px-4 md:px-8 max-w-7xl mx-auto">
      <div className="space-y-8">
        <div className={`transition-all duration-300 ${isSearchSticky ? 'mb-24' : ''}`}>
          <SearchBar 
            defaultValue={filterOptions.searchQuery} 
            onSearch={handleSearch} 
            isSticky={isSearchSticky} 
          />
        </div>
        
        <Filters 
          onLanguageChange={handleLanguageChange}
          onSortChange={handleSortChange}
          selectedLanguage={filterOptions.language}
          selectedSort={filterOptions.sort}
          languages={languages}
        />
        
        <div>
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-2xl font-bold text-gray-900">
              {filterOptions.searchQuery 
                ? `Results for "${filterOptions.searchQuery}"`
                : 'Featured AI Agent Projects'}
            </h2>
            <div className="text-sm text-gray-500">
              {filteredAgents.length} {filteredAgents.length === 1 ? 'project' : 'projects'}
            </div>
          </div>
          
          {filteredAgents.length === 0 && !isLoading ? (
            <div className="flex flex-col items-center justify-center py-16 text-center">
              <div className="mb-4 text-gray-400">
                <svg width="64" height="64" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M21 21L15.5 15.5M15.5 8.5C15.5 12.0899 12.5899 15 9 15C5.41015 15 2.5 12.0899 2.5 8.5C2.5 4.91015 5.41015 2 9 2C12.5899 2 15.5 4.91015 15.5 8.5Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3 className="text-xl font-medium text-gray-900 mb-2">No results found</h3>
              <p className="text-gray-600 max-w-md">
                We couldn't find any AI agent projects matching your search criteria. Try adjusting your filters or search terms.
              </p>
            </div>
          ) : (
            <>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {(isLoading && page === 1 ? agents : filteredAgents).map((agent) => (
                  <AgentCard key={agent.id} agent={agent} />
                ))}
              </div>
              
              {!filterOptions.searchQuery && hasMore && (
                <div className="flex justify-center mt-10">
                  <Button 
                    onClick={loadMore}
                    disabled={isLoading}
                    className="px-8 py-2"
                  >
                    {isLoading ? 'Loading...' : 'Load More Projects'}
                  </Button>
                </div>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default DirectoryGrid;
