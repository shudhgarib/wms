import React, {useEffect, useState} from "react";
import axios from "axios";
import Table from "react-bootstrap/Table";
import {Link, useNavigate} from "react-router-dom";

function DonorsDetails() {
  const [donors, setDonors] = useState([]);
  const [userNames, setUserNames] = useState([]);
  const navigate = useNavigate();

  // Function to format date as "dd-mm-yyyy"
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const day = date.getDate().toString().padStart(2, "0");
    const month = (date.getMonth() + 1).toString().padStart(2, "0");
    const year = date.getFullYear();
    return `${day}-${month}-${year}`;
  };

  // Fetch donor names
  useEffect(() => {
    axios
      .get("http://localhost:8081/donar-name")
      .then((res) => setUserNames(res.data))
      .catch((err) => console.log(err));
  }, []);

  // Fetch donor details
  useEffect(() => {
    axios
      .get("http://localhost:8081/donar-details")
      .then((res) => setDonors(res.data))
      .catch((err) => console.log(err));
  }, []);

  // Function to delete a donor
  const handleDelete = (index) => {
    const updatedDonors = donors.filter((_, i) => i !== index);
    setDonors(updatedDonors);
    // You can also send a delete request to the server here if needed
  };

  // Function to add donor data to another page
  const handleAddToAnotherPage = (donorData) => {
    // For example, using localStorage to transfer data
    localStorage.setItem("selectedDonor", JSON.stringify(donorData));
    // Then navigate to the other page
    navigate("/another-page"); // Ensure you have this route configured
  };

  return (
    <>
      <div
        style={{
          textAlign: "center",
          padding: "10px 50px",
          display: "flex",
          justifyContent: "center",
        }}>
        <div>
          <h3 style={{color: "white"}}>DONORS STATUS</h3>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>Name</th>
                <th>Address</th>
                <th>Amount</th>
                <th>Date</th>
                <th>UTR</th>
                <th>Deposit_Proof</th>
                <th>Acc No</th>
                <th colSpan={2}>Action</th>
              </tr>
            </thead>
            <tbody>
              {donors?.map((data, index) => (
                <tr key={index}>
                  <td>
                    {userNames.map((userName, idx) => (
                      <li key={idx}>{userName.name}</li>
                    ))}
                  </td>
                  <td>
                    {userNames.map((userName, idx) => (
                      <li key={idx}>{userName.address}</li>
                    ))}
                  </td>
                  <td>{data.amount}</td>
                  <td>{formatDate(data.date)}</td>
                  <td>{data.utrno}</td>
                  <td>Image here</td>
                  <td>{data.accno}</td>
                  <td>
                    <input
                      type="button"
                      style={{background: "none", color: "red"}}
                      value={"❌"}
                      onClick={() => handleDelete(index)}
                    />
                  </td>
                  <td>
                    <input
                      type="button"
                      style={{background: "none", color: "green"}}
                      value={"➕"}
                      onClick={() => handleAddToAnotherPage(data)}
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </div>
      </div>
    </>
  );
}

export default DonorsDetails;
