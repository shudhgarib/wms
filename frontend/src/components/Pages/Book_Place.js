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
        height: "80vh",
      }}>
      <input
        type="number"
        placeholder="Enter number of members for pooja."
        style={{
          marginBottom: "20px",
          padding: "10px",
        }}
      />
      <Button variant="primary" type="submit">
        Book
      </Button>
    </div>
  );
};

export default Book_Place;
