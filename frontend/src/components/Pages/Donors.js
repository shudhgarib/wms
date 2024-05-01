import React, {useEffect, useState} from "react";
import axios from "axios";

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
    <div className="d-flex vh-100 bg-primary justify-content-center align-item-center">
      <div className="w-50 bg-white rounded p-3">
        <button className="btn btn-success">Add +</button>
        <table className="table">
          <thead>
            <tr>
              <th>UTR</th>
              <th>Deposit-Proof</th>
              <th>Amount</th>
              <th>Date</th>
              <th>Acc No</th>
            </tr>
          </thead>
          <tbody>
            {console.log(donors, 26, "Donors.js")}
            {donors?.map((data, index) => (
              <tr key={index}>
                <td>{data.utrno}</td>
                <td>Image here</td>
                <td>{data.amount}</td>
                <td>{formatDate(data.date)}</td>
                <td>{data.accno}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
export default DonorsDetails;
