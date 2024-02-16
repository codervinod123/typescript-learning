import React from 'react'

interface Props{
    todo:string;
    setTodo: React.Dispatch<React.SetStateAction<string>>;
    handleSubmit:(e: React.FormEvent)=>void
}

const InputComp = ({todo,setTodo,handleSubmit}:Props) => {
  return (
    <div>
       <form className='flex relative' onSubmit={(e)=>handleSubmit(e)}>
          <input 
              value={todo} 
              placeholder='Enter Your Task' 
              className='border border-black w-[500px] px-2 py-2 rounded-full text-violet-700 outline-none placeholder:text-violet-700 ' 
              type="text" 
              onChange={(e)=>setTodo(e.target.value)}
            />
          <button type='submit' className='h-[30px] w-[30px] rounded-full bg-violet-700 absolute right-[10px] top-[5px] text-white'>Go</button>
       </form>
    </div>
  )
}

export default InputComp
