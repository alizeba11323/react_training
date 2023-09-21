import React from "react";

function Body(props) {
  return (
    <div>
      <h1>hello</h1>
      <h1>{props.data.address.city}</h1>
    </div>
  );
}

export default Body;
