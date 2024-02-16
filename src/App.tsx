import React,{useState} from "react"
import InputComp from "./components/InputComp"
import { Todo } from "./utils/Models";
import TodoList from "./components/TodoList";

const App:React.FC = () => {

  const [todo,setTodo]=useState<string>("");
  const [todos,setTodos]=useState<Todo[]>([]);

  const handleSubmit=(e: React.FormEvent)=>{
      e.preventDefault();
      if(todo){
         setTodos((prev)=>[...prev,{id:Date.now(),todo:todo,isCompleted:false}]);
         setTodo("");
      }
     
  }
  
  return (
    <div className="py-8 relative flex flex-col items-center h-[100vh] w-[100vw] bg-gray-800">
      <InputComp todo={todo} setTodo={setTodo} handleSubmit={handleSubmit}/>
      <TodoList todos={todos} setTodos={setTodos}/>
    </div>
  )
}

export default App
