import React from "react";
import "./Contact.module.css";

function Contact_point() {
  return (
    <>
      <div classNameName="contact_point">
        <div
          classNameName="list_wrap"
          style={{
            overflow: "hidden",
          }}>
          <p className="animate__animated animate__fadeInRight">
            🔘 I have a hot tip.
          </p>
          <p className="animate__animated animate__fadeInLeft">
            🔘 need something else.
          </p>
          <p className="animate__animated animate__fadeInRight">
            🔘 want to report a correction.
          </p>
          <p className="animate__animated animate__fadeInLeft">
            🔘 want to report a bug or technical issue.
          </p>
          <p className="animate__animated animate__fadeInRight">
            🔘 want to advertise on "
            <span style={{color: "#FFF455"}}>biharipoojapath.com</span>
            ".
          </p>
        </div>
      </div>
    </>
  );
}

export default Contact_point;
