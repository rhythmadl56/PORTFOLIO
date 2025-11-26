import React from 'react';
import { RESUME_DATA } from '../constants';

const Experience: React.FC = () => {
  return (
    <section className="py-20 bg-white/50 dark:bg-slate-900/50 transition-colors duration-300 relative" id="experience">
       {/* Decorative Background */}
       <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 right-0 w-[500px] h-[500px] bg-blue-400/10 dark:bg-blue-900/10 rounded-full blur-3xl"></div>
       </div>

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <h2 className="text-3xl font-bold text-primary dark:text-white mb-12">Professional Experience</h2>
        <div className="max-w-3xl space-y-8">
          {RESUME_DATA.experience.map((exp, index) => (
            <div key={index} className="relative pl-8 md:pl-0">
              {/* Timeline line for larger screens */}
              <div className="hidden md:block absolute left-0 top-0 bottom-0 w-px bg-slate-200 dark:bg-slate-700 -ml-12 md:ml-[-1px]"></div>
              
              <div className="group md:flex gap-8 relative">
                {/* Dot */}
                 <div className="hidden md:block absolute -left-[1.35rem] top-6 w-3 h-3 rounded-full bg-slate-300 dark:bg-slate-600 border-2 border-white dark:border-slate-900 group-hover:bg-accent group-hover:scale-150 transition-all duration-300 shadow-[0_0_10px_rgba(56,189,248,0.5)]"></div>

                <div className="md:w-1/3 mb-2 md:mb-0 pt-2">
                  <p className="text-sm font-semibold text-slate-400 dark:text-slate-500 uppercase tracking-wide">{exp.duration}</p>
                  <p className="text-sm text-slate-400 dark:text-slate-500 mt-1">{exp.location}</p>
                </div>
                <div className="md:w-2/3 glass-card p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-[1.02]">
                  <h3 className="text-xl font-bold text-primary dark:text-white">{exp.role}</h3>
                  <h4 className="text-md font-medium text-accent mb-3">{exp.company}</h4>
                  {exp.description && (
                    <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed">
                      {exp.description}
                    </p>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;