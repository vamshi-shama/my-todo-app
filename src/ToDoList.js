import React, { useState } from "react";
import ToDoItem from "./ToDoItem";


function ToDoList() {
  const [todos, setTodos] = useState([

  ]);

  const [newTodo, setNewTodo] = useState("");

  function handleToggle(index) {
    setTodos(
      todos.map((todo, i) => {
        if (i === index) {
          return {
            ...todo,
            isCompleted: !todo.isCompleted,
          };
        }
        return todo;
      })
    );
  }

  return (
    <div className="app">
      <div className="header">
        <h1>To-Do List</h1>
      </div>
      <ul className="todos">
        {todos.map((todo, index) => (
          <ToDoItem
            key={index}
            text={todo.text}
            isCompleted={todo.isCompleted}
            onToggle={() => handleToggle(index)}
          />
        ))}
      </ul>
      <div className="form">
        <input type="text"
                value={newTodo}
                onChange={(e) => setNewTodo(e.target.value)}                    
        />
        <button onClick={() => {
        setTodos([...todos, { text: newTodo, isCompleted: false }]);
        setNewTodo("");
        }}
        >
            Add To-Do</button>
      </div>
    </div>
  );
}



export default ToDoList;
