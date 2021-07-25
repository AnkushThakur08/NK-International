import React from "react";

import Base from "../components/Base/Base";
import Carousel from "../components/Carousel/Carousel";
import { CollectionCard } from "../components/CollectionCard/CollectionCard";

// Assets
import menCollection from "../assets/men collection.jpg";
import womenCollection from "../assets/women collection.jpg";
import kidsCollection from "../assets/kids collection.jpg";
import PrettyHeader from "../components/PrettyHeader/PrettyHeader";
import ProductCard from "../components/ProductCard/ProductCard";

const Home = () => {
  const FeaturedCollectionSection = () => {
    return (
      <div className="mt-4">
        <PrettyHeader title="Featured Collection" />
        <div className="d-flex justify-content-evenly flex-row flex-wrap">
          <CollectionCard image={menCollection} />
          <CollectionCard image={womenCollection} />
          <CollectionCard image={kidsCollection} />
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
