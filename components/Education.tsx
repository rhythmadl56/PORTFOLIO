import React from 'react';
import { RESUME_DATA } from '../constants';

const Education: React.FC = () => {
  return (
    <section className="py-20 bg-slate-900 dark:bg-slate-950 text-white transition-colors duration-300 relative overflow-hidden" id="education">
      {/* Background Gradients */}
      <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-black/50 to-transparent"></div>
      <div className="absolute top-0 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="grid md:grid-cols-2 gap-16">
          
          {/* Education Column */}
          <div>
            <h2 className="text-3xl font-bold mb-8 flex items-center gap-3">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-accent animate-bounce-slow" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path d="M12 14l9-5-9-5-9 5 9 5z" />
                <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
              </svg>
              Education
            </h2>
            <div className="space-y-8">
              {RESUME_DATA.education.map((edu, idx) => (
                <div key={idx} className="border-l-2 border-slate-700 pl-6 py-2 group hover:border-accent transition-all duration-300">
                  <h3 className="text-xl font-semibold text-white group-hover:text-accent transition-colors">{edu.institution}</h3>
                  <p className="text-accent/80 mt-1 group-hover:text-white transition-colors">{edu.degree}</p>
                  {edu.duration && <p className="text-slate-400 text-sm mt-2 font-light">{edu.duration}</p>}
                </div>
              ))}
            </div>
          </div>

          {/* Certifications Column */}
          <div>
            <h2 className="text-3xl font-bold mb-8 flex items-center gap-3">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-accent animate-pulse" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              Certifications
            </h2>
            <div className="grid gap-4">
              {RESUME_DATA.certifications.map((cert, idx) => (
                <div key={idx} className="glass-card bg-slate-800/40 dark:bg-slate-800/40 p-5 rounded-xl hover:bg-slate-700/50 dark:hover:bg-slate-700/50 transition-all border border-white/10 dark:border-white/5 hover:scale-[1.02] shadow-lg">
                  <p className="font-medium text-slate-200">{cert.name}</p>
                  {cert.issuer && <p className="text-sm text-slate-400 mt-1">{cert.issuer}</p>}
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Education;