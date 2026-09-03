import { motion } from 'framer-motion';
import { HiBriefcase, HiLocationMarker, HiCalendar } from 'react-icons/hi';
import portfolioData from '../../data/portfolioData';

export default function Internship() {
  const fadeInUp = {
    initial: { opacity: 0, y: 40 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: '-50px' },
  };

  const internship = portfolioData.internship;

  return (
    <section id="internship" className="relative py-20 bg-zinc-900 dark:bg-zinc-900 overflow-hidden">
      {/* Neon glow decorations */}
      <div className="neon-orb w-[350px] h-[350px] top-1/3 -right-20" style={{ background: 'radial-gradient(circle, rgba(255,0,128,0.1) 0%, transparent 70%)', animationDelay: '1.2s' }}></div>
      <div className="neon-orb w-[300px] h-[300px] -bottom-20 left-1/4" style={{ background: 'radial-gradient(circle, rgba(0,212,255,0.08) 0%, transparent 70%)', animationDelay: '2.5s' }}></div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div className="text-center mb-16" {...fadeInUp} transition={{ duration: 0.5 }}>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            <span className="gradient-text">Internship</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-red-500 via-pink-500 to-blue-500 mx-auto rounded-full"></div>
        </motion.div>

        {/* Internship Card */}
        <motion.div
          className="relative overflow-hidden rounded-2xl bg-slate-700 border border-slate-600 p-8 card-hover"
          {...fadeInUp}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {/* Decorative gradient */}
          <div className="absolute top-0 right-0 w-40 h-40 bg-blue-500/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
          <div className="absolute bottom-0 left-0 w-40 h-40 bg-purple-500/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>

          <div className="relative z-10">
            {/* Header */}
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-6">
              <div>
                <div className="flex items-center space-x-3 mb-2">
                  <HiBriefcase className="w-6 h-6 text-blue-400" />
                  <h3 className="text-2xl font-bold text-white">
                    {internship.company}
                  </h3>
                </div>
                <p className="text-lg text-gray-300 ml-9">
                  {internship.role}
                </p>
              </div>
            </div>

            {/* Details */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6 ml-9">
              <div className="flex items-center space-x-2 text-sm text-gray-300">
                <HiLocationMarker className="w-4 h-4 text-purple-400 flex-shrink-0" />
                <span>{internship.location}</span>
              </div>
              <div className="flex items-center space-x-2 text-sm text-gray-300">
                <HiCalendar className="w-4 h-4 text-amber-400 flex-shrink-0" />
                <span>{internship.duration}</span>
              </div>
            </div>

            {/* Work Done */}
            <div className="ml-9">
              <h4 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-3">
                Work Done
              </h4>
              <ul className="space-y-3">
                {internship.workDone.map((work, index) => (
                  <motion.li
                    key={index}
                    className="flex items-start space-x-3 text-gray-300"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <div className="w-2 h-2 rounded-full bg-gradient-to-r from-red-500 via-pink-500 to-blue-500 mt-2 flex-shrink-0"></div>
                    <span>{work}</span>
                  </motion.li>
                ))}
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

