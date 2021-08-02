import React, { useState } from "react";
import Base from "../components/Base/Base";

import { CgShoppingBag } from "react-icons/cg";
import { ToggleButton, ToggleButtonGroup } from "@material-ui/lab";
import QuantityInput from "../components/QuantityInput/QuantityInput";
import ProductImageShowcase from "../components/ProductImageShowcase/ProductImageShowcase";

const Product = () => {
  const [product, setProduct] = useState({
    productId: "j3z7Md6BYE4c",
    id: 6,
    name: "productName",
    category: "MEN",

    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.`,

    articleNo: 34,
    mrp: 400,

    colors: ["red", "blue", "green", "yellow"],
    sizes: ["XS", "S", "M", "L", "XL"],
    updatedAt: "2020-07-29T04:42:30.373Z",
    createdAt: "2020-07-29T04:42:30.373Z",
    pics: ["sdfsd.png", "dsdfsf.png"],
    videos: ["Sdfsf.mp4", "sdfsfsdf.mkv"],
  });

  const {
    productId,
    id,
    name,
    category,

    description,

    colors,
    sizes,
  } = product;

  const SizeIcon = ({ size }) => {
    return (
      <ToggleButton
        value={size}
        className="me-3 rounded size-btn"
        style={{
          width: "36px",
          height: "36px",
          border: "none",
          backgroundColor: "#fff",
        }}
      >
        {size}
      </ToggleButton>
    );
  };

  const ColorIcon = ({ color }) => {
    return (
      <ToggleButton
        value={color}
        className="me-2 rounded-circle colr-btn"
        style={{ backgroundColor: color, width: "24px", height: "24px" }}
      ></ToggleButton>
    );
  };

  const ColorPicker = () => {
    return (
      <div className="color-picker mt-2">
        <ToggleButtonGroup value="" exclusive onChange={() => {}}>
          {colors.map((color, i) => {
            return (
              <div key={i}>
                <ColorIcon color={color} />
              </div>
            );
          })}
        </ToggleButtonGroup>
      </div>
    );
  };

  const SizePicker = () => {
    return (
      <div className="size-picker mt-2">
        <ToggleButtonGroup value="" exclusive onChange={() => {}}>
          {sizes.map((size, i) => {
            return (
              <div key={i}>
                <SizeIcon size={size} />
              </div>
            );
          })}
        </ToggleButtonGroup>
      </div>
    );
  };

  return (
    <div id="ProductInfo">
      <Base>
        <div className="container justify-content-around pb-5">
          <div className="row justify-content-around px-md-5 px-0">
            <div className="col-12 mt-md-3 col-md-4 mt-0 px-0">
              <ProductImageShowcase />
            </div>
            <div className="col-12 mt-md-3 col-md-8 mt-3 ps-md-5 ps-3">
              <div className="d-flex pl-md-3 flex-column justify-content-center">
                <div
                  className="product-title font-weight-bold mt-2"
                  style={{
                    fontSize: "24px",
                    letterSpacing: "0.86px",
                    color: "#051220",
                    textTTransform: "capitalize",
                  }}
                >
                  Men Classic t-shirt
                </div>
                <div
                  className="product-price mt-3"
                  style={{
                    fontSize: "20px",
                    letterSpacing: "0.72px",
                    color: "#073260",
                  }}
                >
                  ₹ 700
                </div>
                <div className="product-description mt-3">
                  <div
                    className="text"
                    style={{
                      fontWeight: "600",
                      fontSize: "16px",
                      letterSpacing: "0.43px",
                    }}
                  >
                    DESCRIPTION
                  </div>
                  <div
                    className="subtext mt-2"
                    style={{ fontSize: "16px", lineHeight: "18px" }}
                  >
                    {description}
                  </div>
                </div>

                <div
                  className="product-category mt-3"
                  style={{
                    fontSize: "14px",
                    fontWeight: "600",
                    letterSpacing: "0.43px",
                    color: "#929292",
                    textTransform: "uppercase",
                  }}
                >
                  MEN
                </div>
                <div className="product-color mt-3">
                  <div
                    className="text"
                    style={{
                      letterSpacing: "0.43px",
                      fontWeight: "600",
                      fontSize: "12px",
                    }}
                  >
                    COLORS
                  </div>
                  {/* color Picker */}
                  <div className="color-options">
                    <ColorPicker />
                  </div>
                </div>
                <div className="product-size mt-3">
                  <div
                    className="text"
                    style={{
                      letterSpacing: "0.43px",
                      fontWeight: "500",
                      fontSize: "12px",
                    }}
                  >
                    SIZES
                  </div>
                  {/* size Picker */}

                  <div className="size-options">
                    <SizePicker />
                  </div>
                </div>

                <div className="product-quantity mt-3">
                  <div
                    className="text"
                    style={{
                      letterSpacing: "0.43px",
                      fontWeight: "600",
                      fontSize: "12px",
                    }}
                  >
                    QUANTITY
                  </div>
                  {/* quantity Picker */}
                  <div className="quantity-picker">
                    <QuantityInput />
                  </div>
                  {/* Action Picker */}
                  <div className="action-btns d-flex justify-content-start mt-4">
                    <button
                      className="btn btn-add-cart d-flex px-3 pt-2 me-4 justify-content-center"
                      style={{
                        color: "#384355",
                        letterSpacing: "0.43px",
                        border: "1px solid #384355",
                        fontSize: "12px",
                        fontWeight: "500",
                      }}
                    >
                      <span className="me-2">
                        <CgShoppingBag />
                      </span>
                      ADD TO MY BAG
                    </button>
                    <button
                      className="btn text-white ml-3"
                      style={{
                        letterSpacing: "0.43px",
                        backgroundColor: "#384355",
                        fontSize: "12px",
                        fontWeight: "500",
                      }}
                    >
                      BUY NOW
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Base>
    </div>
  );
};

export default Product;
