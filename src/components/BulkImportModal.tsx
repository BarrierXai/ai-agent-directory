import { useState } from 'react';
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from './ui/dialog';
import { Button } from './ui/button';
import { Progress } from './ui/progress';
import { toast } from './ui/use-toast';
import { GitHubService } from '../services/GitHubService';
import { Search, Loader2, Link, AlertCircle } from 'lucide-react';
import { Agent } from '../types';
import { Input } from './ui/input';

interface BulkImportModalProps {
  onProjectsAdded?: (agents: Agent[]) => void;
}

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

  const searchGithub = async (term: string): Promise<string[]> => {
    try {
      // Add a random delay between 1-3 seconds to avoid being blocked
      await new Promise(resolve => setTimeout(resolve, 1000 + Math.random() * 2000));
      
      const searchUrl = `https://html.duckduckgo.com/html/?q=${encodeURIComponent(term)}+site:github.com`;
      const response = await fetch(searchUrl, {
        headers: {
          'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36',
          'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8',
          'Accept-Language': 'en-US,en;q=0.5',
          'DNT': '1',
          'Connection': 'keep-alive',
          'Upgrade-Insecure-Requests': '1',
          'Sec-Fetch-Dest': 'document',
          'Sec-Fetch-Mode': 'navigate',
          'Sec-Fetch-Site': 'none',
          'Sec-Fetch-User': '?1',
          'Cache-Control': 'max-age=0'
        }
      });

      if (!response.ok) {
        throw new Error(`Search request failed with status: ${response.status}`);
      }

      const html = await response.text();

      // More comprehensive regex pattern for GitHub repository URLs
      const urlRegex = /https?:\/\/(?:www\.)?github\.com\/[a-zA-Z0-9-]+\/[a-zA-Z0-9-._]+(?:\/)?(?!\S)/g;
      const matches = html.match(urlRegex) || [];

      // Clean and validate URLs
      const repoUrls = matches
        .map(url => {
          try {
            // Remove trailing slashes and fragments
            const cleanUrl = url.replace(/\/$/, '').split('#')[0];
            const parsedUrl = new URL(cleanUrl);
            
            // Ensure it's a valid GitHub repository URL
            if (parsedUrl.hostname === 'github.com' && 
                parsedUrl.pathname.split('/').filter(Boolean).length >= 2 && 
                !cleanUrl.includes('/issues/') && 
                !cleanUrl.includes('/pull/') &&
                !cleanUrl.includes('/wiki/') &&
                !cleanUrl.includes('/releases/') &&
                !cleanUrl.includes('/actions/') &&
                !cleanUrl.includes('/projects/') &&
                !cleanUrl.includes('/settings/')) {
              return cleanUrl;
            }
            return null;
          } catch {
            return null;
          }
        })
        .filter((url): url is string => url !== null);

      return [...new Set(repoUrls)];
    } catch (error) {
      console.error('Error searching GitHub repositories:', error);
      throw error;
    }
  };

  const simulateGoogleSearch = async (searchTerms: string[]) => {
    setIsLoading(true);
    setProgress(0);
    setImportedProjects([]);
    setTotalFound(0);
    setShowSatisfactionQuery(false);

    try {
      let allRepoUrls: string[] = [];
      const searchQueries = [
        'AI Agent GitHub repository',
        'GitHub MCP framework',
        'autonomous AI agent GitHub',
        'AI assistant open source',
        'LLM agent framework GitHub',
        'multi agent system GitHub',
        'agent based AI GitHub'
      ];

      let successfulSearches = 0;
      let failedSearches = 0;

      for (let i = 0; i < searchQueries.length; i++) {
        const term = searchQueries[i];
        setStatus(`Searching for "${term}"... (${i + 1}/${searchQueries.length})`);
        setProgress(Math.floor((i / searchQueries.length) * 30));

        try {
          const repoUrls = await searchGithub(term);
          allRepoUrls = [...allRepoUrls, ...repoUrls];
          allRepoUrls = [...new Set(allRepoUrls)];
          successfulSearches++;
        } catch (error) {
          console.error(`Error searching for "${term}":`, error);
          failedSearches++;
          
          // Show warning toast but continue with other queries
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
          await new Promise(resolve => setTimeout(resolve, 2000));
        }
      }

      if (successfulSearches === 0) {
        throw new Error('All searches failed. Please try again later.');
      }

      setTotalFound(allRepoUrls.length);
      setStatus(`Found ${allRepoUrls.length} potential GitHub repositories. Analyzing...`);
      setProgress(30);

      let foundProjects: Agent[] = [];
      let processedCount = 0;

      for (const repoUrl of allRepoUrls) {
        const currentProgress = 30 + Math.floor((processedCount / allRepoUrls.length) * 65);
        setProgress(currentProgress);
        setStatus(`Processing repository ${processedCount + 1} of ${allRepoUrls.length}: ${repoUrl}`);

        try {
          const result = await GitHubService.addProjectFromGitHub(repoUrl);
          if (result.success && result.agent) {
            foundProjects.push(result.agent);
            setImportedProjects([...foundProjects]);
          }
        } catch (error) {
          console.error(`Error processing repository ${repoUrl}:`, error);
        }

        processedCount++;
        await new Promise(resolve => setTimeout(resolve, 300));
      }

      if (foundProjects.length === 0) {
        toast({
          title: 'No Results',
          description: 'No valid AI agent repositories were found. Try adjusting the search terms.',
          variant: 'destructive',
        });
        setIsLoading(false);
        return;
      }

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
    } catch (error) {
      console.error('Error during bulk import:', error);
      toast({
        title: 'Import Failed',
        description: error instanceof Error ? error.message : 'An error occurred during the bulk import process',
        variant: 'destructive',
      });
      setIsLoading(false);
      setShowSatisfactionQuery(true);
    }
  };

  const handleBulkImport = async () => {
    setIsLoading(true);
    setStatus('Searching GitHub...');
    simulateGoogleSearch([]);
  };

  const resetState = () => {
    setIsLoading(false);
    setProgress(0);
    setStatus('');
    setShowSatisfactionQuery(false);
    setShowManualInput(false);
  };

  const handleModalClose = (open: boolean) => {
    if (!open) {
      resetState();
    }
    setIsOpen(open);
  };

  return (
    <Dialog open={isOpen} onOpenChange={handleModalClose}>
      <DialogTrigger asChild>
        <Button variant="outline" className="flex items-center gap-2">
          <Search className="w-4 h-4" />
          Add in Bulk
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[600px]">
        <DialogHeader>
          <DialogTitle>Bulk Import AI Agent Projects</DialogTitle>
          <DialogDescription>
            {!showManualInput ? 
              "Search and import AI agent and MCP projects automatically. This will search for repositories containing terms like \"AI Agent\", \"MCP\", etc." :
              "Enter the GitHub URL of an AI agent or MCP project to add it directly."
            }
          </DialogDescription>
        </DialogHeader>
        
        <div className="py-4">
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
          ) : showManualInput ? (
            <div className="space-y-4">
              <div className="flex flex-col gap-2">
                <label htmlFor="manualUrl" className="text-sm font-medium">
                  GitHub Repository URL
                </label>
                <div className="flex gap-2">
                  <Input
                    id="manualUrl"
                    placeholder="https://github.com/username/repository"
                    value={manualUrl}
                    onChange={e => setManualUrl(e.target.value)}
                    className="flex-1"
                  />
                  <Button 
                    onClick={handleManualImport}
                    disabled={isLoading || !manualUrl.trim()}
                  >
                    {isLoading ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : <Link className="mr-2 h-4 w-4" />}
                    Add
                  </Button>
                </div>
              </div>
              
              <div className="flex items-center gap-2 p-2 bg-blue-50 text-blue-700 rounded">
                <AlertCircle className="h-4 w-4" />
                <p className="text-xs">
                  Enter the GitHub URL of an AI agent project you want to add. The repository should include terms like "AI agent" or "MCP" in its description.
                </p>
              </div>
              
              <Button 
                variant="outline" 
                className="w-full"
                onClick={() => {
                  setShowManualInput(false);
                  setShowSatisfactionQuery(false);
                }}
              >
                Go back to bulk import
              </Button>
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
        </div>
        
        <DialogFooter>
          {!isLoading && !showSatisfactionQuery && !showManualInput ? (
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
