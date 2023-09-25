import React from "react";
import Todo from "./Todo";

function DisplayTodos({
  todos,
  handleTodoStatusChange,
  handleTodoDelete,
  handleClearAllTodo,
}) {
  const handleClearAll = () => {
    handleClearAllTodo();
  };
  return (
    <div>
      {todos?.map((todo) => (
        <Todo
          key={todo.id}
          todo={todo}
          handleTodoStatusChange={handleTodoStatusChange}
          handleTodoDelete={handleTodoDelete}
        />
      ))}
      {todos?.length > 0 && <button onClick={handleClearAll}>Clear All</button>}
    </div>
  );
}

export default DisplayTodos;
