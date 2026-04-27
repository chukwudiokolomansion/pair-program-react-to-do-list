{
  /*
    TASK LIST RENDERING*/
}

import tasksData from "./task.json";
import { useState } from "react";
import { useSearchParams } from "react-router-dom";

function TaskList({ tasks, setTasks }) {
  const handleDelete = (indexToDelete) => {
    const updatedTasks = tasks.filter((_, index) => index !== indexToDelete);
    setTasks(updatedTasks);
  };

  const [searchParams] = useSearchParams()
  const search = searchParams.get("search" || "")
  const filteredTasks = tasks.filter((item) => item.task.includes(search))

  return (
    <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
      {tasks.map((item, index) => (
        <li
          key={index}
          style={{
            display: "flex",
            justifyContent: "space-between",
            marginBottom: "8px",
          }}
        >
          <span>
            {item.task} {item.completed ? "✔️" : "❌"}
          </span>

          <button onClick={() => handleDelete(index)}>Remove</button>
        </li>
      ))}
    </ul>
  );
}

export default TaskList;
