import React from "react";
import Quickie from "./Quickie";
import QuickGig from "./QuickGig";
import Quantumania from "./Quantumania";

const ProductsDesc = () => {
  return (
    <div className="mt-24 md:px-12 px-4 flex flex-col my-8 gap-12">
      <Quickie />
      <QuickGig />
      <Quantumania />
    </div>
  );
};

export default ProductsDesc;
