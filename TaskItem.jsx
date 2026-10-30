export default function TaskItem({ task, toggle, remove }) {
  return (
    <li>
      <span onClick={() => toggle(task.id)}
        style={{ textDecoration: task.done ? "line-through" : "none" }}>
        {task.text}
      </span>
      <button onClick={() => remove(task.id)}>Delete</button>
    </li>
  );
}