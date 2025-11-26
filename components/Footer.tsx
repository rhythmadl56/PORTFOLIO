import React from 'react';
import { RESUME_DATA } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer className="bg-primary dark:bg-slate-950 pt-20 pb-10 text-white border-t border-slate-800 transition-colors duration-300">
      <div className="container mx-auto px-6 md:px-12 text-center">
        <h2 className="text-2xl font-bold mb-6">Let's Connect</h2>
        <p className="text-slate-400 max-w-xl mx-auto mb-8">
            I'm currently looking for internships and new opportunities. 
            Feel free to reach out if you have a project in mind or just want to say hi!
        </p>
        <a 
            href={`mailto:${RESUME_DATA.contact.email}`} 
            className="inline-block bg-accent text-primary font-bold px-8 py-3 rounded-full hover:bg-sky-300 transition-colors mb-12 hover:scale-105 transform"
        >
            Say Hello
        </a>

        <div className="flex justify-center gap-6 mb-12">
             <a href={RESUME_DATA.contact.linkedin} target="_blank" rel="noreferrer" className="text-slate-400 hover:text-white transition-colors">
                LinkedIn
            </a>
            <a href={RESUME_DATA.contact.github} target="_blank" rel="noreferrer" className="text-slate-400 hover:text-white transition-colors">
                GitHub
            </a>
        </div>

        <div className="text-sm text-slate-500">
            &copy; {new Date().getFullYear()} {RESUME_DATA.name}. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;