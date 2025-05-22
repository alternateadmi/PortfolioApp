import React, { useState } from 'react';
import { ExternalLink, Github } from 'lucide-react';
import { motion } from 'framer-motion';
import { getNeuButtonStyles, getNeuCardStyles } from '../utils/neumorphism';

interface ProjectsProps {
  isDarkMode: boolean;
}

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  liveUrl: string;
  githubUrl: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: 'E-Commerce Platform',
    description: 'A full-featured e-commerce platform with shopping cart, user authentication, and payment integration.',
    image: 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    tags: ['React', 'Java', 'Spring Boot', 'PostgreSQL'],
    liveUrl: 'https://example.com',
    githubUrl: 'https://github.com',
  },
  {
    id: 2,
    title: 'Task Management App',
    description: 'A productivity app for managing tasks, with drag-and-drop functionality and team collaboration features.',
    image: 'https://images.pexels.com/photos/5717479/pexels-photo-5717479.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    tags: ['React', 'TypeScript', 'Node.js', 'MongoDB'],
    liveUrl: 'https://example.com',
    githubUrl: 'https://github.com',
  },
  {
    id: 3,
    title: 'Weather Dashboard',
    description: 'Real-time weather information with 7-day forecast, location search, and interactive maps.',
    image: 'https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    tags: ['JavaScript', 'CSS', 'Weather API'],
    liveUrl: 'https://example.com',
    githubUrl: 'https://github.com',
  },
  {
    id: 4,
    title: 'Social Media Analytics',
    description: 'Dashboard for tracking and analyzing social media performance metrics across platforms.',
    image: 'https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    tags: ['React', 'D3.js', 'Java', 'Spring Boot'],
    liveUrl: 'https://example.com',
    githubUrl: 'https://github.com',
  },
];

const ProjectsSection: React.FC<ProjectsProps> = ({ isDarkMode }) => {
  const [filter, setFilter] = useState<string>('All');
  const [activeButton, setActiveButton] = useState<string | null>(null);

  const handleButtonPress = (name: string) => {
    setActiveButton(name);
    setTimeout(() => setActiveButton(null), 300);
  };

  const buttonStyle = (name: string) => {
    const isActive = filter === name;
    return `${getNeuButtonStyles(isDarkMode, activeButton === name)} px-4 py-2 ${
      isActive ? (isDarkMode ? 'text-primary-300' : 'text-primary-600') : ''
    }`;
  };

  const filteredProjects = filter === 'All' 
    ? projects 
    : projects.filter(project => project.tags.includes(filter));

  const uniqueTags = Array.from(new Set(projects.flatMap(project => project.tags)));

  return (
    <section 
      id="projects" 
      className={`py-20 ${
        isDarkMode ? 'bg-neugray-800 text-neugray-100' : 'bg-neugray-100 text-neugray-800'
      }`}
    >
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-4">My Projects</h2>
          <p className="max-w-2xl mx-auto mb-8">
            Check out some of my recent work. Each project demonstrates different skills and technologies.
          </p>
          
          <div className="flex flex-wrap justify-center gap-3 mb-8">
            <button
              className={buttonStyle('All')}
              onClick={() => {
                setFilter('All');
                handleButtonPress('All');
              }}
            >
              All
            </button>
            {uniqueTags.map(tag => (
              <button
                key={tag}
                className={buttonStyle(tag)}
                onClick={() => {
                  setFilter(tag);
                  handleButtonPress(tag);
                }}
              >
                {tag}
              </button>
            ))}
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={getNeuCardStyles(isDarkMode)}
            >
              <div className="h-48 overflow-hidden rounded-t-2xl">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map(tag => (
                    <span 
                      key={`${project.id}-${tag}`}
                      className={`px-3 py-1 text-xs rounded-full ${
                        isDarkMode 
                          ? 'bg-neugray-700 text-neugray-200' 
                          : 'bg-neugray-300 text-neugray-700'
                      }`}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex gap-3">
                  <a 
                    href={project.liveUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className={`p-2 ${getNeuButtonStyles(isDarkMode, false)} flex items-center gap-1 text-sm`}
                  >
                    <ExternalLink size={16} /> Live Demo
                  </a>
                  <a 
                    href={project.githubUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className={`p-2 ${getNeuButtonStyles(isDarkMode, false)} flex items-center gap-1 text-sm`}
                  >
                    <Github size={16} /> Code
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;