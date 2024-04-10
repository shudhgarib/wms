import {useState} from "react";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";

function FormExample() {
  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };

  return (
    <div
      className="container"
      style={{
        display: "flex",
        margin: "auto",
        justifyContent: "space-around",
        fontFamily: "Poppins",
      }}>
      <Form
        noValidate
        validated={validated}
        onSubmit={handleSubmit}
        style={{
          border: "2px solid #4CCD99",
          padding: "5px 20px 20px 20px",
          borderRadius: "10px",
          boxShadow: "5px 5px 20px #4CCD99, -2px -2px 0px #4CCD99",
        }}>
        <div
          className="form-wrap"
          style={{
            overflow: "hidden",
          }}>
          <h3
            className="animate__animated animate__bounceInLeft"
            style={{
              color: "white",
              textAlign: "center",
              marginBottom: "-10px",
            }}>
            Admin Panel
          </h3>
          <hr
            style={{
              borderTop: "5px dotted #4CCD99",
              opacity: "0.6",
            }}
          />
        </div>
        <Row className="mb-3">
          <Form.Group as={Col} md="18" controlId="validationCustom01">
            <Form.Control
              required
              type="text"
              placeholder="Admin Id"
              style={{
                border: "2px solid #4CCD99",
                borderRadius: "30px",
              }}
            />
          </Form.Group>
        </Row>
        <Row className="mb-3">
          <Form.Group as={Col} md="18" controlId="validationCustom01">
            <Form.Control
              required
              type="password"
              placeholder="Enter Password"
              style={{
                border: "2px solid #4CCD99",
                borderRadius: "30px",
              }}
            />
          </Form.Group>
        </Row>

        <Button
          type="submit"
          style={{
            backgroundColor: "#4CCD99",
            border: "none",
            display: "flex",
            margin: "auto",
            borderRadius: "30px",
            fontWeight: "bold",
          }}>
          Login
        </Button>
      </Form>
    </div>
  );
}

export default FormExample;
