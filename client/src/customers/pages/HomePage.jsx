import React from "react";
import Navigation from "../components/Navbar";
import Carousel from "../components/Carousel.";
import HomeSectionCarousel from "../components/HomeSectionCarousel";
import { corousel } from "../../utils/constants";
import Footer from "../components/Footer";

const HomePage = () => {
  return (
    <>
      <Navigation />
      <Carousel />
      <HomeSectionCarousel data={corousel} heading={"T-shirts"} />
     
      <Footer />
    </>
  );
};

export default HomePage;
