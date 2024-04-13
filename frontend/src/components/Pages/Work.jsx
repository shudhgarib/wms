import React, {useState} from "react";
import MainPostContainer from "./Subpage/MainPostContainer";
import MainPostContainerSecond from "./Subpage/MainPostContainerSecond";

function Work() {
  const [year, setYear] = useState("2024");

  const handleYearChange = (selectedYear) => {
    setYear(selectedYear);
  };

  const baseStyles = {
    color: "blue",
  };

  return (
    <>
      <div className="container">
        <div
          className="container"
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}>
          {/* Heading code start */}
          <div
            className="heading"
            style={{
              display: "flex",
              float: "left",
              color: "#FFF455",
            }}>
            <h5 className="animate__animated animate__bounceInLeft">
              Committee - Members!
            </h5>
          </div>
          {/* Heading code end */}

          {/* dropdown code start */}
          <div
            className="select-button"
            style={{
              display: "flex",
            }}>
            <button className="buttons animate__animated animate__bounceInRight">
              ▼ &nbsp; {year}
            </button>
            <div
              className="dropdown-content"
              style={{
                cursor: "pointer",
                textAlign: "center",
              }}>
              <button
                id="top"
                onClick={() => handleYearChange("2024")}
                style={{backgroundColor: "#4CCD99", color: "#FFF455"}}>
                2024
              </button>
              <button
                onClick={() => handleYearChange("2023")}
                style={{backgroundColor: "#4CCD99", color: "#FFF455"}}>
                2023
              </button>
              <button
                id="bottom"
                onClick={() => handleYearChange("2022")}
                style={{backgroundColor: "#4CCD99", color: "#FFF455"}}>
                2022
              </button>
            </div>
          </div>
          {/* dropdown code end */}
        </div>
        <MainPostContainer year={year} />
        <MainPostContainerSecond year={year} />
      </div>
    </>
  );
}

export default Work;
