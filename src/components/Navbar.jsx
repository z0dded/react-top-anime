import React from "react";
import { NavLink } from "react-router-dom";
import "../assets/css/Navbar.css";

export const Navbar = () => {
  return (
    <div className="Navbar">
      <div className="Logo">
        <NavLink to={"/"}>
          <span className="BlueLetters">T</span>he
          <span className="BlueLetters">A</span>nime
          <span className="BlueLetters">T</span>racker
        </NavLink>
      </div>
      <ul>
        <li>
          <NavLink to={"/completed"}>Completed</NavLink>
        </li>
        <li>
          <NavLink to={"/watching"}>Watching</NavLink>
        </li>
        <li>
          <NavLink to={"/plan-to-watch"}>Plan to Watch</NavLink>
        </li>
      </ul>
    </div>
  );
};
