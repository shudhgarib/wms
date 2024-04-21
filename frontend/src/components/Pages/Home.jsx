import React from "react";
import Carousel_page from "./Carousel_page";
import WelcomeText from "./Subpage/WelcomeText";
import Options from "../menu/Options";

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

function Home() {
  return (
    <>
      <Options />
      <Carousel_page />
      <WelcomeText />
    </>
  );
}

export default Home;
