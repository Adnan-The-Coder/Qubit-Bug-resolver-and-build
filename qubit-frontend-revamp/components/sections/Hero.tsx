import React from "react";
import Button from "../Button";
import starBg from "@/public/assets/stars.png";
import Link from "next/link";

const Hero = () => {
  return (
    <section
      className="h-[492px] flex items-center w-full justify-center overflow-hidden relative"
      style={{
        backgroundImage: `url(${starBg.src})`,
      }}
    >
      <div className="absolute inset-0 bg-[radial-gradient(75%_75%_at_center, rgba(140,69,255,0.5)_15%, rgba(14,0,36,0.5)_78%, transparent)]"></div>
      <div className="absolute h-64 w-64 rounded-full border border-white top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[radial-gradient(50%_50%_at_16.8%_18.3%,white,rgb(184,148,255)_37.7%,rgb(24,0,66))] shadow-[-20px_-20px_50px_rgb(255,255,255,.5),-20px_-20px_80px_rgb(255,255,255,.1),0_0_50px_rgb(140,69,255)]"></div>
      <div className="absolute h-[344px] w-[344px] border border-white opacity-20  rounded-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <div className="absolute h-2 w-2 top-1/2 -translate-x-1/2 -translate-y-1/2 left-0 bg-white rounded-full "></div>
        <div className="absolute h-2 w-2 top-0 -translate-x-1/2 -translate-y-1/2 left-1/2 bg-white rounded-full "></div>
        <div className="absolute h-5 w-5 top-1/2 border border-white -translate-x-1/2 -translate-y-1/2 left-full bg-white rounded-full inline-flex items-center justify-center">
          <div className="h-2 w-2 bg-white rounded-full"></div>
        </div>
      </div>
      <div className="absolute h-[444px] w-[444px] rounded-full border border-white/20 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 border-dashed "></div>
      <div className="absolute h-[544px] w-[544px] rounded-full border border-white/20 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 border-dashed ">
        <div className="absolute h-2 w-2 top-1/2 -translate-x-1/2 -translate-y-1/2 left-0 bg-white rounded-full "></div>
        <div className="absolute h-2 w-2 top-0 -translate-x-1/2 -translate-y-1/2 left-1/2 bg-white rounded-full "></div>
      </div>
      <div className="md:px-20 px-4 relative">
        <h1 className="text-8xl md:text-[168px] md:leading-none font-semibold text-center bg-white text-transparent bg-clip-text tracking-tighter bg-[radial-gradient(100%_100%_at_top_left,white,white,rgb(74,32,138,.5))]">
          QuBIT
        </h1>
        <p className="text-lg text-white/70 mt-5 text-center max-w-4xl mx-auto">
          Qubit is a dynamic platform featuring Quickie for seamless shopping,
          QuickGig for freelancing opportunities, and Quantumania for a thriving
          study community, empowering users to connect and grow!
        </p>
        <div className="flex items-center justify-center mt-5">
          <Link href={'https://chat.whatsapp.com/EtdOsk3pxm1EeezraSssFy'}><Button title="Try Now"></Button></Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;
