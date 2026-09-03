import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  HiCode,
  HiChip,
  HiLightningBolt,
  HiColorSwatch,
  HiUserGroup,
  HiChartBar,
} from 'react-icons/hi';
import portfolioData from '../../data/portfolioData';

const categories = [
  { id: 'technical', label: 'Technical Skills', icon: HiCode },
  { id: 'soft', label: 'Soft Skills', icon: HiUserGroup },
  { id: 'tools', label: 'Tools & Tech', icon: HiChip },
  { id: 'languages', label: 'Programming Languages', icon: HiLightningBolt },
];

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState('technical');

  const fadeInUp = {
    initial: { opacity: 0, y: 40 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: '-50px' },
  };

  return (
    <section id="skills" className="relative py-20 bg-zinc-800/50 dark:bg-zinc-800/50 overflow-hidden">
      {/* Neon glow decorations */}
      <div className="neon-orb w-[350px] h-[350px] top-1/4 -left-20" style={{ background: 'radial-gradient(circle, rgba(255,0,128,0.1) 0%, transparent 70%)', animationDelay: '0.5s' }}></div>
      <div className="neon-orb w-[400px] h-[400px] -bottom-40 right-0" style={{ background: 'radial-gradient(circle, rgba(0,212,255,0.08) 0%, transparent 70%)', animationDelay: '2s' }}></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div className="text-center mb-12" {...fadeInUp} transition={{ duration: 0.5 }}>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            My <span className="gradient-text">Skills</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-red-500 via-pink-500 to-blue-500 mx-auto rounded-full"></div>
        </motion.div>

        {/* Category Tabs */}
        <motion.div
          className="flex flex-wrap justify-center gap-3 mb-12"
          {...fadeInUp}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {categories.map((cat) => (
            <motion.button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`flex items-center space-x-2 px-4 py-2.5 rounded-xl text-sm font-medium transition-all cursor-pointer ${
                activeCategory === cat.id
                  ? 'bg-gradient-to-r from-red-500 via-pink-500 to-blue-500 text-white shadow-lg'
                  : 'bg-slate-700 text-gray-300 hover:bg-slate-600'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <cat.icon className="w-4 h-4" />
              <span>{cat.label}</span>
            </motion.button>
          ))}
        </motion.div>

        {/* Skills Content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            {activeCategory === 'technical' && (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {portfolioData.technicalSkills.map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    className="p-5 rounded-xl bg-slate-700 shadow-sm hover:shadow-md transition-all card-hover"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.05 }}
                  >
                    <div className="flex justify-between items-center mb-3">
                      <span className="font-medium text-white">
                        {skill.name}
                      </span>
                      <span className="text-sm text-blue-400 font-semibold">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="w-full h-2.5 bg-slate-600 rounded-full overflow-hidden">
                      <motion.div
                        className="h-full rounded-full bg-gradient-to-r from-red-500 via-pink-500 to-blue-500 skill-bar"
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: index * 0.1 }}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            )}

            {activeCategory === 'soft' && (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {portfolioData.softSkills.map((skill, index) => (
                  <motion.div
                    key={skill}
                    className="p-5 rounded-xl bg-slate-700 shadow-sm hover:shadow-md transition-all card-hover text-center"
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.05 }}
                  >
                    <HiUserGroup className="w-8 h-8 mx-auto mb-3 text-blue-400" />
                    <span className="font-medium text-white">{skill}</span>
                  </motion.div>
                ))}
              </div>
            )}

            {activeCategory === 'tools' && (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {portfolioData.toolsTechnologies.map((tool, index) => (
                  <motion.div
                    key={tool}
                    className="p-5 rounded-xl bg-slate-700 shadow-sm hover:shadow-md transition-all card-hover text-center"
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.05 }}
                  >
                    <HiChip className="w-8 h-8 mx-auto mb-3 text-purple-400" />
                    <span className="font-medium text-white">{tool}</span>
                  </motion.div>
                ))}
              </div>
            )}

            {activeCategory === 'languages' && (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {portfolioData.programmingLanguages.map((lang, index) => (
                  <motion.div
                    key={lang}
                    className="p-6 rounded-xl bg-slate-700 shadow-sm hover:shadow-md transition-all card-hover text-center"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <HiLightningBolt className="w-8 h-8 mx-auto mb-3 text-yellow-500" />
                    <span className="font-medium text-white">{lang}</span>
                  </motion.div>
                ))}
              </div>
            )}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}

