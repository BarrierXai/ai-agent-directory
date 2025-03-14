
import { useState, useRef, useEffect } from 'react';
import { ChevronDown, ArrowUpDown, Star, GitFork, Clock } from 'lucide-react';
import { SortOption } from '../types';

interface FiltersProps {
  onLanguageChange: (language: string | null) => void;
  onSortChange: (sort: SortOption) => void;
  selectedLanguage: string | null;
  selectedSort: SortOption;
  languages: string[];
}

const Filters = ({ 
  onLanguageChange, 
  onSortChange, 
  selectedLanguage, 
  selectedSort,
  languages
}: FiltersProps) => {
  const [languageMenuOpen, setLanguageMenuOpen] = useState(false);
  const [sortMenuOpen, setSortMenuOpen] = useState(false);
  const languageRef = useRef<HTMLDivElement>(null);
  const sortRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (languageRef.current && !languageRef.current.contains(event.target as Node)) {
        setLanguageMenuOpen(false);
      }
      if (sortRef.current && !sortRef.current.contains(event.target as Node)) {
        setSortMenuOpen(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const getSortLabel = (sort: SortOption): string => {
    switch (sort) {
      case 'stars':
        return 'Most Stars';
      case 'forks':
        return 'Most Forks';
      case 'updated':
        return 'Recently Updated';
      default:
        return 'Sort';
    }
  };

  const getSortIcon = (sort: SortOption) => {
    switch (sort) {
      case 'stars':
        return <Star size={16} />;
      case 'forks':
        return <GitFork size={16} />;
      case 'updated':
        return <Clock size={16} />;
      default:
        return <ArrowUpDown size={16} />;
    }
  };

  return (
    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 py-6 px-4 bg-gray-50/50 rounded-lg border border-gray-100">
      <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
        <div ref={languageRef} className="relative">
          <button
            onClick={() => setLanguageMenuOpen(!languageMenuOpen)}
            className="flex items-center justify-between min-w-32 px-3 py-2 bg-white border border-gray-200 rounded-md shadow-sm hover:bg-gray-50 transition-colors"
          >
            <span>{selectedLanguage || 'All Languages'}</span>
            <ChevronDown size={16} className={`ml-2 transition-transform ${languageMenuOpen ? 'rotate-180' : ''}`} />
          </button>
          {languageMenuOpen && (
            <div className="absolute z-40 mt-1 min-w-48 bg-white border border-gray-200 rounded-md shadow-lg overflow-hidden animate-scale-in">
              <div className="max-h-60 overflow-y-auto">
                <button
                  onClick={() => {
                    onLanguageChange(null);
                    setLanguageMenuOpen(false);
                  }}
                  className={`w-full text-left px-4 py-2 hover:bg-gray-100 transition-colors ${!selectedLanguage ? 'bg-gray-100' : ''}`}
                >
                  All Languages
                </button>
                {languages.map((language) => (
                  <button
                    key={language}
                    onClick={() => {
                      onLanguageChange(language);
                      setLanguageMenuOpen(false);
                    }}
                    className={`w-full text-left px-4 py-2 hover:bg-gray-100 transition-colors ${selectedLanguage === language ? 'bg-gray-100' : ''}`}
                  >
                    {language}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
      
      <div ref={sortRef} className="relative">
        <button
          onClick={() => setSortMenuOpen(!sortMenuOpen)}
          className="flex items-center justify-between min-w-40 px-3 py-2 bg-white border border-gray-200 rounded-md shadow-sm hover:bg-gray-50 transition-colors"
        >
          <span className="flex items-center">
            {getSortIcon(selectedSort)}
            <span className="ml-2">{getSortLabel(selectedSort)}</span>
          </span>
          <ChevronDown size={16} className={`ml-2 transition-transform ${sortMenuOpen ? 'rotate-180' : ''}`} />
        </button>
        {sortMenuOpen && (
          <div className="absolute right-0 z-40 mt-1 min-w-40 bg-white border border-gray-200 rounded-md shadow-lg overflow-hidden animate-scale-in">
            <button
              onClick={() => {
                onSortChange('stars');
                setSortMenuOpen(false);
              }}
              className={`w-full text-left px-4 py-2 hover:bg-gray-100 transition-colors flex items-center ${selectedSort === 'stars' ? 'bg-gray-100' : ''}`}
            >
              <Star size={16} className="mr-2" /> Most Stars
            </button>
            <button
              onClick={() => {
                onSortChange('forks');
                setSortMenuOpen(false);
              }}
              className={`w-full text-left px-4 py-2 hover:bg-gray-100 transition-colors flex items-center ${selectedSort === 'forks' ? 'bg-gray-100' : ''}`}
            >
              <GitFork size={16} className="mr-2" /> Most Forks
            </button>
            <button
              onClick={() => {
                onSortChange('updated');
                setSortMenuOpen(false);
              }}
              className={`w-full text-left px-4 py-2 hover:bg-gray-100 transition-colors flex items-center ${selectedSort === 'updated' ? 'bg-gray-100' : ''}`}
            >
              <Clock size={16} className="mr-2" /> Recently Updated
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Filters;
