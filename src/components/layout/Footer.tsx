import React from 'react';
import { Github, Linkedin, Twitter, Mail } from 'lucide-react';
import { getNeuButtonStyles } from '../../utils/neumorphism';

interface FooterProps {
  isDarkMode: boolean;
}

const Footer: React.FC<FooterProps> = ({ isDarkMode }) => {
  const [activeButton, setActiveButton] = React.useState<string | null>(null);

  const handleButtonPress = (name: string) => {
    setActiveButton(name);
    setTimeout(() => setActiveButton(null), 300);
  };

  const buttonStyle = (name: string) => {
    return getNeuButtonStyles(isDarkMode, activeButton === name);
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer 
      className={`py-12 ${
        isDarkMode ? 'bg-neugray-900 text-neugray-100' : 'bg-neugray-200 text-neugray-800'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-8 md:mb-0">
            <h3 className="text-xl font-bold mb-2">Senjuro</h3>
            <p className="text-sm">Full Stack Developer</p>
          </div>
          
          <div className="flex space-x-4">
            <a 
              href="https://github.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className={`p-2 ${buttonStyle('github')}`}
              onClick={() => handleButtonPress('github')}
            >
              <Github size={20} />
              <span className="sr-only">GitHub</span>
            </a>
            <a 
              href="https://linkedin.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className={`p-2 ${buttonStyle('linkedin')}`}
              onClick={() => handleButtonPress('linkedin')}
            >
              <Linkedin size={20} />
              <span className="sr-only">LinkedIn</span>
            </a>
            <a 
              href="https://twitter.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className={`p-2 ${buttonStyle('twitter')}`}
              onClick={() => handleButtonPress('twitter')}
            >
              <Twitter size={20} />
              <span className="sr-only">Twitter</span>
            </a>
            <a 
              href="mailto:your.email@example.com" 
              className={`p-2 ${buttonStyle('mail')}`}
              onClick={() => handleButtonPress('mail')}
            >
              <Mail size={20} />
              <span className="sr-only">Email</span>
            </a>
          </div>
        </div>
        
        <div className="border-t mt-8 pt-8 text-center text-sm">
          <p>&copy; {currentYear} Your Name. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;