import React, {useState} from "react";
import Styles from "./Gallery.module.css";
import {Link} from "react-router-dom";
export const NextGallery = () => {
  const [images, setImages] = useState([
    {id: 16, src: "../assets/images/mg16.jpg", caption: "Image 16"},
    {id: 17, src: "../assets/images/mg17.jpg", caption: "Image 17"},
    {id: 18, src: "../assets/images/mg18.jpg", caption: "Image 18"},
    {id: 19, src: "../assets/images/mg19.jpg", caption: "Image 19"},
    {id: 20, src: "../assets/images/mg20.jpg", caption: "Image 20"},
    {id: 21, src: "../assets/images/mg21.jpg", caption: "Image 21"},
    {id: 22, src: "../assets/images/gallery01.jpg", caption: "Image 22"},
    {id: 23, src: "../assets/images/gallery02.jpg", caption: "Image 23"},
    {id: 24, src: "../assets/images/gallery03.jpg", caption: "Image 24"},
    {id: 25, src: "../assets/images/gallery04.jpg", caption: "Image 25"},
    {id: 26, src: "../assets/images/gallery05.jpg", caption: "Image 26"},
    {id: 28, src: "../assets/images/gallery07.jpg", caption: "Image 28"},
    {id: 29, src: "../assets/images/gallery08.jpg", caption: "Image 29"},
    {id: 30, src: "../assets/images/gallery09.jpg", caption: "Image 30"},
    {id: 33, src: "../assets/images/gallery012.jpg", caption: "Image 33"},
    {id: 34, src: "../assets/images/gallery013.jpg", caption: "Image 34"},
    {id: 34, src: "../assets/images/gallery014.jpg", caption: "Image 34"},
    {id: 27, src: "../assets/images/gallery06.jpg", caption: "Image 27"},
    {id: 32, src: "../assets/images/gallery011.jpg", caption: "Image 32"},
  ]);
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageClick = (image) => {
    setSelectedImage(image);
  };

  return (
    <div>
      <h1
        className="animate__animated animate__zoomIn"
        style={{
          textAlign: "center",
          marginTop: "20px",
          color: "white",
        }}>
        Gallery
      </h1>
      <div className={Styles.gallery}>
        {images.map((image) => (
          <img
            key={image.id}
            src={image.src}
            alt={image.caption}
            onClick={() => handleImageClick(image)}
          />
        ))}
      </div>
      {selectedImage && (
        <div className={Styles.modal}>
          <div className={Styles.modal_content}>
            <img src={selectedImage.src} alt={selectedImage.caption} />
            <p>{selectedImage.caption}</p>
            <button onClick={() => setSelectedImage(null)}>Close</button>
          </div>
        </div>
      )}
      <Link
        to="/Pages/Gallery"
        style={{
          display: "flex",
          justifyContent: "center",
          margin: "20px",
          textDecoration: "none",
        }}>
        <button
          className={Styles.btn}
          style={{
            padding: "0 5px",
            border: "2px solid gray",
            borderRadius: "10px",
            color: "white",
            backgroundColor: "#C5C9ED",
            fontWeight: "bold",
          }}>
          Previous
        </button>
      </Link>
    </div>
  );
};
