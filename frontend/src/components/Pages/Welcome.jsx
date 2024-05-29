import axios from "axios";
import React, {useEffect, useState} from "react";
import MyModal from "./ShowModal";
import Form from "react-bootstrap/Form";
import "./Welcome.css";
import styles from "./Donate.module.css";

import {useNavigate} from "react-router-dom";

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
    ifsc: "SBIN0014325",
    AccName: "KAUSTUBH PATEL",
  },
  {
    id: 3,
    BankName: "PUNJAB NATIONAL BANK",
    AccNo: "4647001700118258",
    ifsc: "PUNB0464700",
    AccName: "AMAN PATEL",
  },
];

function Welcome() {
  const [showModal, setShowModal] = useState(false);

  // 1. Add State Management for all field error state also code start:

  // Error state for each field
  const [utrno, setUtrno] = useState("");
  const [UTRError, setUTRError] = useState("");

  const [deposit_proof, setDeposit_proof] = useState(null);
  const [deposit_proofError, setDeposit_proofError] = useState("");

  const [amount, setAmount] = useState("");
  const [AmountError, setAmountError] = useState("");

  // 1. Add State Management for all field code end:
  const closeModal = () => setShowModal(false);

  const [bankData, setBankData] = useState(bankDataArray[0]); // Initial bank data
  const [copiedText, setCopiedText] = useState(""); // State to store the copied text
  const navigate = useNavigate();

  function handleSubmit(event) {
    event.preventDefault();
    axios
      .post("http://localhost:8081/welcome", {
        bankData,
        utrno,
        deposit_proof,
        amount,
      })
      .then((res) => {
        console.log(res);
        navigate("");
      })
      .catch((err) => console.log(err));
  }
  //2. Validation function for all fields
  // validation for utr number code start
  const validateUTR = (utr) => {
    let error = "";
    const utrPattern = /^\d{6,12}$/;
    if (!utr) {
      error = "UTR number is required";
    } else if (!utrPattern.test(utr)) {
      error = "UTR number must be between 6 to 12 digits";
    }
    return error;
  };
  // validation for utr number code end
  // validation for proof  code start
  const validateFile = (file) => {
    let error = "";
    const validTypes = ["image/jpeg", "image/png", "application/pdf"];
    const maxSize = 2 * 1024 * 1024; // 2 MB

    if (!file) {
      error = "File is required";
    } else if (!validTypes.includes(file.type)) {
      error = "File type must be JPEG, PNG, or PDF";
    } else if (file.size > maxSize) {
      error = "File size must be less than 2 MB";
    }
    return error;
  };

  // validation for proof  code end
  // validation for amount  code start
  const validateAmount = (amount) => {
    let error = "";
    if (!amount) {
      error = "Amount is required";
    } else if (amount <= 51) {
      error = "Amount must be greater than 50₹";
    }
    return error;
  };

  // validation for amount  code end

  // 3. Input Change Handler and Validation: for utrno code start
  const handleInputChange = (e) => {
    const {value} = e.target;
    setUtrno(value);
    setUTRError(validateUTR(value));
  };

  // Input Change Handler and Validation: for utrno code end
  // Input Change Handler and Validation: for file proof code start
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setDeposit_proof(file);
    setDeposit_proofError(validateFile(file));
  };
  // Input Change Handler and Validation: for file proof code end
  // Input Change Handler and Validation: for amount code start
  const handleAmountChange = (e) => {
    const {value} = e.target;
    setAmount(value);
    setAmountError(validateAmount(value));
  };

  // Input Change Handler and Validation: for amount code end

  //3. Input Change Handler and Validation: for file proof code end

  // copy code start
  const handleCopy = (text) => {
    navigator.clipboard.writeText(text);
    setCopiedText(text); // Update state with copied text
  };
  // copy code end

  // Update bank data when an item is clicked code start
  const handleItemClick = (item) => {
    setBankData(item);
  };
  // Update bank data when an item is clicked code end

  return (
    <>
      <div container="true" className="main my-5 mx-5">
        {console.log(bankData, 66, "Welcome.js")}
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
                  borderRadius: "50px",
                  marginLeft: "5px",
                  float: "right",
                  color: "red",
                }}>
                <img
                  width="14"
                  height="14"
                  src="https://img.icons8.com/material-rounded/24/copy.png"
                  alt="copy"
                  onClick={() => handleCopy(bankData.BankName)}
                />
              </span>{" "}
            </label>

            <label className="animate__animated animate__slideInLeft">
              <span>A/C NO : </span>{" "}
              <input
                type="text"
                value={bankData.AccNo}
                onChange={(e) =>
                  setBankData({...bankData, AccNo: e.target.value})
                }
                style={{
                  color: "white",
                  background: "none",
                }}
              />
              <span
                style={{
                  cursor: "pointer",
                  backgroundColor: "white",
                  border: "1px solid #fff",
                  borderRadius: "50px",
                  marginLeft: "5px",
                  float: "right",
                }}>
                <img
                  width="14"
                  height="14"
                  src="https://img.icons8.com/material-rounded/24/copy.png"
                  alt="copy"
                  onClick={() => handleCopy(bankData.AccNo)}
                />
              </span>{" "}
            </label>

            <label className="animate__animated animate__slideInLeft">
              <span>IFSC Code : </span>{" "}
              <input
                type="text"
                value={bankData.ifsc}
                onChange={(e) =>
                  setBankData({...bankData, ifsc: e.target.value})
                }
                style={{
                  color: "white",
                  background: "none",
                }}
              />
              <span
                style={{
                  cursor: "pointer",
                  backgroundColor: "white",
                  border: "1px solid #fff",
                  borderRadius: "50px",
                  marginLeft: "5px",
                  float: "right",
                }}>
                <img
                  width="14"
                  height="14"
                  src="https://img.icons8.com/material-rounded/24/copy.png"
                  alt="copy"
                  onClick={() => handleCopy(bankData.ifsc)}
                />
              </span>{" "}
            </label>

            <label className="animate__animated animate__slideInLeft">
              <span>Account Name : </span>{" "}
              <input
                type="text"
                value={bankData.AccName}
                onChange={(e) =>
                  setBankData({...bankData, AccName: e.target.value})
                }
                style={{
                  color: "white",
                  background: "none",
                }}
              />
              <span
                style={{
                  cursor: "pointer",
                  backgroundColor: "white",
                  border: "1px solid #fff",
                  borderRadius: "50px",
                  marginLeft: "5px",
                  float: "right",
                }}>
                <img
                  width="14"
                  height="14"
                  src="https://img.icons8.com/material-rounded/24/copy.png"
                  alt="copy"
                  onClick={() => handleCopy(bankData.AccName)}
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
            <form onSubmit={handleSubmit}>
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
                  htmlFor=""
                  className="animate__animated animate__slideInRight "
                  style={{
                    marginTop: "5px",
                  }}>
                  Unique Transaction Reference{" "}
                  <sup style={{color: "red"}}>*</sup>
                </label>
                {/* UTR FIELD */}
                <input
                  type="text"
                  name="utr"
                  id="utr"
                  placeholder="6 to 12 Digit UTR Number"
                  className="form-control"
                  style={{
                    border: "2px solid #007F73",
                    borderRadius: "50px",
                    backgroundColor: "white",
                    color: "black",
                    padding: "7px",
                  }}
                  value={utrno}
                  onChange={handleInputChange}
                  required
                />
                <div className={styles.error}>{UTRError}</div>

                <label
                  htmlFor=""
                  className="animate__animated animate__slideInRight ">
                  Upload Your Payment Proof <sup style={{color: "red"}}>*</sup>
                </label>
                {/* DEPOSITE PROOF FIELD */}

                <input
                  type="file"
                  className="form-control"
                  style={{
                    border: "2px solid #007F73",
                    borderRadius: "50px",
                    backgroundColor: "white",
                    color: "black",
                    padding: "7px",
                  }}
                  onChange={handleFileChange}
                  required
                />
                <div className={styles.error}>{deposit_proofError}</div>

                <label
                  htmlFor=""
                  className="animate__animated animate__slideInRight ">
                  Amount <sup style={{color: "red"}}>*</sup>
                </label>
                {/* AMOUNT FIELD */}

                <input
                  type="number"
                  className="form-control"
                  name="amount"
                  id="amount"
                  placeholder="Enter Amount"
                  style={{
                    padding: "7px",
                    border: "2px solid #007F73",
                    borderRadius: "50px",
                    backgroundColor: "white",
                    color: "black",
                  }}
                  value={amount}
                  onChange={handleAmountChange}
                  required
                />
                <div className={styles.error}>{AmountError}</div>

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
                            color: "#4CCD99",
                          }}>
                          {" "}
                          the terms of payment and donate policy.
                        </a>
                      </>
                    }
                    required
                  />
                </Form.Group>
                <div>
                  <button
                    onClick={() => setShowModal(true)}
                    className="animate__animated animate__slideInUp"
                    type="submit"
                    style={{
                      margin: "auto",
                      padding: "6px 8px",
                      border: "3px solid #007F73",
                      borderRadius: "50px",
                      color: "white",
                      backgroundColor: "#4CCD99",
                      marginBottom: "20px",
                      fontWeight: "bold",
                    }}>
                    Submit
                  </button>
                  {showModal && (
                    <MyModal onClick={() => setShowModal(!showModal)} />
                  )}
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>

      {/* Copied text */}
      {copiedText && (
        <div style={{textAlign: "center", marginTop: "10px"}}>
          <p style={{color: "white"}}>Copied: {copiedText}</p>
        </div>
      )}
    </>
  );
}

export default Welcome;
