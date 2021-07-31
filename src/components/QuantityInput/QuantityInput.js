import React, { useState } from "react";
import "./QuantityInput.css";

const QuantityInput = () => {
  const [quantity, setQuantity] = useState({ value: 1 });

  const decrease = () => {
    if (quantity.value >= 2) {
      setQuantity({ value: quantity.value - 1 });
    }
  };

  const increase = () => {
    setQuantity({ value: quantity.value + 1 });
  };

  const disabledStyle = () => {
    if (quantity.value === 1) {
      return {
        opacity: 0.2,
      };
    } else {
      return {
        opacity: 1,
      };
    }
  };

  return (
    <div
      id="QuantityInput"
      className="def-number-input number-input d-flex align-items-center mt-2 mb-0"
    >
      <button
        onClick={decrease}
        className="minus rounded me-2 ps-0"
        style={disabledStyle()}
      ></button>
      <input
        className="quantity rounded me-2"
        name="quantity"
        value={quantity.value}
        onChange={() => {}}
        type="number"
      />
      <button onClick={increase} className="plus rounded"></button>
    </div>
  );
};

export default QuantityInput;
