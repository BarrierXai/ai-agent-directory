
import { useState, useEffect } from 'react';
import { Github, Menu, X, Layers } from 'lucide-react';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-4 md:px-8 py-3 ${
        scrolled 
          ? 'bg-white/80 backdrop-blur-md border-b border-gray-200/50 shadow-sm' 
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <div className="flex items-center">
            <div className="flex items-center justify-center w-8 h-8 mr-2">
              <div className="relative">
                <Layers className="w-6 h-6 text-blue-600 absolute" style={{ top: -2, left: -2 }} />
                <Layers className="w-6 h-6 text-purple-600 absolute" style={{ top: 2, left: 2 }} />
              </div>
            </div>
            <div className="text-xl font-bold font-display tracking-tight">
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Agent</span>
              <span className="text-gray-900">MCP</span>
            </div>
          </div>
          <div className="hidden md:flex items-center justify-center bg-black/5 rounded-full px-2 py-0.5 text-xs font-medium">
            Directory
          </div>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-6">
          <a href="#featured" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">
            Featured
          </a>
          <a href="#directory" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">
            Directory
          </a>
          <a href="#about" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">
            About
          </a>
          <a 
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center bg-gray-900 text-white px-3 py-1.5 text-sm rounded-full hover:bg-gray-800 transition-all duration-200"
          >
            <Github size={14} className="mr-1.5" /> 
            <span>GitHub</span>
          </a>
        </div>

        {/* Mobile menu button */}
        <button 
          className="md:hidden flex items-center" 
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? (
            <X size={24} className="text-gray-900" />
          ) : (
            <Menu size={24} className="text-gray-900" />
          )}
        </button>
      </div>

      {/* Mobile menu */}
      <div 
        className={`fixed inset-0 z-40 bg-white flex flex-col pt-20 px-6 md:hidden transform transition-transform duration-300 ease-in-out ${
          mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col space-y-6 text-lg">
          <a 
            href="#featured" 
            className="text-gray-900 py-2 border-b border-gray-100"
            onClick={() => setMobileMenuOpen(false)}
          >
            Featured
          </a>
          <a 
            href="#directory" 
            className="text-gray-900 py-2 border-b border-gray-100"
            onClick={() => setMobileMenuOpen(false)}
          >
            Directory
          </a>
          <a 
            href="#about" 
            className="text-gray-900 py-2 border-b border-gray-100"
            onClick={() => setMobileMenuOpen(false)}
          >
            About
          </a>
          <a 
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center bg-gray-900 text-white px-4 py-3 rounded-md"
            onClick={() => setMobileMenuOpen(false)}
          >
            <Github size={18} className="mr-2" /> 
            <span>GitHub</span>
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
