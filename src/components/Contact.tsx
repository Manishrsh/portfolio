import React from 'react';
import { Mail, Github, Linkedin, Send } from 'lucide-react';
import {motion} from 'framer-motion';

export function Contact() {
  return (
    <section id="contact" className="py-20 bg-backgoundmain relative overflow-hidden">

      {/* Left and Right Rounded Blur Effects */}
      <div className="absolute -left-16 top-1/2 transform -translate-y-1/2 w-60 h-60 bg-gradient-to-r from-[#271e55] to-transparent blur-3xl rounded-full pointer-events-none" />
      <div className="absolute -right-16 top-1/2 transform -translate-y-1/2 w-60 h-60 bg-gradient-to-l from-[#271e55] to-transparent blur-3xl rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-white mb-12 text-center">
          Get In Touch
        </h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information Section */}
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-white">Let's Connect</h3>
            <p className="text-gray-400">
              I'm always open to discussing new projects, creative ideas, or
              opportunities to be part of your visions.
            </p>
            <div className="space-y-4">
              <a
                href="https://mail.google.com/mail/u/0/#inbox/FMfcgzQXKqjRqfxhGPBqMWqwbmsrZgbZ?compose=jrjtXMlxQGGGDtXDhzCjftQvnkwhZTrJpJQzhHgvKVnWSvQXkVHhHxLSBnsFBZbnXNqkjHQf"
                className="flex items-center text-gray-400 hover:text-white transition-colors"
              >
                <Mail className="mr-3" size={20} />
                manishrs5235@gmail.com
              </a>
              <a
                href="https://github.com/Manishrsh"
                className="flex items-center text-gray-400 hover:text-white transition-colors"
              >
                <Github className="mr-3" size={20} />
                github.com/Manishrsh
              </a>
              <a
                href="https://www.linkedin.com/in/tech-manish-shinde"
                className="flex items-center text-gray-400 hover:text-white transition-colors"
              >
                <Linkedin className="mr-3" size={20} />
                linkedin.com/in/tech-manish-shinde
              </a>
            </div>
          </div>
      
          {/* Contact Form Section */}
          <motion.form 
          initial={{opacity: 0, y: 20}}
          transition={{duration: 1.4}}
          whileInView={{opacity: 1, y: 0}}
          
          className="space-y-6 formcss relative">
            {/* Middle Blur Effect */}
            <div className="absolute inset-0 top-10 w-40 h-40 bg-gradient-to-br from-[#7a7592] to-transparent blur-3xl rounded-full pointer-events-none m-auto" />

            <div className='bg-transparent'>
              <label htmlFor="name" className="block text-sm font-medium text-gray-400">
                Name
              </label>
              <input
                type="text"
                id="name"
                className="mt-1 block w-full rounded-md bg-transparent border border-maincolor text-white focus:border-purple-500 focus:ring-purple-500"
              />
            </div>
            
            <div className='bg-transparent'>
              <label htmlFor="email" className="block text-sm font-medium text-gray-400">
                Email
              </label>
              <input
                type="email"
                id="email"
                className="mt-1 block w-full rounded-md bg-transparent  border border-maincolor text-white focus:border-purple-500 focus:ring-purple-500"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-400">
                Message
              </label>
              <textarea
                id="message"
                rows={4}
                className="mt-1 block w-full rounded-md bg-transparent border  border-maincolor text-white focus:border-purple-500 focus:ring-purple-500"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full flex justify-center items-center px-4 py-2 bg-purple-600 text-white rounded-md hover:bg-purple-700 transition-colors"
            >
              <Send size={20} className="mr-2" />
              Send Message
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
