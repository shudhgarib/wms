import React from "react";
import DonorsDetails from "./Donors";
import {Link, useNavigate} from "react-router-dom";

function Adminpanel() {
  return (
    <div
      className="container"
      style={{
        display: "flex",
        justifyContent: "center",
        columnGap: "20px",
        alignItems: "center",
        top: "0",
        bottom: "0",
        margin: "auto",
      }}>
      {/* path to redirect on donor details code start */}
      <Link
        to="/reserve-place"
        className="btn mb-3 animate__animated animate__zoomIn"
        style={{
          margin: "5px",
          fontWeight: "bold",
        }}>
        <img
          width="50"
          height="50"
          src="https://img.icons8.com/ios/50/place-marker--v1.png"
          alt="place-marker--v1"
        />
      </Link>
      <span>Reserve Place</span>
      {/* path to redirect on donor details code end */}
      {/* path to redirect on Add donor details code start */}
      <Link
        to="/add-donor"
        className="btn mb-3 animate__animated animate__zoomIn"
        style={{
          margin: "5px",
          fontWeight: "bold",
        }}>
        <img
          width="50"
          height="50"
          src="https://img.icons8.com/ios/50/add--v1.png"
          alt="add--v1"
        />
      </Link>
      <span>Add Donors</span>
      {/* path to redirect on Add donor details code end */}
      {/* path to redirect on verify donor details code start */}
      <Link
        to="/donors-details"
        className="btn mb-3 animate__animated animate__zoomIn"
        style={{
          margin: "5px",
          fontWeight: "bold",
        }}>
        <img
          width="50"
          height="50"
          src="https://img.icons8.com/dotty/80/available-updates.png"
          alt="available-updates"
        />
      </Link>
      <span>Verify Donors</span>
      {/* path to redirect on verify donor details code end */}
    </div>
  );
}

export default Adminpanel;
