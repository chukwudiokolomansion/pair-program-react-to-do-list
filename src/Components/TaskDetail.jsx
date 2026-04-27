import { useParams } from "react-router-dom";

function TaskDetail({ tasks }) {
  const { index } = useParams();

  const task = tasks[index];
  if (!task) return <p>Task not found</p>;

  return (
    <div>
      <h2>Task Detail</h2>
      <p>{task?.task}</p>
      <p>{task?.completed ? "Completed ✔️" : "Not completed ❌"}</p>
    </div>
  );
}

export default TaskDetail;
