//Modules
import React from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";
//Components
import Product from "./Product";
import ProductSkeleton from "./ProductSkeleton";
import Pagination from "../Pagination";
const ProductList = () => {
  const { products, isLoading } = useSelector((state) => state.productReducer);

  return (
    <div>
      <Container>
        <div className="gridFourColumn">
          {isLoading ? (
            Array.apply(null, Array(16)).map((x, i) => (
              <ProductSkeleton key={i} />
            ))
          ) : products.products.length > 0 ? (
            products.products.map((product, key) => (
              <Product
                key={key}
                random={key}
                price={product.price}
                name={product.name}
                slug={product.slug}
              />
            ))
          ) : (
            <div className="noProduct">No Product Found</div>
          )}
        </div>
      </Container>
      <Pagination />
    </div>
  );
};

export default ProductList;

const Container = styled.div`
  padding: 20px;
  margin-bottom: 32px;
  background-color: var(--main-white-color);
  .gridFourColumn {
    display: grid;
    grid-template-columns: repeat(4, minmax(0, 124px));
    gap: 20px 24px;
  }
  .noProduct {
    grid-column: span 4 / span 4;
    text-align: center;
    color: var(--main-dark-color);
  }
`;
