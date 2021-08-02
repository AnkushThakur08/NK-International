import React, { useState } from "react";
import DropIcon from "../../assets/dropdown-icon.svg";

const SizeFilter = ({ filterType }) => {
  const [sizes, setSizes] = useState(["XS", "S", "M", "L", "XL"]);

  return (
    <div
      id="FilterCollection"
      className="mt-4"
      style={{ border: "2px solid #c9cdcf", borderRadius: "4px" }}
    >
      <div
        className="d-flex justify-content-between btn ml-1"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target={`#filter${2}`}
        aria-expanded="false"
        aria-controls={`filter${2}`}
      >
        <div
          style={{
            textTransform: "uppercase",
            fontSize: "15px",
            fontFamily: "Libre Baskerville",
            fontWeight: "700",
            color: "#384355",
            letterSpacing: "1.08px",
          }}
        >
          {filterType}
        </div>
        <img src={DropIcon} alt="" />
      </div>
      <div id={`filter${2}`} className="collapse show m-2">
        <div className="d-flex flex-wrap justify-content-center">
          {sizes.map((size, i) => {
            return (
              <span
                key={i}
                className="py-1 px-2 rounded m-1 btn customButton"
                style={{
                  backgroundColor: "#FBF7F7",
                  fontFamily: "Montserrat",
                  fontSize: "15px",
                  border: "1px solid #a0a6ac",
                }}
              >
                {size}
              </span>
            );
          })}
        </div>
      </div>
    </div>
  );
};
export default SizeFilter;
