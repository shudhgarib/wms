import React, {useState} from "react";
import {NavLink, Link} from "react-router-dom";
// import Heading from "../Pages/Heading";
import Darkmode from "./Darkmode";

import {FiAlignRight, FiXCircle, FiChevronDown} from "react-icons/fi";
import logo from "../../img/logo.png";
const Navbarmenu = () => {
  const [isMenu, setisMenu] = useState(false);
  const [isResponsiveclose, setResponsiveclose] = useState(false);
  const toggleClass = () => {
    setisMenu(isMenu === false ? true : false);
    setResponsiveclose(isResponsiveclose === false ? true : false);
  };
  let boxClass = ["main-menu menu-right menuq1"];
  if (isMenu) {
    boxClass.push("menuq2");
  } else {
    boxClass.push("");
  }
  const [isMenuSubMenu, setMenuSubMenu] = useState(false);
  const toggleSubmenu = () => {
    setMenuSubMenu(isMenuSubMenu === false ? true : false);
  };
  let boxClassSubMenu = ["sub__menus"];
  if (isMenuSubMenu) {
    boxClassSubMenu.push("sub__menus__Active");
  } else {
    boxClassSubMenu.push("");
  }
  return (
    <header
      className="header__middle"
      style={{
        backgroundColor: "#007F73",
        position: "sticky",
        fontFamily: "Poppins",
        top: "0",
        zIndex: "1000",
        boxShadow: "5px 5px 10px #4CCD99",
        border: "none",
      }}>
      <div className="container">
        <div className="row">
          {/* Add Logo  */}

          <div className="header__middle__logo">
            <NavLink exact activeClassName="is-active" to="/">
              <img
                className="animate__animated animate__zoomIn"
                src={logo}
                style={{
                  width: "60px",
                  cursor: "pointer",
                  paddingBottom: "20px",
                }}
                alt="logo"
              />
            </NavLink>
          </div>
          {/*<Heading />*/}
          <div
            className="header__middle__menus"
            style={{
              marginTop: "-94px",
            }}>
            <nav className="main-nav ">
              {/* Responsive Menu Button */}
              {isResponsiveclose === true ? (
                <>
                  <span
                    className="menubar__button"
                    style={{display: "none"}}
                    onClick={toggleClass}>
                    {" "}
                    <FiXCircle />{" "}
                  </span>
                </>
              ) : (
                <>
                  <span
                    className="menubar__button"
                    style={{display: "none"}}
                    onClick={toggleClass}>
                    {" "}
                    <FiAlignRight />{" "}
                  </span>
                </>
              )}
              <ul className={boxClass.join(" ")}>
                <li className="menu-item">
                  <NavLink
                    exact
                    activeClassName="is-active"
                    onClick={toggleClass}
                    to={`/Pages/Donate`}>
                    {" "}
                    Donate{" "}
                  </NavLink>
                </li>
                <li className="menu-item ">
                  <NavLink
                    onClick={toggleClass}
                    activeClassName="is-active"
                    to={`/Pages/Book_Place`}>
                    {" "}
                    Book Place{" "}
                  </NavLink>{" "}
                </li>
                <li className="menu-item ">
                  <NavLink
                    onClick={toggleClass}
                    activeClassName="is-active"
                    to={`/Pages/View_list`}>
                    {" "}
                    View List{" "}
                  </NavLink>{" "}
                </li>

                <li className="menu-item ">
                  <NavLink
                    onClick={toggleClass}
                    activeClassName="is-active"
                    to={`/Pages/Gallery`}>
                    {" "}
                    Gallery{" "}
                  </NavLink>{" "}
                </li>

                <li
                  onClick={toggleSubmenu}
                  className="menu-item sub__menus__arrows">
                  {" "}
                  <Link to="#">
                    {" "}
                    More <FiChevronDown />{" "}
                  </Link>
                  <ul
                    className={boxClassSubMenu.join(" ")}
                    style={{backgroundColor: "#007F73"}}>
                    <li>
                      {" "}
                      <NavLink
                        onClick={toggleClass}
                        activeClassName="is-active"
                        to={`/Pages/About`}>
                        {" "}
                        About Us{" "}
                      </NavLink>{" "}
                    </li>
                    <li>
                      <NavLink
                        onClick={toggleClass}
                        activeClassName="is-active"
                        to={`/Pages/Work`}>
                        {" "}
                        How We Work?{" "}
                      </NavLink>{" "}
                    </li>
                    <li>
                      {" "}
                      <NavLink
                        onClick={toggleClass}
                        activeClassName="is-active"
                        to={`/Pages/Contact`}>
                        {" "}
                        Contact Us{" "}
                      </NavLink>{" "}
                    </li>
                    <li>
                      <NavLink
                        onClick={toggleClass}
                        activeClassName="is-active"
                        to={`/Pages/Admin`}>
                        {" "}
                        Admin Panel{" "}
                      </NavLink>{" "}
                    </li>
                  </ul>
                </li>

                <li
                  className="menu-item"
                  style={{
                    marginTop: "-8px",
                  }}>
                  <Darkmode />
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};
export default Navbarmenu;
