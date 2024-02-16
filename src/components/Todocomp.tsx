import React from 'react'
import { MdDelete } from "react-icons/md";
import { FaCheck } from "react-icons/fa6";
import { CiEdit } from "react-icons/ci";



const Todocomp:React.FC= () => {
  return (
    <div className='flex justify-between bg-gray-200 px-2 py-2 rounded-lg'>
       <p className='text-violet-700 '>Please complete me 😂</p>
       <div className='flex min-w-[20%] justify-between'>
         <MdDelete className='text-[25px] text-violet-700 cursor-pointer'/>
         <FaCheck className='text-[25px] text-violet-700 cursor-pointer'/>
         <CiEdit className='text-[25px] text-violet-700 cursor-pointer'/> 
       </div>
    </div>
  )
}

export default Todocomp;
