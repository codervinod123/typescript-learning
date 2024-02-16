import React from 'react'
import Todocomp from './Todocomp';
// import { Todo } from '../utils/Models';


const TodoList:React.FC = () => {
  return (
    <div className='mt-4 w-[39%]'>
        {/* {
            todos.map((todo)=>{
                return<> */}
                  <Todocomp/>
                {/* </>
            })
        } */}
    </div>
  )
}

export default TodoList;
