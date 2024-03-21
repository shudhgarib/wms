import React, {useState} from "react";
import {Link, NavLink} from "react-router-dom";
import "./Navbar.css";
import "bootstrap/dist/css/bootstrap.min.css";
import DropdownMenu from "./Pages/DropdownMenu";
export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <nav>
      <img
        src="//biharipoojapath.com/assets/images/sun.webp"
        className="logo"></img>
      <Link to="/" className="title">
        <span className="heading_title">श्री छठ पूजा समिति !</span>
      </Link>
      <div
        className="menu"
        onClick={() => {
          setMenuOpen(!menuOpen);
        }}>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <ul className={menuOpen ? "open" : ""}>
        <li>
          <NavLink to="/Donate">Donate</NavLink>
        </li>
        <li>
          <NavLink to="/Reserve">Book Place</NavLink>
        </li>
        <li>
          <NavLink to="/View_List">View List</NavLink>
        </li>
        <li>
          <NavLink to="/Gallery">Gallery</NavLink>
        </li>
        <DropdownMenu />
      </ul>
    </nav>
  );
};
