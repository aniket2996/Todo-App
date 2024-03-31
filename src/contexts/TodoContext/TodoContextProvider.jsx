import React, { useState } from "react"
import TodoContext from "./TodoContext"

const TodoContextProvider = ({children}) =>{
    const [todos, setTodos] = useState([]);

    const addTodo = (todo) => {
      setTodos((prev) => [{ id: Date.now(), ...todo }, ...prev]);
    };
  
    const updateTodo = (id, todo) => {
      setTodos((prev) =>
        prev.map((prevTodo) => (prevTodo.id === id ? todo : prevTodo))
      );
    };
  
    const deleteTodo = (id) => {
      setTodos((prev) => prev.filter((todo) => todo.id !== id));
    };
  
    const toggleComplete = (id) => {
      //console.log(id);
      setTodos((prev) =>
        prev.map((prevTodo) =>
          prevTodo.id === id
            ? { ...prevTodo, completed: !prevTodo.completed }
            : prevTodo
        )
      );
    };
  
    return <TodoContext.Provider value={{
        todos,
        setTodos,
        addTodo,
        updateTodo,
        deleteTodo,
        toggleComplete
    }}>
        {children}
    </TodoContext.Provider>
}

export default TodoContextProvider