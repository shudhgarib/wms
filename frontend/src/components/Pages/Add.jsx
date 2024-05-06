import {useState} from "react";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Row from "react-bootstrap/Row";
import axios from "axios";
function Add() {
  const [validated, setValidated] = useState(false);
  const [values, setValues] = useState({
    name: "",
    amount: "",
    place: "",
    date: "",
  });

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
      axios
        .post("http://localhost:8081/donor_list_2024", values)
        .then((res) => console.log(res))
        .catch((err) => console.log(err));
    }

    setValidated(true);
  };

  return (
    <>
      <div
        className="container mt-5"
        style={{
          textAlign: "center",
          border: "2px solid #4CCD99",
          boxShadow: "5px 5px 20px #4CCD99, -2px -2px 0px #4CCD99",
          borderRadius: "10px",
        }}>
        <Form noValidate validated={validated} onSubmit={handleSubmit}>
          <h3
            className="animate__animated animate__zoomIn"
            style={{
              color: "white",
            }}>
            Add Donor Details
          </h3>
          <hr
            style={{
              borderTop: "5px dotted #4CCD99",
              opacity: "0.6",
            }}
          />
          <Row className="mb-3">
            <Form.Group
              as={Col}
              md="6"
              className="mb-3"
              controlId="validationCustom01">
              <Form.Control
                required
                type="text"
                placeholder="Enter Full Name"
                onChange={(e) => setValues({...values, name: e.target.value})}
              />
            </Form.Group>
            <Form.Group as={Col} md="6" controlId="validationCustom02">
              <Form.Control
                required
                type="number"
                placeholder="Enter Amount"
                onChange={(e) => setValues({...values, amount: e.target.value})}
              />
            </Form.Group>
          </Row>
          <Row>
            <Form.Group
              as={Col}
              md="6"
              className="mb-3"
              controlId="validationCustom03">
              <Form.Control
                type="text"
                placeholder="Address"
                required
                onChange={(e) => setValues({...values, place: e.target.value})}
              />
              <Form.Control.Feedback type="invalid">
                Please provide a valid Address.
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="6" controlId="validationCustom04">
              <Form.Control
                type="date"
                required
                onChange={(e) => setValues({...values, date: e.target.value})}
              />
              <Form.Control.Feedback type="invalid">
                Please provide a valid Date.
              </Form.Control.Feedback>
            </Form.Group>
          </Row>

          <Button
            className="btn mb-3 animate__animated animate__zoomIn"
            type="submit"
            style={{
              margin: "10px",
              border: "2px ",
              fontWeight: "bold",
              background: "#4CCD99",
            }}>
            Add{" "}
          </Button>
        </Form>
      </div>
    </>
  );
}

export default Add;
