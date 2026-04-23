import React from "react";
import { Routes, Route } from "react-router-dom";
import { Link } from "react-router-dom";

function Sidebar() {
  const today = new Date().toLocaleDateString();

  return (
    <aside style={styles.sidebar}>
      <div>
        <h3>Menu</h3>
        <ul style={styles.list}>
          <Link to="/"><li>🏠 Home</li></Link>
          <li style={{ position: "relative" }}>
            <Link to="/about">"<span>ℹ️ About</span></Link>
          </li>
        </ul>
      </div>

      <div style={styles.section}>
        <h3>📅 Calendar</h3>
        <p>Today: {today}</p>
      </div>

      <div style={styles.section}>
        <h3>Tasks</h3>
        <ul style={styles.list}>
          <li>📌 Today</li>
          <li>📆 Weekly</li>
          <li>🗓 Monthly</li>
        </ul>
      </div>
    </aside>
  );
}

export default Sidebar;

const styles = {
  sidebar: {
    width: "220px",
    minHeight: "100vh",
    background: "#f4f4f4",
    padding: "15px",
    borderRight: "1px solid #ccc",
  },
  section: {
    marginTop: "20px",
  },
  list: {
    listStyle: "none",
    padding: 0,
  },

 
};
