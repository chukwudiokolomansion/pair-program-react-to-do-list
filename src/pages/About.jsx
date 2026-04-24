import React from "react";
import { Link } from "react-router-dom";

function About() {
  return (
    <div>
      <h2>To do lists</h2>
      <p>A mini project work</p>

      <h3>Chukwudi and Aybike</h3>
      <ul>
        <li>
          Ironhack March-2026 -
          <Link to="https://github.com/chukwudiokolomansion">
            GitHub: Chukwudi
          </Link>
          <Link href="https://github.com/AybikeCV">
            GitHub: Aybike
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default About;
