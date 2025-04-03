"use client";
import React from "react";
import { Store, Briefcase, Users,GraduationCap } from "lucide-react";

const products = [
  {
    id: 1,
    name: "Quickie",
    icon: <Store className="text-purple-400 w-12 h-12" />,
    description: "Your one-stop e-commerce solution with fast, convenient shopping experience.",
    glowColor: "shadow-purple-500/50",
    borderColor: "border-purple-500",
    textColor: "text-purple-400",
    bgColor: "bg-purple-900/30",
    href: "https://qubitquickie.myshopify.com/",
  },
  {
    id: 2,
    name: "QuickGig",
    icon: <Briefcase className="text-blue-400 w-12 h-12" />,
    description: "Connect with professionals and find the perfect gig for your project needs.",
    glowColor: "shadow-blue-500/50",
    borderColor: "border-blue-500",
    textColor: "text-blue-400",
    bgColor: "bg-blue-900/30",
    href: "https://dot-quickgig-client.vercel.app/",
  },
  {
    id: 3,
    name: "QuantuMania",
    icon: <Users className="text-green-400 w-12 h-12" />,
    description: "Collaborative platform for quantum enthusiasts to share ideas and resources.",
    glowColor: "shadow-green-500/50",
    borderColor: "border-green-500",
    textColor: "text-green-400",
    bgColor: "bg-green-900/30",
    href: "/quantumania",
  },
  {
    id: 4,
    name: "QuBIT Academy",
    icon: <GraduationCap className="text-red-400 w-12 h-12" />,
    description: "Collaborative platform for quantum enthusiasts to share ideas and resources.",
    glowColor: "shadow-red-500/50",
    borderColor: "border-red-500",
    textColor: "text-red-400",
    bgColor: "bg-orange-900/30",
    href: "/quantumania",
  },
];

const Products = () => {
  return (
    <section className="mt-24 md:px-12 px-4 flex flex-col my-8 bg-[#140629] py-16 rounded-xl">
      {/* Heading */}
      <h1 className="text-4xl font-bold text-center mb-12 text-white tracking-wider">
        <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-blue-400 to-green-400">
          Our Products
        </span>
      </h1>

      {/* Product Grid */}
      <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-8 max-w-6xl mx-auto w-full">
        {products.map((product) => (
          <div
            key={product.id}
            onClick={() => {
              window.location.href = product.href;
            }}
            className={`group flex flex-col items-center bg-gray-900 py-8 px-6 rounded-xl 
                      border ${product.borderColor} transition-all duration-300 
                      hover:shadow-lg hover:scale-102 cursor-pointer
                      ${product.glowColor} hover:shadow-xl relative overflow-hidden`}
          >
            {/* Glow Effect Overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-transparent to-black opacity-70 z-0"></div>
            
            {/* Icon Container */}
            <div className={`relative z-10 ${product.bgColor} p-6 rounded-full mb-6 transition-transform duration-300 
                           group-hover:scale-110 ${product.glowColor}`}>
              {product.icon}
            </div>
            
            {/* Product Name and Description */}
            <div className="z-10 text-center">
              <h3 className={`text-2xl font-bold ${product.textColor} tracking-wide transition-all duration-300 
                            group-hover:text-white mb-3`}>
                {product.name}
              </h3>
              
              <p className="text-gray-300 mb-4 text-sm md:text-base opacity-80 group-hover:opacity-100 transition-opacity duration-300">
                {product.description}
              </p>
            </div>
            
            {/* Hover Indicator */}
            <div className="mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
              <span className={`${product.textColor} text-sm border border-current py-1 px-4 rounded-full 
                              hover:bg-white/10 transition-colors duration-200`}>
                Explore →
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Products;