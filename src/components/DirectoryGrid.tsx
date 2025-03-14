
import { useState, useEffect, useRef, useMemo } from 'react';
import AgentCard from './AgentCard';
import { Agent, FilterOptions, SortOption } from '../types';
import Filters from './Filters';
import { GitHubService } from '../services/GitHubService';
import { Button } from './ui/button';
import PaginationControl from './PaginationControl';
import { paginateData } from '../utils/pagination';
import { toast } from '@/components/ui/use-toast';

interface DirectoryGridProps {
  initialSearchQuery?: string;
}

const DirectoryGrid = ({ initialSearchQuery = '' }: DirectoryGridProps) => {
  const [agents, setAgents] = useState<Agent[]>([]);
  const [filteredAgents, setFilteredAgents] = useState<Agent[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isRefreshing, setIsRefreshing] = useState(false);
  const [languages, setLanguages] = useState<string[]>([]);
  const [lastUpdated, setLastUpdated] = useState<string>('');
  const [filterOptions, setFilterOptions] = useState<FilterOptions>({
    language: null,
    sort: 'stars',
    searchQuery: initialSearchQuery,
  });
  const directoryRef = useRef<HTMLDivElement>(null);
  
  // Pagination state
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const pageSize = 12;
  
  // Calculate total pages
  const totalPages = useMemo(() => {
    if (filteredAgents.length === 0) return 1;
    return Math.ceil(filteredAgents.length / pageSize);
  }, [filteredAgents, pageSize]);
  
  // Get paginated data for current view
  const currentPageData = useMemo(() => {
    return paginateData(filteredAgents, page, pageSize);
  }, [filteredAgents, page, pageSize]);

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

        // Fetch all agents
        const data = await GitHubService.fetchAgents();
        
        // Extract unique languages
        const uniqueLanguages = Array.from(new Set(data.map(agent => agent.language))).sort();
        setLanguages(uniqueLanguages);
        
        // Set the actual agents
        setAgents(data);
        
        // Set last updated timestamp
        setLastUpdated(GitHubService.getLastUpdatedTimestamp());
      } catch (error) {
        console.error('Error loading agents:', error);
        toast({
          title: "Error",
          description: "Failed to load AI agents. Please try again.",
          variant: "destructive",
        });
      } finally {
        setIsLoading(false);
      }
    };

    loadAgents();
    
    // Set up daily auto-refresh (in a real app, would use a more sophisticated approach)
    const autoRefreshInterval = setInterval(() => {
      handleRefresh();
    }, 24 * 60 * 60 * 1000); // 24 hours
    
    return () => {
      clearInterval(autoRefreshInterval);
    };
  }, []);

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
            toast({
              title: "Error",
              description: "Search failed. Please try again.",
              variant: "destructive",
            });
          } finally {
            setIsLoading(false);
          }
        }
      }
      
      setFilteredAgents(result);
      
      // Reset to first page when filters change
      setPage(1);
    };
    
    if (!agents.some(agent => agent.isLoading)) {
      applyFilters();
    }
  }, [agents, filterOptions]);

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
  
  const handlePageChange = (newPage: number) => {
    setPage(newPage);
    
    // Scroll to top of directory when changing pages
    if (directoryRef.current) {
      directoryRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };
  
  const handleRefresh = async () => {
    setIsRefreshing(true);
    try {
      const { agents: refreshedAgents, timestamp } = await GitHubService.refreshAgentData();
      
      // Update the agents state
      setAgents(refreshedAgents);
      setLastUpdated(timestamp);
      
      toast({
        title: "Success",
        description: "AI agent directory has been refreshed with the latest data.",
      });
    } catch (error) {
      console.error('Error refreshing agents:', error);
      toast({
        title: "Error",
        description: "Failed to refresh agent data. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsRefreshing(false);
    }
  };

  return (
    <div ref={directoryRef} className="py-8 px-4 md:px-8 max-w-7xl mx-auto">
      <div className="space-y-8">
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
            <div className="flex items-center gap-2">
              <div className="text-sm text-gray-500">
                {filteredAgents.length} {filteredAgents.length === 1 ? 'project' : 'projects'}
              </div>
              <div className="text-sm text-gray-500">
                {lastUpdated && `Last updated: ${GitHubService.formatLastUpdated(lastUpdated)}`}
              </div>
              <Button 
                variant="outline" 
                size="sm" 
                onClick={handleRefresh}
                disabled={isRefreshing}
                className="flex items-center gap-2"
              >
                <svg 
                  className={`w-4 h-4 ${isRefreshing ? 'animate-spin' : ''}`} 
                  xmlns="http://www.w3.org/2000/svg" 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                </svg>
                {isRefreshing ? 'Refreshing...' : 'Refresh'}
              </Button>
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
                {(isLoading && page === 1 ? agents : currentPageData).map((agent) => (
                  <AgentCard key={agent.id} agent={agent} />
                ))}
              </div>
              
              {filteredAgents.length > 0 && (
                <PaginationControl 
                  currentPage={page} 
                  totalPages={totalPages} 
                  onPageChange={handlePageChange} 
                />
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default DirectoryGrid;
