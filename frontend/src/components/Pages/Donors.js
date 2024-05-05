import React, {useEffect, useState} from "react";
import axios from "axios";
import Table from "react-bootstrap/Table";
import {Link} from "react-router-dom";

function DonorsDetails() {
  const [donors, setDonors] = useState([]);
  const [data, setData] = useState([]);

  // Function to format date as "dd-mm-yyyy"
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const day = date.getDate().toString().padStart(2, "0");
    const month = (date.getMonth() + 1).toString().padStart(2, "0");
    const year = date.getFullYear();
    return `${day}-${month}-${year}`;
  };

  useEffect(() => {
    axios
      .get("http://localhost:8081/donar-details")
      .then((res) => setDonors(res.data))
      .catch((err) => console.log(err));
  }, []);

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
          <Link
            to="/add-donor"
            className="btn mb-3 animate__animated animate__zoomIn"
            style={{
              borderRadius: "100%",
              background: "white",
              margin: "5px",
              color: "violet",
              fontWeight: "bold",
            }}>
            +
          </Link>
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
              {console.log(donors, 26, "Donors.js")}
              {donors?.map((data, index) => (
                <tr key={index}>
                  <td>{data.name}</td>
                  <td>{data.address}</td>
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
                    />
                  </td>
                  <td>
                    <input
                      type="button"
                      style={{background: "none", color: "green"}}
                      value={"➕"}
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
