import React from "react";
import { Link } from "react-router-dom";
import tasks from "./task.json";

function Dashboard() {
  return (
    <div>
      <h2>Dashboard</h2>

      {tasks.map((item, index) => (
        <div key={index}>
          <Link to={`/item/${item.id}`}>
            {item.tasks}
          </Link>
        </div>
      ))}
    </div>
  );
}

export default Dashboard;