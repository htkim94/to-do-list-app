import ToDo from "./ToDo";
import "./ToDoList.css";

export default function ToDoList({ toDoList }) {
  return toDoList.map((toDo) => <ToDo toDo={toDo} />);
}
