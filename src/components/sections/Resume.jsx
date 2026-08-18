import { motion } from 'framer-motion';
import { HiDownload, HiDocumentText, HiEye } from 'react-icons/hi';
import {
  FiFileText,
  FiDownload,
  FiCheckCircle,
  FiAward,
} from 'react-icons/fi';
import portfolioData from '../../data/portfolioData';

export default function Resume() {
  const fadeInUp = {
    initial: { opacity: 0, y: 40 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: '-50px' },
  };

  const handleDownload = () => {
    // In a real scenario, this would download the actual PDF
    // For now, we'll create a simple download
    const link = document.createElement('a');
    link.href = portfolioData.personalInfo.resume;
    link.download = 'Suryaprakash_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  // Languages known data
  const languages = portfolioData.languages;

  return (
    <section id="resume" className="relative py-20 bg-gray-50 dark:bg-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div className="text-center mb-16" {...fadeInUp} transition={{ duration: 0.5 }}>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            <span className="gradient-text">Resume</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left - Resume Preview & Download */}
          <motion.div
            className="space-y-6"
            {...fadeInUp}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {/* Resume Card */}
            <div className="p-8 rounded-2xl bg-white dark:bg-slate-700 shadow-sm border border-gray-100 dark:border-gray-600 card-hover">
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
                  <FiFileText className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                    {portfolioData.personalInfo.name.split(' ')[0]}_Resume
                  </h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    PDF Format • Updated 2025
                  </p>
                </div>
              </div>

              <div className="space-y-3">
                <motion.button
                  onClick={handleDownload}
                  className="w-full inline-flex items-center justify-center space-x-2 px-6 py-3 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 text-white font-medium shadow-lg hover:shadow-xl transition-all cursor-pointer"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <HiDownload className="w-5 h-5" />
                  <span>Download Resume</span>
                </motion.button>

                <motion.a
                  href={portfolioData.personalInfo.resume}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center space-x-2 px-6 py-3 rounded-xl border-2 border-blue-600 dark:border-blue-400 text-blue-600 dark:text-blue-400 font-medium hover:bg-blue-50 dark:hover:bg-blue-900/30 transition-all"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <HiEye className="w-5 h-5" />
                  <span>View Resume</span>
                </motion.a>
              </div>
            </div>
          </motion.div>

          {/* Right - Additional Info */}
          <motion.div
            className="space-y-6"
            {...fadeInUp}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            {/* Languages */}
            <div className="p-6 rounded-2xl bg-white dark:bg-slate-700 shadow-sm border border-gray-100 dark:border-gray-600 card-hover">
              <h3 className="flex items-center space-x-2 text-lg font-semibold text-gray-900 dark:text-white mb-4">
                <FiAward className="w-5 h-5 text-blue-500" />
                <span>Languages Known</span>
              </h3>
              <div className="space-y-4">
                {languages.map((lang, index) => (
                  <div key={index}>
                    <div className="flex justify-between items-center mb-1">
                      <span className="text-sm font-medium text-gray-800 dark:text-white">
                        {lang.name}
                      </span>
                      <span className="text-xs text-gray-500 dark:text-gray-400">
                        {lang.level}
                      </span>
                    </div>
                    <div className="w-full h-2 bg-gray-200 dark:bg-slate-600 rounded-full overflow-hidden">
                      <motion.div
                        className="h-full rounded-full bg-gradient-to-r from-blue-500 to-purple-600"
                        initial={{ width: 0 }}
                        whileInView={{ width: `${lang.proficiency}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: index * 0.2 }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Document Info */}
            <div className="p-6 rounded-2xl bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 border border-green-100 dark:border-green-800 card-hover">
              <div className="flex items-start space-x-3">
                <FiCheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                    Resume Highlights
                  </h4>
                  <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
                    <li className="flex items-center space-x-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-green-500"></span>
                      <span>Full Stack Development expertise</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-green-500"></span>
                      <span>UI/UX Design proficiency</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-green-500"></span>
                      <span>MERN Stack internship experience</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-green-500"></span>
                      <span>AWS Cloud Foundations certified</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

