import Image from "next/image";
import React from "react";
import test from "@/public/test.png";
import Button from "../Button";
const QuickGig = () => {
  return (
    <section className="w-full grid lg:grid-cols-2 md:grid-cols-1 gap-14 mt-28">
      <div className="border-[1px] lg:w-[600px] md:w-full border-white/30 rounded-md p-2 ">
        <Image
          src={test}
          alt="Quickie"
          className="rounded-md scale-95 hover:scale-100 cursor-pointer"
        />
      </div>
      <div className="flex flex-col space-y-5 mt-4">
        <h1 className="text-4xl md:leading-none font-semibold bg-white text-transparent bg-clip-text tracking-tighter bg-[radial-gradient(100%_100%_at_top_left,white,white,rgb(74,32,138,.5))]">
          QuickGig
        </h1>
        <p className="md:text-lg/8 text-sm/6 text-justify ">
          QuickGig is the ultimate freelancing hub within the Qubit platform,
          connecting skilled professionals with businesses and individuals
          seeking top-tier services. Whether you`re a freelancer looking for new
          opportunities or a client in need of expert assistance, QuickGig
          offers a seamless and efficient experience. From design and
          development to writing, marketing, and beyond, QuickGig provides a
          diverse range of job categories, ensuring that talent meets demand
          effortlessly. With secure payments, flexible work arrangements, and a
          user-friendly interface, QuickGig empowers freelancers to thrive and
          clients to find the perfect match for their projects.
        </p>
        <div className="mt-4" />
        <Button title="Try Now"></Button>
      </div>
    </section>
  );
};

export default QuickGig;
