import React from "react";
import { ArrowDown } from "lucide-react";
import { TypeAnimation } from "react-type-animation";

export function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center relative bg-backgoundmain">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-backgoundmain" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 text-center">
        <h1 className="text-4xl sm:text-6xl font-bold text-white mb-6">
          <span className="block">Hi, I'm </span>
          <span className="block mt-2 bg-gradient-to-r from-purple-400 to-pink-600 text-transparent bg-clip-text ">
            Manish Shinde
          </span>
        </h1>
        <p className="text-xl sm:text-2xl text-gray-300 mb-12">
        <TypeAnimation
              sequence={["Full Stack Developer ", 500 , "Coding Enthusiast ", 500, "Problem Solver", 500]}
              style={{ fontSize: "1em" }}
              repeat={Infinity}
            />

        </p>
        <div className="flex justify-center space-x-4">
          <a
            href="#projects"
            className="px-8 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors"
          >
            View My Work
          </a>
          <a
            href="#contact"
            className="px-8 py-3 border border-purple-600 text-purple-400 rounded-lg hover:bg-purple-600/10 transition-colors"
          >
            Contact Me
          </a>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ArrowDown className="text-gray-400" size={24} />
      </div>
    </section>
  );
}
