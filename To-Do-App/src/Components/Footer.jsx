import React from "react"
import { Link } from "react-router-dom";
import { Routes, Route } from "react-router-dom";

function Footer() {


    return(
<footer style={styles.footer}>
      <p>
        © {new Date().getFullYear()} ToDoToCheck |{" "}
        <a
          href="https://github.com/chukwudiokolomansion/pair-program-react-to-do-list"
          target="_blank"
          rel="noopener noreferrer"
        >
          View on GitHub
        </a>
      </p>
    </footer>
    )
}

export default Footer

const styles = {
  footer: {
    marginTop: "auto",
    padding: "15px",
    textAlign: "center",
    background: "#333",
    color: "white",
  },
};

