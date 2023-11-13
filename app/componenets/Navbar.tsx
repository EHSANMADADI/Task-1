import React from 'react'
import Link from 'next/link';
import { BiCube } from "react-icons/bi";

function Navbar() {
     return (
          <div className="Navbar mx-auto my-2 p-5 flex justify-between ">
               <div className='nav-logo flex items-center'>
                    <BiCube className='text-green text-4xl mx-2' />
                    <h5 className='text-xl  text-white'><span className='font-extrabold'>HACK</span>THE<span className='font-extrabold'>BOX</span></h5>
               </div>

               <div className='nav-Link flex ml-5 space-x-6 items-center text-color'>
                    <Link href='/' className=' hover:text-white'>Business</Link>
                    <Link href='/' className=' hover:text-white'>Hackers</Link>
                    <Link href='/' className=' hover:text-white'>Industries</Link>
                    <Link href='/' className=' hover:text-white'>Resources</Link>
                    <Link href='/' className=' hover:text-white'>Company</Link>
               </div>

               <div className='nav-item flex space-x-4 items-center'>
                    <div className='dropdown'>
                         <Link href='/' className='text-color hover:text-white dropbtn' >Sign In</Link>
                         <ul className='dropdown-content p-5'>
                              <li>HTB Academy</li>
                              <li className='text-color cursor-pointer'>Lern cybersecurity from zero</li>
                              <li className='mt-4  cursor-pointer'>HTB Labs</li>
                              <li className='text-color  cursor-pointer'>level up your hacking skils</li>
                              <li className='mt-4  cursor-pointer'>HTB Buisines</li>
                              <li className='text-color  cursor-pointer'>upskil your cyber team</li>
                              <li className='mt-4  cursor-pointer'>HTB CTF</li>
                              <li className='text-color  cursor-pointer'>play or host a hacking competition</li>
                         </ul>
                    </div>



                    <button className='py-3 px-5 bg-green rounded'>Get Started</button>
               </div>

          </div>
     )
}

export default Navbar