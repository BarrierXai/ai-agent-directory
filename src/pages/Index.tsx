import { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import DirectoryGrid from '../components/DirectoryGrid';
import { GitHubService } from '../services/GitHubService';
import { toast } from '@/components/ui/use-toast';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Agent } from '@/types';
import { Layers, Heart } from 'lucide-react';

const Index = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [showAddProjectDialog, setShowAddProjectDialog] = useState(false);
  const [newProject, setNewProject] = useState<Partial<Agent>>({
    name: '',
    description: '',
    url: '',
    owner: '',
    language: '',
    license: '',
    topics: []
  });
  
  const [featuredProjects, setFeaturedProjects] = useState<Agent[]>([]);
  const [showContactSection, setShowContactSection] = useState(false);

  useEffect(() => {
    const getFeaturedProjects = async () => {
      const allAgents = await GitHubService.fetchAgents();
      const trending = [...allAgents]
        .sort((a, b) => new Date(b.updated).getTime() - new Date(a.updated).getTime())
        .slice(0, 6);
      setFeaturedProjects(trending);
    };
    
    getFeaturedProjects();
  }, []);

  useEffect(() => {
    const lastRefresh = localStorage.getItem('lastAgentRefresh');
    const now = new Date();
    
    if (!lastRefresh || (now.getTime() - new Date(lastRefresh).getTime() > 24 * 60 * 60 * 1000)) {
      GitHubService.refreshAgentData().then(() => {
        localStorage.setItem('lastAgentRefresh', now.toISOString());
      });
    }
  }, []);

  const handleSearch = (query: string) => {
    setSearchQuery(query);
    
    const directorySection = document.getElementById('directory');
    if (directorySection) {
      directorySection.scrollIntoView({ behavior: 'smooth' });
    }
  };
  
  const handleAddProject = () => {
    setShowContactSection(true);
    setTimeout(() => {
      const contactSection = document.getElementById('contact');
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  };
  
  const handleSubmitProject = () => {
    if (!newProject.name || !newProject.url || !newProject.description) {
      toast({
        title: "Missing Information",
        description: "Please fill in all required fields.",
        variant: "destructive",
      });
      return;
    }
    
    toast({
      title: "Project Submitted",
      description: "Your project has been submitted for review and will be added to the directory soon.",
    });
    
    setShowAddProjectDialog(false);
    setNewProject({
      name: '',
      description: '',
      url: '',
      owner: '',
      language: '',
      license: '',
      topics: []
    });
  };

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      <main>
        <Hero onSearch={handleSearch} onAddProject={handleAddProject} />
        
        <section id="featured" className="py-12 bg-gray-50/30">
          <div className="max-w-7xl mx-auto px-4 md:px-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-8">Featured Projects</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {featuredProjects.map((project, index) => (
                <div key={index} className="bg-white rounded-lg shadow-md p-5 hover:shadow-lg transition-shadow">
                  <div className="flex items-start mb-4">
                    <img 
                      src={project.avatar || "https://via.placeholder.com/40"} 
                      alt={project.name}
                      className="w-10 h-10 rounded-full mr-3"
                    />
                    <div>
                      <h3 className="font-semibold text-lg">{project.name}</h3>
                      <p className="text-sm text-gray-500">{project.owner}</p>
                    </div>
                  </div>
                  <p className="text-gray-700 text-sm mb-3 line-clamp-2">{project.description}</p>
                  <div className="flex justify-between items-center">
                    <div className="flex items-center space-x-3 text-sm">
                      <span className="flex items-center">
                        <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 16 16">
                          <path d="M8 .25a.75.75 0 0 1 .673.418l1.882 3.815 4.21.612a.75.75 0 0 1 .416 1.279l-3.046 2.97.719 4.192a.75.75 0 0 1-1.088.791L8 12.347l-3.766 1.98a.75.75 0 0 1-1.088-.79l.72-4.194L.818 6.374a.75.75 0 0 1 .416-1.28l4.21-.611L7.327.668A.75.75 0 0 1 8 .25z"/>
                        </svg>
                        {project.stars.toLocaleString()}
                      </span>
                      <span className="text-xs px-2 py-1 bg-gray-100 rounded-full">{project.language}</span>
                    </div>
                    <a 
                      href={project.url} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-sm font-medium text-blue-600 hover:text-blue-800"
                    >
                      View Project →
                    </a>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mt-8 text-center">
              <Button 
                variant="outline" 
                onClick={() => {
                  const directorySection = document.getElementById('directory');
                  if (directorySection) {
                    directorySection.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
              >
                Browse All Projects
              </Button>
            </div>
          </div>
        </section>
        
        <div id="directory" className="bg-white py-8 min-h-screen">
          <DirectoryGrid initialSearchQuery={searchQuery} />
        </div>
        
        <section id="about" className="py-16 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4 md:px-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">About Agent MCP Directory</h2>
            
            <div className="bg-white rounded-lg shadow-md p-8">
              <p className="text-gray-700 mb-6">
                Agent MCP Directory is a project to enable access to open source AI agent projects. 
                It's an initiative by techies for techies to support them in receiving unfiltered 
                information about the latest developments in AI agent technology and MCP orchestration.
              </p>
              
              <p className="text-gray-700 mb-6">
                Our goal is to catalog and maintain the most comprehensive collection of open-source 
                AI agent projects and tools. We automatically scan GitHub, Google, and X (formerly Twitter) 
                for new projects that are tagged with "AI Agent", "AI Agents", or "MCP orchestration", 
                ensuring our directory stays up to date with the latest innovations.
              </p>
              
              <p className="text-gray-700 mb-6">
                The directory updates daily to ensure you always have access to the most current 
                information. We particularly highlight projects that are gaining traction, newly 
                released with significant potential, or showing rapid growth.
              </p>
              
              <h3 className="text-lg font-semibold mb-3">Our Mission</h3>
              <p className="text-gray-700 mb-6">
                To provide the most comprehensive, up-to-date, and accessible directory of open-source 
                AI agent projects, enabling developers, researchers, and enthusiasts to discover, 
                contribute to, and build upon the collective knowledge of the community.
              </p>
              
              <h3 className="text-lg font-semibold mb-3">Get Involved</h3>
              <p className="text-gray-700">
                This directory is a community effort. If you've created or know of an open-source AI agent 
                project that should be included, please use the "Add Project" button to submit it. 
                Together, we can build the most valuable resource for AI agent technology.
              </p>
            </div>
          </div>
        </section>
        
        <section id="contact" className="py-16 bg-white">
          <div className="max-w-4xl mx-auto px-4 md:px-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Contact Us</h2>
            
            <div className="bg-white rounded-lg shadow-md p-8">
              <p className="text-gray-700 mb-6">
                Want to add your AI agent project to our directory? Send us an email with your project details.
              </p>
              
              <div className="bg-gray-100 p-4 rounded-lg flex items-center mb-6">
                <div className="bg-blue-600 p-2 rounded-full mr-3">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <p className="text-sm text-gray-500 font-medium">Email Address</p>
                  <p className="text-lg font-bold">kasem@ie-14.com</p>
                </div>
              </div>
              
              <p className="text-gray-700">
                Please include your project name, GitHub URL, description, and any other relevant information in your email.
                We'll review your submission and get back to you within 48 hours.
              </p>
            </div>
          </div>
        </section>
      </main>
      
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center mb-4">
                <div className="flex items-center justify-center w-8 h-8 mr-2">
                  <div className="relative">
                    <Layers className="w-6 h-6 text-blue-400 absolute" style={{ top: -2, left: -2 }} />
                    <Heart className="w-5 h-5 text-red-400 absolute" style={{ top: 0, left: 0 }} />
                  </div>
                </div>
                <div className="text-xl font-bold font-display tracking-tight">
                  <span className="text-blue-400">Agent</span>
                  <span className="text-white"> MCP</span>
                </div>
              </div>
              <p className="text-gray-400 text-sm">
                The definitive resource for discovering and exploring AI agents and open-source projects.
              </p>
            </div>
            
            <div>
              <h4 className="text-sm font-semibold uppercase tracking-wider text-gray-400 mb-4">Categories</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Autonomous Agents</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white transition-colors">LLM Frameworks</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white transition-colors">AI Tools</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white transition-colors">MCP Projects</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-sm font-semibold uppercase tracking-wider text-gray-400 mb-4">Resources</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="text-gray-300 hover:text-white transition-colors">GitHub</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Documentation</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white transition-colors">API</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white transition-colors">About</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-sm font-semibold uppercase tracking-wider text-gray-400 mb-4">Legal</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Terms of Service</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Cookie Policy</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              &copy; {new Date().getFullYear()} Agent MCP Directory. All rights reserved.
            </p>
            
            <div className="mt-4 md:mt-0 flex space-x-6">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <span className="sr-only">GitHub</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <span className="sr-only">Twitter</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </footer>
      
      <Dialog open={showAddProjectDialog} onOpenChange={setShowAddProjectDialog}>
        <DialogContent className="sm:max-w-lg">
          <DialogHeader>
            <DialogTitle>Add Open Source Project</DialogTitle>
            <DialogDescription>
              Submit your open source AI agent or MCP project to be featured in our directory.
            </DialogDescription>
          </DialogHeader>
          
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="project-name" className="text-right">Name</Label>
              <Input 
                id="project-name" 
                value={newProject.name} 
                onChange={(e) => setNewProject({...newProject, name: e.target.value})}
                className="col-span-3" 
                placeholder="Project name"
              />
            </div>
            
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="project-url" className="text-right">GitHub URL</Label>
              <Input 
                id="project-url" 
                value={newProject.url} 
                onChange={(e) => setNewProject({...newProject, url: e.target.value})}
                className="col-span-3" 
                placeholder="https://github.com/username/project"
              />
            </div>
            
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="project-desc" className="text-right">Description</Label>
              <Textarea 
                id="project-desc" 
                value={newProject.description} 
                onChange={(e) => setNewProject({...newProject, description: e.target.value})}
                className="col-span-3" 
                placeholder="Short description of your project"
                rows={3}
              />
            </div>
            
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="project-owner" className="text-right">Owner/Organization</Label>
              <Input 
                id="project-owner" 
                value={newProject.owner} 
                onChange={(e) => setNewProject({...newProject, owner: e.target.value})}
                className="col-span-3" 
                placeholder="GitHub username or organization"
              />
            </div>
            
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="project-lang" className="text-right">Primary Language</Label>
              <Input 
                id="project-lang" 
                value={newProject.language} 
                onChange={(e) => setNewProject({...newProject, language: e.target.value})}
                className="col-span-3" 
                placeholder="e.g., Python, JavaScript, etc."
              />
            </div>
            
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="project-license" className="text-right">License</Label>
              <Input 
                id="project-license" 
                value={newProject.license} 
                onChange={(e) => setNewProject({...newProject, license: e.target.value})}
                className="col-span-3" 
                placeholder="e.g., MIT, Apache-2.0, etc."
              />
            </div>
            
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="project-topics" className="text-right">Topics</Label>
              <Input 
                id="project-topics" 
                value={newProject.topics ? newProject.topics.join(', ') : ''}
                onChange={(e) => setNewProject({
                  ...newProject, 
                  topics: e.target.value.split(',').map(topic => topic.trim())
                })}
                className="col-span-3" 
                placeholder="ai, agents, mcp, etc. (comma separated)"
              />
            </div>
          </div>
          
          <DialogFooter>
            <Button type="button" variant="outline" onClick={() => setShowAddProjectDialog(false)}>
              Cancel
            </Button>
            <Button type="button" onClick={handleSubmitProject}>
              Submit Project
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Index;
