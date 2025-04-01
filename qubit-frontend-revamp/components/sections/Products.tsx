"use client";
import React from "react";
import Image from "next/image";
import quickie from "@/public/Quickie.png";
import quickgig from "@/public/QuickGig.png";
import quantumania from "@/public/Quantumania.jpg";

const products = [
  {
    id: 1,
    name: "Quickie",
    image: quickie,
    glowColor: "shadow-purple-500/50",
    borderColor: "border-purple-500",
    textColor: "text-purple-400",
    href: "https://qubitquickie.myshopify.com/",
  },
  {
    id: 2,
    name: "QuickGig",
    image: quickgig,
    glowColor: "shadow-blue-500/50",
    borderColor: "border-blue-500",
    textColor: "text-blue-400",
    href: "https://dot-quickgig-client.vercel.app/",
  },
  {
    id: 3,
    name: "QuantuMania",
    image: quantumania,
    glowColor: "shadow-green-500/50",
    borderColor: "border-green-500",
    textColor: "text-green-400",
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
      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl mx-auto w-full">
        {products.map((product) => (
          <div
            key={product.id}
            onClick={() => {
              window.location.href = product.href;
            }}
            className={`group flex flex-col items-center bg-gray-800 py-8 px-6 rounded-lg 
                      border-2 ${product.borderColor} transition-all duration-300 
                      hover:shadow-lg hover:scale-105 cursor-pointer
                      ${product.glowColor} hover:shadow-xl relative overflow-hidden`}
          >
            {/* Glow Effect Overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-transparent to-black opacity-70 z-0"></div>
            
            {/* Image Container */}
            <div className="relative z-10 w-32 h-32 mb-6 rounded-lg overflow-hidden transition-transform duration-300 group-hover:scale-110">
              <Image 
                src={product.image} 
                alt={product.name} 
                className="object-cover w-full h-full"
                width={128}
                height={128}
              />
            </div>
            
            {/* Product Name */}
            <p className={`text-2xl font-bold mt-2 ${product.textColor} tracking-wide z-10 transition-all duration-300 group-hover:text-white`}>
              {product.name}
            </p>
            
            {/* Hover Indicator */}
            <div className="mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
              <span className="text-white text-sm bg-black/50 py-1 px-3 rounded-full">
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