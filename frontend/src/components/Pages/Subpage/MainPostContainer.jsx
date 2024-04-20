import React, {useEffect, useState} from "react";

const MainPostContainer = ({year}) => {
  {
    /* 2024 code start */
  }

  const [images2024, setImages2024] = useState([
    {id: 1, src: "../assets/images/satyamgray.png", caption: "अध्यक्ष"},
    {id: 2, src: "../assets/images/drugs.png", caption: "उपाध्यक्ष"},
    {id: 3, src: "../assets/images/golugray.png", caption: "कोषाध्यक्ष"},
  ]);
  useEffect(() => {
    console.log(year);
  }, [year]);
  const [selectedImage2024, setSelectedImage2024] = useState(null);

  const handleImageClick2024 = (image2024) => {
    setSelectedImage2024(image2024);
  };

  {
    /* 2023 code start */
  }
  const [images2023, setImages2023] = useState([
    {id: 1, src: "../assets/images/satyamgray.png", caption: "अध्यक्ष"},
    {id: 2, src: "../assets/images/satyamgray.png", caption: "उपाध्यक्ष"},
    {id: 3, src: "../assets/images/satyamgray.png", caption: "कोषाध्यक्ष"},
  ]);
  useEffect(() => {
    console.log(year);
  }, [year]);
  const [selectedImage2023, setSelectedImage2023] = useState(null);

  const handleImageClick2023 = (image2023) => {
    setSelectedImage2023(image2023);
  };
  {
    /* 2022 code start */
  }

  const [images2022, setImages2022] = useState([
    {id: 1, src: "../assets/images/golugray.png", caption: "अध्यक्ष"},
    {id: 2, src: "../assets/images/golugray.png", caption: "उपाध्यक्ष"},
    {id: 3, src: "../assets/images/golugray.png", caption: "कोषाध्यक्ष"},
  ]);
  useEffect(() => {
    console.log(year);
  }, [year]);
  const [selectedImage2022, setSelectedImage2022] = useState(null);

  const handleImageClick2022 = (image2022) => {
    setSelectedImage2022(image2022);
  };

  return (
    <>
      {/* 2024 code start */}
      <div>
        {year == "2024" && (
          <div>
            {" "}
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
                        marginTop: "20px",
                        padding: "5px",
                      }}>
                      <img
                        style={{
                          border: "5px solid #e7e07a",
                          width: "100%",
                          borderRadius: "100%",
                          boxShadow: "-2px -2px 10px #4CCD99, 0 0 20px #4CCD99",
                          cursor: "pointer",
                        }}
                        className="animate__animated animate__zoomIn"
                        src={image2024.src}
                        alt={image2024.caption}
                        onClick={() => handleImageClick2024(image2024)}
                      />
                      <p
                        class="animate__animated animate__rotateInUpLeft"
                        style={{
                          marginTop: "10px",
                          color: "#FFF455",
                        }}>
                        {image2024.caption}
                      </p>
                    </div>
                  ))}
                </div>
                {/* committee member details */}
                {selectedImage2024 && (
                  <div
                    className="profile"
                    style={{
                      display: "flex",
                      justifyContent: "center",
                    }}>
                    <div
                      style={{
                        border: "3px solid #FFF455",
                        borderRadius: "10px 0px 0 10px ",
                        padding: "10px",
                        margin: "10px 0",
                        backgroundColor: "transparent",
                      }}>
                      <img
                        src={selectedImage2024.src}
                        alt={selectedImage2024.caption}
                        style={{
                          fontSize: "30px",
                          fontWeight: "bold",
                          border: "3px solid #FFF455",
                          borderRadius: "10px",
                          backgroundColor: "transparent",
                        }}
                      />
                      <p
                        style={{
                          fontSize: "30px",
                          fontWeight: "bold",
                          color: "black",
                        }}>
                        {selectedImage2024.caption}
                      </p>
                      <button
                        onClick={() => setSelectedImage2024(null)}
                        style={{
                          padding: "5px",
                          border: "3px solid transparent",
                          borderRadius: "10px",
                          background: "red",
                          color: "black",
                          width: "100%",
                          textAlign: "center",
                          padding: "10px",
                          fontSize: "20px",
                          fontWeight: "bold",
                        }}>
                        Close
                      </button>
                    </div>

                    {/* social media handles */}
                    <div
                      className="social"
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "space-around",
                        border: "5px solid #FFF455",
                        borderRadius: "0 10px 10px 0",
                        padding: "15px",
                        margin: "10px 0",
                      }}>
                      <a href="google.com">
                        {" "}
                        <img
                          width="50"
                          height="50"
                          src="https://img.icons8.com/ios/50/whatsapp--v1.png"
                          alt="whatsapp--v1"
                        />
                      </a>

                      <a href="google.com">
                        {" "}
                        <img
                          width="50"
                          height="50"
                          src="https://img.icons8.com/ios/50/facebook-new.png"
                          alt="facebook-new"
                        />
                      </a>

                      <a href="google.com">
                        {" "}
                        <img
                          width="50"
                          height="50"
                          src="https://img.icons8.com/ios/50/instagram-new--v1.png"
                          alt="instagram-new--v1"
                        />
                      </a>
                    </div>
                  </div>
                )}
              </div>
            </div>{" "}
          </div>
        )}
      </div>

      {/* 2023 code start */}
      <div>
        {year == "2023" && (
          <div>
            {" "}
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
                        marginTop: "20px",
                        padding: "5px",
                      }}>
                      <img
                        style={{
                          border: "5px solid #e7e07a",
                          width: "100%",
                          borderRadius: "100%",
                          boxShadow: "-2px -2px 10px #4CCD99, 0 0 20px #4CCD99",
                          cursor: "pointer",
                        }}
                        className="animate__animated animate__zoomIn"
                        src={image2023.src}
                        alt={image2023.caption}
                        onClick={() => handleImageClick2023(image2023)}
                      />
                      <p
                        class="animate__animated animate__rotateInUpLeft"
                        style={{
                          marginTop: "10px",
                          color: "#FFF455",
                        }}>
                        {image2023.caption}
                      </p>
                    </div>
                  ))}
                </div>
                {/* committee member details */}
                {selectedImage2023 && (
                  <div
                    className="profile"
                    style={{
                      display: "flex",
                      justifyContent: "center",
                    }}>
                    <div
                      style={{
                        border: "3px solid #FFF455",
                        borderRadius: "10px 0px 0 10px ",
                        padding: "10px",
                        margin: "10px 0",
                        backgroundColor: "transparent",
                      }}>
                      <img
                        src={selectedImage2023.src}
                        alt={selectedImage2023.caption}
                        style={{
                          fontSize: "30px",
                          fontWeight: "bold",
                          border: "3px solid #FFF455",
                          borderRadius: "10px",
                          backgroundColor: "transparent",
                        }}
                      />
                      <p
                        style={{
                          fontSize: "30px",
                          fontWeight: "bold",
                          color: "black",
                        }}>
                        {selectedImage2023.caption}
                      </p>
                      <button
                        onClick={() => setSelectedImage2023(null)}
                        style={{
                          padding: "5px",
                          border: "3px solid transparent",
                          borderRadius: "10px",
                          background: "red",
                          color: "black",
                          width: "100%",
                          textAlign: "center",
                          padding: "10px",
                          fontSize: "20px",
                          fontWeight: "bold",
                        }}>
                        Close
                      </button>
                    </div>

                    {/* social media handles */}
                    <div
                      className="social"
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "space-around",
                        border: "5px solid #FFF455",
                        borderRadius: "0 10px 10px 0",
                        padding: "15px",
                        margin: "10px 0",
                      }}>
                      <a href="google.com">
                        {" "}
                        <img
                          width="50"
                          height="50"
                          src="https://img.icons8.com/ios/50/whatsapp--v1.png"
                          alt="whatsapp--v1"
                        />
                      </a>

                      <a href="google.com">
                        {" "}
                        <img
                          width="50"
                          height="50"
                          src="https://img.icons8.com/ios/50/facebook-new.png"
                          alt="facebook-new"
                        />
                      </a>

                      <a href="google.com">
                        {" "}
                        <img
                          width="50"
                          height="50"
                          src="https://img.icons8.com/ios/50/instagram-new--v1.png"
                          alt="instagram-new--v1"
                        />
                      </a>
                    </div>
                  </div>
                )}
              </div>
            </div>{" "}
          </div>
        )}
      </div>
      {/* 2022 code start */}
      <div>
        {year == "2022" && (
          <div>
            {" "}
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
                        marginTop: "20px",
                        padding: "5px",
                      }}>
                      <img
                        style={{
                          border: "5px solid #e7e07a",
                          width: "100%",
                          borderRadius: "100%",
                          boxShadow: "-2px -2px 10px #4CCD99, 0 0 20px #4CCD99",
                          cursor: "pointer",
                        }}
                        className="animate__animated animate__zoomIn"
                        src={image2022.src}
                        alt={image2022.caption}
                        onClick={() => handleImageClick2022(image2022)}
                      />
                      <p
                        class="animate__animated animate__rotateInUpLeft"
                        style={{
                          marginTop: "10px",
                          color: "#FFF455",
                        }}>
                        {image2022.caption}
                      </p>
                    </div>
                  ))}
                </div>
                {/* committee member details */}
                {selectedImage2022 && (
                  <div
                    className="profile"
                    style={{
                      display: "flex",
                      justifyContent: "center",
                    }}>
                    <div
                      style={{
                        border: "3px solid #FFF455",
                        borderRadius: "10px 0px 0 10px ",
                        padding: "10px",
                        margin: "10px 0",
                        backgroundColor: "transparent",
                      }}>
                      <img
                        src={selectedImage2022.src}
                        alt={selectedImage2022.caption}
                        style={{
                          fontSize: "30px",
                          fontWeight: "bold",
                          border: "3px solid #FFF455",
                          borderRadius: "10px",
                          backgroundColor: "transparent",
                        }}
                      />
                      <p
                        style={{
                          fontSize: "30px",
                          fontWeight: "bold",
                          color: "black",
                        }}>
                        {selectedImage2022.caption}
                      </p>
                      <button
                        onClick={() => setSelectedImage2022(null)}
                        style={{
                          padding: "5px",
                          border: "3px solid transparent",
                          borderRadius: "10px",
                          background: "red",
                          color: "black",
                          width: "100%",
                          textAlign: "center",
                          padding: "10px",
                          fontSize: "20px",
                          fontWeight: "bold",
                        }}>
                        Close
                      </button>
                    </div>

                    {/* social media handles */}
                    <div
                      className="social"
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "space-around",
                        border: "5px solid #FFF455",
                        borderRadius: "0 10px 10px 0",
                        padding: "15px",
                        margin: "10px 0",
                      }}>
                      <a href="google.com">
                        {" "}
                        <img
                          width="50"
                          height="50"
                          src="https://img.icons8.com/ios/50/whatsapp--v1.png"
                          alt="whatsapp--v1"
                        />
                      </a>

                      <a href="google.com">
                        {" "}
                        <img
                          width="50"
                          height="50"
                          src="https://img.icons8.com/ios/50/facebook-new.png"
                          alt="facebook-new"
                        />
                      </a>

                      <a href="google.com">
                        {" "}
                        <img
                          width="50"
                          height="50"
                          src="https://img.icons8.com/ios/50/instagram-new--v1.png"
                          alt="instagram-new--v1"
                        />
                      </a>
                    </div>
                  </div>
                )}
              </div>
            </div>{" "}
          </div>
        )}
      </div>
    </>
  );
};

export default MainPostContainer;
