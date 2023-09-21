import { useState } from "react";
import Heading from "./Heading";
function Counter() {
  const [count, setCount] = useState(10);
  const [error, setError] = useState("");
  const handleInc = () => {
    setError("");
    setCount((prevCount) => {
      if (prevCount === 20) {
        setError("you have already reached 20");
        return prevCount;
      }
      return (prevCount += 1);
    });
  };
  const handleDesc = () => {
    setError("");
    setCount((prevCount) => {
      if (prevCount === 0) {
        setError("you cant go before 0");
        return prevCount;
      }
      return (prevCount -= 1);
    });
  };
  return (
    <div>
      <Heading heading="Counter Heading" />
      {error ? <p>{error}</p> : ""}
      <h1>Count: {count}</h1>
      <button onClick={handleInc}>Inc</button>
      <button onClick={handleDesc}>desc</button>
    </div>
  );
}

export default Counter;
