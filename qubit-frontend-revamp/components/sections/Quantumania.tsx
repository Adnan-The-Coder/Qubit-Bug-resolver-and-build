import Image from "next/image";
import React from "react";
import test from "@/public/test.png";
import Button from "../Button";

const Quantumania = () => {
  return (
    <section className="w-full grid lg:grid-cols-2 md:grid-cols-1 gap-14  mt-12">
      <div className="border-[1px] lg:w-[600px] md:w-full border-white/30 rounded-md p-2 ">
        <Image
          src={test}
          alt="Quickie"
          className="rounded-md scale-95 hover:scale-100 cursor-pointer"
        />
      </div>
      <div className="flex flex-col space-y-5 mt-4">
        <h1 className="text-4xl md:leading-none font-semibold bg-white text-transparent bg-clip-text tracking-tighter bg-[radial-gradient(100%_100%_at_top_left,white,white,rgb(74,32,138,.5))]">
          Quantumania
        </h1>
        <p className="md:text-lg/8 text-sm/6 text-justify ">
          Quantumania is a thriving student community within the Qubit platform,
          designed to empower learners by connecting them with diverse
          opportunities. Whether you're looking for internships, research
          projects, mentorship, or collaborative study groups, Quantumania
          provides a space where students can explore, engage, and grow. With a
          focus on innovation and knowledge-sharing, this community encourages
          students to think independently, develop skills, and seize new
          career-building opportunities. Join Quantumania to network with
          like-minded individuals, gain real-world experience, and shape your
          future with limitless possibilities!
        </p>
        <div className="mt-4" />
        <Button title="Try Now"></Button>
      </div>
    </section>
  );
};

export default Quantumania;
