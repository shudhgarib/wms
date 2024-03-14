import React, {useState} from "react";
import styles from "./Home.module.css";

const images = [
  "../assets/images/slide01.jpg",
  "../assets/images/slide02.jpg",
  "../assets/images/slide03.jpg",
  "../assets/images/slide04.jpg",
  "../assets/images/slide05.jpg",
  "../assets/images/slide06.jpg",
  "../assets/images/slide07.jpg",
  "../assets/images/slide08.jpg",
  "../assets/images/slide09.jpg",
  "../assets/images/slide10.jpg",
  "../assets/images/slide11.jpg",
];

export const Home = () => {
  const [curr, setCurr] = useState(0);
  const nextSlide = () => {
    setCurr(curr === images.length - 1 ? 0 : curr + 1);
  };
  const prevSlide = () => {
    setCurr(curr === 0 ? images.length - 1 : curr - 1);
  };
  return (
    <>
      <div className="container my-5">
        <div className="row text-center">
          <div className="col-6">
            <div id="carouselExample" className="carousel slide">
              {images.map(
                (value, index) =>
                  curr === index && (
                    <div className="carousel-inner">
                      <div className="carousel-item active">
                        <div className={styles.slide_img}>
                          <img
                            src={value}
                            className="d-block w-100"
                            alt="..."
                          />
                        </div>
                      </div>
                    </div>
                  )
              )}

              <button
                className="carousel-control-prev"
                type="button"
                data-bs-target="#carouselExample"
                data-bs-slide="prev"
                onClick={prevSlide}>
                <span
                  className="carousel-control-prev-icon"
                  aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
              </button>
              <button
                className="carousel-control-next"
                type="button"
                data-bs-target="#carouselExample"
                data-bs-slide="next"
                onClick={nextSlide}>
                <span
                  className="carousel-control-next-icon"
                  aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
