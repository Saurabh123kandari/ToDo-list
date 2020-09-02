import React from "react";
import App from "./App";

const Todo = (props) => {
  return (
    <div className="todostyle">
      <i
        className="fa fa-times"
        onClick={() => {
          return props.onSelect(props.id);
        }}
        aria-hidden="true"
      />
      <li>{props.text}</li>
    </div>
  );
};

export default Todo;
