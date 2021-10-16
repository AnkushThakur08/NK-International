import React from "react";

import Base from "../components/Base/Base";
import Carousel from "../components/Carousel/Carousel";
import { CollectionCard } from "../components/CollectionCard/CollectionCard";

// Assets
import menCollection from "../assets/men collection.jpg";
import womenCollection from "../assets/women collection.jpg";
import kidsCollection from "../assets/kids collection.jpg";
import img1 from "../assets/img1.jpg";
import img2 from "../assets/img2.jpg";
import img3 from "../assets/img3.jpg";
import PrettyHeader from "../components/PrettyHeader/PrettyHeader";
import ProductCard from "../components/ProductCard/ProductCard";

const products = [
  {
    name: "Men Classic t-shirt",

    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",

    price: "2000",

    stock: 200,

    category: "Men",
    color: ["red", "green", "yellow", "blue"],
    size: ["XS", "S", "M", "L", "XL"],
    images: [
      "https://source.unsplash.com/1600x900/?tshirt,men",
      "https://source.unsplash.com/1600x900/?tshirt,men",
      "https://source.unsplash.com/1600x900/?tshirt,men",
    ],
  },
  {
    name: "kids Classic t-shirt",

    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",

    price: "2000",

    stock: 200,

    category: "Men",
    color: ["red", "green", "yellow", "blue"],
    size: ["XS", "S", "M", "L", "XL"],
    images: [
      "https://source.unsplash.com/1600x900/?tshirt,kids",
      "https://source.unsplash.com/1600x900/?tshirt,kids",
      "https://source.unsplash.com/1600x900/?tshirt,kids",
    ],
  },
  {
    name: "Women Classic t-shirt",

    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",

    price: "2000",

    stock: 200,

    category: "Men",
    color: ["red", "green", "yellow", "blue"],
    size: ["XS", "S", "M", "L", "XL"],
    images: [
      "https://source.unsplash.com/1600x900/?tshirt,women",
      "https://source.unsplash.com/1600x900/?tshirt,women",
      "https://source.unsplash.com/1600x900/?tshirt,women",
    ],
  },
  {
    name: "Men Classic t-shirt",

    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",

    price: "2000",

    stock: 200,

    category: "Men",
    color: ["red", "green", "yellow", "blue"],
    size: ["XS", "S", "M", "L", "XL"],
    images: [
      "https://source.unsplash.com/1600x900/?tshirt,men",
      "https://source.unsplash.com/1600x900/?tshirt,men",
      "https://source.unsplash.com/1600x900/?tshirt,men",
    ],
  },
];

const Home = () => {
  const FeaturedCollectionSection = () => {
    return (
      <div className="mt-4">
        <PrettyHeader title="Trending Now" />
        <div className="d-flex justify-content-evenly flex-row flex-wrap">
          <CollectionCard image={img1} />

          <CollectionCard image={img2} />

          <CollectionCard image={img3} />
        </div>
      </div>
    );
  };

  const FeaturedProductsSection = () => {
    return (
      <div className="container my-5 justify-content-center d-flex flex-column">
        <PrettyHeader title="Featured Products" />

        <div className="row d-flex justify-content-center justify-content-md-between my-2 mx-1 align-items-baseline"></div>
        <div className="row my-3">
          <div className="col-6 col-sm-6 col-md-3 ">
            <ProductCard
              imageUrl={menCollection}
              category="Men"
              title="Yellow T-shirt"
              price="2000"
            />
          </div>
          <div className="col-6 col-sm-6 col-md-3 ">
            <ProductCard
              imageUrl={womenCollection}
              category="Women"
              title="Black T-shirt"
              price="2000"
            />
          </div>
          <div className="col-6 col-sm-6 col-md-3 ">
            <ProductCard
              imageUrl={kidsCollection}
              category="Kids"
              title="White T-shirt"
              price="2000"
            />
          </div>
          <div className="col-6 col-sm-6 col-md-3 ">
            <ProductCard
              imageUrl={menCollection}
              category="Men"
              title="Yellow T-shirt"
              price="2000"
            />
          </div>
        </div>
        <button
          type="button"
          className="btn btn-sm btn-outline-secondary show-btn align-self-center"
          href="/collection"
        >
          SHOW MORE
        </button>
      </div>
    );
  };

  return (
    <Base>
      <Carousel />
      <FeaturedCollectionSection />
      <FeaturedProductsSection />
    </Base>
  );
};

export default Home;
