import React from "react";

const TodoForm = (props) => {
  const [input, setInput] = React.useState(props.edit ? props.edit.value : "");
  const inputRef = React.useRef(null);

  React.useEffect(() => {
    inputRef.current.focus();
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    props.onSubmit({
      id: Math.floor(Math.random() * 10000),
      text: input
    });
    setInput("");
  };
  const handleChange = (e) => {
    setInput(e.target.value);
  };
  return (
    <form className="todo-form" onSubmit={handleSubmit}>
      {props.edit ? (
        <>
          <input
            type="text"
            placeholder="Mettre à jour la tache"
            value={input}
            name="text"
            className="todo-input edit"
            onChange={handleChange}
            ref={inputRef}
          />
          <button className="todo-button edit">Mettre à jours</button>
        </>
      ) : (
        <>
          <input
            type="text"
            placeholder="Ajouter une tache"
            value={input}
            name="text"
            className="todo-input"
            onChange={handleChange}
            ref={inputRef}
          />
          <button className="todo-button">Ajouter</button>
        </>
      )}
    </form>
  );
};

export default TodoForm;
