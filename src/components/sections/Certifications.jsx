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
    <section id="certifications" className="relative py-20 bg-zinc-800/50 dark:bg-zinc-800/50 overflow-hidden">
      {/* Neon glow decorations */}
      <div className="neon-orb w-[350px] h-[350px] -top-20 right-1/4" style={{ background: 'radial-gradient(circle, rgba(255,0,64,0.1) 0%, transparent 70%)', animationDelay: '0.7s' }}></div>
      <div className="neon-orb w-[300px] h-[300px] -bottom-20 left-1/3" style={{ background: 'radial-gradient(circle, rgba(0,212,255,0.08) 0%, transparent 70%)', animationDelay: '1.9s' }}></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div className="text-center mb-16" {...fadeInUp} transition={{ duration: 0.5 }}>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            <span className="gradient-text">Certifications</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-red-500 via-pink-500 to-blue-500 mx-auto rounded-full"></div>
        </motion.div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {portfolioData.certifications.map((cert, index) => (
            <motion.div
              key={cert.id}
              className="group relative bg-slate-700 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 card-hover"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              {/* Card Gradient Header */}
              <div className="h-32 bg-gradient-to-br from-red-500 via-pink-500 to-blue-500 flex items-center justify-center">
                <HiBadgeCheck className="w-16 h-16 text-white/50" />
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-lg font-semibold text-white mb-2">
                  {cert.title}
                </h3>
                <p className="text-blue-400 text-sm font-medium mb-1">
                  {cert.issuer}
                </p>
                {cert.date && (
                  <p className="text-gray-400 text-xs">{cert.date}</p>
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

