import React from "react";
import { Routes, Route } from "react-router-dom";
import { Link } from "react-router-dom";

function Sidebar() {
  const today = new Date().toLocaleDateString();

  return (
    <aside style={styles.sidebar}>
      <div>
        <h3 style={styles.text}>Menu</h3>

        <Link style={styles.link} to="/">
          <div>
            🏠
            <br />
            Dashboard
          </div>
        </Link>
        <br />
        <Link style={styles.link} to="/about">
        
         ℹ️ 
         <br />
          About 
        </Link>
      </div>

      <div style={styles.section}>
        <h3 style={styles.text}>Calendar</h3>
        <p style={styles.text}>Today: {today}</p>
      </div>

      <div style={styles.section}>
        <h3 style={styles.text}>Tasks</h3>
        <ul style={styles.list}>
          <li style={styles.text}>📌Today</li>
          <li style={styles.text}>📆Weekly</li>
          <li style={styles.text}>🗓Monthly</li>
        </ul>
      </div>
    </aside>
  );
}

export default Sidebar;

const styles = {
  sidebar: {
    width: "150px",
    height: "150px",
    minHeight: "100vh",
    background: "rgba(222, 84, 98, 0.97)",
    padding: 35,
    borderLeft: "1px solid #ccc",
    textAlign: "right",
  },
  section: {
    marginTop: "20px",
  },
  list: {
    listStyle: "none",
    padding: 0,
  },
  text: {
    textAlign: "right",
    fontSize: "20px",
    fontFamily: "courier",
    textShadow: "2px 2px 4px rgba(0, 0, 0, 0.3)",
  },
  link: {
    display: "block",
    textAlign: "right",
    textDecoration: "none",
    marginBottom: "5px",
    textSize: "16px",
    color: " #32ff08",
    textShadow: "2px 2px 4px rgba(0, 0, 0, 0.3)",
  },
};
