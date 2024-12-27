import { useState } from "react";
import TodoCard from "./todoCard";

const ArrayState = () => {
  const [todos, setTodos] = useState([
    {
      id: 1,
      title: "Complete Assignment",
      completed: false,
    },
    {
      id: 2,
      title: "Host the application",
      completed: false,
    },
    {
      id: 3,
      title: "Attend classes",
      completed: false,
    },
  ]);
  const onComplited = (id) => {
    console.log(id);
    const indexToUpdate = todos.findIndex((todo) => todo.id === id);
    const newObject = {
      ...todos[indexToUpdate],
      completed: true,
    };
    const todosCopy = [...todos];
    todosCopy.splice(indexToUpdate, 1, newObject);
    setTodos(todosCopy);
  };    

  return (
    <div>
      <h2>Array with use State</h2>
      {
        todos.map((todo)=> <TodoCard key={todo.id} {...todo} onComplited = {onComplited}/>)
      }
    </div>
  );
};

export default ArrayState;
