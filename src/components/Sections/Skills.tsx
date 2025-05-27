import React from 'react';

type Skill = {
  category: string;
  items: {
    name: string;
    icon: string;
  }[];
};

const skills: Skill[] = [
  {
    category: 'Frontend',
    items: [
      { name: 'HTML5/CSS3', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg' },
      { name: 'JavaScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
      { name: 'React', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
      // { name: 'TypeScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg' },
      // { name: 'Vue.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg' },
    ],
  },
  {
    category: 'Backend',
    items: [
      { name: 'Node.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' },
      { name: 'Express', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg' },
      { name: 'MongoDB', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg' },
      // { name: 'PostgreSQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg' },
      { name: 'Firebase', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg' },
    ],
  },
  {
    category: 'Langagues & Libraries',
    items: [
      { name: 'Python', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' },
      { name: 'C', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-plain.svg' },
      { name: 'Java', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-plain.svg' },
      { name: 'pandas', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pandas/pandas-plain.svg' },
      { name: 'numpy', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/numpy/numpy-plain.svg' },
      { name: 'SQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/database/database-plain.svg' },

    ],
  },
  {
    category: 'Other ',
    items: [
      { name: 'Git', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg' },
      // { name: 'Docker', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg' },
      // { name: 'Google Colab', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/colab/colab-original.svg' },
      { name: 'Linux', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg' },
      { name: 'vs Code', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-plain.svg' },
    ],
  },
];

const SkillCard: React.FC<{ name: string; icon: string }> = ({ name, icon }) => {
  return (
    <div className="group flex items-center space-x-3 p-4 bg-white dark:bg-gray-700 rounded-xl shadow-skill hover:shadow-hover transform hover:-translate-y-1 transition-all duration-300 animate-scale-in">
      <div className="p-2 rounded-lg bg-gray-50 dark:bg-gray-600 group-hover:bg-blue-50 dark:group-hover:bg-blue-900/30 transition-colors duration-300">
        <img src={icon} alt={name} className="w-8 h-8 group-hover:scale-110 transition-transform duration-300" />
      </div>
      <span className="text-sm font-medium text-gray-800 dark:text-gray-200 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
        {name}
      </span>
    </div>
  );
};

const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-20 bg-gradient-to-b from-white to-gray-50 dark:from-gray-800 dark:to-gray-900">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
            My Skills
          </h2>
          <div className="mt-4 h-1 w-20 bg-blue-600 mx-auto transform transition-transform duration-300 hover:scale-x-150"></div>
          <p className="mt-4 text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Technologies and tools I work with
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {skills.map((skillGroup, index) => (
            <div 
              key={skillGroup.category}
              className="bg-gray-50/50 dark:bg-gray-700/50 p-8 rounded-2xl shadow-card backdrop-blur-sm hover:shadow-hover transition-all duration-300"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-6 flex items-center">
                <span className="relative">
                  {skillGroup.category}
                  <span className="absolute -bottom-2 left-0 w-12 h-1 bg-blue-600 rounded-full transform origin-left transition-transform duration-300 hover:scale-x-150"></span>
                </span>
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {skillGroup.items.map((skill, skillIndex) => (
                  <SkillCard 
                    key={skill.name} 
                    name={skill.name} 
                    icon={skill.icon}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;