import { useState } from "react";
import "./ToDoForm.css";

export default function ToDoForm({ setToDoList }) {
  const [input, setInput] = useState("");

  //generate unique id
  const generateUid = () => {
    return Math.floor((1 + Math.random()) * 0x10000)
      .toString(16)
      .substring(1);
  };

  //handle form input value
  const onInputChange = (e) => {
    setInput(e.target.value);
  };

  //handle submit and add new todo to list state
  const onTodoSubmit = (e) => {
    e.preventDefault();
    const id = generateUid();
    const newToDo = {
      id,
      description: input,
      complete: false,
    };
    setToDoList((prev) => [...prev, newToDo]);
    setInput("");
  };

  return (
    <form className="todo-form">
      <input
        className="todo-input"
        type="text"
        placeholder="Add a todo"
        value={input}
        onChange={onInputChange}
        onKeyPress={(e) => (e.key === "Enter" ? onTodoSubmit(e) : null)}
      ></input>
      <button className="todo-button">Add</button>
    </form>
  );
}
