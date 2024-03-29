import React, {useState} from "react";
import Styles from "./Gallery.module.css";
import {Link, Route} from "react-router-dom";
import {NextGallery} from "./NextGallery";

export const Gallery = () => {
  const [images, setImages] = useState([
    {id: 1, src: "../assets/images/mg1.jpg", caption: "Image 1"},
    {id: 2, src: "../assets/images/mg2.jpg", caption: "Image 2"},
    {id: 3, src: "../assets/images/mg3.jpg", caption: "Image 3"},
    {id: 4, src: "../assets/images/mg4.jpg", caption: "Image 4"},
    {id: 5, src: "../assets/images/mg5.jpg", caption: "Image 5"},
    {id: 6, src: "../assets/images/mg6.jpg", caption: "Image 6"},
    {id: 7, src: "../assets/images/mg7.jpg", caption: "Image 7"},
    {id: 8, src: "../assets/images/mg8.jpg", caption: "Image 8"},
    {id: 9, src: "../assets/images/mg9.jpg", caption: "Image 9"},
    {id: 10, src: "../assets/images/mg10.jpg", caption: "Image 10"},
    {id: 11, src: "../assets/images/mg11.jpg", caption: "Image 11"},
    {id: 12, src: "../assets/images/mg12.jpg", caption: "Image 12"},
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

      <Link to="/NextGallery" className={Styles.btn}>
        <button>Next</button>
      </Link>
    </div>
  );
};
