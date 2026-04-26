import React from "react";
import { Routes, Route } from "react-router-dom";
import { Link } from "react-router-dom";

function Sidebar() {
  const today = new Date().toLocaleDateString();

  return (
    <aside style={styles.sidebar}>
      <div>
        <h3>Menu</h3>

        <Link to="/">🏠Dashboard</Link>
        <br />
        <Link to="/about">ℹ️ About</Link>
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
    width: 250,
    minHeight: "100vh",
    background: "#f4f4f4",
    padding: 15,
    borderLeft: "1px solid #ccc",
  },
  section: {
    marginTop: "20px",
  },
  list: {
    listStyle: "none",
    padding: 0,
  },
};
