import React from "react";
// import TodoForm from "../TodoForm/index";
import TodoList from "../TodoList/index";
// import "./style.css";

function TodoApp() {
  return (
    <div className="todo-app">
      <h1>To Do List</h1>
      <TodoList />
    </div>
  )
}

export default TodoApp;