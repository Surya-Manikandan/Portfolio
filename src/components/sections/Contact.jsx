import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import {
  HiMail,
  HiPhone,
  HiLocationMarker,
  HiPaperAirplane,
} from 'react-icons/hi';
import { FiGithub, FiLinkedin, FiSend, FiCheckCircle, FiAlertCircle } from 'react-icons/fi';
import emailjs from '@emailjs/browser';
import portfolioData from '../../data/portfolioData';

export default function Contact() {
  const formRef = useRef();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null); // 'success' | 'error' | null

  const fadeInUp = {
    initial: { opacity: 0, y: 40 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: '-50px' },
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      // Initialize EmailJS - replace with your actual EmailJS credentials
      // await emailjs.send(
      //   'YOUR_SERVICE_ID',
      //   'YOUR_TEMPLATE_ID',
      //   {
      //     from_name: formData.name,
      //     from_email: formData.email,
      //     subject: formData.subject,
      //     message: formData.message,
      //   },
      //   'YOUR_PUBLIC_KEY'
      // );
      
      // Simulate success for now
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      setSubmitStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setSubmitStatus(null), 5000);
    }
  };

  const contactInfo = [
    {
      icon: HiMail,
      label: 'Email',
      value: portfolioData.personalInfo.email,
      href: `mailto:${portfolioData.personalInfo.email}`,
      color: 'blue',
    },
    {
      icon: HiPhone,
      label: 'Phone',
      value: portfolioData.personalInfo.phone,
      href: `tel:${portfolioData.personalInfo.phone}`,
      color: 'green',
    },
    {
      icon: HiLocationMarker,
      label: 'Location',
      value: portfolioData.personalInfo.location,
      href: null,
      color: 'red',
    },
  ];

  return (
    <section id="contact" className="relative py-20 bg-zinc-900 dark:bg-zinc-900 overflow-hidden">
      {/* Background decoration - neon glow */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="neon-orb w-[450px] h-[450px] -top-40 -right-40" style={{ background: 'radial-gradient(circle, rgba(255,0,64,0.1) 0%, transparent 70%)', animationDelay: '0s' }}></div>
        <div className="neon-orb w-[400px] h-[400px] -bottom-40 -left-40" style={{ background: 'radial-gradient(circle, rgba(0,212,255,0.08) 0%, transparent 70%)', animationDelay: '2.5s' }}></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div className="text-center mb-16" {...fadeInUp} transition={{ duration: 0.5 }}>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Get In <span className="gradient-text">Touch</span>
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Have a project in mind or just want to say hi? I'd love to hear from you!
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-red-500 via-pink-500 to-blue-500 mx-auto rounded-full mt-4"></div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            {...fadeInUp}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <form
              ref={formRef}
              onSubmit={handleSubmit}
              className="space-y-6"
            >
              {/* Name & Email */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="John Doe"
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-600 bg-white dark:bg-slate-700 text-gray-900 dark:text-white placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Your Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="john@example.com"
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-600 bg-white dark:bg-slate-700 text-gray-900 dark:text-white placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                  />
                </div>
              </div>

              {/* Subject */}
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  placeholder="Project Collaboration"
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-600 bg-white dark:bg-slate-700 text-gray-900 dark:text-white placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                />
              </div>

              {/* Message */}
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="5"
                  placeholder="Tell me about your project or just say hello..."
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-600 bg-white dark:bg-slate-700 text-gray-900 dark:text-white placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all resize-none"
                ></textarea>
              </div>

              {/* Submit Button */}
              <motion.button
                type="submit"
                disabled={isSubmitting}
                className="w-full inline-flex items-center justify-center space-x-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-red-500 via-pink-500 to-blue-500 text-white font-medium shadow-lg hover:shadow-xl transition-all disabled:opacity-50 cursor-pointer"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                {isSubmitting ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    <span>Sending...</span>
                  </>
                ) : (
                  <>
                    <FiSend className="w-5 h-5" />
                    <span>Send Message</span>
                  </>
                )}
              </motion.button>

              {/* Status Messages */}
              {submitStatus === 'success' && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex items-center space-x-2 px-4 py-3 rounded-xl bg-green-50 dark:bg-green-900/20 text-green-700 dark:text-green-300 border border-green-200 dark:border-green-800"
                >
                  <FiCheckCircle className="w-5 h-5 flex-shrink-0" />
                  <span className="text-sm">
                    Message sent successfully! I'll get back to you soon.
                  </span>
                </motion.div>
              )}

              {submitStatus === 'error' && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex items-center space-x-2 px-4 py-3 rounded-xl bg-red-50 dark:bg-red-900/20 text-red-700 dark:text-red-300 border border-red-200 dark:border-red-800"
                >
                  <FiAlertCircle className="w-5 h-5 flex-shrink-0" />
                  <span className="text-sm">
                    Failed to send message. Please try again or email me directly.
                  </span>
                </motion.div>
              )}
            </form>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            className="space-y-6"
            {...fadeInUp}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            {/* Contact Details Cards */}
            <div className="space-y-4">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={index}
                  className="p-4 rounded-xl bg-gray-50 dark:bg-slate-700/50 border border-gray-100 dark:border-gray-600 card-hover"
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  {info.href ? (
                    <a
                      href={info.href}
                      className="flex items-center space-x-4"
                    >
                      <div className={`w-12 h-12 rounded-xl bg-${info.color}-100 dark:bg-${info.color}-900/30 flex items-center justify-center`}>
                        <info.icon className={`w-6 h-6 text-${info.color}-600 dark:text-${info.color}-400`} />
                      </div>
                      <div>
                        <p className="text-sm text-gray-500 dark:text-gray-400">{info.label}</p>
                        <p className="font-medium text-gray-900 dark:text-white">{info.value}</p>
                      </div>
                    </a>
                  ) : (
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 rounded-xl bg-red-100 dark:bg-red-900/30 flex items-center justify-center">
                        <info.icon className="w-6 h-6 text-red-600 dark:text-red-400" />
                      </div>
                      <div>
                        <p className="text-sm text-gray-500 dark:text-gray-400">{info.label}</p>
                        <p className="font-medium text-gray-900 dark:text-white">{info.value}</p>
                      </div>
                    </div>
                  )}
                </motion.div>
              ))}
            </div>

            {/* Social Links */}
            <div className="p-6 rounded-2xl bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 border border-blue-100 dark:border-blue-800">
              <h4 className="font-semibold text-gray-900 dark:text-white mb-4">
                Connect with me
              </h4>
              <div className="flex space-x-3">
                <motion.a
                  href={portfolioData.socialLinks.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-xl bg-gray-100 dark:bg-slate-600 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-slate-500 hover:text-blue-600 transition-all"
                  whileHover={{ scale: 1.1, y: -3 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <FiGithub className="w-5 h-5" />
                </motion.a>
                <motion.a
                  href={portfolioData.socialLinks.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-xl bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 hover:bg-blue-200 dark:hover:bg-blue-800/50 transition-all"
                  whileHover={{ scale: 1.1, y: -3 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <FiLinkedin className="w-5 h-5" />
                </motion.a>
                <motion.a
                  href={`mailto:${portfolioData.socialLinks.email}`}
                  className="p-3 rounded-xl bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400 hover:bg-purple-200 dark:hover:bg-purple-800/50 transition-all"
                  whileHover={{ scale: 1.1, y: -3 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <HiMail className="w-5 h-5" />
                </motion.a>
              </div>
            </div>

            {/* Availability Status */}
            <div className="flex items-center space-x-3 p-4 rounded-xl bg-green-50 dark:bg-green-900/20 border border-green-100 dark:border-green-800">
              <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse"></div>
              <span className="text-sm text-green-700 dark:text-green-300 font-medium">
                Available for freelance projects & opportunities
              </span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

