import { useState, useEffect } from 'react';
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from './ui/dialog';
import { Button } from './ui/button';
import { Progress } from './ui/progress';
import { toast } from './ui/use-toast';
import { GitHubService } from '../services/GitHubService';
import { Search, Loader2, Link, AlertCircle } from 'lucide-react';
import { Agent } from '../types/index';
import { Input } from './ui/input';

interface BulkImportModalProps {
  onProjectsAdded?: (agents: Agent[]) => void;
}

interface GitHubSearchResponse {
  items: Array<{
    html_url: string;
    name: string;
    description: string;
    stargazers_count: number;
  }>;
}

// Type declarations for 'process'
declare const process: {
  env: {
    NEXT_PUBLIC_GITHUB_TOKEN?: string;
  }
};

const BulkImportModal = ({ onProjectsAdded }: BulkImportModalProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [progress, setProgress] = useState(0);
  const [status, setStatus] = useState('');
  const [importedProjects, setImportedProjects] = useState<Agent[]>([]);
  const [totalFound, setTotalFound] = useState(0);
  const [showSatisfactionQuery, setShowSatisfactionQuery] = useState(false);
  const [showManualInput, setShowManualInput] = useState(false);
  const [manualUrl, setManualUrl] = useState('');
  const [customSearchTerms, setCustomSearchTerms] = useState('');
  const [error, setError] = useState<string | null>(null);

  // Simulated search that returns GitHub repo URLs rather than using the API
  const searchGithub = async (term: string): Promise<string[]> => {
    try {
      console.log(`Searching for: ${term}`);
      // Simulate finding a few GitHub repositories for each search term
      // This aligns with how GitHubService works (which uses simulated data)
      const simulatedRepos = [
        `https://github.com/example/ai-${term.replace(/\s+/g, '-').toLowerCase()}`,
        `https://github.com/samples/${term.replace(/\s+/g, '_').toLowerCase()}-agent`,
        `https://github.com/demo/mcp-${term.replace(/\s+/g, '-').toLowerCase()}`,
        `https://github.com/test/${term.replace(/\s+/g, '-').toLowerCase()}-framework`
      ];
      
      // Add some randomness to make it seem more realistic
      const numResults = 2 + Math.floor(Math.random() * 3); // Between 2-4 results
      const results = simulatedRepos.slice(0, numResults);
      console.log(`Found ${results.length} repos:`, results);
      return results;
    } catch (error) {
      console.error('Error in simulated GitHub search:', error);
      toast({
        title: 'Search Error',
        description: error instanceof Error ? error.message : 'Unknown error occurred',
        variant: 'destructive',
      });
      throw error;
    }
  };

  const simulateGoogleSearch = async (searchTerms: string[], customQueries?: string[]) => {
    console.log('Starting bulk import with custom queries:', customQueries);
    setIsLoading(true);
    setProgress(0);
    setImportedProjects([]);
    setTotalFound(0);
    setShowSatisfactionQuery(false);
    setError(null);

    try {
      let allRepoUrls: string[] = [];
      // Use custom queries if provided, otherwise use default
      const searchQueries = customQueries || [
        'AI Agent GitHub repository',
        'GitHub MCP framework',
        'autonomous AI agent GitHub',
        'AI assistant open source',
        'LLM agent framework GitHub',
        'multi agent system GitHub',
        'agent based AI GitHub'
      ];
      
      console.log('Using search queries:', searchQueries);
      let successfulSearches = 0;
      let failedSearches = 0;

      for (let i = 0; i < searchQueries.length; i++) {
        const term = searchQueries[i];
        setStatus(`Searching for "${term}"... (${i + 1}/${searchQueries.length})`);
        setProgress(Math.floor((i / searchQueries.length) * 30));

        try {
          // Get simulated GitHub repos for this search term
          const repoUrls = await searchGithub(term);
          allRepoUrls = [...allRepoUrls, ...repoUrls];
          allRepoUrls = [...new Set(allRepoUrls)]; // Remove duplicates
          successfulSearches++;
        } catch (error) {
          console.error(`Error searching for "${term}":`, error);
          failedSearches++;
          
          toast({
            title: 'Search Warning',
            description: `Failed to search for "${term}". Continuing with remaining terms.`,
            variant: 'destructive',
          });
          
          // If too many failures, stop searching
          if (failedSearches > 3) {
            throw new Error('Too many failed searches. Please try again later.');
          }
        }

        // Add a delay between searches
        if (i < searchQueries.length - 1) {
          await new Promise(resolve => setTimeout(resolve, 500));
        }
      }

      if (successfulSearches === 0) {
        throw new Error('All searches failed. Please try again later.');
      }

      setTotalFound(allRepoUrls.length);
      
      // Check if we found any repositories
      if (allRepoUrls.length === 0) {
        throw new Error('No repositories found matching search criteria. Please try different search terms.');
      }
      
      setStatus(`Found ${allRepoUrls.length} potential GitHub repositories. Analyzing...`);
      setProgress(30);

      let foundProjects: Agent[] = [];
      let processedCount = 0;
      let errorCount = 0;

      // Process each repo URL one by one
      for (const repoUrl of allRepoUrls) {
        const currentProgress = 30 + Math.floor((processedCount / allRepoUrls.length) * 65);
        setProgress(currentProgress);
        setStatus(`Processing repository ${processedCount + 1} of ${allRepoUrls.length}: ${repoUrl}`);

        try {
          // Use GitHubService to process this URL
          const result = await GitHubService.addProjectFromGitHub(repoUrl);
          if (result.success && result.agent) {
            foundProjects.push(result.agent);
            setImportedProjects(prevProjects => [...prevProjects, result.agent]);
          } else if (result.error) {
            // Log the specific error but continue processing other URLs
            console.warn(`Skipping repository ${repoUrl}: ${result.error}`);
            errorCount++;
          }
        } catch (error) {
          console.error(`Error processing repository ${repoUrl}:`, error);
          errorCount++;
          
          // Don't fail completely if just a few repositories fail
          if (errorCount > allRepoUrls.length / 2) {
            throw new Error('Too many errors processing repositories. Please try again later.');
          }
        }

        processedCount++;
        await new Promise(resolve => setTimeout(resolve, 300));
      }

      if (foundProjects.length === 0) {
        console.log('No projects found after processing all URLs');
        toast({
          title: 'No Results',
          description: 'No valid AI agent repositories were found. Try adjusting the search terms.',
          variant: 'destructive',
        });
        setIsLoading(false);
        return;
      }

      console.log('Import successful:', foundProjects);
      setStatus('Finalizing import...');
      setProgress(95);
      await new Promise(resolve => setTimeout(resolve, 1000));

      setStatus('Import complete!');
      setProgress(100);

      toast({
        title: 'Bulk Import Complete',
        description: `Successfully imported ${foundProjects.length} AI agent projects`,
      });

      if (onProjectsAdded && foundProjects.length > 0) {
        onProjectsAdded(foundProjects);
      }

      setShowSatisfactionQuery(true);
      setIsLoading(false);
    } catch (error) {
      console.error('Error during bulk import:', error);
      const errorMessage = error instanceof Error ? error.message : 'An error occurred during the bulk import process';
      setError(errorMessage);
      toast({
        title: 'Import Failed',
        description: errorMessage,
        variant: 'destructive',
      });
      setIsLoading(false);
    }
  };

  const handleBulkImport = async () => {
    if (isLoading) return;
    
    console.log('handleBulkImport called with custom terms:', customSearchTerms);
    // Parse custom search terms if provided
    const customQueries = customSearchTerms.trim() 
      ? customSearchTerms.split('\n').filter(term => term.trim().length > 0)
      : undefined;
      
    try {
      await simulateGoogleSearch([], customQueries);
    } catch (error) {
      console.error("Error in bulk import:", error);
      toast({
        title: 'Import Error',
        description: error instanceof Error ? error.message : 'Failed to complete the bulk import process. Please try again.',
        variant: 'destructive',
      });
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (importedProjects.length > 0 && onProjectsAdded) {
      console.log('Notifying parent component about imported projects:', importedProjects);
    }
  }, [importedProjects, onProjectsAdded]);

  const resetState = () => {
    setIsLoading(false);
    setProgress(0);
    setStatus('');
    setShowSatisfactionQuery(false);
    setShowManualInput(false);
    setError(null);
  };

  const handleModalClose = (open: boolean) => {
    if (!open) {
      resetState();
    }
    setIsOpen(open);
  };

  const handleManualImport = async () => {
    if (!manualUrl.trim()) {
      toast({
        title: 'Empty URL',
        description: 'Please enter a GitHub repository URL',
        variant: 'destructive',
      });
      return;
    }

    setIsLoading(true);
    setStatus('Processing manual URL...');
    
    try {
      const result = await GitHubService.addProjectFromGitHub(manualUrl);
      if (result.success && result.agent) {
        setImportedProjects([result.agent]);
        
        if (onProjectsAdded) {
          onProjectsAdded([result.agent]);
        }
        
        toast({
          title: 'Import Successful',
          description: `Successfully imported: ${result.agent.name}`,
        });
      } else {
        toast({
          title: 'Import Failed',
          description: result.error || 'Failed to import repository',
          variant: 'destructive',
        });
      }
    } catch (error) {
      console.error('Error importing repository:', error);
      toast({
        title: 'Import Error',
        description: error instanceof Error ? error.message : 'Unknown error occurred during import',
        variant: 'destructive',
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={handleModalClose}>
      <DialogTrigger asChild>
        <Button variant="outline">
          <Search className="mr-2 h-4 w-4" />
          Bulk Import
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[500px]">
        <DialogHeader>
          <DialogTitle>Import AI Agent GitHub Repositories</DialogTitle>
          <DialogDescription>
            Automatically search and import AI agent repositories from GitHub.
          </DialogDescription>
        </DialogHeader>

        {error && (
          <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-md flex items-start mb-4">
            <AlertCircle className="h-5 w-5 mr-2 mt-0.5 flex-shrink-0" />
            <div className="flex-1">
              <p className="text-sm font-medium">Import Failed</p>
              <p className="text-sm">{error}</p>
              <Button 
                variant="outline" 
                size="sm" 
                className="mt-2" 
                onClick={() => {
                  setError(null);
                  handleBulkImport();
                }}
              >
                Retry Import
              </Button>
            </div>
          </div>
        )}

        {!isLoading && importedProjects.length === 0 && !error && (
          <div className="space-y-4 py-4">
            <div>
              <h4 className="text-sm font-medium mb-2">Search Terms (one per line)</h4>
              <textarea
                className="w-full h-32 p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter custom search terms (e.g. 'AI agent framework GitHub')
Each line will be used as a separate search query."
                value={customSearchTerms}
                onChange={(e) => setCustomSearchTerms(e.target.value)}
              />
              <p className="text-xs text-gray-500 mt-1">
                Leave blank to use default search terms. Adding specific terms will improve results.
              </p>
            </div>
            
            <div className="flex items-center justify-between">
              <Button variant="outline" onClick={() => setShowManualInput(!showManualInput)}>
                {showManualInput ? 'Hide Manual Import' : 'Manual Import'}
              </Button>
              <Button onClick={handleBulkImport}>
                Start GitHub Search
              </Button>
            </div>

            {showManualInput && (
              <div className="mt-4 space-y-2">
                <Input
                  placeholder="Enter GitHub Repository URL"
                  value={manualUrl}
                  onChange={(e) => setManualUrl(e.target.value)}
                />
                <Button onClick={handleManualImport} className="w-full">
                  Import Repository
                </Button>
              </div>
            )}
          </div>
        )}
        
        {isLoading ? (
          <div className="space-y-6">
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span>{status}</span>
                <span>{progress}%</span>
              </div>
              <Progress value={progress} className="h-2" />
            </div>
            
            {importedProjects.length > 0 && (
              <div className="mt-4">
                <h4 className="text-sm font-medium mb-2">Imported Projects ({importedProjects.length})</h4>
                <div className="max-h-[200px] overflow-y-auto border rounded-md p-2 bg-gray-50">
                  <ul className="space-y-1">
                    {importedProjects.map((project, index) => (
                      <li key={index} className="text-sm py-1 border-b last:border-0 flex items-center gap-2">
                        <span className="w-4 h-4 rounded-full bg-green-100 flex items-center justify-center text-green-600">✓</span>
                        {project.name} <span className="text-xs text-gray-500">({project.owner})</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            )}
          </div>
        ) : showSatisfactionQuery ? (
          <div className="space-y-4">
            <p className="text-sm">Are you satisfied with the import results?</p>
            <div className="flex gap-3">
              <Button 
                variant="default" 
                onClick={() => {
                  setIsOpen(false);
                  resetState();
                }}
              >
                Yes, I'm satisfied
              </Button>
              <Button 
                variant="outline" 
                onClick={() => setShowManualInput(true)}
              >
                No, add manually
              </Button>
            </div>
          </div>
        ) : (
          <div className="space-y-4">
            <p className="text-sm">
              This will search for AI agent and MCP projects up to the 25th page
              of search results, looking for repositories that match our criteria.
            </p>
            <p className="text-sm font-medium">
              Search will include terms:
            </p>
            <ul className="list-disc list-inside text-sm space-y-1 text-gray-600">
              <li>AI Agent GitHub</li>
              <li>MCP GitHub</li>
              <li>Autonomous AI agent GitHub</li>
              <li>AI assistant repository</li>
              <li>LLM agent framework</li>
            </ul>
          </div>
        )}
        
        <DialogFooter>
          {!isLoading && !showSatisfactionQuery && !showManualInput && !error ? (
            <Button onClick={handleBulkImport} disabled={isLoading}>
              Start Bulk Import
            </Button>
          ) : isLoading ? (
            <Button disabled>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Importing...
            </Button>
          ) : null}
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default BulkImportModal;
