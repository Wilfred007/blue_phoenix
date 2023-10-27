import React from "react";
import Image from "next/image";
import { BsFacebook } from 'react-icons/bs'
import { BsInstagram } from 'react-icons/bs'
import { AiFillLinkedin } from 'react-icons/ai'

const page = () => {
  return (
    <footer className="flex flex-col sm:flex-row text-white bg-black justify-between p-10 mt-10">
      <div className="">
        <Image
          src="/BlueLogo.jpg"
          width={50}
          height={50}
          alt="Logo"
          className="rounded-md"
        />

        <h1 className=" font-semibold mt-5 text-gray-500">BluePhoenix</h1>
      </div>

      <div>
        <h1 className="font-semibold mt-10 text-gray-500">Quick Links</h1>

        <ul className="">
          <li className="hover:text-gray-300 cursor-pointer">Home</li>
          <li className="hover:text-gray-300 cursor-pointer">About</li>
          <li className="hover:text-gray-300 cursor-pointer">Our Team</li>
          <li className="hover:text-gray-300 cursor-pointer">Contact Us</li>
        </ul>
      </div>

      <div className="">
        <h1 className="font-semibold mt-10 text-gray-500">Socials</h1>
        <div className="flex space-x-2 mt-5">
          <BsFacebook />
          <BsInstagram />
          <AiFillLinkedin />
        </div>
      </div>
    </footer>
  );
};

export default page;
