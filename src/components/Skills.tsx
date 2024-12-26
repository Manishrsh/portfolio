import React from 'react';
import { motion } from 'framer-motion';
import { FaReact, FaNodeJs, FaGit, FaDocker, FaAws, FaPython } from 'react-icons/fa';
import { SiTypescript, SiTailwindcss, SiPostgresql, SiMongodb, SiFirebase, SiNextdotjs, SiCypress,SiGrafana, SiFigma , SiGithubactions } from 'react-icons/si';

const skills = {
  Frontend: [
    { name: 'React', icon: <FaReact /> },
    { name: 'TypeScript', icon: <SiTypescript /> },
    { name: 'Tailwind CSS', icon: <SiTailwindcss /> },
    { name: 'Next.js', icon: <SiNextdotjs /> },
  ],
  Backend: [
    { name: 'Node.js', icon: <FaNodeJs /> },
    { name: 'Python', icon: <FaPython /> },
    { name: 'PostgreSQL', icon: <SiPostgresql /> },
    { name: 'MongoDB', icon: <SiMongodb /> },
  ],
  Tools: [
    { name: 'Git', icon: <FaGit /> },
    { name: 'Docker', icon: <FaDocker /> },
    { name: 'AWS', icon: <FaAws /> },
    { name: 'Firebase', icon: <SiFirebase /> },
  ],
  Other: [    
    { name: 'Monitoring', icon: <SiGrafana/> }, // Add appropriate icon or leave null
    { name: 'Testing', icon: <SiCypress /> },
    { name: 'CI/CD', icon: <SiGithubactions /> }, // Add appropriate icon or leave null
  ],
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
              <ul className="space-y-4">
                {items.map(({ name, icon }) => (
                  <li
                    key={name}
                    className="flex items-center space-x-4 text-gray-300 text-xl font-semibold"
                  >
                    {icon && (
                      <div className="text-purple-500 text-2xl">
                        {icon}
                      </div>
                    )}
                    <span>{name}</span>
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
