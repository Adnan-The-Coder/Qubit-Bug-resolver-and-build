'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Head from 'next/head';

export default function Quantumania() {
  const [isHovering, setIsHovering] = useState<number | null>(null);

  const links = [
    "https://chat.whatsapp.com/IZRNsWe6OV07wTnlgK7jkj",
    "https://chat.whatsapp.com/CgMgHWj39wsCJSHZ9qzV4l",
    "https://chat.whatsapp.com/KIkdejVKm5y7Eh9YcWxugN",
    "https://chat.whatsapp.com/DU1NqtE9FqEGviiPxdYVKI",
    "https://chat.whatsapp.com/I4D19GXvRz02D42eYWHCpE",
    "https://chat.whatsapp.com/KD7iaSyZqeO1Qc8RbVYFe7",
    "https://chat.whatsapp.com/Kgq5G5zNENOJfDqAM7Xl3G",
    "https://chat.whatsapp.com/CnjzgZR8z9WHg7NS2N6MsC",
    "https://chat.whatsapp.com/INt33o6hR4TG7NoaS8myST",
    "https://chat.whatsapp.com/Hv1LbQCGox9Itk6EM4CBuq",
    "https://chat.whatsapp.com/L1bWXEdMDUXJ8H8Eb5cY0K",
    "https://chat.whatsapp.com/I8h0vIum6Gv31b2ceyAeb6",
    "https://chat.whatsapp.com/JEqbuUlhVEW8TFwqzKaAk2",
    "https://chat.whatsapp.com/DPwqKtXIxAU8AnpHeebode",
    "https://chat.whatsapp.com/Ib4i5xA154bLR3aHW0dUEh"
  ];

  const texts = [
    { heading: "Hackathons", subheading: "Innovate, compete, and code your way to victory at top hackathons!" },
    { heading: "JOBS", subheading: "Job Hunting made easy!" },
    { heading: "Engineering Jobs", subheading: "Struggling to find an engineering job? Let's connect and land one together!" },
    { heading: "Events", subheading: "Bringing unforgettable events to life—let's create magic together!" },
    { heading: "Webinars/Seminars", subheading: "Unlock knowledge, connect, and grow with our power-packed webinars & seminars!" },
    { heading: "Networking", subheading: "Connect, collaborate, and grow—network your way to success!" },
    { heading: "Promotions", subheading: "Boost your brand, amplify your reach—let's make an impact!" },
    { heading: "Courses", subheading: "Learn, upskill, and stay ahead with top-notch courses!" },
    { heading: "Entrepreneurs", subheading: "Fuel your vision, build your empire—entrepreneurs, let's innovate!" },
    { heading: "Linkedin", subheading: "Optimize, network, and stand out—make LinkedIn work for you!" },
    { heading: "Internships", subheading: "Kickstart your career with hands-on experience—find the right internship!" },
    { heading: "Study Material", subheading: "Ace your exams with the best study materials at your fingertips!" },
    { heading: "Coder's General", subheading: "A group for all your coding needs! Connect with peers and Grow together!" },
    { heading: "Govt. Jobs", subheading: "Secure your future—stay updated on the latest government job opportunities!" },
    { heading: "General", subheading: "Opportunities, insights, and connections—everything you need in one place!" }
  ];

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10
      }
    }
  };

  const titleVariants = {
    hidden: { y: -50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10
      }
    }
  };

  // Background particle effect
  const [particles, setParticles] = useState<{ x: number, y: number, size: number, speed: number }[]>([]);

  useEffect(() => {
    const particleCount = 50;
    const newParticles = [];
    
    for (let i = 0; i < particleCount; i++) {
      newParticles.push({
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
        size: Math.random() * 3 + 1,
        speed: Math.random() * 1 + 0.2
      });
    }
    
    setParticles(newParticles);
    
    const moveParticles = () => {
      setParticles(prev => prev.map(particle => ({
        ...particle,
        y: particle.y + particle.speed,
        x: particle.x + (Math.random() - 0.5),
        // Reset if particle reaches bottom
        ...(particle.y > window.innerHeight ? {
          y: -10,
          x: Math.random() * window.innerWidth
        } : {})
      })));
    };
    
    const intervalId = setInterval(moveParticles, 50);
    
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#060b16] to-[#0a122a] text-[#00ff99] relative overflow-hidden">
      <Head>
        <title>QUANTUMANIA</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>

      {/* Particles */}
      <div className="absolute inset-0 pointer-events-none">
        {particles.map((particle, index) => (
          <div
            key={index}
            className="absolute rounded-full bg-[#00ff99] opacity-30"
            style={{
              left: `${particle.x}px`,
              top: `${particle.y}px`,
              width: `${particle.size}px`,
              height: `${particle.size}px`
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 py-12 relative z-10">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={titleVariants}
          className="text-center mb-12"
        >
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tighter bg-clip-text text-transparent bg-gradient-to-r from-[#00ff99] to-[#00bbff] mb-2">
            QUANTUMANIA
          </h1>
          <motion.h2 
            className="text-xl md:text-2xl text-[#00cc88]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            By QuBit
          </motion.h2>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
        >
          {texts.map((item, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ 
                scale: 1.05, 
                boxShadow: "0px 10px 30px rgba(0, 255, 153, 0.4)",
                transition: { type: "spring", stiffness: 400, damping: 10 }
              }}
              onClick={() => window.location.href = links[index]}
              onMouseEnter={() => setIsHovering(index)}
              onMouseLeave={() => setIsHovering(null)}
              className={`relative overflow-hidden rounded-xl cursor-pointer
                         group transition-all duration-300 ease-out
                         bg-gradient-to-br ${isHovering === index 
                           ? 'from-[#00ff99] to-[#00cc88]' 
                           : 'from-[#00ff9922] to-[#00cc8822]'} 
                         border border-[#00ff9944] backdrop-blur-md`}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-transparent to-[#00ff9910] group-hover:opacity-100 opacity-0 transition-opacity duration-300"></div>
              
              {/* Glow effect */}
              <div className={`absolute -inset-1 bg-gradient-to-r from-[#00ff99] to-[#00cc88] rounded-xl blur opacity-30 group-hover:opacity-70 transition duration-300 ${isHovering === index ? 'scale-105' : 'scale-100'}`}></div>
              
              <div className="relative p-8 h-full flex flex-col items-center justify-center text-center z-10">
                <motion.div
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ delay: index * 0.05 + 0.2 }}
                >
                  <h3 className="text-xl md:text-2xl font-bold mb-2 text-[#0a0f1a] group-hover:text-[#0a0f1a] text-[#00ff99]">
                    {item.heading}
                  </h3>
                  <p className="text-sm md:text-base text-[#0a0f1a] group-hover:text-[#0a0f1a] text-[#00dfaa] opacity-90">
                    {item.subheading}
                  </p>
                </motion.div>
                
                {/* Hidden icon that appears on hover */}
                <motion.div 
                  className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  initial={{ scale: 0 }}
                  animate={isHovering === index ? { scale: 1, rotate: 0 } : { scale: 0, rotate: -45 }}
                >
                  <svg className="w-6 h-6 text-[#0a0f1a]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}