import { useState } from "react";
import { useSearchParams } from "react-router-dom";

import { useNavigate } from "react-router-dom";
function Navbar() {
  const today = new Date().toLocaleDateString();

  const [searchParams, setSearchParams] = useSearchParams();
  const [search, setSearch] = useState("");

  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();

    if (search.trim()) {
      navigate(`/tasks?search=${search}`);
    } else {
      navigate("/tasks");
    }
  };
  const [showUserMenu, setShowUserMenu] = useState(false);

  return (
    <>
      <nav style={styles.nav}>
        <div style={styles.left}>
          <span style={styles.logo}>✅📋</span>
          <h2>My To Do</h2>
          <span>Task Manager</span>
        </div>

        <span>📅 {today}</span>

        <div style={styles.right}>
          <form onSubmit={handleSearch}>
            <input
              type="text"
              placeholder="Search..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </form>

          <div
            style={styles.user}
            onMouseEnter={() => setShowUserMenu(true)}
            onMouseLeave={() => setShowUserMenu(false)}
          >
            <button>Username</button>

            {showUserMenu && (
              <div style={styles.dropdown}>
                <p>Logout</p>
                <p>Privacy</p>
              </div>
            )}
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;

const styles = {
  nav: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "10px",
    background: "#333",
    color: "white",
  },
  left: {
    display: "flex",
    alignItems: "center",
    gap: "10px",
  },
  right: {
    display: "flex",
    gap: "10px",
    alignItems: "center",
  },
  user: {
    position: "relative",
  },
  dropdown: {
    position: "absolute",
    top: "30px",
    right: "0",
    background: "white",
    color: "black",
    padding: "10px",
    borderRadius: "5px",
  },
};
