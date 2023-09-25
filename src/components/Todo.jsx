import React from "react";

function Todo({ todo, handleTodoStatusChange, handleTodoDelete }) {
  const handleChange = (id) => {
    handleTodoStatusChange(id);
  };
  const handleDelete = (id) => {
    handleTodoDelete(id);
  };
  return (
    <div
      style={{
        display: "flex",
        width: "400px",
        padding: "10px",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <input
        type="checkbox"
        name="completed"
        checked={todo.completed}
        onChange={() => handleChange(todo.id)}
      />
      <p style={{ textDecoration: todo.completed ? "line-through" : "" }}>
        {todo.title}
      </p>
      <button onClick={() => handleDelete(todo.id)}>Delete</button>
    </div>
  );
}

export default Todo;
