import React from "react";
import menCollection from "../../assets/men collection.jpg";

const CartCard = ({ name, size, quantity, price }) => {
  const DeleteIcon = () => {
    return (
      <button className="btn d-flex align-items-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="red"
          className="bi bi-trash"
          viewBox="0 0 16 16"
        >
          <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z" />
          <path
            fill-rule="evenodd"
            d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"
          />
        </svg>
      </button>
    );
  };

  return (
    <div className="bg-white m-4 p-4 border">
      <div className="row rounded">
        <div className="col-2 ">
          <img
            className="w-100 overflow hidden"
            src={menCollection}
            alt="product"
          />
        </div>
        <div className="col-8">
          <div
            className="name fs-4"
            style={{
              fontFamily: "Libra",
              fontSize: "24px",
              letterSpacing: "0.86px",
              color: "#051220",
            }}
          >
            {name}
          </div>
          <div className="details d-flex justify-content-between align-items-center">
            <div className="size" style={{ fontFamily: "Libra" }}>
              <span
                style={{
                  fontSize: "13px",
                  fontWeight: "600",
                  letterSpacing: "0.43px",
                  color: "grey",
                }}
              >
                Size:{" "}
              </span>
              {size}
            </div>
            <div className="quantity" style={{ fontFamily: "Libra" }}>
              <span
                style={{
                  fontSize: "13px",
                  fontWeight: "600",
                  letterSpacing: "0.43px",
                  color: "grey",
                }}
              >
                Qty:{" "}
              </span>
              {quantity}
            </div>
            <DeleteIcon />
          </div>
          <div
            className="price"
            style={{
              fontSize: "20px",
              letterSpacing: "0.86px",
              color: "#051220",

              fontFamily: "Libra",
            }}
          >
            ₹ {price}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartCard;
