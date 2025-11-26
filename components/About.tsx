import React from 'react';
import { RESUME_DATA } from '../constants';

const About: React.FC = () => {
  return (
    <section className="py-20 bg-slate-50/50 dark:bg-slate-900/50 transition-colors duration-300 relative" id="about">
       {/* Background Blob for Glass Effect */}
       <div className="absolute top-10 left-10 w-72 h-72 bg-purple-300 dark:bg-purple-900 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
       <div className="absolute top-10 right-10 w-72 h-72 bg-sky-300 dark:bg-sky-900 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="max-w-4xl mx-auto">
            <h3 className="text-accent font-semibold tracking-wider uppercase mb-4 text-sm">About Me</h3>
            <h2 className="text-3xl md:text-4xl font-bold text-primary dark:text-white mb-8">
                Building bridge between Code & Design
            </h2>
            <div className="glass-card p-8 rounded-2xl shadow-xl transition-all duration-300">
                <div className="prose prose-lg text-slate-600 dark:text-slate-300 leading-relaxed">
                    <p>{RESUME_DATA.summary}</p>
                </div>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
                {RESUME_DATA.skills.flatMap(cat => cat.skills).slice(0, 4).map((skill, index) => (
                    <div key={index} className="p-4 bg-white/40 dark:bg-slate-800/40 backdrop-blur-md border border-white/20 dark:border-white/5 rounded-xl text-center hover:border-accent/50 dark:hover:border-accent/50 hover:bg-white/60 dark:hover:bg-slate-800/60 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                        <span className="font-semibold text-slate-700 dark:text-slate-200">{skill}</span>
                    </div>
                ))}
            </div>
        </div>
      </div>
    </section>
  );
};

export default About;