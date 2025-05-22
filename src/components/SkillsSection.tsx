import React from 'react';
import { motion } from 'framer-motion';
import { Code, Database, Globe, Server, Layers, BookOpen } from 'lucide-react';
import { getNeuCardStyles } from '../utils/neumorphism';

interface SkillsSectionProps {
  isDarkMode: boolean;
}

const SkillsSection: React.FC<SkillsSectionProps> = ({ isDarkMode }) => {
  const skillCategories = [
    {
      id: 1,
      title: 'Frontend Development',
      icon: <Globe size={32} />,
      skills: ['HTML/CSS', 'JavaScript', 'TypeScript', 'React', 'Tailwind CSS', 'Next.js'],
    },
    {
      id: 2,
      title: 'Backend Development',
      icon: <Server size={32} />,
      skills: ['Java', 'Spring Boot', 'Node.js', 'Express', 'RESTful APIs', 'Microservices'],
    },
    {
      id: 3,
      title: 'Database',
      icon: <Database size={32} />,
      skills: ['PostgreSQL', 'MySQL', 'MongoDB', 'Redis', 'SQL', 'ORM'],
    },
    {
      id: 4,
      title: 'DevOps',
      icon: <Layers size={32} />,
      skills: ['Git', 'Docker', 'CI/CD', 'AWS', 'Azure', 'Kubernetes'],
    },
    {
      id: 5,
      title: 'Programming Languages',
      icon: <Code size={32} />,
      skills: ['Java', 'JavaScript', 'TypeScript', 'Python', 'SQL', 'Bash'],
    },
    {
      id: 6,
      title: 'Others',
      icon: <BookOpen size={32} />,
      skills: ['UI/UX Design', 'Agile/Scrum', 'System Design', 'Testing', 'Problem Solving', 'Communication'],
    },
  ];

  return (
    <section 
      id="skills" 
      className={`py-20 ${
        isDarkMode ? 'bg-neugray-900 text-neugray-100' : 'bg-neugray-200 text-neugray-800'
      }`}
    >
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold mb-4">Skills & Expertise</h2>
          <p className="max-w-2xl mx-auto">
            I've developed expertise in various technologies and methodologies throughout my career. 
            Here's an overview of my technical skills and areas of specialization.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`p-6 ${getNeuCardStyles(isDarkMode)}`}
            >
              <div className="flex items-center mb-4">
                <div 
                  className={`mr-3 p-2 rounded-full ${
                    isDarkMode ? 'bg-neugray-700' : 'bg-neugray-300'
                  }`}
                >
                  {category.icon}
                </div>
                <h3 className="text-xl font-bold">{category.title}</h3>
              </div>
              <ul className="space-y-2">
                {category.skills.map((skill, skillIndex) => (
                  <li key={skillIndex} className="flex items-center">
                    <div 
                      className={`w-2 h-2 rounded-full mr-2 ${
                        isDarkMode ? 'bg-primary-400' : 'bg-primary-600'
                      }`}
                    />
                    {skill}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;