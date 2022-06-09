import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <ToDoComponent />
      </header>
    </div>
  );
}

const ToDoComponent = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const importanceArr = ["Low", "Medium", "High"];
  const [importance, setImportance] = useState(importanceArr[0]);
  const [toDoList, setToDoList] = useState([]);

  return (
    <div>
      <label>Title: </label>
      <input
        type="text"
        value={title}
        onChange={(e) => {
          const newTitle = e.target.value;
          setTitle(newTitle);
        }}
      ></input>
      <br></br>
      <label>Description: </label>
      <input
        type="text"
        value={description}
        onChange={(e) => {
          const newDescription = e.target.value;
          setDescription(newDescription);
        }}
      ></input>
      <br></br>
      <label>Priority: </label>
      <select
        value={importance}
        onChange={(e) => {
          const newImportance = e.target.value;
          console.log("anything");
          console.log(newImportance);
          setImportance(newImportance);
        }}
      >
        {importanceArr.map((element, index) => {
          return (
            <option key={`priority-${index}`} value={element}>
              {element}
            </option>
          );
        })}
      </select>
      <br></br>
      <button
        id="submit"
        onClick={
          ("click",
          () => {
            const updatedToDoList = [...toDoList];
            updatedToDoList.push({
              title: title,
              description: description,
              importance: importance,
            });
            setToDoList(updatedToDoList);
            setTitle("");
            setDescription("");
            setImportance(importanceArr[0]);
          })
        }
      >
        Submit
      </button>
      <hr />
      <ul>
        {toDoList.map((element, index) => {
          return (
            <li key={`item-${index}`}>
              <h2>{element.title}</h2>
              <p>{element.description}</p>
              <h3>{element.importance}</h3>
              <hr />
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default App;
