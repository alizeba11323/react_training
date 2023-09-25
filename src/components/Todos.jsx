import { useState } from "react";
import AddTodos from "./AddTodos";
import DisplayTodos from "./DisplayTodos";

function Todos() {
  const [todos, setTodos] = useState([]);

  const AddTodoItem = (todo) => {
    setTodos((prev) => [todo, ...prev]);
  };
  const ChangeTodoStatus = (id) => {
    const newTodos = todos.map((todo) => {
      if (todo.id === id) {
        return {
          ...todo,
          completed: !todo.completed,
        };
      }
      return todo;
    });
    setTodos(newTodos);
  };
  const deleteTodoFunc = (id) => {
    const filterTodo = todos.filter((todo) => todo.id !== id);
    setTodos(filterTodo);
  };
  const HandleClearAllTodoFunc = () => {
    setTodos([]);
  };
  return (
    <div>
      <AddTodos handleAddTodoProps={AddTodoItem} />
      <DisplayTodos
        todos={todos}
        handleTodoStatusChange={ChangeTodoStatus}
        handleTodoDelete={deleteTodoFunc}
        handleClearAllTodo={HandleClearAllTodoFunc}
      />
    </div>
  );
}

export default Todos;
