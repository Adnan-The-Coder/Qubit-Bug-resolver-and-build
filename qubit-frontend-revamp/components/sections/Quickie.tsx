import Image from "next/image";
import React from "react";
import test from "@/public/test.png";
import Button from "../Button";
const Quickie = () => {
  return (
    <section className="w-full grid lg:grid-cols-2 md:grid-cols-1 gap-14 mt-12">
      <div className="border-[1px] lg:w-[600px] md:w-full border-white/30 rounded-md p-2 ">
        <Image
          src={test}
          alt="Quickie"
          className="rounded-md scale-95 hover:scale-100 cursor-pointer"
        />
      </div>
      <div className="flex flex-col space-y-5 mt-4">
        <h1 className="text-4xl md:leading-none font-semibold bg-white text-transparent bg-clip-text tracking-tighter bg-[radial-gradient(100%_100%_at_top_left,white,white,rgb(74,32,138,.5))]">
          Quickie
        </h1>
        <p className="md:text-lg/8 text-sm/6 text-justify ">
          Quickie is a fast and seamless shopping experience within the Qubit
          platform, designed to make online shopping effortless and enjoyable.
          With a wide range of products across various categories, Quickie
          ensures that users can find everything they need in one place. Whether
          you're looking for daily essentials, fashion trends, or the latest
          tech gadgets, Quickie provides a smooth, user-friendly interface for
          easy browsing and secure purchasing. Our goal is to bring convenience
          and reliability to your shopping journey, making it quicker and
          smarter than ever before!
        </p>
        <div className="mt-4" />
        <Button title="Try Now"></Button>
      </div>
    </section>
  );
};

export default Quickie;
