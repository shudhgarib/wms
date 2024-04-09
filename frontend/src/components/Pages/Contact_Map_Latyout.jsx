import React from "react";
<link rel="preconnect" href="https://fonts.googleapis.com"></link>;
function Contact_Map_Latyout() {
  return (
    <>
      <div className="">
        <div
          className="main"
          style={{
            display: "flex",
            justifyContent: "space-between",

            marginBottom: "50px",
            borderRadius: "10px",
          }}>
          <div className="left">
            <h3
              style={{
                margin: "10px",
                fontFamily: "Poppins",
                fontWeight: "400",
                fontStyle: "normal",
                color: "#4CCD99",
                textAlign: "center",
              }}
              class="animate__animated animate__fadeInLeft">
              Let's get in touch
            </h3>
            <p
              style={{
                fontSize: "22px",
                fontFamily: "Poppins",
              }}>
              Want to get in touch? Let's chat, our entire team would love to
              hear from you. So, just pick up the phone or start a coversation
              over a mail using the information shared below.
            </p>
            <br />
            <p
              style={{
                fontSize: "22px",
                fontFamily: "Poppins",
              }}>
              You can also connect with us for business queries of bulk orders
              or stockists.
            </p>
            <br />
            <div
              className="contact-list"
              style={{
                fontFamily: "Poppins",
              }}>
              <p class="animate__animated animate__jackInTheBox">
                {" "}
                <span style={{color: "#4CCD99", fontSize: "20px"}}>
                  Email
                </span>{" "}
                contact@biharipoojapath.com{" "}
              </p>
              <p class="animate__animated animate__jackInTheBox">
                {" "}
                <span style={{color: "#4CCD99", fontSize: "20px"}}>
                  Telephone
                </span>{" "}
                +91 62060 11605
              </p>
              <p class="animate__animated animate__jackInTheBox">
                {" "}
                <span style={{color: "#4CCD99", fontSize: "20px"}}>
                  Customer Care
                </span>{" "}
                +91 93049 19837
              </p>
            </div>
          </div>
          <div className="right">
            <h3
              style={{
                margin: "10px",
                color: "#4CCD99",
                textAlign: "center",
              }}
              class="animate__animated animate__fadeInRight">
              पूजा स्थल !
            </h3>
            <div className="map">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1837636.858336046!2d84.4875357133984!3d25.89794901642395!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39ed5844f0bb6903%3A0x57ad3fed1bbae325!2sBihar!5e0!3m2!1sen!2sin!4v1712391275507!5m2!1sen!2sin"
                width="550"
                height="450"
                loading="fast"
                referrerpolicy="no-referrer-when-downgrade"
                style={{
                  border: "5px solid #4CCD99",
                  boxShadow: "5px 5px 20px #4CCD99, -2px -2px 0px #4CCD99",
                  borderRadius: "10px",
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact_Map_Latyout;
