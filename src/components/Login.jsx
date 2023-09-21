import React, { useState } from "react";
function Login() {
  const [data, setData] = useState({
    name: "zeba",
    age: "",
    address: { city: "", state: "" },
  });
  const [todos, setTodos] = useState([]);
  const [title, setTitle] = useState("");
  const handleData = () => {
    setData((prev) => ({
      ...prev,
      address: { ...prev.address, city: "Delhi" },
    }));
  };
  console.log(data);
  const handleChange = (e) => {
    setTitle(e.target.value);
  };
  const handleTodo = () => {
    setTodos((prev) => [title, ...prev]);
    setTitle("");
  };
  console.log(todos);
  return (
    <>
      {/* <Heading heading="Login Heading!!" />
      <Body data={data} /> */}
      <input type="text" name="title" value={title} onChange={handleChange} />
      <button onClick={handleTodo}>Add Todo</button>
      <div className="todos">
        {todos?.map((todo,idx) => (
          <div key={idx}>
            <p>{todo}</p>
          </div>
        ))}
      </div>
    </>
  );
}

export default Login;
