import React from 'react';
import { ArrowDown, FileText } from 'lucide-react';
import { motion } from 'framer-motion';
import { getNeuButtonStyles, getNeuCardStyles } from '../utils/neumorphism';

interface HeroProps {
  isDarkMode: boolean;
}

const Hero: React.FC<HeroProps> = ({ isDarkMode }) => {
  const [activeButton, setActiveButton] = React.useState<string | null>(null);

  const handleButtonPress = (name: string) => {
    setActiveButton(name);
    setTimeout(() => setActiveButton(null), 300);
  };

  const scrollToProjects = () => {
    const element = document.getElementById('projects');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section 
      id="home"
      className={`min-h-screen flex items-center justify-center py-12 ${
        isDarkMode ? 'bg-neugray-900 text-neugray-100' : 'bg-neugray-200 text-neugray-800'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center">
          <motion.div 
            className="md:w-1/2 mb-8 md:mb-0"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
              Hello, I'm <span className="text-primary-600">Senjuro</span>
            </h1>
            <h2 className="text-xl md:text-2xl lg:text-3xl mb-6">
              Full Stack Developer
            </h2>
            <p className="text-base md:text-lg mb-8 max-w-lg">
              I build beautiful, functional, and user-friendly web applications. With expertise in both frontend and backend technologies, I create seamless digital experiences.
            </p>
            <div className="flex flex-wrap gap-4">
              <button
                className={`px-6 py-3 flex items-center gap-2 ${
                  getNeuButtonStyles(isDarkMode, activeButton === 'projects')
                }`}
                onClick={() => {
                  handleButtonPress('projects');
                  scrollToProjects();
                }}
              >
                View Projects <ArrowDown size={16} />
              </button>
              <a
                href="/resume.pdf"
                className={`px-6 py-3 flex items-center gap-2 ${
                  getNeuButtonStyles(isDarkMode, activeButton === 'resume')
                }`}
                onClick={() => handleButtonPress('resume')}
              >
                Resume <FileText size={16} />
              </a>
            </div>
          </motion.div>
          
          <motion.div 
            className="md:w-1/2 flex justify-center"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
          >
            <div className={`w-64 h-64 md:w-80 md:h-80 rounded-full ${getNeuCardStyles(isDarkMode)} overflow-hidden`}>
              <img
                src="/468e9605be526ee16c58074751ec0890.jpg"
                alt="Profile"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;