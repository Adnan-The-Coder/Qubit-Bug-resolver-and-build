import React from "react";
import Image from "next/image";
import Link from "next/link";
import logo from "@/public/Qubit-white.png";
import {
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Twitter,
  Youtube,
} from "lucide-react";
const Footer = () => {
  return (
    <footer className="mt-32 w-full  flex flex-col">
      <div className="flex items-start lg:flex-row flex-col lg:px-20 md:px-8 px-4 py-16 gap-4">
        <div className="basis-1/3 text-wrap">
          <div className="flex items-center justify-normal">
            <div className="w-[35px] h-[35px]">
              <Image src={logo} alt="Logo" className="w-full h-full" />
            </div>
            <p className="text-3xl font-bold ml-2">Qubit</p>
          </div>
          <p className="text-white mt-8 pr-2 text-[14px]">
            Qubit – Connect. Create. Thrive.
          </p>
        </div>
        <div className="basis-1/3">
          <div className="flex flex-col lg:ml-8 font-bold text-white">
            <h1 className="mb-4">Contact Us</h1>

            <p className="flex items-center font-medium justify-normal gap-2">
              <Phone size={17} />
              +91 7454068074
            </p>
            <p className="flex mt-4 font-medium items-center justify-normal gap-2">
              <Mail size={17} />
              dotbrandaid@gmail.com
            </p>
            <p className="flex mt-4 font-medium items-center justify-normal gap-2">
              <MapPin size={17} />
              DBS Campus, Dehradun, India
            </p>
          </div>
        </div>
        <div className="basis-1/3">
          <div className="flex flex-col lg:ml-8 mt-4 lg:mt-0 text-white">
            <h1 className="text-lg font-semibold mb-4">Quick Link</h1>
            <ul>
              <li>
                <Link href="/" className=" font-semibold tex-[16px] mt-2">
                  Home
                </Link>
              </li>
              <li>
                <Link href="https://qubitquickie.myshopify.com/" className=" font-semibold tex-[16px] mt-2">
                  Quickie
                </Link>
              </li>
              <li>
                <Link href="https://dot-quickgig-client.vercel.app/" className=" font-semibold tex-[16px] mt-2">
                  QuickGig
                </Link>
              </li>
              <li>
                <Link
                  href="/quantumania"
                  className=" font-semibold tex-[16px] mt-2"
                >
                  Quantumania
                </Link>
              </li>
              <li>
                <Link href="/studio" className=" font-semibold tex-[16px] mt-2">
                  Studio
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="basis-1/3 lg:mt-0 mt-4">
          <h1 className="text-lg font-bold text-white">Follow Us</h1>
          <div className="flex items-center justify-normal gap-4 lg:mt-12 mt-4">
            <Link
              href="https://www.instagram.com/qubit_25?igsh=MTh2aXhibmk4N2xtZQ=="
              className="w-[50px] h-[50px] rounded-full flex items-center justify-center bg-white"
            >
              <Instagram className="text-purple-700" />
            </Link>
            <Link
              href=""
              className="w-[50px] h-[50px] rounded-full flex items-center justify-center bg-white"
            >
              <Twitter className="text-purple-700" />
            </Link>
            <Link
              href="https://www.linkedin.com/in/dot-qubit-281264357/"
              className="w-[50px] h-[50px] rounded-full flex items-center justify-center bg-white"
            >
              <Linkedin className="text-purple-700" />
            </Link>
            <Link
              href="https://youtube.com/@departmentoftechbrand-aid?si=DYMqf9aYuWOvc55Y"
              className="w-[50px] h-[50px] rounded-full flex items-center justify-center bg-white"
            >
              <Youtube className="text-purple-700" />
            </Link>
          </div>
        </div>
      </div>
      <div className="h-[1px] w-full border-dotted bg-white/20 my-8" />
      <br />
      <h1 className="text-center hover:"><Link href={'https://www.linkedin.com/in/syedadnanali99/'}target="_blanck" >Developed and Refactored by Adnan </Link></h1>
      <br />
    </footer>
  );
};

export default Footer;
