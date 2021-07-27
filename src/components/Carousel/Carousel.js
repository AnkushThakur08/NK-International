import React from "react";
// import Banner from "../../assets/banner5.jpg";
// import Banner2 from "../../assets/banner7.jpg";

import Banner1 from "../../assets/BannerImage1.webp";
import Banner2 from "../../assets/BannerImage2.webp";
import Banner3 from "../../assets/Banner3.jpg";

const Carousel = () => {
  return (
    <div
      id="carouselExampleIndicators"
      className="carousel slide"
      data-bs-ride="carousel"
    >
      {/* Carousel Indicators */}
      <div className="carousel-indicators">
        <button
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide-to="0"
          className="active"
          aria-current="true"
          aria-label="Slide 1"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide-to="1"
          aria-label="Slide 2"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide-to="2"
          aria-label="Slide 3"
        ></button>
      </div>

      {/* Carousel Main Content */}
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img src={Banner1} className="d-block w-100" alt="banner" />
        </div>
        <div className="carousel-item ">
          <img src={Banner2} className="d-block w-100" alt="banner2" />
        </div>
        <div className="carousel-item">
          <img src={Banner3} className="d-block w-100" alt="banner" />
        </div>
      </div>
    </div>
  );
};

export default Carousel;
