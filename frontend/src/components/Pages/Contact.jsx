import React from "react";
import "./Contact.module.css";
import Contact_form from "./Contact_form";
import ContactHeading from "./ContactHeading";
import Contact_point from "./Contact_point";
import Contact_Map_Latyout from "./Contact_Map_Latyout";

<link
  href="https://fonts.googleapis.com/css2?family=Rubik+Scribble&display=swap"
  rel="stylesheet"></link>;
const Contact = () => {
  return (
    <>
      <div
        className="container"
        style={{fontFamily: "Poppins", color: "white"}}>
        <div className="Top-Heading">
          <ContactHeading />
        </div>
        <div
          className="main"
          style={{
            display: "flex",
            justifyContent: "space-around",
            alignItems: "center",
          }}>
          <div className="left">
            <Contact_point />
          </div>
          <div className="right">
            <Contact_form />
          </div>
        </div>
        <div className="map-layout">
          <Contact_Map_Latyout />
        </div>
      </div>
    </>
  );
};

export default Contact;
