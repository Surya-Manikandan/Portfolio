import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { HiDownload, HiMail } from 'react-icons/hi';
import { FiGithub, FiLinkedin, FiArrowDown } from 'react-icons/fi';
import portfolioData from '../../data/portfolioData';

export default function Hero() {
  const [textIndex, setTextIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  const titles = portfolioData.personalInfo.titles;

  useEffect(() => {
    const currentText = titles[textIndex];
    let timeout;

    if (!isDeleting && charIndex < currentText.length) {
      timeout = setTimeout(() => setCharIndex(prev => prev + 1), 100);
    } else if (isDeleting && charIndex > 0) {
      timeout = setTimeout(() => setCharIndex(prev => prev - 1), 50);
    } else if (!isDeleting && charIndex === currentText.length) {
      timeout = setTimeout(() => setIsDeleting(true), 2000);
    } else if (isDeleting && charIndex === 0) {
      setIsDeleting(false);
      setTextIndex((prev) => (prev + 1) % titles.length);
    }

    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, textIndex, titles]);

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background with animated neon gradient */}
      <div className="absolute inset-0 animated-gradient-neon opacity-30 dark:opacity-40"></div>
      <div className="absolute inset-0 bg-zinc-950/60 dark:bg-zinc-950/40"></div>

      {/* Neon Grid Overlay */}
      <div className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255, 0, 64, 0.8) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0, 212, 255, 0.8) 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px',
        }}
      ></div>

      {/* Animated neon orbs */}
      <div className="neon-orb w-[500px] h-[500px] -top-40 -left-40" style={{ background: 'radial-gradient(circle, rgba(255,0,64,0.25) 0%, transparent 70%)', animationDelay: '0s' }}></div>
      <div className="neon-orb w-[400px] h-[400px] top-1/3 right-0" style={{ background: 'radial-gradient(circle, rgba(255,0,128,0.2) 0%, transparent 70%)', animationDelay: '1s' }}></div>
      <div className="neon-orb w-[600px] h-[600px] -bottom-60 left-1/3" style={{ background: 'radial-gradient(circle, rgba(0,212,255,0.2) 0%, transparent 70%)', animationDelay: '2s' }}></div>

      {/* Animated floating neon particles */}
      <div className="neon-orb-small w-2 h-2 top-1/4 left-1/3" style={{ background: 'var(--neon-red)', boxShadow: '0 0 6px var(--neon-red), 0 0 12px var(--neon-red)' }}></div>
      <div className="neon-orb-small w-3 h-3 top-3/4 left-1/4" style={{ background: 'var(--neon-pink)', boxShadow: '0 0 8px var(--neon-pink), 0 0 16px var(--neon-pink)', animationDelay: '0.5s' }}></div>
      <div className="neon-orb-small w-2 h-2 top-1/2 right-1/4" style={{ background: 'var(--neon-blue)', boxShadow: '0 0 6px var(--neon-blue), 0 0 12px var(--neon-blue)', animationDelay: '1s' }}></div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Left Content */}
          <div className="flex-1 text-center lg:text-left">
            {/* Greeting */}
            <motion.p
              className="text-lg text-blue-400 font-medium mb-2"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
            >
              Hello, I'm
            </motion.p>

            {/* Name */}
            <motion.h1
              className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              {portfolioData.personalInfo.name.split(' ')[0]}{' '}
              <span className="gradient-text">
                {portfolioData.personalInfo.name.split(' ').slice(1).join(' ')}
              </span>
            </motion.h1>

            {/* Typing Effect */}
            <motion.div
              className="text-xl sm:text-2xl text-gray-300 mb-6 h-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              <span>{titles[textIndex].substring(0, charIndex)}</span>
              <span className="typing-cursor"></span>
            </motion.div>

            {/* Bio */}
            <motion.p
              className="text-gray-400 max-w-xl mb-8 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              {portfolioData.personalInfo.bio}
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              className="flex flex-wrap gap-4 justify-center lg:justify-start"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
            >
              <motion.button
                onClick={scrollToContact}
                className="inline-flex items-center px-6 py-3 rounded-xl bg-gradient-to-r from-red-500 via-pink-500 to-blue-500 text-white font-medium shadow-lg hover:shadow-xl transition-all cursor-pointer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <HiMail className="w-5 h-5 mr-2" />
                Hire Me
              </motion.button>

              <motion.a
                href="#resume"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('resume')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="inline-flex items-center px-6 py-3 rounded-xl border-2 border-blue-400 text-blue-400 font-medium hover:bg-blue-900/30 transition-all"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <HiDownload className="w-5 h-5 mr-2" />
                Download CV
              </motion.a>
            </motion.div>

            {/* Social Icons */}
            <motion.div
              className="flex gap-4 mt-8 justify-center lg:justify-start"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
            >
              <motion.a
                href={portfolioData.socialLinks.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-slate-700 text-gray-300 hover:bg-blue-900/50 hover:text-blue-400 transition-all"
                whileHover={{ scale: 1.2, y: -3 }}
                whileTap={{ scale: 0.9 }}
              >
                <FiGithub className="w-5 h-5" />
              </motion.a>
              <motion.a
                href={portfolioData.socialLinks.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-slate-700 text-gray-300 hover:bg-blue-900/50 hover:text-blue-400 transition-all"
                whileHover={{ scale: 1.2, y: -3 }}
                whileTap={{ scale: 0.9 }}
              >
                <FiLinkedin className="w-5 h-5" />
              </motion.a>
            </motion.div>
          </div>

          {/* Right - Profile Image */}
          <motion.div
            className="flex-1 flex justify-center"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 0.5 }}
          >
            <div className="relative">
              {/* Gradient ring */}
              <div className="w-72 h-72 sm:w-80 sm:h-80 rounded-full bg-gradient-to-r from-red-500 via-pink-500 to-blue-500 p-1 neon-glow-multi">
                <div className="w-full h-full rounded-full bg-zinc-800 flex items-center justify-center overflow-hidden">
                  <img
                    src={portfolioData.personalInfo.profilePhoto}
                    alt={portfolioData.personalInfo.name}
                    className="w-full h-full object-cover rounded-full"
                    onError={(e) => {
                      e.target.onerror = null;
                      const parent = e.target.parentElement;
                      parent.innerHTML = `<span class="text-6xl sm:text-7xl font-bold text-white">${portfolioData.personalInfo.avatar}</span>`;
                    }}
                  />
                </div>
              </div>
              {/* Floating badges */}
              <motion.div
                className="absolute -top-4 -right-4 w-16 h-16 rounded-full bg-gradient-to-r from-red-500 to-pink-600 flex items-center justify-center text-white text-sm font-bold shadow-lg"
                animate={{ y: [0, -10, 0], rotate: [0, 5, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                MERN
              </motion.div>
              <motion.div
                className="absolute -bottom-2 -left-4 w-14 h-14 rounded-full bg-gradient-to-r from-pink-500 to-blue-600 flex items-center justify-center text-white text-sm font-bold shadow-lg"
                animate={{ y: [0, 10, 0], rotate: [0, -5, 0] }}
                transition={{ duration: 3, repeat: Infinity, delay: 1.5 }}
              >
                UI/UX
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 10, 0] }}
        transition={{ delay: 1.5, duration: 2, repeat: Infinity }}
      >
        <FiArrowDown className="w-6 h-6 text-gray-500" />
      </motion.div>
    </section>
  );
}

