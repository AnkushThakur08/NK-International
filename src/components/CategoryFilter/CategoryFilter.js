import React from "react";

import DropDown from "../../assets/dropdown-icon.svg";
import "./CategoryFilter.css";

const CategoryFilter = ({ filterType, filters }) => {
  return (
    <div
      id="FilterCollection"
      className="mt-4 FilterCollection"
      style={{
        border: "2px solid #c9cdcf",
        borderRadius: "4px",
      }}
    >
      <div
        className="d-flex justify-content-between btn ml-1"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target={`#filter${filterType}`}
        aria-expanded="false"
        aria-controls={`filter${filterType}`}
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
          {filterType}
        </div>

        <img src={DropDown} alt="" />
      </div>
      {filters.map((filter, i) => {
        return (
          <div
            key={i}
            id={`filter${filterType}`}
            className="collapse show mx-2 my-2"
          >
            <div className="form-check ms-2">
              <input
                className="form-check-input largerCheckbox"
                type="checkbox"
                value={filter}
                id={`${filter}`}
              />
              <label
                className="form-check-label my-1 ms-1 largerCheckbox-label"
                htmlFor={`${filter}`}
                style={{ fontFamily: "Montserrat" }}
              >
                {filter}
              </label>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default CategoryFilter;
