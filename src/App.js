import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [importance, setImportance] = useState(importanceAttributes[0].level);
  const [toDoList, setToDoList] = useState([]);
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <ToDoComponent
          title={title}
          setTitle={setTitle}
          description={description}
          setDescription={setDescription}
          importance={importance}
          setImportance={setImportance}
          toDoList={toDoList}
          setToDoList={setToDoList}
        />
      </header>
    </div>
  );
}

const importanceAttributes = [
  {
    level: "Low",
    color: "yellow",
  },
  {
    level: "Medium",
    color: "orange",
  },
  {
    level: "High",
    color: "red",
  },
  {
    level: "Critcal",
    color: "purple",
  },
];

const ToDo = (props) => {
  return (
    <li style={{ color: props.color }}>
      <h2>{props.title}</h2>
      <p>{props.description}</p>
      <h3>{props.importance}</h3>
      <hr />
    </li>
  );
};

const ImportanceLevelSelector = (props) => {
  return <option value={props.level}>{props.level}</option>;
};

const ToDoComponent = (props) => {
  return (
    <div>
      <label>Title: </label>
      <input
        type="text"
        value={props.title}
        onChange={(e) => {
          const newTitle = e.target.value;
          props.setTitle(newTitle);
        }}
      ></input>
      <br></br>
      <label>Description: </label>
      <input
        type="text"
        value={props.description}
        onChange={(e) => {
          const newDescription = e.target.value;
          props.setDescription(newDescription);
        }}
      ></input>
      <br></br>
      <label>Priority: </label>
      <select
        value={props.importance}
        onChange={(e) => {
          const newImportance = e.target.value;
          props.setImportance(newImportance);
        }}
      >
        {importanceAttributes.map((element, index) => {
          return (
            <ImportanceLevelSelector
              key={index}
              level={element.level}
            ></ImportanceLevelSelector>
          );
        })}
      </select>
      <br></br>
      <button
        id="submit"
        onClick={
          ("click",
          () => {
            const updatedToDoList = [...props.toDoList];
            updatedToDoList.push({
              title: props.title,
              description: props.description,
              importance: props.importance,
            });
            props.setToDoList(updatedToDoList);
            props.setTitle("");
            props.setDescription("");
            props.setImportance(importanceAttributes[0].level);
          })
        }
      >
        Submit
      </button>
      <hr />
      <h1>To Do List:</h1>
      <ul>
        {props.toDoList.map((todo, index) => {
          const importanceColor = importanceAttributes.find((option) => {
            return option.level === todo.importance;
          }).color;
          return (
            <ToDo
              title={todo.title}
              description={todo.description}
              importance={todo.importance}
              color={importanceColor}
              key={index}
            ></ToDo>
          );
        })}
      </ul>
    </div>
  );
};

export default App;
