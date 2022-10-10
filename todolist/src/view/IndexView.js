import React from "react";
import { Link } from "react-router-dom";
const IndexView = () => {
  return (
    <div className="todo-app">
      <h1>Bienvenu sur notre todo liste !</h1>
      <Link className="link" to="/todo">
        Todo liste
      </Link>
    </div>
  );
};
export default IndexView;
