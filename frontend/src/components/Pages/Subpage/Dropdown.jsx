import "../Subpage/DropdownStyle.css";
import {Link} from "react-router-dom";
import React from "react";

const Dropdown = () => {
  return (
    <>
      <div
        className="container"
        style={{
          display: "flex",
          justifyContent: "space-around",
          alignItems: "center",
        }}>
        <div
          className="heading"
          style={{
            display: "flex",
            float: "left",
            color: "#FFF455",
          }}>
          <h5 class="animate__animated animate__bounceInLeft">
            Committee - Members!
          </h5>
        </div>

        <div
          className="select-button"
          style={{
            display: "flex",
          }}>
          <button className="buttons animate__animated animate__bounceInRight">
            ▼ &nbsp; Select
          </button>
          <div className="dropdown-content">
            <Link to="/TowK24" id="top">
              2024
            </Link>
            <Link to="/TowK23">2023 </Link>
            <Link to="/TowK22" id="bottom">
              2022
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dropdown;
