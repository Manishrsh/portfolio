import React from 'react';
import { motion } from 'framer-motion';

const skills = {
  Frontend: ['React', 'TypeScript', 'Tailwind CSS', 'Next.js'],
  Backend: ['Node.js', 'Python', 'PostgreSQL', 'MongoDB'],
  Tools: ['Git', 'Docker', 'AWS', 'Firebase'],
  Other: ['UI/UX Design', 'Agile', 'Testing', 'CI/CD'],
};

export function Skills() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3, 
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  };

  return (
    <section id="skills" className="py-20 bg-backgoundmain relative overflow-hidden">
      {/* Left Rounded Blur Effect */}
      <div className="absolute -left-16 top-1/2 transform -translate-y-1/2 w-80 h-80 bg-gradient-to-r from-[#271e55] to-transparent blur-3xl rounded-full pointer-events-none" />

      {/* Right Rounded Blur Effect */}
      <div className="absolute -right-16 top-1/2 transform -translate-y-1/2 w-80 h-80 bg-gradient-to-l from-[#271e55] to-transparent blur-3xl rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <h2 className="text-3xl font-bold text-white mb-12 text-center">
          Skills & Technologies
        </h2>

        {/* Animate Skill Cards */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ amount: 0.2 }} 
        >
          {Object.entries(skills).map(([category, items]) => (
            <motion.div
              key={category}
              className="cardcss rounded-lg p-6 h-80"
              variants={cardVariants}
            >
              <h3 className="text-2xl font-semibold text-purple-400 mb-4">{category}</h3>
              <ul className="space-y-2">
                {items.map((skill) => (
                  <li
                    key={skill}
                    className="text-gray-300 flex items-center text-xl font-semibold"
                  >
                    <span className="w-2 h-2 bg-purple-500 rounded-full mr-2"></span>
                    {skill}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
