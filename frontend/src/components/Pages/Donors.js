import React, {useEffect, useState} from "react";
import axios from "axios";

function DonorsDetails() {
  const [donors, setDonors] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:8081/")
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
            </tr>
          </thead>
          <tbody>
            {donors.map((data, i) => (
              <tr key={i}>
                <td>{data.utrno}</td>
                <td>{data.deposit_proof}</td>
                <td>{data.amount}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
export default DonorsDetails;
