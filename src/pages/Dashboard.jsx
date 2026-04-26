import React from "react";
import { Link } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import tasks from "./task.json";
import "../App.css";

const colors = [
  "#ff6b6b",
  "#cdeac0",
  "#ff8787",
  "#4ecdc4",
  "#48bfe3",
  "#cdb4db",
  "#ffb347",
  "#fb0404",
  "#ffd166",
  "#ffafcc",
  "#90dbf4",
  "#ff8c61",
];

function Dashboard() {
  return (
    <div className="container">
      <div className="grid">
        {/*<h2>Dashboard</h2>*/}

        {tasks.map((item, index) => (
          <div 
            key={index}
            className="card"
            style={{
              backgroundColor: colors[index % colors.length],
              transform: `rotate(${(index % 2 === 0 ? -3 : 3)}deg)`,
            }}
          >  
          <Link to={`/item/${index}`}>{item.task}</Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Dashboard;
