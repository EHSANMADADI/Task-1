'use client'
import React, { useState } from 'react'

import Link from 'next/link';
import { BiCube } from "react-icons/bi";
import List from '../List';

function Navbar() {
     const [menuIsOpen, setMenuIsOpen] = useState(false)
     const Listitem = [
          { title: 'HTB Academy', text: 'Learn cybersecurity from zero', hoverText: 'academy.hackthebox.com' },
          { title: 'HTB Labs', text: 'level up your hacking skils', hoverText: 'app.hackthebox.com/' },
          { title: 'HTB Buisines', text: 'upskil your cyber team', hoverText: 'enterprise.hackthebox.com' },
          { title: 'HTB CTF', text: 'play or host a hacking competition', hoverText: 'ctf.hackthebox.com' }]
     return (
          <div className="Navbar mx-auto my-2 p-5 flex justify-between ">
               <div className='nav-logo flex items-center'>
                    <BiCube className='text-green text-4xl mx-2' />
                    <h5 className='text-xl  text-white'><span className='font-extrabold'>HACK</span>THE<span className='font-extrabold'>BOX</span></h5>
               </div>

               <div className='nav-Link lg:flex ml-5 space-x-6 items-center text-color hidden '>
                    <Link href='/' className=' hover:text-white'>Business</Link>
                    <Link href='/' className=' hover:text-white'>Hackers</Link>
                    <Link href='/' className=' hover:text-white'>Industries</Link>
                    <Link href='/' className=' hover:text-white'>Resources</Link>
                    <Link href='/' className=' hover:text-white'>Company</Link>
               </div>
               <button onClick={() => setMenuIsOpen(s => !s)} className='flex lg:hidden flex-col gap-2 '>
                    <span className={`w-8 h-1 rounded-md duration-500 bg-white block ${menuIsOpen&&'rotate-45 translate-y-3.5 translate-x-1'}`}></span>
                    <span className={`w-8 h-1 rounded-md duration-500 bg-white block ${menuIsOpen && 'hidden'}`}></span>
                    <span className={`w-8 h-1 rounded-md duration-500 bg-white block ${menuIsOpen&&'-rotate-45'}`}></span>
               </button>
               {
                    menuIsOpen &&
                    <div className='lg:hidden flex flex-col gap-4 bg-slate-200 absolute top-20 left-0 w-full h-[calc(100%-80px)] px-4 py-6 text-lg text-gray-600  '>
                         <Link href='/' className=' hover:text-white'>Business</Link>
                         <Link href='/' className=' hover:text-white'>Hackers</Link>
                         <Link href='/' className=' hover:text-white'>Industries</Link>
                         <Link href='/' className=' hover:text-white'>Resources</Link>
                         <Link href='/' className=' hover:text-white'>Company</Link>
                    </div>
               }
               <div className='nav-item lg:flex hidden space-x-4 items-center'>
                    <div className='dropdown'>
                         <Link href='/' className='text-color hover:text-white dropbtn' >Sign In</Link>
                         <ul className='dropdown-content p-5'>
                              {Listitem.map((item) =>
                                   <List title={item.title} text={item.text} hoverText={item.hoverText} />
                              )}
                         </ul>
                    </div>
                    <button className='py-3 px-5 bg-green rounded'>Get Started</button>
               </div>


          </div>
     )
}

export default Navbar