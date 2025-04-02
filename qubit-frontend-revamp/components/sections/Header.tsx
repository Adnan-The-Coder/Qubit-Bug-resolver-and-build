import React from "react";
import Image from "next/image";
import logo from "@/public/Qubit-white.png";
import Link from "next/link";

import Button from "../Button";
const Header = () => {
  return (
    <header className="w-full h-[70px] md:px-20 px-4 py-4 border-b-[0.5px] border-white/15">
      <div className="flex item-center justify-between">
        <Link href="/" className="flex items-center justify-normal">
          <Image src={logo} alt="Logo" className="w-[40px] mr-3" />
          <p className="text-xl font-bold">Qubit</p>
        </Link>

        <div className="flex items-center justify-normal space-x-5">
          <div className="md:flex hidden items-center justify-normal space-x-5">
            <Link href="https://qubitquickie.myshopify.com/">Quickie</Link>
            <Link href="https://dot-quickgig-client.vercel.app/">QuickGig</Link>
            <Link href="/quantumania">QuantMania </Link>
          </div>
          <Link href={'https://chat.whatsapp.com/EtdOsk3pxm1EeezraSssFy'}><Button title="Try Now"></Button></Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
