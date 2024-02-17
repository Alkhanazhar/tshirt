import React from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import { corousel } from "../../utils/constants";

const responsive = {
  0: { items: 1 },
  568: { items: 1 },
  1024: { items: 1 },
};

const items = corousel.map((item) => (
  <img
    src={item}
    role="presentation"
    className="cursor-pointer h-[70vh] -z-30 w-full hover:opacity-70 duration-500 object-cover"
  />
));

const Carousel = () => (
  <div className="-z-10">
    <AliceCarousel
      mouseTracking
      items={items}
      responsive={responsive}
      controlsStrategy="alternate"
      disableButtonsControls
      autoPlay
      autoPlayInterval={3000}
      infinite
      className="relative"
    />
  </div>
);
export default Carousel;
