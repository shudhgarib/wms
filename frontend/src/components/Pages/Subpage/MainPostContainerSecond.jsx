import React, {useState} from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const MainPostContainerSecond = () => {
  const [images, setImages] = useState([
    {id: 1, src: "../assets/images/sonu.png", caption: "उपकोषाध्यक्ष"},
    {id: 2, src: "../assets/images/malu.png", caption: "सचिव"},
    {id: 3, src: "../assets/images/b2.png", caption: "प्रबंधक"},
  ]);
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageClick = (image) => {
    setSelectedImage(image);
  };

  return (
    <>
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
                  padding: "5px",
                }}>
                <img
                  style={{
                    border: "7px solid #FFF455",
                    width: "100%",
                    borderRadius: "10px",
                    boxShadow: "-2px -2px 10px #4CCD99, 0 0 20px #4CCD99",
                  }}
                  className="animate__animated animate__zoomIn"
                  src={image.src}
                  alt={image.caption}
                  onClick={() => handleImageClick(image)}
                />
                <p
                  class="animate__animated animate__rotateInUpRight"
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
                <img src={selectedImage.src} alt={selectedImage.caption} />
                <p>{selectedImage.caption}</p>
                <button onClick={() => setSelectedImage(null)}>Close</button>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default MainPostContainerSecond;
