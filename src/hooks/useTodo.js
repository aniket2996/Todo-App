import { useContext } from "react";
import TodoContext from "../contexts/TodoContext/TodoContext";

function useTodo() {
  const {    
    todos,
    setTodos,
    addTodo,
    updateTodo,
    deleteTodo,
    toggleComplete } = useContext(TodoContext);

  return {
    todos,
    setTodos,
    addTodo,
    updateTodo,
    deleteTodo,
    toggleComplete
  };
}

export default useTodo;