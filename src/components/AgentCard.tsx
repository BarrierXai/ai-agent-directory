
import { Agent } from "../types";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { StarIcon, GitForkIcon } from "lucide-react";
import AgentIntegrationButtons from "./AgentIntegrationButtons";

interface AgentCardProps {
  agent: Agent;
}

const AgentCard = ({ agent }: AgentCardProps) => {
  const { 
    name, 
    description, 
    stars, 
    forks, 
    url, 
    owner, 
    avatar, 
    language, 
    topics, 
    license,
    isLoading 
  } = agent;

  if (isLoading) {
    return (
      <Card className="h-full opacity-70 animate-pulse">
        <CardHeader className="pb-2">
          <div className="w-3/4 h-6 bg-gray-200 rounded"></div>
        </CardHeader>
        <CardContent className="pb-3">
          <div className="space-y-2">
            <div className="w-full h-4 bg-gray-200 rounded"></div>
            <div className="w-5/6 h-4 bg-gray-200 rounded"></div>
            <div className="w-4/6 h-4 bg-gray-200 rounded"></div>
          </div>
        </CardContent>
        <CardFooter>
          <div className="w-full flex justify-between">
            <div className="w-1/3 h-4 bg-gray-200 rounded"></div>
            <div className="w-1/3 h-4 bg-gray-200 rounded"></div>
          </div>
        </CardFooter>
      </Card>
    );
  }

  const formatNumber = (num: number) => {
    if (num >= 1000) {
      return (num / 1000).toFixed(1) + 'k';
    }
    return num.toString();
  };

  return (
    <Card className="h-full flex flex-col transition-all duration-200 hover:shadow-md overflow-hidden border border-gray-200 bg-white">
      <CardHeader className="pb-2 flex items-start gap-3">
        <div className="flex-shrink-0">
          <img 
            src={avatar} 
            alt={`${owner} avatar`} 
            className="w-8 h-8 rounded-full"
          />
        </div>
        <div className="flex-grow min-w-0">
          <CardTitle className="text-base font-semibold leading-tight truncate">
            <a 
              href={url} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="hover:text-blue-600 transition-colors"
            >
              {name}
            </a>
          </CardTitle>
          <div className="text-sm text-gray-500 truncate">
            {owner}
          </div>
        </div>
      </CardHeader>
      
      <CardContent className="py-3 flex-grow">
        <p className="text-sm text-gray-700 line-clamp-3">{description}</p>
        
        <div className="flex flex-wrap gap-1 mt-3">
          {language && (
            <Badge variant="outline" className="text-xs bg-gray-100">
              {language}
            </Badge>
          )}
          
          {topics.slice(0, 3).map(topic => (
            <Badge key={topic} variant="outline" className="text-xs">
              {topic}
            </Badge>
          ))}
          
          {topics.length > 3 && (
            <Badge variant="outline" className="text-xs">
              +{topics.length - 3}
            </Badge>
          )}
        </div>
      </CardContent>
      
      <CardFooter className="pt-0 pb-3 flex flex-col gap-2">
        <div className="flex items-center justify-between w-full text-xs text-gray-500">
          <div className="flex items-center gap-2">
            <span className="flex items-center gap-1">
              <StarIcon className="w-3.5 h-3.5" />
              {formatNumber(stars)}
            </span>
            <span className="flex items-center gap-1">
              <GitForkIcon className="w-3.5 h-3.5" />
              {formatNumber(forks)}
            </span>
          </div>
          <span className="flex items-center gap-1">
            {license || "No License"}
          </span>
        </div>
        
        <AgentIntegrationButtons repoUrl={url} projectName={name} />
      </CardFooter>
    </Card>
  );
};

export default AgentCard;
