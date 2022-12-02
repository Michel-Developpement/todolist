import React from "react";
import TodoList from "../components/TodoList";
import { Link } from "react-router-dom";
import Banner from "../components/Banner";
const TodoView = () => {
  return (
    <>
      <Banner />
      <div className="todo-app">
        <TodoList />
        <Link className="link" to="/">
          Home
        </Link>
      </div>
    </>
  );
};
export default TodoView;
