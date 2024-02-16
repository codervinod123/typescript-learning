import React from 'react'
import Todocomp from './Todocomp';
import { Todo } from '../utils/Models';


interface Props{
    todos:Todo[];
    setTodos:React.Dispatch<React.SetStateAction<Todo[]>>
}

const TodoList = ({todos,setTodos}:Props) => {
  return (
    <div className='mt-4 flex flex-col w-[39%] gap-y-2'>
         {
            todos.map((data)=>{
                return(
                    <Todocomp todoContent={data} todos={todos} setTodos={setTodos}/>
                )
            })
         }
       
    </div>
  )
}

export default TodoList;
