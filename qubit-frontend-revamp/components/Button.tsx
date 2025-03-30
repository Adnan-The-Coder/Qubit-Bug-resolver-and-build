"use client";
import React from "react";

const Button = ({ title }: { title: string }) => {
  return (
    <button
      onClick={() =>
        window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" })
      }
      className="py-2 relative px-5 rounded-lg font-medium text-sm bg-gradient-to-b from-[#190d2e] to-[#4a208a] cursor-pointer shadow-[0px_0px_12px_#8c45ff]"
    >
      {title}
    </button>
  );
};

export default Button;
