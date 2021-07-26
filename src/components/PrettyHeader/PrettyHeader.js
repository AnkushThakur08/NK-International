import React from "react";
import "./PrettyHeader.css";

const PrettyHeader = ({ title, subtext }) => {
  return (
    <div
      className="pretty-header d-block justify-content-center justify-content-md-start d-md-block"
      style={{ display: "inline-block" }}
    >
      <div
        style={{ display: "inline-block" }}
        className="text-center d-flex justify-content-center"
      >
        <h5 className="pretty-text text-center fs-3 mb-0">
          {title}
          <div
            className="bottom-style"
            style={{
              backgroundColor: "#FFBC00",
              height: "4px",
              marginTop: "-6px",
            }}
          ></div>
        </h5>
      </div>
      <p
        className=""
        style={{
          color: "#384355",
          textAlign: "center",
          fontStyle: "Poppins",
          fontWeight: "500",
          fontSize: "14px",
        }}
      >
        {subtext}
      </p>
    </div>
  );
};
export default PrettyHeader;
