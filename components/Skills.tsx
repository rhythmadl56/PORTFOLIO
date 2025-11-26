import React from 'react';
import { RESUME_DATA } from '../constants';

const Skills: React.FC = () => {
  return (
    <section className="py-20 bg-slate-50 dark:bg-slate-950 transition-colors duration-300 relative overflow-hidden" id="skills">
      {/* Background Blobs */}
      <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-accent/20 rounded-full blur-3xl -z-0"></div>
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl -z-0"></div>

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <h2 className="text-3xl font-bold text-primary dark:text-white mb-12 text-center">Technical Expertise</h2>
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {RESUME_DATA.skills.map((category, idx) => (
            <div key={idx} className="glass-card p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 group hover:-translate-y-2">
              <h3 className="text-xl font-bold text-slate-800 dark:text-slate-100 mb-6 flex items-center gap-2">
                <span className="w-2 h-6 bg-accent rounded-full group-hover:h-8 transition-all duration-300"></span>
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill, sIdx) => (
                  <span 
                    key={sIdx} 
                    className="px-4 py-2 bg-white/50 dark:bg-slate-700/50 backdrop-blur-sm text-slate-700 dark:text-slate-200 rounded-lg border border-white/20 dark:border-white/10 text-sm font-medium hover:bg-accent hover:text-white hover:border-accent dark:hover:bg-accent dark:hover:text-primary transition-all duration-300 cursor-default shadow-sm"
                  >
                    {skill}
                  </span>
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