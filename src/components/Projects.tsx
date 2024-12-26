import React from 'react';
import { ExternalLink, Github } from 'lucide-react';
import freeHostimg from '../assets/freeHostimage.png';
import movies from '../assets/movies.jpg';
import { motion } from 'framer-motion';
import Opnion from '../assets/Opnion.jpg';

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

const projects = [
  {
    title: 'Free-Host Platform',
    description: 'Developed a scalable static web hosting platform similar to Vercel, enabling users to deploy and manage static site',
    image: `${freeHostimg}`,
    tags: ['React', 'Node.js', 'MongoDB', 'Tailwind CSS','AWS','Docker'],
    github: 'https://github.com',
    demo: 'https://freehost.manishmoneymanage.tech'
  },
  {
    title: 'Movie Platform',
    description: 'Developed a movie platform using React that is main motive to bulid to sort best movie and tv show to pepople see best movie and tv show',
    image: `${movies}`,
    tags: ['React', 'Scss', 'tailwind css'],
    github: 'https://github.com',
    demo: 'https://movies.manishmoneymanage.tech'
  },
  {
    title: 'Opinion-Paltform',
    description: 'Social media platform for sharing opinions and insights',
    image: `${Opnion}`,
    tags: ['React.js', 'Node.js', 'MongoDB', 'Tailwind CSS'],
    github: 'https://github.com',
    demo: 'https://example.com'
  },
  {
    title: 'Dynamic e-commerce Luncher ( In Devolpment.. )',
    description: 'Social media platform for sharing opinions and insights',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80',
    tags: ['React.js', 'Node.js', 'MongoDB', 'Tailwind CSS'],
    github: 'https://github.com',
    demo: 'https://example.com'
  },
  {
    title: 'Uptime Monitoring Platform ( In Devolpment.. )' ,
    description: 'Designed and developed an uptime monitoring platform to track website and server availability in real-time. ',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80',
    tags: ['React.js', 'Node.js', 'MongoDB', 'Tailwind CSS' , 'redis' , 'docker'],
    github: 'https://github.com',
    demo: 'https://example.com'
  },
  {
    title: 'Cloud IDE ( In Devolpment.. )',
    description: 'Social media platform for sharing opinions and insights',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80',
    tags: ['React.js', 'Node.js', 'MongoDB', 'Tailwind CSS', 'docker'],
    github: 'https://github.com',
    demo: 'https://example.com'
  },
];

export function Projects() {
  return (
    <section id="projects" className="py-20 bg-backgoundmain relative overflow-hidden">
      {/* Left Blur Effect */}
      <div className="absolute -left-16 top-1/2 transform -translate-y-1/2 w-60 h-60 bg-gradient-to-r from-[#271e55] to-transparent blur-3xl rounded-full pointer-events-none" />
      
      {/* Right Blur Effect */}
      <div className="absolute -right-16 top-1/2 transform -translate-y-1/2 w-60 h-60 bg-gradient-to-l from-[#271e55] to-transparent blur-3xl rounded-full pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <h2 className="text-3xl font-bold text-white mb-12 text-center">
          Featured Projects
        </h2>
        <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{amount: 0.2 , once: true}}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projects.map((project, index) => (
            <motion.div
              variants={cardVariants}
              
              key={index}
              className="rounded-lg overflow-hidden hover:transform hover:scale-105 transition-transform duration-300 cardcss"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-white mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-400 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-purple-900/30 text-purple-400 rounded-full text-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex space-x-4">
                  <a
                    href={project.github}
                    className="flex items-center text-gray-400 hover:text-white transition-colors"
                  >
                    <Github size={20} className="mr-2" />
                    Code
                  </a>
                  <a
                    href={project.demo}
                    className="flex items-center text-gray-400 hover:text-white transition-colors"
                  >
                    <ExternalLink size={20} className="mr-2" />
                    Demo
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
