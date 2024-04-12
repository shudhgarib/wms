import MainPostContainer from "./Subpage/MainPostContainer";
import MainPostContainerSecond from "./Subpage/MainPostContainerSecond";
import Dropdown from "./Subpage/Dropdown";
import {useState} from "react";

function Work() {
  const [year, setYear] = useState("2024");
  return (
    <>
      <div className="container">
        <div
          className="container"
          style={{
            display: "flex",
            justifyContent: "space-around",
            alignItems: "center",
          }}>
          <div
            className="heading"
            style={{
              display: "flex",
              float: "left",
              color: "#FFF455",
            }}>
            <h5 class="animate__animated animate__bounceInLeft">
              Committee - Members!
            </h5>
          </div>

          <div
            className="select-button"
            style={{
              display: "flex",
            }}>
            <button className="buttons animate__animated animate__bounceInRight">
              ▼ &nbsp; Select
            </button>
            <div className="dropdown-content" style={{cursor: "pointer"}}>
              <button
                id="top"
                onClick={() => {
                  setYear("2024");
                }}>
                2024
              </button>
              <button
                onClick={() => {
                  setYear("2023");
                }}>
                2023{" "}
              </button>
              <button
                id="bottom"
                onClick={() => {
                  setYear("2022");
                }}>
                2022
              </button>
            </div>
          </div>
        </div>
        <MainPostContainer year={year} />
        <MainPostContainerSecond />
      </div>
    </>
  );
}

export default Work;
