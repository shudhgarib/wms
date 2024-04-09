import React from "react";

function ContactHeading() {
  return (
    <div>
      <div className="email" style={{marginTop: "45px"}}>
        <a href="mailto:rajanunltd@gmail.com">
          <img
            style={{
              display: "flex",
              alignItems: "center",
              alignContent: "center",
              margin: "auto",
              cursor: "pointer",
            }}
            width="50"
            height="50"
            src="https://img.icons8.com/bubbles/50/new-post.png"
            alt="new-post"
          />
        </a>
      </div>
      <div className="heading">
        <h4
          class="animate__animated animate__heartBeat"
          style={{fontFamily: "Poppins"}}>
          Happy to help you!
        </h4>
        <p>
          Call us at{" "}
          <a
            href="tel:+91 62060 11605"
            style={{
              textDecoration: "none",
              color: "#4CCD99",
            }}>
            +91 62060 11605
          </a>
          , email on{" "}
          <a
            href="mailto:contact@biharipoojapath.com"
            style={{
              textDecoration: "none",

              color: "#4CCD99",
            }}>
            contact@biharipoojapath.com
          </a>{" "}
          or submit a ticket
          <br />
          <br /> below, and our team will get back shortly.
          <br />{" "}
        </p>
      </div>
      <div className="list_item">
        <h4
          class="animate__animated animate__shakeX"
          style={{color: "red", fontFamily: "Poppins", color: "white"}}>
          {" "}
          How Can We Help You?{" "}
        </h4>
      </div>
    </div>
  );
}

export default ContactHeading;
