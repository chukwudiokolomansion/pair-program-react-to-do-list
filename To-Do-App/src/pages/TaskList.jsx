{
  /*
    TASK LIST RENDERING*/
}

import tasks from "./task.json";

function TaskList() {
  return (
    <ul style={{ listStyle: "none", padding: 0, margin: 0}}>
      {tasks.map((item, index) => (
        <li key={index}>
          {item.task} {item.completed ? "✔️" : "❌"}
        </li>
      ))}
    </ul>
  );
}

export default TaskList;
