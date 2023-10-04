import { useState, useEffect } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
function BookCab() {
  const [details, setDetails] = useState([
    { name: "", email: "", cost_center: "IT", new_cost_center: "" },
  ]);
  const [Options, setOptions] = useState([]);
  useEffect(() => {
    const getOptions = async () => {
      try {
        const res = await fetch(
          "https://sheetdb.io/api/v1/q9f2kcnhvdbag?sheet=Sheet2"
        );
        const resData = await res.json();
        console.log(resData);
        setOptions(resData);
      } catch (err) {
        console.log(err);
      }
    };
    getOptions();
  }, []);
  const [noOfPass, setNoofPass] = useState(1);
  const handleChange = (e) => {
    setDetails([]);
    setNoofPass(e.target.value);
    Array.from({ length: +e.target.value }).map(() => {
      setDetails((prev) => [
        ...prev,
        { name: "", email: "", cost_center: "IT", new_cost_center: "" },
      ]);
    });
  };
  const handleFormChange = (e, idx) => {
    const newDetails = [...details];
    newDetails[idx][e.target.name] = e.target.value;
    setDetails(newDetails);
  };
  const handleSubmit = async () => {
    try {
      const res = await fetch("https://sheetdb.io/api/v1/q9f2kcnhvdbag", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          data: details.map((det) => ({
            ID: "INCREMENT",
            Name: det.name,
            Email: det.email,
            Cost_Center: det.cost_center,
          })),
        }),
      });

      const resdata = await res.json();
      console.log(resdata);
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <>
      <select value={noOfPass} onChange={handleChange}>
        <option value={1}>1</option>
        <option value={2}>2</option>
        <option value={3}>3</option>
        <option value={4}>4</option>
      </select>
      {Array.from({ length: +noOfPass }).map((val, idx) => (
        <div>
          <input
            type="text"
            placeholder="Name"
            name="name"
            value={details[idx].name}
            onChange={(e) => handleFormChange(e, idx)}
          />
          <input
            type="email"
            placeholder="Email"
            name="email"
            value={details[idx].email}
            onChange={(e) => handleFormChange(e, idx)}
          />
          <select
            name="cost_center"
            value={details[idx].cost_center}
            onChange={(e) => handleFormChange(e, idx)}
          >
            {Options?.map((op) => (
              <option value={op.cost_center} key={op.ID}>
                {op.cost_center}
              </option>
            ))}
          </select>
          <select
            name="new_cost_center"
            value={details[idx].new_cost_center}
            onChange={(e) => handleFormChange(e, idx)}
          >
            {Options?.map((op) => (
              <option
                value={op.cost_center}
                key={op.ID}
                disabled={details[idx].cost_center === op.cost_center}
              >
                {op.cost_center}
              </option>
            ))}
          </select>
        </div>
      ))}
      <button onClick={handleSubmit}>Submit</button>
    </>
  );
}
export default BookCab;
