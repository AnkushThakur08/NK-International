import React, { useState } from "react";
import { Slider } from "@material-ui/core";
import DropIcon from "../../assets/dropdown-icon.svg";

const PriceSlider = () => {
  const [priceRange, setPriceRange] = useState([1000, 20000]);
  const [filterRange, setFilterRange] = useState([
    priceRange[0],
    priceRange[1],
  ]);

  const handleChange = (event, value) => {
    event.preventDefault();

    setFilterRange(value);
  };

  return (
    <div
      id="FilterCollection"
      className="mt-4"
      style={{
        border: "2px solid #c9cdcf",
        borderRadius: "4px",
      }}
    >
      <div
        className="d-flex justify-content-between btn ml-1"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target={`#filter${1}`}
        aria-expanded="false"
        aria-controls={`filter${1}`}
      >
        <div
          style={{
            textTransform: "uppercase",
            fontSize: "15px",
            fontFamily: "Libre Baskerville",
            fontWeight: "700",
            letterSpacing: "1.08px",
            color: "#384355",
          }}
        >
          Price Range
        </div>
        <img src={DropIcon} alt="" />
      </div>
      <div id={`filter${1}`} className="collapse show m-2">
        <div className="d-flex justify-content-between">
          <span
            className="py-1 px-3 rounded"
            style={{
              backgroundColor: "#384355",
              fontFamily: "Montserrat",
              fontSize: "11px",
              color: "#ffffff",
            }}
          >
            ₹ {filterRange[0]}
          </span>
          <span
            className="py-1 px-3 rounded"
            style={{
              backgroundColor: "#384355",
              fontFamily: "Montserrat",
              fontSize: "11px",
              color: "#ffffff",
            }}
          >
            ₹ {filterRange[1]}
          </span>
        </div>
        <div className="m-2">
          <Slider
            value={filterRange}
            min={priceRange[0]}
            max={priceRange[1]}
            valueLabelDisplay="auto"
            onChange={handleChange}
            aria-labelledby="range-slider"
            style={{ color: "#333333" }}
          />
        </div>
      </div>
    </div>
  );
};

export default PriceSlider;
