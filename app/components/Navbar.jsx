import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai'

function Navbar() {
  return (
    <>
      <div class="pt-2">
        <Image src="/BlueLogo.jpg" alt="" class="" height={50} width={50} />
      </div>
      <ul>
        <li>
          <Link href="#" class="hover:text-gray-400 text-sm">
            About
          </Link>
        </li>
        <li>
          <Link href="#" class="hover:text-gray-400 text-sm">
            About
          </Link>
        </li>
        <li>
          <Link href="#" class="hover:text-gray-400 text-sm">
            About
          </Link>
        </li>
        <li>
          <Link href="#" class="hover:text-gray-400 text-sm">
            About
          </Link>
        </li>

        <li>
          <Link href="#">Career</Link>
        </li>
      </ul>
      {/* ------------Mobile button------------------ */}
      <div>
        <AiOutlineMenu size={20} />
      </div>

      <div>
        <ul>
          <li>
            <Link href="#" class="hover:text-gray-400 text-sm">
              About
            </Link>
          </li>
          <li>
            <Link href="#" class="hover:text-gray-400 text-sm">
              About
            </Link>
          </li>
          <li>
            <Link href="#" class="hover:text-gray-400 text-sm">
              About
            </Link>
          </li>
          <li>
            <Link href="#" class="hover:text-gray-400 text-sm">
              About
            </Link>
          </li>

          <li>
            <Link href="#">Career</Link>
          </li>
        </ul>
      </div>
    </>
  );
}

export default Navbar