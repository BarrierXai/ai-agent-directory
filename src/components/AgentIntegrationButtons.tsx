
import { Button } from './ui/button';
import { toast } from './ui/use-toast';

interface AgentIntegrationButtonsProps {
  repoUrl: string;
  projectName: string;
}

const AgentIntegrationButtons = ({ repoUrl, projectName }: AgentIntegrationButtonsProps) => {
  const handleIntegration = (platform: string) => {
    // In a real implementation, this would use APIs for each platform
    // Currently, we'll just show a toast notification
    
    console.log(`Integrating ${projectName} with ${platform} from ${repoUrl}`);
    
    toast({
      title: `Integration with ${platform}`,
      description: `Started importing ${projectName} to ${platform}`,
    });
    
    // Simulate successful integration after a delay
    setTimeout(() => {
      toast({
        title: "Integration complete",
        description: `${projectName} has been successfully imported to ${platform}`,
      });
    }, 2000);
  };

  return (
    <div className="flex flex-wrap gap-2 mt-2">
      <Button 
        size="sm" 
        variant="outline" 
        className="text-xs py-1 h-7"
        onClick={() => handleIntegration('Cursor AI')}
      >
        Add to Cursor AI
      </Button>
      <Button 
        size="sm" 
        variant="outline" 
        className="text-xs py-1 h-7"
        onClick={() => handleIntegration('Windsurf AI')}
      >
        Add to Windsurf AI
      </Button>
      <Button 
        size="sm" 
        variant="outline" 
        className="text-xs py-1 h-7"
        onClick={() => handleIntegration('Trey AI')}
      >
        Add to Trey AI
      </Button>
    </div>
  );
};

export default AgentIntegrationButtons;
