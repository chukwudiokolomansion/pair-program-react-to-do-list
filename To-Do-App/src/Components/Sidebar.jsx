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
            <span>ℹ️ About</span>
            <div style={styles.dropdown}>
              <Link to="https://github.com/chukwudiokolomansion">GitHub: Chukwudi</Link>

              <Link to="https://github.com/AybikeCV">GitHub: Aybike</Link>
            </div>
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

  dropdown: {
    display: "none",
    position: "absolute",
    left: "0",
    top: "25px",
    background: "white",
    padding: "10px",
    border: "1px solid #ccc",
    borderRadius: "5px",
  },
};
