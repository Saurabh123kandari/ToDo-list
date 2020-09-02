import React, { useState } from "react";
import "./App.css";
import Todo from "./Todo";
import Button from "@material-ui/core/Button";
import AddIcon from "@material-ui/icons/Add";

function App() {
  let [inputList, SetinputList] = useState();
  let [items, setItems] = useState([]);
  const itemEvent = (event) => {
    SetinputList(event.target.value);
  };

  const listofItem = (event) => {
    setItems((olditems) => {
      return [...olditems, inputList];
    });
    SetinputList("");
  };
  const delete_Item = (id) => {
    console.log("deleted");

    setItems((olditems) => {
      return olditems.filter((arritem, index) => {
        return index !== id;
      });
    });
  };
  return (
    <div className="main_div">
      <div className="center_div">
        <br />
        <h1>To do list </h1>
        <br />
        <input
          type="text"
          onChange={itemEvent}
          value={inputList}
          placeholder="add an item "
        />
        <Button class="newBtn" onClick={listofItem} type="submit">
          <AddIcon />
        </Button>
        <br />
        <ol>
          {items.map((itemvalue, index) => {
            return (
              <Todo
                key={index}
                id={index}
                onSelect={delete_Item}
                text={itemvalue}
              />
            );
          })}
        </ol>
      </div>
    </div>
  );
}

export default App;
