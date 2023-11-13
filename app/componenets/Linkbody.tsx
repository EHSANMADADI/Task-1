import Link from 'next/link'
import React from 'react'
import {AiOutlineRight} from 'react-icons/ai'
function Linkbody() {
     return (
          <div className="  mx-auto mt-16 border-link p-1">
               <div className="flex justify-between  items-center">
               <span className="text-green border-new px-2 ml-2 py-1">NEW</span>
               <Link className='text-color hover:text-green hover' href='/'>Join the biggest cybersecurity event for Universities! More than $65,000 in prizes </Link>
               <AiOutlineRight className='text-color mr-3 cursor-pointer hover:text-green items-center hover'/>
               </div>
        
          </div>
     )
}

export default Linkbody