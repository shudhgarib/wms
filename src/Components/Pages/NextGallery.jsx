import React, {useState} from "react";
import Styles from "./Gallery.module.css";
import {Link} from "react-router-dom";

export const NextGallery = () => {
  const [images, setImages] = useState([
    {id: 13, src: "../assets/images/mg13.jpg", caption: "Image 13"},
    {id: 14, src: "../assets/images/mg14.jpg", caption: "Image 14"},
    {id: 15, src: "../assets/images/mg15.jpg", caption: "Image 15"},
    {id: 16, src: "../assets/images/mg16.jpg", caption: "Image 16"},
    {id: 17, src: "../assets/images/mg17.jpg", caption: "Image 17"},
    {id: 18, src: "../assets/images/mg18.jpg", caption: "Image 18"},
    {id: 19, src: "../assets/images/mg19.jpg", caption: "Image 19"},
    {id: 20, src: "../assets/images/mg20.jpg", caption: "Image 20"},
    {id: 21, src: "../assets/images/mg21.jpg", caption: "Image 21"},
  ]);
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageClick = (image) => {
    setSelectedImage(image);
  };

  return (
    <div>
      <h1 className={Styles.heading}>Gallery</h1>
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
      <Link to="/Gallery" className={Styles.btn}>
        <button>Previous</button>
      </Link>
    </div>
  );
};
