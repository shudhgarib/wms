import React, {useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";
import axios from "axios";
import Table from "react-bootstrap/Table";

function Book_Place_Status() {
  const navigate = useNavigate();

  // Function to format date as "dd-mm-yyyy"
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const day = date.getDate().toString().padStart(2, "0");
    const month = (date.getMonth() + 1).toString().padStart(2, "0");
    const year = date.getFullYear();
    return `${day}-${month}-${year}`;
  };

  return (
    <div
      className="container mt-5"
      style={{
        textAlign: "center",
      }}>
      <h3 style={{color: "white"}}>PLACE RESERVATION STATUS</h3>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Name</th>
            <th>Candidates</th>
            <th>Contact NO.</th>
            <th>Date</th>
            <th colSpan={2}>Action</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td></td>

            <td></td>
            <td></td>
            <td></td>

            <td>
              <input
                type="button"
                style={{background: "none", color: "red"}}
                value={"Reject"}
              />
            </td>
            <td>
              <input
                type="button"
                style={{background: "none", color: "green"}}
                value={"Accept"}
              />
            </td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
}

export default Book_Place_Status;
