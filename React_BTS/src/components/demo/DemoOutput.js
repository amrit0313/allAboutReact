import React from "react";

const Demo = (props) => {
  console.log("demo output");
  return <p>{props.show ? "this is a new paragraphh" : ""}</p>;
};

export default React.memo(Demo);
