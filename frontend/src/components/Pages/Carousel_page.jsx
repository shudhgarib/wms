import React from "react";
import Carousel from "react-bootstrap/Carousel";
import slide01 from "./carousel_images/slide01.jpg";
import slide02 from "./carousel_images/slide02.jpg";
import slide03 from "./carousel_images/slide03.jpg";
import slide04 from "./carousel_images/slide04.jpg";
import slide05 from "./carousel_images/slide05.jpg";
import slide06 from "./carousel_images/slide06.jpg";
import slide07 from "./carousel_images/slide07.jpg";
import slide08 from "./carousel_images/slide08.jpg";
import slide09 from "./carousel_images/slide09.jpg";
import slide10 from "./carousel_images/slide10.jpg";
import slide11 from "./carousel_images/slide11.jpg";
import "./Carousel_page.css";
function Carousel_page() {
  return (
    <>
      <div className="container">
        <div className="carousel">
          <Carousel>
            <Carousel.Item>
              <img className="d-block " src={slide01} alt="first slide" />
              <Carousel.Caption>
                <h3>छठव्रती!</h3>
              </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
              <img className="d-block " src={slide02} alt="first slide" />
              <Carousel.Caption>
                <h3>सूर्यदेव को अर्घ्य देते छठव्रती !</h3>
              </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
              <img className="d-block " src={slide03} alt="first slide" />
              <Carousel.Caption>
                <h3>छठ पर्व करते छठव्रती !</h3>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img className="d-block " src={slide04} alt="first slide" />
              <Carousel.Caption>
                <h3>छठ पूजा के दौरान पूजा करती महिला!</h3>
              </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
              <img className="d-block " src={slide05} alt="first slide" />
              <Carousel.Caption>
                <h3>उत्सव का स्वरूप !</h3>
              </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
              <img className="d-block " src={slide06} alt="first slide" />
              <Carousel.Caption>
                <h3>उषा अर्घ्य !</h3>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img className="d-block " src={slide07} alt="first slide" />
              <Carousel.Caption>
                <h3>संध्या अर्घ्य !</h3>
              </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
              <img className="d-block " src={slide08} alt="first slide" />
              <Carousel.Caption>
                <h3>सूर्य देवता की की आराधना !</h3>
              </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
              <img className="d-block " src={slide09} alt="first slide" />
              <Carousel.Caption>
                <h3>प्रसाद ! ( ठेकुआ )</h3>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img className="d-block " src={slide10} alt="first slide" />
              <Carousel.Caption>
                <h3>दौरा घाट ले जाते हुए परिजन !</h3>
              </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
              <img className="d-block " src={slide11} alt="first slide" />
              <Carousel.Caption>
                <h3> छठ पर्वती</h3>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </div>
      </div>
    </>
  );
}

export default Carousel_page;
