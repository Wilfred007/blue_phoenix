import React from "react";
import Image from "next/image";
import { BsFacebook } from 'react-icons/bs'
import { BsInstagram } from 'react-icons/bs'
import { AiFillLinkedin } from 'react-icons/ai'

const page = () => {
  return (
    <footer className="text-white bg-black flex justify-between p-10">
      <div className="">
        <Image src="/BlueLogo.jpg" width={50} height={50} alt="Logo" className="rounded-md" />

        <h1 className=" font-semibold mt-[75px]">BluePhoenix</h1>
      </div>

      <div>
        <h1 className="font-semibold">Quick Links</h1>

        <ul className="mt-5">
          <li>About</li>
          <li>About</li>
          <li>About</li>
          <li>About</li>
        </ul>
      </div>

      <div className="">
        <h1 className="font-semibold">Socials</h1>
        <div className="flex mt-5 space-x-2">
            <BsFacebook />
            <BsInstagram />
            <AiFillLinkedin />
        </div>
            
      </div>
    </footer>
  );
};

export default page;
