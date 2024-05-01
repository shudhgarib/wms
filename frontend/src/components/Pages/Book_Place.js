import React from "react";
import {Button} from "react-bootstrap";

const Book_Place = () => {
  return (
    <div
      className="container"
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        margin: "auto",
        maxWidth: "50%",
        border: "2px solid #4CCD99",
        borderRadius: "20px",
        boxShadow: "5px 5px 20px #4CCD99, -2px -2px 0px #4CCD99",
        overflow: "hidden",
      }}>
      <input
        className="animate__animated animate__zoomIn"
        style={{
          border: "2px solid #fff",
          borderRadius: "30px",
          maxWidth: "100%",
          margin: "10px",
          paddingLeft: "5px",
        }}
        type="number"
        placeholder="Enter number of members for pooja."
      />
      <Button
        className="animate__animated animate__bounceInLeft"
        type="submit"
        style={{
          backgroundColor: "#4CCD99",
          border: "none",
          display: "flex",
          marginBottom: "10px",
          borderRadius: "30px",
          fontWeight: "bold",
        }}>
        Book
      </Button>
    </div>
  );
};

export default Book_Place;
