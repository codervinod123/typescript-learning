// import React,{useState} from 'react'
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

  // const [isDone,setIsDone]=useState<boolean>(false);

  const handleComplete=(id:number)=>{
      console.log("Hello from compete")
       setTodos(
          todos.map((todo)=>todo.id===id?{...todo,isCompleted:true}:todo)
       )
  }

  const handleDelete=(id:number)=>{
      setTodos((prev)=>prev.filter((todo)=>todo.id!==id));
      console.log(todos);
  }

   
  return ( 
    <div className='flex justify-between bg-gray-200 px-2 py-2 rounded-lg transition-all duration-500 hover:scale-105'>
       {todoContent.isCompleted? 
       <div className='flex items-center justify-center'>
          <FaCheck  className='text-[20px] text-green-700 cursor-pointer'/>
          <p className='text-green-700 '>{todoContent.todo}</p>
        </div>
        :
        <div className='flex'>
            <p className='text-violet-700'>{todoContent.todo}</p>
        </div>
       }
         
       <div className='flex min-w-[20%] justify-between'>
        {
           todoContent.isCompleted? 
           <button>
             <MdDelete onClick={()=>handleDelete(todoContent.id)} className='text-[25px] text-green-700 cursor-pointer'/>
           </button>
              :
             <MdDelete onClick={()=>handleDelete(todoContent.id)} className='text-[25px] text-violet-700 cursor-pointer'/>
        }

        {
           todoContent.isCompleted? 
             <button disabled={todoContent.isCompleted?true:false}>
               <FaCheck onClick={()=>handleComplete(todoContent.id)} className='text-[25px] text-green-700 cursor-pointer'/>
             </button>
              :
              <FaCheck onClick={()=>handleComplete(todoContent.id)} className='text-[25px] text-violet-700 cursor-pointer'/>
        }

        {
           todoContent.isCompleted? 
           <button>
              <CiEdit className='text-[25px] text-green-700 cursor-pointer'/>
           </button>
            :
            <CiEdit className='text-[25px] text-violet-700 cursor-pointer'/> 
        }
        
         
       </div>
    </div>
  )
}

export default Todocomp;
