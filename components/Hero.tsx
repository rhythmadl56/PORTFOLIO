import React from 'react';
import { RESUME_DATA } from '../constants';

const Hero: React.FC = () => {
  return (
    <section className="min-h-[90vh] flex flex-col justify-center bg-primary dark:bg-slate-950 text-white relative overflow-hidden transition-colors duration-300">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-slate-800/50 to-transparent dark:from-slate-900/50 opacity-30"></div>
      <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-accent rounded-full opacity-10 blur-3xl animate-pulse"></div>
      <div className="absolute top-20 right-20 w-32 h-32 bg-purple-500 rounded-full opacity-10 blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
      
      <div className="container mx-auto px-8 md:px-20 lg:px-24 relative z-10 grid md:grid-cols-2 gap-12 items-center">
        <div className="space-y-6 animate-[fadeIn_1s_ease-out] lg:pl-4">
          <div className="inline-block px-3 py-1 bg-slate-700/50 dark:bg-slate-800/50 backdrop-blur-sm rounded-full text-sm font-medium tracking-wider text-accent border border-slate-600 dark:border-slate-700 hover:border-accent transition-colors duration-300">
            {RESUME_DATA.contact.location}
          </div>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight">
            Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400 dark:from-white dark:to-slate-400">{RESUME_DATA.name}.</span>
          </h1>
          <h2 className="text-xl md:text-2xl text-gray-300 dark:text-gray-400 font-light leading-relaxed">
            {RESUME_DATA.tagline}
          </h2>
          <div className="flex flex-wrap gap-4 pt-4">
            <a 
              href={`mailto:${RESUME_DATA.contact.email}`}
              className="px-6 py-3 bg-accent text-primary font-bold rounded-lg hover:bg-sky-300 transition-all hover:scale-105 shadow-lg shadow-accent/20"
            >
              Contact Me
            </a>
            <a 
              href={RESUME_DATA.contact.linkedin} 
              target="_blank" 
              rel="noreferrer"
              className="px-6 py-3 bg-slate-800/50 dark:bg-slate-800/80 text-white border border-slate-700 font-medium rounded-lg hover:bg-slate-700 dark:hover:bg-slate-700 transition-all hover:scale-105"
            >
              LinkedIn
            </a>
             <a 
              href={RESUME_DATA.contact.github} 
              target="_blank" 
              rel="noreferrer"
              className="px-6 py-3 bg-transparent text-white border border-slate-700 font-medium rounded-lg hover:bg-slate-800/50 transition-all hover:scale-105"
            >
              GitHub
            </a>
          </div>
        </div>
        
        <div className="hidden md:flex justify-center items-center">
            {/* Abstract Graphic representing Tech + Design */}
            <div className="relative w-80 h-80 animate-float">
                <div className="absolute inset-0 border-2 border-slate-700 dark:border-slate-800 rounded-full animate-[spin_20s_linear_infinite]"></div>
                <div className="absolute inset-8 border border-slate-600 dark:border-slate-700 rounded-full animate-[spin_25s_linear_infinite_reverse]"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-40 h-40 bg-gradient-to-br from-accent to-blue-600 rounded-2xl rotate-12 opacity-80 backdrop-blur-md shadow-2xl flex items-center justify-center hover:rotate-45 transition-transform duration-700 group cursor-pointer">
                        <span className="text-4xl font-bold text-white opacity-80 group-hover:scale-125 transition-transform duration-300">R.</span>
                    </div>
                </div>
                {/* Floating Elements */}
                <div className="absolute top-0 right-10 w-12 h-12 bg-slate-800 dark:bg-slate-700 rounded-lg flex items-center justify-center border border-slate-600 animate-bounce-slow shadow-lg">
                   <span className="text-xl">🎨</span>
                </div>
                 <div className="absolute bottom-10 left-0 w-12 h-12 bg-slate-800 dark:bg-slate-700 rounded-lg flex items-center justify-center border border-slate-600 animate-bounce-slow shadow-lg" style={{animationDelay: '1.5s'}}>
                   <span className="text-xl">💻</span>
                </div>
            </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;