{
  /*
    TASK LIST RENDERING*/
}

import tasks from "./task.json";
import { Routes, Route } from "react-router-dom";
import { Link } from "react-router-dom";

function TaskList() {
{
  const [tasks, setTasks] = useState(tasksData);

  const handleDelete = (indexToDelete) => {
    const updatedTasks = tasks.filter((_, index) => index !== indexToDelete);
    setTasks(updatedTasks);
  };

  return (
    <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
      {tasks.map((item, index) => (
        <li
          key={index}
          style={{
            display: "flex",
            justifyContent: "space-between",
            marginBottom: "8px"
          }}
        >
          <span>
            {item.task} {item.completed ? "✔️" : "❌"}
          </span>

          <button onClick={() => handleDelete(index)}>
            Remove
          </button>
        </li>
      ))}
    </ul>
  );
}
}

export default TaskList;
