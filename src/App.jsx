import "./App.css";
import Navbar from "./Components/Navbar";
import Sidebar from "./Components/Sidebar";
import Footer from "./Components/Footer";

import TaskList from "./pages/TaskList";
import TaskDetail from "./Components/TaskDetail";

import Dashboard from "./pages/Dashboard";
import About from "./pages/About";
import NotFound from "./pages/NotFound";
import { Routes, Route } from "react-router-dom";
import { Link } from "react-router-dom";

function App() {

  return (
    
  <>
      <Navbar />
      <Sidebar />

    <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/tasks" element={<TaskList />} />
        <Route path="/item/:index" element={<TaskDetail />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<NotFound />} />
      </Routes>

      <Footer />
     </>
    
  )
    }

export default App;
