import React, {useState} from "react";
import {Link, NavLink} from "react-router-dom";
import Dropdown from "./Dropdown";
import "./Navbar.css";
import "bootstrap/dist/css/bootstrap.min.css";

export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false); // State for the dropdown

  return (
    <nav>
      <img
        src="//biharipoojapath.com/assets/images/sun.webp"
        className="logo"
        alt="Logo"
      />
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
        <li>
          <NavLink
            to="#"
            onClick={(e) => {
              e.preventDefault();
              setDropdownOpen(!dropdownOpen);
            }}>
            More
          </NavLink>
          {dropdownOpen && <Dropdown />}
        </li>
      </ul>
    </nav>
  );
};
