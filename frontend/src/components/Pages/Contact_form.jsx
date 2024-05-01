import React from "react";
import Form from "react-bootstrap/Form";
import styles from "./Contact_form.module.css";
import FloatingLabel from "react-bootstrap/FloatingLabel";

function Contact_form() {
  return (
    <>
      <div className={styles.main}>
        <Form action="">
          <h4 class="animate__animated animate__zoomIn">Send Your Issue...</h4>

          <hr
            style={{
              borderTop: "5px dotted #4CCD99",
              opacity: "0.9",
            }}
          />

          <Form.Group className="mb-3" controlId="formGroupEmail">
            <Form.Control type="text" placeholder="Enter Full Name..." />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formGroupEmail">
            <Form.Control type="number" placeholder="Enter Mobile No." />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formGroupEmail">
            <Form.Control type="number" placeholder="Enter Mobile No." />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formGroupEmail">
            <Form.Control type="email" placeholder="Enter Email" />
          </Form.Group>

          <FloatingLabel controlId="floatingTextarea2" label="Leave a message ">
            <Form.Control as="textarea" style={{height: "100px"}} />
          </FloatingLabel>

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
              borderRadius: "5px",
              backgroundColor: "#4CCD99",
              fontWeight: "600",
              color: "#fff",
            }}
          />
          <br />
        </Form>
      </div>
    </>
  );
}

export default Contact_form;
