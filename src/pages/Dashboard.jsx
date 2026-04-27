import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
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

function Dashboard({ tasks, setTasks, addTask }) {
  const handleDelete = (indexToDelete) => {
    setTasks(tasks.filter((_, i) => i !== indexToDelete));
  };

  const [inputValue, setInputValue] = useState("");
  const handleAddTask = (e) => {
    e.preventDefault();
    addTask(inputValue);
    setInputValue("");
  };

  const handleToggleComplete = (indexToToggle) => {
    const updatedTasks = tasks.map((item, index) =>
      index === indexToToggle ? { ...item, completed: !item.completed } : item,
    );
    setTasks(updatedTasks);
  };

  return (
    <>
      <form onSubmit={handleAddTask}>
        <input
          type="text"
          placeholder="Add new task..."
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button type="submit">Add</button>
      </form>

      <div className="container">
        <div className="grid">
          {/*<h2>Dashboard</h2>*/}

          {tasks.map((item, index) => (
            <div
              key={index}
              className="card"
              style={{
                backgroundColor: colors[index % colors.length],
                transform: `rotate(${index % 2 === 0 ? -3 : 3}deg)`,
              }}
            >
              <Link to={`/item/${index}`}>{item.task}</Link>
              <button onClick={() => handleToggleComplete(index)}>
                {item.completed ? "✔️" : "❌"}
              </button>
              <button onClick={() => handleDelete(index)}>Remove</button>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Dashboard;
