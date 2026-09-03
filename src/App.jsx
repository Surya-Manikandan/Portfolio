import { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

// Layout Components
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import LoadingScreen from './components/ui/LoadingScreen';
import ScrollProgress from './components/ui/ScrollProgress';
import ScrollToTop from './components/ui/ScrollToTop';

// Section Components
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import Skills from './components/sections/Skills';
import Education from './components/sections/Education';
import Projects from './components/sections/Projects';
import Internship from './components/sections/Internship';
import Certifications from './components/sections/Certifications';
import Achievements from './components/sections/Achievements';
import Resume from './components/sections/Resume';
import Contact from './components/sections/Contact';

function App() {
  const [loading, setLoading] = useState(true);
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    // Simulate loading
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2500);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  if (loading) {
    return <LoadingScreen />;
  }

  return (
    <div className={`min-h-screen ${darkMode ? 'dark bg-slate-950' : 'bg-zinc-950'}`}>
      {/* Subtle neon grid overlay */}
      <div className="fixed inset-0 pointer-events-none z-0 opacity-[0.03]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255, 0, 64, 0.5) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0, 212, 255, 0.5) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px',
        }}
      />
      {/* Ambient neon glow */}
      <div className="fixed top-0 left-1/4 w-[500px] h-[500px] rounded-full pointer-events-none z-0"
        style={{
          background: 'radial-gradient(circle, rgba(255,0,64,0.08) 0%, transparent 70%)',
        }}
      />
      <div className="fixed bottom-0 right-1/4 w-[500px] h-[500px] rounded-full pointer-events-none z-0"
        style={{
          background: 'radial-gradient(circle, rgba(0,212,255,0.08) 0%, transparent 70%)',
        }}
      />

      <ScrollProgress />
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
      
      <main className="relative z-10">
        <Hero />
        <About />
        <Skills />
        <Education />
        <Projects />
        <Internship />
        <Certifications />
        <Achievements />
        <Resume />
        <Contact />
      </main>

      <Footer />
      <ScrollToTop />
    </div>
  );
}

export default App;

