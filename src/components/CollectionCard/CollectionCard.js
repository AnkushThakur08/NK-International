import React from "react";
import { Link } from "react-router-dom";
import "./CollectionCard.css";

export const CollectionCard = ({ image }) => {
  // <div className="card-body align-self-center text-black">Shop now</div>
  return (
    <Link id="collectioncard" className=" position-relative mt-3">
      <img
        src={image}
        style={{ width: "300px" }}
        className="rounded image"
        alt="men collection"
      />
    </Link>
  );
};
