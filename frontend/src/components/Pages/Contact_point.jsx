import React from "react";

function Contact_point() {
  return (
    <div>
      <div className="point">
        <ul
          className="list_wrap"
          style={{
            fontFamily: "Poppins",
            fontSize: "22px",
            overflow: "hidden",
          }}>
          <li class="animate__animated animate__fadeInRight">
            🔘 I have a hot tip.
          </li>
          <li class="animate__animated animate__fadeInLeft">
            🔘 need something else.
          </li>
          <li class="animate__animated animate__fadeInRight">
            🔘 want to report a correction.
          </li>
          <li class="animate__animated animate__fadeInLeft">
            🔘 want to report a bug or technical issue.
          </li>
          <li class="animate__animated animate__fadeInRight">
            🔘 want to advertise on "
            <span style={{color: "#4CCD99"}}>biharipoojapath.com</span>
            ".
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Contact_point;
