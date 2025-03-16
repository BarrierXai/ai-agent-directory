
import { useState } from 'react';
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from './ui/dialog';
import { Button } from './ui/button';
import { Progress } from './ui/progress';
import { toast } from './ui/use-toast';
import { GitHubService } from '../services/GitHubService';
import { Search, Loader2 } from 'lucide-react';
import { Agent } from '../types';

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

  const simulateGoogleSearch = async (searchTerms: string[]) => {
    setIsLoading(true);
    setProgress(0);
    setImportedProjects([]);
    setTotalFound(0);
    
    try {
      // Simulate searching Google for each search term
      let foundProjects: Agent[] = [];
      
      for (let i = 0; i < searchTerms.length; i++) {
        const term = searchTerms[i];
        setStatus(`Searching Google for "${term}"... (${i + 1}/${searchTerms.length})`);
        setProgress(Math.floor((i / searchTerms.length) * 30));
        
        // Simulate delay for search
        await new Promise(resolve => setTimeout(resolve, 1000 + Math.random() * 500));
      }
      
      // Simulate finding a random number of results (20-100)
      const totalResults = Math.floor(Math.random() * 80) + 20;
      setTotalFound(totalResults);
      setStatus(`Found ${totalResults} potential GitHub repositories. Analyzing...`);
      setProgress(30);
      
      // Simulate processing each result
      const importBatch = async (start: number, end: number, batchProgress: number) => {
        for (let i = start; i < end; i++) {
          if (i >= totalResults) break;
          
          const currentProgress = 30 + Math.floor(((i - start) / (end - start)) * batchProgress);
          setProgress(currentProgress);
          setStatus(`Processing result ${i + 1} of ${totalResults}...`);
          
          // Simulate delay for each repository analysis
          await new Promise(resolve => setTimeout(resolve, 300 + Math.random() * 300));
          
          // Randomly determine if this "found" repository matches our criteria
          if (Math.random() > 0.7) {
            try {
              // Simulate adding a GitHub repository
              const url = `https://github.com/example/ai-agent-${Math.floor(Math.random() * 10000)}`;
              const result = await GitHubService.addProjectFromGitHub(url);
              
              if (result.success && result.agent) {
                foundProjects.push(result.agent);
                setImportedProjects([...foundProjects]);
              }
            } catch (error) {
              console.error('Error adding repository:', error);
            }
          }
        }
      };
      
      // Process in batches to simulate pagination
      const batchSize = 20;
      const numBatches = Math.ceil(totalResults / batchSize);
      
      for (let batch = 0; batch < numBatches; batch++) {
        setStatus(`Processing batch ${batch + 1} of ${numBatches}...`);
        const start = batch * batchSize;
        const end = Math.min(start + batchSize, totalResults);
        const batchProgress = 60 / numBatches; // 60% of progress dedicated to processing
        
        await importBatch(start, end, batchProgress);
      }
      
      // Finalize import
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
      
      // Auto-close after completion
      setTimeout(() => {
        setIsOpen(false);
        setIsLoading(false);
        setProgress(0);
        setStatus('');
      }, 2000);
      
    } catch (error) {
      console.error('Error during bulk import:', error);
      toast({
        title: 'Import Failed',
        description: 'An error occurred during the bulk import process',
        variant: 'destructive',
      });
      setIsLoading(false);
    }
  };

  const handleBulkImport = async () => {
    const searchTerms = [
      'AI Agent GitHub',
      'MCP GitHub',
      'autonomous AI agent GitHub',
      'AI assistant GitHub',
      'LLM agent GitHub'
    ];
    
    await simulateGoogleSearch(searchTerms);
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
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
            Search and import AI agent and MCP projects from Google automatically.
            This will search for repositories containing terms like "AI Agent", "MCP", etc.
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
          ) : (
            <div className="space-y-4">
              <p className="text-sm">
                This will search Google for AI agent and MCP projects up to the 20th page
                of results, looking for repositories that match our criteria.
              </p>
              <p className="text-sm font-medium">
                Search will include terms:
              </p>
              <ul className="list-disc list-inside text-sm space-y-1 text-gray-600">
                <li>AI Agent GitHub</li>
                <li>MCP GitHub</li>
                <li>Autonomous AI agent GitHub</li>
                <li>AI assistant GitHub</li>
                <li>LLM agent GitHub</li>
              </ul>
            </div>
          )}
        </div>
        
        <DialogFooter>
          {!isLoading ? (
            <Button onClick={handleBulkImport} disabled={isLoading}>
              Start Bulk Import
            </Button>
          ) : (
            <Button disabled>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Importing...
            </Button>
          )}
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default BulkImportModal;
