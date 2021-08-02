import React from "react";

const ProductCard = ({
  imageUrl,
  category = "NA",
  title = "NA",
  price = "NA",
}) => {
  return (
    <a id="product-card" href="/product" className="btn text-start rounded-3">
      <div className="card mt-1" style={{ border: "none" }}>
        <img src={imageUrl} className="card-img-top" alt="product" />
        <div className="card-body p-1 ps-2">
          <p
            className="card-text my-1 card-category"
            style={{
              color: "#929292 !important",
              fontSize: "11px",

              letterSpacing: "0.32px",
              fontWeight: "500",
            }}
          >
            <small className="text-muted">{category.toUpperCase()}</small>
          </p>
          <h5
            className="card-title my-1 card-title"
            style={{
              fontWeight: 600,

              fontSize: "13px",
              letterSpacing: "0.58px",
              color: "#384355 !important",
              textTransform: "capitalize",
            }}
          >
            {title}
          </h5>
          <p
            className="card-text my-1 card-price"
            style={{
              letterSpacing: "0.58px",
              color: "#000000",
              fontWeight: "500",
            }}
          >
            ₹ {price}
          </p>
        </div>
      </div>
    </a>
  );
};
export default ProductCard;
