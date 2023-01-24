import React from "react";
import { NavLink } from "react-router-dom";
import "../assets/css/Navbar.css";

export const Navbar = () => {
  return (
    <div className="Navbar">
      <ul>
        <li>
          <NavLink to={"/"}>Home</NavLink>
        </li>
      </ul>
    </div>
  );
};
