import React from "react";

function Contact_point() {
  return (
    <>
      <div classNameName="container">
        <ul
          classNameName="list_wrap"
          style={{
            fontFamily: "Poppins",
            fontSize: "22px",
            overflow: "hidden",
          }}>
          <li
            className="animate__animated animate__fadeInRight"
            style={{padding: "20px 0"}}>
            🔘 I have a hot tip.
          </li>
          <li
            className="animate__animated animate__fadeInLeft"
            style={{padding: "20px 0"}}>
            🔘 need something else.
          </li>
          <li
            className="animate__animated animate__fadeInRight"
            style={{padding: "20px 0"}}>
            🔘 want to report a correction.
          </li>
          <li
            className="animate__animated animate__fadeInLeft"
            style={{padding: "20px 0"}}>
            🔘 want to report a bug or technical issue.
          </li>
          <li
            className="animate__animated animate__fadeInRight"
            style={{padding: "20px 0"}}>
            🔘 want to advertise on "
            <span style={{color: "#FFF455"}}>biharipoojapath.com</span>
            ".
          </li>
        </ul>
      </div>
    </>
  );
}

export default Contact_point;
