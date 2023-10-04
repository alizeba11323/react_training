// import { useState } from "react";
// import Counter from "./components/Counter";
// import Login from "./components/Login";
import BookCab from "./components/BookCab";
import Contact from "./components/Contact";
import Todos from "./components/Todos";
function App() {
  // const [isLoggedIn, setLoggedIn] = useState(false);
  // const handleLogin = () => {
  //   setLoggedIn((prev) => !prev);
  // };
  return (
    <div>
      {/* <div>{isLoggedIn ? <Counter /> : <Login />}</div>
      <button onClick={handleLogin}>{isLoggedIn ? "Logout" : "Login"}</button> */}
      {/* <Todos /> */}
      {/* <Contact /> */}
      <BookCab />
    </div>
  );
}
export default App;
