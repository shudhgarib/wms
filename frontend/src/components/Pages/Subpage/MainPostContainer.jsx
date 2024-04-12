import React, {useEffect, useState} from "react";

const MainPostContainer = ({year}) => {
  const [images, setImages] = useState([
    {id: 1, src: "../assets/images/satyamgray.png", caption: "अध्यक्ष"},
    {id: 2, src: "../assets/images/drugs.png", caption: "उपाध्यक्ष"},
    {id: 3, src: "../assets/images/golugray.png", caption: "कोषाध्यक्ष"},
  ]);
  useEffect(() => {
    console.log(year);
  }, [year]);
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageClick = (image) => {
    setSelectedImage(image);
  };

  return (
    <>
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
                  {images.map((image) => (
                    <div
                      className="content"
                      key={image.id}
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
                        }}
                        className="animate__animated animate__zoomIn"
                        src={image.src}
                        alt={image.caption}
                        onClick={() => handleImageClick(image)}
                      />
                      <p
                        class="animate__animated animate__rotateInUpLeft"
                        style={{
                          marginTop: "10px",
                          color: "#FFF455",
                        }}>
                        {image.caption}
                      </p>
                    </div>
                  ))}
                </div>
                {selectedImage && (
                  <div>
                    <div>
                      <img
                        src={selectedImage.src}
                        alt={selectedImage.caption}
                      />
                      <p>{selectedImage.caption}</p>
                      <button onClick={() => setSelectedImage(null)}>
                        Close
                      </button>
                    </div>
                  </div>
                )}
              </div>
            </div>{" "}
          </div>
        )}

        {year == "2023" && <div> "2023" </div>}

        {year == "2022" && <div> "2022" </div>}
      </div>
    </>
  );
};

export default MainPostContainer;
