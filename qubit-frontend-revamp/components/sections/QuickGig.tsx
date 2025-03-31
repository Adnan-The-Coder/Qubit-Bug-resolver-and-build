"use client";
import Image from "next/image";
import React, { useRef } from "react";
import test from "@/public/test.png";
import { motion, useInView } from "framer-motion";

const QuickGig = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section ref={ref} className="w-full py-20 md:py-32 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-purple-900/5 to-transparent"></div>
      <div className="absolute top-1/4 right-1/4 w-64 h-64 rounded-full bg-purple-700/10 blur-3xl"></div>
      <div className="absolute bottom-1/3 left-1/3 w-96 h-96 rounded-full bg-blue-700/10 blur-3xl"></div>
      
      <div className="container mx-auto px-4">
        {/* Header Section - Centered */}
        <motion.div 
          className="text-center mb-16 max-w-3xl mx-auto"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : -20 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white via-purple-300 to-indigo-300">
            QuickGig
          </h1>
          <p className="text-lg text-gray-300/90 leading-relaxed">
            The ultimate freelancing hub connecting skilled professionals with businesses seeking premium services
          </p>
          <div className="h-1 w-24 bg-gradient-to-r from-purple-500 to-blue-500 mt-6 mx-auto rounded-full"></div>
        </motion.div>
        
        {/* Featured Image - Full Width Card */}
        <motion.div 
          className="w-full mb-16 relative z-10"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 40 }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          <div className="relative group rounded-xl overflow-hidden">
            {/* Glow effect */}
            <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-600 to-blue-500 rounded-xl blur opacity-30 group-hover:opacity-70 transition duration-700"></div>
            
            <div className="relative rounded-xl overflow-hidden border border-white/10 bg-black/60 backdrop-blur-sm">
              <Image
                src={test}
                alt="QuickGig Platform Interface"
                className="w-full h-auto object-cover transform transition-all duration-700 group-hover:scale-105"
                style={{ maxHeight: "500px", objectPosition: "center" }}
                priority
              />
              
              {/* Overlay with text */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex items-end p-6 md:p-10">
                <div className="w-full md:max-w-lg">
                  <h2 className="text-2xl md:text-3xl font-semibold text-white mb-3">Experience Freelancing Reimagined</h2>
                  <p className="text-gray-300 text-sm md:text-base">From design and development to marketing and content creation, QuickGig transforms how talent connects with opportunity.</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
        
        {/* Three Column Features Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-10 mb-16">
          {[
            {
              title: "For Freelancers",
              description: "Showcase your skills, set your rates, and connect with clients seeking your expertise.",
              icon: (
                <svg className="w-8 h-8 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
                </svg>
              )
            },
            {
              title: "For Businesses",
              description: "Find top-tier talent quickly, manage projects efficiently, and grow your business with expert help.",
              icon: (
                <svg className="w-8 h-8 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                </svg>
              )
            },
            {
              title: "Secure Platform",
              description: "Enjoy safe transactions, transparent communication, and quality-guaranteed services.",
              icon: (
                <svg className="w-8 h-8 text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
                </svg>
              )
            }
          ].map((feature, i) => (
            <motion.div 
              key={i} 
              className="bg-black/30 backdrop-blur-sm border border-white/5 rounded-xl p-6 md:p-8 hover:border-purple-500/30 transition-all duration-300"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 30 }}
              transition={{ duration: 0.5, delay: 0.3 + (i * 0.1) }}
            >
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-xl md:text-2xl font-semibold mb-3 text-white">{feature.title}</h3>
              <p className="text-gray-300/90">{feature.description}</p>
            </motion.div>
          ))}
        </div>
        
        {/* Bottom CTA Section */}
        <motion.div 
          className="bg-gradient-to-r from-purple-900/20 to-blue-900/20 border border-white/10 rounded-2xl p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 40 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <div className="md:max-w-xl">
            <h2 className="text-2xl md:text-3xl font-bold mb-4 text-white">Ready to transform your freelancing journey?</h2>
            <p className="text-gray-300">Join thousands of professionals and businesses who`ve already discovered the power of QuickGig`s seamless platform.</p>
          </div>
          
          <div>
            <button className="group relative inline-flex items-center justify-center overflow-hidden rounded-lg bg-gradient-to-br from-purple-600 to-blue-500 p-0.5 text-sm font-medium text-white hover:text-white focus:outline-none focus:ring-4 focus:ring-blue-300/50">
              <span className="relative rounded-md bg-black/30 px-6 py-3.5 transition-all duration-300 ease-in group-hover:bg-opacity-0">
                <span className="flex items-center gap-2 text-lg">
                  Try QuickGig Now
                  <svg className="w-5 h-5 transform transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                  </svg>
                </span>
              </span>
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default QuickGig;