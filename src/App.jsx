import { useState } from "react";
import Counter from "./components/Counter";
import Login from "./components/Login";
function App() {
  const [isLoggedIn, setLoggedIn] = useState(false);
  const handleLogin = () => {
    setLoggedIn((prev) => !prev);
  };
  return (
    <div>
      <div>{isLoggedIn ? <Counter /> : <Login />}</div>
      <button onClick={handleLogin}>{isLoggedIn ? "Logout" : "Login"}</button>
    </div>
  );
}
export default App;
