import React from "react";
const Btn = function (props) {
  let number = Number(props.number);
  let temp = 0;
  let val = () => {
    temp = number + 5;
    alert(temp);
    return temp;
  };
  return <button onMouseLeave={val}>Increment {temp}</button>;
};
export default Btn;
