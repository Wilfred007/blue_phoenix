import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

function Navbar() {
  return (
    <nav class="relative mx-auto p-6 shadow-md">
        <div class="flex items-center justify-between">
            <div class="pt-2">
                <Image src="/BlueLogo.jpg" alt="" class="" height={70} width={70} />
            </div>
            <div class="hidden md:flex space-x-6">
                <a href="#" class="hover:text-gray-400 text-sm">About</a>
                <a href="#" class="hover:text-gray-400 text-sm">Services</a>
                <a href="#" class="hover:text-gray-400 text-sm">Our Team</a>
                <a href="#" class="hover:text-gray-400 text-sm">Community</a>
            </div>

           <Link href='#' className='hidden md:block px-6 bg-blue-900 p-1.5 rounded-md text-white'>Career</Link>
        </div>
    </nav>
  )
}

export default Navbar