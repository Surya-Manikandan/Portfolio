import { motion } from 'framer-motion';
import { FiGithub, FiLinkedin, FiMail, FiHeart } from 'react-icons/fi';
import { HiArrowUp } from 'react-icons/hi';
import portfolioData from '../../data/portfolioData';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 text-white">
      {/* Decorative top border */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-red-500 via-pink-500 to-blue-500"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
          {/* Brand */}
          <div className="text-center md:text-left">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center justify-center md:justify-start space-x-2 mb-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-r from-red-500 via-pink-500 to-blue-500 flex items-center justify-center text-white font-bold">
                  {portfolioData.personalInfo.avatar}
                </div>
                <span className="font-bold text-lg">{portfolioData.personalInfo.name}</span>
              </div>
              <p className="text-gray-400 text-sm">
                {portfolioData.personalInfo.title}
              </p>
            </motion.div>
          </div>

          {/* Social Links */}
          <div className="flex justify-center space-x-4">
            <motion.a
              href={portfolioData.socialLinks.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-white/10 hover:bg-white/20 transition-all text-gray-300 hover:text-white"
              whileHover={{ scale: 1.2, y: -3 }}
              whileTap={{ scale: 0.9 }}
            >
              <FiGithub className="w-5 h-5" />
            </motion.a>
            <motion.a
              href={portfolioData.socialLinks.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-white/10 hover:bg-white/20 transition-all text-gray-300 hover:text-white"
              whileHover={{ scale: 1.2, y: -3 }}
              whileTap={{ scale: 0.9 }}
            >
              <FiLinkedin className="w-5 h-5" />
            </motion.a>
            <motion.a
              href={`mailto:${portfolioData.socialLinks.email}`}
              className="p-3 rounded-full bg-white/10 hover:bg-white/20 transition-all text-gray-300 hover:text-white"
              whileHover={{ scale: 1.2, y: -3 }}
              whileTap={{ scale: 0.9 }}
            >
              <FiMail className="w-5 h-5" />
            </motion.a>
          </div>

          {/* Copyright and Scroll to Top */}
          <div className="text-center md:text-right">
            <motion.p
              className="text-gray-400 text-sm mb-4"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
            >
              &copy; {new Date().getFullYear()} Made with{' '}
              <FiHeart className="inline text-red-500 animate-pulse" /> by{' '}
              {portfolioData.personalInfo.name.split(' ')[0]}
            </motion.p>
            
            <motion.button
              onClick={scrollToTop}
className="inline-flex items-center justify-center p-3 rounded-full bg-gradient-to-r from-red-500 via-pink-500 to-blue-500 text-white shadow-lg hover:shadow-xl transition-all"
              whileHover={{ scale: 1.1, y: -3 }}
              whileTap={{ scale: 0.9 }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <HiArrowUp className="w-5 h-5" />
            </motion.button>
          </div>
        </div>
      </div>
    </footer>
  );
}

