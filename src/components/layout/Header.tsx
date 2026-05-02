import React, { useState, useEffect } from 'react';
import { Menu, X, Moon, Sun } from 'lucide-react';
import { getNeuButtonStyles } from '../../utils/neumorphism';

interface HeaderProps {
  isDarkMode: boolean;
  toggleDarkMode: () => void;
}

const Header: React.FC<HeaderProps> = ({ isDarkMode, toggleDarkMode }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeButton, setActiveButton] = useState<string | null>(null);

  const handleScroll = () => {
    if (window.scrollY > 50) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setMobileMenuOpen(false);
    }
  };

  const headerClass = isScrolled
    ? `fixed w-full z-50 transition-all duration-300 ${
        isDarkMode ? 'bg-neugray-900/90' : 'bg-neugray-100/90'
      } backdrop-blur-sm border-b ${
        isDarkMode ? 'border-neugray-800' : 'border-neugray-300'
      }`
    : `fixed w-full z-50 transition-all duration-300 ${
        isDarkMode ? 'bg-neugray-900/50' : 'bg-transparent'
      }`;

  const buttonStyle = (name: string) => {
    return getNeuButtonStyles(isDarkMode, activeButton === name);
  };

  const handleButtonPress = (name: string) => {
    setActiveButton(name);
    setTimeout(() => setActiveButton(null), 300);
  };

  return (
    <header className={headerClass}>
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div 
          className={`text-xl font-bold ${
            isDarkMode ? 'text-white' : 'text-neugray-800'
          }`}
        >
          Senjuro
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {['Home', 'Projects', 'Skills', 'Contact'].map((item) => (
            <button
              key={item}
              className={`px-4 py-2 ${buttonStyle(item.toLowerCase())}`}
              onClick={() => {
                handleButtonPress(item.toLowerCase());
                scrollToSection(item.toLowerCase());
              }}
            >
              {item}
            </button>
          ))}
          <button
            className={`p-2 ${buttonStyle('theme')}`}
            onClick={() => {
              handleButtonPress('theme');
              toggleDarkMode();
            }}
            aria-label="Toggle dark mode"
          >
            {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
          </button>
        </nav>

        {/* Mobile Menu Button */}
        <div className="flex items-center md:hidden">
          <button
            className={`p-2 ${buttonStyle('menu')}`}
            onClick={() => {
              handleButtonPress('menu');
              setMobileMenuOpen(!mobileMenuOpen);
            }}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div 
          className={`md:hidden ${
            isDarkMode ? 'bg-neugray-900' : 'bg-neugray-100'
          } px-4 py-2`}
        >
          <nav className="flex flex-col space-y-4 pb-4">
            {['Home', 'Projects', 'Skills', 'Contact'].map((item) => (
              <button
                key={item}
                className={`px-4 py-2 ${buttonStyle(item.toLowerCase())}`}
                onClick={() => {
                  handleButtonPress(item.toLowerCase());
                  scrollToSection(item.toLowerCase());
                }}
              >
                {item}
              </button>
            ))}
            <button
              className={`p-2 ${buttonStyle('theme')} w-min`}
              onClick={() => {
                handleButtonPress('theme');
                toggleDarkMode();
              }}
              aria-label="Toggle dark mode"
            >
              {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;