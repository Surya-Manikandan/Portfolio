import { motion } from 'framer-motion';
import { HiBadgeCheck } from 'react-icons/hi';
import portfolioData from '../../data/portfolioData';

export default function Certifications() {
  const fadeInUp = {
    initial: { opacity: 0, y: 40 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: '-50px' },
  };

  return (
    <section id="certifications" className="relative py-20 bg-gray-50 dark:bg-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div className="text-center mb-16" {...fadeInUp} transition={{ duration: 0.5 }}>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            <span className="gradient-text">Certifications</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto rounded-full"></div>
        </motion.div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {portfolioData.certifications.map((cert, index) => (
            <motion.div
              key={cert.id}
              className="group relative bg-white dark:bg-slate-700 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 card-hover"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              {/* Card Gradient Header */}
              <div className="h-32 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 flex items-center justify-center">
                <HiBadgeCheck className="w-16 h-16 text-white/50" />
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  {cert.title}
                </h3>
                <p className="text-blue-600 dark:text-blue-400 text-sm font-medium mb-1">
                  {cert.issuer}
                </p>
                {cert.date && (
                  <p className="text-gray-500 dark:text-gray-400 text-xs">{cert.date}</p>
                )}
              </div>

              {/* Hover overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-end p-6">
                <span className="text-white text-sm font-medium">View Certificate</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

