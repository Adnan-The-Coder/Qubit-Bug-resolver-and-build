'use client';

import Image from "next/image";
import React, { useState, useEffect } from "react";
import test from "@/public/test.png";
import { motion } from "framer-motion";
import Link from "next/link";

const Quantumania = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    setIsVisible(true);
  }, []);

  const features = [
    {
      title: "Courses",
      description: "Learn, upskill, and stay ahead with top-notch courses!",
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
        </svg>
      ),
      link: "/courses"
    },
    {
      title: "Internships",
      description: "Kickstart your career with hands-on experience-find the right internship",
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      link: "/internships"
    },
    {
      title: "LinkedIn",
      description: "Optimize, network, and stand-out make LinkedIn work for you!",
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      ),
      link: "/linkedin"
    },
    {
      title: "Jobs",
      description: "Job Hunting made easy",
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0zM9 16.5v.75m3-3v3M6 13.5h.75m-1.5-3h6m-6 3h6m6-3a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
        </svg>
      ),
      link: "/jobs"
    }
  ];

  // Animated hexagon grid background
  const Hexagons = () => {
    return (
      <div className="absolute inset-0 overflow-hidden opacity-20 pointer-events-none">
        <div className="absolute w-full h-full">
          {Array.from({ length: 20 }).map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-24 h-24 border border-purple-500/30"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                clipPath: "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)",
              }}
              animate={{
                opacity: [0.1, 0.3, 0.1],
                scale: [1, 1.1, 1],
                rotate: [0, 10, 0],
              }}
              transition={{
                duration: Math.random() * 5 + 10,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          ))}
        </div>
      </div>
    );
  };

  return (
    <section className="w-full py-20 relative overflow-hidden bg-gradient-to-b from-[#130830] to-black">
      <Hexagons />
      
      {/* Floating circles */}
      <div className="absolute top-1/4 left-1/3 w-64 h-64 rounded-full bg-purple-800/20 blur-3xl"></div>
      <div className="absolute bottom-1/4 right-1/3 w-80 h-80 rounded-full bg-indigo-800/20 blur-3xl"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Top section with title and rotating image */}
        <div className="flex flex-col items-center justify-center text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : -20 }}
            transition={{ duration: 0.8 }}
            className="mb-4"
          >
            <h1 className="text-6xl font-bold relative inline-block">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-300 to-indigo-400">
                Quantumania
              </span>
              <motion.span 
                className="absolute -top-1 -right-3 text-xs font-normal bg-gradient-to-r from-purple-500 to-pink-500 px-2 py-0.5 rounded-md"
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                BETA
              </motion.span>
            </h1>
          </motion.div>
          
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: isVisible ? 1 : 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg text-gray-300 max-w-2xl mb-8"
          >
            A quantum leap for student communities — where opportunities, knowledge, and connections converge
          </motion.p>
        </div>
        
        {/* Main content - Interactive feature tabs */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mb-12">
          {/* Left side - Interactive panel */}
          <motion.div
            className="lg:col-span-7 relative"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: isVisible ? 1 : 0, x: isVisible ? 0 : -30 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="relative">
              {/* Fancy border */}
              <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg blur opacity-20"></div>
              
              {/* Main content panel */}
              <div className="relative bg-black/60 backdrop-blur-lg border border-white/10 rounded-lg p-1 overflow-hidden">
                {/* Tab interaction */}
                <div className="flex border-b border-white/10">
                  {features.map((feature, index) => (
                    <button
                      key={index}
                      className={`flex-1 py-3 px-4 text-sm transition-colors duration-300 ${activeTab === index ? "text-white border-b-2 border-purple-500" : "text-gray-400 hover:text-gray-200"}`}
                      onClick={() => setActiveTab(index)}
                    >
                      <div className="flex items-center justify-center">
                        <span className={activeTab === index ? "text-purple-400" : "text-gray-500"}>
                          {feature.icon}
                        </span>
                        <span className="ml-2 hidden md:inline">{feature.title}</span>
                      </div>
                    </button>
                  ))}
                </div>
                
                {/* Featured content */}
                <div className="p-6">
                  <div className="flex flex-col md:flex-row gap-6">
                    <div className="md:w-1/2">
                      <h3 className="text-2xl font-bold mb-3 text-white">
                        {features[activeTab].title}
                      </h3>
                      <p className="text-gray-300 mb-4">
                        {features[activeTab].description}
                      </p>
                      <ul className="space-y-2">
                        {[ "Access to exclusive resources", "Personalized opportunity matching", "Skill development workshops", "Global community support" ].map((item, i) => (
                          <li key={i} className="flex items-start">
                            <svg className="w-5 h-5 text-purple-400 mr-2 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                            <span className="text-gray-300 text-sm">{item}</span>
                          </li>
                        ))}
                      </ul>
                      
                      <Link href={features[activeTab].link}>
                        <button className="mt-6 relative inline-flex items-center justify-center overflow-hidden rounded-md bg-gradient-to-r from-purple-600 to-pink-600 p-0.5 text-sm font-medium text-white group">
                          <span className="relative px-5 py-2.5 rounded-md bg-black bg-opacity-50 transition-all duration-300 ease-in group-hover:bg-opacity-0">
                            <span className="flex items-center">
                              Explore {features[activeTab].title}
                              <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                              </svg>
                            </span>
                          </span>
                        </button>
                      </Link>
                    </div>
                    
                    <div className="md:w-1/2">
                      <motion.div
                        key={activeTab}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                        transition={{ duration: 0.3 }}
                        className="relative rounded-md overflow-hidden border border-white/10"
                      >
                        <Image
                          src={test}
                          alt={features[activeTab].title}
                          className="w-full h-auto rounded-md"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent flex items-end">
                          <div className="p-4">
                            <p className="text-sm text-gray-300">Featured: {features[activeTab].title}</p>
                          </div>
                        </div>
                      </motion.div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Quantumania;
