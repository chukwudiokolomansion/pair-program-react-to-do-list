import "./App.css";
import Navbar from "./Components/Navbar";
import Sidebar from "./Components/Sidebar";
import Footer from "./Components/Footer";
import TaskList from "./Components/TaskList";

function App() {
  return (
    <>
      <Navbar />
      <Sidebar />

      <TaskList />

      <Footer />
    </>
  );
}

export default App;
