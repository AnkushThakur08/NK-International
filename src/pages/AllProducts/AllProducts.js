import React, { useState } from "react";

// Components
import Base from "../../components/Base/Base";
import SizeFilter from "../../components/SizeFilter/SizeFilter";
import CategoryFilter from "../../components/CategoryFilter/CategoryFilter";
import PriceFilter from "../../components/PriceFilter/PriceFilter";
import ProductCard from "../../components/ProductCard/ProductCard";
import productImg1 from "../../assets/men collection.jpg";
import productImg2 from "../../assets/kids collection.jpg";
import productImg3 from "../../assets/women collection.jpg";
import filterIcon from "../../assets/filterSortIcon.svg";

const AllProducts = () => {
  const [products, setProducts] = useState([]);
  const [filterData, setFilterData] = useState({
    filter: {
      type: "Category",
      filters: ["Denim", "Jacket", "T-Shirt", "Trousers", "Jeans"],
    },
  });

  const [error, setError] = useState(false);

  const { filter } = filterData;

  const FilterSortCollapsed = () => {
    return (
      <div>
        <div className="d-md-none d-flex col-md-3 justify-content-center align-items-center">
          <button
            className="btn d-flex align-items-center"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapsedFilters"
            aria-expanded="false"
            aria-controls="collapsedFilters"
            style={{
              color: "#384355",
              fontFamily: "Montserrat",
              fontSize: "18px",
              fontWeight: "400",
            }}
          >
            <img src={filterIcon} alt={filter} className="p-2" />
            FILTER | SORT
          </button>
        </div>
      </div>
    );
  };

  return (
    <Base>
      <div className="container my-4">
        <div className="row d-flex justify-content-center justify-content-md-between my-2 mx-1 align-items-baseline">
          <div className="col-12 col-md-3 pretty-text-left"></div>
          {/* Filter on Mobile Screen (ONLY FOR MOBILE SCREEN) */}
          <FilterSortCollapsed />
        </div>
        <div className="col-12 col-md-3 collapse" id="collapsedFilters">
          <CategoryFilter filterType={filter.type} filters={filter.filters} />
          <SizeFilter filterType="Sizes" />
          <PriceFilter />
        </div>

        {/* Filter on Large & Medium Screen (D-none at Mobile Screen) */}
        <div className="row my-3">
          <div className="d-none d-md-block col-12 col-md-3">
            <CategoryFilter filterType={filter.type} filters={filter.filters} />
            <SizeFilter filterType="Sizes" />
            <PriceFilter />
          </div>

          {/* looping and Product Structure */}
          <div className="col-12 col-md-9">
            <div className="row">
              {products.map((product, i) => {
                return (
                  <div key={i} className="col-6 col-sm-6 col-md-4">
                    <ProductCard
                      imageUrl={product.imageUrl}
                      category={product.category}
                      title={product.title}
                      price={product.price}
                    />
                  </div>
                );
              })}

              {/* Product Card will Display from here */}
              {/* Row-1  */}

              <div className="col-6 col-sm-6 col-md-4">
                <ProductCard
                  discount="60%"
                  imageUrl={productImg1}
                  category="loafers"
                  title="Bally black lione lantel"
                  price="2000"
                />
              </div>

              <div className="col-6 col-sm-6 col-md-4">
                <ProductCard
                  discount="60%"
                  imageUrl={productImg2}
                  category="loafers"
                  title="Bally black lione lantel"
                  price="2000"
                />
              </div>

              <div className="col-6 col-sm-6 col-md-4">
                <ProductCard
                  discount="60%"
                  imageUrl={productImg3}
                  category="loafers"
                  title="Bally black lione lantel"
                  price="2000"
                />
              </div>

              {/* Row-2 */}

              <div className="col-6 col-sm-6 col-md-4">
                <ProductCard
                  discount="60%"
                  imageUrl={productImg1}
                  category="loafers"
                  title="Bally black lione lantel"
                  price="2000"
                />
              </div>

              <div className="col-6 col-sm-6 col-md-4">
                <ProductCard
                  discount="60%"
                  imageUrl={productImg2}
                  category="loafers"
                  title="Bally black lione lantel"
                  price="2000"
                />
              </div>

              <div className="col-6 col-sm-6 col-md-4">
                <ProductCard
                  discount="60%"
                  imageUrl={productImg3}
                  category="loafers"
                  title="Bally black lione lantel"
                  price="2000"
                />
              </div>

              {/* Row-3 */}

              <div className="col-6 col-sm-6 col-md-4">
                <ProductCard
                  discount="60%"
                  imageUrl={productImg1}
                  category="loafers"
                  title="Bally black lione lantel"
                  price="2000"
                />
              </div>

              <div className="col-6 col-sm-6 col-md-4">
                <ProductCard
                  discount="60%"
                  imageUrl={productImg2}
                  category="loafers"
                  title="Bally black lione lantel"
                  price="2000"
                />
              </div>

              <div className="col-6 col-sm-6 col-md-4">
                <ProductCard
                  discount="60%"
                  imageUrl={productImg3}
                  category="loafers"
                  title="Bally black lione lantel"
                  price="2000"
                />
              </div>

              {/* Row-4 */}

              <div className="col-6 col-sm-6 col-md-4">
                <ProductCard
                  discount="60%"
                  imageUrl={productImg1}
                  category="loafers"
                  title="Bally black lione lantel"
                  price="2000"
                />
              </div>

              <div className="col-6 col-sm-6 col-md-4">
                <ProductCard
                  discount="60%"
                  imageUrl={productImg2}
                  category="loafers"
                  title="Bally black lione lantel"
                  price="2000"
                />
              </div>

              <div className="col-6 col-sm-6 col-md-4">
                <ProductCard
                  discount="60%"
                  imageUrl={productImg3}
                  category="loafers"
                  title="Bally black lione lantel"
                  price="2000"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Base>
  );
};

export default AllProducts;
