import React from 'react'
import { MdDelete } from "react-icons/md";
import { FaCheck } from "react-icons/fa6";
import { CiEdit } from "react-icons/ci";
import { Todo } from '../utils/Models';

interface Props{
  todoContent:Todo;
  todos:Todo[];
  setTodos:React.Dispatch<React.SetStateAction<Todo[]>>;
} 

const Todocomp= ({todoContent,todos,setTodos}:Props) => {
  return ( 
    <div className='flex justify-between bg-gray-200 px-2 py-2 rounded-lg transition-all duration-500 hover:scale-105 hover:bg-slate-500'>
       <p className='text-violet-700 '>{todoContent.todo}</p>
       <div className='flex min-w-[20%] justify-between'>
         <MdDelete className='text-[25px] text-violet-700 cursor-pointer'/>
         <FaCheck className='text-[25px] text-violet-700 cursor-pointer'/>
         <CiEdit className='text-[25px] text-violet-700 cursor-pointer'/> 
       </div>
    </div>
  )
}

export default Todocomp;
