import React, {useEffect, useState} from "react";
import Table from "react-bootstrap/Table";
import Dropdown from "react-bootstrap/Dropdown";

const View_list = () => {
  const [data, setData] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    fetch("http://localhost:8081/donor_list")
      .then((res) => res.json())
      .then((data) => setData(data))
      .catch((err) => console.log(err));
  }, []);

  // search bar code start
  const filteredData = data.filter((item) =>
    item.name.toLowerCase().includes(searchQuery.toLowerCase())
  );
  // search bar code end

  return (
    <>
      <div
        className="container"
        style={{
          marginTop: "50px",
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
          {/* dropdown start */}
          <div className="dropdown">
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
                Select Year
              </Dropdown.Toggle>

              <Dropdown.Menu
                style={{
                  width: "10%",
                  textAlign: "center",
                }}>
                <Dropdown.Item href="#/action-1">2024</Dropdown.Item>
                <Dropdown.Item href="#/action-2">2023</Dropdown.Item>
                <Dropdown.Item href="#/action-3">2022</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </div>
          {/* dropdown end */}
          {/* Search bar start*/}

          <div className="searchbar">
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
        {/* Search bar end */}

        {/* Table start*/}
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
            {filteredData.map((d, i) => (
              <tr key={i}>
                <td className="animate__animated animate__fadeInDownBig">
                  {d.name}
                </td>
                <td className="animate__animated animate__fadeInUpBig">
                  {d.amount}₹
                </td>
                <td className="animate__animated animate__fadeInDownBig">
                  {d.place}
                </td>
                <td className="animate__animated animate__fadeInUpBig">
                  {d.date}
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
        {/* Table end*/}
      </div>
    </>
  );
};

export default View_list;
