import React, {useState} from "react";
import Form from "react-bootstrap/Form";
import "./Welcome.css";

function Welcome() {
  // Dummy array of bank data
  const bankDataArray = [
    {
      id: 1,
      BankName: "PUNJAB NATIONAL BANK",
      AccNo: "4647000100122904",
      ifsc: "PUNB0464700",
      AccName: "RAJAN PATEL",
    },
    {
      id: 2,
      BankName: "STATE BANK OF INDIA",
      AccNo: "1245222155422835",
      ifsc: "PUNB0464700",
      AccName: "KAUSTUBH PATEL",
    },
    {
      id: 3,
      BankName: "PUNJAB NATIONAL BANK",
      AccNo: "4647001700118258",
      ifsc: "PUNB0464700",
      AccName: "KAUSTUBH PATEL",
    },
  ];

  const [bankData, setBankData] = useState(bankDataArray[0]); // Initial bank data

  const [copiedText, setCopiedText] = useState(""); // State to store the copied text

  const handleCopy = (text) => {
    navigator.clipboard.writeText(text); // Copy text to clipboard
    setCopiedText(text); // Update state with copied text
  };

  const handleItemClick = (item) => {
    setBankData(item); // Update bank data when an item is clicked
  };

  return (
    <>
      <div container className="main my-5 mx-5">
        <div
          className="account-section "
          style={{display: "flex", justifyContent: "center"}}>
          <div className="account ">
            {bankDataArray.map((item) => (
              <div
                key={item.id}
                className="item animate__animated animate__slideInLeft"
                onClick={() => handleItemClick(item)}>
                <img
                  src="/assets/images/bank-account.png"
                  alt={item.BankName}
                />
              </div>
            ))}
          </div>
        </div>

        <div
          className="section"
          style={{
            display: "flex",
            justifyContent: "center",
            marginTop: "10px",
            color: "white",
          }}>
          <div
            className="left "
            style={{
              backgroundColor: "#4CCD99",
              borderRadius: "10px 0 0 10px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-around",
              textAlign: "left",
              padding: "20px",
              overflow: "hidden",
            }}>
            <label className="animate__animated animate__slideInLeft">
              <span>Bank Name : </span>
              {bankData.BankName}
              <span
                style={{
                  cursor: "pointer",
                  backgroundColor: "white",
                  border: "1px solid #fff",
                  borderRadius: "10px",
                  marginLeft: "5px",
                  float: "right",
                  color: "red",
                }}>
                <img
                  width="14"
                  height="14"
                  src="https://img.icons8.com/material-rounded/24/copy.png"
                  alt="copy"
                  onClick={() => handleCopy(bankData.BankName)} // Copy Bank Name when clicked
                />
              </span>{" "}
            </label>

            <label className="animate__animated animate__slideInLeft">
              <span>A/C NO : </span> {bankData.AccNo}
              <span
                style={{
                  cursor: "pointer",
                  backgroundColor: "white",
                  border: "1px solid #fff",
                  borderRadius: "10px",
                  marginLeft: "5px",
                  float: "right",
                }}>
                <img
                  width="14"
                  height="14"
                  src="https://img.icons8.com/material-rounded/24/copy.png"
                  alt="copy"
                  onClick={() => handleCopy(bankData.AccNo)} // Copy Account Number when clicked
                />
              </span>{" "}
            </label>

            <label className="animate__animated animate__slideInLeft">
              <span>IFCS Code : </span> {bankData.ifsc}
              <span
                style={{
                  cursor: "pointer",
                  backgroundColor: "white",
                  border: "1px solid #fff",
                  borderRadius: "10px",
                  marginLeft: "5px",
                  float: "right",
                }}>
                <img
                  width="14"
                  height="14"
                  src="https://img.icons8.com/material-rounded/24/copy.png"
                  alt="copy"
                  onClick={() => handleCopy(bankData.ifsc)} // Copy IFSC Code when clicked
                />
              </span>{" "}
            </label>

            <label className="animate__animated animate__slideInLeft">
              <span>Account Name : </span> {bankData.AccName}
              <span
                style={{
                  cursor: "pointer",
                  backgroundColor: "white",
                  border: "1px solid #fff",
                  borderRadius: "10px",
                  marginLeft: "5px",
                  float: "right",
                }}>
                <img
                  width="14"
                  height="14"
                  src="https://img.icons8.com/material-rounded/24/copy.png"
                  alt="copy"
                  onClick={() => handleCopy(bankData.AccName)} // Copy Account Name when clicked
                />
              </span>{" "}
            </label>
          </div>
          <div
            className="section-1 "
            style={{
              backgroundColor: "#4CCD99",
              border: "1px solid #4CCD99",
              borderRadius: "0px 10px 10px 0",
            }}>
            <h5
              className="right animate__animated animate__zoomIn"
              style={{float: "inherit"}}>
              Welcome
            </h5>
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
                overflow: "hidden",
              }}>
              <label
                className="animate__animated animate__slideInRight "
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
              <label className="animate__animated animate__slideInRight ">
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
              <label className="animate__animated animate__slideInRight ">
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
                  label={
                    <>
                      I have read and agree with{" "}
                      <a
                        href="#"
                        style={{
                          textDecoration: "none",
                          color: "blue",
                        }}>
                        {" "}
                        the terms of payment and donate policy.
                      </a>
                    </>
                  }
                  required
                />
              </Form.Group>
              <button
                className="animate__animated animate__slideInUp"
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
