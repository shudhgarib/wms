import React from "react";
import {useState} from "react";
import Form from "react-bootstrap/Form";
import "./Welcome.css";
function Welcome() {
  const BankName = "XYZ Bank";
  const AccNo = "1234567890";
  const ifsc = "ABCD0123456";
  const AccName = "John Doe";

  const [copiedText, setCopiedText] = useState(""); // State to store the copied text

  const handleCopy = (text) => {
    navigator.clipboard.writeText(text); // Copy text to clipboard
    setCopiedText(text); // Update state with copied text
  };

  return (
    <>
      <div container className="main my-5 mx-5">
        <div className="account">
          <div className="item">
            <img src="/assets/images/bank-account.png"></img>
          </div>
          <div className="item">
            <img src="/assets/images/bank-account.png"></img>
          </div>
          <div className="item">
            <img src="/assets/images/bank-account.png"></img>
          </div>
          <div className="item">
            <img src="/assets/images/bank-account.png"></img>
          </div>
          <div className="item">
            <img src="/assets/images/bank-account.png"></img>
          </div>
          <div className="item">
            <img src="/assets/images/bank-account.png"></img>
          </div>
          <div className="item">
            <img src="/assets/images/bank-account.png"></img>
          </div>
        </div>

        <div
          className="section"
          style={{
            display: "flex",
            justifyContent: "center",
            marginTop: "110px",

            color: "white",
          }}>
          <div
            className="left"
            style={{
              backgroundColor: "#4CCD99",
              borderRadius: "10px 0 0 10px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-around",
              textAlign: "left",
              padding: "20px",
              // margin: "0px 10px",
            }}>
            <label>
              Bank Name:{BankName}
              <span
                style={{
                  cursor: "pointer",
                  backgroundColor: "white",
                  border: "1px solid #fff",
                  borderRadius: "10px",
                  marginLeft: "5px",
                }}>
                <img
                  width="14"
                  height="14"
                  src="https://img.icons8.com/material-rounded/24/copy.png"
                  alt="copy"
                  onClick={() => handleCopy(BankName)} // Copy Bank Name when clicked
                />
              </span>{" "}
            </label>

            <label>
              A/C NO:{AccNo}
              <span
                style={{
                  cursor: "pointer",
                  backgroundColor: "white",
                  border: "1px solid #fff",
                  borderRadius: "10px",
                  marginLeft: "5px",
                }}>
                <img
                  width="14"
                  height="14"
                  src="https://img.icons8.com/material-rounded/24/copy.png"
                  alt="copy"
                  onClick={() => handleCopy(AccNo)} // Copy Account Number when clicked
                />
              </span>{" "}
            </label>

            <label>
              IFCS Code:{ifsc}
              <span
                style={{
                  cursor: "pointer",
                  backgroundColor: "white",
                  border: "1px solid #fff",
                  borderRadius: "10px",
                  marginLeft: "5px",
                }}>
                <img
                  width="14"
                  height="14"
                  src="https://img.icons8.com/material-rounded/24/copy.png"
                  alt="copy"
                  onClick={() => handleCopy(ifsc)} // Copy IFSC Code when clicked
                />
              </span>{" "}
            </label>

            <label>
              Account Name:{AccName}
              <span
                style={{
                  cursor: "pointer",
                  backgroundColor: "white",
                  border: "1px solid #fff",
                  borderRadius: "10px",
                  marginLeft: "5px",
                }}>
                <img
                  width="14"
                  height="14"
                  src="https://img.icons8.com/material-rounded/24/copy.png"
                  alt="copy"
                  onClick={() => handleCopy(AccName)} // Copy Account Name when clicked
                />
              </span>{" "}
            </label>
          </div>
          <div
            className="section-1"
            style={{
              backgroundColor: "#4CCD99",
              border: "1px solid #4CCD99",
              borderRadius: "0px 10px 10px 0",
            }}>
            <div
              className="right"
              style={{
                backgroundColor: "#007F73",
                padding: "",
                color: "white",
                fontSize: "200",
                display: "flex",
                flexDirection: "column",
                padding: "0px 15px",
                margin: "10px 15px",
                border: "2px solid #4CCD99",
                borderRadius: "10px",
              }}>
              <label
                style={{
                  marginTop: "5px",
                }}>
                Unique Transaction Reference <sup style={{color: "red"}}>*</sup>
              </label>
              <input
                type="text"
                placeholder="6 to 12 Digit UTR Number"
                style={{
                  border: "2px solid #007F73",
                  borderRadius: "10px",
                  backgroundColor: "white",
                  color: "black",
                }}
              />
              <label>
                Upload Your Payment Proof <sup style={{color: "red"}}>*</sup>
              </label>
              <input
                type="file"
                style={{
                  border: "2px solid #007F73",
                  borderRadius: "10px",
                  backgroundColor: "white",
                  color: "black",
                }}
              />
              <label>
                Amount <sup style={{color: "red"}}>*</sup>
              </label>
              <input
                type="number"
                placeholder="Enter Amount"
                style={{
                  border: "2px solid #007F73",
                  borderRadius: "10px",
                  backgroundColor: "white",
                  color: "black",
                }}
              />
              <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check
                  type="checkbox"
                  label="I have read and agree with "
                  required
                />
                <a
                  href="/"
                  style={{
                    textDecoration: "none",
                  }}>
                  {" "}
                  the terms of payment and donate policy.
                </a>
              </Form.Group>
              <button
                type="submit"
                style={{
                  margin: "auto",
                  padding: "5px",
                  border: "3px solid #007F73",
                  borderRadius: "50px",
                  color: "white",
                  backgroundColor: "#4CCD99",
                  marginBottom: "20px",
                  fontWeight: "bold",
                }}>
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
      {copiedText && (
        <div style={{textAlign: "center", marginTop: "10px"}}>
          <p style={{color: "white"}}>Copied: {copiedText}</p>{" "}
          {/* Display copied text */}
        </div>
      )}
    </>
  );
}

export default Welcome;
