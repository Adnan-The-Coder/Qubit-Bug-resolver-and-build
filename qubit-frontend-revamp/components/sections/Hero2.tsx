"use client";
import React, { useState, useEffect, useRef } from "react";
import Button from "../Button";
import Link from "next/link";
import { Volume2, VolumeX } from "lucide-react";

const Hero2 = () => {
  const [isMuted, setIsMuted] = useState(true);
  const [isLoaded, setIsLoaded] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    // Add a small delay to make loading animation visible
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 800);
    return () => clearTimeout(timer);
  }, []);

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !videoRef.current.muted;
      setIsMuted(!isMuted);
    }
  };

  return (
    <section className="h-screen w-full relative overflow-hidden">
      {/* Loading overlay */}
      <div 
        className={`absolute inset-0 bg-black z-30 flex items-center justify-center transition-opacity duration-1000 ${
          isLoaded ? "opacity-0 pointer-events-none" : "opacity-100"
        }`}
      >
        <div className="animate-pulse text-6xl font-bold bg-gradient-to-r from-purple-500 to-blue-500 text-transparent bg-clip-text">
          QuBIT
        </div>
      </div>

      {/* Background video */}
      <video
        ref={videoRef}
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover"
        onLoadedData={() => setIsLoaded(true)}
      >
        <source src="/assets/adv_video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Overlay gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(75%_75%_at_center,rgba(140,69,255,0.4)_15%,rgba(14,0,36,0.8)_78%)]"></div>

      {/* Sound control button */}
      <button 
        onClick={toggleMute}
        className={`absolute top-6 right-6 z-20 p-3 rounded-full transition-all duration-300 ${
          isLoaded ? "opacity-100" : "opacity-0"
        } ${
          isMuted 
            ? "bg-white/10 hover:bg-white/20" 
            : "bg-purple-500/50 hover:bg-purple-500/70 shadow-lg shadow-purple-500/30"
        }`}
        aria-label={isMuted ? "Unmute" : "Mute"}
      >
        {isMuted ? (
          <VolumeX className="text-white" size={20} />
        ) : (
          <Volume2 className="text-white" size={20} />
        )}
      </button>

      {/* Main content */}
      <div className={`absolute inset-0 flex items-center justify-center transition-opacity duration-1000 ${
        isLoaded ? "opacity-100" : "opacity-0"
      }`}>
        <div className="relative px-4 md:px-20 max-w-7xl mx-auto">
          {/* Animated central orb */}
          <div className="absolute h-64 w-64 rounded-full border border-white/30 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[radial-gradient(50%_50%_at_16.8%_18.3%,white,rgb(184,148,255)_37.7%,rgb(24,0,66))] animate-pulse shadow-[-20px_-20px_50px_rgb(255,255,255,.5),-20px_-20px_80px_rgb(255,255,255,.1),0_0_50px_rgb(140,69,255)]"></div>
          
          {/* Orbital rings with animation */}
          <div className="absolute h-[344px] w-[344px] border border-white/30 rounded-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 animate-[spin_30s_linear_infinite]">
            <div className="absolute h-3 w-3 top-1/2 -translate-x-1/2 -translate-y-1/2 left-0 bg-white rounded-full shadow-[0_0_10px_2px_rgba(255,255,255,0.7)]"></div>
            <div className="absolute h-3 w-3 top-0 -translate-x-1/2 -translate-y-1/2 left-1/2 bg-white rounded-full shadow-[0_0_10px_2px_rgba(255,255,255,0.7)]"></div>
            <div className="absolute h-6 w-6 top-1/2 -translate-x-1/2 -translate-y-1/2 left-full bg-purple-400 rounded-full inline-flex items-center justify-center border border-white/50 shadow-[0_0_15px_5px_rgba(140,69,255,0.7)]">
              <div className="h-2 w-2 bg-white rounded-full"></div>
            </div>
          </div>
          
          <div className="absolute h-[444px] w-[444px] rounded-full border border-white/20 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 border-dashed animate-[spin_50s_linear_infinite_reverse]"></div>
          
          <div className="absolute h-[544px] w-[544px] rounded-full border border-white/20 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 border-dashed animate-[spin_70s_linear_infinite] shadow-[0_0_30px_rgba(140,69,255,0.3)]">
            <div className="absolute h-3 w-3 top-1/2 -translate-x-1/2 -translate-y-1/2 left-0 bg-white rounded-full shadow-[0_0_10px_2px_rgba(255,255,255,0.7)]"></div>
            <div className="absolute h-3 w-3 top-0 -translate-x-1/2 -translate-y-1/2 left-1/2 bg-white rounded-full shadow-[0_0_10px_2px_rgba(255,255,255,0.7)]"></div>
          </div>

          <h1 className="text-8xl md:text-[168px] md:leading-none font-semibold text-center bg-white text-transparent bg-clip-text tracking-tighter bg-[radial-gradient(100%_100%_at_top_left,white,white,rgb(74,32,138,.5))] relative animate-[fadeIn_1s_ease-in]">
            QuBIT
          </h1>
          
          <p className="text-lg text-white/80 mt-5 text-center max-w-4xl mx-auto relative animate-[fadeIn_1.5s_ease-in] backdrop-blur-sm py-2 px-4 rounded-lg">
            Qubit is a dynamic platform featuring Quickie for seamless shopping,
            QuickGig for freelancing opportunities, and Quantumania for a thriving
            study community, empowering users to connect and grow!
          </p>
          
          <div className="flex items-center justify-center mt-8 relative animate-[fadeIn_2s_ease-in]">
            <Link href="#ProductCards">
              <Button 
                title="Try Now" 
                // className="hover:shadow-[0_0_20px_rgba(140,69,255,0.8)] transition-all duration-300 bg-gradient-to-r from-purple-600 to-indigo-600 border border-white/20"
              />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero2;