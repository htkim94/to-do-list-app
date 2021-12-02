import './App.css';
import { useEffect, useState } from 'react';
import ToDoForm from './components/ToDoForm';
import ToDoList from './components/ToDoList';

function App() {
  const [toDoList, setToDoList] = useState([]);
  useEffect(() => {
    console.log(toDoList);
  }, [toDoList])
  return (
    <div className="App">
      <h1 className="title">What's the Plan for Today?</h1>
      <ToDoForm setToDoList={setToDoList} />
      <ToDoList toDoList={toDoList} />
    </div>
  );
}

export default App;