"use client"
import React, {useState} from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai'

function Navbar() {
  const [nav, setNav] = useState(false)

  const handleNav = () => {
    setNav(!nav)
  }
  return (
    <>
      <div className="">
        <div class="max-w-[1240px] m-auto flex justify-between items-center p-4 ">
          <Image src="/BlueLogo.jpg" alt="" class="" height={50} width={50} />
          <ul className="hidden md:flex md:justify-between ">
            <li className="p-4">
              <Link href="#" class="hover:text-gray-400 text-sm">
                Home
              </Link>
            </li>
            <li className="p-4">
              <Link href="/About" class="hover:text-gray-400 text-sm">
                About Us
              </Link>
            </li>
            <li className="p-4">
              <Link href="#" class="hover:text-gray-400 text-sm">
                Our Team
              </Link>
            </li>
           
            <div>
              <li className="p-3 px-5 rounded-lg bg-blue-700 text-white">
                <Link href="#">Career</Link>
              </li>
            </div>
          </ul>
          {/* ------------Mobile button------------------ */}
          <div onClick={handleNav} className="block md:hidden z-10">
            {nav ? (
              <AiOutlineClose className="text-white cursor-pointer" size={20} />
            ) : (
              <AiOutlineMenu className="cursor-pointer" size={20} />
            )}
          </div>

          <div
            className={
              nav
                ? "md:hidden absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center w-full h-screen bg-black text-white ease-in duration-300"
                : "md:hidden absolute top-[0] left-[-100%] right-0 bottom-0 flex justify-center items-center w-full h-screen bg-black text-white ease-in duration-300"
            }
          >
            <ul>
              <li className="p-4 text-2xl hover:text-gray-500">
                <Link href="#">Home</Link>
              </li>
              <li className="p-4 text-2xl hover:text-gray-500">
                <Link href="/About" class="">
                  About Us
                </Link>
              </li>
              <li className="p-4 text-2xl hover:text-gray-500">
                <Link href="#" class="">
                  Our Team
                </Link>
              </li>
              <li className="p-4 text-2xl hover:text-gray-500">
                <Link href="/About">Career</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar