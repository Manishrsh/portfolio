import React from 'react';
import { Menu, X, Github, Linkedin, Mail } from 'lucide-react';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <header className="fixed w-full bg-gray-900/90 backdrop-blur-sm z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-600 text-transparent bg-clip-text">
            Manish Shinde
          </div>
          
          <nav className="hidden md:flex space-x-8">
            {['About', 'Projects', 'Skills', 'Contact'].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-gray-300 hover:text-white transition-colors"
              >
                {item}
              </a>
            ))}
          </nav>

          <div className="hidden md:flex items-center space-x-4">
            <a href="https://github.com/Manishrsh" className="text-gray-400 hover:text-white transition-colors">
              <Github size={20} />
            </a>
            <a href="https://www.linkedin.com/in/tech-manish-shinde" className="text-gray-400 hover:text-white transition-colors">
              <Linkedin size={20} />
            </a>
            <a href="manishrs5235@gmail.com" className="text-gray-400 hover:text-white transition-colors">
              <Mail size={20} />
            </a>
          </div>

          <button
            className="md:hidden text-gray-400 hover:text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-gray-900">
            {['About', 'Projects', 'Skills', 'Contact'].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="block px-3 py-2 text-gray-300 hover:text-white"
                onClick={() => setIsMenuOpen(false)}
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}