import React from "react";
const Heading = function (props) {
  let heading = `Welcome ${props.name}`;
  return <h1>{heading}</h1>;
};
export default Heading;
