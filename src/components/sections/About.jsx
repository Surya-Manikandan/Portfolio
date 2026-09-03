import { motion } from 'framer-motion';
import { HiUser, HiCode, HiLightningBolt } from 'react-icons/hi';
import { FiTarget } from 'react-icons/fi';
import portfolioData from '../../data/portfolioData';

export default function About() {
  const fadeInUp = {
    initial: { opacity: 0, y: 40 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: '-50px' },
  };

  return (
    <section id="about" className="relative py-20 bg-zinc-900 dark:bg-zinc-900 overflow-hidden">
      {/* Neon glow decorations */}
      <div className="neon-orb w-[400px] h-[400px] -top-40 -right-40" style={{ background: 'radial-gradient(circle, rgba(255,0,64,0.12) 0%, transparent 70%)', animationDelay: '0s' }}></div>
      <div className="neon-orb w-[300px] h-[300px] -bottom-20 -left-20" style={{ background: 'radial-gradient(circle, rgba(0,212,255,0.1) 0%, transparent 70%)', animationDelay: '1.5s' }}></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div className="text-center mb-16" {...fadeInUp} transition={{ duration: 0.5 }}>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            About <span className="gradient-text">Me</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-red-500 via-pink-500 to-blue-500 mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left - About Content */}
          <motion.div
            {...fadeInUp}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="space-y-6">
              {/* Bio Paragraphs */}
              {portfolioData.personalInfo.aboutMe.map((text, index) => (
                <p key={index} className="text-gray-300 leading-relaxed">
                  {text}
                </p>
              ))}
            </div>

            {/* Info Cards */}
            <div className="grid grid-cols-2 gap-4 mt-8">
              <div className="p-4 rounded-xl bg-blue-900/20 border border-blue-800">
                <p className="text-sm text-gray-400">Name</p>
                <p className="font-semibold text-white text-sm">
                  {portfolioData.personalInfo.name}
                </p>
              </div>
              <div className="p-4 rounded-xl bg-purple-900/20 border border-purple-800">
                <p className="text-sm text-gray-400">Email</p>
                <p className="font-semibold text-white text-sm truncate">
                  {portfolioData.personalInfo.email}
                </p>
              </div>
              <div className="p-4 rounded-xl bg-pink-900/20 border border-pink-800">
                <p className="text-sm text-gray-400">Phone</p>
                <p className="font-semibold text-white text-sm">
                  {portfolioData.personalInfo.phone}
                </p>
              </div>
              <div className="p-4 rounded-xl bg-amber-900/20 border border-amber-800">
                <p className="text-sm text-gray-400">Location</p>
                <p className="font-semibold text-white text-sm">
                  {portfolioData.personalInfo.location}
                </p>
              </div>
            </div>
          </motion.div>

          {/* Right - Career Objective & Areas of Interest */}
          <motion.div
            {...fadeInUp}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="space-y-8"
          >
            {/* Career Objective */}
            <div className="p-6 rounded-2xl bg-gradient-to-br from-blue-900/20 to-purple-900/20 border border-blue-800">
              <div className="flex items-center space-x-3 mb-4">
                <FiTarget className="w-6 h-6 text-blue-400" />
                <h3 className="text-xl font-semibold text-white">
                  Career Objective
                </h3>
              </div>
              <p className="text-gray-300 leading-relaxed">
                To secure a challenging position in a reputable organization to expand my learnings, knowledge and skills.
              </p>
            </div>

            {/* Areas of Interest */}
            <div className="p-6 rounded-2xl bg-gradient-to-br from-purple-900/20 to-pink-900/20 border border-purple-800">
              <div className="flex items-center space-x-3 mb-4">
                <HiCode className="w-6 h-6 text-purple-400" />
                <h3 className="text-xl font-semibold text-white">
                  Areas of Interest
                </h3>
              </div>
              <div className="space-y-3">
                {portfolioData.areaOfInterest.map((area, index) => (
                  <div
                    key={index}
                    className="flex items-center space-x-2 text-gray-300"
                  >
                    <div className="w-2 h-2 rounded-full bg-gradient-to-r from-red-500 via-pink-500 to-blue-500"></div>
                    <span>{area}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

