import React, {useState} from "react";
import {Link, NavLink} from "react-router-dom";

const DropdownMenu = () => {
  return (
    <ul className="dropdown-menu">
      <li>
        <NavLink to="/About">About Us</NavLink>
      </li>
      <li>
        <NavLink to="/Work">How We Work?</NavLink>
      </li>
      <li>
        <NavLink to="/Contact">Contact Us</NavLink>
      </li>
    </ul>
  );
};

export default DropdownMenu;
