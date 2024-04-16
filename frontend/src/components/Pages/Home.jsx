import React, {useState} from "react";
import WelcomeText from "./Subpage/WelcomeText";
import Options from "../menu/Options";
<link rel="preconnect" href="https://fonts.googleapis.com"></link>;
// import ParticleRing from "./Subpage/ParticleRing";
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
      <div className="dragable-dropdown">
        <Options />
      </div>
      <div
        className="container"
        style={{
          display: "flex",
          justifyContent: "center",
          padding: "50px 0",
        }}>
        <div className="row text-center ">
          <div>
            <div
              id="carouselExample"
              className="carousel slide"
              style={{
                display: "flex",
                justifyContent: "center",
              }}>
              {images.map(
                (value, index) =>
                  curr === index && (
                    <div className="carousel-inner">
                      <div className="carousel-item active">
                        <img
                          src={value}
                          className="d-block w-100"
                          alt="..."
                          style={{
                            border: "5px solid #4CCD99",

                            borderRadius: "20px",
                          }}
                        />
                      </div>
                    </div>
                  )
              )}
            </div>
            <div
              className="button-designing"
              style={{
                display: "flex",
                justifyContent: "center",
              }}>
              <button
                style={{
                  backgroundColor: "#4CCD99",
                  width: "50px",
                  height: "50px",
                  display: "flex",
                  float: "left",
                  justifyContent: "space-around",
                  marginTop: "300px",
                  marginLeft: "150px",
                  border: "2px solid white",
                  borderRadius: "50px",
                }}
                className="carousel-control-prev"
                type="button"
                data-bs-target="#carouselExample"
                data-bs-slide="prev"
                onClick={prevSlide}>
                <span
                  className="carousel-control-prev-icon"
                  aria-hidden="true"></span>
                <span className="visually-hidden"></span>
              </button>
              <button
                style={{
                  backgroundColor: "#4CCD99",
                  width: "50px",
                  height: "50px",
                  display: "flex",
                  float: "right",
                  marginTop: "300px",
                  marginRight: "150px",
                  border: "2px solid white",
                  borderRadius: "50px",
                }}
                className="carousel-control-next"
                type="button"
                data-bs-target="#carouselExample"
                data-bs-slide="next"
                onClick={nextSlide}>
                <span
                  className="carousel-control-next-icon"
                  aria-hidden="true"></span>
                <span className="visually-hidden"></span>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div
        className="first_main"
        style={{
          display: "flex",
          justifyContent: "space-between",
          fontFamily: "Poppins",
          boxShadow: "5px 5px 10px #4CCD99, -5px -5px 10px #4CCD99",
          marginBottom: "20px",
        }}>
        <div
          className="section1"
          style={{
            marginTop: "50px",
            marginLeft: "20px",
            fontWeight: "bold",
          }}>
          <h1
            style={{
              fontWeight: "bold",
            }}
            class="animate__animated animate__backInLeft">
            Welcome To Our
          </h1>
        </div>
        <WelcomeText />
        <div
          className="section2"
          style={{
            marginRight: "20px",
            marginTop: "50px",
          }}>
          <h1
            style={{
              fontWeight: "bold",
            }}
            class="animate__animated animate__backInRight">
            Committee!
          </h1>
        </div>
      </div>
      {/*
      <div className="second_main">
        <ParticleRing />
</div>*/}
    </>
  );
};

export default Home;
