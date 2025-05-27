import React from 'react';
import { ArrowDown } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section id="home" className="min-h-screen flex items-center pt-20 bg-gradient-to-b from-gray-50 via-white to-gray-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-radial from-blue-500/5 to-transparent dark:from-blue-400/10"></div>
      <div className="container mx-auto px-4 md:px-6 py-12 relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1 animate-fade-in-up">
            <div className="relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-blue-400 rounded-lg blur opacity-20 group-hover:opacity-30 transition duration-1000 group-hover:duration-200"></div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white leading-tight relative">
                Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-400">Ajay Kumar Sandhi</span>
                <span className="animate-blink">_</span>
              </h1>
            </div>
            <h2 className="mt-4 text-xl md:text-2xl text-gray-700 dark:text-gray-300">
              Web Developer
            </h2>
            <p className="mt-6 text-gray-600 dark:text-gray-400 text-lg max-w-lg">
              I create engaging, user-centered digital experiences with clean code and thoughtful design.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <a 
                href="#projects" 
                className="group px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-500 hover:to-blue-600 text-white font-medium rounded-lg transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg"
              >
                <span className="flex items-center justify-center">
                  View My Work
                  <svg className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </span>
              </a>
              <a 
                href="#contact" 
                className="group px-6 py-3 border-2 border-gray-300 dark:border-gray-700 hover:border-blue-500 dark:hover:border-blue-500 text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 font-medium rounded-lg transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm"
              >
                Contact Me
              </a>
              <a 
                href="src\components\Sections\AJAY RESUME.pdf" 
                className="group px-6 py-3 border-2 border-gray-300 dark:border-gray-700 hover:border-blue-500 dark:hover:border-blue-500 text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 font-medium rounded-lg transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm"
              >
                My Resume
              </a>
            </div>
          </div>
          
          <div className="order-1 lg:order-2 flex justify-center lg:justify-end animate-float">
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-blue-400 rounded-full blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-pulse"></div>
              <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-white dark:border-gray-800 shadow-2xl transform transition-transform duration-300 group-hover:scale-105">
                <img 
                  src="src\components\Sections\image.png" 
                  alt="Sandhi Ajay Kumar " 
                  className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-110"
                />
              </div>
            </div>
          </div>
        </div>
        
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce hidden md:block">
          <a 
            href="#about" 
            className="p-2 rounded-full bg-white/30 dark:bg-gray-800/30 backdrop-blur-sm hover:bg-white/50 dark:hover:bg-gray-800/50 transition-colors group"
            aria-label="Scroll down"
          >
            <ArrowDown className="h-8 w-8 text-gray-600 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;