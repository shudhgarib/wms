import React, {useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";
import axios from "axios";
import Table from "react-bootstrap/Table";

function Book_Place_Status() {
  const [placeReserve, setPlaceReserve] = useState([]);

  const navigate = useNavigate();

  // Function to format date as "dd-mm-yyyy"
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const day = date.getDate().toString().padStart(2, "0");
    const month = (date.getMonth() + 1).toString().padStart(2, "0");
    const year = date.getFullYear();
    return `${day}-${month}-${year}`;
  };

  // Fetch place_reserve details
  useEffect(() => {
    axios
      .get("http://localhost:8081/place-reservation")
      .then((res) => setPlaceReserve(res.data))
      .catch((err) => console.log(err));
  }, []);

  // Function to delete a place_reserve
  const handleDelete = (index) => {
    const updatedDonors = placeReserve.filter((_, i) => i !== index);
    setPlaceReserve(updatedDonors);
    // You can also send a delete request to the server here if needed
  };

  // Function to add place_reserve data to another page
  const handleAddToAnotherPage = (donorData) => {
    // For example, using localStorage to transfer data
    localStorage.setItem("selectedDonor", JSON.stringify(donorData));
    // Then navigate to the other page
    navigate("/another-page"); // Ensure you have this route configured
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
            <th>Contact NO.</th>
            <th>Candidates</th>
            <th>Date</th>
            <th colSpan={2}>Action</th>
          </tr>
        </thead>
        <tbody>
          {placeReserve?.map((place_reserve, index) => (
            <tr key={index}>
              <td>{place_reserve.name}</td>
              <td>{place_reserve.mobno}</td>
              <td>{place_reserve.no_of_candidates}</td>
              <td>{formatDate(place_reserve.date)}</td>
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
                  onClick={() => handleAddToAnotherPage(place_reserve)}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}

export default Book_Place_Status;
