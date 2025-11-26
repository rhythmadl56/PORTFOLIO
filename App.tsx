import React from 'react';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Education from './components/Education';
import Footer from './components/Footer';
import ChatWidget from './components/ChatWidget';
import ThemeToggle from './components/ThemeToggle';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 transition-colors duration-300">
      <ThemeToggle />
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Education />
      <Footer />
      <ChatWidget />
    </div>
  );
};

export default App;