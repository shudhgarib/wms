import React, {useEffect, useState} from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const MainPostContainerSecond = ({year}) => {
  {
    /* 2024 code start */
  }
  const [images2024, setImages2024] = useState([
    {id: 1, src: "../assets/images/sonu.png", caption: "उपकोषाध्यक्ष"},
    {id: 2, src: "../assets/images/malu.png", caption: "सचिव"},
    {id: 3, src: "../assets/images/b2.png", caption: "प्रबंधक"},
  ]);

  useEffect(() => {
    console.log(year);
  }, [year]);

  const [selectedImage2024, setSelectedImage2024] = useState(null);

  const handleImageClick2024 = (image2024) => {
    setSelectedImage2024(image2024);
  };
  {
    /* 2024 code end */
  }

  {
    /* 2023 code start */
  }

  const [images2023, setImages2023] = useState([
    {id: 1, src: "../assets/images/malu.png", caption: "उपकोषाध्यक्ष"},
    {id: 2, src: "../assets/images/malu.png", caption: "सचिव"},
    {id: 3, src: "../assets/images/malu.png", caption: "प्रबंधक"},
  ]);

  useEffect(() => {
    console.log(year);
  }, [year]);

  const [selectedImage2023, setSelectedImage2023] = useState(null);

  const handleImageClick2023 = (image2023) => {
    setSelectedImage2023(image2023);
  };
  {
    /* 2023 code end */
  }

  {
    /* 2022 code start */
  }

  const [images2022, setImages2022] = useState([
    {id: 1, src: "../assets/images/b2.png", caption: "उपकोषाध्यक्ष"},
    {id: 2, src: "../assets/images/b2.png", caption: "सचिव"},
    {id: 3, src: "../assets/images/b2.png", caption: "प्रबंधक"},
  ]);

  useEffect(() => {
    console.log(year);
  }, [year]);

  const [selectedImage2022, setSelectedImage2022] = useState(null);

  const handleImageClick2022 = (image2022) => {
    setSelectedImage2022(image2022);
  };
  {
    /* 2022 code start */
  }

  return (
    <>
      {/* 2024 code start */}

      {year == "2024" && (
        <div className="main">
          <div className="container">
            <div
              className="main-content"
              style={{
                display: "flex",
                flexDirection: "row",
              }}>
              {images2024.map((image2024) => (
                <div
                  className="content"
                  key={image2024.id}
                  style={{
                    padding: "5px",
                  }}>
                  <img
                    style={{
                      border: "5px solid #e7e07a",
                      width: "100%",
                      borderRadius: "10px",
                      boxShadow: "-2px -2px 10px #4CCD99, 0 0 20px #4CCD99",
                    }}
                    className="animate__animated animate__zoomIn"
                    src={image2024.src}
                    alt={image2024.caption}
                    onClick={() => handleImageClick2024(image2024)}
                  />
                  <p
                    className="animate__animated animate__rotateInUpRight"
                    style={{
                      marginTop: "10px",
                      color: "#FFF455",
                    }}>
                    {image2024.caption}
                  </p>
                </div>
              ))}
            </div>
            {selectedImage2024 && (
              <div>
                <div>
                  <img
                    src={selectedImage2024.src}
                    alt={selectedImage2024.caption}
                  />
                  <p>{selectedImage2024.caption}</p>
                  <button onClick={() => setSelectedImage2024(null)}>
                    Close
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
      {/* 2023 code start  */}

      {year == "2023" && (
        <div className="main">
          <div className="container">
            <div
              className="main-content"
              style={{
                display: "flex",
                flexDirection: "row",
              }}>
              {images2023.map((image2023) => (
                <div
                  className="content"
                  key={image2023.id}
                  style={{
                    padding: "5px",
                  }}>
                  <img
                    style={{
                      border: "5px solid #e7e07a",
                      width: "100%",
                      borderRadius: "10px",
                      boxShadow: "-2px -2px 10px #4CCD99, 0 0 20px #4CCD99",
                    }}
                    className="animate__animated animate__zoomIn"
                    src={image2023.src}
                    alt={image2023.caption}
                    onClick={() => handleImageClick2023(image2023)}
                  />
                  <p
                    className="animate__animated animate__rotateInUpRight"
                    style={{
                      marginTop: "10px",
                      color: "#FFF455",
                    }}>
                    {image2023.caption}
                  </p>
                </div>
              ))}
            </div>
            {selectedImage2023 && (
              <div>
                <div>
                  <img
                    src={selectedImage2023.src}
                    alt={selectedImage2023.caption}
                  />
                  <p>{selectedImage2023.caption}</p>
                  <button onClick={() => setSelectedImage2023(null)}>
                    Close
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
      {/* 2022 code start  */}

      {year == "2022" && (
        <div className="main">
          <div className="container">
            <div
              className="main-content"
              style={{
                display: "flex",
                flexDirection: "row",
              }}>
              {images2022.map((image2022) => (
                <div
                  className="content"
                  key={image2022.id}
                  style={{
                    padding: "5px",
                  }}>
                  <img
                    style={{
                      border: "5px solid #e7e07a",
                      width: "100%",
                      borderRadius: "10px",
                      boxShadow: "-2px -2px 10px #4CCD99, 0 0 20px #4CCD99",
                    }}
                    className="animate__animated animate__zoomIn"
                    src={image2022.src}
                    alt={image2022.caption}
                    onClick={() => handleImageClick2022(image2022)}
                  />
                  <p
                    className="animate__animated animate__rotateInUpRight"
                    style={{
                      marginTop: "10px",
                      color: "#FFF455",
                    }}>
                    {image2022.caption}
                  </p>
                </div>
              ))}
            </div>
            {selectedImage2022 && (
              <div>
                <div>
                  <img
                    src={selectedImage2022.src}
                    alt={selectedImage2022.caption}
                  />
                  <p>{selectedImage2022.caption}</p>
                  <button onClick={() => setSelectedImage2022(null)}>
                    Close
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default MainPostContainerSecond;
