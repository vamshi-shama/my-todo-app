import React, { useState } from "react";

function ToDoList() {
  const [todos, setTodos] = useState([
    { text: "Learn React", isCompleted: false },
  ]);

  return (
    <div className="app">
      <div className="header">
        <h1>To-Do List</h1>
      </div>
      <ul className="todos">
        {todos.map((todo, index) => (
          <li key={index}>{todo.text}</li>
        ))}
      </ul>
      <div className="form">
        <input type="text" />
        <button>Add To-Do</button>
      </div>
    </div>
  );
}

export default ToDoList;
