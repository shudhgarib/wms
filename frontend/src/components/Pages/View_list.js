import React, {useEffect, useState} from "react";
import Table from "react-bootstrap/Table";
import Dropdown from "react-bootstrap/Dropdown";

const View_list = () => {
  const [data, setData] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedYear, setSelectedYear] = useState("2023");

  useEffect(() => {
    fetch(
      `http://localhost:8081/donor_list_${selectedYear}?year=${selectedYear}`
    )
      .then((res) => res.json())
      .then((data) => setData(data))
      .catch((err) => console.log(err));
  }, [selectedYear]);

  // Function to format date as "dd-mm-yyyy"
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const day = date.getDate().toString().padStart(2, "0");
    const month = (date.getMonth() + 1).toString().padStart(2, "0");
    const year = date.getFullYear();
    return `${day}-${month}-${year}`;
  };

  // Filter data based on search query
  const filteredData = data.filter((item) =>
    item.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <>
      <div
        className="container"
        style={{
          marginTop: "50px",
          marginBottom: "50px",
          fontFamily: "Poppins",
        }}>
        <div
          className="main"
          style={{
            display: "flex",
            backgroundColor: "white",
            justifyContent: "space-between",
            borderRadius: "20px 20px 0px 0px",
          }}>
          {/* Dropdown for selecting year */}
          <div className="dropdown mx-2 my-2">
            <Dropdown>
              <Dropdown.Toggle
                variant="success"
                id="dropdown-basic"
                style={{
                  backgroundColor: "white",
                  color: "black",
                  border: "none",
                  borderRadius: "40px",
                }}
                className="animate__animated animate__backInDown">
                {selectedYear}
              </Dropdown.Toggle>

              <Dropdown.Menu
                style={{
                  width: "10%",
                  textAlign: "center",
                }}>
                <Dropdown.Item onClick={() => setSelectedYear("2024")}>
                  2024
                </Dropdown.Item>
                <Dropdown.Item onClick={() => setSelectedYear("2023")}>
                  2023
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </div>

          {/* Search bar */}
          <div className="searchbar mx-2 my-2">
            <input
              type="text"
              placeholder="Search by name"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              style={{
                border: "none",
                textAlign: "center",
                borderRadius: "40px",
              }}
              className="animate__animated animate__backInDown"
            />
          </div>
        </div>

        {/* Table for displaying data */}
        <Table
          striped
          bordered
          hover
          style={{
            textAlign: "center",
            overflow: "hidden",
          }}>
          <thead>
            <tr className="animate__animated animate__zoomIn">
              <th>name</th>
              <th>amount</th>
              <th>place</th>
              <th>date</th>
            </tr>
          </thead>
          <tbody>
            {/* Map through filtered data to render rows */}
            {filteredData.map((d, i) => (
              <tr key={i}>
                {/* Render columns for each data item */}
                <td className="animate__animated animate__fadeInDownBig">
                  {d.name}
                </td>
                <td className="animate__animated animate__fadeInUpBig">
                  {d.amount}₹
                </td>
                <td className="animate__animated animate__fadeInDownBig">
                  {d.place}
                </td>
                {/* Format date column */}
                <td className="animate__animated animate__fadeInUpBig">
                  {formatDate(d.date)}
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    </>
  );
};

export default View_list;
