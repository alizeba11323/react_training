import React, { useState } from "react";

function AddTodos({ handleAddTodoProps }) {
  const [todo, setTodo] = useState({ id: "", title: "", completed: false });
  const handleChange = (e) => {
    setTodo((prev) => ({
      ...prev,
      title: e.target.value,
      id: Math.floor(Math.random() * 1000),
    }));
  };
  // 10.8 10
  // Math.floor
  // Math.ceil 10.8 11
  const handleAddTodo = () => {
    handleAddTodoProps(todo);
    setTodo({id: "", title: "", completed: false});
  };
  return (
    <div>
      <input
        type="text"
        name="title"
        value={todo.title}
        onChange={handleChange}
      />
      <button onClick={handleAddTodo}>Add Todo</button>
    </div>
  );
}

export default AddTodos;
