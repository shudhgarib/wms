import axios from "axios";
import React, {useEffect, useState} from "react";
import MyModal from "./ShowModal";
import Form from "react-bootstrap/Form";
import "./Welcome.css";
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

function Welcome() {
  const [showModal, setShowModal] = useState(false);
  const closeModal = () => setShowModal(false);

  const [utrno, setUtrno] = useState("");
  const [deposit_proof, setDeposit_proof] = useState("");
  const [amount, setAmount] = useState("");
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

  const handleCopy = (text) => {
    navigator.clipboard.writeText(text);
    setCopiedText(text); // Update state with copied text
  };

  const handleItemClick = (item) => {
    setBankData(item); // Update bank data when an item is clicked
  };

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
              <span>IFCS Code : </span>{" "}
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
                <input
                  type="text"
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
                  onChange={(e) => setUtrno(e.target.value)}
                  required
                />
                <label
                  htmlFor=""
                  className="animate__animated animate__slideInRight ">
                  Upload Your Payment Proof <sup style={{color: "red"}}>*</sup>
                </label>
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
                  value={deposit_proof}
                  onChange={(e) => setDeposit_proof(e.target.value)}
                  required
                />
                <label
                  htmlFor=""
                  className="animate__animated animate__slideInRight ">
                  Amount <sup style={{color: "red"}}>*</sup>
                </label>
                <input
                  type="number"
                  className="form-control"
                  placeholder="Enter Amount"
                  style={{
                    padding: "7px",
                    border: "2px solid #007F73",
                    borderRadius: "50px",
                    backgroundColor: "white",
                    color: "black",
                  }}
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                  required
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
