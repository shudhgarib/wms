import React from "react";
import styles from "./Contact_form.module.css";

function Contact_form() {
  return (
    <>
      <div className={styles.main}>
        <form action="">
          <h4 class="animate__animated animate__zoomIn">Send Your Issue...</h4>
          <hr
            style={{
              borderTop: "5px dotted #4CCD99",
              opacity: "0.9",
            }}
          />
          <input
            type="text"
            name="Name"
            id="Name"
            placeholder="Enter Full Name..."
            required
          />
          <br />
          <br />
          <input
            type="number"
            name="Contact"
            id="Contact"
            placeholder="Enter Mobile No."
            required
          />
          <br />
          <br />
          <input
            type="email"
            name="Email"
            id="Email"
            placeholder="Enter Email Id."
            required
          />
          <br />
          <br />
          <input type="text" id="subject" placeholder="Enter Your Subject..." />
          <br />
          <br />
          <textarea
            name="message"
            id="message"
            placeholder="Write Your Queries..."
            cols="20"
            rows="3"
            required
          />
          <br />
          <input
            className={styles.btn}
            type="button"
            value="Send"
            id="send-button"
            onclick="Send()"
            style={{
              marginTop: "20px",
              width: "50px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              alignContent: "center",
              marginLeft: "auto",
              marginRight: "auto",
              backgroundColor: "#4CCD99",
              fontWeight: "600",
              color: "#fff",
            }}
          />
          <br />
        </form>
      </div>
    </>
  );
}

export default Contact_form;
