import { useState } from "react";
import TaskItem from "./TaskItem";
import "./App.css";

export default function App() {
  const [text, setText] = useState("");
  const [tasks, setTasks] = useState([]);

  const addTask = () => {
    if (!text.trim()) return;
    setTasks([...tasks, { id: Date.now(), text: text.trim(), done: false }]);
    setText("");
  };

  const toggle = id =>
    setTasks(tasks.map(t => t.id === id ? { ...t, done: !t.done } : t));

  const remove = id =>
    setTasks(tasks.filter(t => t.id !== id));

  return (
    <div className="container">
      <h2>To-Do List</h2>
      <input value={text} onChange={e => setText(e.target.value)}
        placeholder="Enter task" />
      <button onClick={addTask}>Add</button>

      <p>{tasks.filter(t => t.done).length} of {tasks.length} tasks done</p>

      {tasks.length === 0 ? <p>No tasks yet. Add one!</p> :
        <ul>{tasks.map(t =>
          <TaskItem key={t.id} task={t} toggle={toggle} remove={remove} />
        )}</ul>}
    </div>
  );
}