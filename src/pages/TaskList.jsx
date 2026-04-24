{
  /*
    TASK LIST RENDERING*/
}

import tasksData from "./task.json";
import { useState } from "react";
import { useSearchParams } from "react-router-dom";

function TaskList() {

  const [tasks, setTasks] = useState(tasksData);

  const[searchParams, setSearchParams] = useSearchParams();
  const search = searchParams.get("search") || "" ;
  
  const handleDelete = (indexToDelete) => {
    const updatedTasks = tasks.filter((_, index) => index !== indexToDelete);
    setTasks(updatedTasks);
  };

  const filteredTasks = tasks.filter((item) => {
    return item.task.includes(search);
  })
  //setTasks(filteredTasks);

  

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


export default TaskList;
