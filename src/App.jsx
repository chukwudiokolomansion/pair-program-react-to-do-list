import "./App.css";
import Navbar from "./Components/Navbar";
import Sidebar from "./Components/Sidebar";
import Footer from "./Components/Footer";

import TaskList from "./pages/TaskList";
import TaskDetail from "./Components/TaskDetail";
import tasksData from "./Components/task.json";

import Dashboard from "./pages/Dashboard";
import About from "./pages/About";
import NotFound from "./pages/NotFound";
import { Routes, Route } from "react-router-dom";
import { Link } from "react-router-dom";
import { useState } from "react";

function App() {
  const [tasks, setTasks] = useState(tasksData);

  const addTask = (taskText) => {
    const newTask = { task: taskText, completed: false };
    setTasks([...tasks, newTask]);
  };

  return (
    <>
      <Navbar />

      <div className="layout">
        <div className="main-content">
          <Routes>
            <Route
              path="/"
              element={
                <Dashboard
                  tasks={tasks}
                  setTasks={setTasks}
                  addTask={addTask}
                />
              }
            />
            <Route
              path="/tasks"
              element={<TaskList tasks={tasks} setTasks={setTasks} />}
            />
            <Route path="/item/:index" element={<TaskDetail tasks={tasks} />} />
            <Route path="/about" element={<About />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>

        <Sidebar />
      </div>

      <Footer />
    </>
  );
}

export default App;
