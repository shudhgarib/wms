import React, {useState} from "react";
import {Modal, Button} from "react-bootstrap";
import {useNavigate} from "react-router-dom";
import styles from "./Donate.module.css";

function Book_Place({logout}) {
  const [show, setShow] = useState(false);
  const [candidate, setCandidate] = useState("");
  const [candidateError, setCandidateError] = useState("");
  const navigate = useNavigate();

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const validateCandidate = (value) => {
    let error = "";
    if (value === "") {
      error = "Value is required";
    } else if (value < 1) {
      error = "Value must be greater than or equal to 1";
    } else if (value > 10) {
      error = "Value must be less than or equal to 10";
    }
    return error;
  };

  const handleCandidateChange = (e) => {
    const {value} = e.target;
    setCandidate(value);
    setCandidateError(validateCandidate(value));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleShow();
  };

  return (
    <div
      style={{
        textAlign: "center",
        padding: "20px",
        top: "0",
        bottom: "0",
        margin: "auto",
        overflow: "hidden",
      }}>
      <h2 className="animate__animated animate__slideInLeft text-white">
        Enter Number Of Candidates For Worship.
      </h2>
      <form onSubmit={handleSubmit}>
        <div className="main mb-2">
          <input
            type="number"
            id="candidate"
            name="candidate"
            required
            style={{
              border: "5px solid #4CCD99",
              height: "50px",
              padding: "0",
              lineHeight: "40px",
              textAlign: "center",
              boxSizing: "border-box",
              color: "white",
              borderRadius: "100px",
              backgroundColor: "transparent",
              fontSize: "35px",
            }}
            value={candidate}
            onChange={handleCandidateChange}
          />
          <div className={styles.error}>{candidateError}</div>
        </div>
        <Button
          className="animate__animated animate__slideInRight"
          style={{
            backgroundColor: "#4CCD99",
            border: "5px solid #4CCD99",
            borderRadius: "100px",
            fontWeight: "bold",
          }}
          type="submit">
          Book{" "}
        </Button>
      </form>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header>
          <Modal.Title>Submission Successful</Modal.Title>

          {/* <Button variant="close" onClick={handleClose}></Button> */}
        </Modal.Header>
        <Modal.Body>
          Your Place Reservation Is{" "}
          <span style={{color: "yellow"}}>Pending</span> Our Committee Member
          Will Verify Soon And Notify You.
        </Modal.Body>
        <Modal.Footer>
          <Button variant="danger" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default Book_Place;
