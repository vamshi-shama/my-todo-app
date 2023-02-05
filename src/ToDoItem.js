import React from "react";

function ToDoItem({ text, isCompleted, onToggle}){
    return (
        <li className={`todo ${isCompleted ? "completed" : ""}`} onClick={onToggle}>
            {text}
        </li>
    );
}

export default ToDoItem;