import React, {useState} from "react";
import {Link, NavLink} from "react-router-dom";
import "./Navbar.css";
import "bootstrap/dist/css/bootstrap.min.css";
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
          <NavLink to="/Book_Place">Book Place</NavLink>
        </li>
        <li>
          <NavLink to="/View_List">View List</NavLink>
        </li>
        <li>
          <NavLink to="/Gallery">Gallery</NavLink>
        </li>
        {/*  <li>
   <NavLink to="/More"> 
            <select>
              <option selected>More</option>
              <option value="1">About Us</option>
              <option value="2">How We Work?</option>
              <option value="3">Admin Panel</option>
            </select>   
          </NavLink>
        </li>  */}
      </ul>
    </nav>
  );
};
