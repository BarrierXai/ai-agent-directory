
import { useRef } from 'react';
import { Star, GitFork, Eye, ExternalLink, Link2 } from 'lucide-react';
import { Agent } from '../types';
import { formatNumber, formatDate, useInView } from '../utils/animations';

interface AgentCardProps {
  agent: Agent;
}

const AgentCard = ({ agent }: AgentCardProps) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(cardRef, '-50px');

  return (
    <div 
      ref={cardRef}
      className={`group relative flex flex-col h-full bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden card-hover transform transition-all duration-500 ${
        isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      } ${agent.isLoading ? 'animate-pulse' : ''}`}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-white to-white opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      
      <div className="p-5 flex flex-col h-full z-10">
        <div className="flex items-center mb-4">
          <div className="relative w-10 h-10 overflow-hidden rounded-full bg-gray-100 mr-3">
            {!agent.isLoading && (
              <img 
                src={agent.avatar} 
                alt={agent.owner}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                loading="lazy"
              />
            )}
          </div>
          
          <div className="flex-1 min-w-0">
            <p className="text-sm font-medium text-gray-600 truncate">
              {agent.isLoading ? (
                <span className="bg-gray-200 h-4 w-24 block rounded"></span>
              ) : (
                agent.owner
              )}
            </p>
          </div>
          
          {!agent.isLoading && (
            <div className="ml-2 flex items-center text-xs font-medium bg-gray-100 text-gray-800 px-2 py-1 rounded-full">
              {agent.language}
            </div>
          )}
        </div>
        
        <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
          {agent.isLoading ? (
            <span className="bg-gray-200 h-7 w-full block rounded"></span>
          ) : (
            agent.name
          )}
        </h3>
        
        <p className="text-gray-600 text-sm flex-grow mb-4">
          {agent.isLoading ? (
            <>
              <span className="bg-gray-200 h-4 w-full block rounded mb-2"></span>
              <span className="bg-gray-200 h-4 w-3/4 block rounded"></span>
            </>
          ) : (
            agent.description
          )}
        </p>
        
        {!agent.isLoading && (
          <div className="flex flex-wrap gap-2 mb-4">
            {agent.topics.slice(0, 4).map((topic) => (
              <span 
                key={topic} 
                className="text-xs bg-blue-50 text-blue-700 px-2 py-1 rounded-full"
              >
                {topic}
              </span>
            ))}
            {agent.topics.length > 4 && (
              <span className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded-full">
                +{agent.topics.length - 4}
              </span>
            )}
          </div>
        )}
        
        <div className="flex items-center justify-between mt-auto pt-4 border-t border-gray-100">
          {agent.isLoading ? (
            <div className="flex items-center space-x-4">
              <span className="bg-gray-200 h-4 w-16 block rounded"></span>
              <span className="bg-gray-200 h-4 w-16 block rounded"></span>
            </div>
          ) : (
            <div className="flex items-center space-x-4 text-sm text-gray-600">
              <div className="flex items-center">
                <Star size={16} className="text-yellow-500 mr-1" />
                <span>{formatNumber(agent.stars)}</span>
              </div>
              <div className="flex items-center">
                <GitFork size={16} className="text-gray-500 mr-1" />
                <span>{formatNumber(agent.forks)}</span>
              </div>
            </div>
          )}
          
          {agent.isLoading ? (
            <span className="bg-gray-200 h-4 w-20 block rounded"></span>
          ) : (
            <div className="text-xs text-gray-500">
              Updated {formatDate(agent.updated)}
            </div>
          )}
        </div>
      </div>
      
      {!agent.isLoading && (
        <a 
          href={agent.url}
          target="_blank"
          rel="noopener noreferrer"
          className="absolute inset-0 z-20"
          aria-label={`View ${agent.name} on GitHub`}
        >
          <span className="sr-only">View project</span>
        </a>
      )}
      
      {!agent.isLoading && (
        <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity z-30">
          <a
            href={agent.url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center w-8 h-8 bg-white/90 backdrop-blur-sm border border-gray-200 rounded-full text-gray-600 hover:text-blue-600 hover:border-blue-300 transition-colors shadow-sm"
            onClick={(e) => e.stopPropagation()}
            aria-label={`View ${agent.name} on GitHub`}
          >
            <ExternalLink size={14} />
          </a>
        </div>
      )}
    </div>
  );
};

export default AgentCard;
