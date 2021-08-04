import React from "react";
import Base from "../components/Base/Base";
import CartCard from "../components/CartCard/CartCard";

const Cart = () => {
  return (
    <Base>
      <div className="cart container">
        <div className="row">
          {/* Product section */}
          <div className="col-md-7 col-12">
            <CartCard
              name="Men classic t-shirt"
              size="XL"
              quantity="1"
              price="800"
            />
            <CartCard
              name="Men classic t-shirt"
              size="XL"
              quantity="1"
              price="800"
            />
            <CartCard
              name="Men classic t-shirt"
              size="XL"
              quantity="1"
              price="800"
            />
          </div>

          {/* Payment details section */}
          <div className="col-md-5 col-12">
            <div className="bg-white p-4 my-4 rounded border d-flex flex-column">
              <div
                className="head fs-4 border-bottom"
                style={{
                  fontFamily: "Libra",
                  fontSize: "24px",
                  letterSpacing: "0.86px",
                  color: "#051220",
                  fontWeight: "600",
                }}
              >
                Price Details
              </div>
              <div className="item-details d-flex justify-content-between px-4 my-2 pt-2">
                <div
                  className="fs-6"
                  style={{
                    fontWeight: "600",
                    letterSpacing: "0.43px",
                    color: "grey",
                  }}
                >{`Price (3 items)`}</div>
                <div
                  className="fs-5"
                  style={{ fontWeight: "600", fontFamily: "Libra" }}
                >
                  ₹2400
                </div>
              </div>
              <div className="item-details d-flex justify-content-between px-4 my-2">
                <div
                  className="fs-6"
                  style={{
                    fontWeight: "600",
                    letterSpacing: "0.43px",
                    color: "grey",
                  }}
                >
                  Discount
                </div>
                <div
                  className="fs-5 text-success"
                  style={{ fontWeight: "600", fontFamily: "Libra" }}
                >
                  - ₹0
                </div>
              </div>
              <div className="item-details d-flex justify-content-between px-4 my-2 pb-2 border-bottom">
                <div
                  className="fs-6"
                  style={{
                    fontWeight: "600",
                    letterSpacing: "0.43px",
                    color: "grey",
                  }}
                >
                  Delivery Charges
                </div>
                <div
                  className="fs-5"
                  style={{ fontWeight: "600", fontFamily: "Libra" }}
                >
                  Free
                </div>
              </div>
              <div className="item-details d-flex justify-content-between px-4 my-2 pb-2 border-bottom">
                <div
                  className="fs-5"
                  style={{
                    fontWeight: "600",
                    letterSpacing: "0.43px",
                  }}
                >
                  Total Amount
                </div>
                <div
                  className="fs-5"
                  style={{ fontWeight: "600", fontFamily: "Libra" }}
                >
                  ₹2,400
                </div>
              </div>
              <button
                style={{
                  fontSize: "20px",
                  letterSpacing: "1.5px",
                  fontFamily: "Libra",
                }}
                className="btn btn-success my-4"
              >
                Proceed to Checkout
              </button>
            </div>
          </div>
        </div>
      </div>
    </Base>
  );
};

export default Cart;
