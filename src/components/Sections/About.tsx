import React from 'react';
import { Code, PenTool, Users, Zap, BookOpen, Award, Github, Linkedin } from 'lucide-react';

const About: React.FC = () => {
  const education = [
    {
      degree: "BTech - CSE(AI&DS)",
      institution: "Vishnu Institute OF Technology - Bhimavaram",
      year: "2022-2026",
      description: "Specialized in Artificial Intelligence and Data Science"
    },
    {
      degree: "Intermediate - MPC",
      institution: "Sri Chaitanya Jr College - Bhimavaram",
      year: "2020-2022",
      description: "Focus on Improvement on Maths,Physics,Chemistry"
    }
  ];

  const profiles = [
    {
      name: "GitHub",
      url: "https://github.com/sandhiajaykumar",
      icon: Github,
      stats: "100+ contributions in the last year"
    },
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/ajay-kumar-sandhi/",
      icon: Linkedin,
      stats: "500+ connections"
    },
    {
      name: "LeetCode",
      url: "https://leetcode.com/sandhiajaykumar",
      icon: Code,
      stats: "100+ problems solved"
    },
    {
      name: "GeeksforGeeks",
      url: "https://auth.geeksforgeeks.org/user/sandhiajay",
      icon: BookOpen,
      stats: "Expert level contributor"
    }
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-b from-gray-50 via-white to-gray-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 relative">
      <div className="absolute inset-0 bg-grid-gray-900/[0.04] dark:bg-grid-white/[0.02]"></div>
      <div className="container mx-auto px-4 md:px-6 relative">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-300">
            About Me
          </h2>
          <div className="mt-4 h-1 w-20 bg-gradient-to-r from-blue-600 to-blue-400 mx-auto rounded-full transform transition-transform duration-300 hover:scale-x-150"></div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div className="bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
            <h3 className="text-2xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-400 mb-4">
              I'm a passionate developer with an eye for design
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              With over 2 years of experience in web development, I specialize in creating 
              beautiful, functional, and user-friendly websites and applications. I combine 
              technical expertise with creative problem-solving to deliver exceptional digital experiences.
            </p>
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              My journey in tech began when I built my first website at  first yr of my btech. Since then, 
              I've worked with various technologies and frameworks, always staying at the 
              forefront of industry developments.
            </p>
            
            <div className="mt-8">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4 relative inline-block">
                Education
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-blue-600 to-blue-400 transform origin-left transition-transform duration-300 group-hover:scale-x-100"></span>
              </h3>
              <div className="space-y-6">
                {education.map((edu, index) => (
                  <div 
                    key={index} 
                    className="group bg-white dark:bg-gray-700 p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
                  >
                    <h4 className="text-lg font-medium text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                      {edu.degree}
                    </h4>
                    <p className="text-gray-600 dark:text-gray-400 text-sm">
                      {edu.institution}
                    </p>
                    <p className="text-blue-600 dark:text-blue-400 text-sm mt-1">
                      {edu.year}
                    </p>
                    <p className="text-gray-500 dark:text-gray-300 text-sm mt-2">
                      {edu.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          <div className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="group bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                <div className="p-3 rounded-full bg-gradient-to-br from-blue-100 to-blue-50 dark:from-blue-900 dark:to-blue-800 inline-block mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Code className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                </div>
                <h4 className="text-xl font-medium text-gray-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  Web Development
                </h4>
                <p className="text-gray-600 dark:text-gray-400">
                  Creating responsive, accessible, and performant websites with modern frameworks.
                </p>
              </div>
              
              <div className="group bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                <div className="p-3 rounded-full bg-gradient-to-br from-blue-100 to-blue-50 dark:from-blue-900 dark:to-blue-800 inline-block mb-4 group-hover:scale-110 transition-transform duration-300">
                  <PenTool className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                </div>
                <h4 className="text-xl font-medium text-gray-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  UI/UX Design
                </h4>
                <p className="text-gray-600 dark:text-gray-400">
                  Designing intuitive interfaces and seamless user experiences.
                </p>
              </div>
            </div>

            <div className="mt-8">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-6 relative inline-block">
                Coding Profiles
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-blue-600 to-blue-400 transform origin-left transition-transform duration-300 group-hover:scale-x-100"></span>
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {profiles.map((profile, index) => {
                  const IconComponent = profile.icon;
                  return (
                    <a
                      key={index}
                      href={profile.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group bg-white dark:bg-gray-800 p-6 rounded-xl hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-100 dark:border-gray-700 hover:border-blue-500 dark:hover:border-blue-500"
                    >
                      <div className="flex items-start space-x-4">
                        <div className="p-3 rounded-full bg-gradient-to-br from-blue-100 to-blue-50 dark:from-blue-900 dark:to-blue-800 group-hover:scale-110 transition-transform duration-300">
                          <IconComponent className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                        </div>
                        <div>
                          <h4 className="text-gray-900 dark:text-white font-medium group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                            {profile.name}
                          </h4>
                          <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                            {profile.stats}
                          </p>
                        </div>
                      </div>
                    </a>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;