import { motion } from 'framer-motion';
import { HiStar, HiUserGroup } from 'react-icons/hi';
import { FaTrophy } from 'react-icons/fa';
import portfolioData from '../../data/portfolioData';

export default function Achievements() {
  const fadeInUp = {
    initial: { opacity: 0, y: 40 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: '-50px' },
  };

  return (
    <section id="achievements" className="relative py-20 bg-white dark:bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div className="text-center mb-16" {...fadeInUp} transition={{ duration: 0.5 }}>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            <span className="gradient-text">Achievements</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Achievements */}
          <motion.div {...fadeInUp} transition={{ duration: 0.5, delay: 0.2 }}>
            <h3 className="flex items-center space-x-2 text-xl font-semibold text-gray-900 dark:text-white mb-6">
              <FaTrophy className="w-6 h-6 text-yellow-500" />
              <span>Achievements</span>
            </h3>
            <div className="space-y-4">
              {portfolioData.achievements.map((achievement, index) => (
                <motion.div
                  key={achievement.id}
                  className="p-6 rounded-xl bg-gradient-to-br from-amber-50 to-yellow-50 dark:from-amber-900/20 dark:to-yellow-900/20 border border-amber-100 dark:border-amber-800 card-hover"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-r from-amber-500 to-yellow-500 flex items-center justify-center flex-shrink-0">
                      <FaTrophy className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 dark:text-white mb-1">
                        {achievement.title}
                      </h4>
                      <p className="text-sm text-blue-600 dark:text-blue-400 mb-2">
                        {achievement.organization}
                      </p>
                      <p className="text-sm text-gray-600 dark:text-gray-300">
                        {achievement.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Extracurricular */}
          <motion.div {...fadeInUp} transition={{ duration: 0.5, delay: 0.4 }}>
            <h3 className="flex items-center space-x-2 text-xl font-semibold text-gray-900 dark:text-white mb-6">
              <HiUserGroup className="w-6 h-6 text-blue-500" />
              <span>Extracurricular</span>
            </h3>
            <div className="space-y-4">
              {portfolioData.extracurricular.map((item, index) => (
                <motion.div
                  key={index}
                  className="p-6 rounded-xl bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 border border-blue-100 dark:border-blue-800 card-hover"
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center flex-shrink-0">
                      <HiStar className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 dark:text-white mb-1">
                        {item.title}
                      </h4>
                      <p className="text-sm text-gray-600 dark:text-gray-300">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}

              {/* Hobbies */}
              <div className="p-6 rounded-xl bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 border border-green-100 dark:border-green-800 card-hover">
                <h4 className="font-semibold text-gray-900 dark:text-white mb-3">
                  Hobbies & Interests
                </h4>
                <div className="flex flex-wrap gap-2">
                  {portfolioData.hobbies.map((hobby, index) => (
                    <span
                      key={index}
                      className="px-3 py-1.5 rounded-full bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 text-sm"
                    >
                      {hobby}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

