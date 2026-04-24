import { useParams } from "react-router-dom";
import tasksData from "./task.json";

function TaskDetail() {
  const { index } = useParams();

  const task = tasksData[ index ];

  return (
    <div>
      <h2>Task Detail</h2>
      <p>{task?.task}</p>
      <p>{task?.completed ? "Completed ✔️" : "Not completed ❌"}</p>
    </div>
  );
}

export default TaskDetail;